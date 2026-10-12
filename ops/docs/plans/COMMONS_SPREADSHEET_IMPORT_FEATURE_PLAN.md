# Commons: The spreadsheet-import Feature Recipe

```yaml
artifact:
  id: commons-spreadsheet-import-feature
  owner: Commons Planning
  status: authorized
  date: 2026-10-12
  base_branch: main
  base_commit: the commit that lands this plan, stated in the assignment
  scope: >-
    The fifth Recipe and the last of the Director's first contents: the
    person's records read from their CSV or Excel file into the web app,
    with one command and at first setup. An example record, one importer
    with its settings at its top, a report, rows that fail set aside with
    their reasons while the rest import, a second run adding no duplicates,
    and the tests. On the web-app base alone.
  implementation_authorized: true
```

## Why

The Director's first contents, in order (`DECISIONS.md` 6): web-app,
sign-in, user-kinds and linked-accounts, landed (`DECISIONS.md` 16, 17, 20,
21); then spreadsheet import. His words of 2026-10-12: "each Delegate will
use excel-sheet differently, that's why they do not direct-copy the code —
it's a read, which is the boost." The Map's `web-app` category asks "Do you
have records today, such as a spreadsheet, that it should start with?", and
its `starting-data` output must pass "The person's records are imported, or
realistic sample data is loaded."

## What exists today

Observed 2026-10-12.

- `recipes/web-app/` on PostgreSQL (`DECISIONS.md` 22, 23) and its three
  features on `main`; `recipes/check` runs each app against a PostgreSQL of
  its own per run, `--keep` leaving it up for a live walk.
- The former spreadsheet-import module on sourcegrid-labs' branch
  `recipe-spreadsheet-import-module` (`44e6c817`), read-only, never landed:
  the importer, the example record, the command, the seeds, six test files
  and 16 tests, on a former base whose Gemfile and seeds differ from ours.
  Its overlay form was rejected; its content is what this feature holds
  whole, adapted to the landed base.
- On this machine, for Ruby 4.0.7: `csv` 3.3.5, `roo` 3.0.0, `rubyzip`
  3.7.0 and `nokogiri` 1.19.4 installed, and the two `.gem` files cached.
  The base's lock already carries `rubyzip` and `nokogiri`. `bundle lock`
  from the index's metadata would choose `csv` 3.3.6, which is not
  installed; pinned to 3.3.5 for the lock, then the plain line restored, it
  keeps 3.3.5, and nothing is downloaded.

## The design

`recipes/spreadsheet-import/`, a feature in the format of
`recipes/README.md`.

- **`recipe.yml`**, exactly:

  ```yaml
  id: spreadsheet-import
  kind: feature
  fits: [web-app]
  ```

  It builds on the base alone: the import is a command and the setup's
  seeds, not a page, so it needs no sign-in.
- **What it does**, each with its test:
  - Reads a `.csv` in UTF-8, in UTF-8 with a byte-order mark, or, when not
    valid UTF-8, in Windows-1252; and an `.xlsx` file's first sheet, its
    date cells as dates. Any other file is refused with a message and
    nothing saved; so is a CSV that cannot be read, such as one with an
    unclosed quote, and an `.xlsx` that is not a workbook, each by the
    file's name and never with a Ruby trace.
  - Matches the first row's headers to fields regardless of case and of
    spaces around them; an unknown column is ignored and named in the
    report; a missing required column stops the import before anything is
    saved, saying which.
  - Skips a blank row. Saves each other row through the model, so its
    validations decide. A row that fails, a required detail missing, a
    value not valid, or a date in no accepted format, is set aside with its
    row number, counting the header row as 1, and its reasons, while the
    rest are imported. A row whose key matches a saved record updates it,
    so the same file run again adds no duplicates.
  - Only reads the original file, never changes it.
  - Prints a report: how many rows were added, updated, skipped and set
    aside, each set-aside row with its number and reasons, and the columns
    ignored; and writes the set-aside rows with their reasons to a CSV under
    `tmp/imports/`, printing its path.
  - The command `bin/rails import:contacts FILE=<path>`; and at first setup,
    in development, the seeds import `db/import/contacts.csv` or
    `db/import/contacts.xlsx` when one is there, so the base's one setup
    command starts the app with the person's data.
