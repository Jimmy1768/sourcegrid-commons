# Commons: The linked-accounts Feature Recipe

```yaml
artifact:
  id: commons-linked-accounts-feature
  owner: Commons Planning
  status: reviewed__for_the_directors_word
  date: 2026-10-12
  base_branch: main
  base_commit: the commit that lands this plan, stated in the assignment
  scope: >-
    The fourth Recipe: people who sign in acting for others who do not, the
    Director's dependents design, on the web-app base with sign-in beneath
    it. Plain Rails, no added library: the dependent and the link that
    joins a user to one, the screens to list, add, view, edit and leave
    them, a caretaker added by email, a user reaching only their own, a
    dependent going with its last link, seeds and tests.
  implementation_authorized: false
```

## Why

The Director's first contents, in order (`DECISIONS.md` 6): web-app,
sign-in and user-kinds, landed (`DECISIONS.md` 16, 17, 20); then linked
accounts, his dependents design, its code taken from Golden-Template. His
words of 2026-10-09: "i need accounts to be able to have linked accounts,
people who can't or don't want to touch the app."

## What exists today

Observed 2026-10-12.

- `recipes/web-app/`, `recipes/sign-in/` and `recipes/user-kinds/` on
  `main`.
- Golden-Template `main` `595031a`, read-only: `Dependent` and
  `UserDependent` and their two tables in the auth-core migration. The
  data only: no screens and no rules. A dependent has `english_name`,
  `native_name`, `national_id`, `birthdate`, `relationship_label` and a
  `metadata` JSON column; a link has the user, the dependent, a `role`
  defaulting to `caretaker`, its own `relationship_label` and `metadata`.
- The former linked-accounts module on sourcegrid-labs' branch
  `recipe-spreadsheet-import-module` (`44e6c817`), read-only, never landed:
  that design's boring core with screens and rules, built on the same
  generator output as the landed sign-in. Its overlay form was rejected;
  its content is what this feature holds whole, adapted to the landed base
  and sign-in.
- The New software Map on sourcegrid-labs `main` has no linked-accounts
  capability; one exists only on that unmerged branch. A Recipe points to
  the Map and never the reverse, so this one cites the Map's checks for the
  things an app keeps.

## The design

`recipes/linked-accounts/`, a feature in the format of `recipes/README.md`.

- **`recipe.yml`**, exactly:

  ```yaml
  id: linked-accounts
  kind: feature
  fits: [web-app]
  builds_on: [sign-in]
  ```

  It builds on sign-in alone. When the app also has kinds of user, the
  builder combines the two, as the README says.
- **What is kept of his design**: a dependent is a person who does not sign
  in; a link joins a user to a dependent with a role, `caretaker` by
  default, and what the dependent is to that user; a user and a dependent
  are linked once; a dependent can have several caretakers and a user
  several dependents. **Left out**, each added when a spec asks:
  `native_name`; `national_id`, a government identifier no v1 output calls
  for and the riskiest field to hold; `metadata`; and the dependent's own
  `relationship_label`, since it is kept on the link: with several
  caretakers, what the dependent is differs for each, which one label on
  the dependent cannot say. **Changed**:
  `english_name` is `name`. **Added**, which his design does not have: the
  screens, a user reaching only their own dependents, and a dependent going
  with its last link. The first two follow from the Map's "by those allowed
  to". The third is the one product rule added, for a reason: a dependent
  left alone is unreachable, since a user reaches only their own; a spec in
  which some kind of user reaches every dependent may keep them.
