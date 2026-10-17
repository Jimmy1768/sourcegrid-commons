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

| id | one line | status | source |
| --- | --- | --- | --- |
| web-app | Rails 8 on PostgreSQL, server-rendered, as `rails new` makes it; a home page, its test, one setup command | built | Rails |
| api-service | Rails without screens: JSON API, token auth, versioned routes, pagination, error shape | — | Rails API generator; Combatives-Rails' JWT auth |
| mobile-app | Expo: router navigation, sign-in against api-service, settings screen, one test | — | Expo templates; DojoMate-Expo |
| rich-screens | React screens on the Rails back end, where server-rendered is not enough | — | vite_rails or inertia_rails on web-app |
| browser-extension | TypeScript, manifest v3: popup, options, content script, a build | — | open source extension starters |
| automation | Python: a scheduled job runner, config, logging, one report | — | open source (APScheduler, pandas) |
| static-site | a static site generator: pages, a blog, a form endpoint, a build | — | Astro or Eleventy starters |

## B. Features, by family

### B1. Accounts and identity (fits web-app unless said)

| id | one line | status | source |
| --- | --- | --- | --- |
| sign-in | Rails' own sign-in and password reset, a signed-in nav, a test login, a local inbox | built | Rails |
| social-sign-in | OmniAuth with Apple, Google and Facebook beside sign-in | — | omniauth; Golden-Template |
| passwordless | magic-link sign-in by email | — | open source |
| two-factor | TOTP second factor with recovery codes | — | rotp; Bullet Train's shape |
| user-kinds | kinds of users with what each may see | built | his |
| profile-settings | profile, email change with confirmation, password change, sessions and devices | — | Rails; Jumpstart's shape |
| account-export-delete | export my data; delete my account (GDPR) | — | open source |
| api-sign-in | token sign-in for mobile-app and callers (fits api-service) | — | Rails; Combatives-Rails |
| email-verification | confirm the address at sign-up and on change, resend | — | Rails; Pegasus and Jumpstart name it |
| impersonation | an admin signs in as a user, logged and reversible | — | Jumpstart and Pegasus name it |

### B2. Organizations and access

| id | one line | status | source |
| --- | --- | --- | --- |
| linked-accounts | people who sign in act for dependents who do not | built | his |
| kinds-and-linked-accounts | user kinds and linked accounts together | built | his |
| teams | organizations with members and roles; switch between them | — | Bullet Train / Jumpstart's shape |
| invitations | invite by email to a team or an account; accept, expire, resend | — | the same |
| permissions | authorization policies per role and record | — | pundit |
| audit-log | who changed what and when, shown per record | — | paper_trail or audited |
| multi-tenancy | data scoped per tenant, a tenant per subdomain or path | — | Jumpstart and Pegasus name it; acts_as_tenant |
| plan-limits | entitlements and limits per plan, checked where a thing is made | — | Bullet Train names it |

### B3. Billing and commerce

| id | one line | status | source |
| --- | --- | --- | --- |
| payments | one-time charges through Stripe with webhooks and receipts | — | pay or stripe; Combatives-Rails, wenfu |
| subscriptions | plans, trial, upgrade and cancel, a billing page, Stripe webhooks | — | pay; Jumpstart's shape |
| invoices | invoices and receipts as PDF, tax lines | — | open source |
| credits | an account holder's credit ledger: purchases, charges by one coefficient, a statement | draft | sourcegrid-labs' wallet |
| coupons | discount codes and promotions | — | Stripe coupons |
| marketplace-payouts | sellers paid out through Stripe Connect | — | Stripe Connect |
| pricing-models | per-seat and usage-based pricing on subscriptions | — | Pegasus and Bullet Train name it; pay |
| billing-portal | the provider's customer portal for cards and cancellations | — | Stripe; Bullet Train names it |
| store | products, cart, checkout, orders | — | Pegasus names it; open source |

### B4. Communication

| id | one line | status | source |
| --- | --- | --- | --- |
| notify | notifications on email, SMS and push channels | built | his; noticed's shape |
| transactional-email | templated mail with a layout, preview and a local inbox | — | Rails Action Mailer |
| in-app-messaging | threads and messages between people in the app | — | Action Cable; open source |
| comments | comments on any record, with mentions | — | open source |
| announcements | product announcements with read state | — | Jumpstart's shape |
| digests | scheduled summary mail | — | Solid Queue + mailer |
| in-app-notifications | a notifications menu with read state, realtime | — | Jumpstart names it; noticed |
| inbound-email | mail into the app: replies to a thread, forwarding | — | Action Mailbox; Bullet Train and ShipFast name it |
| chat-integrations | notifications and commands in Slack or Discord | — | Jumpstart names it |
| newsletter | a mailing list with sign-up and sends | — | ShipFast and Pegasus name it |

### B5. Content and files

| id | one line | status | source |
| --- | --- | --- | --- |
| file-uploads | attachments to S3 with image variants and direct upload | — | Active Storage; Golden-Template, Spot-Rails |
| rich-text | a rich-text editor with attachments | — | Action Text |
| cms-pages | editable pages and a menu | — | open source |
| media-gallery | albums of images and video | — | Active Storage |
| spreadsheet-import | import rows from a spreadsheet with a preview and errors | built | his |
| export | CSV and PDF export of a list | — | open source |
| qr-codes | generated and scanned codes for a record | — | rqrcode; Spot-Rails, wenfu |
| blog | posts, tags, feeds, on the web app | — | ShipFast names it; open source |
| marketing-pages | landing, pricing, FAQ, terms and privacy pages | — | ShipFast names it |
| image-generation | images made by a model, stored as attachments | — | Pegasus names it |

