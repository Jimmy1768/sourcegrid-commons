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