- **`code/`**, every file the feature adds or changes, whole, at its path
  inside the base's `code/` with sign-in laid on it:
  - Added: `app/models/dependent.rb`, `user_dependent.rb`;
    `app/controllers/dependents_controller.rb`, `caretakers_controller.rb`;
    `app/views/dependents/` (index, show, new, edit, the form and the
    partial); two migrations, `create_dependents` and
    `create_user_dependents` with the unique pair index;
    `test/fixtures/dependents.yml`, `user_dependents.yml`;
    `test/models/dependent_test.rb`, `user_dependent_test.rb`;
    `test/controllers/dependents_controller_test.rb`,
    `caretakers_controller_test.rb`.
  - Changed, whole, each named in *What to wire*: `app/models/user.rb`, the
    links and the dependents through them;
    `app/views/layouts/application.html.erb`, a Dependents link in the
    nav; `config/routes.rb`, `resources :dependents, except: :destroy`
    with `caretakers` and `leave`; `db/seeds.rb`, a second test login
    beside sign-in's and one dependent the two care for; `README.md`, the
    app's own, listing both logins and the Dependents page.
  - Not carried: `db/schema.rb`.
- **Each caretaker's own label**, each with its test: the add-caretaker
  form takes what the dependent is to the new caretaker, optional; the edit
  screen shows the signed-in caretaker's own label and saves a change to it
  with the dependent's details, together or not at all, never touching
  another caretaker's.
- **The rules**, each with its test: a signed-in user reaches only their
  own dependents, so another's is not found for every action, adding a
  caretaker among them; a pair is linked once; leaving keeps a dependent
  that has another caretaker and removes one left alone; removing a user
  removes the dependents only they cared for; removing a dependent removes
  its links. A dependent is removed only with its last link, so the
  scaffold's `destroy` is left out.
- **`README.md`** in the format, with *Generic names*: "dependent" and
  "caretaker", renamed to the spec's own (pupil and parent, client and
  carer) in the models, the routes, the screens, the seeds, the fixtures
  and the tests, the rules staying; the test logins; the fixtures as the
  tests' own. A section *Combining it with user-kinds*: `allow_kinds`
  limits who may add or reach dependents when only some kinds may, and
  both features change `user.rb`, the nav, the routes, the seeds and the
  README, the person's app keeping all the changes. *Checks it meets*, for
  the aide and the builder, by the Map's names:
  `new-software/web-app/things-tracked` "Each can be created, listed,
  viewed, edited and removed by those allowed to", "Required details are
  enforced", "The connections between them can be followed";
  `new-software/web-app/rules` "Each rule is enforced, with a check
  showing the forbidden case blocked"; and
  `new-software/web-app/sign-in` "Each kind of user has a test login,
  listed for the person"; each with how and which test models it.

## Acceptance criteria

- **Q1** `recipes/linked-accounts/` holds `README.md`, `recipe.yml` exactly
  as above, and `code/` as above; nothing else.
- **Q2** `recipes/check linked-accounts` exits 0 on this machine: it lays
  sign-in, then linked-accounts, on web-app, prints the difference for each
  changed file, finds each named in *What to wire*, and every step passes
  on Ruby 4.0.7.
- **Q3** From the check's kept folder, served, each login in its own cookie
  jar: the first seeded login's `GET /dependents` is 200 and lists the
  seeded dependent; its page shows both caretakers with what the dependent
  is to each; the second login's list shows it too; a dependent the second
  login adds is not found, 404, for the first; the second login adds the
  first as that dependent's caretaker with a label, after which the first
  reaches it and its page shows the label; the first changes their own
  label on the edit screen and the page shows the new one beside the
  second's unchanged; reported with the commands and output.
- **Q4** Nothing under `recipes/linked-accounts/` names another repository
  or a path on this machine.
- **Q5** Nothing generated, no database and no schema dump is tracked; no
  `national_id` column.
- **Q6** Only paths under `recipes/linked-accounts/` change.

## Who does what

**Owned paths:** `recipes/linked-accounts/**`, all new.

**Forbidden:** every other path, including `recipes/web-app/**`,
`recipes/sign-in/**`, `recipes/user-kinds/**`, `recipes/check`,
`recipes/README.md`, `README.md`, `DECISIONS.md`, `ops/**`, `skills/**`;
committing to `main`; merging; pushing; deploying, ssh, any provider or
server this work would act on or send to; writing in any other repository.
Reads of public package indexes that Rails' own tools make are allowed.

