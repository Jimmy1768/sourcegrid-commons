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

Proprietary. Nothing here ships in the OperatorKit npm package or in
operatorkit-open. There is no remote today; the Director decides if one is
made.

## Branches

- `main` is the only long-lived branch. There is no production branch and no
  server: the registry says deploy none, and the commons' rule is latest
  only, so `main` is what a deployment names.
- Each task gets its own branch, cut from `main` at the commit its
  `ASSIGNMENT` names, in the one checkout. A Control never commits to
  `main`.
- Planning verifies a `TERMINAL` as `claude_work_mode.md` §7 says, then
  lands accepted work on `main` in the primary checkout, recording
  `accepted` in that commit. Work that turns out wrong is deleted, not
  reverted.

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

- `recipes/check <id>`, from the repository root: assembles a Recipe in a
  folder outside the repository and runs its setup, tests, rubocop and
  brakeman there. Exit 0 is the only pass. It needs `rsync` and the Ruby the
  base's `.ruby-version` names; rbenv on this machine has 3.2.3 and 4.0.7.
- Nothing under `recipes/` names another repository or a path on this
  machine: a grep that must print nothing, named exactly in each plan.
- A green check counts only after it has been shown able to fail.

## Databases

None but SQLite files inside the check's assembled folders, which live under
the system temp directory, never in the repository. A check keeps its folder
so the assembled app can be started; whoever ran it deletes the folder when
its reason ends.

## What is local and what is not

Everything. No step here reaches a server, a provider, or another
repository's history.