### B6. Data and search

| id | one line | status | source |
| --- | --- | --- | --- |
| search | full-text search across records with ranking | — | pg_search |
| filters-tables | sortable, filterable, paginated tables | — | pagy; open source |
| reporting | dashboards and charts from queries | — | chartkick, groupdate |
| tags | tags on any record, tag pages | — | acts-as-taggable-on |
| trash | soft delete with restore | — | discard |
| versioning | record history and restore | — | paper_trail |
| realtime-updates | live page updates over a socket | — | Turbo Streams, Action Cable; Bullet Train and Pegasus name it |
| field-encryption | encrypted columns for sensitive fields | — | Active Record Encryption |

### B7. Integration and API

| id | one line | status | source |
| --- | --- | --- | --- |
| api-keys | keys a project's callers use, scoped and revocable | — | Jumpstart's shape |
| webhooks-out | outbound webhooks with retries and a log | — | open source |
| webhooks-in | inbound webhooks verified and recorded (Stripe, GitHub) | — | Rails |
| oauth-client | connect a third-party account (Google, Slack) and call its API | — | omniauth + the provider's gem |
| scheduling | recurring and delayed jobs with a dashboard | — | Solid Queue; mission_control-jobs |
| rate-limiting | throttles and blocklists | — | rack-attack |
| api-docs | OpenAPI schema and a docs page from the API | — | Bullet Train and Pegasus name it; rswag |
| api-clients | generated client libraries for the API | — | Jumpstart and Pegasus name it |

### B8. Operations and compliance

| id | one line | status | source |
| --- | --- | --- | --- |
| admin | a back office over every model with search and edits | — | administrate or avo |
| feature-flags | flags per user and group | — | flipper |
| i18n | locales, translations, a language switch | — | Rails i18n |
| timezones | per-user time zone and formatting | — | Rails |
| observability | structured logs, error tracking hook, request ids | — | lograge; open source |
| health-status | health check endpoint and a status page | — | Rails health check |
| consent-privacy | cookie consent, terms acceptance with a version | — | open source |
| backups | database backup and restore scripts | — | open source |

### B9. Growth and support

| id | one line | status | source |
| --- | --- | --- | --- |
| onboarding | a checklist for a new account | — | Jumpstart's shape |
| feedback | feedback and support tickets with mail | — | open source |
| help-center | a docs or help site with search | — | static-site base |
| analytics | first-party events and visits | — | ahoy |
| referrals | invite friends, credit on sign-up | — | open source |
| seo | sitemap, meta tags, open graph | — | open source |
| waitlist | email capture before launch | — | open source |

### B10. Mobile (fits mobile-app)

| id | one line | status | source |
| --- | --- | --- | --- |
| push | push notifications with device tokens and a notify channel | — | expo-notifications |
| offline-sync | local cache and sync on reconnect | — | open source |
| deep-links | universal links into screens | — | expo-router |
| camera-upload | camera and photo upload to file-uploads | — | expo-camera, expo-image-picker |
| in-app-purchase | store purchases and subscriptions | — | RevenueCat or react-native-iap |
| ota-updates | over-the-air updates | — | expo-updates |
| permissions | runtime permission prompts with fallbacks | — | Expo guides |
| store-release | builds and store submission (EAS) | — | Expo guides |

### B11. Automation and reports (fits automation)

| id | one line | status | source |
| --- | --- | --- | --- |
| etl | pull from an API or a database, transform, load | — | pandas, SQLAlchemy |
| report-generator | spreadsheets and PDFs from data, on a schedule | — | openpyxl, WeasyPrint |
| data-quality | checks on a dataset with a report of failures | — | open source |

### B12. AI features (for Delegates' products; fits web-app and mobile-app)

| id | one line | status | source |
| --- | --- | --- | --- |
| llm-call | one call to the LLM runtime through AppRelay with its usage event recorded | — | his: AppRelay's client |
| chat-ui | a chat screen over llm-call with history | — | open source shape |
| structured-output | a prompt that returns a checked shape | — | AppRelay's structured mode |
| usage-metering | usage shown to the account holder, debited to credits | — | sourcegrid-labs' wallet |

### B13. Delivery and developer workflow (every starter ships these)

| id | one line | status | source |
| --- | --- | --- | --- |
| dev-environment | one-command local setup, Docker or devcontainer, seeds | — | Pegasus names it; Rails bin/setup |
| ci | tests and lint on every push | — | Bullet Train, Pegasus and ShipFast name it; GitHub Actions |
| deployment | deploy to a server or a platform with secrets and a staging target | — | Kamal; Bullet Train and Jumpstart name it |
| system-tests | browser tests of the main flows | — | Rails system tests; Bullet Train names it |
| lint-format | linters and formatters wired in | — | Pegasus names it; rubocop |
| security-hardening | headers, CSP, rate limits, dependency audit | — | Rails security guide |
| caching | fragment and query caching with a store | — | Rails caching guide; Solid Cache |
| ui-kit | a component set, theme and dark mode on Tailwind | — | every starter names it |

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

Built: 7 of 108 rows (one base, six features). Draft: 1. None: 100. Which
rows are built, and in what order, follows the Workshop's users' projects;
the registry only says what exists and what does not.
