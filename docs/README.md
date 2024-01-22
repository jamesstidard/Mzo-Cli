---
home: true
title: mzo
lang: en-US
meta:
  - name: description
    content: A command-line interface between you and your Monzo account.
  - name: keywords
    content: Monzo Command-line Interface CLI
actions:
  - text: Get Started →
    link: /docs/
    type: primary
features:
- title: Human First
  details: The application should be easy to install and setup. While the commands and outputs should to be intuitive and even pretty at times.
- title: Secure
  details: Your credentials are encrypted and stored locally on your machine with the password of your choosing. While no data is sent to any parties other then your machine and Monzo.
- title: Convenient
  details: Login sessions allow all encompassed commands to be authenticated, or commands can be individually authenticated with a password on execution outside a login session.
footer: Everything Looks Better with a Footer
---

::: warning Disclosure
This is not an official command-line application from Monzo, but a
third-party, open-source one implemented using Monzo's Developer API.
:::

<!-- ::: danger Beta Software
The Monzo Developer API and this application are still under development
so both could break at any time.
::: -->

# Example Usage
```bash
$ eval $(mzo login)
Password: ********

$ mzo balance
+--------------------+---------+
| Name               | Balance |
+--------------------+---------+
| 💸 Current Account | 1337.00 |
| 🎾 Disposable      |    0.00 |
|                    |         |
| 💰 Total           | 1337.00 |
+--------------------+---------+

$ mzo pots move 50 --into disposable
+--------------------+---------+---------+
| Name               | Current |   Final |
+--------------------+---------+---------+
| 💸 Current Account | 1337.00 | 1287.00 |
| 🎾 Disposable      |    0.00 |   50.00 |
+--------------------+---------+---------+

Confirm this transfer [y/N]: y
Transfer Successful

$ eval $(mzo logout)
```
