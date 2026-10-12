# Web app

A Rails 8 web app on PostgreSQL, server-rendered, with sign-in and kinds
of user.

## Run it

It needs a PostgreSQL server running on this computer.

    bin/setup   # installs the gems, prepares the database with the test logins, and starts the app
    bin/dev     # starts it again, at http://localhost:3000

## Test logins, development only

Each person is one kind of user, and some pages are only for some kinds.
The People page, linked in the nav, is only for admins.

- admin: admin@example.com, password test-login-admin
- member: member@example.com, password test-login-member

Made by `db/seeds.rb`. Change them before anyone else uses the app.

## Emails

In development, every email the app sends is written to a file under
`tmp/mails/`, one file per address, instead of being sent. A password-reset
email's link opens the page that sets a new password.