- **`code/`**, every file the feature adds or changes, whole, at its path
  inside the base's `code/`:
  - Added: `app/models/contact.rb`, the example record, made with Rails'
    model generator, with no screens: a name, required; an email, required
    and unique in the database and the model, stripped and lowercased; and
    `joined_on`, an optional date. `app/models/contact_import.rb`, the
    importer, one plain Ruby class with its settings at its top: `RECORD`,
    `COLUMNS`, `REQUIRED_COLUMNS`, `KEY` and `DATE_FORMATS`.
    `lib/tasks/import.rake`. `db/import/.keep`.
    `db/migrate/<stamp>_create_contacts.rb`, with the unique email index.
    `test/fixtures/contacts.yml`; the test files under
    `test/fixtures/files/`: a good CSV with mixed-case headers, spaces and
    an unknown column; a CSV with a byte-order mark and one in
    Windows-1252, with accented names; a CSV with a blank row, a row
    missing its name, a date in no accepted format and a repeated email; a
    CSV missing the `name` column; a CSV with an unclosed quote; an
    `.xlsx` that is not a workbook; and a small `.xlsx` with a date cell and
    a second sheet not read. `test/models/contact_test.rb`,
    `test/models/contact_import_test.rb`, `test/tasks/import_task_test.rb`.
  - Changed, whole, each named in *What to wire*: `Gemfile`, the base's at
    the commit the assignment names, plus `csv` and `roo`; `Gemfile.lock`,
    the base's plus the two, with their checksums, `csv` at the installed
    3.3.5; `db/seeds.rb`, the import from `db/import/` in development;
    `README.md`, the app's own, on PostgreSQL, saying it needs a PostgreSQL
    server running, where the person's file goes and how to import it
    again.
  - Not carried: `db/schema.rb`.
- **`README.md`** in the format, with *Generic names*: `Contact` and its
  three columns, renamed to the person's record, made as the spec's
  things-tracked say; and the importer's five settings, set from the
  person's file, one importer and one command for each kind of record the
  file holds; and two cases a spec may bring and where they go, in
  `import_row`: a row that fills two records and the link between them,
  each found by its own key; and a column that names another record, found
  by that record's key, the row set aside when none matches. The libraries'
  licences once: `roo` MIT, `csv` Ruby's and BSD-2-Clause, `rubyzip`
  BSD-2-Clause. *Checks it meets*, for the aide and the builder, by the Map's
  names: `new-software/web-app/starting-data` "The person's records are
  imported, or realistic sample data is loaded";
  `new-software/web-app/things-tracked` "Required details are enforced";
  and `new-software/web-app/how-to-run` "One command starts it with its
  data"; each with how and which test models it.

## Acceptance criteria

- **Q1** `recipes/spreadsheet-import/` holds `README.md`, `recipe.yml`
  exactly as above, and `code/` as above; nothing else.
- **Q2** `recipes/check spreadsheet-import` exits 0 on this machine: it lays
  spreadsheet-import on web-app, prints the difference for each changed
  file, finds each named in *What to wire*, and every step passes on Ruby
  4.0.7.
- **Q3** From the folder `recipes/check spreadsheet-import --keep` kept, with
  the printed `PGHOST`, `PGPORT` and `PGUSER`: with the good CSV copied to
  `db/import/contacts.csv`, `bin/rails db:seed` imports its rows and prints
  the report; `bin/rails import:contacts` on the problems file prints the
  added, updated, skipped and set-aside counts with each set-aside row's
  number and reason, and the path of the set-aside file, which lists them;
  running the good file again adds nothing; the CSV with an unclosed quote
  and the `.xlsx` that is not a workbook are each refused by name with no
  trace and nothing saved; the original files are byte-identical
  afterwards; reported with the commands and output.
- **Q4** Nothing under `recipes/spreadsheet-import/` names another
  repository or a path on this machine.
- **Q5** Nothing generated, no database and no schema dump is tracked; the
  lock's entries for `csv` and `roo` carry their checksums.
- **Q6** Only paths under `recipes/spreadsheet-import/` change.

## Who does what

**Owned paths:** `recipes/spreadsheet-import/**`, all new.

**Forbidden:** every other path, including `recipes/web-app/**`,
`recipes/sign-in/**`, `recipes/user-kinds/**`, `recipes/linked-accounts/**`,
`recipes/check`, `recipes/README.md`, `README.md`, `DECISIONS.md`,
`ops/**`, `skills/**`; committing to `main`; merging; pushing; deploying,
ssh, any provider or server this work would act on or send to; writing in
any other repository; downloading a gem file, or installing or
uninstalling a gem; creating, changing or dropping a database on the
Director's own PostgreSQL server.
Reads of public package indexes that Rails' own tools make are allowed.

