# Recipes

A Recipe is finished, tested code for a kind of artifact or one piece of
it: a whole app that runs, or a whole feature with its screens, tests and
seeds, such as a spreadsheet import. The Director, 2026-10-12: "Recipes
aren't links. they are tested, finished, code, that is read and copied by
the builder. Recipes are BIG."

The builder reads a Recipe whole and builds the work's own version from it,
inventing and debugging nothing the Recipe already solves. The aide reads it
while writing the spec, and the spec names the Recipes a build uses, as many
as it needs. The builder adapts what it reads; it does not paste it in: "each
Delegate will use excel-sheet differently, that's why they do not
direct-copy the code — it's a read, which is the boost."

The size test: if the builder would have to write code rather than adapt
it, the Recipe is too small.

## One folder per Recipe

`recipes/<id>/`, flat. A Recipe is a base or a feature. A base is a whole
app that runs. A feature is laid on a base, and sometimes on other features
first.

- **`README.md`.** Its first line is the one-line description: one
  sentence, no heading mark, at most 120 characters. Then a blank line, a
  `# <Title>`, and these sections, in this order:
  - *What it is*.
  - *The files*: every top-level folder or file of `code/` and what it is
    for; for a feature, each file it adds and each it changes.
  - *Generic names*: each name the spec renames, and what it stands for.
  - *What to wire*, feature only: each file beneath it that it changes, and
    what the change does.
  - *The tests*: which tests come along, and what each proves.
  - *Checks it meets*: the Map's checks by the Map's own names, or `none`.

  Plain words for the builder. No name of another repository, no path on
  any machine.
- **`recipe.yml`.** `id`, equal to the folder's name; `kind`, `base` or
  `feature`. A feature adds `fits`, the bases it is laid on, and
  `builds_on`, the features laid beneath it first, in order, or leaves
  `builds_on` out.
- **`code/`.** For a base, the whole app, runnable: `bin/setup`, then
  `bin/dev`. For a feature, every file it adds or changes, whole, at its
  path inside its base's `code/`.

Nothing generated is kept. What the stack's own `.gitignore` excludes stays
out of a Recipe: temporary files, logs, stored files, installed packages,
databases and credential keys.
A Recipe never carries a schema dump: the check's `bin/setup` writes it
from the migrations, and so does the person's app.

## The index

The kernel tells each role an index of every Recipe: its name, which is its
folder's name, and its README's first line. A role reads the rest of a
Recipe only when its task needs it. That is why the first line is one
sentence, stands alone, and is checked.

A Skill's index line is the industry's own: the `name` and `description` of
its `SKILL.md`. A Recipe has no industry format, so this format is the
commons' own. The index may also carry a Recipe's `kind`, `fits` and
`builds_on`, so that an aide naming one Recipe knows what it builds on.
Whether it does is for the kernel's Planning to settle when it plans how
the kernel reads the commons.

## The check

```bash
recipes/check <id>
```

Run from the repository root. It needs `rsync` and a Ruby. The assembled
app runs on the Ruby its own `.ruby-version` names, not on the Ruby that
started the check. It never writes inside the repository. In order:

1. It reads `recipe.yml`, and stops, naming the cause, when the folder, the
   README, the manifest or `code/` is missing; when `id` differs from the
   folder's name; when `kind` is neither `base` nor `feature`; when a
   feature's `fits` names no base; or when `builds_on` names a missing
   feature, a feature that does not fit the same base, or a loop.
2. It checks the README's first line: not empty, not a heading, at most 120
   characters, and followed by a blank line.
3. It copies the base's `code/` to a new folder under the system temp
   directory, leaving out temporary files, logs, stored files, installed
   packages, databases and secret keys. For a feature, on each base it
   fits, it lays over the copy each feature in `builds_on`, each with its
   own `builds_on` first, once each, then the feature's own `code/`, saying
   each as it lays it. Before laying the feature's own, it prints the
   difference for each file the feature changes, and stops when the
   README's *What to wire* section does not name that file.
4. In the assembled folder, `ruby -v` must report the version that
   `.ruby-version` names; any other, or none, stops the check. Then it
   runs, in order, `bin/setup --skip-server`, `bin/rails test`,
   `bin/rubocop` and `bin/brakeman --no-pager`. Each must exit 0.
5. It prints the folder's path and keeps the folder, so the assembled app
   can be started there with `bin/dev`. It exits 0 only when every step
   passed. Whoever ran it deletes the folder when done with it.

## Proven twice

The check proves a Recipe on its base. The second proof is a real Mandate
whose spec names the Recipe, built by the kernel's builder. That proof waits
on the kernel reading the commons.
