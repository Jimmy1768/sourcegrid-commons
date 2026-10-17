# Recipe registry — the commons' index of every Recipe, built or not

The commons' index of every Recipe that should exist, organized by family —
the Director's decision of 2026-10-17: *"we need a global registry of Recipes,
organized into categories … we don't need to rush build all Recipes. we need
to organize a complete registry first."* What to build first is decided when
it is needed, from the Workshop's users' projects. Nothing here is built by
being listed. This file lives in sourcegrid-commons as `recipes/REGISTRY.md`;
the copy under ops/docs/advice/operator-kit is Recovery's record of it.

## What the registry is

- **One row per Recipe that should exist**, whether or not it is built. A
  Recipe is finished, tested code for a kind of artifact or one piece of it,
  read whole and adapted by a Workshop builder (the Director, 2026-10-12).
- **The categories are the industry's**, not invented: the artifact kinds of
  his stack checkpoint (2026-10-09), and the feature families every SaaS
  boilerplate ships — the reference set named under *Prior art*. Words and
  shapes are used unchanged (R26).
- **Status** is `built` (in the commons today), `draft` (a prompt exists,
  not entered) or `—` (none). A Recipe is built when a Workshop user's
  project needs it, never because the row exists (his logic, 2026-10-17).
- **Source** names where the code is taken from: open source first, his own
  apps where they already hold it. The Recipe's README records the source;
  the registry only points.
- **Fits** names the base a feature is laid on.

## Tiers — the order of need (the Director, 2026-10-17: "order is based on need")

Each row carries a tier. A row rises when a Workshop user's project asks for
it; the tiers say what is asked first, from what every starter ships and his
own apps confirm.

- **Tier 1 (16 rows)** — what nearly every project needs to ship at all:
  the web-app base and what it lacks to reach a server with a signed-in user.
  web-app, sign-in, user-kinds, profile-settings, email-verification, transactional-email, file-uploads, admin, observability, backups, dev-environment, ci, deployment, system-tests, security-hardening, ui-kit.
- **Tier 2 (38 rows)** — what most products with customers need:
  api-service, social-sign-in, two-factor, account-export-delete, api-sign-in, impersonation, linked-accounts, kinds-and-linked-accounts, teams, invitations, permissions, audit-log, plan-limits, payments, subscriptions, invoices, billing-portal, notify, in-app-notifications, rich-text, spreadsheet-import, export, marketing-pages, search, filters-tables, field-encryption, api-keys, webhooks-in, scheduling, rate-limiting, timezones, health-status, consent-privacy, analytics, seo, llm-call, lint-format, caching.
- **Tier 3 (54 rows)** — by kind of project or domain, when the first of
  its kind comes: the other bases and every row not named above.

## Prior art (the reference set the categories come from)

Rails' own generators and defaults (Rails 8: Solid Queue, Solid Cache,
Active Storage, Action Mailer, Action Cable); Jumpstart Pro and Bullet Train
(Rails SaaS starters: accounts, teams, invitations, billing via Pay, API
tokens, webhooks, i18n, two-factor, admin); Laravel Jetstream and Spark
(teams, API tokens, billing); SaaS Pegasus (Django: teams, subscriptions,
feature flags, AI chat); ShipFast and similar Next.js starters (auth, Stripe,
email, SEO); Expo's own templates and modules (router, notifications,
updates, camera); Astro and Eleventy starters for static sites. Inference
from Recovery's knowledge of these, to be checked against each at the draft
of a Recipe, never copied as a list.

## A. Bases — one per artifact kind of the stack checkpoint

| id | one line | tier | status | source |
| --- | --- | --- | --- | --- |
| web-app | Rails 8 on PostgreSQL, server-rendered, as `rails new` makes it; a home page, its test, one setup command | 1 | built | Rails |
| api-service | Rails without screens: JSON API, token auth, versioned routes, pagination, error shape | 2 | — | Rails API generator; Combatives-Rails' JWT auth |
| mobile-app | Expo: router navigation, sign-in against api-service, settings screen, one test | 3 | — | Expo templates; DojoMate-Expo |
| rich-screens | React screens on the Rails back end, where server-rendered is not enough | 3 | — | vite_rails or inertia_rails on web-app |
| browser-extension | TypeScript, manifest v3: popup, options, content script, a build | 3 | — | open source extension starters |
| automation | Python: a scheduled job runner, config, logging, one report | 3 | — | open source (APScheduler, pandas) |
| static-site | a static site generator: pages, a blog, a form endpoint, a build | 3 | — | Astro or Eleventy starters |

