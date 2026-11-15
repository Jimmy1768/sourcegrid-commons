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
Corrected 2026-10-12 by 18: not proprietary; open when he says.

## 4. What a Recipe is

Date: 2026-10-12
Who: the Director
Decision: "Recipes aren't links. they are scaffolding — not novel or invented code on the spot — that is
read and copied by the builder. Recipes are BIG." Scaffolding with
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
Decision: web app, Rails, server-rendered, Rails 8 on SQLite (corrected by
22: PostgreSQL); API service,
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

## 16. The web-app base is landed, accepted

Date: 2026-10-12
Who: Planning, on the Director's "go" for ASSIGNMENT.1
Decision: Commons Control A's result, branch `web-app-base` at `8424dd2`
(tree `bd0929ca`), is accepted and landed on `main`: `recipes/README.md`,
the commons' Recipe format; `recipes/check`; and `recipes/web-app/`, the
base. Planning verified in the tree: the commit and tree as stated; 94
paths, all added, all under `recipes/`; R1 to R9 re-run and passing, the
assembled app on Ruby 4.0.7, its home page served with status 200; the
check red at a heading first line and at a Ruby the machine lacks. The
plan doc that specified it is deleted with this landing, as the work mode
says; the merge commit names it.
Provenance (decision 12): `rails new code --name=web_app` with Rails
8.1.4 on Ruby 4.0.7, git, docker, kamal, thruster, jbuilder, ci and
devcontainer skipped, Rails' own `.gitignore` and `.gitattributes` taken
from a generation made with git, credentials and master key removed; the
home page, its test and the layout title added. Nothing was carried over
from the former base on sourcegrid-labs' branch `recipe-spreadsheet-import-module`
(`44e6c817`) or from Golden-Template; the Control read the former base and
reported how it differed. `rails new` and the generated `bin/brakeman`
read rubygems.org; the check needs the network for the brakeman step as the
binstub stands.
Reason: every criterion of the plan is met and shown able to fail.

## 17. The sign-in feature is landed, accepted

Date: 2026-10-12
Who: Planning, on the Director's "go" for ASSIGNMENT.2
Decision: Commons Control A's result, branch `sign-in` at `733087a` (tree
`7b572446`), is accepted and landed on `main`: `recipes/sign-in/`, the
first feature Recipe, on the web-app base. Planning verified in the tree:
the commit and tree as stated; 34 paths, all added, all under
`recipes/sign-in/`, no schema dump; R1 to R9 re-run and passing, the check
laying the feature on the base and finding each of its ten changed files
named in *What to wire*, 16 tests, rubocop and brakeman clean, on Ruby
4.0.7; the check red when `config/routes.rb` is left unnamed; live, `/`
redirects to sign-in when signed out and, signed in with the seeded test
login, shows the email address and a sign-out button. The plan doc that
specified it is deleted with this landing; the merge commit names it.
Provenance (decision 12): `bin/rails generate authentication` in Rails
8.1.4 on Ruby 4.0.7, run on a copy of the landed base, for the models,
controllers, screens, mailer, migrations, fixtures and tests; the signed-in
nav, mail to files under `tmp/mails/`, the seeded test login, the app's
README and the extended tests written by the Control for this Recipe.
Nothing was carried over from the former sign-in module on sourcegrid-labs'
branch `recipe-spreadsheet-import-module` (`44e6c817`), which was read as
a source; Planning's rough build on `sign-in-rough` (`a49047b`), reviewed by
Workspace Recovery as ADVICE 263, was the plan's evidence and is deleted
with this landing, as is `web-app-rough` (`bcabeb0`), decision 16's.
Reason: every criterion of the plan is met and shown able to fail.

## 18. The commons can be open; the proprietary innovations stay in sourcegrid-labs

Date: 2026-10-12
Who: the Director, in Workspace Recovery's session, as Recovery relayed
(ADVICE 264): "i think Recipes and Skills put in commons is correct. i
didn't create them out of thin air, i'm reading open source repos. so this
can be open, and later, people can help make it better. but Traits, DDP,
should be proprietary innovations." And: "Domain Map also belongs next to
Traits and DDP."
Decision: the commons' contents, Recipes and Skills, derive from open
sources and may be opened for others to improve; whether and when is his
to say, and nothing is opened before. What stays proprietary is
SourceGrid's own, in sourcegrid-labs beside the Blueprints: the Domain
Maps, DDP and the Traits master list. Nothing of the commons ships inside
the OperatorKit npm package or operatorkit-open; a deployment points at a
checkout of it. Decision 3's "proprietary" is corrected; nothing of the
format or the mechanism changes.
Reason: his, above.

## 19. The reviewer reads no Recipe

Date: 2026-10-12
Who: the Director, in Workspace Recovery's session, as Recovery relayed
(ADVICE 266): "narrow read, reviewer reads none"
Decision: in the kernel the aide reads Recipes while writing the spec, the
builder reads the ones its spec names, and the reviewer reads none; its
standard stays the Map's checks and the spec. A Recipe README's *Checks it
meets* is written for the aide and the builder: what the build must prove,
and how the Recipe's tests model it. Nothing in the format changes.
Reason: his, above.

## 20. The user-kinds feature is landed, accepted

Date: 2026-10-12
Who: Planning, on the Director's "go" for ASSIGNMENT.3
Decision: Commons Control A's result, branch `user-kinds` at `7060227`
(tree `04a7fad6`), is accepted and landed on `main`: `recipes/user-kinds/`,
kinds of user on the web-app base with sign-in beneath it. Planning
verified in the tree: the commit and tree as stated; 16 paths, all added,
all under `recipes/user-kinds/`, no schema dump; R1 to R9 re-run and
passing, each Map phrase counted on its own; the check laying sign-in then
user-kinds, the nine changed files named in *What to wire*, 24 tests,
rubocop and brakeman clean, on Ruby 4.0.7; red with `config/routes.rb`
unnamed; live, the seeded admin opens `/people`, sees every login with its
kind and has the nav link, and the seeded member is sent home to "You may
not open that page." with no link. Beyond the plan, kept: `allow_kinds`
refuses an unknown kind, or none, when the controller loads, so a kind
left unrenamed fails loudly instead of shutting everyone out; the README
shows `only:` and `except:` in a line, proven by the Control in a throwaway
test not carried. The plan doc is deleted with this landing; the merge
commit names it.
Provenance (decision 12): the former user-kinds module on sourcegrid-labs'
branch `recipe-spreadsheet-import-module` (`44e6c817`), read as a source,
its enum, guard, People page, seeds and tests adapted to the landed base
and sign-in; the migration made by `bin/rails generate migration` in Rails
8.1.4. Planning's rough build on `user-kinds-rough` (`c2d98ff`), reviewed by
Workspace Recovery as ADVICE 266, is deleted with this landing.
Reason: every criterion of the plan is met and shown able to fail.

## 21. The linked-accounts feature is landed, accepted

Date: 2026-10-12
Who: Planning, on the Director's "go" for ASSIGNMENT.4
Decision: Commons Control A's result, branch `linked-accounts` at
`eb0811d` (tree `3f774816`), is accepted and landed on `main`:
`recipes/linked-accounts/`, the Director's dependents design on the
web-app base with sign-in beneath it. Planning verified in the tree: the
commit and tree as stated; 25 paths, all added, all under
`recipes/linked-accounts/`, no schema dump, no `national_id`; R1 to R9
re-run and passing, each Map phrase counted on its own; the check laying
sign-in then linked-accounts, the five changed files named in *What to
wire*, 42 tests, rubocop and brakeman clean, on Ruby 4.0.7; red with
`config/routes.rb` unnamed while the first line passes; live, both seeded
logins share Rosa with their own labels, a dependent the carer adds is
404 for the other login until added as its caretaker with a label, and
that caretaker changes their own label with the other's unchanged.
Of his design (Golden-Template `595031a`): kept, a dependent who does not
sign in, a link with a role defaulting to caretaker and what the dependent
is to that user, linked once, several either way; left out, the native
name, the national identity number, metadata and the dependent's own
label, each added when a spec asks; changed, `english_name` to `name`, and
the label kept on the link because it differs per caretaker; added, the
screens, a user reaching only their own, and a dependent going with its
last link, since one left alone is unreachable. Each caretaker sets and
changes their own label (Workspace Recovery, ADVICE 269 and 270). The plan
doc is deleted with this landing; the merge commit names it.
Provenance (decision 12): Rails 8.1.4's scaffold and model generators for
`Dependent` and `UserDependent`; the former linked-accounts module on
sourcegrid-labs' branch `recipe-spreadsheet-import-module` (`44e6c817`) and
Golden-Template's models and auth-core migration, read as sources.
Planning's rough build on `linked-accounts-rough` (`9f7cbc5`) is deleted
with this landing.
Reason: every criterion of the plan is met and shown able to fail.

