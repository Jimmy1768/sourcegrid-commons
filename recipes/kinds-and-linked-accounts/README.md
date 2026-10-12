Kinds of user and linked accounts in one web app: the five files both change, merged, with a test of the two together.

# Kinds and linked accounts

## What it is

What an app needs when it has both kinds of user and people who sign in
acting for dependents who do not. The Recipes user-kinds and
linked-accounts each build on sign-in alone, and each changes five of the
same files whole, so laying one over the other drops the first one's
changes. This Recipe builds on both, laid in that order, and carries those
five files merged, with a test of the two features together. Every test of
the base, sign-in, user-kinds and linked-accounts runs beside it in the one
app.

- `User` has its kind, `admin` or `member`, and its dependents through its
  links.
- The nav shows People to admins only, and Dependents to everyone signed
  in.
- The routes carry `/people` and `/dependents`, with adding a caretaker and
  leaving.
- The seeds make one test login for each kind and a second member, and one
  dependent the two members share. The app's `README.md` lists them.

Nothing of either feature's rules changes. A kind's pages stay guarded by
`allow_kinds`, and a user reaches only their own dependents, whatever their
kind: an admin is not found another's dependent. A spec that lets admins
reach every dependent says so, and the builder writes that rule.

It exists because the Director's first Workshop project needs all three in
one app, and nothing had proven them laid together.

## The files

Added:

- `test/integration/kinds_and_dependents_test.rb`.

Changed, whole, each described under *What to wire*: `README.md`,
`app/models/user.rb`, `app/views/layouts/application.html.erb`,
`config/routes.rb`, `db/seeds.rb`. Each differs from user-kinds' by
linked-accounts' change, and from linked-accounts' by user-kinds' change.

Every other file comes from the features beneath, unchanged.

## Generic names

- The kinds, `admin` and `member`, and the words "dependent" and
  "caretaker": as user-kinds and linked-accounts say, renamed to the spec's
  own in both at once, so the merged files keep one set of names.
- `admin@example.com` with password `test-login-admin`,
  `member@example.com` with password `test-login-member`, and
  `carer@example.com` with password `test-login-carer`, a second member,
  who share the dependent Rosa Ortega: the test logins, in `db/seeds.rb`
  and the app's `README.md`. They replace sign-in's `person@example.com`.
  The person's app gets its own, and changes them before anyone else uses
  it.
- The fixtures, from user-kinds and linked-accounts, and the dependent the
  combined test adds: the tests' own, not the person's.

## What to wire

Each file beneath that this feature changes, and what the change does:

- `README.md`: the app's own README, listing a test login for each kind and
  the second member, and both the People and Dependents pages.
- `app/models/user.rb`: linked-accounts' links and dependents, and
  user-kinds' `kind` enum, together.
- `app/views/layouts/application.html.erb`: the nav with People for admins
  and Dependents for everyone signed in.
- `config/routes.rb`: `resources :people, only: :index` beside the
  dependents' routes.
- `db/seeds.rb`: the logins of both, each with a kind, and the shared
  dependent with what she is to each member.

## The tests

- `test/integration/kinds_and_dependents_test.rb`:
  - an admin's nav has People and Dependents;
  - a member's has Dependents and not People;
  - a member reaches their own dependents and is turned away from People,
    and an admin opens People but is not found another's dependent;
  - the seeds, loaded as development would, make the three logins with
    their kinds and Rosa Ortega with her two caretakers and their labels,
    and loaded again make nothing twice, so the merged seeds cannot drift
    unseen;
  - removing a user of either kind removes the dependents only they cared
    for.
- Beside it, every test of the base, sign-in, user-kinds and
  linked-accounts, in the one app: 55 in all, more than fifty, so Rails
  runs them in parallel workers.

## Checks it meets

For the aide writing the spec and the builder building it: what the build
must prove for each check of the New software Map, now with both features
in one app, and how the tests model it.

- `new-software/web-app/sign-in`,
  "Each kind of user sees and does only what that kind may":
  each kind's pages turn the other kinds away, and each user reaches only
  their own dependents, whatever their kind. `PeoplePageTest` and
  `KindsAndDependentsTest` model it.
- `new-software/web-app/sign-in`,
  "Each kind of user has a test login, listed for the person":
  one login per kind, and a second member to share a dependent, made by
  `db/seeds.rb` and listed in the app's `README.md`. The seeds test
  guards them.
- `new-software/web-app/screens`,
  "Navigation suits each kind of user":
  each kind sees links only to pages it may open. `KindsAndDependentsTest`'s
  two nav tests model it.
- `new-software/web-app/things-tracked` and `new-software/web-app/rules`:
  as linked-accounts meets them, its tests passing beside the kinds.