## B. Features, by family

### B1. Accounts and identity (fits web-app unless said)

| id | one line | tier | status | source |
| --- | --- | --- | --- | --- |
| sign-in | Rails' own sign-in and password reset, a signed-in nav, a test login, a local inbox | 1 | built | Rails |
| social-sign-in | OmniAuth with Apple, Google and Facebook beside sign-in | 2 | — | omniauth; Golden-Template |
| passwordless | magic-link sign-in by email | 3 | — | open source |
| two-factor | TOTP second factor with recovery codes | 2 | — | rotp; Bullet Train's shape |
| user-kinds | kinds of users with what each may see | 1 | built | his |
| profile-settings | profile, email change with confirmation, password change, sessions and devices | 1 | — | Rails; Jumpstart's shape |
| account-export-delete | export my data; delete my account (GDPR) | 2 | — | open source |
| api-sign-in | token sign-in for mobile-app and callers (fits api-service) | 2 | — | Rails; Combatives-Rails |
| email-verification | confirm the address at sign-up and on change, resend | 1 | — | Rails; Pegasus and Jumpstart name it |
| impersonation | an admin signs in as a user, logged and reversible | 2 | — | Jumpstart and Pegasus name it |

### B2. Organizations and access

| id | one line | tier | status | source |
| --- | --- | --- | --- | --- |
| linked-accounts | people who sign in act for dependents who do not | 2 | built | his |
| kinds-and-linked-accounts | user kinds and linked accounts together | 2 | built | his |
| teams | organizations with members and roles; switch between them | 2 | — | Bullet Train / Jumpstart's shape |
| invitations | invite by email to a team or an account; accept, expire, resend | 2 | — | the same |
| permissions | authorization policies per role and record | 2 | — | pundit |
| audit-log | who changed what and when, shown per record | 2 | — | paper_trail or audited |
| multi-tenancy | data scoped per tenant, a tenant per subdomain or path | 3 | — | Jumpstart and Pegasus name it; acts_as_tenant |
| plan-limits | entitlements and limits per plan, checked where a thing is made | 2 | — | Bullet Train names it |

### B3. Billing and commerce

| id | one line | tier | status | source |
| --- | --- | --- | --- | --- |
| payments | one-time charges through Stripe with webhooks and receipts | 2 | — | pay or stripe; Combatives-Rails, wenfu |
| subscriptions | plans, trial, upgrade and cancel, a billing page, Stripe webhooks | 2 | — | pay; Jumpstart's shape |
| invoices | invoices and receipts as PDF, tax lines | 2 | — | open source |
| credits | an account holder's credit ledger: purchases, charges by one coefficient, a statement | 3 | draft | sourcegrid-labs' wallet |
| coupons | discount codes and promotions | 3 | — | Stripe coupons |
| marketplace-payouts | sellers paid out through Stripe Connect | 3 | — | Stripe Connect |
| pricing-models | per-seat and usage-based pricing on subscriptions | 3 | — | Pegasus and Bullet Train name it; pay |
| billing-portal | the provider's customer portal for cards and cancellations | 2 | — | Stripe; Bullet Train names it |
| store | products, cart, checkout, orders | 3 | — | Pegasus names it; open source |

### B4. Communication

| id | one line | tier | status | source |
| --- | --- | --- | --- | --- |
| notify | notifications on email, SMS and push channels | 2 | built | his; noticed's shape |
| transactional-email | templated mail with a layout, preview and a local inbox | 1 | — | Rails Action Mailer |
| in-app-messaging | threads and messages between people in the app | 3 | — | Action Cable; open source |
| comments | comments on any record, with mentions | 3 | — | open source |
| announcements | product announcements with read state | 3 | — | Jumpstart's shape |
| digests | scheduled summary mail | 3 | — | Solid Queue + mailer |
| in-app-notifications | a notifications menu with read state, realtime | 2 | — | Jumpstart names it; noticed |
| inbound-email | mail into the app: replies to a thread, forwarding | 3 | — | Action Mailbox; Bullet Train and ShipFast name it |
| chat-integrations | notifications and commands in Slack or Discord | 3 | — | Jumpstart names it |
| newsletter | a mailing list with sign-up and sends | 3 | — | ShipFast and Pegasus name it |

