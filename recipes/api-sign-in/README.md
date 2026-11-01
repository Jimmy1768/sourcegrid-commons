Token sign-in for the api-service base: sign in, sign out, the current person, and a test login in development.

# API sign-in

## What it is

Sign-in for callers that are not browsers, laid on the api-service base and made a whole feature. The Expo `mobile-app` base signs in against it with the same email address and password a person uses on the web, and so can any other client that holds a token.

What it gives:

- `User`: an email address, stripped and lowercased, and a password kept by `has_secure_password` with bcrypt. Only the password's digest is stored.
- `ApiToken`: one for each sign-in. The token is a long random string the client keeps. The server keeps only its SHA-256 digest, the device's name and when the token was last used, so a copy of the database holds no token anyone can use.
- `POST /api/v1/sessions` signs in with `email_address`, `password` and an optional `device_name`, and answers `{ "token": "...", "user": { "id": 1, "email_address": "..." } }`. A wrong email address or password answers 401 in the API's one error shape, with the code `invalid_credentials`. Ten sign-in tries in 3 minutes from one address is the limit, as in Rails' own sign-in; past it the answer is 429 in the same shape.
- The client sends the token as `Authorization: Bearer <token>` on every other call. `Api::V1::BaseController` now needs it: a call with no token, an unknown token or a revoked one answers 401 in the error shape, with the code `unauthorized`. A token that is found has its `last_used_at` set.
- `GET /api/v1/me` answers `{ "user": { ... } }` for the person the token belongs to.
- `DELETE /api/v1/sessions` signs out: it deletes the token's row, which revokes the token, and answers 204. The same token then gets a 401.
- The status call stays open, through `allow_unauthenticated_access`. The paged list call `GET /api/v1/items` now needs a token.
- A test login, made by `db/seeds.rb` in development only: `person@example.com`, with the password `test-login`. The person's own app changes both before anyone else uses it. `bin/setup` makes it.

Left out, each its own feature or a later version: sign-up, password reset on the phone, kinds of user and what each may do, and sign-in through outside providers.

## The files

Added:

- `app/models/user.rb`, `app/models/api_token.rb`.
- `app/controllers/api/v1/sessions_controller.rb`: sign in and sign out.
- `app/controllers/api/v1/me_controller.rb`: the current person.
- `db/migrate/20261101120000_create_users.rb` and `db/migrate/20261101120001_create_api_tokens.rb`. Their stamps are this Recipe's generation; the person's app gets its own.

Changed, whole, each described under *What to wire*: `app/controllers/api/v1/base_controller.rb`, `config/routes.rb`, `db/seeds.rb`.

Not carried: `db/schema.rb`, which `bin/setup` writes from the migrations. The `Gemfile` already holds bcrypt, so this feature leaves it alone.

## Generic names

- `User` and `users`: the person who signs in. A spec may call people something else; the table, the association from the token and `current_user` follow the name.
- `email_address`: the column and the parameter that name the person's login.
- `person@example.com` and `test-login`: the test login's email address and password, in `db/seeds.rb` and in this README. The person's app gets its own.
- `device_name`: what the client calls the phone, kept with the token so a person can tell their sign-ins apart.

## What to wire

Each file beneath that this feature changes, and what the change does:

- `app/controllers/api/v1/base_controller.rb`: the api-service base's checks nothing and has a no-op `allow_unauthenticated_access`. This one needs a valid bearer token for every call, answers 401 in the error shape without one, and gives `allow_unauthenticated_access` its real meaning, so the status call and sign in stay open.
- `config/routes.rb`: adds `resource :sessions, only: %i[create destroy]` and `get "me", to: "me#show"` under `/api/v1`. Every other route stays as it was.
- `db/seeds.rb`: the test login, in development only.

## The tests

The tests are the reviewer's, written under `test/` with a `users` fixture. They prove:

- The right password returns a token.
- A wrong password returns 401 in the error shape.
- The token returns the person from `GET /api/v1/me`.
- After signing out, the same token returns 401.

## Checks it meets

`none`: the Map this Recipe was built under lists no checks. What the tests model: the four outcomes the spec names for signing in and out, and the test login that `db/seeds.rb` makes in development and this README lists.
