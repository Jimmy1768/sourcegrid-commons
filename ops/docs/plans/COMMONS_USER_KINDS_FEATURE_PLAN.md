# Commons: The user-kinds Feature Recipe

```yaml
artifact:
  id: commons-user-kinds-feature
  owner: Commons Planning
  status: plan__for_recovery_review
  date: 2026-10-12
  base_branch: main
  base_commit: the commit that lands this plan, stated in the assignment
  scope: >-
    The third Recipe: kinds of user and what each may open, on the web-app
    base with sign-in beneath it. Plain Rails, no added library: a kind on
    each user, a guard a controller names its kinds to, one page only one
    kind may open, a test login for each kind, and the tests. It guards
    whole pages by kind; it does not limit which records a kind may see.
  implementation_authorized: false
```

## Why

The Director's first contents, in order (`DECISIONS.md` 6): web-app and
sign-in, landed (`DECISIONS.md` 16, 17); then kinds of users. The Map's
`web-app` category asks "are there kinds of user with different
permissions", and its `sign-in` output must pass "Each kind of user sees
and does only what that kind may" and "Each kind of user has a test login,
listed for the person"; its `screens` output, "Navigation suits each kind
of user". Sign-in left the first to this feature.

## What exists today

Observed 2026-10-12.

- `recipes/web-app/` and `recipes/sign-in/` on `main`; `recipes/check`
  lays a feature on its base and on the features it builds on, in order.
- The former user-kinds module on sourcegrid-labs' branch
  `recipe-spreadsheet-import-module` (`44e6c817`), a read-only source,
  never landed: a `kind` enum on `User`, a `UserKinds` concern with
  `allow_kinds`, a People page for admins, seeds and tests. Its overlay
  form was rejected; its content is what this feature holds whole, adapted
  to the landed base and sign-in, whose layout and home page differ from
  the former ones.

## The design

`recipes/user-kinds/`, a feature in the format of `recipes/README.md`.

- **`recipe.yml`**, exactly:

  ```yaml
  id: user-kinds
  kind: feature
  fits: [web-app]
  builds_on: [sign-in]
  ```

- **`code/`**, every file the feature adds or changes, whole, at its path
  inside the base's `code/` with sign-in laid on it:
  - Added: `app/controllers/concerns/user_kinds.rb`, the guard:
    `allow_kinds :admin` on a controller lets only signed-in users of those
    kinds in and takes `before_action`'s `only:` and `except:`; everyone
    else goes back to the home page with the message "You may not open
    that page." `app/controllers/people_controller.rb` and
    `app/views/people/index.html.erb`, the People page at `/people`,
    admins only: everyone who can sign in, with their kind.
    `db/migrate/<stamp>_add_kind_to_users.rb`: `users.kind`, a string,
    required, `member` by default. `test/integration/people_page_test.rb`.
  - Changed, whole, each named in *What to wire*:
    `app/controllers/application_controller.rb`, `include UserKinds`;
    `app/models/user.rb`, the `kind` enum, `admin` and `member`, with
    `validate: true`; `app/views/layouts/application.html.erb`, the People
    link in the nav, shown to admins alone;
    `app/views/home/index.html.erb`, the alert shown when a page turns
    someone away; `config/routes.rb`, `resources :people, only: :index`;
    `db/seeds.rb`, one test login for each kind, in development only, in
    place of sign-in's one; `README.md`, the app's own, listing a test
    login for each kind and the People page; `test/fixtures/users.yml`, a
    kind on each user and an admin; `test/models/user_test.rb`, a kind is
    required, one of the list, and `member` when not given.
  - Not carried: `db/schema.rb`.
- **`README.md`** in the format, with: *What it is*, including that it
  guards whole pages by kind and does not limit records; *The files*;
  *Generic names*: `admin` and `member` as the kinds, renamed to the
  person's own from the spec in the enum, the migration's default,
  `allow_kinds`, the seeds, the fixtures and the tests, keeping one test
  login per kind; the test logins' addresses and passwords; the People
  page as the one page only one kind may open, which the person's app
  replaces with its own; and the fixtures' users as the tests' own;
  *What to wire*, the nine changed files with what each change does; *The
  tests*; *Checks it meets*, by the Map's names:
  `new-software/web-app/sign-in`, "Each kind of user sees and does only
  what that kind may" and "Each kind of user has a test login, listed for
  the person", and `new-software/web-app/screens`, "Navigation suits each
  kind of user", each with how and which test proves it.

