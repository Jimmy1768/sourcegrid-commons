# Commons: The Recipe Format And The web-app Base

```yaml
artifact:
  id: commons-recipe-format-and-web-app-base
  owner: Commons Planning
  status: plan__for_recovery_review
  date: 2026-10-12
  base_branch: main
  base_commit: the commit that lands this plan, stated in the assignment
  scope: >-
    The commons' Recipe format: one folder per Recipe, its README, its
    recipe.yml and the assembly check. And the first Recipe, the web-app
    base: a Rails 8 app on SQLite, server-rendered, that runs and whose
    tests pass. No feature Recipe, no Skill, nothing of the kernel.
  implementation_authorized: false
```

## Why

The Director, 2026-10-12: "Recipes aren't links. they are tested, finished,
code, that is read and copied by the builder. Recipes are BIG." And: "each
Delegate will use excel-sheet differently, that's why they do not
direct-copy the code — it's a read, which is the boost." The first Recipes
are what his first Workshop project needs, the web-app base first
(`DECISIONS.md` 6). The format is Planning's to set and show him
(`DECISIONS.md` 8 to 13): asked the layout questions, he answered "i don't
know. these are infra questions."

## What exists today

Observed 2026-10-12.

- This repository: `README.md`, `DECISIONS.md`, `ops/`. No `recipes/`.
- A former design in sourcegrid-labs, on SourceGrid Control B's branch
  `recipe-spreadsheet-import-module` at `44e6c817`, landed nowhere, its
  overlay design rejected by the Director the same day: a base at
  `blueprints/operator/recipes/bases/web-app/reference/` (Rails 8.1.4,
  Ruby 4.0.7, SQLite, Propshaft, import maps, Turbo, Stimulus; 85 tracked
  files) and a check script. A read-only source to compare against, never
  to copy as a Recipe.
- This machine: Rails 8.1.4; rbenv with Ruby 3.2.3 and 4.0.7; `rsync`.

## The design

### One folder per Recipe, `recipes/<id>/`

- **`README.md`.** Its first line is the one-line description: one sentence,
  no heading mark, at most 120 characters, the line the kernel's index will
  tell each role. Then a blank line, a `# <Title>`, and these sections, in
  this order: *What it is*; *The files*, every top-level folder or file of
  `code/` and what it is for, and for a feature each file it adds and each
  it changes; *Generic names*, each name the spec renames and what it stands
  for; *What to wire*, feature only, each file beneath that it changes and
  what the change does; *The tests*, which tests come along and what each
  proves; *Checks it meets*, the Map's checks by the Map's own names, or
  `none`. Plain words for the builder; no name of another repository, no
  path on this machine.
- **`recipe.yml`.** `id`, equal to the folder's name; `kind`, `base` or
  `feature`; for a feature, `fits`, the bases it is laid on, and `builds_on`,
  the features laid beneath it first, in order, or absent.
- **`code/`.** For a base, the whole app, runnable: `bin/setup` then
  `bin/dev`. For a feature, every file it adds or changes, whole, at its path
  inside its base's `code/`.

Not in a Recipe: anything the stack's own `.gitignore` excludes, among it
`tmp/`, `log/`, `storage/` files, `node_modules/`, databases and credential
keys.

### The check, `recipes/check <id>`

Run from the repository root; needs only `bash`, `rsync` and the Ruby the
base's `.ruby-version` names. Never writes inside the repository. In order:

1. Reads `recipe.yml`. Stops, naming the cause, when the folder, the
   `README.md`, the `recipe.yml` or `code/` is missing; `id` differs from the
   folder's name; `kind` is neither `base` nor `feature`; a feature's `fits`
   names no base; `builds_on` names a missing feature, one that does not fit
   the same base, or a loop.
2. Checks the README's first line: non-empty, not starting with `#`, at most
   120 characters, and the second line blank.
3. Copies the base's `code/` with `rsync` to a new folder under the system
   temp directory, leaving out `tmp/`, `log/`, `storage/`, `node_modules/`,
   `.git/`, `*.sqlite3*`, `config/master.key` and `config/credentials/*.key`.
   For a feature, for each base in `fits`: lays over the copy the `code/` of
   each feature in `builds_on` (each with its own `builds_on` first, in the
   listed order, once each), then the feature's own `code/`, printing each as
   it is laid. Before laying the feature's own, for each of its files that
   already exists beneath, prints a unified diff from the file beneath to the
   feature's, and stops when the README's *What to wire* section does not
   name that file.
