# Web app

A Rails 8 web app on SQLite, server-rendered, with sign-in and linked
accounts: people who sign in act for dependents who do not.

## Run it

    bin/setup   # installs the gems, prepares the database with the test logins, and starts the app
    bin/dev     # starts it again, at http://localhost:3000

## Test logins, development only

- person@example.com, password test-login
- carer@example.com, password test-login-carer

Both care for one dependent, Rosa Ortega: open Dependents in the nav. Made
by `db/seeds.rb`. Change them before anyone else uses the app.

## Emails

In development, every email the app sends is written to a file under
`tmp/mails/`, one file per address, instead of being sent. A password-reset
email's link opens the page that sets a new password.
