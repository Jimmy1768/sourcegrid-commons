# Decisions

Each decision with its date, who made it, and its reason, newest last. The
Director's words are quoted; everything else is Planning's reading, and a
reading is his to correct.

## 1. Its own repository, named commons

Date: 2026-10-12
Who: the Director
Decision: the shared know-how every Delegate reads is its own repository
beside sourcegrid-labs ("don't nest it inside sourcegrid-labs, it's already
doing a lot"), named a commons.
Reason: "library" already means a code dependency in his documents and the
registry; a commons is shared know-how owned by no Delegate.

## 2. What belongs here

Date: 2026-10-12
Who: the Director, with Workspace Recovery's reading
Decision: two questions sort everything the kernel installs: is it this one
job's or general know-how any Delegate uses, and does the kernel enforce it
or only tell it to a model. The commons holds the general and told: Recipes
and Skills. The Blueprint keeps this job's: Domain Maps, DDP, Traits. A Skill
about one job is a Trait and stays in its Blueprint.
Reason: versions follow enforcement. A Mandate must be judged by the Map it
was entered under; a boost needs no fixed reference.

## 3. The commons' rules

Date: 2026-10-12
Who: the Director
Decision: read-only for every Delegate; latest only, nothing versioned ("a
Recipe is not a versioned-blocker, it's a boost, using tested code"; "one
upgrade to Recipe helps all Delegates that need it"); nothing here points to
another repository; proprietary, shipping in neither the OperatorKit npm
package nor operatorkit-open.
Reason: one item serves many Delegates, each its own way; a misfit against
a versioned Map is caught by the Map's checks at the build.

## 4. What a Recipe is

Date: 2026-10-12
Who: the Director
Decision: "Recipes aren't links. they are tested, finished, code, that is
read and copied by the builder. Recipes are BIG." Finished, tested code with
generic names: a whole app that runs, a whole feature with its screens, tests
and seeds, a spreadsheet import. The builder reads it whole and builds the
work's own version from it; the aide reads it while writing the spec, and the
spec names the Recipes a build uses. The size test: if the builder would have
to write code rather than adapt it, the Recipe is too small. Rejected the
same day in sourcegrid-labs: thin overlays of example names to rename, "read
and translated, never copied" as a rule, items dropped because a model does
them well, and a README citing Golden-Template paths.
Reason: "each Delegate will use excel-sheet differently, that's why they do
not direct-copy the code — it's a read, which is the boost."

## 5. The stack checkpoint

Date: 2026-10-12, following his decisions 23 and 24 of 2026-10-09 in
sourcegrid-labs
Who: the Director
Decision: web app, Rails, server-rendered, Rails 8 on SQLite; API service,
Rails without screens; mobile app, Expo; rich app-like screens, a capability,
React on the Rails back end; browser extension, TypeScript; automation and
data reports, Python; static site, a static site generator. The commons
follows these.
Reason: each base its field's boring default, "not only what I know".

## 6. The first contents, in order

Date: 2026-10-12
Who: the Director
Decision: what his first Workshop project needs: the web-app base; sign-in;
user-kinds; linked-accounts, his dependents design, its code taken from
Golden-Template; then spreadsheet-import. Other bases when a category's
first real Mandate needs them, not before.
Reason: his own.

## 7. Skills wait for the kernel

Date: 2026-10-12
Who: the Director
Decision: the five Skills in the Operator Blueprint move here when the
kernel reads Skills from the commons; nothing moves before that.
Reason: today the kernel reads Skills from the Blueprint's manifest, and a
Skill in two places is read from the wrong one.
Superseded 2026-10-12 by 14: the manifest was reverted, so nothing read
the Skills anywhere.

## 8. Infrastructure is Planning's

Date: 2026-10-12
Who: Planning, under the Director's standing rule that engineering with one
answer is never his decision (Workspace Recovery's ADVICE 259)
Decision: the layout, the Recipe format and the tooling are Planning's to
set and show him before they land. The occasion: asked the layout questions
of this day, he answered "i don't know. these are infra questions."
Reason: his rule of 2026-10-09, "don't invent things without telling me",
is met by showing, not by asking. Decisions 9 to 13 are Planning's under
this one.

## 9. One flat folder per Recipe

Date: 2026-10-12
Who: Planning
Decision: `recipes/<id>/`, the kind stated in its `recipe.yml`, with no
`bases/` and `modules/` folders. A Recipe is a base or a feature.
Reason: the kernel will tell each role an index of name and one line
(Recovery's ADVICE 257), so one folder name is one item. Supersedes the
bases-and-modules split he agreed on 2026-10-09 for the sourcegrid-labs
design, which decision 8 left to Planning.

## 10. A feature Recipe holds its own files, whole

Date: 2026-10-12
Who: Planning, on Recovery's reading of the Director's words
Decision: a base holds a whole app that runs. A feature holds every file it
adds or changes, whole, at its path inside its base, with the screens, tests
and seeds that belong to it; its README says what to wire. The check lays a
feature on its base and on the features it builds on, and runs the tests
there.
Reason: the base is kept once, and a feature's whole files are what the
builder reads. What keeps a feature from being a thin overlay is the size
test of decision 4, not the mechanism.

## 11. The README's first line is the index line

Date: 2026-10-12
Who: Planning
Decision: the first line of each Recipe's `README.md` is its one-line
description, with no heading mark; the check fails a README whose first line
is missing, is a heading, or runs on.
Reason: the kernel will tell each role a Recipe's name and its README's
first line (ADVICE 257).

## 12. Provenance is recorded here, never in a Recipe

Date: 2026-10-12
Who: Planning
Decision: where a Recipe's code was taken from is recorded in this file, by
repository and commit, when the Recipe lands. No Recipe names another
repository or a path on this machine.
Reason: a README citing Golden-Template paths was rejected (decision 4), and
the code lives here; but what was taken has to be answerable somewhere.

## 13. Sources are read on disk, read-only

Date: 2026-10-12
Who: Planning
Decision: a Control takes code from Golden-Template and from sourcegrid-labs'
checkouts on this machine by reading them, writes only in its own worktree,
and never fetches their history into this repository.
Reason: decision 3's rule that nothing points to another repository; an
imported history would.

## 14. The Skills received from the Operator Blueprint

Date: 2026-10-12
Who: the Director, "manage it" to Workspace Strategy on SourceGrid
Planning's handoff of the transfer; in Planning's session: "go"
Decision: the eight files of `blueprints/operator/skills/` at sourcegrid-labs
`915eda26` are received into `skills/`, content-identical, at the same
paths: `THIRD_PARTY_NOTICES.md`; `aide/interview/SKILL.md`;
`aide/spec/SKILL.md`; `builder/diagnose/SKILL.md`;
`builder/test-first/SKILL.md`, `mocking.md`, `tests.md`;
`reviewer/review/SKILL.md`. The layout is `skills/<role>/<name>/`, the role
folder being how the kernel knows which role loads a Skill (OperatorKit
Planning, from his decision of 2026-10-09: "which role loads which Skill is
the kernel's part, which no SKILL.md says"); a folder named for no role of
the kernel's is refused. Strategy sequences the transfer: the labs copy is
removed by SourceGrid Planning on Strategy's word after Strategy verifies
this copy; the kernel's reader is planned after OperatorKit's ASSIGNMENT
150 lands (Strategy, relaying his word in OperatorKit Planning's session;
no record here holds it), and until then nothing reads either copy. Provenance:
sourcegrid-labs `915eda26`, where they were adapted from mattpocock/skills
`b0618bc436ad893b3c5e84e55fba86586d34a404` (MIT); the notice travels with
them.
Reason: the manifest that made the kernel read Skills from the Blueprint
was reverted (sourcegrid-labs `57bd3166`), so decision 7's reason has no
premise, and one copy received before the reader lands is as inert as the
one it replaces.

## 15. Controls work in the one checkout

Date: 2026-10-12
Who: the Director, as Commons Control A relayed his words to it ("this is
wrong. you should be inside sourcegrid-commons, not in your own project");
his to confirm in Planning's session
Decision: a Control works in `~/Projects/sourcegrid-commons`, on its own
branch, not in a worktree; the two worktrees Planning made this day are
removed. One assignment is open at a time, Planning stays off the checkout
while it is, and the Control leaves it on its branch, clean, when done.
Reason: his own. Planning's reading: a worktree folder is another project
to the app, so a Control there is outside the repository's session.

