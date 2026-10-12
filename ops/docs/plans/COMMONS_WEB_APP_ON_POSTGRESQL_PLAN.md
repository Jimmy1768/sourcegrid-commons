# Commons: The web-app Base On PostgreSQL

```yaml
artifact:
  id: commons-web-app-on-postgresql
  owner: Commons Planning
  status: plan__for_recovery_review
  date: 2026-10-12
  base_branch: main
  base_commit: the commit that lands this plan, stated in the assignment
  scope: >-
    The web-app base moves from SQLite to PostgreSQL, a correction
    (DECISIONS.md 22). Only the base's database line, lock and database
    configuration change; sign-in's whole Gemfile and lock follow it; three
    app READMEs say PostgreSQL; recipes/check runs each PostgreSQL app
    against a server of its own for the run. The four landed Recipes keep
    every test they have.
  implementation_authorized: false
```

## Why

`DECISIONS.md` 22: an app built on the commons goes to production, a
hosted server with its own database; SQLite is a file on one machine.
Every Rails project of the Director's on this machine runs on PostgreSQL,
and his dependents design uses `jsonb`, which only PostgreSQL has.

## What exists today

Observed 2026-10-12.

- On `main`: `recipes/web-app/` on SQLite (`sqlite3` 2.9.6, `database.yml`
  with SQLite files under `storage/`), and sign-in, user-kinds and
  linked-accounts on it. Sign-in carries the base's whole `Gemfile` and
  `Gemfile.lock`, so on a new base it must carry the new ones.
- `rails new -d postgresql` on the same flags, generated in a scratch
  folder, differs from the landed base's generation in exactly three files:
  the `Gemfile`'s database line, `Gemfile.lock` and `config/database.yml`.
- On this machine: a PostgreSQL server running; `initdb` and `pg_ctl` 14.18
  on the PATH; `pg` 1.6.3 (arm64-darwin) installed for Ruby 4.0.7 from the
  gem file cached under Ruby 3.2.3, its build covering Ruby 4.0. Nothing is
  to be downloaded: the lock resolves from the gem index's metadata alone.
- On macOS, libpq set up for GSS encryption in a parent process crashes a
  child forked from it: a `bin/rails server -d` dies on its first request.
  With `PGGSSENCMODE=disable` it does not.

## The design

- **The base**, three files: the `Gemfile`'s line, Rails' own
  `gem "pg", "~> 1.1"` in place of `sqlite3`; `Gemfile.lock`, `pg` 1.6.3
  for the seven platforms the lock names, each with its checksum, and no
  `sqlite3`; `config/database.yml`, Rails' own for PostgreSQL:
  `web_app_development` and `web_app_test`, and in production
  `web_app_production` with one database each for the cache, the queue and
  cable, the password from `WEB_APP_DATABASE_PASSWORD`. The base's README
  says PostgreSQL, the server it needs running on the same computer, and
  why.
- **Sign-in**: its `Gemfile` is the new base's with `bcrypt` uncommented,
  and its `Gemfile.lock` the new base's with `bcrypt` 3.1.22 and its
  checksum, as before.
- **The app READMEs** of sign-in, user-kinds and linked-accounts say "on
  PostgreSQL".
- **`recipes/check`**: when the assembled app's `database.yml` names the
  `postgresql` adapter, after the Ruby check the check makes a PostgreSQL
  server of its own for the run with `initdb`, in a new folder under the
  system temp directory, and starts it with `pg_ctl` on a free port on
  127.0.0.1 with no socket file. Every step then runs with `PGHOST`,
  `PGPORT` and `PGUSER` set to it, `PGGSSENCMODE=disable`, and
  `DATABASE_URL`, `PGDATABASE` and `PGPASSWORD` cleared. When the check
  ends, however it ends, it stops that server and deletes its folder. With
  `--keep` it leaves the server running and prints how to reach it and the
  command that stops and deletes it. `recipes/README.md` says so. No run
  reaches the Director's own server.
- **Records**: `DECISIONS.md` 5 and 22, and the README's line, are
  corrected with this plan; `ops/protocol/repo_context.md`'s Databases and
  Checks sections are corrected at the landing, when they become true.

## Acceptance criteria

- **Q1** The base's `Gemfile` names `pg` and not `sqlite3`; its lock names
  `pg` 1.6.3 for each of its seven platforms with a checksum, and no
  `sqlite3`; its `database.yml` uses the `postgresql` adapter in every
  environment.
- **Q2** Sign-in's `Gemfile` differs from the base's by the `bcrypt` line
  alone, and its lock from the base's by `bcrypt` alone.
- **Q3** `recipes/check` passes for web-app, sign-in, user-kinds and
  linked-accounts, each with the runs it has on `main` today: 1, 16, 24 and
  42.
- **Q4** The check's PostgreSQL is its own: the Director's server lists the
  same databases before and after the four runs; no process or folder of
  the check's PostgreSQL is left after them; a run made to fail still stops
  and deletes it.
