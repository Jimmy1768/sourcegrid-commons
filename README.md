# sourcegrid-commons

The commons every OperatorKit Delegate reads: shared, read-only general
know-how, told to a model and enforced by nothing, owned by no Delegate. Its own repository,
beside sourcegrid-labs and never inside it (the Director, 2026-10-12:
"don't nest it inside sourcegrid-labs, it's already doing a lot").

## What belongs here, and what does not

Two questions sort everything a kernel installs (the Director's design,
2026-10-12, with Recovery's reading):

1. Is it about this one job and its person, or general know-how any
   Delegate uses?
2. Does the kernel enforce it, or only tell it to a model?

| | enforced by the kernel | told to a model |
| --- | --- | --- |
| general | the General Map and the Gate: the kernel itself (operator-kit) | **this commons**: Recipes, Skills |
| this job's | the Domain Map, versioned and pinned | Traits, DDP, the Map's rules — the Blueprint (sourcegrid-labs) |

So this commons holds what is general and told. The Blueprint keeps what is
this job's: its Domain Maps, its Traits and its DDP. A Skill about one job
(how a legal Delegate cites a statute) is a Trait and stays in its Blueprint.

## The commons' rules

- Read-only, for every Delegate: one item serves many Delegates, each its
  own way; one upgrade helps all of them.
- Latest only. Nothing here has a version: "a Recipe is not a
  versioned-blocker, it's a boost, using tested code." Enforcement needs a
  fixed reference, so the Domain Map is versioned; a boost needs none. A
  misfit is caught by the Domain Map's checks at the build.
- Nothing here points to another repository. Golden-Template and other
  repositories are read-only sources the code is taken from; the code lives
  here.
- The kernel reads this commons as a folder the deployment names beside the
  Blueprint's, tells each role its index (name and one-line description) at
  every request, and a role loads an item whole only when its task needs it.
- Open, on the Director's word of 2026-10-13: public at
  github.com/Jimmy1768/sourcegrid-commons. Its Recipes and Skills derive
  from open sources and may be improved by others later. What stays
  proprietary is
  SourceGrid's own, in sourcegrid-labs: the Domain Maps, DDP and the Traits
  master list. Nothing of this commons ships inside the OperatorKit npm
  package or operatorkit-open; a deployment points at a checkout of it.

## recipes/

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

The stack checkpoint each base follows is his decision of 2026-10-09: web
app, Rails, server-rendered; API service, Rails without screens; mobile app,
Expo; rich screens, React on the Rails back end; browser extension,
TypeScript; automation and data reports, Python; static site, a static site
generator; the web-app base Rails 8 on PostgreSQL (corrected on
2026-10-12, `DECISIONS.md` 22). The first Recipes are what
his first Workshop project needs: a Rails web app with sign-in, kinds of
users and linked accounts; then spreadsheet import.

## skills/

A Skill is how a role does its work (test-first, diagnose, review,
interview, spec), in the industry's SKILL.md form unchanged: a `name` and a
one-line `description`, then its instructions, with supporting files beside
it. Each sits at `skills/<role>/<name>/SKILL.md`. The role folder, one of
the kernel's (aide, builder, reviewer, scribe, triager), is how the kernel
knows which role loads it; a folder named for no role is refused. The five
adapted from mattpocock/skills (MIT) were received from the Operator
Blueprint on 2026-10-12, content-identical, with `THIRD_PARTY_NOTICES.md`
beside them; the kernel reads them from here once its commons reader lands
(`DECISIONS.md` 14).

## Layout

Set by Commons Planning on 2026-10-12, on the Director's "i don't know.
these are infra questions." Each choice and its reason is in
`DECISIONS.md`.

- `recipes/<id>/`: one folder per Recipe, flat, its kind stated inside.
  `README.md`, whose first line is the one line the kernel's index tells;
  `recipe.yml`, with `id`, `kind` (`base` or `feature`) and, for a feature,
  `fits` and `builds_on`; `code/`, the whole app for a base, or every file
  a feature adds or changes, whole, at its path inside its base.
- `recipes/README.md` and `recipes/check`: what a Recipe is, how one is
  made and proven, and the assembly check that lays a feature on its base
  and runs the tests there.
- `skills/<role>/<name>/`: the Skills, each with supporting files beside
  its `SKILL.md`; `skills/THIRD_PARTY_NOTICES.md` beside them.
- `DECISIONS.md`: each decision with its date, who made it and its reason,
  the Director's words quoted. Where a Recipe's code was taken from is
  recorded there, never in the Recipe.
- `ops/protocol/`: the session protocol and work mode, received from the
  workspace; `repo_context.md`, this repository's own.
- `ops/docs/plans/`: plan docs, deleted when their work lands.

Named a commons, not a library, on 2026-10-12: "library" already means a
code dependency in the documents and the registry; a commons is shared
know-how owned by none.
