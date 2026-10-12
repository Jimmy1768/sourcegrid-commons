Linked accounts on web-app with sign-in: people who sign in act for dependents who do not, with screens and rules.

# Linked accounts

## What it is

People who sign in acting for others who do not, such as a parent for a
child or a carer for an older person. It is the Director's dependents
design, in plain Rails with no added library, on the web-app base with
sign-in beneath it.

Kept of that design:

- A dependent is a person who does not sign in.
- A link joins a user to a dependent, with a role, `caretaker` when not
  given, and what the dependent is to that user, such as "mother".
- A user and a dependent are linked once.
- A dependent can have several caretakers, and a user several dependents.

Left out, each added when a spec asks for it:

- The dependent's name in another script.
- A national identity number: no v1 output calls for one, and it is the
  riskiest thing to hold.
- A free-form metadata column on the dependent and on the link.
- A label on the dependent itself. What the dependent is to someone is
  kept on the link, because with several caretakers it differs for each,
  which one label on the dependent cannot say.

Changed: the dependent's name is `name`.

Added, which that design does not have:

- The screens, at `/dependents`, each needing sign-in:
  - the list of the signed-in user's own dependents;
  - add, with a name, an optional birthdate, and what the dependent is to
    the user, who becomes its caretaker;
  - a dependent's page: its details, and its caretakers, each with what
    the dependent is to them;
  - edit, where the signed-in caretaker also changes what the dependent is
    to them, saved with the details, together or not at all, and never
    another caretaker's label;
  - add a caretaker by the email address of someone who can sign in, with
    what the dependent is to them, optional; an unknown address, or one
    already linked, is refused with a message;
  - leave, "Stop caring for": the user removes their own link, and the
    list says whether the dependent stays with its other caretakers or was
    removed with its last.
- A signed-in user reaches only their own dependents. Each is found through
  `Current.user.dependents`, so another user's is not found, 404, for every
  action, adding a caretaker among them. This and the screens follow from
  the Map's "by those allowed to".
- A dependent goes with its last link, whether its last caretaker leaves or
  is removed. This is the one product rule added: a dependent left alone
  could never be reached, since a user reaches only their own. A spec in
  which some kind of user reaches every dependent may keep them instead.
  A dependent is removed only this way, so there is no destroy action.
  Removing a dependent, as the rule does, removes its links.
- A Dependents link in the nav; a second test login and one dependent the
  two share, in the seeds; the tests.

## The files

Added:

- `app/models/dependent.rb`: a name, required in the model and the
  database, and an optional birthdate; its links, removed with it.
- `app/models/user_dependent.rb`: the link. A user, a dependent and a role
  are required; a pair is linked once; a dependent goes with its last link.
- `app/controllers/dependents_controller.rb`: list, show, new, create,
  edit, update and leave. `app/controllers/caretakers_controller.rb`: add
  a caretaker by email.
- `app/views/dependents/`: `index.html.erb`, `show.html.erb`,
  `new.html.erb`, `edit.html.erb`, `_form.html.erb` and
  `_dependent.html.erb`, from Rails' scaffold.
- `db/migrate/20261012122333_create_dependents.rb` and
  `db/migrate/20261012122334_create_user_dependents.rb`, with the unique
  index on the pair. Their stamps are this Recipe's generation; the
  person's app gets its own.
- `test/fixtures/dependents.yml`, `test/fixtures/user_dependents.yml`.
- `test/models/dependent_test.rb`, `test/models/user_dependent_test.rb`,
  `test/controllers/dependents_controller_test.rb`,
  `test/controllers/caretakers_controller_test.rb`.

Changed, whole, each described under *What to wire*: `README.md`,
`app/models/user.rb`, `app/views/layouts/application.html.erb`,
`config/routes.rb`, `db/seeds.rb`.

Not carried: `db/schema.rb`, which `bin/setup` writes from the migrations.

## Generic names

- "Dependent" and "caretaker": the one who does not sign in and the one who
  acts for them. The spec names its own, such as pupil and parent, or
  client and carer. They replace these in the models, the tables, the
  routes, the screens, the seeds, the fixtures and the tests. The rules
  stay: a user reaches only their own, a pair is linked once, and a
  dependent goes with its last link.
- `person@example.com` with password `test-login`, and `carer@example.com`
  with password `test-login-carer`: the test logins, who share the seeded
  dependent Rosa Ortega, in `db/seeds.rb` and the app's `README.md`. The
  person's app gets its own, and changes them before anyone else uses it.