4. In the assembled folder, in order: `bin/setup --skip-server`,
   `bin/rails test`, `bin/rubocop`, `bin/brakeman --no-pager`. Each must exit
   0.
5. Prints the folder's path and keeps it, so the assembled app can be started
   there with `bin/dev`. Exits 0 only when every step passed.

### `recipes/README.md`

What a Recipe is, in the Director's words of `DECISIONS.md` 4; the folder
format and the check as above; the index rule; that a feature is proven on
its base by the check, and later by a real Mandate whose spec names it.
Names no other repository.

### The web-app base, `recipes/web-app/`

- `code/`: a Rails 8 app made by `rails new` on the field's defaults: SQLite,
  Propshaft, import maps, Turbo and Stimulus, Minitest, server-rendered ERB.
  No API-only, no JavaScript bundler, no CSS framework. `.ruby-version` names
  a Ruby rbenv has on this machine. Beyond `rails new`: a home page at `/`
  (one controller, one view, its test) and a layout that shows the app's
  generic name. `db/seeds.rb` present. Nothing else: the base is the
  skeleton every feature is laid on.
- `README.md` in the format above. Generic names: the app's module name and
  its shown title. Checks it meets: the Map's, by name, or `none`.
- `recipe.yml`: `id: web-app`, `kind: base`.

The former base on SourceGrid Control B's branch may be read to compare; what
differs from a fresh `rails new` on these defaults is for the Control to
report, not to carry over.

## Acceptance criteria

- **Q1** `recipes/README.md` exists and says what the design section above
  says it says, naming no other repository.
- **Q2** `recipes/check` exists, does the five steps above, and
  `recipes/check web-app` exits 0 on this machine.
- **Q3** `recipes/web-app/` holds `README.md`, `recipe.yml` and `code/` as
  above; from the check's assembled folder, `bin/dev` serves the home page at
  `/` with status 200, reported with the command and its output.
- **Q4** Nothing under `recipes/` names another repository or a path on
  this machine.
- **Q5** Nothing the stack's `.gitignore` excludes is tracked.
- **Q6** Only paths under `recipes/` change.

## Who does what

**Owned paths:** `recipes/README.md`, `recipes/check`, `recipes/web-app/**`,
all new.

**Forbidden:** every other path, including `README.md`, `DECISIONS.md` and
`ops/`; remote hosts; merging; pushing.

**Allowed locally:** `rails new` inside the worktree; reading
`~/Projects/sourcegrid-worktrees/sourcegrid-control-b/blueprints/operator/recipes/`
as a source; the check's folders under the system temp directory.

**Implementers:** single, in Control A's worktree.

## Required checks

From the repository root, each with its expected exit code.

- **R1** Only owned paths change:

  ```bash
  git diff --name-only <base> | grep -vE '^recipes/'
  ```

  prints nothing, exit 1.
- **R2** The check passes:

  ```bash
  recipes/check web-app
  ```

  exit 0, its output reported whole.
- **R3** No other repository is named:

  ```bash
  grep -rniE "golden-template|sourcegrid-(labs|worktrees|commons)|/Users/|~/Projects" recipes
  ```

  prints nothing, exit 1.
- **R4** Nothing generated is tracked:

  ```bash
  git ls-files recipes/web-app/code | grep -E "^recipes/web-app/code/(tmp|log|storage|node_modules)/|\.sqlite3|master\.key|credentials/.*\.key"
  ```

  prints nothing, exit 1.
- **R5** The index line:

  ```bash
  awk 'NR==1 && /^[^#]/ && length<=120 {ok=1} NR==2 && length>0 {ok=0} END {exit !ok}' recipes/web-app/README.md
  ```

  exit 0.
- **R6** The manifest:

  ```bash
  grep -qx 'id: web-app' recipes/web-app/recipe.yml && grep -qx 'kind: base' recipes/web-app/recipe.yml
  ```

  exit 0.
- **R7** The check can fail: run with the README's first line made a
  heading in a scratch copy of the Recipe outside the repository, or
  reported by the Control in another way that shows a non-zero exit. Exit
  non-zero, reported.

## Not here

The four feature Recipes (`sign-in`, `user-kinds`, `linked-accounts`,
`spreadsheet-import`), each its own plan after this one lands; the second
proof, a Mandate on the Director's Floor whose spec names the Recipe, which
waits on the kernel reading the commons; Skills; whether the commons is sold.
