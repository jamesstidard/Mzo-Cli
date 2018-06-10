# Uninstall
The Monzo CLI consists of two parts which you will want to remove when
uninstalling the application. These are the binary itself along with
application data (which stores your encrypted credentials and personal
configurations).

## Removing the Application
Removing the binary depends on which method you used to initally install
the application:

```bash
# Homebrew
$ brew uninstall monzo-cli

# Snap
$ snap remove monzo-cli
```

## Removing Application Data
Application data is stored in a hidden folder in your home directory
named `.monzo`. This can be removed from your terminal with:

```bash
$ rm -rf ~/.monzo
```