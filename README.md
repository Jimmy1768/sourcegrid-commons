# sourcegrid-recipes

The shared, read-only library of Recipes that OperatorKit Delegates read.
Its own repository, beside sourcegrid-labs and never inside it (the
Director, 2026-10-12: "don't nest it inside sourcegrid-labs, it's already
doing a lot").

## What a Recipe is

The Director, 2026-10-12: "Recipes aren't links. they are tested, finished,
code, that is read and copied by the builder. Recipes are BIG." And: "each
Delegate will use excel-sheet differently, that's why they do not
direct-copy the code — it's a read, which is the boost."

A Recipe is finished, tested code for a kind of artifact or one piece of
it: a whole app that runs, a whole feature with its screens, tests and
seeds, a spreadsheet import. The builder reads it whole and builds the
work's own version from it, inventing and debugging nothing the Recipe
already solves. The aide reads it while writing the spec, and the spec
names the Recipes a build uses, as many as it needs.

## The library's rules

- Read-only, for every Delegate: one Recipe serves many Delegates, each its
  own way; one upgrade helps all of them.
- Latest only. A Recipe has no version: "a Recipe is not a versioned-blocker,
  it's a boost, using tested code." A misfit is caught by the Domain Map's
  checks at the build.
- Nothing in a Recipe points to another repository. Golden-Template and
  other repositories are read-only sources the code is taken from; the code
  lives here.
- Not part of any Blueprint. A Blueprint is Traits, Skills, Domain Maps and
  DDP; the kernel reads this library as a folder the deployment names beside
  the Blueprint's.
- Proprietary. Nothing of it ships in the OperatorKit npm package or in
  operatorkit-open.

## Layout and first contents

Set by this repository's Planning when the Director names it. The stack
checkpoint each base follows is his decision of 2026-10-09: web app, Rails,
server-rendered; API service, Rails without screens; mobile app, Expo;
rich screens, React on the Rails back end; browser extension, TypeScript;
automation and data reports, Python; static site, a static site generator;
the web-app base Rails 8 on SQLite. The first Recipes are what his first
Workshop project needs: a Rails web app with sign-in, kinds of users and
linked accounts; then spreadsheet import.
