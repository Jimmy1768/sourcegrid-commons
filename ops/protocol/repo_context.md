# SourceGrid Commons — Repo Context

Everything that applies here and nowhere else. Coordination is in
`claude_work_mode.md`; how work is done is in `work_mode_config.md`. Both are
received from the workspace and never edited here. What the commons is, and
why, is in `README.md`; every decision and its reason is in `DECISIONS.md`.

## What this repository is

Content, not a product. The commons every OperatorKit Delegate reads:
Recipes and Skills. Nothing here is served, deployed or installed as
a package. The kernel will read it as a folder the deployment names beside
the Blueprint's; that reading is OperatorKit Planning's and is not yet built.

Open: public since 2026-10-13, on the Director's word (`DECISIONS.md` 18,
27); its contents derive from open sources. Nothing here ships inside the
OperatorKit npm package or operatorkit-open; a deployment points at a
checkout. The remote is `origin`, git@github.com:Jimmy1768/sourcegrid-commons.git, public
(`DECISIONS.md` 27). Nothing is pushed without the Director's word in the
session that pushes; one word is one push.

## Branches and history

`main` on GitHub is public and is the library itself (`DECISIONS.md` 27, 28), so its history holds the library's changes and nothing of how they were made. On this machine there are two histories (`DECISIONS.md` 67).

- `main` here is the Floor's. Work is built in the Workshop, never by a Control session (the Director, 2026-10-23). Commons Planning writes the handoff the Workshop's aide reads, in `operatorkit/handoff/`, which git ignores. The kernel builds on `operatorkit-main` and its own `operatorkit-<id>` branches, and the Floor's merge fast-forwards `main` to `operatorkit-main`. The Floor's `main` keeps every Mandate's commits and test files as the kernel's record names them. It has no upstream, is never pushed, and is never rewritten.
- `public` is what GitHub reads. Each accepted piece is one commit on it: a subject saying what the library gains, in plain words; a body saying what it adds, then `Lands operatorkit-main <sha>` and "accepted". The `DECISIONS.md` entry is in the same commit. The Mandates' own test files, every path a "Tests for" commit has touched, stay off `public`, because they test one Mandate's change and pin the tree as it stood.
- Commons Planning confirms each Mandate on the Floor's `main` after the Director merges it. When he asks for a publication, Planning writes one landing per piece since the last one, and `public` is built from the Floor's `main` by `operatorkit/handoff/publication/build_public.py`. The script checks that the tip's tree is the Floor's tree less the left-out paths, and that GitHub's `main` fast-forwards to it.
- Only `public` is pushed, as GitHub's `main` (`git push origin public:main`), and only on the Director's word in the session that pushes. Pushed history is never rewritten.
- This departs from `work_mode_config.md`'s "a plan for work not yet started belongs on `main`": here GitHub's `main` is what the public reads.

## One checkout

`~/Projects/sourcegrid-commons`, shared by Planning and the Controls on the
Director's word of 2026-10-12 (`DECISIONS.md` 15). No worktrees. So:

- One open assignment at a time.
- While one is open, Planning switches no branch and reads `main` with
  `git show main:<path>`.
- A Control leaves the checkout on its branch, clean, at the commit its
  `TERMINAL` names, and touches nothing after.
- Planning verifies there, then lands accepted work on `main` there.

## Sources

Golden-Template and sourcegrid-labs' checkouts on this machine are read-only
sources a Control takes code from (`DECISIONS.md` 13). Nothing under
`recipes/` may name them or any path on this machine.

## Checks

- `recipes/check <id> [--keep]`, from the repository root: assembles a
  Recipe in a folder outside the repository and runs its setup, tests,
  rubocop and brakeman there, against a PostgreSQL server of its own for the
  run. Exit 0 is the only pass. It needs `rsync`, the Ruby the base's
  `.ruby-version` names (rbenv on this machine has 3.2.3 and 4.0.7, and
  `pg` 1.6.3 for 4.0.7), and PostgreSQL's `initdb` and `pg_ctl` (14.18 here).
- The commons' reviewers run `recipes/check <id> --offline` as a Recipe's
  check, since nothing can be fetched where they work. On an Expo app every
  npm install and npm ci the check runs carries `--offline`, so npm installs
  from the local npm cache only, and `npm audit`, which needs the network, is
  skipped with a line saying so. Where the cache lacks a package the install
  fails and the check stops naming it: that is the answer, not a fault. On a
  Rails app the flag changes nothing, and the check says so. Exit 0 is still
  the only pass.
- No gem is downloaded or installed in this repository's work: gems resolve
  from what is installed, and `bundle lock` reads the index's metadata only.
  A full `rails new` without `--skip-bundle` downloads the newest gems.
- Nothing under `recipes/` names another repository or a path on this
  machine: a grep that must print nothing, named exactly in each plan.
- A green check counts only after it has been shown able to fail.

## Databases

None on the Director's own PostgreSQL server. Each run of `recipes/check`
makes a server of its own with `initdb` in a folder under the system temp
directory, on a free port on 127.0.0.1, and stops and deletes it when the
run ends, passing, failing or interrupted (`DECISIONS.md` 22, 23); runs
never meet. With `--keep` the server is left running and the check prints
how to reach it and the command that stops and deletes it; whoever kept it
runs that command when done. The check keeps the assembled app's folder;
whoever ran it deletes the folder. A command that deletes a folder names it
by its literal path.

## What is local and what is not

Everything but a push of `main` to `origin`, made only on the Director's
word. No other step reaches a server, a provider, or another repository's
history.
