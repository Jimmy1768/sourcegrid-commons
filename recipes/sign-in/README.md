Sign-in for the web-app base: Rails' own sign-in and password reset, a signed-in nav, a test login, a local inbox.

# Sign-in

## What it is

Rails 8's own sign-in, as `bin/rails generate authentication` gives it in
Rails 8.1.4, laid on the web-app base and made a whole feature.

From the generator:

- `User`: an email address, stripped and lowercased, and a password kept by
  `has_secure_password` with bcrypt. `Session`: one for each signed-in
  browser. `Current`: the signed-in session and its user, for the length of
  a request.
- The `Authentication` concern, included in `ApplicationController`. Every
  page needs sign-in unless its controller calls
  `allow_unauthenticated_access`; only the sign-in and password-reset pages
  do. `/up`, Rails' health check, stays open.
- Signing in at `/session/new`; signing out with `DELETE /session`; and
  password reset, where `/passwords/new` sends an email whose link opens
  `/passwords/<token>/edit` to set a new password. Setting one signs the
  user out everywhere. Rails allows 10 sign-in and 10 reset requests in 3
  minutes.
- The reset email, `PasswordsMailer#reset`, in HTML and text; and
  `ApplicationCable::Connection`, which lets only signed-in browsers
  connect to Action Cable.
- The `users` and `sessions` migrations, and bcrypt in the Gemfile.

Beyond the generator:

- A `nav` in the layout, shown only when signed in: the email address and a
  Sign out button.
- In development, every email is written to a file under `tmp/mails/`, one
  file per address, by Action Mailer's own `:file` delivery. A
  password-reset email can be read on the person's computer: that is the
  local inbox.
- `db/seeds.rb` makes one test login, in development only. The app's own
  `README.md` lists its email address and password, and says where emails
  go.
- Tests of the whole: the home page sends a signed-out person to sign in
  and serves a signed-in one with the nav; signing out sends the person to
  sign in again; a reset sends one email whose link sets a new password,
  after which the old password fails and the new one signs in.

Left out, each its own feature or a later version:

- Kinds of user and what each may do: `user-kinds`. With this feature
  alone, everyone signed in may do everything.
- A browsable inbox for the app's email: `local-inbox`.
- Self sign-up, which the Map's sign-in output does not call for. People
  are added in the seeds.
- Sign-in with outside account providers.

## The files

Added, as the generator gives them:

- `app/models/user.rb`, `app/models/session.rb`, `app/models/current.rb`.
- `app/controllers/sessions_controller.rb`,
  `app/controllers/passwords_controller.rb`,
  `app/controllers/concerns/authentication.rb`.
- `app/channels/application_cable/connection.rb`.
- `app/mailers/passwords_mailer.rb`;
  `app/views/passwords_mailer/reset.html.erb` and `reset.text.erb`.
- `app/views/sessions/new.html.erb`; `app/views/passwords/new.html.erb`
  and `edit.html.erb`.
- `db/migrate/20261012095203_create_users.rb` and
  `db/migrate/20261012095204_create_sessions.rb`. Their stamps are this
  Recipe's generation; the person's app gets its own.
- `test/fixtures/users.yml`; `test/models/user_test.rb`;
  `test/controllers/sessions_controller_test.rb` and
  `passwords_controller_test.rb`;
  `test/mailers/previews/passwords_mailer_preview.rb`;
  `test/test_helpers/session_test_helper.rb`, with `sign_in_as` and
  `sign_out` for integration tests.

Added beyond the generator:

- `test/integration/password_reset_test.rb`.

Changed, whole, each described under *What to wire*: `Gemfile`,
`Gemfile.lock`, `README.md`, `app/controllers/application_controller.rb`,
`app/views/layouts/application.html.erb`,
`config/environments/development.rb`, `config/routes.rb`, `db/seeds.rb`,
`test/controllers/home_controller_test.rb`, `test/test_helper.rb`.

Not carried: `db/schema.rb`, which `bin/setup` writes from the migrations.

## Generic names

- `User` and `Session`: the models. A spec may call people something else;
  the tables, the associations and `Current` follow the name.
- `person@example.com` and `test-login`: the test login's email address
  and password, in `db/seeds.rb` and the app's `README.md`. The person's
  app gets its own, and changes them before anyone else uses it.
- The fixtures' two users, `one@example.com` and `two@example.com`, and
  their password `password`, in `test/fixtures/users.yml`: the tests' own,
  not the person's. No test login is made from them, and the person never
  sees them.

## What to wire

Each file beneath that this feature changes, and what the change does:

- `Gemfile`: `gem "bcrypt"`, for `has_secure_password`.
- `Gemfile.lock`: bcrypt resolved.
- `README.md`: the app's own README, now saying how to run the app, the
  test login, and where emails go.
- `app/controllers/application_controller.rb`: `include Authentication`,
  so every page needs sign-in unless its controller opts out.
- `app/views/layouts/application.html.erb`: the `nav`, inside
  `<% if authenticated? %>`, with the email address and the Sign out
  button.
- `config/environments/development.rb`: mail delivered to files under
  `tmp/mails/`.
- `config/routes.rb`: `resource :session` and
  `resources :passwords, param: :token`.
- `db/seeds.rb`: the test login, in development only.
- `test/controllers/home_controller_test.rb`: signed out, `/` sends the
  person to sign in; signed in, `/` is served with the title, the heading,
  the email address in the nav and the Sign out button; signing out sends
  the person to sign in again.
- `test/test_helper.rb`:
  `require_relative "test_helpers/session_test_helper"`, so integration
  tests can sign in.

## The tests

- `test/models/user_test.rb`: the email address is stripped and
  lowercased.
- `test/controllers/sessions_controller_test.rb`: the sign-in page; the
  right password signs in and a wrong one does not; signing out clears the
  session cookie.
- `test/controllers/passwords_controller_test.rb`: a reset request sends an
  email for a known address and none for an unknown one; the edit page; an
  invalid token; a reset; passwords that do not match.
- `test/controllers/home_controller_test.rb`: the home page signed out and
  signed in, and signing out from it.
- `test/integration/password_reset_test.rb`: a reset from the request to
  the email's link to a new password; the old password then fails and the
  new one signs in.

## Checks it meets

By the New software Map's names, output `new-software/web-app/sign-in`:

- "Each kind of user has a test login, listed for the person": one kind,
  until `user-kinds`. `db/seeds.rb` makes the login in development, and
  the app's `README.md` lists it.
- "Signing out works": the nav's Sign out button. `HomeControllerTest`
  signs in, signs out, and finds `/` sends the person to sign in again;
  `SessionsControllerTest`'s destroy test finds the session cookie gone.
- "Password-reset emails go to a local inbox": in development, Action
  Mailer writes each email to a file under `tmp/mails/`, named for its
  address. The reviewer's test proves it by asking for a reset in the
  running app and reading the email's file under `tmp/mails/`.
  `PasswordResetTest` proves the email's link sets a new password.

Not this feature's: "Each kind of user sees and does only what that kind may",
which `user-kinds` meets.
