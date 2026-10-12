# Web app

A Rails 8 web app on PostgreSQL, server-rendered, with sign-in.

## Run it

It needs a PostgreSQL server running on this computer.

    bin/setup   # installs the gems, prepares the database with the test login, and starts the app
    bin/dev     # starts it again, at http://localhost:3000

## Test login, development only

- Email address: person@example.com
- Password: test-login

Made by `db/seeds.rb`. Change both before anyone else uses the app.

## Emails

In development, every email the app sends is written to a file under
`tmp/mails/`, one file per address, instead of being sent. A password-reset
email's link opens the page that sets a new password.