## 22. The web app base is Rails 8 on PostgreSQL

Date: 2026-10-12
Who: a correction, relayed by Workspace Recovery (ADVICE 272) from the
Director's session with it: "it's not my rule. all Principals building on
my product, would hit a wall going to production, right? … is this really
MY choice? or preference?"; infrastructure with one answer, so not his
choice
Decision: the web-app base's database is PostgreSQL in every environment,
in place of SQLite; decision 5 is corrected on this point and its other
defaults stand. The API service base, when built, follows the same answer.
The check runs each PostgreSQL app against a server of its own for the
run, never the Director's.
Reason: an app built on the commons goes to production, a hosted server
with its own database, backups and room to grow. SQLite is a file on one
machine, opened by the app's own process: no second machine can use it,
one writer at a time, and PostgreSQL's types, `jsonb` among them, are
missing. Every Rails project of his on this machine runs on PostgreSQL, and
his dependents design uses `jsonb`.

## 23. The web-app base on PostgreSQL is landed, accepted

Date: 2026-10-12
Who: Planning, on decision 22 and Workspace Recovery's ADVICE 273, which
found nothing in it that needs the Director
Decision: Commons Control A's result, branch `web-app-on-postgresql` at
`c4cb487` (tree `cd8d3e26`), is accepted and landed on `main`. The base's
`Gemfile` is Rails' own for PostgreSQL, its lock `pg` 1.6.3 for seven
platforms with checksums and no `sqlite3`, its `database.yml` Rails' own
with `gssencmode: disable` in the default block: on macOS, libpq set up for
GSS encryption in a parent crashes a process forked from it, as a server
daemon is, and production on a hosted server needs no GSS either. Sign-in's
`Gemfile` and lock follow the base, `bcrypt` alone added. `recipes/check`
runs each PostgreSQL app against a server of its own per run and names its
version. Planning verified in the tree: the eleven paths; R1 to R4 and R9b;
web-app, sign-in, user-kinds and linked-accounts passing with 1, 16, 24 and
42 runs; the Director's 36 databases and the Ruby 4.0.7 gem cache
identical before and after; a run made to fail stopping and deleting its
server; a kept sign-in app served as a daemon with `PGGSSENCMODE` unset
answering 302 and 200 and staying up. The plan doc is deleted with this
landing; the merge commit names it. Planning's rough build on
`postgresql-rough` (`a52f5c1`) is deleted with it.
Reason: every criterion of the plan is met and shown able to fail.

## 24. The spreadsheet-import feature is landed, accepted

Date: 2026-10-12
Who: Planning, on Workspace Recovery's ADVICE 271 and the Director's word
that the cycle runs without his "go" at each step
Decision: Commons Control A's result, branch `spreadsheet-import` at
`1652eb7` (tree `a43b6a5f`), is accepted and landed on `main`:
`recipes/spreadsheet-import/`, the person's records read from CSV or Excel
with one command and at first setup, on the web-app base alone. The last of
the Director's first contents (decision 6). Planning verified in the tree:
23 paths, all added, all under `recipes/spreadsheet-import/`; R1 to R9;
the check passing on its own PostgreSQL with 23 runs; red with
`db/seeds.rb` unnamed; live, the seeds import the person's file, the
problems file sets two rows aside with their reasons into a file, a rerun
adds nothing, the `.xlsx` imports, an unreadable CSV and a file that is no
workbook are each refused in one line by name with nothing saved, and the
originals are unchanged; the Director's databases and the gem cache
identical before and after. Kept beyond the plan: a zip with no workbook
inside, which raises `ArgumentError` in `roo`, is refused too, a test
proving it; a date's reason shows an example date. Planning's choice on
what the Control left open: a file the seeds cannot read at first setup is
named and setup goes on, since the app still runs and the person sees
which file was refused; the command, run by hand, exits 1. The plan doc is
deleted with this landing; the merge commit names it.
Provenance (decision 12): the former spreadsheet-import module on
sourcegrid-labs' branch `recipe-spreadsheet-import-module` (`44e6c817`),
read as a source, its `contacts.xlsx` taken byte for byte; the model and
migration from Rails 8.1.4's generator; `csv` 3.3.5 and `roo` 3.0.0, MIT and
Ruby's and BSD-2-Clause licences, already installed. Planning's rough
builds `spreadsheet-import-rough` (`6c3f25b`) and
`spreadsheet-import-rough-pg` (`8718a94`) are deleted with this landing.
Reason: every criterion of the plan is met and shown able to fail.

## 25. Kinds and linked accounts in one app is landed, accepted

Date: 2026-10-12
Who: Planning, on Workspace Recovery's ADVICE 269 and 274 and the
Director's "what is next step for YOU", taken as his word for the proof
Decision: Commons Control A's result, branch `kinds-and-linked-accounts` at
`3ddf305` (tree `cf853352`), is accepted and landed on `main`:
`recipes/kinds-and-linked-accounts/`, a feature building on user-kinds and
linked-accounts that carries the five files both change whole, merged, and
a test of the two together. The proof his first Workshop project needs:
sign-in, kinds of user and linked accounts in one app. Planning verified
in the tree: nine paths, linked-accounts' README changed in its combining
section alone; R1 to R6 and R9; the check laying sign-in, user-kinds and
linked-accounts, then it, 55 tests in parallel on its own PostgreSQL, 0
failures; live from a `--keep` server, the admin with both nav links and
the three logins on People, the member with Dependents alone, Rosa on
their list, and People refused; the Director's 36 databases and the gem
cache unchanged. Control A's breaks: with nothing merged, eleven fail,
user-kinds' own among them; a wrong kind in the merged seeds fails the
seeds test. Kept beyond the plan: the seeds proven safe to run twice; the
admin removed with a dependent of its own; an admin refused another's
dependent, 404, so a spec giving admins every dependent changes that test
on purpose. The plan doc is deleted with this landing; the merge commit
names it. Planning's rough build on `kinds-and-linked-accounts-rough`
(`6aba209`) is deleted with it.
On Planning's slip while building the rough build (ADVICE 274): setup run
outside the check made ten `web_app` databases on the Director's server,
and Planning dropped them without his word; the right handling was to
report them and wait. Nothing of his was lost, the list back to its
recorded 36. The plan and Planning's memory now forbid both.
Reason: every criterion of the plan is met and shown able to fail.

## 26. The commons' next contents follow the first project's needs

Date: 2026-10-13
Who: the Director, in Workspace Recovery's session, as Recovery relayed
(ADVICE 282): "i agree with all this, but don't need to rush - we still
build Workshop first, and use it as the test for the first Delegate. we're
still inventing."
Decision: Workshop, and the Software Developer Delegate's first real
project on it, come first. The commons adds a Recipe or a Skill when that
project shows it needs one, and plans nothing ahead of it: no other base,
no other Blueprint's content, nothing for later Delegates.
Reason: his, above; the first project is the test of what the commons
holds.

## 27. The commons is public, on GitHub

Date: 2026-10-13
Who: the Director, in Planning's session: "i created a github repo, let's
initialize it. git@github.com:Jimmy1768/sourcegrid-commons.git"; asked
whether to push to the public repo or make it private first: "Push public".
Decision: the commons' remote is `origin` at that address, public, and
`main` is pushed there with its whole history. The commons is open, as
decision 18 allows on his word. Nothing is pushed without his word in the
session that pushes; one word is one push.
Reason: his; decision 18's reason holds, its Recipes and Skills deriving
from open sources that others may improve.

## 28. Public history holds the library's changes, one commit each

Date: 2026-10-13
Who: Planning, on the Director's "now that history will be public, let's
be careful not to make it messy. this repo is not convoluted anyway, it is
a library of files that everyone can use."
Decision: plans, Recovery's amendments and rough builds live on branches
of their own on this machine, never on `main` and never pushed; each
accepted piece lands on `main` as one squashed commit saying what the
library gains, with its decision; pushed history is never rewritten.
`ops/protocol/repo_context.md` says how.
Reason: of the first 40 commits on `main`, 25 touched plan docs and 7 were
merges; a reader of a public library needs what changed in it, and the
reasoning stays here in this file.

## 29. The Skill registry: every Skill that should exist, by occupation

