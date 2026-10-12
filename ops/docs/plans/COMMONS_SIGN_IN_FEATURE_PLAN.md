# Commons: The sign-in Feature Recipe

```yaml
artifact:
  id: commons-sign-in-feature
  owner: Commons Planning
  status: reviewed__for_the_directors_word
  date: 2026-10-12
  base_branch: main
  base_commit: the commit that lands this plan, stated in the assignment
  scope: >-
    The second Recipe and the first feature: sign-in on the web-app base.
    Rails 8's own sign-in as its generator gives it, plus what makes it a
    whole feature: the signed-in nav, reset emails in a local inbox, a test
    login in the seeds and listed for the person, and the tests. No kinds
    of user, no self sign-up, no outside providers.
  implementation_authorized: false
```

## Why

The Director's first contents, in order (`DECISIONS.md` 6): the web-app
base, landed (`DECISIONS.md` 16); then sign-in. The Map's `web-app`
category, output `sign-in`, when anyone signs in, must pass: each kind of
user has a test login, listed for the person; each kind of user sees and
does only what that kind may; signing out works; password-reset emails go
to a local inbox. The second of those is the `user-kinds` feature's; the
other three are this one's.

## What exists today

Observed 2026-10-12.

- `recipes/web-app/`, the base, on `main`: Rails 8.1.4 on Ruby 4.0.7, a
  home page at `/`, its test, no authentication. `recipes/check` lays a
  feature on its base and runs the tests there (`recipes/README.md`).
- `bin/rails generate authentication` in Rails 8.1.4, run on a copy of the
  base here: creates `User`, `Session` and `Current`; the `Authentication`
  concern and `SessionsController`, `PasswordsController`,
  `PasswordsMailer` with their views; `ApplicationCable::Connection`; two
  migrations; the fixtures, model and controller tests, a mailer preview
  and `SessionTestHelper`. It inserts `include Authentication` into
  `ApplicationController`, adds `resource :session` and
  `resources :passwords, param: :token` to the routes, `bcrypt` to the
  Gemfile, and the helper into `test/test_helper.rb`.
- A former sign-in module on sourcegrid-labs' branch
  `recipe-spreadsheet-import-module` (`44e6c817`), a read-only source, never
  landed: the same generator output plus a nav, file-delivered mail, a
  seeded test login and tests. Its overlay form was rejected; its content
  is what this feature holds whole.

## The design

`recipes/sign-in/`, a feature in the format of `recipes/README.md`.

- **`recipe.yml`**, exactly:

  ```yaml
  id: sign-in
  kind: feature
  fits: [web-app]
  ```

- **`code/`**, every file the feature adds or changes, whole, at its path
  inside the base's `code/`:
  - Added, as the generator gives them: `app/models/user.rb`,
    `session.rb`, `current.rb`; `app/controllers/sessions_controller.rb`,
    `passwords_controller.rb`, `concerns/authentication.rb`;
    `app/channels/application_cable/connection.rb`;
    `app/mailers/passwords_mailer.rb`; `app/views/sessions/new.html.erb`,
    `app/views/passwords/new.html.erb`, `edit.html.erb`,
    `app/views/passwords_mailer/reset.html.erb`, `reset.text.erb`;
    `db/migrate/<stamp>_create_users.rb`, `<stamp>_create_sessions.rb`;
    `test/fixtures/users.yml`; `test/models/user_test.rb`;
    `test/controllers/sessions_controller_test.rb`,
    `passwords_controller_test.rb`;
    `test/mailers/previews/passwords_mailer_preview.rb`;
    `test/test_helpers/session_test_helper.rb`.
  - Added, beyond the generator: `test/integration/password_reset_test.rb`,
    a reset from the request to the email's link to a new password that
    then signs in.
  - Changed, whole, each named in *What to wire*: `Gemfile` and
    `Gemfile.lock`, bcrypt; `app/controllers/application_controller.rb`,
    `include Authentication`; `config/routes.rb`, the two routes;
    `test/test_helper.rb`, the helper; `app/views/layouts/application.html.erb`,
    a `nav` that, signed in, shows the email address and a sign-out button;
    `config/environments/development.rb`, mail delivered to files under
    `tmp/mails/`, Action Mailer's own `:file` delivery, so a reset email
    can be read on the person's computer; `db/seeds.rb`, one test login
    created in development only; `README.md`, the app's own: the test
    login's email address and password, and where emails go;
    `test/controllers/home_controller_test.rb`: signed out, `/` sends the
    person to sign in; signed in, `/` is served and the nav shows the
    email address and the sign-out button.
  - Not carried: `db/schema.rb`, which `bin/setup` writes from the
    migrations. The migrations' stamps are the generation's; the person's
    app gets its own.
