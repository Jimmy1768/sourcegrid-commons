An API-only Rails base: JSON under /api/v1, a paging concern, one error shape and a status call, with no screens.

# API service

## What it is

The base every API feature is laid on: a Rails 8.1 app in API-only mode, on PostgreSQL, that answers JSON and never a page. It is the other half of the phone app: the Expo `mobile-app` base talks to it, and so can any other client.

What it holds:

- Routes under `/api/v1`. A new version is a new namespace beside `v1`.
- One error shape for every error the API answers: `{ "error": { "code": "not_found", "message": "Not found" } }`. `code` is a short word a client can switch on; `message` is for a person. A route no route matches, a missing record and a missing parameter all answer in it, and `ApplicationController#render_error` is how a controller adds its own.
- The status call, `GET /api/v1/status`, answers `{ "status": "ok", "version": "v1" }`. `/up`, the path Rails' health checks expect, answers with it too, because Rails' own health controller renders a page.
- The paging concern, `Paginatable`. A list call asks for `page` (from 1) and `size`. A missing or invalid size is 25, and a size above 100, the ceiling, is held to 100. The answer is always `{ "items": [...], "page": 1, "size": 25, "total": 250, "pages": 10 }`, so a client knows how many pages there are. A page past the last answers with no items. The concern takes an Active Record relation or an array.
- One list call that uses it, `GET /api/v1/items`, over 250 sample items, because the base has no tables. A project's own list replaces the sample with a model's relation.
- `Api::V1::BaseController`, the parent of every call under `/api/v1`. Here it checks nothing. The `api-sign-in` feature replaces it with one that needs a valid token, and the status call stays open through `allow_unauthenticated_access`, which is a no-op here so the same controllers run with and without the feature.

No views, no assets, no mailers, no Active Storage, no Solid gems and no Node. The cache is in the process's memory and jobs run in the process.

`bin/setup` installs the gems, prepares the database and starts the app; `bin/setup --skip-server` stops before starting it; `bin/dev` starts it at http://localhost:3000, bound to every address on the computer so a phone on the same network can reach it at `http://<the computer's address>:3000`. It runs on the Ruby `.ruby-version` names. It needs a PostgreSQL server running on the same computer; as Rails sets it up, the app connects as the computer's own user, and `bin/setup` creates `api_service_development` and `api_service_test`. `PGHOST`, `PGPORT` and `PGUSER` point it at another.

There are no credentials and no master key. Before production the app needs its own, made with `bin/rails credentials:edit`, or a `SECRET_KEY_BASE` in its environment.

`Gemfile.lock` is not carried: `bin/setup` resolves it with `bundle install` on the first run.

## The files

- `Gemfile`: Rails 8.1, `pg`, `puma`, `bcrypt`, `bootsnap` and `tzinfo-data`. For development and test, `debug`, `brakeman` and `rubocop-rails-omakase`. `bcrypt` is here, though nothing in this base uses it, so `api-sign-in` need not change the Gemfile.
- `.ruby-version`: the Ruby the app runs on.
- `.gitignore`: Rails' own, with the schema dump added. What it excludes is never part of this Recipe.
- `.rubocop.yml`: Rails' omakase style, which `bin/rubocop` checks.
- `Rakefile`, `config.ru`: Rails' own, for `bin/rails` tasks and the web server.
- `app/controllers/`:
  - `application_controller.rb`: the API's controller, with the error shape and the catch-all action for unknown routes.
  - `api/v1/base_controller.rb`: the parent of every call under `/api/v1`.
  - `api/v1/status_controller.rb`: the status call.
  - `api/v1/items_controller.rb`: the paged list call.
  - `concerns/paginatable.rb`: paging.
- `app/models/application_record.rb`: Rails' empty base for models, which a feature's models inherit from. The base has no tables of its own.
- `bin/`: `setup`, `dev`, `rails`, `rake`, `rubocop` and `brakeman`. `brakeman`, as Rails generates it, first asks the gem server whether it is the newest release and fails if it is not, so it needs the network.
- `config/`:
  - `application.rb`: names the app's module and loads only the frameworks an API needs, with `config.api_only = true`. `boot.rb`, `environment.rb`, `environments/` for development, test and production, and `initializers/filter_parameter_logging.rb`, which keeps passwords and tokens out of the logs.
  - `routes.rb`: the `/api/v1` namespace, `/up`, and the catch-all that answers in the error shape.
  - `database.yml`: Rails' own for PostgreSQL, `api_service_development`, `api_service_test` and `api_service_production`, with the production password from `API_SERVICE_DATABASE_PASSWORD`. Its `default` block sets `gssencmode: disable`, because on macOS libpq set up for GSS encryption in a parent process crashes a process forked from it.
  - `puma.rb`: the web server.
- `db/seeds.rb`: empty but for a comment, since the base has no tables.
- `test/`: the reviewer's; see *The tests*.
- `lib/tasks/`, `log/`, `tmp/`: empty but for Rails' keep files.

## Generic names

- `ApiService`, the app's module in `config/application.rb`: the spec's name for the app, in that spelling.
- `api_service`, the name in `database.yml`: the databases `api_service_development`, `api_service_test` and `api_service_production`, the production user `api_service`, and `API_SERVICE_DATABASE_PASSWORD`. The spec's name for the app, in that spelling.
- `/api/v1`: the prefix every call lives under. `v1` is the version.
- `items`, the sample list call and `ITEMS` in `Api::V1::ItemsController`: the project's own list, with its own name and its own model.

## What to wire

What a feature or a project connects to this base, and where:

- The list call: `Api::V1::ItemsController` pages over the sample `ITEMS`. A project replaces it with its own model's relation, which `Paginatable` takes as it takes an array, and renames the controller and its route to the project's own list.
- A feature that needs sign-in replaces `app/controllers/api/v1/base_controller.rb` whole, as `api-sign-in` does. The replacement keeps `allow_unauthenticated_access`, which is a no-op here, and gives it a real meaning, so the status call stays open. Every controller under `/api/v1` inherits from `Api::V1::BaseController`, so nothing else changes.
- A feature's routes go inside the `/api/v1` namespace in `config/routes.rb`, which the feature replaces whole. The `/up` route and the catch-all that answers in the error shape stay as they are, and the catch-all stays last.
- A feature's models inherit from `ApplicationRecord`, and its migrations go in `db/migrate/`. `bin/setup` makes the schema from them.
- The database: `config/database.yml` names `api_service_development`, `api_service_test` and `api_service_production`. A project renames them to its own, and sets `PGHOST`, `PGPORT` and `PGUSER` where its PostgreSQL server is not on the same computer.
- The secrets: in production the production database password goes in `API_SERVICE_DATABASE_PASSWORD`, renamed with the database, and the app needs `SECRET_KEY_BASE` in its environment or its own credentials made with `bin/rails credentials:edit`. None is kept in this Recipe.
- A phone or other client reaches the app at `http://<the computer's address>:3000` while `bin/dev` runs.

## The tests

The tests are the reviewer's, written under `test/`, with Rails' `test_helper.rb`. They prove:

- The status call answers 200 with `status` and `version`.
- An unknown route answers 404 in the error shape.
- A list answers one page with its page count, a page past the last answers with no items, and a size above the ceiling is held to it.

## Checks it meets

`none`: the Map this Recipe was built under lists no checks. What the tests model: the error shape, the paging and the status call are the outputs the Map's purpose names for the API.