Date: 2026-10-23
Who: Planning entered it, on the Director's "go" in this session; Workspace
Strategy drafted it on his "write the registry frame" and sent it on his
"send the frame to Commons Planning".
Decision: `skills/REGISTRY.md` indexes every Skill that should exist, built
or not, as `recipes/REGISTRY.md` does for Recipes. Its families are SOC
2018's 23 major and 98 minor groups, with one family, general, above them
for the Skills every Delegate uses. Thirteen rows from one source,
mattpocock/skills: seven general, two built (interview, spec); six under
15-1200 Computer Occupations, three built (test-first, diagnose, review).
The other 97 groups have no source yet. A Skill is built in the Workshop,
as a Mandate on the commons, when a Blueprint being built needs it; no
task goes to a Control session. Where the family is recorded for the
kernel is OperatorKit's to settle, and the registry keeps it as a note.
Entered as Strategy wrote it, with two changes: its count said six built
and seven not, where its rows show five and eight; and the three built
Computer Occupations rows say what each Skill does, as every other row
does, in place of its path.
Reason: his words, 2026-10-23: "there are 98 profession categories and
867 blueprints planned, to be built, by another blueprint, called
Foundry. i aim to cover all of these jobs"; and "besides OperatorKit, we
now build using Workshop ... we can use Planning to enter the needed
docs. but no more Control to build." A source is judged once against the
registry, never once per Blueprint; his decision of 2026-10-17 for
Recipes, organize a complete registry first and build on need, holds for
Skills.

## 30. What enters and what is built is the Director's to say

Date: 2026-10-23
Who: the Director, answering Planning's note that the Skill registry's
rule admitted a row only on an observed need: "rejected. i can build what
i want, this is my repo."
Decision: a row enters either registry on his word, and is built on his
word or when a project being built needs it, never only because the row
exists. The Skill registry's rule of an observed need or failure from a
real session is struck; composing from existing Skills still adds no row.
On that word the Skill registry gains experiment, under general, for the
builder, from karpathy/autoresearch (MIT): measure, change one thing,
measure again with a check the builder may not edit, keep what improved,
record what failed. Sent by Workspace Strategy on his "send the row to
Commons Planning". 14 rows, 5 built; two sources assessed.
Reason: his.

## 31. The commons names Ruby 4.0.7 at its root

Date: 2026-10-23
Who: the Director, in the Workshop; Workspace Recovery's ADVICE 428 of
2026-10-23 reached the same answer
Decision: the root of the commons names Ruby 4.0.7, in `.ruby-version` and in
the root `Gemfile`, in place of the 3.2.3 set in `d4d2e36`. OperatorKit's box
provides the Ruby the root names, so the box provides 4.0.7, which is the Ruby
every Recipe's app names and the only one `recipes/check` will run an app on.
One Ruby for the commons, its Recipes' own, and no kernel change.
Reason: with 3.2.3 at the root the box provided 3.2.3, so every Recipe check
stopped at its first step; naming 4.0.7 fixes that with nothing else changed.

## 32. Tools are the commons' third category; REA is the first

Date: 2026-10-23
Who: the Director, "approve all 4", in this session.
Decision: the commons gains a third category beside Recipes and Skills:
tools, something a model calls. MCP is one way a tool arrives; the category
is the tool, not MCP. The entry's shape is set by Commons Planning: one
document per tool at `tools/<id>/README.md`, never the tool's code, and
`tools/REGISTRY.md` indexes them as the other two registries do. The
kernel's side, what a tool may reach, is not the commons'. The first entry
is REA: an MCP server and CLI, MIT, source github.com/morluto/rea, npm
package rea-agents, its version read when the tool is first used. A Skill
for reading its evidence joins the Skill registry as a row, not yet built:
inspect-without-source, builder. No tool's code is copied in, so the entry
names the licence, and no `THIRD_PARTY_NOTICES.md` line is needed until a
Skill copies the source's text.
Reason: his words, 2026-10-23: "commons is public on purpose. i didn't
invent the things in there, they are all open source. we just need to be
careful not to reveal how our blueprints are built."

## 33. Workshop work lands on main as one commit per Mandate

Date: 2026-10-23
Who: Commons Planning, under the Director's rules that the Workshop builds
and Planning writes only handoffs
Decision: the Workshop builds the commons, never a Control session. Planning
writes the handoff the Workshop's aide reads, in `operatorkit/handoff/`; the
kernel builds on `operatorkit-main`, writing only that branch and its own
`operatorkit-<id>` branches, never `main`. Planning lands Workshop work: it
reads what is new on `operatorkit-main` since the last landing, runs
`recipes/check` on every Recipe the work touches, and lands the work's files as
one commit on `main` with a subject saying what the library gains, a body
naming `Lands operatorkit-main <sha>`, what was verified and "accepted", and the
`DECISIONS.md` entry in the same commit; a Mandate's own test files under
`tests/` stay on `operatorkit-main`. After each landing, and before the next
Mandate starts, `operatorkit-main` is moved to `main`'s new tip.
Reason: `main` is public and holds one commit per change (`DECISIONS.md` 28).
The kernel fast-forwards its own branch, keep commits included, so its branch
is never merged into `main`.

## 34. Rows from OpenMuse and headcount join the registries

Date: 2026-10-23
Who: the Director, in Workspace Strategy's session.
Decision:
- the two tool rows, and the source column;
- the 172 skill rows, with their count by SOC group: 7 in 11-1000, 31 in 11-2000, 3 in 11-3000, 39 in 13-1000, 13 in 13-2000, 52 in 15-1200, 2 in 15-2000, 8 in 23-1000, 10 in 41-3000, and 7 in 43-4000;
- headcount's sources catalog and department structure stay out;
- nothing is copied, so no THIRD_PARTY_NOTICES line is added.
Reason: his words, 2026-10-23: "our harness is a 'control-layer' over Paradigm A. we call it Paradigm B. but that doesn't mean we can't assimilate Paradigm A tools, surfaces, etc. it just has to run THROUGH our Gate." And: "we don't want blueprint design to be public. it is not to hide open sourced code."

## 35. Animation recorded to video joins the Recipe registry as a row

Date: 2026-10-30
Who: the Director, in Workspace Strategy's session ("record, save the recipe").
Decision:
- animation-video is a Recipe row in a new family, B15 Animation, fitting the static-site base, tier 3. It is built when the Marketing Delegate needs its first explainer. Its code will be taken from Remotion or HyperFrames, and its README records where.
- The evidence that the technique gives publishable results is github.com/yihui-dev/awesome-opus5-5-videos: 703 prompts whose videos were made this way. It is cited only; its creators own their videos and prompts, and nothing of it is copied.
- The checks a Map would carry: the video's duration and resolution as specified; a clean render, with no console errors and no missing assets; and a file ffprobe can play.
- Nothing is copied, so no THIRD_PARTY_NOTICES line is added.
Reason: his word.

## 36. A trading pipeline joins the Skill registry as a row

Date: 2026-10-23
Who: the Director, in Workspace Strategy's session ("add it").
Decision:
- trade-pipeline is a Skill row under 13-2000.
- Not taken from AutoHedge: its autonomous execution, since a model moving the person's assets is not a governed artifact; and its risk limits, which are prompts. When the 13-2000 Blueprint is built, its Map carries the risk limit and the execution gate as checks.
- Nothing is copied, so no THIRD_PARTY_NOTICES line is added.
Reason: his word, and his rule for a group with no Blueprint yet: an empty group is never a reason to skip a source, "i will eventually create the Blueprint."

## 37. Isometric figures join both registries as rows

Date: 2026-10-30
Who: the Director, in Workspace Strategy's session ("save both").
Decision:
- isometric-figure is a Skill row under 27-1000 Art and Design Workers.
- isometric-figures is a Recipe row in a new family, B16 Figures, fitting the static-site base, tier 3. Its code is copied from anatomy's kit/ and scripts/ when it is built. It is weak on people and maps.
- The checks a Map would carry: the figure renders in the headless check, the SVG is valid, and its size is as specified.
- Nothing is copied now, so no THIRD_PARTY_NOTICES line is added.
Reason: his word.

## 38. Skills from ECC join the Skill registry as rows