- The fixtures' users `one@example.com` and `two@example.com`, with the
  password `password`, and the dependents Ana Ortega, Ben Lee and Cat Lee:
  the tests' own, not the person's. No test login is made from them.

## What to wire

Each file beneath that this feature changes, and what the change does:

- `README.md`: the app's own README, now listing both test logins and
  pointing to the Dependents page.
- `app/models/user.rb`: `has_many :user_dependents, dependent: :destroy`
  and `has_many :dependents, through: :user_dependents`.
- `app/views/layouts/application.html.erb`: the Dependents link in the
  nav.
- `config/routes.rb`: `resources :dependents, except: :destroy`, with
  `resources :caretakers, only: :create` and `delete :leave, on: :member`
  inside it.
- `db/seeds.rb`: a second test login, and the dependent the two share,
  beside sign-in's login.

## Combining it with user-kinds

It builds on sign-in alone. When the app also has kinds of user, the
builder combines the two:

- `allow_kinds` on `DependentsController` and `CaretakersController`
  limits who may add dependents, or reach them at all, when only some
  kinds may.
- Both features change `app/models/user.rb`, the nav, `config/routes.rb`,
  `db/seeds.rb` and `README.md`. The person's app keeps every change from
  both: the kind and the links on `User`, both nav links, both routes, a
  test login for each kind, and the dependents the spec needs.

## The tests

- `test/models/dependent_test.rb`: a name is required and a birthdate is
  not; removing a dependent removes its links; a dependent leads to its
  caretakers and a user to their dependents.
- `test/models/user_dependent_test.rb`: a user, a dependent and a role are
  required, the role `caretaker` when not given; a pair is linked once, by
  the model and by the database; leaving keeps a dependent with another
  caretaker and removes one left alone; removing a user removes the
  dependents only they cared for.
- `test/controllers/dependents_controller_test.rb`: signed out, the list
  sends the person to sign in; the list shows only the signed-in user's
  dependents; adding one makes the user its caretaker with their label; a
  missing name is refused with a message and nothing is added; a dependent
  with two caretakers is listed for both, and its page shows both with
  their labels; the edit screen shows the signed-in caretaker's own label;
  an edit changes the details and that label and leaves the other's; a
  missing name changes neither; another user's dependent is not found when
  viewed, edited, updated or left; there is no way to remove a dependent
  directly; leaving keeps the dependent for its other caretaker, and the
  last caretaker leaving removes it and the page says so.
- `test/controllers/caretakers_controller_test.rb`: adding a caretaker by
  email links them; a caretaker added with a label sees it on their own
  edit screen; an unknown address, or one already linked, is refused; a
  caretaker cannot be added to another user's dependent.

## Checks it meets

For the aide writing the spec and the builder building it: what the build
must prove for each check of the New software Map, and how this Recipe's
tests model it.

- `new-software/web-app/things-tracked`,
  "Each can be created, listed, viewed, edited and removed by those allowed to":
  each user adds, lists, views, edits and leaves their own dependents and
  no one else's; leaving removes the link, and the last one removes the
  dependent. `DependentsControllerTest` models each action, and finds
  another user's dependent not found for each.
- `new-software/web-app/things-tracked`,
  "Required details are enforced":
  a dependent's name, refused with a message on the form; a link's user,
  dependent and role; a pair linked once. `DependentTest` and
  `UserDependentTest` model them, the pair also at the database.
- `new-software/web-app/things-tracked`,
  "The connections between them can be followed":
  from a user to their dependents, and from a dependent to its caretakers
  with what it is to each. `DependentsControllerTest` and
  `CaretakersControllerTest` model them: a dependent with two caretakers is
  listed for both, its page shows both labels, and each caretaker sets and
  changes only their own.
- `new-software/web-app/rules`,
  "Each rule is enforced, with a check showing the forbidden case blocked":
  another user's dependent is not found; an unknown or already-linked
  caretaker address is refused; a pair cannot be linked twice; a dependent
  goes with its last link and cannot be removed otherwise; details and
  label are saved together or not at all. Each has its test, which tries
  the forbidden case.
- `new-software/web-app/sign-in`,
  "Each kind of user has a test login, listed for the person":
  one kind here, with two logins so that two caretakers can share a
  dependent; `db/seeds.rb` makes them and the app's `README.md` lists them.
