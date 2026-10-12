Kinds of user on the web-app base with sign-in: a kind on each user, a guard by kind, an admins' page, a login each.

# User kinds

## What it is

Kinds of user and what each may open, in plain Rails with no added
library, on the web-app base with sign-in beneath it.

- A kind on each user: `users.kind`, a string, required, and `member` when
  not given, which is the migration's default. `User` keeps it as a Rails
  enum with `validate: true`. A missing or unknown kind is invalid, and
  each kind gets a question method such as `admin?` and a scope such as
  `User.admin`. The kinds here are `admin` and `member`.
- The guard, the `UserKinds` concern, included in `ApplicationController`.
  A controller that says `allow_kinds :admin` lets only signed-in users of
  those kinds into its actions. It takes `before_action`'s `only:` and
  `except:`. Everyone else goes back to the home page, which shows "You may
  not open that page." A signed-out person is sent to sign in first, by
  sign-in's guard. Naming a kind the app does not have raises an error when
  the controller loads, so a renamed kind cannot quietly shut everyone out.
- The People page at `/people`, which only admins may open: everyone who
  can sign in, with their kind. Its link in the nav is shown to admins
  alone.
- `db/seeds.rb` makes one test login for each kind, in development only,
  in place of sign-in's one. The app's own `README.md` lists them.
- Tests: signed out, the People page sends the person to sign in; an admin
  opens it, sees every login with its kind, and has its link; a member is
  turned away with the message and is not shown the link; `allow_kinds`
  refuses a kind the app does not have; a kind is required, one of the
  list, and `member` when not given.

It guards whole pages, and actions of a page, by kind. It does not limit
which records a kind may see or change; no v1 output calls for that, and a
spec that does states its own rule.

## The files

Added:

- `app/controllers/concerns/user_kinds.rb`: the guard, `allow_kinds`.
- `app/controllers/people_controller.rb` and
  `app/views/people/index.html.erb`: the People page.
- `db/migrate/20261012114808_add_kind_to_users.rb`: `users.kind`, a
  string, required, `member` by default. Its stamp is this Recipe's
  generation; the person's app gets its own.
- `test/integration/people_page_test.rb`.

Changed, whole, each described under *What to wire*: `README.md`,
`app/controllers/application_controller.rb`, `app/models/user.rb`,
`app/views/home/index.html.erb`, `app/views/layouts/application.html.erb`,
`config/routes.rb`, `db/seeds.rb`, `test/fixtures/users.yml`,
`test/models/user_test.rb`.

Not carried: `db/schema.rb`, which `bin/setup` writes from the migrations.

## Generic names

- `admin` and `member`: the kinds. The spec names the person's own kinds.
  They replace these in the enum, the migration's default, every
  `allow_kinds`, the nav's `admin?`, the seeds, the fixtures and the tests,
  keeping one test login for each kind.
- `admin@example.com` with password `test-login-admin`, and
  `member@example.com` with password `test-login-member`: the test logins,
  one per kind, in `db/seeds.rb` and the app's `README.md`. The person's
  app gets its own, and changes them before anyone else uses it.
- The People page: the one page here that only one kind may open, so the
  guard and the nav link are shown working. The person's app replaces it
  with its own pages, each naming its kinds to `allow_kinds`. For a page
  some of whose actions are open to more kinds, name the kinds per action:
  `allow_kinds :admin, :member, only: %i[ index show ]` with
  `allow_kinds :admin, except: %i[ index show ]` lets members read and
  only admins change.
- The fixtures' users `one@example.com` and `two@example.com`, members,
  and `three@example.com`, the admin, with the password `password`, in
  `test/fixtures/users.yml`: the tests' own, not the person's. No test
  login is made from them.

## What to wire

Each file beneath that this feature changes, and what the change does:

- `README.md`: the app's own README, now listing a test login for each
  kind and naming the People page.
- `app/controllers/application_controller.rb`: `include UserKinds`, after
  `include Authentication`, so any controller can say `allow_kinds`.
- `app/models/user.rb`: the `kind` enum, `admin` and `member`, with
  `validate: true`.
- `app/views/home/index.html.erb`: the alert at the top, shown when a page
  turns someone away.
- `app/views/layouts/application.html.erb`: the People link in the nav,
  shown only when `Current.user.admin?`.
- `config/routes.rb`: `resources :people, only: :index`.
- `db/seeds.rb`: one test login for each kind, in development only, in
  place of sign-in's one.
- `test/fixtures/users.yml`: a kind on each user, and an admin.
- `test/models/user_test.rb`: a kind is required, one of the list, and
  `member` when not given, beside sign-in's email test.

## The tests

- `test/models/user_test.rb`: a kind is required, one of the list, and
  `member` by default; and sign-in's email test.
- `test/integration/people_page_test.rb`: signed out, the People page
  sends the person to sign in; an admin opens it, sees every login with
  its kind, and has the nav link; a member is sent to the home page, which
  shows "You may not open that page."; a member is not shown the link;
  `allow_kinds :owner` raises, naming the kind the app does not have.
- Sign-in's and the base's tests still pass with a kind on every user.

## Checks it meets

For the aide writing the spec and the builder building it: what the build
must prove for each check of the New software Map, and how this Recipe's
tests model it.

- `new-software/web-app/sign-in`, "Each kind of user sees and does only what that kind may":
  every page a kind may not open turns that kind away. `PeoplePageTest`
  models it: an admin opens the People page, and a member is sent to the
  home page with "You may not open that page." A build proves each of its
  own guarded pages the same way, once for a kind allowed and once for a
  kind turned away.
- `new-software/web-app/sign-in`, "Each kind of user has a test login, listed for the person":
  one login per kind, made by `db/seeds.rb` and listed in the app's
  `README.md`. The build keeps one per kind of its own, and lists each.
- `new-software/web-app/screens`, "Navigation suits each kind of user":
  each kind sees links only to pages it may open. `PeoplePageTest` models
  it: the People link is shown to an admin and not to a member. A build
  proves each kind-only link the same way.