Date: 2026-10-30
Who: the Director, in Workspace Strategy's session ("save both").
Decision:
- 274 rows enter, by group: 14 under 13-1000 Business Operations Specialists; 3 under 13-2000 Financial Specialists; 242 under 15-1200 Computer Occupations; 6 under 27-1000 Art and Design Workers; 9 under 27-3000 Media and Communication Workers. The registry's Counts go from 189 to 463 rows, built still 5; families with a row from 12 to 13, 27-3000 Media and Communication Workers the new one; sources assessed from 6 to 7, adding affaan-m/ECC.
- Left out because rows already there cover them, each named with the row it composes from: agent-introspection-debugging (diagnose); api-design (api-design); blueprint (implementation-planning); brand-voice (brand-voice); competitive-report-structure (competitive-platform-analysis); conventional-commit-review (review); deep-research (research); design-system (design-system); django-tdd (test-first); django-verification (review); flutter-dart-code-review (review); issue-review (review); laravel-tdd (test-first); laravel-verification (review); marketing-campaign (marketing-campaign-planner); master-agreement-generator (contract-review); mcp-dependency-review (review); prediction-market-risk-review (review); prompt-optimizer (prompt-optimizer); quarkus-tdd (test-first); quarkus-verification (review); security-review (security-architecture-review); seo (seo-strategy); springboot-tdd (test-first); springboot-verification (review); tdd-workflow (test-first); verification-loop (completion-verification).
- Left out as one job only, a Trait, not a Skill: ios-icon-gen.
- ECC's harness machinery is not taken — its agents, commands, instincts, memory vault, hooks and AgentShield, which the kernel, the record and the Gate replace — so no row enters for the listed skills that are that machinery: agent-harness-construction, agent-runtime-gateway-smoke-test, autonomous-agent-harness, ck, configure-ecc, deepseek-harness-setup, ecc-guide, ecc-recipes, ecc-tools-cost-audit, gateguard, hookify-rules, unified-memory.
Reason: his word. Nothing is copied, so no THIRD_PARTY_NOTICES line is added.

## 39. Video editing and XERJ join the registries

Date: 2026-10-23
Who: the Director, in Workspace Strategy's session ("send both rows to Commons Planning"; "send the XERJ tools row to Commons Planning").
Decision:
- edit-video is a Skill row under 27-4000.
- video-edit is a Recipe row in a new family, B14 Media, fitting the automation base (Python), tier 3. Transcription is chosen when it is built: Scribe (paid, needs a key) or Whisper (open).
- XERJ is a tool, entered, with its document at tools/xerj/README.md: local only, reads only, its index inside the target.
- When edit-video is adapted, its process falls away: sub-agents, its folder layout, its tool paths, and its "confirm before editing", which the Mandate holds.
- Nothing is copied, so no THIRD_PARTY_NOTICES line is added.
Reason: his word.

## 40. Skills from claude-seo join the Skill registry as rows

Date: 2026-10-30
Who: the Director, in Workspace Strategy's session ("save").
Decision:
- 24 rows enter under 13-1000 Business Operations Specialists.
- Left out because they compose from rows already there: seo-flow (composes from seo-plan and seo-audit), seo (composes from seo-plan and the audit rows).
- Left out as one job only: none.
- Sub-agents and hooks are not taken: they are harness machinery the kernel replaces. The nine live-data extensions under extensions/ wait for the Marketing Delegate's Map as tool rows.
Reason: his word. Nothing is copied, so no THIRD_PARTY_NOTICES line is added.

## 41. The three registries are named shared files

Date: 2026-10-31
Who: the Director's list, sent by Workspace Recovery; placed by Commons Planning.
Decision:
- `.operatorkit-shared` names skills/REGISTRY.md, recipes/REGISTRY.md and tools/REGISTRY.md.
- DECISIONS.md joins the list once a new entry is written "## Next." and numbered at the landing.
- A file that two Mandates both rewrite in place stays unnamed.
Reason: Mandates that only append rows to the same registry no longer wait on each other.

## 42. Skills from TradingAgents join the Skill registry as rows

Date: 2026-11-06
Who: the Director, in this session; Commons Planning wrote it down.
Decision: `skills/REGISTRY.md`'s 13-2000 Financial Specialists table gains five rows from
TauricResearch/TradingAgents (Apache 2.0, github.com/TauricResearch/TradingAgents), all
reviewer and all not yet built: fundamental-analysis, technical-analysis, news-analysis,
sentiment-analysis and risk-review. Nothing is built or copied, so no
`THIRD_PARTY_NOTICES.md` line is needed. Left out: bull-bear debate, which argues over the
other four's findings rather than doing work of its own, and gets no row under the rule that
behaviour composed from existing Skills gets none. Not taken: how TradingAgents arranges its
team, and its backtesting; those are the Blueprint's, not the commons'.
Reason: his words in this session, that the analysts' work be listed as Skills not yet built
beside the trading pipeline already recorded, and that nothing of the source's arrangement or
testing come with them.

## 43. Skills from agentic-awesome-skills join the Skill registry as rows

Date: 2026-11-12
Who: the Director, in this session's handoff; Commons Planning wrote it down.
Decision: `skills/REGISTRY.md` gains rows from sickn33/agentic-awesome-skills (MIT at the
catalog's top; each skill's own licence checked when it is built), all not yet built:

- 13-1000 Business Operations Specialists (86): 360-feedback-system, access-matrix, alumni-re-hire-tracker, announcement-board, attendance, board-governance, buddy-program-manager, business-analyst, candidate-talent-pool, capacity-workload-planner, code-of-conduct, competency-matrix, competitive-landscape, competitor-alternatives, course-upskilling-requests, culture-retention, disciplinary-pip-tracker, employee-suggestion-hub, gamification-engine, harvey-specter, health-wellness, hr-pro, intern-program, issue-grievance-tracker, it-manager-pro, kpi-tracker, leave-management, market-sizing-analysis, mentorship-program, micro-saas-launcher, moatmri, monetization, offboarding-exit, offer-appointment, okr-system, onboarding-playbook, organization-design, people-directory, policy-acknowledgement, pre-boarding, pricing-strategy, pro-launch, probation-tracker, product-manager, product-manager-toolkit, product-marketing, product-marketing-context, project-based-performance, projects-work-management, promotion-upgrade-requests, recognition-rewards, recruit, recruitment-pipeline, remote-work-tracker, risk-manager, saas-mvp-launcher, saas-pricing-strategist, shark, skill-gap-analysis, startup-analyst, startup-business-analyst-business-case, startup-metrics-framework, team-composition-analysis, time-tracking, usage-based-pricing, find-complementary-founders, kotler-macro-analyzer, osterwalder-canvas-architect, healthcare-job-search, neverapply, web-project-brainstorming, blueprint, concise-planning, decision-navigator, not-a-vibe-coder, track-management, before-you-build, idea-autopsy, product-decision-agent, idea-os, project-brief, accint-commitments, progressive-estimation, project-skill-audit, resumable-implementation-contracts, understand-project-yylo.

- 13-2000 Financial Specialists (49): audit-log, audit-preparation, backtesting-frameworks, budget-cash-flow, clients-accounts, credit-cycle-analysis, day-book, esop-equity-tracker, expense-accounting, expense-management, inventory-stock-reconciliation, invoices-billing, monthly-closing-statements, party-ledger-reconciliation, payment-accounting, payments-received, payroll-finance, petty-cash-management, purchase-accounting, receipt-accounting, risk-metrics-calculation, salary-benchmarking, salary-wage-accounting, sales-accounting, tds-booking-payment, quant-analyst, second-deposit-igaming, axonx, calibrate-first, equibles, fxmacrodata, krexa, longbridge, longbridge-content, longbridge-derivatives, longbridge-fundamentals, longbridge-market-data, longbridge-quant, nano-settlement-verify, options-flow-analyzer, traderspy-market-briefing, traderspy-market-screener, traderspy-position-check, traderspy-smart-money, traderspy-trading-signals, warren-buffett, xvary-stock-research, yield-intelligence, doom-pay.

- 15-1200 Computer Occupations (63): accounting-software-selection, admin-access-register, advanced-analytics-dashboard, bamboohr-automation, business-website-setup, company-email-accounts, csv-manual-export, data-export-engine, data-privacy-controls, dei-dashboard, json-schema-manual, notion-manual-import, pipedrive-automation, reports-analytics, zoho-crm-automation, odoo-accounting-setup, odoo-automated-tests, odoo-backup-strategy, odoo-docker-deployment, odoo-ecommerce-configurator, odoo-edi-connector, odoo-hr-payroll-setup, odoo-inventory-optimizer, odoo-l10n-compliance, odoo-manufacturing-advisor, odoo-migration-helper, odoo-module-developer, odoo-orm-expert, odoo-performance-tuner, odoo-project-timesheet, odoo-purchase-workflow, odoo-qweb-templates, odoo-rpc-api, odoo-sales-crm-expert, odoo-security-rules, odoo-shopify-integration, odoo-upgrade-advisor, odoo-woocommerce-bridge, odoo-xml-views-builder, woo-guard, anti-sleep, it-manager-hospital, itil-expert, mailtrap-setting-up-sending-domain, pi-custom-model, powershell-windows, pre-release-review, vps-server-management, asana-automation, basecamp-automation, confluence-automation, freshservice-automation, github-issue-creator, jira-automation, linear-automation, linear-claude-skill, miro-automation, monday-automation, todoist-automation, trello-automation, wrike-automation, shopify-review-triage, monopoly/security-checklist.

