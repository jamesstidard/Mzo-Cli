import os

from asyncio import Event

from urllib.parse import urlencode

import aiohttp

from sanic import Sanic
from sanic.response import json
from sanic.exceptions import Unauthorized

CLIENT_ID = os.environ['OAUTH_CLIENT_ID']
CLIENT_SECRET = os.environ['OAUTH_CLIENT_SECRET']
REDIRECT_URI = os.environ['OAUTH_REDIRECT_URL']
RESPONSE_TYPE = os.environ['OAUTH_RESPONSE_TYPE']


class OAuthServer:

    def __init__(self, *, nonce):
        self.app = Sanic(__name__, configure_logging=False)
        self.nonce = nonce
        self._oauth_complete = Event()
        self._access_token = None

        @self.app.route("/welcome-back")
        async def test(request):
            if request.args['state'][0] != self.nonce:
                raise Unauthorized("The nonce returned from Monzo does not match the one sent out.")

            async with aiohttp.ClientSession() as session:
                resp = await session.post('https://api.monzo.com/oauth2/token', data={
                    'grant_type': 'authorization_code',
                    'client_id': CLIENT_ID,
                    'client_secret': CLIENT_SECRET,
                    'redirect_uri': REDIRECT_URI,
                    'code': request.args['code'][0]})
                self._access_token = await resp.json()
                self._oauth_complete.set()
                return json('done')

    @property
    def auth_request_url(self):
        params = {
            'client_id': CLIENT_ID,
            'redirect_uri': REDIRECT_URI,
            'response_type': RESPONSE_TYPE,
            'state': self.nonce}
        return f'https://auth.monzo.com?{urlencode(params)}'

    async def run(self):
        await self.app.create_server(host='localhost', port=40004, access_log=False)

    async def access_token(self):
        await self._oauth_complete.wait()
        return self._access_token