**Allowed locally:** a copy of the base in a scratch folder outside the
repository to build the feature in, resolving gems with
`bundle install --local`; `bundle lock` in a scratch folder, `csv` pinned
to 3.3.5 for it and the plain line restored; the check's folders; reading, read-only,
`~/Projects/sourcegrid-worktrees/sourcegrid-control-b/blueprints/operator/recipes/modules/spreadsheet-import/`
as a source, its test files among it.

**Implementers:** single, in the one checkout, on branch
`spreadsheet-import`.

## Required checks

From the checkout root, each with its expected exit code.

- **R1** `git diff --name-only <base> | grep -vE '^recipes/spreadsheet-import/'`
  prints nothing, exit 1.
- **R2** `recipes/check spreadsheet-import` exit 0, output reported whole.
- **R3** `grep -rniE "golden-template|sourcegrid-(labs|worktrees|commons)|/Users/|~/Projects" recipes/spreadsheet-import`
  prints nothing, exit 1.
- **R4** `git ls-files recipes/spreadsheet-import/code | grep -E "/(tmp|log|storage|node_modules)/|\.sqlite3|master\.key|credentials|db/schema\.rb" | grep -vE '/\.keep$'`
  prints nothing, exit 1; and
  `grep -cE '^  (csv \(3\.3\.5\)|roo \(3\.0\.0\)) sha256=[0-9a-f]{64}$' recipes/spreadsheet-import/code/Gemfile.lock`
  prints 2, exit 0.
- **R5** `awk 'NR==1 && /^[^#]/ && length<=120 {ok=1} NR==2 && length>0 {ok=0} END {exit !ok}' recipes/spreadsheet-import/README.md`
  exit 0.
- **R6** `grep -qx 'id: spreadsheet-import' recipes/spreadsheet-import/recipe.yml && grep -qx 'kind: feature' recipes/spreadsheet-import/recipe.yml && grep -qx 'fits: \[web-app\]' recipes/spreadsheet-import/recipe.yml && ! grep -q builds_on recipes/spreadsheet-import/recipe.yml`
  exit 0.
- **R7** The check refuses an unnamed change: in a scratch copy outside the
  repository, with `db/seeds.rb` removed from the README's *What to wire*
  section and the first line still passing, `recipes/check
  spreadsheet-import` exits non-zero naming that file, before `bin/setup`.
  Reported.
- **R8** Q3 as commands and output, from the folder
  `recipes/check spreadsheet-import --keep` kept, with its printed
  `PGHOST`, `PGPORT` and `PGUSER`; then the printed command that stops and
  deletes its PostgreSQL, after which `pgrep -f 'postgres.*commons-'`
  prints nothing.
- **R9** Each phrase on its own, each printing at least 1, exit 0:
  `grep -c 'new-software/web-app/starting-data' recipes/spreadsheet-import/README.md`;
  `grep -c 'new-software/web-app/things-tracked' recipes/spreadsheet-import/README.md`;
  `grep -c 'new-software/web-app/how-to-run' recipes/spreadsheet-import/README.md`;
  `grep -c 'records are imported, or realistic sample data is loaded' recipes/spreadsheet-import/README.md`;
  `grep -c 'Required details are enforced' recipes/spreadsheet-import/README.md`;
  `grep -c 'One command starts it with its data' recipes/spreadsheet-import/README.md`.

## Reviewed

Workspace Recovery, ADVICE 271, 2026-10-12: rebuilt from a scratch copy of
the rough build; sound, with two refusals missing, a CSV with an unclosed
quote and a corrupt `.xlsx` crashing with a trace. Added in the design and
in the rough build at `6c3f25b`: 19 tests, two new, each refusal by name.
Whole by the size test for one kind of record per file; a command and the
seeds with no page is the right shape, an upload page being a spec's ask
under web-app's file-uploads capability. The checksums' limit: the lock's
`csv` and `roo` values are the sha256 of the cached `.gem` files, equal to
the former lock's; the authority is rubygems.org's own checksum, which the
first networked `bundle install` verifies and fails loudly on a mismatch.
The Gemfile and lock re-cut from the PostgreSQL base once it landed, in
Planning's rough build `spreadsheet-import-rough-pg` at `8718a94`: 19 runs
on the check's own PostgreSQL, the live walk and both refusals as before,
nothing downloaded.

## Not here

Recovery's suggestion from ADVICE 269, new and not this plan's: prove
sign-in, user-kinds and linked-accounts assembled together once, before the
Director's first Workshop project; Planning's to plan on his word. Import
from a page rather than a command; other file kinds; the second proof on
his Floor; anything of the kernel.