- 19-2000 Physical Scientists (3): nexrad-mosaic-construction, nexrad-radar-visualization, radar-satellite-analysis.

- 23-1000 Lawyers, Judges, and Related Workers (9): advogado-especialista, employment-contract-templates, event-staffing-compliance, fda-food-safety-auditor, fda-medtech-compliance-auditor, legal-advisor, lex, leiloeiro-edital, leiloeiro-juridico.

- 23-2000 Legal Support Workers (7): check-identity-pack, detect-ai-text, extract-document-data, find-matching-tenders, screen-adverse-media, verify-citations, verify-document.

- 27-1000 Art and Design Workers (7): brand-kit-print-collateral, design-theme-guide, logo-image-design, presentation-deck, product-design, product-inventor, product-design-harness.

224 rows in all. Left out: already rows in the registry, by that exact name:
carrier-relationship-management, customs-trade-compliance, energy-procurement,
inventory-demand-planning, logistics-exception-management, performance-management,
production-scheduling, quality-nonconformance, returns-reverse-logistics, sales-enablement.
Repeats: asset-it-management (repeats it-asset-management), vendor-contractor-management
(repeats vendor-management), gbp-local-seo-intent (repeats seo-local), seo-directory-backlinks
(repeats seo-backlinks), learning-career-development (repeats learning-and-development),
startup-financial-modeling (repeats financial-modeling), tax-register (repeats tax),
traderspy-technical-analysis (repeats technical-analysis), spec-driven-development (repeats the
commons' aide/spec Skill). Routers over other Skills rather than Skills of their own:
accounting-audit-system-builder, brand-growth-system-builder, crossframe-org. Several listed
skills do the same work, and one row stands for them: plan-writing, writing-plans,
planning-and-task-breakdown and planning-with-files repeat concise-planning; idea-refine and
idea-to-blueprint repeat blueprint; startup-business-analyst-financial-projections and
startup-business-analyst-market-opportunity repeat startup-business-analyst-business-case;
to-issues and to-prd repeat progressive-estimation. One whole job rather than a Skill:
business-email-template, contract-document-renewal, customer-support,
document-management-system, event-staffing-ordering, events-activities, internal-communication,
knowledge-base, kpi-dashboard-design, legal-compliance-vault, linktree-link-hub,
notification-reminder-hub, notion-template-business, outreachgenie-list-audit, policy-library,
revops, sales-automator, social-media-setup, sop-company-wiki, source-document-filing,
spreadsheet-manual-build, stakeholder-investor-reports, team-calendar, template-library,
buywhere-product-catalog, etsy-search-listings, etsy-shop-sales-history, advogado-criminal,
leiloeiro-avaliacao, leiloeiro-ia, leiloeiro-mercado, leiloeiro-risco, monopoly/patterns,
monopoly/scale-benchmarks, monopoly/tech-matrix, artifact-yylo, feature-tracking,
ledger-tasks-yylo, plan-ledger-tasks-yylo, project-state-governor, sred-project-organizer,
sred-work-summary, team-collaboration-issue, team-collaboration-standup-notes, wiki-yylo,
workflow-yylo, movie-coupon, obtain-coupons-all-in-one, parcel-coupon, takeout-coupon,
trip-coupon. Not taken: the catalog's search, skill picker, CLI, MCP server and plugins.
Nothing is copied, so no `THIRD_PARTY_NOTICES.md` line is added.
Reason: his handoff of this session: list the catalog's business, finance, legal and operations
skills as Skills not yet built, each under the job family its work belongs to, skipping what we
already list, what is only a mix of what we have, and what is really one whole job.

## 44. Skills from agentic-awesome-skills' cloud, DevOps and reliability half join the registry

Date: 2026-11-12.
Who: Commons Planning, on the Director's handoff of 2026-11-12.
Decision: the names in the catalog's cloud, DevOps and reliability list that survive the brief's exclusions become rows in `skills/REGISTRY.md` under `15-1200 Computer Occupations`, marked not built, sourced to sickn33/agentic-awesome-skills (MIT at the catalog's top, each skill's own licence checked when it is built), seventy in all; no family gains its first table; the names listed under "What is left out, and why" in the spec are not rows, each for the reason given there — repeats of rows we hold, the same work as another name in the list, whole occupations, names that work only inside one vendor's account, names that are a reference for one named program, and templates.
Reason: the registry is the record of what the commons could build and has not; one entry naming what was taken and what was left out means the next reader does not have to assess the same catalog again.

## 45. Skills from agentic-awesome-skills' backend, API, database and data half join the registry

Date: 2026-11-12.
Who: Commons Planning, on the Director's handoff of 2026-11-12.
Decision: the names in the catalog's backend, API, database and data list that survive the brief's exclusions become rows in `skills/REGISTRY.md`, 32 under `15-1200 Computer Occupations` and 2 under `15-2000 Mathematical Science Occupations`, marked not built, sourced to `sickn33/agentic-awesome-skills` (MIT at the catalog's top, each skill's own licence checked when it is built), thirty-four in all; no family gains its first table; the names listed under "What is left out, and why" in the spec are not rows, each for the reason given there — repeats of rows we hold, the same work as another name in the list, mixes of them, whole occupations, names that work only inside one vendor's account or through one installed program, reference material rather than a job, templates and scaffolds.
Reason: the registry is the record of what the commons could build and has not; one entry naming what was taken and what was left out means the next reader does not have to assess the same catalog again.

## 46. Skills from agentic-awesome-skills' content, writing, media and design half join the registry

Date: 2026-11-12.
Who: Commons Planning, on the Director's handoff of 2026-11-12.
Decision: the names in the catalog's content, writing, media and design list that survive the brief's exclusions become rows in `skills/REGISTRY.md`, 16 under `27-1000 Art and Design Workers` and 19 under `27-3000 Media and Communication Workers`, marked not built, sourced to `sickn33/agentic-awesome-skills` (MIT at the catalog's top, each skill's own licence checked when it is built), thirty-five in all; no family gains its first table; the names listed under "What is left out, and why" in the spec are not rows, each for the reason given there — repeats of rows we hold, the same work as another name in the list, mixes of them, whole occupations, names that work only inside one vendor's account or through one installed program, reference material rather than a job, and templates and scaffolds.
Reason: the registry is the record of what the commons could build and has not; one entry naming what was taken and what was left out means the next reader does not have to assess the same catalog again.

## 47. Skills from agentic-awesome-skills' testing, quality, architecture and workflow half join the registry

Date: 2026-11-12.
Who: Commons Planning, on the Director's handoff of 2026-11-12.
Decision: the names in the catalog's testing, code-quality, architecture and workflow list that survive the brief's exclusions become rows in `skills/REGISTRY.md`, 79 under `15-1200 Computer Occupations`, marked not built, sourced to `sickn33/agentic-awesome-skills` (MIT at the catalog's top, each skill's own licence checked when it is built), seventy-nine in all; no family gains its first table; the names listed under "What is left out, and why" in the spec are not rows, each for the reason given there — repeats of rows we hold, the same work as another name in the list, mixes of them, whole occupations, names that work only inside one vendor's account or through one installed program, templates and scaffolds, reference material rather than a job, and house skills of one plugin suite.
Reason: the registry is the record of what the commons could build and has not; one entry naming what was taken and what was left out means the next reader does not have to assess the same catalog again.

## 48. The commons lists the development catalog's surviving skills

Date: 2026-11-12.
Who: Commons Planning, on the Director's handoff of 2026-11-12.
Decision: the catalog's 285 general development skills were read and listed as not-built rows in `skills/REGISTRY.md`, all under `15-1200 Computer Occupations`; 92 of its names became rows, and 193 are left out with the reason for each. The catalog is MIT at its top, with each skill's own licence checked when it is built.
Reason: the registry is the record of what the commons could build and has not; one entry naming what was taken and what was left out means the next reader does not have to assess the same catalog again.

## 49. Skills from agentic-awesome-skills' marketing and SEO half join the registry

Date: 2026-11-12
Who: the Director, in this session's handoff; Commons Planning wrote it down.
Decision: `skills/REGISTRY.md` gains rows from sickn33/agentic-awesome-skills (MIT at the
catalog's top; each skill's own licence checked when it is built), all not yet built: 164 rows.

- 11-2000 Advertising, Marketing, Promotions, Public Relations, and Sales Managers (41):
  ab-test-setup, ad-campaign-analyzer, awareness-stage-mapper, brand-perception-psychologist,
  churn-prevention, co-marketing, community-building, competitor-analysis,
  competitor-gap-analyzer, customer-psychographic-profiler, define-my-content-pillars,
  developer-audience-context, developer-churn, developer-listening, email-marketing-bible,
  form-cro, free-tier-strategy, free-tool-strategy, identity-mirror, jobs-to-be-done-analyst,
  launch-strategy, lead-magnets, location-based-content-idea-generator, marketing-ideas,
  marketing-mindset, marketing-psychology, objection-preemptor, offers, onboarding,
  open-source-marketing, paid-ads, paywall-upgrade-cro, pitch-psychologist, popup-cro,
  power-user-cultivation, scarcity-urgency-psychologist, sequence-psychologist,
  signup-flow-cro, social-proof-architect, trust-calibrator, viral-generator-builder.

- 13-1000 Business Operations Specialists (82):
  ai-content-detector, ai-keyword-explainer, anchor-text-analyzer, backlink-idea-generator,
  bounce-rate-estimator, broken-link-finder, canonical-tag-checker, canonical-url-builder,
  competitor-keyword-overlap-checker, content-freshness-checker, content-gap-finder,
  content-length-comparator, ctr-predictor, developer-sandbox, domain-authority-simulator,
  duplicate-content-checker, email-systems, featured-snippet-optimizer, geo-audit,
  geo-brand-mentions, geo-citability, geo-compare, geo-content, geo-crawlers, geo-llmstxt,
  geo-platform-optimizer, geo-report, gmb-optimization-helper,
  guest-posting-opportunity-finder, heading-analyzer, http-status-code-tester,
  image-alt-tag-generator, impression-to-click-ratio-calculator, indexing-issue-auditor,
  internal-linking-planner, keyword-clustering-tool, keyword-comparison-tool,
  keyword-density-checker, keyword-difficulty-estimator, keyword-expansion-tool,
  keyword-extractor, keyword-gap-finder, keyword-intent-identifier,
  keyword-placement-highlighter, keyword-roi-calculator, keyword-share-estimator,
  link-relevance-evaluator, link-source-categorizer, link-toxicity-checker,
  local-citation-finder, local-legal-seo-audit, meta-tag-comparison-tool,
  mobile-friendly-test, nap-consistency-checker, nextjs-seo-indexing, og-tag-generator,
  on-page-seo-audit-checker, organic-growth-forecast-tool, page-speed-score-simulator,
  ranking-opportunity-finder, ranking-progress-tracker, redirect-301-generator,
  redirect-checker, robots-txt-creator, robots-txt-validator, schema-markup,
  search-preview-simulator, seo-content-checker, seo-health-score-calculator,
  site-comparison-report-generator, social-metadata-hardening, structured-data-validator,
  text-to-html-converter, text-translator, title-meta-length-counter,
  tools-page-seo-optimizer, traffic-potential-calculator, trending-keyword-visualizer,
  url-slug-generator, visibility-index-calculator, word-count-structure-checker,
  xml-sitemap-visualizer.

- 27-1000 Art and Design Workers (3): ad-creative, post, screenshots.

- 27-3000 Media and Communication Workers (34):
  ai-blog-intro-writer, ai-competitor-title-rewriter, ai-content-improver,
  ai-content-outline-generator, ai-faq-creator, alternatives-pages, blog-title-generator,
  comment-to-dm-cta, content-creator, copy-editing, developer-newsletter,
  docs-as-marketing, draft-my-comments, email-sequence, get-seen-in-replies,
  headline-analyzer, linkedin-content-generator, linkedin-profile-optimizer,
  meta-description-writer, paragraph-keyword-optimizer, postel-writing,
  product-description-generator, readability-enhancer, repurpose-into-a-post,
  review-response-generator, same-idea-both-platforms, seo-aeo-landing-page-writer,
  subject-line-psychologist, tone-of-voice-analyzer, turn-this-into-a-thread,
  wechat-official-account-strategist, why-did-this-post-flop, write-in-my-voice,
  xiaohongshu-content-strategist.

- 41-3000 Sales Representatives, Services (1): cold-email.

- 43-4000 Information and Record Clerks (3): backlink-tracking-template-generator,
  local-seo-audit-checklist, seo-checklist-generator.

164 rows in all. Left out:

Already a row, word for word (left out, no new row): app-store-optimization,
content-strategy, customer-research, programmatic-seo, public-relations,
seo-competitor-pages, seo-dataforseo, seo-drift, seo-geo, seo-hreflang, seo-images,
seo-page, seo-programmatic, seo-schema, seo-sitemap.

The same job as a row we already list, under different words (left out, each repeats
the row named): brand-guidelines, brand-guidelines-anthropic and
brand-guidelines-community repeat brand-voice; copywriting repeats
marketing-copywriting; coupler-marketing-analytics repeats marketing-analytics; cro
and page-cro repeat landing-page-cro-expert; marketing-plan repeats
marketing-planning; pricing and price-psychology-strategist repeat
pricing-and-packaging; referral-program repeats referral-programs; social-content
and social-post-writer-seo repeat social-post-craft; geo-fundamentals repeats
seo-geo; geo-technical repeats seo-technical; hreflang-tag-generator repeats
seo-hreflang; sitemap-generator repeats seo-sitemap.

One kind of work between themselves, so one row stands for them (left out; the name
on the right is the row above): ai-meta-tag-writer, meta-description-optimizer,
meta-tag-generator and seo-aeo-meta-description-generator are meta-description-writer;
ai-schema-generator, ai-schema-markup-generator, schema-markup-generator, geo-schema,
seo-aeo-schema-generator, featured-tool-schema-generator and local-schema-builder are
schema-markup; ai-snippet-generator is featured-snippet-optimizer;
competitor-backlink-idea-generator is backlink-idea-generator;
competitor-ad-intelligence, competitor-profiling, competitor-summary-report-creator
and competitor-tracking are competitor-analysis; domain-comparison-report-tool is
site-comparison-report-generator; faq-generator is ai-faq-creator;
geo-keyword-expansion-tool, keyword-suggestion-tool, long-tail-keyword-generator and
local-keyword-generator are keyword-expansion-tool; headline-psychologist is
blog-title-generator; internal-link-suggestion-tool and seo-aeo-internal-linking are
internal-linking-planner; linkedin-post-writer is linkedin-content-generator;
readability-score-calculator is readability-enhancer; onboarding-cro and
onboarding-psychologist are onboarding; developer-signup-flow is signup-flow-cro;
geo-report-pdf is geo-report; outreach-email-template-generator is cold-email;
growth-engine is a mix of the search, email and growth rows already listed, with no
row of its own.

One whole job: operating one named vendor's own account or connection (left out; each
needs a service, an account or a connection the commons does not have, so it cannot be
a Skill's work here): activecampaign-automation, brevo-automation,
convertkit-automation, instagram, instagram-automation, klaviyo-automation,
linkedin-automation, linkedin-cli, mailchimp-automation, mailtrap-managing-contacts,
reddit-automation, tiktok-automation, twitter-automation, youtube-automation,
x-article-publisher-skill, social-orchestrator, socialclaw, taisly-social-media-posting,
talivia-agent-kit, sequenzy-email-marketing, zhongcao-note-copywriter,
omentir-linkedin-outreach, outreachagent, lead-signals, lurkapi-ad-research, make-ugc,
rea-growth, altorank, lognorm, telegram-channel-ads, reverse-image-search.

One whole job: a role or an engagement run end to end (left out): developer-advocacy
(a role: talks, podcasts, live coding), geo-proposal (an agency's client proposal),
geo-prospect (an agency's client pipeline), seo-aeo-orchestrator (one engagement from
discovery through implementation).

No name is left out for any other reason, and every name in the catalog is accounted
for either as a row above or here. Not taken: the catalog's search, skill picker, CLI,
MCP server and plugins, and how it arranges its own team or tests its ideas. Nothing is
copied, so no `THIRD_PARTY_NOTICES.md` line is added.
Reason: his handoff of this session: list the catalog's marketing and SEO skills as
Skills not built yet, each under the job family its work belongs to, skipping what we
already list, what is only a mix of what we have, and what is really one whole job.

## 50. Skills from agentic-awesome-skills' frontend, mobile and game half join the registry

Date: 2026-11-12.
Who: Commons Planning, on the Director's handoff of 2026-11-12.
Decision: the registry's 15-1200 Computer Occupations table gains the 30 rows in section 2, all not yet built, sourced to `sickn33/agentic-awesome-skills`. Nothing is built or copied, so no `THIRD_PARTY_NOTICES.md` line is needed. Left out, each with its reason written in the spec: the three rows already held word for word, the same work under other wording, the styles, the frameworks' own guides, the vendor-locked and installed-program names, the templates, the whole occupations and platforms, and the names that describe no work.
Reason: the Director's handoff of the brief in this session, that the catalog's frontend, web, mobile and game skills be listed as Skills not yet built, with repeats and whole occupations and vendor-locked names left out.

## 51. Skills from agentic-awesome-skills' everyday-knowledge half join the registry

Date: 2026-11-12.
Who: Commons Planning, on the Director's handoff of 2026-11-12.
Decision: the names in the catalog's health, education, research and everyday-productivity half become rows in skills/REGISTRY.md under the SOC 2018 family each one's work belongs to, marked not built, sourced to sickn33/agentic-awesome-skills (MIT at the catalog's top, each skill's own licence checked when it is built); ten of those families gain their first table; the names below are not rows, each for the reason given beside it. Nothing is built or copied, so no `THIRD_PARTY_NOTICES.md` line is added.

Left out because the registry already lists the work: handoff (the registry's own `handoff` row), session-handoff (the `handoff` row's work under other wording), grill-me and grilling (the source of the registry's `interview` row), grill-with-docs (the `interview` row's work again, with documentation added), interview-me (the `interview` row's work: one question at a time until intent is clear), rich-elicitation (the `interview` row's work under other wording, in several rounds).

Left out because they repeat another name in this same list: teach (the same work as `learn`), meeting-distiller-pro (the same work as `meeting-notes`).

Left out as only a mix of work already listed: brain-to-docs and interview-style-doc-building (interviewing plus writing a spec), court (argument and questioning roles put together into one trial format), office-productivity (an umbrella over document, spreadsheet and presentation work).

Left out as the catalog's own machinery: ask-matt (its skill picker, a router over the catalog's own skills).

Left out as really one whole job: interview-coach (a full job-search coaching system), career-ops (an end-to-end job-search agent), jobgpt (job-search automation from auto-apply through salary intelligence), oss-hunter (hunting contribution opportunities across repositories end to end).

Left out because they work only through someone else's hosted service or account: a4a (the A4A encrypted messaging network, reached through its own MCP tools), cooper-email (a hosted inbox of its own), wellally-tech (the WellAlly.tech knowledge base), apple-notes-search (the apple-notes MCP server), box-automation (Box, through Rube MCP), busabase (a hosted workspace service), byagent (a hosted publishing service and its CLI), cal-com-automation (Cal.com, through Rube MCP), calendly-automation (Calendly, through an authorised connection), docusign-automation (DocuSign, through Rube MCP), dropbox-automation (Dropbox, through Rube MCP), gmail-automation (a Gmail account and its OAuth flow), google-calendar-automation (an authorised Google Calendar integration), google-sheets-automation (an authorised Google Sheets connector), googlesheets-automation (Google Sheets, through Rube MCP), one-drive-automation (OneDrive, through Rube MCP), telegram-bot-messaging (a Telegram bot token and the Bot API), taasky (the hosted Taasky MCP server), workorai (the WorkorAI talent marketplace), syncbook-discovery (the Syncbook platform), people-data (a hosted people-data lookup service), helium-mcp (Helium's MCP server), gemini-deep-research (Google's Gemini Deep Research agent), papers-skill (the Semantic Scholar service), deepapi (a service needing explicit credentials and approval), arcmira-find-quotes (a hosted transcript index), ask-human-expert (the Instant Expert service), jev-social (Jev routing and the socai CLI), longbridge-research (a broker's own research service), perq (a hosted perks database), mcd-secret-menu-lab (an authorised MCP connection to one chain's menus), ppl-personal-crm (the ppl CRM over MCP), linkdigest-social-link-reader (platform pages read through a hosted reader).

Left out because they work only through an installed program or one vendor's tooling: anywrite (a compiled CLI over one product's local API), codex-profiles (one agent product's isolated profiles), keepmacawake (a macOS binary for one machine's lid state), markdown-rendering (cmux panes of one terminal product), obsidian-cli (one note application's command line), obsidian-clipper-template-creator (templates for one browser extension), pi-web-search (an installed web-access package), speed (a launched reader program), context-kit (installing context artefacts into one vendor's agent), youtube-transcript (DeepAPI or local fallback tooling).
Reason: the registry is the record of what the commons could build and has not; one entry naming what was taken and what was left out means the next reader does not have to assess the same catalog again.

