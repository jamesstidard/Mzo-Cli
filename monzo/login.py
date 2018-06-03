import os
import sys
import secrets
import asyncio

from asyncio import FIRST_COMPLETED
from contextlib import redirect_stdout

import toml
import maya
import click
import aioconsole

import monzo

from monzo.utils import ENV_SETTER
from monzo.utils.crypto import encrypt, decrypt
from monzo.utils.oauth_server import OAuthServer


SERVER_KILL_PROMPT = """\
Your browser-of-choice should be opening ready to request authentication for this \
command line application to access your Monzo account.

If your browser has not opened, please manually browse to this link:

{url:}

Or hit [Enter] to terminate this process
"""

PASSWORD_PROMPT = """\
We want to make sure anyone using your machine can not just send themselves all your money, \
let's add a password. Make it strong.
"""


@monzo.command(short_help='Authorization & session management')
@click.option('-f', '--format', 'fmt', type=click.Choice(['raw', 'cmd']), default='cmd', help='Chose the format the access token is return in.')
@click.option('--reauthorize', is_flag=True, help='Reauthorize the application\'s access to your Monzo account.')
@click.pass_context
async def login(ctx, reauthorize, fmt):
    """
    Manages authorizing this application to access your Monzo account as well as
    creating authenticated sessions.

    This function should be called within your shell's eval statement for the login session
    to be persisted.

    \b
    Authorization:

    The first time this command is called (or when it is subsequently called with the
    --reauthorize flag), the application request access to your Monzo account via OAuth.
    This will involve navigating you to the Monzo website to grant this application
    permissions to access your account by providing this application with a application-specific
    access token for your account.

    Once granted access, you will be prompted for a password to encrypt the access token
    so it can be stored securely on your machine and prevent anyone with access to your machine
    being able to have unfettered access to your Monzo account.

    \b
    Authenticated Sessions:

    After the application has been authorized to access your Monzo accounts calls to
    this command will give the ability to create a persisted login session within your
    terminal. This means that your password will not be needed for all commands executed
    within that session. This is done by decrypting the access token with your provided
    password and storing it in memory as a environment variable on the machine (aptly named:
    MONZO_ACCESS_TOKEN).

    For convince this command will return the required shell command to set the environment
    variable (e.g. `export MONZO_ACCESS_TOKEN="xxx"`) which means you can call this function
    within your shell's eval command so the above statement is executed for you and the
    environment variable set. However you may be using a shell that doesn't use the above syntax
    or want to manage the token yourself, in which case providing the `--format raw` will simply
    return the value of the access token instead of the shell command.
    """
    credentials_fp = os.path.join(ctx.obj.app_dir, 'credentials')
    have_credentials = os.path.isfile(credentials_fp)

    if reauthorize or not have_credentials:
        access_data = await authorize(ctx)
        default_account = await select_default_account(ctx, access_token=access_data['access_token'])

        click.echo(PASSWORD_PROMPT, err=True)
        encrypted_access_data = encrypt(toml.dumps(access_data).encode('utf-8'))

        os.makedirs(ctx.obj.app_dir, exist_ok=True)

        with open(os.path.join(ctx.obj.app_dir, 'credentials'), 'wb+') as fp:
            fp.write(encrypted_access_data)

        with open(os.path.join(ctx.obj.app_dir, 'config'), 'w+') as fp:
            toml.dump({'default': {'account_id': default_account['id']}}, fp)

        expires = maya.now().add(seconds=access_data['expires_in'])
        stderr_echo(f'Session Authenticated [expires: {expires.slang_time()}]', color='green')
    else:
        plain_text = decrypt(credentials_fp)
        access_data = toml.loads(plain_text.decode('utf-8'))

    if fmt == 'raw':
        click.echo(access_data["access_token"])
    else:
        click.echo(ENV_SETTER.format(name='MONZO_ACCESS_TOKEN', value=access_data["access_token"]))


def stderr_echo(message, color=None, underline=False):
    """ All output needs to be over stderr for prompts to show in eval. """
    message = click.style(message, fg=color, underline=underline)
    with redirect_stdout(sys.stderr):
        click.echo(message=message)


async def authorize(ctx):
    nonce = secrets.token_urlsafe(32)
    server = OAuthServer(nonce=nonce, http_session=ctx.obj.http)

    click.launch(server.auth_request_url)

    pretty_url = click.style(server.auth_request_url, fg='blue', underline=True)
    stderr_echo(SERVER_KILL_PROMPT.format(url=pretty_url))

    await server.run()

    user_killed = asyncio.Task(aioconsole.ainput())
    got_access_token = asyncio.Task(server.access_token())

    completed, _ = await asyncio.wait([user_killed, got_access_token], return_when=FIRST_COMPLETED)

    if got_access_token in completed:
        return got_access_token.result()
    elif user_killed in completed:
        stderr_echo('Authentication Canceled', color='red')
        ctx.exit(0)
    else:
        stderr_echo('Error', color='red')
        ctx.exit(1)


async def select_default_account(ctx, *, access_token):
    url = 'https://api.monzo.com/accounts'
    headers = {'Authorization': f'Bearer {access_token}'}

    resp = await ctx.obj.http.get(url, headers=headers)
    accounts = (await resp.json())['accounts']
    accounts = [a for a in accounts if not a['closed']]

    if len(accounts) > 1:
        raise NotImplementedError('cant handle multiple accounts currently')
    else:
        return accounts[0]