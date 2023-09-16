(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{206:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("h2",{attrs:{id:"initial-authorization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initial-authorization"}},[t._v("#")]),t._v(" Initial Authorization")]),t._v(" "),s("p",[t._v("Once you have installed the CLI, the first things you'll need to do is\nauthorize the application to have access to your Monzo account. Monzo\nhandles this using OAuth 2. You are probably familiar with this type of\nauthorization flow from websites that allow you to sign in using your\nexisting Facebook, Google, etc. accounts.")]),t._v(" "),s("p",[t._v("This CLI uses that same flow to authorize itself to access your Monzo account\nthe first time you try and login.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Due to the current limitations imposed on the Monzo Developer API,\nthere is an additional step that is required the first time you want to use\nthe Monzo CLI.")]),t._v(" "),s("p",[t._v("There is currently a limit on how many user's a single developer can have\nusing their applications. So to work around this, during the development of\nthis application, there is an extra step where you'll need to register as\na developer yourself. You can then become your own user.")]),t._v(" "),s("p",[t._v("You will be additionally guided through this step from the command-line\non invoking "),s("code",[t._v("eval $(mzo login)")]),t._v(" for the first time.")]),t._v(" "),s("p",[t._v("Later releases will remove this extra step, simplifying the initial login\nprocess.")])]),t._v(" "),s("p",[t._v("You should be able to call the command below to start the process and follow\nthe instructions provided in the prompt:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("eval")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("mzo login"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])])]),s("p",[t._v("At the end of this process you will have both authorized the application to\nhave access to your Monzo account as well as started your first\n"),s("RouterLink",{attrs:{to:"/docs/usage.html#Sessions"}},[t._v("login session")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"logins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logins"}},[t._v("#")]),t._v(" Logins")]),t._v(" "),s("p",[t._v("All commands through the CLI require your password in order to be executed -\nyou would have provided this during the initial authorization step of the\napplication. If you have not completed this step see "),s("RouterLink",{attrs:{to:"/docs/usage.html#Initial-Authorization"}},[t._v("Initial Authorization")]),t._v("\nbefore continuing.")],1),t._v(" "),s("h3",{attrs:{id:"one-off"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#one-off"}},[t._v("#")]),t._v(" One-off")]),t._v(" "),s("p",[t._v("If you call a command (such as displaying your balance with "),s("code",[t._v("mzo balance")]),t._v(")\nyou will be prompted for your password. You can simply provide the password\nand the command will complete.")]),t._v(" "),s("p",[t._v("Authenticating commands in this one-off style will be most convenient when\nyou just want to open the terminal and perform a single action on your account.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ mzo balance\nNo login session currently active.\n  You can authorize this one-off "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v("\n  by providing your password, or see\n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("mzo login --help"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" persisting\n  authentication between commands.\n\nPassword:\n+--------------------+---------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Name               "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Balance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+--------------------+---------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 💸 Current Account "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337.00")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 🎾 Disposable      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 💰 Total           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337.00")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+--------------------+---------+\n")])])]),s("h3",{attrs:{id:"sessions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sessions"}},[t._v("#")]),t._v(" Sessions")]),t._v(" "),s("p",[t._v("There will be times when you want to perform a number of commands without needing\nto provide your password for each command. For this the Monzo CLI provides login\nsessions.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# start login session providing your password")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("eval")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("mzo login"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\nPassword:\nLogin Session Active\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# invoke x number of commands")]),t._v("\n$ mzo balance\n+--------------------+---------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Name               "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Balance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+--------------------+---------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 💸 Current Account "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337.00")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 🎾 Disposable      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 💰 Total           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337.00")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+--------------------+---------+\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Log back out of the session.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Requiring commands to either use one-off authentication")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or a new login session to be started.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Sessions can also be ended by closing the")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# terminal window.")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("eval")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("mzo "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("logout")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\nLogin Session Ended\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("What's with the eval?")]),t._v(" "),s("p",[t._v("Sessions are managed by temporarily storing a decrypted access token in\nyour terminal session's environment variables. you can see this if you\nissue the "),s("code",[t._v("env")]),t._v(" command during a login session.")]),t._v(" "),s("p",[t._v("A command-line application can not set a environment variable directly in the\nshell session which invoked it. Instead, both "),s("code",[t._v("mzo login")]),t._v(" and "),s("code",[t._v("mzo logout")]),t._v("\nboth return commands for (un)setting the access token which can be automatically\nexecuted by the parent shell by wrapping it in its "),s("code",[t._v("eval")]),t._v(" function.")]),t._v(" "),s("p",[t._v("You'll be able to see this by calling these commands without the eval function:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ mzo login\nPassword:\nLogin Session Active\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MZO_ACCESS_TOKEN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxx.xxxxxxxxxxxxxxxxxxx.xxxxxxx"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This command is meant to be used with your shell's eval function.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run 'eval $(mzo login)' to sign into your Monzo account.")]),t._v("\n")])])]),s("p",[t._v("If your shell doesn't support that syntax ("),s("code",[t._v("bash")]),t._v(" and "),s("code",[t._v("fish")]),t._v(" do that I\nknow of), you can use the "),s("code",[t._v("--format raw")]),t._v(" option to handle setting the\n"),s("code",[t._v("MZO_ACCESS_TOKEN")]),t._v(" environment variable yourself. If you are not sure\nwhich shell you are running, it is probably bash.")])]),t._v(" "),s("h2",{attrs:{id:"balance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#balance"}},[t._v("#")]),t._v(" Balance")]),t._v(" "),s("p",[t._v("The balance command returns the current balance of your current account along\nwith the balance of all of your pots.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ mzo balance\n+--------------------+---------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Name               "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Balance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+--------------------+---------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 💸 Current Account "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337.00")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 🎾 Disposable      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 💰 Total           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337.00")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+--------------------+---------+\n")])])]),s("p",[t._v("For full documentation check out "),s("code",[t._v("mzo balance --help")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"transactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[t._v("#")]),t._v(" Transactions")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Work in progress. Available by setting "),s("code",[t._v("MZO_PRERELEASE=1")]),t._v(" in terminal session's\nenvironment variables.")])]),t._v(" "),s("p",[t._v("List historic transactions.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ mzo transactions\n+------------------+----------------------------------+----------+---------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Created          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Name                             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Amount   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Category      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+------------------+----------------------------------+----------+---------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".              "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".                              "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Sun "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" February  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" You Wish                         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" +100.00  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" General       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Sun "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" February  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Amazon                           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.99")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Shopping      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Mon "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" February  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Sainsbury's                      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24.61")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Groceries     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+------------------+----------------------------------+----------+---------------+\n")])])]),s("p",[t._v("For full documentation check out "),s("code",[t._v("mzo transactions --help")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"pots"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pots"}},[t._v("#")]),t._v(" Pots")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Work in progress. Available by setting "),s("code",[t._v("MZO_PRERELEASE=1")]),t._v(" in terminal session's\nenvironment variables.")])]),t._v(" "),s("p",[t._v("Transfer money between pots and your current account. You can directly transfer from\none pot to another, and "),s("code",[t._v("mzo")]),t._v(" will make to transfers "),s("code",[t._v("Pot 1 -> Current Account -> Pot 2")]),t._v(".")]),t._v(" "),s("p",[t._v("If only a "),s("code",[t._v("--from")]),t._v(" or "),s("code",[t._v("--into")]),t._v(" account is provided, the destination or source,\nrespectively, is assumed to be your current account.")]),t._v(" "),s("p",[t._v('The pot names provided are also fuzzy matched, so don\'t worry about getting exactly the\nright name for the pot. If you have a pot called "Bike Fund", for example, try\nsomething like '),s("code",[t._v("mzo pots move 100 --into bike")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ mzo pots move "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" --into disposable\n+--------------------+---------+---------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Name               "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   Final "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+--------------------+---------+---------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 💸 Current Account "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337.00")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1287.00")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 🎾 Disposable      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50.00")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+--------------------+---------+---------+\n\nConfirm this transfer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y/N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": y\nTransfer Successful\n")])])]),s("p",[t._v("For full documentation check out "),s("code",[t._v("mzo pots move --help")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"formats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formats"}},[t._v("#")]),t._v(" Formats")]),t._v(" "),s("p",[t._v("Most commands support different output formats like "),s("code",[t._v("human")]),t._v(", "),s("code",[t._v("csv")]),t._v(", and "),s("code",[t._v("json")]),t._v(".")]),t._v(" "),s("p",[t._v("Here's a example with the balance command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ mzo balance --format csv\nname,balance\nCurrent Account,1337.0\nDisposable,0.0\nTotal,1337.0\n\n$ mzo balance --format json\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Current Account"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balance"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337.0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Disposable"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balance"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Total"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balance"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337.0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("You can use this to create spreadsheets or to pipe into other applications like\n"),s("a",{attrs:{href:"https://stedolan.github.io/jq/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jq"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ mzo balance --format csv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ~/Desktop/balance.csv\n\n$ mzo balance --format json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.[] | select(.name == \"Total\") | .balance'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337.0")]),t._v("\n")])])]),s("p",[t._v("By default the formats for commands is set to "),s("code",[t._v("human")]),t._v(". You can change this by\nediting the "),s("code",[t._v("~/.mzo/config")]),t._v(" file and setting the default format to either\n"),s("code",[t._v("human")]),t._v(", "),s("code",[t._v("csv")]),t._v(" or "),s("code",[t._v("json")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("account_id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"acc_xxxxx"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("format")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"human"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("oauth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("client_id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oauth2client_xxxxx"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("client_secret")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxxxxxxxxx"')]),t._v("\n")])])]),s("p",[t._v("Check out the documentation for each command with "),s("code",[t._v("--help")]),t._v(" for full documentation.")])])}),[],!1,null,null,null);a.default=n.exports}}]);