## 52. ComfyUI and openjutsu join the tool registry

Date: 2026-11-13.
Who: the Director, in this branch's handoff ("Two tools for video and image work to list, each with its own entry like REA and XERJ, neither one built or used yet"); Commons Planning wrote it down.
Decision: ComfyUI (Comfy-Org/ComfyUI, GPL-3.0) is a tool, entered, with its document at `tools/comfyui/README.md`: the standard open-source runner for image and video models, a node-graph workflow engine with an API, reading local weights and input media and writing its output to a folder the person names, nothing leaving the machine. Because it is GPL-3.0 it is only ever called as a separate program; none of its code goes into the commons or a Recipe.

openjutsu (D3voz/openjutsu, MIT) is a tool, entered, with its document at `tools/openjutsu/README.md`: a Next.js front end over a ComfyUI workflow that swaps a character in a video on the person's own GPU with open-weight models, keeping the camera, cuts, motion and soundtrack; it needs ComfyUI. It is only ever used with the person's own likeness, or footage and characters they hold the rights to.

Both are for the Marketing Delegate's video work, and neither is built or used yet: they wait for when models run on our own GPUs.

Each model's own licence is checked before it serves a paying customer.

Nothing is copied, so no `THIRD_PARTY_NOTICES.md` line is added.
Reason: the registry is the record of what the commons could use, and his handoff names two tools worth listing before they are run.