### B5. Content and files

| id | one line | tier | status | source |
| --- | --- | --- | --- | --- |
| file-uploads | attachments to S3 with image variants and direct upload | 1 | — | Active Storage; Golden-Template, Spot-Rails |
| rich-text | a rich-text editor with attachments | 2 | — | Action Text |
| cms-pages | editable pages and a menu | 3 | — | open source |
| media-gallery | albums of images and video | 3 | — | Active Storage |
| spreadsheet-import | import rows from a spreadsheet with a preview and errors | 2 | built | his |
| export | CSV and PDF export of a list | 2 | — | open source |
| qr-codes | generated and scanned codes for a record | 3 | — | rqrcode; Spot-Rails, wenfu |
| blog | posts, tags, feeds, on the web app | 3 | — | ShipFast names it; open source |
| marketing-pages | landing, pricing, FAQ, terms and privacy pages | 2 | — | ShipFast names it |
| image-generation | images made by a model, stored as attachments | 3 | — | Pegasus names it |

### B6. Data and search

| id | one line | tier | status | source |
| --- | --- | --- | --- | --- |
| search | full-text search across records with ranking | 2 | — | pg_search |
| filters-tables | sortable, filterable, paginated tables | 2 | — | pagy; open source |
| reporting | dashboards and charts from queries | 3 | — | chartkick, groupdate |
| tags | tags on any record, tag pages | 3 | — | acts-as-taggable-on |
| trash | soft delete with restore | 3 | — | discard |
| versioning | record history and restore | 3 | — | paper_trail |
| realtime-updates | live page updates over a socket | 3 | — | Turbo Streams, Action Cable; Bullet Train and Pegasus name it |
| field-encryption | encrypted columns for sensitive fields | 2 | — | Active Record Encryption |

### B7. Integration and API

| id | one line | tier | status | source |
| --- | --- | --- | --- | --- |
| api-keys | keys a project's callers use, scoped and revocable | 2 | — | Jumpstart's shape |
| webhooks-out | outbound webhooks with retries and a log | 3 | — | open source |
| webhooks-in | inbound webhooks verified and recorded (Stripe, GitHub) | 2 | — | Rails |
| oauth-client | connect a third-party account (Google, Slack) and call its API | 3 | — | omniauth + the provider's gem |
| scheduling | recurring and delayed jobs with a dashboard | 2 | — | Solid Queue; mission_control-jobs |
| rate-limiting | throttles and blocklists | 2 | — | rack-attack |
| api-docs | OpenAPI schema and a docs page from the API | 3 | — | Bullet Train and Pegasus name it; rswag |
| api-clients | generated client libraries for the API | 3 | — | Jumpstart and Pegasus name it |

### B8. Operations and compliance

| id | one line | tier | status | source |
| --- | --- | --- | --- | --- |
| admin | a back office over every model with search and edits | 1 | — | administrate or avo |
| feature-flags | flags per user and group | 3 | — | flipper |
| i18n | locales, translations, a language switch | 3 | — | Rails i18n |
| timezones | per-user time zone and formatting | 2 | — | Rails |
| observability | structured logs, error tracking hook, request ids | 1 | — | lograge; open source |
| health-status | health check endpoint and a status page | 2 | — | Rails health check |
| consent-privacy | cookie consent, terms acceptance with a version | 2 | — | open source |
| backups | database backup and restore scripts | 1 | — | open source |

### B9. Growth and support

| id | one line | tier | status | source |
| --- | --- | --- | --- | --- |
| onboarding | a checklist for a new account | 3 | — | Jumpstart's shape |
| feedback | feedback and support tickets with mail | 3 | — | open source |
| help-center | a docs or help site with search | 3 | — | static-site base |
| analytics | first-party events and visits | 2 | — | ahoy |
| referrals | invite friends, credit on sign-up | 3 | — | open source |
| seo | sitemap, meta tags, open graph | 2 | — | open source |
| waitlist | email capture before launch | 3 | — | open source |