- **`README.md`** in the format, with: *What it is*; *The files*, each
  added and each changed; *Generic names*: `User` and `Session` as the
  models' names, and the test login's email address and password, saying
  that the fixtures' two users and their password are the tests' own and
  not the person's;
  *What to wire*, the ten changed files above with what each change does;
  *The tests*; *Checks it meets*, by the Map's names:
  `new-software/web-app/sign-in`, "Each kind of user has a test login,
  listed for the person", "Signing out works", "Password-reset emails go
  to a local inbox", each with how, the last saying that the reviewer's
  test reads the email's file under `tmp/mails/`, so the builder knows
  what proves it; and, stated as not this feature's,
  "Each kind of user sees and does only what that kind may", which is
  `user-kinds`.
- **Left out, said in the README**: kinds of user and permissions
  (`user-kinds`); a browsable inbox (`local-inbox`); self sign-up, which
  the Map's v1 output does not call for, so people are added in the seeds;
  outside account providers.

## Acceptance criteria

- **Q1** `recipes/sign-in/` holds `README.md`, `recipe.yml` exactly as
  above, and `code/` as above; nothing else.
- **Q2** `recipes/check sign-in` exits 0 on this machine: it lays sign-in
  on web-app, prints the difference for each changed file, finds each
  named in *What to wire*, and every step passes on Ruby 4.0.7.
- **Q3** From the check's kept folder, served: signed out, `GET /` is a
  redirect to the sign-in page, and `GET /session/new` is 200; signing in
  with the seeded test login then `GET /` is 200 with the email address in
  the page; reported with the commands and output.
- **Q4** Nothing under `recipes/sign-in/` names another repository or a
  path on this machine.
- **Q5** Nothing generated, no database and no schema dump is tracked.
- **Q6** Only paths under `recipes/sign-in/` change.

## Who does what

**Owned paths:** `recipes/sign-in/**`, all new.

**Forbidden:** every other path, including `recipes/web-app/**`,
`recipes/check`, `recipes/README.md`, `README.md`, `DECISIONS.md`,
`ops/**`, `skills/**`; committing to `main`; merging; pushing; deploying,
ssh, any provider or server this work would act on or send to; writing in
any other repository. Reads of public package indexes that Rails' own tools
make are allowed.

**Allowed locally:** a copy of `recipes/web-app/code/` in a scratch folder
outside the repository to run the generator and build the feature in; the
check's folders; reading, read-only,
`~/Projects/sourcegrid-worktrees/sourcegrid-control-b/blueprints/operator/recipes/modules/sign-in/`
as a source.

**Implementers:** single, in the one checkout, on branch `sign-in`.

## Required checks

From the checkout root, each with its expected exit code.

- **R1** `git diff --name-only <base> | grep -vE '^recipes/sign-in/'`
  prints nothing, exit 1.
- **R2** `recipes/check sign-in` exit 0, output reported whole.
- **R3** `grep -rniE "golden-template|sourcegrid-(labs|worktrees|commons)|/Users/|~/Projects" recipes/sign-in`
  prints nothing, exit 1.
- **R4** `git ls-files recipes/sign-in/code | grep -E "/(tmp|log|storage|node_modules)/|\.sqlite3|master\.key|credentials|db/schema\.rb" | grep -vE '/\.keep$'`
  prints nothing, exit 1.
- **R5** `awk 'NR==1 && /^[^#]/ && length<=120 {ok=1} NR==2 && length>0 {ok=0} END {exit !ok}' recipes/sign-in/README.md`
  exit 0.
- **R6** `grep -qx 'id: sign-in' recipes/sign-in/recipe.yml && grep -qx 'kind: feature' recipes/sign-in/recipe.yml && grep -qx 'fits: \[web-app\]' recipes/sign-in/recipe.yml`
  exit 0.
- **R7** The check refuses an unnamed change: in a scratch copy outside the
  repository, with `config/routes.rb` removed from the README's *What to
  wire* section, `recipes/check sign-in` exits non-zero naming that file,
  before `bin/setup`. Reported.
- **R8** Q3 as commands and output, from the check's kept folder, the
  server stopped after.
- **R9** `grep -c 'new-software/web-app/sign-in' recipes/sign-in/README.md`
  prints a number of at least 1, exit 0; and
  `grep -cE 'test login, listed for the person|Signing out works|local inbox|only what that kind may' recipes/sign-in/README.md`
  prints a number of at least 4, exit 0.

## Reviewed

Workspace Recovery, ADVICE 263, 2026-10-12: rebuilt from a scratch copy of
the rough build, branch `sign-in-rough` at `a49047b`; sound, no gap. Whole
by the size test for sign-in alone; files under `tmp/mails/` meet the
local-inbox check as a reviewer's test observes them; the app's README is
the Map's "note" that lists the test login. The two README notes above
and the schema-dump rule in `recipes/README.md` came from that review.

## Not here

`user-kinds`, `linked-accounts` and `spreadsheet-import`, each its own
plan after this one lands; the second proof on the Director's Floor;
anything of the kernel.