## 53. Skills from agentic-awesome-skills' AI and agent half join the registry

Date: 2026-11-12.
Who: Commons Planning, on the Director's handoff of 2026-11-12.
Decision: the names in the catalog's AI, machine-learning and agent list that survive the brief's exclusions become rows in `skills/REGISTRY.md` under `15-1200 Computer Occupations`, marked not built, sourced to sickn33/agentic-awesome-skills (MIT at the catalog's top, each skill's own licence checked when it is built), seventeen in all; no family gains its first table; the names listed under "What is left out, and why" in the spec are not rows, each for the reason given there — repeats of rows we hold, the same work as a row we hold or as another name in the list, a framework or library rather than a piece of work, a theory rather than a job, whole occupations, names that are a person's or a product's own and name no work, the catalog's own tooling, names that work only inside one vendor's account, and names that work only through one named installed program.

## 54. Game development Skills from Claude-Code-Game-Studios join the registry

Date: 2026-11-13.
Who: Commons Planning, on the Director's handoff of 2026-11-13.
Decision: the registry's 15-1200 Computer Occupations table gains the 40 rows in section 2, and its 27-1000 Art and Design Workers table the 5 rows in section 3, all not yet built, sourced to `Donchitos/Claude-Code-Game-Studios`. 27-4000 keeps its one row: the catalog's only audio name orchestrates its own agents, which are not taken. Nothing is built or copied, so no `THIRD_PARTY_NOTICES.md` line is needed. Left out, each with its reason written in the spec: the two names the registry already holds word for word, the one whose name another job already holds (listed as `gdd-authoring`), the catalog's three old names, the same work under wording we already list, the two mixes, and the whole jobs and the catalog's own machinery.
Reason: the Director's handoff of this session: list the catalog's 78 game-development skills as Skills not yet built, each under the job family its work belongs to, skipping repeats, mixes, whole jobs and old names, and taking none of its agents, event hooks or path rules.

## 55. Skills from agentic-awesome-skills' security half join the registry

Date: 2026-11-12.
Who: Commons Planning, on the Director's handoff of 2026-11-12.
Decision: the names in the catalog's security list become rows in skills/REGISTRY.md under the SOC 2018 family each one's work belongs to, marked not built, sourced to sickn33/agentic-awesome-skills (MIT at the catalog's top, each skill's own licence checked when it is built); two of those families gain their first table; the names listed under "What is left out, and why" in the spec are not rows, each for the reason given there.
Reason: the registry is the record of what the commons could build and has not; one entry naming what was taken and what was left out means the next reader does not have to assess the same catalog again.

## 56. Meeting minutes from video-db join the Skill registry

