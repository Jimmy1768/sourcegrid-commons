# Commons: Kinds And Linked Accounts In One App

```yaml
artifact:
  id: commons-kinds-and-linked-accounts
  owner: Commons Planning
  status: plan__for_recovery_review
  date: 2026-10-12
  base_branch: main
  base_commit: the commit that lands this plan, stated in the assignment
  scope: >-
    The proof Recovery proposed (ADVICE 269) and the Director's first
    Workshop project needs: sign-in, user-kinds and linked-accounts in one
    app. A feature Recipe that builds on user-kinds and linked-accounts and
    carries the five files both change, merged, with a test of the two
    together; every test of the four Recipes runs in the one app.
  implementation_authorized: false
```

## Why

The Director's first Workshop project needs sign-in, kinds of user and
linked accounts in one app (`DECISIONS.md` 6). Each of the two features
builds on sign-in alone and was proven only on its own. Recovery,
ADVICE 269: "nothing proves the three laid together"; Planning's to plan on
his word. Asked what Planning's next step was, on 2026-10-12, he took it as
said.

## What exists today

Observed 2026-10-12.

- On `main`: `recipes/web-app/` on PostgreSQL, `recipes/sign-in/`,
  `recipes/user-kinds/` and `recipes/linked-accounts/`, each building on
  sign-in alone. `recipes/check` lays a feature's `builds_on` in order, each
  with its own first, once each.
- user-kinds and linked-accounts change exactly five of the same files,
  whole: `README.md`, `app/models/user.rb`,
  `app/views/layouts/application.html.erb`, `config/routes.rb` and
  `db/seeds.rb`. No other file is shared.
- Laid one over the other with nothing merged, the second drops the first's
  changes: in Planning's rough build, user-kinds' `PeoplePageTest` and the
  combined tests fail, ten in all.
- The four Recipes' tests together are 54, over Rails' threshold of 50, so
  they run in parallel workers; on the check's own PostgreSQL they pass.

## The design

`recipes/kinds-and-linked-accounts/`, a feature in the format of
`recipes/README.md`.

- **`recipe.yml`**, exactly:

  ```yaml
  id: kinds-and-linked-accounts
  kind: feature
  fits: [web-app]
  builds_on: [user-kinds, linked-accounts]
  ```

  The check lays sign-in, user-kinds, linked-accounts, then this.
- **`code/`**, six files:
  - Changed, whole, each named in *What to wire*:
    `app/models/user.rb`, linked-accounts' links and dependents with
    user-kinds' `kind` enum; `app/views/layouts/application.html.erb`, the
    nav with People for admins and Dependents for everyone signed in;
    `config/routes.rb`, `resources :people, only: :index` beside the
    dependents' routes; `db/seeds.rb`, one login per kind and a second
    member, `admin@example.com`, `member@example.com` and
    `carer@example.com`, each with a kind, and the dependent the two
    members share, Rosa Ortega; `README.md`, the app's own, listing them
    and both pages.
  - Added: `test/integration/kinds_and_dependents_test.rb`: an admin's nav
    has People and Dependents; a member's has Dependents and not People; a
    member reaches their own dependents and is turned away from People;
    removing a user of either kind removes the dependents only they cared
    for.
- **No rule of either feature changes**: a kind's pages stay guarded by
  `allow_kinds`, a user reaches only their own dependents whatever their
  kind. An admin's reach over every dependent is a spec's rule, not this
  Recipe's.