### B10. Mobile (fits mobile-app)

| id | one line | tier | status | source |
| --- | --- | --- | --- | --- |
| push | push notifications with device tokens and a notify channel | 3 | — | expo-notifications |
| offline-sync | local cache and sync on reconnect | 3 | — | open source |
| deep-links | universal links into screens | 3 | — | expo-router |
| camera-upload | camera and photo upload to file-uploads | 3 | — | expo-camera, expo-image-picker |
| in-app-purchase | store purchases and subscriptions | 3 | — | RevenueCat or react-native-iap |
| ota-updates | over-the-air updates | 3 | — | expo-updates |
| app-permissions | runtime permission prompts with fallbacks | 3 | — | Expo guides |
| store-release | builds and store submission (EAS) | 3 | — | Expo guides |

### B11. Automation and reports (fits automation)

| id | one line | tier | status | source |
| --- | --- | --- | --- | --- |
| etl | pull from an API or a database, transform, load | 3 | — | pandas, SQLAlchemy |
| report-generator | spreadsheets and PDFs from data, on a schedule | 3 | — | openpyxl, WeasyPrint |
| data-quality | checks on a dataset with a report of failures | 3 | — | open source |

### B12. AI features (for Delegates' products; fits web-app and mobile-app)

| id | one line | tier | status | source |
| --- | --- | --- | --- | --- |
| llm-call | one call to the LLM runtime through AppRelay with its usage event recorded | 2 | — | his: AppRelay's client |
| chat-ui | a chat screen over llm-call with history | 3 | — | open source shape |
| structured-output | a prompt that returns a checked shape | 3 | — | AppRelay's structured mode |
| usage-metering | usage shown to the account holder, debited to credits | 3 | — | sourcegrid-labs' wallet |

### B13. Delivery and developer workflow (every starter ships these)

| id | one line | tier | status | source |
| --- | --- | --- | --- | --- |
| dev-environment | one-command local setup, Docker or devcontainer, seeds | 1 | — | Pegasus names it; Rails bin/setup |
| ci | tests and lint on every push | 1 | — | Bullet Train, Pegasus and ShipFast name it; GitHub Actions |
| deployment | deploy to a server or a platform with secrets and a staging target | 1 | — | Kamal; Bullet Train and Jumpstart name it |
| system-tests | browser tests of the main flows | 1 | — | Rails system tests; Bullet Train names it |
| lint-format | linters and formatters wired in | 2 | — | Pegasus names it; rubocop |
| security-hardening | headers, CSP, rate limits, dependency audit | 1 | — | Rails security guide |
| caching | fragment and query caching with a store | 2 | — | Rails caching guide; Solid Cache |
| ui-kit | a component set, theme and dark mode on Tailwind | 1 | — | every starter names it |

## Coverage check, 2026-10-17

Checked against the named sources' own pages, each fetched and listed by
feature (Observed): Bullet Train (bullettrain.co), Jumpstart Pro
(jumpstartrails.com), SaaS Pegasus (saaspegasus.com), ShipFast (shipfa.st),
Laravel Jetstream (its introduction), the Rails guides index
(guides.rubyonrails.org), Expo's guides overview (docs.expo.dev). Laravel
Spark's docs page answered 404 and is not checked. Every feature those pages
name that a Workshop user's project could need has a row; left out on purpose
are the starters' own commerce (courses, communities, lifetime updates) and
their framework-internal pages (release notes, contributing). Twenty-eight rows
were added by the check. Exhaustive within this reference set and the stack
checkpoint's kinds; a source outside it, or a project's need the set does not
name, adds a row when it comes. Checked again every month or two, as the
enforcement landscape is.

## Counts

Built: 7 of 108 rows (one base, six features). Draft: 1. None: 100. By tier: 16, 38, 54; of the seven built, three are tier 1 and four tier 2. Which
rows are built, and in what order, follows the Workshop's users' projects;
the registry only says what exists and what does not.