Date: 2026-11-13.
Who: the Director, in this branch's handoff of 2026-11-13; Commons Planning wrote it down.
Decision:
- `meeting-minutes` is a Skill row under `43-6000 Secretaries and Administrative Assistants`, marked not built, sourced to `video-db`'s `call.md` (MIT at the source's top, its own licence checked when the Skill is built).
- Its work, in the source's own subject: a meeting transcript turned into a summary, the key discussion points, and action items each with an owner.
- Left out, on the Director's word: the app itself, which needs a person sitting in the meeting; and its reliance on VideoDB, a paid cloud service, for transcription.
- The source's instructions are read properly when the Skill itself is built; nothing is built now.
- Nothing is copied, so no `THIRD_PARTY_NOTICES.md` line is added.
Reason: the registry is the record of what the commons could build and has not; one entry naming what was taken and what was left out means the next reader does not have to assess the same source again.

## 57. Postiz joins the tool registry

Date: 2026-11-14.
Who: the Director, in this branch's handoff ("One more tool to list with its own entry, like REA and XERJ, not used yet"); Commons Planning wrote it down.
Decision:
- Postiz (gitroomhq/postiz, AGPL-3.0, latest release v2.26.0, the repository's main branch at commit 132859f on 2026-11-14, its licence file the GNU AGPL version 3) is a tool, entered, with its document at `tools/postiz/README.md`: a self-hosted social media manager that schedules and publishes posts across the accounts a person connects through each platform's own official login, and reads back their analytics. It reaches only those connected accounts, never scrapes, and never touches an account the person did not connect. A post goes out only on the person's word, per post or per campaign, as the Marketing Delegate's rules set.
- Because it is AGPL-3.0 it is only ever called as a separate service through its API; none of its code goes into the commons or a Recipe. If anyone ever changes it and offers it to others over a network, those changes have to be published; using it unchanged for the person's own posts carries no such condition.
- It is for the Marketing Delegate's posting, and its analytics feed the experiment Skill: a post is the change, and reach is the measure. It is not built or used yet.
- Nothing is copied, so no `THIRD_PARTY_NOTICES.md` line is added.
Reason: the registry is the record of what the commons could use, and his handoff names one more tool worth listing before it is run.

## 58. WhisperX, Piper and Real-ESRGAN join the tool registry

Date: 2026-11-14.
Who: the Director, in this branch's handoff; Commons Planning wrote it down.
Decision:
- WhisperX (m-bain/whisperX, BSD-2-Clause, latest release v3.8.6, main branch at commit b904f02 on 2026-11-12) is a tool, entered, with its document at `tools/whisperx/README.md`: it transcribes speech locally with a timestamp for every word and tells speakers apart, from an audio or video file the person supplied. Its diarization model is fetched once with a Hugging Face token and offline after that.
- Piper (OHF-Voice/piper1-gpl, GPL-3.0-or-later, latest release v1.8.0, main branch at commit 6565650 on 2026-11-13) is a tool, entered, with its document at `tools/piper/README.md`: local text-to-speech for narration, listed at its maintained home; its original home rhasspy/piper (MIT, last release v1.2.0) is left behind. Because it is GPL-3.0-or-later it is only ever called as a separate program; none of its code goes into the commons or a Recipe.
- Real-ESRGAN (xinntao/Real-ESRGAN, BSD-3-Clause, latest release v0.3.0, last changed 2024-04-03) is a tool, entered, with its document at `tools/real-esrgan/README.md`: it upscales images and video locally, on the machine.
- All three are for the Marketing Delegate's video work, and none is built or used yet.
- They come from the stack OpenMontage runs on, but each is its own project; nothing of OpenMontage, which is AGPL, is taken.
- Nothing is copied, so no `THIRD_PARTY_NOTICES.md` line is added.
Reason: the registry is the record of what the commons could use, and the Director's handoff names three tools worth listing before they are run.

## 59. Kronos and the Day Trader Skills join the registries

Date: 2026-11-14.
Who: the Director, in this branch's handoff ("Two things for the finance Delegate, under Financial Specialists, nothing built or used yet"); Commons Planning wrote it down.
Decision:
- Kronos (shiyu-coder/Kronos, MIT, no tagged release, the repository's main branch at commit 67b630e on 2026-04-13, its paper arXiv 2508.02739 accepted at AAAI 2026, open weights on Hugging Face under NeoQuasar) is a tool, entered, with its document at `tools/kronos/README.md`: an open-source foundation model for candlestick price data, trained on more than 45 exchanges, that samples possible future price paths from a ticker's recent candles. Its open sizes are mini (4.1M parameters), small (24.7M) and base (102.3M); the large one is not public. It reads candle data the person supplied, or a market-data source they name. It places no order and gives no advice; it only returns sampled paths.
- Eight Skills from Jakeschincariol's Day Trader pack (MIT), which paper-trades by default and asks before any order, become rows under `13-2000 Financial Specialists`, marked not built, sourced to `Jakeschincariol/day-trader`: trader-scanner, trader-entry, trader-exit, trader-alerts, trader-timemachine, trader-news, trader-analyst and trader-pelosi.
- Left out, each for its reason: `trader-broker`, because placing an order is the Gate's step and never the agent's; `trader-budget` and `trader-risk`, because the trading pipeline already holds position sizing under a risk limit and `risk-review` already checks a proposed decision against risk before it goes further.
- Neither the tool nor the Skills is built or used yet. Nothing is copied, so no `THIRD_PARTY_NOTICES.md` line is added.
Reason: the registries are the record of what the commons could use before it is run, and his handoff names one more tool and a pack of trading Skills worth listing before either is used.

## 60. ffmpeg-skill joins the tool registry

Date: 2026-11-15.
Who: the Director, in this branch's handoff on one more tool for the Marketing Delegate's video editing; Commons Planning wrote it down.
Decision:
- ffmpeg-skill (kajisho5/ffmpeg-skill, MIT, latest release v3.8.20, npm package
  `ffmpeg-skill`) is a tool, entered, with its document at `tools/ffmpeg-skill/README.md`:
  42 local FFmpeg tools with a machine-readable contract and an MCP server — probing a
  file, cutting it by segments, captions, reframing to an aspect and duration, loudness,
  exports for each platform, checking a finished file against a platform's rules, and a
  contact sheet. It reads the video and audio files the person supplied and writes its
  output to a folder they name; there is no cloud service and no API key, and nothing
  leaves the machine; only its optional speech engines download their model weights once,
  the first time they run.
- It needs only Python's standard library and FFmpeg 6.1 or later, and is tested on 6.1,
  7.1, 8 and 9.
- It is for the Marketing Delegate's video editing: a Delegate whose finished work is a
  video calls these tools, alongside WhisperX for transcription and the edit-video Skill.
  It is not built or used yet.
- Nothing is copied, so no `THIRD_PARTY_NOTICES.md` line is added.
Reason: the registry is the record of what the commons could use, and his handoff names one
more tool worth listing before it is run.

## Next. Skills from Anthropic-Cybersecurity-Skills join the Skill registry as rows

Date: 2026-11-15.
Who: the Director, in this branch's handoff on the cloud, container and DevSecOps security Skills; written down on this branch.
Decision:
- mukul975/Anthropic-Cybersecurity-Skills (Apache 2.0, at commit 54a7988) was read for its cloud-security, container-security and devsecops subdomains: 117 Skills.
- 66 of them join the 15-1200 Computer Occupations table as not-built rows, each sourced to mukul975/Anthropic-Cybersecurity-Skills skills/<name>.
- 21 rows the registry already held, doing the same job, gain this library as a second source after the source they hold today, and are not dropped.
- 30 of its names are left out, each because it repeats a skill of the same library kept here, mixes jobs the registry already lists, or is one whole occupation.
- No framework mapping is taken, and no Skill is built.
- The Director's rule for this library: a match gains a second source instead of being dropped.
Reason: a specialist security library adds depth the registry lacks, and his rule keeps one row per job rather than one row per source.

## Next. Skills from Anthropic-Cybersecurity-Skills join the registry as threat hunting, threat intelligence and detection rows

Date: 2026-11-15.
Who: the Director, in this branch's handoff on the threat hunting, threat intelligence and detection security Skills; written down on this branch.
Decision:
- mukul975/Anthropic-Cybersecurity-Skills (Apache 2.0, at commit 54a7988) was read for its threat-hunting, threat-intelligence and threat-detection subdomains: 117 Skills.
- 65 of them join the 15-1200 Computer Occupations table as not-built rows, each sourced to mukul975/Anthropic-Cybersecurity-Skills skills/<name>.
- 6 rows the registry already held, doing the same job, gain this library as a second source after the source they hold today, and are not dropped.
- 46 of its names are left out, each because it repeats a skill of the same library kept here, mixes jobs the registry already lists, or is one whole occupation.
- No framework mapping is taken, and no Skill is built.
- The Director's rule for this library: a match gains a second source instead of being dropped.
Reason: a specialist security library adds depth the registry lacks, and his rule keeps one row per job rather than one row per source.