- **`README.md`** in the format: what it is and why it exists, the files,
  generic names (both features' at once), what to wire, the tests, and
  *Checks it meets* for the aide and the builder, the Map's names as the two
  features cite them, now in one app.
- **`recipes/linked-accounts/README.md`**: its section *Combining it with
  user-kinds* gains a line pointing to this Recipe.

## Acceptance criteria

- **Q1** `recipes/kinds-and-linked-accounts/` holds `README.md`,
  `recipe.yml` exactly as above, and the six files of `code/`; nothing
  else.
- **Q2** `recipes/check kinds-and-linked-accounts` exits 0: it lays
  sign-in, user-kinds and linked-accounts, prints the difference for each
  of the five changed files, finds each named in *What to wire*, and runs
  54 tests in parallel on its own PostgreSQL with 0 failures.
- **Q3** Without the five merged files, the same check fails, user-kinds'
  own tests among the failures.
- **Q4** Live, from a `--keep` folder: the seeded admin's home page has both
  nav links and `/people` lists the three logins with their kinds; the
  seeded member's home page has Dependents and not People, `/dependents`
  lists Rosa Ortega, and `/people` sends them home.
- **Q5** The Director's PostgreSQL server lists the same databases before
  and after; no gem is downloaded or installed.
- **Q6** Only paths under `recipes/kinds-and-linked-accounts/` and
  `recipes/linked-accounts/README.md` change.

## Who does what

**Owned paths, exact and exhaustive:**
`recipes/kinds-and-linked-accounts/**`, all new; and
`recipes/linked-accounts/README.md`, its combining section only.

**Forbidden:** every other path; committing to `main`; merging; pushing;
deploying, ssh, any provider or server this work would act on or send to;
running `bin/setup`, `bin/rails test`, any `db:` task, the seeds or a server
in any app except through `recipes/check` or with the `PGHOST` and `PGPORT`
of a server the check made, since otherwise they reach the Director's own
PostgreSQL; creating, changing or dropping a database there; downloading a
gem file, or installing or uninstalling a gem; writing in any other
repository.

**Allowed locally:** scratch copies outside the repository to write the
files in; the check's folders and servers.

**Implementers:** single, in the one checkout, on branch
`kinds-and-linked-accounts`.

## Required checks

From the checkout root, each with its expected exit code.

- **R1** `git diff --name-only <base> | grep -vE '^recipes/kinds-and-linked-accounts/|^recipes/linked-accounts/README\.md$'`
  prints nothing, exit 1.
- **R2** `recipes/check kinds-and-linked-accounts` exit 0, output reported
  whole; it shows "Running 54 tests in parallel" and 0 failures.
- **R3** `grep -rniE "golden-template|sourcegrid-(labs|worktrees|commons)|/Users/|~/Projects" recipes/kinds-and-linked-accounts`
  prints nothing, exit 1.
- **R4** `git ls-files recipes/kinds-and-linked-accounts/code | wc -l`
  prints 6.
- **R5** `awk 'NR==1 && /^[^#]/ && length<=120 {ok=1} NR==2 && length>0 {ok=0} END {exit !ok}' recipes/kinds-and-linked-accounts/README.md`
  exit 0.
- **R6** `grep -qx 'id: kinds-and-linked-accounts' recipes/kinds-and-linked-accounts/recipe.yml && grep -qx 'kind: feature' recipes/kinds-and-linked-accounts/recipe.yml && grep -qx 'fits: \[web-app\]' recipes/kinds-and-linked-accounts/recipe.yml && grep -qx 'builds_on: \[user-kinds, linked-accounts\]' recipes/kinds-and-linked-accounts/recipe.yml`
  exit 0.
- **R7** Two breaks in scratch copies outside the repository, each exit 1:
  `config/routes.rb` removed from *What to wire*, the check naming it
  before setup; and every file of `code/` but the combined test removed,
  the check failing in `bin/rails test` with user-kinds' `PeoplePageTest`
  among the failures. Report each output's stop line and failing tests.
- **R8** Q4 as commands and output, with the `--keep` folder's printed
  `PGHOST`, `PGPORT` and `PGUSER` and a cookie jar per login, ending with
  the printed command that stops and deletes the check's server.
- **R9** Each phrase on its own, each printing at least 1, exit 0:
  `grep -c 'new-software/web-app/sign-in' recipes/kinds-and-linked-accounts/README.md`;
  `grep -c 'new-software/web-app/screens' recipes/kinds-and-linked-accounts/README.md`;
  `grep -c 'only what that kind may' recipes/kinds-and-linked-accounts/README.md`;
  `grep -c 'Navigation suits each kind of user' recipes/kinds-and-linked-accounts/README.md`.
- **R10** `psql -d postgres -Atc "select datname from pg_database order by 1" | shasum -a 256`
  prints the same before and after the work; and the Ruby 4.0.7 gem cache's
  listing is the same before and after.

## The rough build

Planning's, on branch `kinds-and-linked-accounts-rough` at `81557f0` (tree
`f158ac70`), cut from `main` `1441bce`. Observed: the check passes with 54
tests in parallel on its own PostgreSQL; both breaks of R7 fail as stated,
ten failures and errors with no merged files; the Director's databases
unchanged by the check. Making it, Planning first ran `bin/setup` and the
tests in a scratch app outside the check, which created ten `web_app`
databases on the Director's own server; Planning dropped exactly those ten
and confirmed the list back to its recorded 36. The forbidden line above
exists for that.

## Not here

Admins reaching every dependent; spreadsheet import of pupils with their
parents, which the spreadsheet-import README places in `import_row`; the
second proof on the Director's Floor; anything of the kernel.