- **Q5** `recipes/check <id> --keep` leaves a server from which the kept
  app, served as a daemon, answers.
- **Q6** No gem file is downloaded and no gem installed.
- **Q7** Only the eleven paths named in *Who does what* change.

## Who does what

**Owned paths, exact and exhaustive:** `recipes/check`;
`recipes/README.md`; `recipes/web-app/README.md`;
`recipes/web-app/code/Gemfile`; `recipes/web-app/code/Gemfile.lock`;
`recipes/web-app/code/config/database.yml`;
`recipes/sign-in/code/Gemfile`; `recipes/sign-in/code/Gemfile.lock`;
`recipes/sign-in/code/README.md`; `recipes/user-kinds/code/README.md`;
`recipes/linked-accounts/code/README.md`.

**Forbidden:** every other path; committing to `main`; merging; pushing;
deploying, ssh, any provider or server this work would act on or send to;
creating, changing or dropping any database on the Director's own
PostgreSQL server; downloading a gem file or installing a gem; writing in
any other repository. Reads of the gem index's metadata that Bundler makes
are allowed.

**Allowed locally:** `rails new -d postgresql --skip-bundle` in a scratch
folder outside the repository, to read Rails' own `database.yml` and
`Gemfile` line; `bundle lock` in a scratch folder; the check's folders and
servers.

**Implementers:** single, in the one checkout, on branch
`web-app-on-postgresql`.

## Required checks

From the checkout root, each with its expected exit code.

- **R1** `git diff --name-only <base> | grep -vxE 'recipes/check|recipes/README.md|recipes/web-app/README.md|recipes/web-app/code/(Gemfile|Gemfile\.lock|config/database\.yml)|recipes/sign-in/code/(Gemfile|Gemfile\.lock|README\.md)|recipes/(user-kinds|linked-accounts)/code/README\.md'`
  prints nothing, exit 1.
- **R2** `grep -rliE "sqlite" recipes --include=README.md --include=Gemfile --include=Gemfile.lock --include=database.yml`
  prints nothing, exit 1.
- **R3** `grep -cE '^  pg \(1\.6\.3(-[a-z0-9_-]+)?\) sha256=[0-9a-f]{64}$' recipes/web-app/code/Gemfile.lock`
  prints 7, exit 0.
- **R4** `diff recipes/web-app/code/Gemfile recipes/sign-in/code/Gemfile`
  shows the `bcrypt` line alone, exit 1; and
  `diff recipes/web-app/code/Gemfile.lock recipes/sign-in/code/Gemfile.lock | grep -E '^[<>]' | grep -v bcrypt`
  prints nothing, exit 1.
- **R5** For each of `web-app`, `sign-in`, `user-kinds`,
  `linked-accounts`: `recipes/check <id>` exit 0, with 1, 16, 24 and 42
  runs and 0 failures. Report each output's PostgreSQL lines and test
  line, and R2 of web-app's output whole.
- **R6** Before and after R5:
  `psql -d postgres -Atc "select datname from pg_database order by 1"`
  prints the same list; after R5, `pgrep -f 'postgres.*commons-'` prints
  nothing.
- **R7** A run made to fail, in a scratch copy outside the repository with
  one test's expectation changed: exit 1, and its output says it stopped
  and deleted its PostgreSQL; `pgrep` as in R6 prints nothing after.
- **R8** `recipes/check sign-in --keep`; from the kept folder, with the
  printed `PGHOST`, `PGPORT` and `PGGSSENCMODE`,
  `bin/rails server -p <port> -d`, then `GET /` is a 302 to
  `/session/new` and `GET /session/new` is 200; the server stopped, then
  the printed command run, after which `pgrep` as in R6 prints nothing.
- **R9** The gem cache for Ruby 4.0.7 lists the same files before and after
  the work, and `gem list '^pg$'` prints `pg (1.6.3 arm64-darwin)` alone.

## The rough build

Planning's, on branch `postgresql-rough` at `a52f5c1` (tree `db7a64b7`),
cut from `main` `b4f1d1f`: the eleven files as above. Observed 2026-10-12:
the four Recipes pass with 1, 16, 24 and 42 runs; each run starts and
deletes its own PostgreSQL; the Director's server's databases unchanged;
a failing run cleans up; with `--keep`, sign-in and linked-accounts served
as daemons answer, linked-accounts' shared and cross-user pages as before;
the gem cache unchanged. Making it, `rails new` without `--skip-bundle`
downloaded `pg` 1.7.0, which was uninstalled with its cached file on the
Director's word; so the assignment forbids that generation.

## Not here

`spreadsheet-import`, whose plan is with Recovery: its `Gemfile` and lock
are regenerated on this base before its assignment. Whether the base's
`database.yml` should turn GSS encryption off for development and test, so
that parallel tests on macOS cannot hit the fork crash: Recovery's to
weigh, not in this plan.