**Allowed locally:** a copy of the base with sign-in laid on it, in a
scratch folder outside the repository, to build the feature in; the check's
folders; reading, read-only, Golden-Template's `rails/app/models/` and
`rails/db/migrate/` and
`~/Projects/sourcegrid-worktrees/sourcegrid-control-b/blueprints/operator/recipes/modules/linked-accounts/`
as sources.

**Implementers:** single, in the one checkout, on branch `linked-accounts`.

## Required checks

From the checkout root, each with its expected exit code.

- **R1** `git diff --name-only <base> | grep -vE '^recipes/linked-accounts/'`
  prints nothing, exit 1.
- **R2** `recipes/check linked-accounts` exit 0, output reported whole.
- **R3** `grep -rniE "golden-template|sourcegrid-(labs|worktrees|commons)|/Users/|~/Projects" recipes/linked-accounts`
  prints nothing, exit 1.
- **R4** `git ls-files recipes/linked-accounts/code | grep -E "/(tmp|log|storage|node_modules)/|\.sqlite3|master\.key|credentials|db/schema\.rb" | grep -vE '/\.keep$'`
  prints nothing, exit 1; and
  `grep -rn "national_id" recipes/linked-accounts/code` prints nothing,
  exit 1.
- **R5** `awk 'NR==1 && /^[^#]/ && length<=120 {ok=1} NR==2 && length>0 {ok=0} END {exit !ok}' recipes/linked-accounts/README.md`
  exit 0.
- **R6** `grep -qx 'id: linked-accounts' recipes/linked-accounts/recipe.yml && grep -qx 'kind: feature' recipes/linked-accounts/recipe.yml && grep -qx 'fits: \[web-app\]' recipes/linked-accounts/recipe.yml && grep -qx 'builds_on: \[sign-in\]' recipes/linked-accounts/recipe.yml`
  exit 0.
- **R7** The check refuses an unnamed change: in a scratch copy outside the
  repository, with `config/routes.rb` removed from the README's *What to
  wire* section, `recipes/check linked-accounts` exits non-zero naming that
  file, before `bin/setup`. Reported.
- **R8** Q3 as commands and output, from the check's kept folder, the
  server stopped after.
- **R9** Each phrase on its own, each printing at least 1, exit 0:
  `grep -c 'new-software/web-app/things-tracked' recipes/linked-accounts/README.md`;
  `grep -c 'new-software/web-app/rules' recipes/linked-accounts/README.md`;
  `grep -c 'created, listed, viewed, edited and removed by those allowed to' recipes/linked-accounts/README.md`;
  `grep -c 'Required details are enforced' recipes/linked-accounts/README.md`;
  `grep -c 'The connections between them can be followed' recipes/linked-accounts/README.md`;
  `grep -c 'the forbidden case blocked' recipes/linked-accounts/README.md`.

## Reviewed

Workspace Recovery, ADVICE 269, 2026-10-12: rebuilt from a scratch copy of
the rough build, branch `linked-accounts-rough`; sound, with one gap: a
caretaker's label could be set only once, by whoever added the dependent.
Closed in the design above and in the rough build at `9f7cbc5`: 40 tests,
two new. Leaving `national_id` out is right and not his question; building
on sign-in alone, with the combining section, is the right shape; citing
the Map's things-tracked, rules and sign-in checks is fine while main's Map
has no linked-accounts capability. The two reasons above came from that
review.

## Not here

Recovery's suggestion, new and not this plan's: before the Director's first
Workshop project, prove sign-in, user-kinds and linked-accounts assembled
together once, since the check lays one feature's chain and nothing yet
proves the three combined. Planning's to plan after this lands, on his
word.


`spreadsheet-import`, its own plan after this one lands; the dependent's
other fields from his design, added when a spec asks; the second proof on
the Director's Floor; anything of the kernel.
