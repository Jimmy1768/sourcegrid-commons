A web app that runs: Rails 8 on SQLite, server-rendered, with a home page, its test, and one command to set it up.

# Web app

## What it is

The base every web-app feature is laid on: a Rails 8.1 app as `rails new`
makes it on the field's defaults, less deployment tooling and secrets, plus
a home page. SQLite in every environment. Propshaft and import maps, so
there is no Node and no JavaScript build step. Hotwire's Turbo and
Stimulus. Server-rendered ERB views. Minitest. Action Mailer, Active Job
and Active Storage. Solid Queue, Solid Cache and Solid Cable, which Rails
sets up for production; in development, jobs run in the app's own process.

One page: the home page at `/`, served by `HomeController#index`, in a
layout that shows the app's name. Nothing else. A feature adds what the
person's app is for.

`bin/setup` installs the gems, prepares the database and starts the app;
`bin/setup --skip-server` stops before starting it; `bin/dev` starts it at
http://localhost:3000. It runs on the Ruby `.ruby-version` names.

There are no credentials and no master key: a key no one else holds is no
use to the builder. Development and test need none. Before production, the
app needs its own, made with `bin/rails credentials:edit`, or a
`SECRET_KEY_BASE` in its environment.

## The files

- `Gemfile`, `Gemfile.lock`: Rails 8.1, `sqlite3`, `puma`, `propshaft`,
  `importmap-rails`, `turbo-rails`, `stimulus-rails`, the three Solid gems,
  `bootsnap`, `image_processing` and `tzinfo-data`. For development and
  test, `debug`, `bundler-audit`, `brakeman` and `rubocop-rails-omakase`;
  `web-console` in development; `capybara` and `selenium-webdriver` in
  test. The lock also names the two Linux platforms a server would run.
- `.ruby-version`: the Ruby the app runs on.
- `.gitignore`, `.gitattributes`: Rails' own. What `.gitignore` excludes
  is never part of this Recipe.
- `.rubocop.yml`: Rails' omakase style, which `bin/rubocop` checks.
- `README.md`: Rails' own placeholder, for the app's own README.
- `Rakefile`, `config.ru`: Rails' own, for `bin/rails` tasks and the web
  server.
- `app/`:
  - `controllers/`: `ApplicationController`; `HomeController`, with
    `index`.
  - `views/home/index.html.erb`: the home page, with the app's name in its
    `h1`.
  - `views/layouts/application.html.erb`: the layout. Its title is the
    page's `content_for(:title)` or the app's name. It loads the
    stylesheet and the import map. `mailer.html.erb` and `mailer.text.erb`
    are the mail layouts.
  - `views/pwa/`: the web-app manifest and service worker Rails generates,
    unused until a feature links them in the layout and the routes.
  - `models/application_record.rb`, `helpers/application_helper.rb`,
    `jobs/application_job.rb`, `mailers/application_mailer.rb`: Rails'
    empty bases.
  - `assets/stylesheets/application.css`: the stylesheet.
    `assets/images/`: empty.
  - `javascript/`: `application.js`, the import map's entry point, and
    `controllers/`, Stimulus' controllers with Rails' `hello_controller.js`
    example.
- `bin/`: `setup`, `dev`, `rails`, `rake`, `rubocop`, `brakeman`,
  `bundler-audit`, `ci`, `importmap` and `jobs`. `brakeman`, as Rails
  generates it, first asks the gem server whether it is the newest release
  and fails if it is not, so it needs the network.
- `config/`:
  - `application.rb`, which names the app's module; `boot.rb`;
    `environment.rb`; `environments/`, for development, test and
    production; `initializers/`; `locales/en.yml`.
  - `routes.rb`: `root "home#index"`, and the `/up` health check.
  - `database.yml`: SQLite files under `storage/`, and in production one
    each for the cache, the queue and cable.
  - `importmap.rb`: the JavaScript the import map serves.
  - `puma.rb`: the web server.
  - `cache.yml`, `queue.yml`, `recurring.yml`, `cable.yml`: the Solid
    gems. `storage.yml`: Active Storage, on local disk.
  - `ci.rb` and `bundler-audit.yml`: what `bin/ci` runs.
- `db/`: `seeds.rb`, empty; `cache_schema.rb`, `queue_schema.rb` and
  `cable_schema.rb`, the Solid gems' tables. The app's own `schema.rb` is
  written by `bin/setup` once a feature adds a migration.
- `public/`: the error pages, the icons and `robots.txt`.
- `test/`: `test_helper.rb`; `controllers/home_controller_test.rb`; and
  Rails' empty folders for fixtures, helpers, integration, mailers and
  models.
- `lib/tasks/`, `log/`, `script/`, `storage/`, `tmp/`, `vendor/`: empty but
  for Rails' keep files.

## Generic names

- `WebApp`, the app's module in `config/application.rb` and the name and
  description in `app/views/pwa/manifest.json.erb`: the spec's name for the
  app, in that spelling.
- `web_app`, the name the app was generated with; it does not appear in
  the code.
- `Web app`, the title and the `application-name` in the layout, the `h1`
  on the home page, and what the home page's test looks for: the name the
  person sees.

## The tests

- `test/controllers/home_controller_test.rb`: the home page is served at
  the root with status 200, its title is the app's name, and its `h1` is
  the app's name.
- `test/test_helper.rb`: runs the tests in parallel and loads every
  fixture.

## Checks it meets

By the New software Map's names:

- `new-software/web-app/how-to-run`, "One command starts it with its
  data": `bin/setup` installs, prepares the database and starts the app,
  and `bin/dev` starts it again.
- `new-software/web-app/screens`, "No screen shows an error": the home
  page, its only screen, and the test that it is served.