## Acceptance criteria

- **Q1** `recipes/user-kinds/` holds `README.md`, `recipe.yml` exactly as
  above, and `code/` as above; nothing else.
- **Q2** `recipes/check user-kinds` exits 0 on this machine: it lays
  sign-in, then user-kinds, on web-app, prints the difference for each
  changed file, finds each named in *What to wire*, and every step passes
  on Ruby 4.0.7.
- **Q3** From the check's kept folder, served: signed in as the seeded
  admin, `GET /people` is 200 and lists every login with its kind, and the
  home page's nav carries the People link; signed in as the seeded member,
  `GET /people` is a redirect to `/` and the home page then shows "You may
  not open that page." with no People link; reported with the commands and
  output.
- **Q4** Nothing under `recipes/user-kinds/` names another repository or a
  path on this machine.
- **Q5** Nothing generated, no database and no schema dump is tracked.
- **Q6** Only paths under `recipes/user-kinds/` change.

## Who does what

**Owned paths:** `recipes/user-kinds/**`, all new.

**Forbidden:** every other path, including `recipes/web-app/**`,
`recipes/sign-in/**`, `recipes/check`, `recipes/README.md`, `README.md`,
`DECISIONS.md`, `ops/**`, `skills/**`; committing to `main`; merging;
pushing; deploying, ssh, any provider or server this work would act on or
send to; writing in any other repository. Reads of public package indexes
that Rails' own tools make are allowed.

**Allowed locally:** a copy of the base with sign-in laid on it, in a
scratch folder outside the repository, to build the feature in; the check's
folders; reading, read-only,
`~/Projects/sourcegrid-worktrees/sourcegrid-control-b/blueprints/operator/recipes/modules/user-kinds/`
as a source.

**Implementers:** single, in the one checkout, on branch `user-kinds`.

## Required checks

From the checkout root, each with its expected exit code.

- **R1** `git diff --name-only <base> | grep -vE '^recipes/user-kinds/'`
  prints nothing, exit 1.
- **R2** `recipes/check user-kinds` exit 0, output reported whole.
- **R3** `grep -rniE "golden-template|sourcegrid-(labs|worktrees|commons)|/Users/|~/Projects" recipes/user-kinds`
  prints nothing, exit 1.
- **R4** `git ls-files recipes/user-kinds/code | grep -E "/(tmp|log|storage|node_modules)/|\.sqlite3|master\.key|credentials|db/schema\.rb" | grep -vE '/\.keep$'`
  prints nothing, exit 1.
- **R5** `awk 'NR==1 && /^[^#]/ && length<=120 {ok=1} NR==2 && length>0 {ok=0} END {exit !ok}' recipes/user-kinds/README.md`
  exit 0.
- **R6** `grep -qx 'id: user-kinds' recipes/user-kinds/recipe.yml && grep -qx 'kind: feature' recipes/user-kinds/recipe.yml && grep -qx 'fits: \[web-app\]' recipes/user-kinds/recipe.yml && grep -qx 'builds_on: \[sign-in\]' recipes/user-kinds/recipe.yml`
  exit 0.
- **R7** The check refuses an unnamed change: in a scratch copy outside the
  repository, with `config/routes.rb` removed from the README's *What to
  wire* section, `recipes/check user-kinds` exits non-zero naming that
  file, before `bin/setup`. Reported.
- **R8** Q3 as commands and output, from the check's kept folder, the
  server stopped after.
- **R9** Each phrase on its own, each printing at least 1, exit 0:
  `grep -c 'new-software/web-app/sign-in' recipes/user-kinds/README.md`;
  `grep -c 'new-software/web-app/screens' recipes/user-kinds/README.md`;
  `grep -c 'only what that kind may' recipes/user-kinds/README.md`;
  `grep -c 'test login, listed for the person' recipes/user-kinds/README.md`;
  `grep -c 'Navigation suits each kind of user' recipes/user-kinds/README.md`.

## Not here

`linked-accounts` and `spreadsheet-import`, each its own plan after this
one lands; limiting which records a kind may see or change, which no v1
output calls for; the second proof on the Director's Floor; anything of
the kernel.
