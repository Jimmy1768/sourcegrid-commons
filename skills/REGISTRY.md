# Skill registry — the commons' index of every Skill, built or not

The commons' index of every Skill that should exist, organized by family,
as `recipes/REGISTRY.md` is for Recipes — the Director's decision of
2026-10-17: organize a complete registry first, build on need. Its reach is
his, 2026-10-23: *"there are 98 profession categories and 867 blueprints
planned, to be built, by another blueprint, called Foundry. i aim to cover
all of these jobs."* A source is judged once against this registry, never
once per Blueprint. Nothing here is built by being listed: a Skill is built
in the Workshop, as a Mandate on the commons, on his word or when a
Blueprint being built needs it, never by a Control session (his rule,
2026-10-23). This file was
drafted by Workspace Strategy on his "write the registry frame" and entered
here by Commons Planning (`DECISIONS.md` 29).

## What the registry is

- **One row per Skill that should exist**, built or not. A Skill is how a
  role does its work, told to a model, in the industry's SKILL.md form; its
  judgment is kept and its process left to the harness.
- **The families are SOC 2018's**, not invented (R26): 23 major groups, 98
  minor groups, as the Bureau of Labor Statistics writes them (Observed,
  bls.gov/soc/2018/major_groups.htm, 2026-10-23). One family stands above
  them: **general**, the Skills every Delegate uses whatever the occupation.
  A Blueprint built for an occupation gets the general rows and its minor
  group's rows.
- **Role** is the kernel's: aide, builder, reviewer, scribe, triager. A row's
  role says which folder it lives in, `skills/<role>/<name>/`.
- **Status** is `built` (in the commons today), `draft` (adapted, not
  entered) or `—` (none).
- **Source** names where it is taken from: open source first, with its
  licence in `THIRD_PARTY_NOTICES.md`. The Skill's own frontmatter records
  the source commit and paths; the registry only points.
- **A row enters on the Director's word**, 2026-10-23: "i can build what i want, this is my repo."
  Behaviour that composes from existing Skills gets no new row.
- **A row is built on his word, or when a Blueprint being built needs it**,
  never only because the row exists.

## Kernel consequence, for OperatorKit

A note, so that the first family outside software does not meet it
unprepared; the decision is not the commons'. The layout
`skills/<role>/<name>` has no family level, and the kernel tells each role
its whole index at every request. With 98 families the index is cut by the
Blueprint's occupation, which its Domain Map carries. Where the family is
recorded — a folder level, a frontmatter field, or this registry read by the
kernel — is infra with one answer, not the Director's; the kernel's side is
OperatorKit's, the commons' side a Workshop build. Settle it before the
first non-software family is built.

## general — every Delegate, whatever the occupation

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| interview | aide | built | mattpocock/skills grilling + grill-me (b0618bc) | questioning a plan until both sides understand it the same way |
| spec | aide | built | mattpocock/skills to-spec (b0618bc) | writing agreed work down as a spec |
| domain-modeling | aide | — | mattpocock/skills domain-modeling | one meaning per term, challenged as it is used — the problem DDP names |
| to-questionnaire | aide | — | mattpocock/skills to-questionnaire | a decision the agent cannot make, turned into questions for the right person |
| wait-what | aide | — | mattpocock/skills wait-what | a message that did not land, re-pitched in plain words |
| handoff | scribe | — | mattpocock/skills handoff | what another agent continues from; check overlap with HAL before adapting |
| research | researcher (later) | — | mattpocock/skills research | cited answers from primary sources; with the Researcher role and web reads, last in the queue |
| experiment | builder | — | karpathy/autoresearch (MIT; the loop and program.md) | measure first, change one thing, measure again with a check the builder may not edit, keep only what improved, record each failed try, prefer the simpler change when results tie, never weaken the check to get a pass |

Experiment is general because the loop holds wherever success can be
measured: a slow page, an email's open rate, a quiz's pass rate. It is told
to the builder on a Mandate whose spec names a measurable target and a
check that can be run again and again, not on every build.

Note: grill-with-docs (interview that builds the domain model as it goes)
is a composition of interview and domain-modeling; no row, by the rule
above.

## 11-0000 Management Occupations

### 11-1000 Top Executives

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| agent-hierarchy | builder | — | cbrock84/headcount plugins/executive/skills/agent-hierarchy | splits a repo's agents by write surface and pairs each producer with a checker |
| ai-research-analyst | aide | — | cbrock84/headcount plugins/executive/skills/ai-research-analyst | cited executive research on markets, competitors and trends |
| business-growth-consultant | aide | — | cbrock84/headcount plugins/executive/skills/business-growth-consultant | finds the one constraint holding growth and the best moves against it |
| ceo-advisor | aide | — | cbrock84/headcount plugins/executive/skills/ceo-advisor | stresses a decision against its assumptions and the case against it |
| chief-executive | aide | — | cbrock84/headcount plugins/executive/skills/chief-executive | sets direction and makes the calls no one else can |
| fundraising-and-investor-relations | builder | — | cbrock84/headcount plugins/executive/skills/fundraising-and-investor-relations | raises capital and keeps investors informed afterward |
| saas-idea-validator | reviewer | — | cbrock84/headcount plugins/executive/skills/saas-idea-validator | checks a software idea against problem, market and economics and gives a verdict |

### 11-2000 Advertising, Marketing, Promotions, Public Relations, and Sales Managers

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| behavioral-marketing | aide | — | cbrock84/headcount plugins/marketing/skills/behavioral-marketing | uses how people actually choose to sharpen marketing decisions |
| brand-voice | builder | — | cbrock84/headcount plugins/marketing/skills/brand-voice | captures how a person or brand writes as reusable voice rules |
| chief-content-officer | aide | — | cbrock84/headcount plugins/marketing/skills/chief-content-officer | runs content production, calendar and reuse from one place |
| chief-marketing-officer | aide | — | cbrock84/headcount plugins/marketing/skills/chief-marketing-officer | owns brand, demand, content and communications |
| content-strategy | aide | — | cbrock84/headcount plugins/marketing/skills/content-strategy | decides what content to make and ties it to a business outcome |
| customer-research | aide | — | cbrock84/headcount plugins/marketing/skills/customer-research | plans and reads interviews and surveys into findings |
| events-and-field-marketing | builder | — | cbrock84/headcount plugins/marketing/skills/events-and-field-marketing | runs conferences and field programs that produce pipeline |
| marketing-campaign-planner | builder | — | cbrock84/headcount plugins/marketing/skills/marketing-campaign-planner | designs a multi-channel launch around one story |
| marketing-copywriting | builder | — | cbrock84/headcount plugins/marketing/skills/marketing-copywriting | writes copy for any marketing surface and sharpens existing copy |
| marketing-planning | aide | — | cbrock84/headcount plugins/marketing/skills/marketing-planning | builds the plan of record with channel mix, budget and measures |
| newsletter-writer | builder | — | cbrock84/headcount plugins/marketing/skills/newsletter-writer | writes emails and newsletters people open and act on |
| partnership-marketing | builder | — | cbrock84/headcount plugins/marketing/skills/partnership-marketing | grows reach through co-marketing and creators |
| positioning-and-messaging | builder | — | cbrock84/headcount plugins/marketing/skills/positioning-and-messaging | sets what a product is and turns it into shared wording |
| product-launch | builder | — | cbrock84/headcount plugins/marketing/skills/product-launch | takes a finished thing to market in steps matched to its worth |
| public-relations | builder | — | cbrock84/headcount plugins/marketing/skills/public-relations | plans press outreach and crisis response |
| social-post-craft | builder | — | cbrock84/headcount plugins/marketing/skills/social-post-craft | writes and checks social posts end to end |
| video-content | builder | — | cbrock84/headcount plugins/marketing/skills/video-content | plans and scripts video and designs its packaging |
| visual-content | builder | — | cbrock84/headcount plugins/marketing/skills/visual-content | designs carousels, infographics and social imagery |
| youtube-producer | builder | — | cbrock84/headcount plugins/marketing/skills/youtube-producer | picks, packages and scripts long-form video for growth |
| account-based-marketing | builder | — | cbrock84/headcount plugins/demand-generation/skills/account-based-marketing | puts sales effort on a named account list with fitting economics |
| ai-search-optimization | builder | — | cbrock84/headcount plugins/demand-generation/skills/ai-search-optimization | makes a brand findable and cited accurately by AI answers |
| app-store-optimization | builder | — | cbrock84/headcount plugins/demand-generation/skills/app-store-optimization | improves store visibility and conversion through metadata and assets |
| experimentation | builder | — | cbrock84/headcount plugins/demand-generation/skills/experimentation | designs honest A/B tests with sample size and duration |
| landing-page-cro-expert | builder | — | cbrock84/headcount plugins/demand-generation/skills/landing-page-cro-expert | finds why a page does not convert and rewrites it |
| lead-capture | builder | — | cbrock84/headcount plugins/demand-generation/skills/lead-capture | turns anonymous traffic into known contacts through offers |
| lifecycle-messaging | builder | — | cbrock84/headcount plugins/demand-generation/skills/lifecycle-messaging | designs automated email and SMS by where a person is in the journey |
| listing-distribution | builder | — | cbrock84/headcount plugins/demand-generation/skills/listing-distribution | gets a product listed where buyers and crawlers look |
| marketing-analytics | builder | — | cbrock84/headcount plugins/demand-generation/skills/marketing-analytics | sets up tracking and attribution that shows what marketing did |
| paid-advertising | builder | — | cbrock84/headcount plugins/demand-generation/skills/paid-advertising | plans and runs paid ads across search, social and display |
| programmatic-seo | builder | — | cbrock84/headcount plugins/demand-generation/skills/programmatic-seo | builds many search-targeted pages from templates and data |
| seo-strategy | aide | — | cbrock84/headcount plugins/demand-generation/skills/seo-strategy | audits and improves organic search across site and content |
| ab-test-setup | builder | — | sickn33/agentic-awesome-skills growth/ab-test-setup | sets up an A/B test with one change, a measure and a pass check |
| ad-campaign-analyzer | reviewer | — | sickn33/agentic-awesome-skills marketing/ad-campaign-analyzer | reads a paid campaign's numbers and names what to change |
| awareness-stage-mapper | aide | — | sickn33/agentic-awesome-skills marketing/awareness-stage-mapper | maps buyers by awareness stage and picks the next message |
| brand-perception-psychologist | aide | — | sickn33/agentic-awesome-skills marketing/brand-perception-psychologist | reads how people see a brand and finds the gaps |
| churn-prevention | aide | — | sickn33/agentic-awesome-skills growth/churn-prevention | finds why customers leave and designs ways to keep them |
| co-marketing | builder | — | sickn33/agentic-awesome-skills marketing/co-marketing | plans and runs a campaign with a partner |
| community-building | builder | — | sickn33/agentic-awesome-skills marketing/community-building | grows and keeps an active community around a product |
| competitor-analysis | reviewer | — | sickn33/agentic-awesome-skills competitor analysis/competitor-analysis | reads competitors to find their choices and weak spots |
| competitor-gap-analyzer | reviewer | — | sickn33/agentic-awesome-skills competitor analysis/competitor-gap-analyzer | finds the gaps between a product and its competitors |
| customer-psychographic-profiler | aide | — | sickn33/agentic-awesome-skills marketing/customer-psychographic-profiler | builds a picture of a customer by values and motives |
| define-my-content-pillars | aide | — | sickn33/agentic-awesome-skills content seo/define-my-content-pillars | chooses the few content themes a brand should own |
| developer-audience-context | aide | — | sickn33/agentic-awesome-skills marketing/developer-audience-context | finds what developers care about for a message |
| developer-churn | aide | — | sickn33/agentic-awesome-skills growth/developer-churn | learns why developers leave a product |
| developer-listening | aide | — | sickn33/agentic-awesome-skills marketing/developer-listening | reads developer talk for needs and objections |
| email-marketing-bible | builder | — | sickn33/agentic-awesome-skills marketing/email-marketing-bible | writes and improves marketing emails end to end |
| form-cro | builder | — | sickn33/agentic-awesome-skills growth/form-cro | finds why a form does not convert and fixes it |
| free-tier-strategy | aide | — | sickn33/agentic-awesome-skills growth/free-tier-strategy | designs a free tier that lets users reach value and upgrade |
| free-tool-strategy | aide | — | sickn33/agentic-awesome-skills growth/free-tool-strategy | plans a free tool to pull in the right users |
| identity-mirror | aide | — | sickn33/agentic-awesome-skills marketing/identity-mirror | reflects a person's written identity back in their voice |
| jobs-to-be-done-analyst | aide | — | sickn33/agentic-awesome-skills marketing/jobs-to-be-done-analyst | finds the job a customer hires a product to do |
| launch-strategy | aide | — | sickn33/agentic-awesome-skills growth/launch-strategy | plans a launch's story, audience and sequence |
| lead-magnets | builder | — | sickn33/agentic-awesome-skills growth/lead-magnets | creates offers that earn a visitor's contact |
| location-based-content-idea-generator | builder | — | sickn33/agentic-awesome-skills content seo/location-based-content-idea-generator | invents content ideas tied to places people search |
| marketing-ideas | aide | — | sickn33/agentic-awesome-skills marketing/marketing-ideas | generates marketing campaign and tactic ideas |
| marketing-mindset | aide | — | sickn33/agentic-awesome-skills marketing/marketing-mindset | coaches a team to think in customer problems |
| marketing-psychology | aide | — | sickn33/agentic-awesome-skills marketing/marketing-psychology | applies known biases and motives to a message |
| objection-preemptor | aide | — | sickn33/agentic-awesome-skills marketing/objection-preemptor | finds objections and answers them in the copy |
| offers | builder | — | sickn33/agentic-awesome-skills growth/offers | designs an offer and its price, bundle and guarantee |
| onboarding | builder | — | sickn33/agentic-awesome-skills growth/onboarding | designs a first-run path to the product's value |
| open-source-marketing | builder | — | sickn33/agentic-awesome-skills marketing/open-source-marketing | markets an open-source project to users and contributors |
| paid-ads | builder | — | sickn33/agentic-awesome-skills marketing/paid-ads | plans, writes and manages paid search and social ads |
| paywall-upgrade-cro | reviewer | — | sickn33/agentic-awesome-skills growth/paywall-upgrade-cro | finds why users do not upgrade and changes the paywall |
| pitch-psychologist | aide | — | sickn33/agentic-awesome-skills marketing/pitch-psychologist | finds the mental hooks that make a pitch land |
| popup-cro | reviewer | — | sickn33/agentic-awesome-skills growth/popup-cro | improves a popup's timing, offer and wording |
| power-user-cultivation | builder | — | sickn33/agentic-awesome-skills growth/power-user-cultivation | finds and grows the users who drive word of mouth |
| scarcity-urgency-psychologist | aide | — | sickn33/agentic-awesome-skills marketing/scarcity-urgency-psychologist | adds honest scarcity and urgency that moves buyers |
| sequence-psychologist | builder | — | sickn33/agentic-awesome-skills growth/sequence-psychologist | writes an email or message sequence by psychology |
| signup-flow-cro | reviewer | — | sickn33/agentic-awesome-skills growth/signup-flow-cro | finds why signups drop and fixes the flow |
| social-proof-architect | builder | — | sickn33/agentic-awesome-skills marketing/social-proof-architect | adds proof that fits the buyer's doubt |
| trust-calibrator | aide | — | sickn33/agentic-awesome-skills marketing/trust-calibrator | finds what trust is missing and how to show it |
| viral-generator-builder | builder | — | sickn33/agentic-awesome-skills growth/viral-generator-builder | builds a loop that turns users into bringers |

### 11-3000 Operations Specialties Managers

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| chief-product-officer | aide | — | cbrock84/headcount plugins/product/skills/chief-product-officer | owns what gets built and why, from strategy to the measure of success |
| product-discovery | aide | — | cbrock84/headcount plugins/product/skills/product-discovery | finds whether a problem is real and a solution would work before building |
| product-requirements | aide | — | cbrock84/headcount plugins/product/skills/product-requirements | writes what is being built so a team can build it and know when done |

### 11-9000 Other Management Occupations

No source yet.

## 13-0000 Business and Financial Operations Occupations

### 13-1000 Business Operations Specialists

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| chief-strategy-officer | aide | — | cbrock84/headcount plugins/corporate-strategy/skills/chief-strategy-officer | decides where to play and how to win across portfolios and partnerships |
| market-entry | aide | — | cbrock84/headcount plugins/corporate-strategy/skills/market-entry | sizes a new market from the bottom up and tests the advantage before deciding to enter |
| mergers-and-acquisitions | builder | — | cbrock84/headcount plugins/corporate-strategy/skills/mergers-and-acquisitions | runs a deal from thesis and screening through diligence to integration |
| portfolio-strategy | aide | — | cbrock84/headcount plugins/corporate-strategy/skills/portfolio-strategy | decides what to fund, hold, harvest or exit across business lines on evidence |
| scenario-planning | aide | — | cbrock84/headcount plugins/corporate-strategy/skills/scenario-planning | builds load-bearing scenarios with early-warning indicators under uncertainty |
| strategic-alliances | builder | — | cbrock84/headcount plugins/corporate-strategy/skills/strategic-alliances | structures partnerships, channels and ventures that change what the business can do |
| benefits-and-leave | builder | — | cbrock84/headcount plugins/people/skills/benefits-and-leave | designs and runs benefits and leave so they stay right and affordable |
| chief-human-resources-officer | aide | — | cbrock84/headcount plugins/people/skills/chief-human-resources-officer | owns org design, hiring, performance, pay, development and employee relations |
| compensation-and-leveling | builder | — | cbrock84/headcount plugins/people/skills/compensation-and-leveling | builds levels, bands and pay equity so raises and promotions stay fair |
| employee-relations | aide | — | cbrock84/headcount plugins/people/skills/employee-relations | handles grievances, complaints, investigations and separations properly |
| employment-compliance | reviewer | — | cbrock84/headcount plugins/people/skills/employment-compliance | checks classification, overtime and hiring rules that carry real penalties |
| hiring-and-interviewing | builder | — | cbrock84/headcount plugins/people/skills/hiring-and-interviewing | runs hiring from role definition and sourcing to a structured, decided loop |
| learning-and-development | builder | — | cbrock84/headcount plugins/people/skills/learning-and-development | builds capability with gaps, frameworks and training that transfers |
| onboarding-and-offboarding | builder | — | cbrock84/headcount plugins/people/skills/onboarding-and-offboarding | designs joining and leaving from first day to clean exit and kept knowledge |
| org-design | aide | — | cbrock84/headcount plugins/people/skills/org-design | designs structure, teams, spans and layers against the work and workforce |
| payroll-operations | builder | — | cbrock84/headcount plugins/people/skills/payroll-operations | runs the pay cycle right, on time and provable from HRIS to net pay |
| performance-management | builder | — | cbrock84/headcount plugins/people/skills/performance-management | runs expectations, reviews, calibration and underperformance so they change behavior |
| workforce-planning | aide | — | cbrock84/headcount plugins/people/skills/workforce-planning | plans role demand, build-versus-buy and attrition against budget and needs |
| business-continuity-and-resilience | builder | — | cbrock84/headcount plugins/operations/skills/business-continuity-and-resilience | plans impact, recovery objectives and exercises for operating through disruption |
| capacity-and-demand-planning | aide | — | cbrock84/headcount plugins/operations/skills/capacity-and-demand-planning | matches capacity to expected demand and decides when to add |
| chief-operating-officer | aide | — | cbrock84/headcount plugins/operations/skills/chief-operating-officer | owns how work gets done: process, programs, capacity, vendors and supply |
| facilities-and-workplace | builder | — | cbrock84/headcount plugins/operations/skills/facilities-and-workplace | runs the physical and hybrid workplace, space, safety and office services |
| incident-management | builder | — | cbrock84/headcount plugins/operations/skills/incident-management | runs an incident from declaration to closed actions with a named commander |
| operating-cadence | builder | — | cbrock84/headcount plugins/operations/skills/operating-cadence | designs which reviews run when, what each decides and who owns its numbers |
| process-design | builder | — | cbrock84/headcount plugins/operations/skills/process-design | maps where work stalls, redesigns the flow and documents the process |
| procurement-and-sourcing | builder | — | cbrock84/headcount plugins/operations/skills/procurement-and-sourcing | specifies need, runs competitive sourcing and negotiates before contracts |
| quality-management | builder | — | cbrock84/headcount plugins/operations/skills/quality-management | builds quality in with standards, early defect capture and root cause |
| service-level-management | builder | — | cbrock84/headcount plugins/operations/skills/service-level-management | sets honest service targets and handles breaches |
| supply-chain-and-logistics | builder | — | cbrock84/headcount plugins/operations/skills/supply-chain-and-logistics | manages sourcing, inventory, lead times and supply risk |
| vendor-management | builder | — | cbrock84/headcount plugins/operations/skills/vendor-management | selects, contracts and manages suppliers from need to exit |
| benefits-realization | reviewer | — | cbrock84/headcount plugins/pmo/skills/benefits-realization | checks delivered projects against the value they were approved on |
| change-and-adoption | builder | — | cbrock84/headcount plugins/pmo/skills/change-and-adoption | gets people to use what was delivered with stakeholders and training |
| dependency-and-risk-management | aide | — | cbrock84/headcount plugins/pmo/skills/dependency-and-risk-management | identifies and sizes what could stop the work and escalates it |
| estimating-and-contingency | builder | — | cbrock84/headcount plugins/pmo/skills/estimating-and-contingency | produces defensible cost and effort estimates by decomposing the work |
| head-of-pmo | aide | — | cbrock84/headcount plugins/pmo/skills/head-of-pmo | sets what the PMO governs and how it earns standing, not compliance |
| portfolio-governance | reviewer | — | cbrock84/headcount plugins/pmo/skills/portfolio-governance | prioritizes intake, stage gates and stopping things across the portfolio |
| program-management | builder | — | cbrock84/headcount plugins/pmo/skills/program-management | drives cross-functional programs through scope, dependencies and escalations |
| project-delivery | builder | — | cbrock84/headcount plugins/pmo/skills/project-delivery | plans and delivers one project through schedule, critical path and recovery |
| schedule-development-and-analysis | builder | — | cbrock84/headcount plugins/pmo/skills/schedule-development-and-analysis | builds and checks logic-driven schedules with float and critical path |
| brand-discovery | aide | — | affaan-m/ECC skills/brand-discovery | what a brand stands for and how it is heard, found by asking and listening |
| carrier-relationship-management | builder | — | affaan-m/ECC skills/carrier-relationship-management | carriers kept in a working relationship, from rates to performance |
| competitive-platform-analysis | aide | — | affaan-m/ECC skills/competitive-platform-analysis | rival platforms sized up against each other, on evidence |
| customer-billing-ops | builder | — | affaan-m/ECC skills/customer-billing-ops | customer billing run right, from invoice to clean payment |
| customs-trade-compliance | reviewer | — | affaan-m/ECC skills/customs-trade-compliance | goods moving across borders held to customs rules |
| energy-procurement | builder | — | affaan-m/ECC skills/energy-procurement | energy bought well: rates, contracts and the market read |
| finance-billing-ops | builder | — | affaan-m/ECC skills/finance-billing-ops | financial billing run right, invoices through to cash |
| inventory-demand-planning | aide | — | affaan-m/ECC skills/inventory-demand-planning | what will be needed and when, planned against demand |
| lead-intelligence | aide | — | affaan-m/ECC skills/lead-intelligence | leads known before the call: who they are and what they want |
| logistics-exception-management | builder | — | affaan-m/ECC skills/logistics-exception-management | shipments gone wrong found, fixed and watched |
| market-research | aide | — | affaan-m/ECC skills/market-research | a market read honestly: who buys, who sells and why |
| production-scheduling | builder | — | affaan-m/ECC skills/production-scheduling | production laid out so machines and people meet their dates |
| quality-nonconformance | reviewer | — | affaan-m/ECC skills/quality-nonconformance | work that fell short of quality found, named and traced to its cause |
| returns-reverse-logistics | builder | — | affaan-m/ECC skills/returns-reverse-logistics | returns moved backward through the chain without losing value |
| seo-agentic | reviewer | — | AgriciDaniel/claude-seo skills/seo-agentic | checks a site for what AI agents need and fixes what blocks them |
| seo-audit | reviewer | — | AgriciDaniel/claude-seo skills/seo-audit | a scored whole-site search audit, its findings ranked by what to fix first |
| seo-backlinks | reviewer | — | AgriciDaniel/claude-seo skills/seo-backlinks | reads a site's backlinks for toxic links, gaps and disavow candidates |
| seo-cluster | aide | — | AgriciDaniel/claude-seo skills/seo-cluster | groups keywords by search overlap and plans hub pages with internal links |
| seo-competitor-pages | builder | — | AgriciDaniel/claude-seo skills/seo-competitor-pages | writes comparison and alternatives pages aimed at search |
| seo-content-brief | builder | — | AgriciDaniel/claude-seo skills/seo-content-brief | writes a brief for a page: word counts, keywords, section order |
| seo-content | reviewer | — | AgriciDaniel/claude-seo skills/seo-content | judges page content for usefulness, readability, thinness and AI citability |
| seo-dataforseo | builder | — | AgriciDaniel/claude-seo skills/seo-dataforseo | pulls live search, keyword and backlink data from DataForSEO |
| seo-drift | reviewer | — | AgriciDaniel/claude-seo skills/seo-drift | watches a site's search-critical elements and reports what changed |
| seo-ecommerce | reviewer | — | AgriciDaniel/claude-seo skills/seo-ecommerce | audits a shop's product pages, schema and marketplace visibility |
| seo-geo | reviewer | — | AgriciDaniel/claude-seo skills/seo-geo | audits content for AI answer engines: citability, entities, crawler access |
| seo-google | builder | — | AgriciDaniel/claude-seo skills/seo-google | pulls Search Console, PageSpeed and real-user speed data from Google's APIs |
| seo-hreflang | reviewer | — | AgriciDaniel/claude-seo skills/seo-hreflang | audits and checks the language and region tags on a multilingual site |
| seo-image-gen | builder | — | AgriciDaniel/claude-seo skills/seo-image-gen | makes social, hero and schema images for search |
| seo-images | reviewer | — | AgriciDaniel/claude-seo skills/seo-images | checks images for weight, format and alt text |
| seo-local | reviewer | — | AgriciDaniel/claude-seo skills/seo-local | audits local listings, citations, reviews and location pages |
| seo-maps | reviewer | — | AgriciDaniel/claude-seo skills/seo-maps | tracks local search ranks across a map grid and audits listings and reviews |
| seo-page | reviewer | — | AgriciDaniel/claude-seo skills/seo-page | audits one page: content, metadata, schema, images and speed |
| seo-plan | aide | — | AgriciDaniel/claude-seo skills/seo-plan | plans a search strategy with the person for a new or an existing site |
| seo-programmatic | aide | — | AgriciDaniel/claude-seo skills/seo-programmatic | plans pages generated at scale from data sources |
| seo-schema | builder | — | AgriciDaniel/claude-seo skills/seo-schema | writes and checks a page's Schema.org structured data |
| seo-sitemap | builder | — | AgriciDaniel/claude-seo skills/seo-sitemap | makes an XML sitemap, or checks the one a site already has |
| seo-sxo | reviewer | — | AgriciDaniel/claude-seo skills/seo-sxo | diagnoses mismatches between what searchers mean and what a site shows |
| seo-technical | reviewer | — | AgriciDaniel/claude-seo skills/seo-technical | audits crawlability, indexability, speed, security and structured data |
| 360-feedback-system | builder | — | sickn33/agentic-awesome-skills business/360-feedback-system | sets up a 360-degree feedback cycle for staff reviews |
| access-matrix | builder | — | sickn33/agentic-awesome-skills business/access-matrix | builds a matrix of who can access what |
| alumni-re-hire-tracker | builder | — | sickn33/agentic-awesome-skills business/alumni-re-hire-tracker | tracks former staff and re-hire prospects |
| announcement-board | builder | — | sickn33/agentic-awesome-skills business/announcement-board | runs an internal announcement board |
| attendance | builder | — | sickn33/agentic-awesome-skills business/attendance | tracks attendance and time at work |
| board-governance | builder | — | sickn33/agentic-awesome-skills business/board-governance | supports board meetings and governance records |
| buddy-program-manager | builder | — | sickn33/agentic-awesome-skills business/buddy-program-manager | pairs new starters with buddies and tracks it |
| business-analyst | aide | — | sickn33/agentic-awesome-skills business/business-analyst | turns business needs into clear requirements |
| candidate-talent-pool | builder | — | sickn33/agentic-awesome-skills business/candidate-talent-pool | keeps a pool of candidates ready for openings |
| capacity-workload-planner | aide | — | sickn33/agentic-awesome-skills business/capacity-workload-planner | plans team capacity against expected workload |
| code-of-conduct | builder | — | sickn33/agentic-awesome-skills business/code-of-conduct | drafts and maintains the code of conduct |
| competency-matrix | builder | — | sickn33/agentic-awesome-skills business/competency-matrix | maps skills and levels across a team |
| competitive-landscape | aide | — | sickn33/agentic-awesome-skills business/competitive-landscape | maps competitors and how they differ |
| competitor-alternatives | builder | — | sickn33/agentic-awesome-skills business/competitor-alternatives | writes comparison and alternative pages for search |
| course-upskilling-requests | builder | — | sickn33/agentic-awesome-skills business/course-upskilling-requests | handles course and upskilling requests |
| culture-retention | builder | — | sickn33/agentic-awesome-skills business/culture-retention | runs culture and retention programs |
| disciplinary-pip-tracker | builder | — | sickn33/agentic-awesome-skills business/disciplinary-pip-tracker | tracks disciplinary cases and performance plans |
| employee-suggestion-hub | builder | — | sickn33/agentic-awesome-skills business/employee-suggestion-hub | collects and routes staff suggestions |
| gamification-engine | builder | — | sickn33/agentic-awesome-skills business/gamification-engine | adds points, levels and badges for staff |
| harvey-specter | aide | — | sickn33/agentic-awesome-skills business/harvey-specter | prepares hard conversations with evidence and limits |
| health-wellness | builder | — | sickn33/agentic-awesome-skills business/health-wellness | runs health and wellbeing initiatives |
| hr-pro | builder | — | sickn33/agentic-awesome-skills business/hr-pro | handles broad HR work end to end |
| intern-program | builder | — | sickn33/agentic-awesome-skills business/intern-program | runs an intern program from intake to review |
| issue-grievance-tracker | builder | — | sickn33/agentic-awesome-skills business/issue-grievance-tracker | logs and tracks grievances and issues |
| it-manager-pro | aide | — | sickn33/agentic-awesome-skills business/it-manager-pro | supports IT management decisions and oversight |
| kpi-tracker | builder | — | sickn33/agentic-awesome-skills business/kpi-tracker | tracks key performance indicators |
| leave-management | builder | — | sickn33/agentic-awesome-skills business/leave-management | handles leave requests, balances and approvals |
| market-sizing-analysis | aide | — | sickn33/agentic-awesome-skills business/market-sizing-analysis | sizes a market from the bottom up |
| mentorship-program | builder | — | sickn33/agentic-awesome-skills business/mentorship-program | matches mentors and mentees and tracks progress |
| micro-saas-launcher | builder | — | sickn33/agentic-awesome-skills business/micro-saas-launcher | takes a small idea to a paying product |
| moatmri | aide | — | sickn33/agentic-awesome-skills business/moatmri | maps AI disruption exposure and a defence plan |
| monetization | aide | — | sickn33/agentic-awesome-skills business/monetization | designs pricing, subscriptions and experiments |
| offboarding-exit | builder | — | sickn33/agentic-awesome-skills business/offboarding-exit | handles leaving staff and clean exits |
| offer-appointment | builder | — | sickn33/agentic-awesome-skills business/offer-appointment | produces offer and appointment letters |
| okr-system | builder | — | sickn33/agentic-awesome-skills business/okr-system | runs OKR setting and tracking |
| onboarding-playbook | builder | — | sickn33/agentic-awesome-skills business/onboarding-playbook | builds a playbook for new starters |
| organization-design | aide | — | sickn33/agentic-awesome-skills business/organization-design | designs structure, teams and layers |
| people-directory | builder | — | sickn33/agentic-awesome-skills business/people-directory | keeps a directory of people and roles |
| policy-acknowledgement | builder | — | sickn33/agentic-awesome-skills business/policy-acknowledgement | tracks policy reading and acknowledgement |
| pre-boarding | builder | — | sickn33/agentic-awesome-skills business/pre-boarding | prepares new starters before day one |
| pricing-strategy | aide | — | sickn33/agentic-awesome-skills business/pricing-strategy | sets price levels and packaging strategy |
| pro-launch | builder | — | sickn33/agentic-awesome-skills business/pro-launch | takes an app from idea to launch with gates |
| probation-tracker | builder | — | sickn33/agentic-awesome-skills business/probation-tracker | tracks probation periods and outcomes |
| product-manager | aide | — | sickn33/agentic-awesome-skills business/product-manager | owns what to build and why |
| product-manager-toolkit | builder | — | sickn33/agentic-awesome-skills business/product-manager-toolkit | gives product managers their working tools |
| product-marketing | builder | — | sickn33/agentic-awesome-skills business/product-marketing | takes a product to market with messaging and launch |
| product-marketing-context | builder | — | sickn33/agentic-awesome-skills business/product-marketing-context | gathers market and product context for messaging |
| project-based-performance | builder | — | sickn33/agentic-awesome-skills business/project-based-performance | reviews performance against project work |
| projects-work-management | builder | — | sickn33/agentic-awesome-skills business/projects-work-management | manages projects and work in one place |
| promotion-upgrade-requests | builder | — | sickn33/agentic-awesome-skills business/promotion-upgrade-requests | handles promotion and upgrade requests |
| recognition-rewards | builder | — | sickn33/agentic-awesome-skills business/recognition-rewards | runs recognition and rewards programs |
| recruit | builder | — | sickn33/agentic-awesome-skills business/recruit | shortlists candidates from a job description |
| recruitment-pipeline | builder | — | sickn33/agentic-awesome-skills business/recruitment-pipeline | runs the hiring pipeline from source to offer |
| remote-work-tracker | builder | — | sickn33/agentic-awesome-skills business/remote-work-tracker | tracks remote work and availability |
| risk-manager | aide | — | sickn33/agentic-awesome-skills business/risk-manager | identifies and sizes business risks |
| saas-mvp-launcher | builder | — | sickn33/agentic-awesome-skills business/saas-mvp-launcher | launches a SaaS MVP |
| saas-pricing-strategist | aide | — | sickn33/agentic-awesome-skills business/saas-pricing-strategist | sets SaaS pricing strategy |
| shark | aide | — | sickn33/agentic-awesome-skills business/shark | pitches a business idea to investor agents for grilling |
| skill-gap-analysis | aide | — | sickn33/agentic-awesome-skills business/skill-gap-analysis | finds skills missing against a goal |
| startup-analyst | aide | — | sickn33/agentic-awesome-skills business/startup-analyst | analyses startup health and options |
| startup-business-analyst-business-case | aide | — | sickn33/agentic-awesome-skills business/startup-business-analyst-business-case | builds one investor business case for a startup |
| startup-metrics-framework | builder | — | sickn33/agentic-awesome-skills business/startup-metrics-framework | sets the metrics a startup runs on |
| team-composition-analysis | aide | — | sickn33/agentic-awesome-skills business/team-composition-analysis | analyses team shape and gaps |
| time-tracking | builder | — | sickn33/agentic-awesome-skills business/time-tracking | tracks time spent and reports it |
| usage-based-pricing | aide | — | sickn33/agentic-awesome-skills business/usage-based-pricing | designs usage-based pricing |
| find-complementary-founders | aide | — | sickn33/agentic-awesome-skills business-strategy/find-complementary-founders | finds a cofounder or project partner when asked |
| kotler-macro-analyzer | aide | — | sickn33/agentic-awesome-skills business-strategy/kotler-macro-analyzer | PESTEL and SWOT audit in Kotler's method |
| osterwalder-canvas-architect | builder | — | sickn33/agentic-awesome-skills business-strategy/osterwalder-canvas-architect | builds and tests a business model canvas |
| healthcare-job-search | builder | — | sickn33/agentic-awesome-skills career-jobs/healthcare-job-search | finds open US healthcare jobs |
| neverapply | builder | — | sickn33/agentic-awesome-skills career-jobs/neverapply | finds jobs, tailors a resume and applies with approval |
| web-project-brainstorming | aide | — | sickn33/agentic-awesome-skills consulting/web-project-brainstorming | brainstorms a web project and its pages |
| blueprint | aide | — | sickn33/agentic-awesome-skills planning/blueprint | turns an idea into a build plan |
| concise-planning | aide | — | sickn33/agentic-awesome-skills planning/concise-planning | writes a plan concisely |
| decision-navigator | aide | — | sickn33/agentic-awesome-skills planning/decision-navigator | helps make a decision through options and trade-offs |
| not-a-vibe-coder | builder | — | sickn33/agentic-awesome-skills planning/not-a-vibe-coder | writes code from a plan, not vibes |
| track-management | builder | — | sickn33/agentic-awesome-skills planning/track-management | works with Conductor tracks |
| before-you-build | aide | — | sickn33/agentic-awesome-skills product/before-you-build | checks whether something is worth building first |
| idea-autopsy | aide | — | sickn33/agentic-awesome-skills product/idea-autopsy | kills or saves an idea by examining it |
| product-decision-agent | aide | — | sickn33/agentic-awesome-skills product/product-decision-agent | product decisions: priority, roadmap, retention in Chinese |
| idea-os | builder | — | sickn33/agentic-awesome-skills product-management/idea-os | five phases from raw idea to four linked files |
| project-brief | aide | — | sickn33/agentic-awesome-skills project management/project-brief | sharpens rough notes into a project brief |
| accint-commitments | builder | — | sickn33/agentic-awesome-skills project-management/accint-commitments | closes a project's open promises with recorded verdicts |
| progressive-estimation | builder | — | sickn33/agentic-awesome-skills project-management/progressive-estimation | estimates agent and hybrid work with assumptions |
| project-skill-audit | reviewer | — | sickn33/agentic-awesome-skills project-management/project-skill-audit | names the skills a project would gain most from |
| resumable-implementation-contracts | builder | — | sickn33/agentic-awesome-skills project-management/resumable-implementation-contracts | writes execution contracts that survive sessions |
| understand-project-yylo | builder | — | sickn33/agentic-awesome-skills project-management/understand-project-yylo | reads a YYLO project's architecture before planning |
| ai-content-detector | reviewer | — | sickn33/agentic-awesome-skills ai-powered seo/ai-content-detector | checks whether text reads as AI-generated and reports the signs |
| ai-keyword-explainer | aide | — | sickn33/agentic-awesome-skills keyword research/ai-keyword-explainer | explains what a keyword means and why it matters to a search |
| anchor-text-analyzer | reviewer | — | sickn33/agentic-awesome-skills backlink & link-building/anchor-text-analyzer | reads anchor text across links for relevance and over-optimization |
| backlink-idea-generator | builder | — | sickn33/agentic-awesome-skills backlink & link-building/backlink-idea-generator | suggests places and ways to earn backlinks |
| bounce-rate-estimator | reviewer | — | sickn33/agentic-awesome-skills seo performance/bounce-rate-estimator | estimates and explains a page's likely bounce rate |
| broken-link-finder | reviewer | — | sickn33/agentic-awesome-skills technical seo/broken-link-finder | finds broken links and reports where they point |
| canonical-tag-checker | reviewer | — | sickn33/agentic-awesome-skills technical seo/canonical-tag-checker | checks canonical tags for conflicts and mistakes |
| canonical-url-builder | builder | — | sickn33/agentic-awesome-skills technical seo/canonical-url-builder | writes canonical URLs and confirms the right page is chosen |
| competitor-keyword-overlap-checker | reviewer | — | sickn33/agentic-awesome-skills competitor analysis/competitor-keyword-overlap-checker | finds keywords competitors both target and which one wins |
| content-freshness-checker | reviewer | — | sickn33/agentic-awesome-skills content seo/content-freshness-checker | checks content for signals it is out of date |
| content-gap-finder | aide | — | sickn33/agentic-awesome-skills content seo/content-gap-finder | finds topics the site should cover and does not |
| content-length-comparator | reviewer | — | sickn33/agentic-awesome-skills content seo/content-length-comparator | compares content length against ranking pages |
| ctr-predictor | reviewer | — | sickn33/agentic-awesome-skills seo performance/ctr-predictor | predicts and explains a page's click-through rate |
| developer-sandbox | builder | — | sickn33/agentic-awesome-skills seo utility/developer-sandbox | sets up a sandbox for trying SEO changes safely |
| domain-authority-simulator | reviewer | — | sickn33/agentic-awesome-skills seo performance/domain-authority-simulator | simulates domain authority changes from link scenarios |
| duplicate-content-checker | reviewer | — | sickn33/agentic-awesome-skills technical seo/duplicate-content-checker | finds duplicate content and near-duplicate pages |
| email-systems | builder | — | sickn33/agentic-awesome-skills marketing/email-systems | designs and builds marketing email systems and workflows |
| featured-snippet-optimizer | builder | — | sickn33/agentic-awesome-skills seo/featured-snippet-optimizer | rewrites content to win featured snippets |
| geo-audit | reviewer | — | sickn33/agentic-awesome-skills local seo/geo-audit | audits content for AI answer-engine readiness |
| geo-brand-mentions | reviewer | — | sickn33/agentic-awesome-skills local seo/geo-brand-mentions | finds brand mentions relevant to AI answers |
| geo-citability | reviewer | — | sickn33/agentic-awesome-skills local seo/geo-citability | checks sources and facts that AI engines can cite |
| geo-compare | reviewer | — | sickn33/agentic-awesome-skills local seo/geo-compare | compares AI engine visibility across pages |
| geo-content | builder | — | sickn33/agentic-awesome-skills local seo/geo-content | shapes content so AI answer engines cite it |
| geo-crawlers | reviewer | — | sickn33/agentic-awesome-skills local seo/geo-crawlers | checks whether AI crawlers can reach key content |
| geo-llmstxt | builder | — | sickn33/agentic-awesome-skills local seo/geo-llmstxt | builds or checks llms.txt for AI crawler access |
| geo-platform-optimizer | builder | — | sickn33/agentic-awesome-skills local seo/geo-platform-optimizer | optimizes content for a named AI platform |
| geo-report | builder | — | sickn33/agentic-awesome-skills local seo/geo-report | writes a report on AI answer-engine visibility |
| gmb-optimization-helper | builder | — | sickn33/agentic-awesome-skills local seo/gmb-optimization-helper | improves a Google Business Profile listing |
| guest-posting-opportunity-finder | builder | — | sickn33/agentic-awesome-skills backlink & link-building/guest-posting-opportunity-finder | finds sites that accept guest posts and ranks the fit |
| heading-analyzer | reviewer | — | sickn33/agentic-awesome-skills on-page optimization/heading-analyzer | checks heading structure and wording on a page |
| http-status-code-tester | reviewer | — | sickn33/agentic-awesome-skills technical seo/http-status-code-tester | tests URLs and reports their HTTP status codes |
| image-alt-tag-generator | builder | — | sickn33/agentic-awesome-skills on-page optimization/image-alt-tag-generator | writes alt text for images with keyword intent |
| impression-to-click-ratio-calculator | reviewer | — | sickn33/agentic-awesome-skills seo performance/impression-to-click-ratio-calculator | calculates the impression-to-click ratio and explains it |
| indexing-issue-auditor | reviewer | — | sickn33/agentic-awesome-skills technical seo/indexing-issue-auditor | finds pages blocked or missing from the index |
| internal-linking-planner | builder | — | sickn33/agentic-awesome-skills on-page optimization/internal-linking-planner | plans internal links that pass relevance and intent |
| keyword-clustering-tool | builder | — | sickn33/agentic-awesome-skills keyword research/keyword-clustering-tool | groups keywords by search intent and overlap |
| keyword-comparison-tool | reviewer | — | sickn33/agentic-awesome-skills keyword research/keyword-comparison-tool | compares keywords side by side for intent and reach |
| keyword-density-checker | reviewer | — | sickn33/agentic-awesome-skills on-page optimization/keyword-density-checker | measures keyword density and flags stuffing or thinness |
| keyword-difficulty-estimator | reviewer | — | sickn33/agentic-awesome-skills keyword research/keyword-difficulty-estimator | estimates how hard a keyword is to rank for |
| keyword-expansion-tool | builder | — | sickn33/agentic-awesome-skills keyword research/keyword-expansion-tool | expands a seed keyword into related terms |
| keyword-extractor | builder | — | sickn33/agentic-awesome-skills keyword research/keyword-extractor | pulls search terms from a page or brief |
| keyword-gap-finder | aide | — | sickn33/agentic-awesome-skills keyword research/keyword-gap-finder | finds keywords competitors rank for and the site does not |
| keyword-intent-identifier | aide | — | sickn33/agentic-awesome-skills keyword research/keyword-intent-identifier | labels a keyword's search intent |
| keyword-placement-highlighter | builder | — | sickn33/agentic-awesome-skills on-page optimization/keyword-placement-highlighter | shows where keywords belong on a page |
| keyword-roi-calculator | reviewer | — | sickn33/agentic-awesome-skills seo performance/keyword-roi-calculator | estimates the return of ranking for a keyword |
| keyword-share-estimator | reviewer | — | sickn33/agentic-awesome-skills seo performance/keyword-share-estimator | estimates a page's share of keyword searches |
| link-relevance-evaluator | reviewer | — | sickn33/agentic-awesome-skills backlink & link-building/link-relevance-evaluator | judges whether a link is relevant to a page |
| link-source-categorizer | reviewer | — | sickn33/agentic-awesome-skills backlink & link-building/link-source-categorizer | sorts link sources by type and quality |
| link-toxicity-checker | reviewer | — | sickn33/agentic-awesome-skills backlink & link-building/link-toxicity-checker | checks backlinks for toxic patterns |
| local-citation-finder | builder | — | sickn33/agentic-awesome-skills local seo/local-citation-finder | finds local directories and citation opportunities |
| local-legal-seo-audit | reviewer | — | sickn33/agentic-awesome-skills local seo/local-legal-seo-audit | audits local SEO with legal and compliance checks |
| meta-tag-comparison-tool | reviewer | — | sickn33/agentic-awesome-skills on-page optimization/meta-tag-comparison-tool | compares title and meta tags against ranking pages |
| mobile-friendly-test | reviewer | — | sickn33/agentic-awesome-skills technical seo/mobile-friendly-test | tests pages for mobile usability and errors |
| nap-consistency-checker | reviewer | — | sickn33/agentic-awesome-skills local seo/nap-consistency-checker | checks name, address and phone consistency online |
| nextjs-seo-indexing | builder | — | sickn33/agentic-awesome-skills technical seo/nextjs-seo-indexing | fixes indexing issues in Next.js sites |
| og-tag-generator | builder | — | sickn33/agentic-awesome-skills on-page optimization/og-tag-generator | writes Open Graph tags for shared links |
| on-page-seo-audit-checker | reviewer | — | sickn33/agentic-awesome-skills on-page optimization/on-page-seo-audit-checker | audits a page's on-page SEO and lists fixes |
| organic-growth-forecast-tool | reviewer | — | sickn33/agentic-awesome-skills seo performance/organic-growth-forecast-tool | forecasts organic traffic growth from planned work |
| page-speed-score-simulator | reviewer | — | sickn33/agentic-awesome-skills technical seo/page-speed-score-simulator | simulates page-speed scores and what slows a page |
| ranking-opportunity-finder | aide | — | sickn33/agentic-awesome-skills keyword research/ranking-opportunity-finder | finds keywords the site could rank for soon |
| ranking-progress-tracker | reviewer | — | sickn33/agentic-awesome-skills seo performance/ranking-progress-tracker | tracks rankings over time and reports movement |
| redirect-301-generator | builder | — | sickn33/agentic-awesome-skills technical seo/redirect-301-generator | writes 301 redirect rules and maps old to new URLs |
| redirect-checker | reviewer | — | sickn33/agentic-awesome-skills technical seo/redirect-checker | follows redirect chains and finds loops |
| robots-txt-creator | builder | — | sickn33/agentic-awesome-skills technical seo/robots-txt-creator | writes robots.txt rules for a site |
| robots-txt-validator | reviewer | — | sickn33/agentic-awesome-skills technical seo/robots-txt-validator | checks robots.txt for syntax and blocking mistakes |
| schema-markup | builder | — | sickn33/agentic-awesome-skills schema & structured data/schema-markup | writes and checks Schema.org structured data |
| search-preview-simulator | builder | — | sickn33/agentic-awesome-skills seo utility/search-preview-simulator | shows how a page will look in search results |
| seo-content-checker | reviewer | — | sickn33/agentic-awesome-skills content seo/seo-content-checker | checks content against search intent and SEO basics |
| seo-health-score-calculator | reviewer | — | sickn33/agentic-awesome-skills seo performance/seo-health-score-calculator | scores a site's SEO health from key signals |
| site-comparison-report-generator | builder | — | sickn33/agentic-awesome-skills competitor analysis/site-comparison-report-generator | builds a site-to-site comparison report |
| social-metadata-hardening | builder | — | sickn33/agentic-awesome-skills schema & structured data/social-metadata-hardening | adds and checks social sharing metadata |
| structured-data-validator | reviewer | — | sickn33/agentic-awesome-skills schema & structured data/structured-data-validator | validates structured data against schema rules |
| text-to-html-converter | builder | — | sickn33/agentic-awesome-skills seo utility/text-to-html-converter | turns plain text into clean HTML |
| text-translator | builder | — | sickn33/agentic-awesome-skills seo utility/text-translator | translates content with meaning and keywords kept |
| title-meta-length-counter | reviewer | — | sickn33/agentic-awesome-skills on-page optimization/title-meta-length-counter | measures title and meta lengths against search limits |
| tools-page-seo-optimizer | builder | — | sickn33/agentic-awesome-skills content seo/tools-page-seo-optimizer | optimizes tool pages for search intent and clicks |
| traffic-potential-calculator | reviewer | — | sickn33/agentic-awesome-skills keyword research/traffic-potential-calculator | estimates traffic potential for a keyword or page |
| trending-keyword-visualizer | builder | — | sickn33/agentic-awesome-skills keyword research/trending-keyword-visualizer | shows trending keywords and their movement |
| url-slug-generator | builder | — | sickn33/agentic-awesome-skills on-page optimization/url-slug-generator | turns page titles into clean, readable URL slugs |
| visibility-index-calculator | reviewer | — | sickn33/agentic-awesome-skills seo performance/visibility-index-calculator | calculates a visibility index from rankings |
| word-count-structure-checker | reviewer | — | sickn33/agentic-awesome-skills content seo/word-count-structure-checker | checks word count and structure for search fit |
| xml-sitemap-visualizer | builder | — | sickn33/agentic-awesome-skills technical seo/xml-sitemap-visualizer | builds or shows an XML sitemap with status |
| onboard | builder | — | sickn33/agentic-awesome-skills learning/onboard | takes a pile of varied project material and produces a cited summary plus a study route |

### 13-2000 Financial Specialists

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| budgeting-and-forecasting | builder | — | cbrock84/headcount plugins/finance/skills/budgeting-and-forecasting | runs the annual budget, rolling forecast and the variance checks against actuals |
| capital-allocation | aide | — | cbrock84/headcount plugins/finance/skills/capital-allocation | judges competing uses of limited capital with hurdle rates and payback |
| capital-structure-and-covenants | aide | — | cbrock84/headcount plugins/finance/skills/capital-structure-and-covenants | decides debt versus equity and what that financing then requires |
| chief-financial-officer | aide | — | cbrock84/headcount plugins/finance/skills/chief-financial-officer | owns planning, cash, unit economics and the numbers the business runs on |
| cost-accounting | builder | — | cbrock84/headcount plugins/finance/skills/cost-accounting | says what something actually costs across fixed, variable and activity |
| financial-modeling | builder | — | cbrock84/headcount plugins/finance/skills/financial-modeling | builds and stress-tests revenue, cost and driver models for decisions |
| financial-reporting-and-close | builder | — | cbrock84/headcount plugins/finance/skills/financial-reporting-and-close | runs the period-end close, reconciliations and reporting people read |
| financial-statement-analysis | reviewer | — | cbrock84/headcount plugins/finance/skills/financial-statement-analysis | reads statements and says what changed and why, against period and budget |
| internal-controls-and-audit | reviewer | — | cbrock84/headcount plugins/finance/skills/internal-controls-and-audit | designs and tests segregation, limits and evidence over financial reporting |
| revenue-recognition | reviewer | — | cbrock84/headcount plugins/finance/skills/revenue-recognition | decides when and how revenue is recognized across contract terms |
| tax | aide | — | cbrock84/headcount plugins/finance/skills/tax | works the tax obligations a growing business faces, from income to payroll |
| treasury-and-liquidity | builder | — | cbrock84/headcount plugins/finance/skills/treasury-and-liquidity | manages cash, runway, working capital and currency exposure |
| unit-economics | builder | — | cbrock84/headcount plugins/finance/skills/unit-economics | says whether the business makes money on each customer or unit |
| trade-pipeline | builder | — | The-Swarm-Corporation/AutoHedge | a trading decision as separate steps with structured output between them: a thesis, its quantitative test, position sizing under a risk limit, then an order; execution is the step the Gate holds, never the agent |
| fundamental-analysis | reviewer | — | TauricResearch/TradingAgents | reads a company's financials and performance and says what they support |
| technical-analysis | reviewer | — | TauricResearch/TradingAgents | reads price trends and indicators and says what they show |
| news-analysis | reviewer | — | TauricResearch/TradingAgents | weighs news and market events and says what a decision should take in |
| sentiment-analysis | reviewer | — | TauricResearch/TradingAgents | weighs the market's public mood from what people say and write |
| risk-review | reviewer | — | TauricResearch/TradingAgents | checks a proposed decision against risk before it goes further |
| counterparty-channel-discipline | builder | — | affaan-m/ECC skills/counterparty-channel-discipline | counterparty channels kept disciplined: who may speak, on what terms, recorded |
| investor-materials | builder | — | affaan-m/ECC skills/investor-materials | the deck, memo and data room investors read before a decision |
| investor-outreach | builder | — | affaan-m/ECC skills/investor-outreach | investors found and asked, in the order that works |
| audit-log | builder | — | sickn33/agentic-awesome-skills business/audit-log | keeps a log of changes and who made them for audit |
| audit-preparation | builder | — | sickn33/agentic-awesome-skills business/audit-preparation | gets books and evidence ready for an audit |
| backtesting-frameworks | builder | — | sickn33/agentic-awesome-skills business/backtesting-frameworks | frameworks for backtesting trading rules |
| budget-cash-flow | builder | — | sickn33/agentic-awesome-skills business/budget-cash-flow | plans budgets and cash flow |
| clients-accounts | builder | — | sickn33/agentic-awesome-skills business/clients-accounts | keeps client accounts and what they owe |
| credit-cycle-analysis | aide | — | sickn33/agentic-awesome-skills business/credit-cycle-analysis | analyses credit cycles and their turns |
| day-book | builder | — | sickn33/agentic-awesome-skills business/day-book | keeps the day book of money in and out |
| esop-equity-tracker | builder | — | sickn33/agentic-awesome-skills business/esop-equity-tracker | tracks equity and option plans |
| expense-accounting | builder | — | sickn33/agentic-awesome-skills business/expense-accounting | records expenses and keeps them right |
| expense-management | builder | — | sickn33/agentic-awesome-skills business/expense-management | runs expense claims and approvals |
| inventory-stock-reconciliation | builder | — | sickn33/agentic-awesome-skills business/inventory-stock-reconciliation | matches stock records to actual stock |
| invoices-billing | builder | — | sickn33/agentic-awesome-skills business/invoices-billing | raises invoices and chases payment |
| monthly-closing-statements | builder | — | sickn33/agentic-awesome-skills business/monthly-closing-statements | produces month-end closing statements |
| party-ledger-reconciliation | builder | — | sickn33/agentic-awesome-skills business/party-ledger-reconciliation | reconciles each party's ledger |
| payment-accounting | builder | — | sickn33/agentic-awesome-skills business/payment-accounting | records payments and their entries |
| payments-received | builder | — | sickn33/agentic-awesome-skills business/payments-received | tracks payments received and clears invoices |
| payroll-finance | builder | — | sickn33/agentic-awesome-skills business/payroll-finance | works payroll amounts and finance entries |
| petty-cash-management | builder | — | sickn33/agentic-awesome-skills business/petty-cash-management | manages petty cash and its records |
| purchase-accounting | builder | — | sickn33/agentic-awesome-skills business/purchase-accounting | records purchases and their accounting |
| receipt-accounting | builder | — | sickn33/agentic-awesome-skills business/receipt-accounting | records receipts and their accounting |
| risk-metrics-calculation | builder | — | sickn33/agentic-awesome-skills business/risk-metrics-calculation | calculates risk metrics for decisions |
| salary-benchmarking | aide | — | sickn33/agentic-awesome-skills business/salary-benchmarking | compares pay against market benchmarks |
| salary-wage-accounting | builder | — | sickn33/agentic-awesome-skills business/salary-wage-accounting | records wages and salaries in the books |
| sales-accounting | builder | — | sickn33/agentic-awesome-skills business/sales-accounting | records sales and their accounting |
| tds-booking-payment | builder | — | sickn33/agentic-awesome-skills business/tds-booking-payment | books tax deducted at source payments |
| quant-analyst | aide | — | sickn33/agentic-awesome-skills business/quant-analyst | analyses numbers to answer a business question |
| second-deposit-igaming | builder | — | sickn33/agentic-awesome-skills business/second-deposit-igaming | explores iGaming deposit exports with care for player data |
| axonx | builder | — | sickn33/agentic-awesome-skills finance/axonx | a research plugin and command interface for quantitative work |
| calibrate-first | builder | — | sickn33/agentic-awesome-skills finance/calibrate-first | measures a dataset's detection floor before trusting a signal |
| equibles | builder | — | sickn33/agentic-awesome-skills finance/equibles | queries SEC filings and market data |
| fxmacrodata | builder | — | sickn33/agentic-awesome-skills finance/fxmacrodata | official macro indicators, policy rates and currency data |
| krexa | builder | — | sickn33/agentic-awesome-skills finance/krexa | turns a trading idea into fixed rules and backtests them |
| longbridge | builder | — | sickn33/agentic-awesome-skills finance/longbridge | guide to a separately installed broker integration |
| longbridge-content | builder | — | sickn33/agentic-awesome-skills finance/longbridge-content | news, filings and discussion for listed stocks |
| longbridge-derivatives | builder | — | sickn33/agentic-awesome-skills finance/longbridge-derivatives | derivatives data and work from Longbridge |
| longbridge-fundamentals | builder | — | sickn33/agentic-awesome-skills finance/longbridge-fundamentals | fundamental data for listed companies |
| longbridge-market-data | builder | — | sickn33/agentic-awesome-skills finance/longbridge-market-data | market data from Longbridge |
| longbridge-quant | builder | — | sickn33/agentic-awesome-skills finance/longbridge-quant | quantitative work on Longbridge data |
| nano-settlement-verify | reviewer | — | sickn33/agentic-awesome-skills finance/nano-settlement-verify | checks a Nano payment settled before serving a paid call |
| options-flow-analyzer | builder | — | sickn33/agentic-awesome-skills finance/options-flow-analyzer | analyses options flow |
| traderspy-market-briefing | aide | — | sickn33/agentic-awesome-skills finance/traderspy-market-briefing | briefs the market state |
| traderspy-market-screener | builder | — | sickn33/agentic-awesome-skills finance/traderspy-market-screener | screens markets for what fits |
| traderspy-position-check | reviewer | — | sickn33/agentic-awesome-skills finance/traderspy-position-check | checks a trading position |
| traderspy-smart-money | builder | — | sickn33/agentic-awesome-skills finance/traderspy-smart-money | follows smart-money signals |
| traderspy-trading-signals | builder | — | sickn33/agentic-awesome-skills finance/traderspy-trading-signals | works trading signals |
| warren-buffett | aide | — | sickn33/agentic-awesome-skills finance/warren-buffett | investment judgement in Warren Buffett's manner |
| xvary-stock-research | aide | — | sickn33/agentic-awesome-skills finance/xvary-stock-research | thesis-driven equity analysis from SEC EDGAR |
| yield-intelligence | aide | — | sickn33/agentic-awesome-skills finance/yield-intelligence | dividend, Treasury and REIT income analysis |
| doom-pay | builder | — | sickn33/agentic-awesome-skills payments/doom-pay | self-custodial checkout links and payment receipt checks |
| trading-ledger | builder | — | sickn33/agentic-awesome-skills productivity/trading-ledger | keeps a journal of trades noting why each was made, the plan and the trader's mood |

## 15-0000 Computer and Mathematical Occupations

### 15-1200 Computer Occupations

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| test-first | builder | built | mattpocock/skills tdd (b0618bc) | a feature or fix built test first, one thin slice at a time, checking behaviour |
| diagnose | builder | built | mattpocock/skills diagnosing-bugs (b0618bc) | a hard bug found from a fast signal that fails on it, then fixed |
| review | reviewer | built | mattpocock/skills code-review (b0618bc) | a change reviewed against the project's standards and against its spec |
| codebase-design | builder | — | mattpocock/skills codebase-design | deep modules, clean seams |
| prototype | builder | — | mattpocock/skills prototype | a throwaway build to answer one design question — his spike |
| pr | reviewer | — | mattpocock/skills pr | the evidence a change must show and the merge-danger call; the pull-request body falls away |
| inspect-without-source | builder | — | morluto/rea .agents/skills/reverse-engineer-anything | reading a tool's evidence: observation, inference and unknown kept apart, each piece cited, static analysis never claimed as execution, the target asked for and never chosen |
| ai-workflow-architect | builder | — | cbrock84/headcount plugins/technology/skills/ai-workflow-architect | designs automations and agent workflows for work worth automating |
| api-design | builder | — | cbrock84/headcount plugins/technology/skills/api-design | designs interfaces that survive their consumers |
| branch-and-worktree-workflow | builder | — | cbrock84/headcount plugins/technology/skills/branch-and-worktree-workflow | isolates work in its own branch or worktree and integrates cleanly |
| chief-technology-officer | aide | — | cbrock84/headcount plugins/technology/skills/chief-technology-officer | owns architecture, delivery, infrastructure and data platform |
| cloud-infrastructure | builder | — | cbrock84/headcount plugins/technology/skills/cloud-infrastructure | designs and runs cloud infrastructure as code with isolation and cost in view |
| code-review | reviewer | — | cbrock84/headcount plugins/technology/skills/code-review | reviews a change for correctness, design and risk, and answers feedback |
| completion-verification | reviewer | — | cbrock84/headcount plugins/technology/skills/completion-verification | verifies work is complete by running its checks and reading the output |
| data-migration | builder | — | cbrock84/headcount plugins/technology/skills/data-migration | moves data between systems without loss or corruption |
| implementation-planning | aide | — | cbrock84/headcount plugins/technology/skills/implementation-planning | turns a spec into an executable plan and drives it through review |
| observability-and-reliability | builder | — | cbrock84/headcount plugins/technology/skills/observability-and-reliability | makes systems debuggable with instrumenting and honest alerting |
| parallel-agent-delivery | builder | — | cbrock84/headcount plugins/technology/skills/parallel-agent-delivery | splits work across agents with disjoint surfaces that merge cleanly |
| prompt-optimizer | builder | — | cbrock84/headcount plugins/technology/skills/prompt-optimizer | turns rough intent into reliable prompts by fixing inconsistency |
| release-and-deployment | builder | — | cbrock84/headcount plugins/technology/skills/release-and-deployment | ships changes with pipelines, flags, rollback and database steps |
| skill-authoring | builder | — | cbrock84/headcount plugins/technology/skills/skill-authoring | writes agent skills that trigger at the right moments |
| solution-architecture | aide | — | cbrock84/headcount plugins/technology/skills/solution-architecture | designs system boundaries and records why the trade-offs hold |
| solution-exploration | aide | — | cbrock84/headcount plugins/technology/skills/solution-exploration | explores the problem and its approaches before code is written |
| systematic-debugging | builder | — | cbrock84/headcount plugins/technology/skills/systematic-debugging | finds the root cause before proposing a fix |
| technical-debt-management | aide | — | cbrock84/headcount plugins/technology/skills/technical-debt-management | makes debt visible, quantified and decidable in business terms |
| test-driven-development | builder | — | cbrock84/headcount plugins/technology/skills/test-driven-development | writes the failing test first, then the smallest passing code |
| access-and-identity | reviewer | — | cbrock84/headcount plugins/security/skills/access-and-identity | audits who can reach what, from authentication to credentials |
| chief-information-security-officer | aide | — | cbrock84/headcount plugins/security/skills/chief-information-security-officer | owns the security posture and the authority to stop work at risk |
| data-protection-and-encryption | reviewer | — | cbrock84/headcount plugins/security/skills/data-protection-and-encryption | reviews how data is classified, encrypted in transit and at rest |
| detection-and-monitoring | builder | — | cbrock84/headcount plugins/security/skills/detection-and-monitoring | builds logging and detections that notice an attack in progress |
| incident-response | builder | — | cbrock84/headcount plugins/security/skills/incident-response | runs a security incident from triage through closure and review |
| security-architecture-review | reviewer | — | cbrock84/headcount plugins/security/skills/security-architecture-review | reviews a design for security before it ships |
| threat-modeling | reviewer | — | cbrock84/headcount plugins/security/skills/threat-modeling | finds the assets, entry points and trust boundaries worth attacking |
| vulnerability-management | reviewer | — | cbrock84/headcount plugins/security/skills/vulnerability-management | tracks weaknesses from discovery to confirmed fix by exploitability |
| backup-and-recovery | builder | — | cbrock84/headcount plugins/it-operations/skills/backup-and-recovery | protects and proves restores with coverage, retention and tests |
| chief-information-officer | aide | — | cbrock84/headcount plugins/it-operations/skills/chief-information-officer | runs the technology the company works on, its quality and spend |
| cloud-administration | builder | — | cbrock84/headcount plugins/it-operations/skills/cloud-administration | administers tenants, the SaaS estate and who owns each app |
| collaboration-platform-administration | builder | — | cbrock84/headcount plugins/it-operations/skills/collaboration-platform-administration | administers email, chat, meeting and file platforms with mail authentication |
| endpoint-management | builder | — | cbrock84/headcount plugins/it-operations/skills/endpoint-management | manages devices through enrollment, patching and lost-device handling |
| identity-lifecycle-administration | builder | — | cbrock84/headcount plugins/it-operations/skills/identity-lifecycle-administration | runs joiner, mover and leaver provisioning to full deprovisioning |
| it-asset-management | builder | — | cbrock84/headcount plugins/it-operations/skills/it-asset-management | tracks hardware and software from procurement to disposal |
| network-administration | builder | — | cbrock84/headcount plugins/it-operations/skills/network-administration | designs and runs segmentation, remote access and DNS |
| service-desk | builder | — | cbrock84/headcount plugins/it-operations/skills/service-desk | runs intake, triage and escalation with metrics that improve service |
| systems-administration | builder | — | cbrock84/headcount plugins/it-operations/skills/systems-administration | runs servers with patching, baselines, change control and capacity |
| telephony-and-conferencing | builder | — | cbrock84/headcount plugins/it-operations/skills/telephony-and-conferencing | runs voice, meetings and emergency calling obligations |
| virtualization-operations | builder | — | cbrock84/headcount plugins/it-operations/skills/virtualization-operations | runs the hypervisor layer with capacity, snapshots and resilience |
| brand-identity | builder | — | cbrock84/headcount plugins/product/skills/brand-identity | defines logo, palette and type with guidelines that keep expression consistent |
| design-styles | builder | — | cbrock84/headcount plugins/product/skills/design-styles | applies a deliberate visual direction to an interface |
| design-system | builder | — | cbrock84/headcount plugins/product/skills/design-system | builds the tokens, component contracts and rules a product is assembled from |
| interface-craft | builder | — | cbrock84/headcount plugins/product/skills/interface-craft | raises an interface's layout, hierarchy, type and density |
| interface-redesign | builder | — | cbrock84/headcount plugins/product/skills/interface-redesign | upgrades an existing interface to a higher standard in place |
| presentation-design | builder | — | cbrock84/headcount plugins/product/skills/presentation-design | designs decks and one-pagers that carry an argument |
| ux-product-auditor | reviewer | — | cbrock84/headcount plugins/product/skills/ux-product-auditor | ties usability and conversion findings to outcomes and fixes |
| visual-reference-generation | builder | — | cbrock84/headcount plugins/product/skills/visual-reference-generation | makes screen concepts and flows from a brief before implementation |
| ai-ml-governance | reviewer | — | cbrock84/headcount plugins/data-analytics/skills/ai-ml-governance | governs models in production with intended use, evaluation, monitoring and oversight |
| business-intelligence | builder | — | cbrock84/headcount plugins/data-analytics/skills/business-intelligence | builds reporting and self-serve analytics people actually use |
| chief-data-officer | aide | — | cbrock84/headcount plugins/data-analytics/skills/chief-data-officer | owns data as an asset: governance, quality, warehouse and model oversight |
| data-engineering | builder | — | cbrock84/headcount plugins/data-analytics/skills/data-engineering | builds and runs reliable data pipelines |
| data-governance | reviewer | — | cbrock84/headcount plugins/data-analytics/skills/data-governance | sets ownership, definitions, quality, access and lineage for data |
| accessibility | builder | — | affaan-m/ECC skills/accessibility | software made usable by people with disabilities, held to standards |
| agent-eval | builder | — | affaan-m/ECC skills/agent-eval | builds and runs the measurements that show how an agent performs |
| agent-payment-x402 | builder | — | affaan-m/ECC skills/agent-payment-x402 | works the x402 payment flow for agents |
| agent-security-hardening | builder | — | affaan-m/ECC skills/agent-security-hardening | hardens an agent against attack and misuse |
| agent-self-evaluation | aide | — | affaan-m/ECC skills/agent-self-evaluation | questions its own work before it is handed over |
| agent-sort | builder | — | affaan-m/ECC skills/agent-sort | sorts and ranks what agents take on next |
| agentic-engineering | builder | — | affaan-m/ECC skills/agentic-engineering | builds systems that act through agents |
| agentic-os | builder | — | affaan-m/ECC skills/agentic-os | an operating layer for running many agents |
| ai-first-engineering | builder | — | affaan-m/ECC skills/ai-first-engineering | engineering where the model is the first part, not an add-on |
| ai-regression-testing | builder | — | affaan-m/ECC skills/ai-regression-testing | tests that a model's answers hold across changes |
| android-clean-architecture | builder | — | affaan-m/ECC skills/android-clean-architecture | clean architecture applied to Android apps |
| angular-developer | builder | — | affaan-m/ECC skills/angular-developer | Angular apps built to its own patterns |
| api-connector-builder | builder | — | affaan-m/ECC skills/api-connector-builder | connectors that talk to an outside API |
| architecture-decision-records | builder | — | affaan-m/ECC skills/architecture-decision-records | keeps the records of why a design was chosen |
| automation-audit-ops | reviewer | — | affaan-m/ECC skills/automation-audit-ops | audits running automations for safety, cost and effect |
| backend-patterns | builder | — | affaan-m/ECC skills/backend-patterns | the shared patterns a back end is built on |
| benchmark-methodology | aide | — | affaan-m/ECC skills/benchmark-methodology | the method of a fair benchmark, before it is run |
| benchmark-optimization-loop | builder | — | affaan-m/ECC skills/benchmark-optimization-loop | turns benchmark runs into a loop that improves the system |
| benchmark | builder | — | affaan-m/ECC skills/benchmark | measures a system against a fixed yardstick |
| bengali-nlp | builder | — | affaan-m/ECC skills/bengali-nlp | language work on Bengali text |
| brownfield-retrospective | aide | — | affaan-m/ECC skills/brownfield-retrospective | reads a live codebase and plans the changes it can take |
| browser-qa | builder | — | affaan-m/ECC skills/browser-qa | checks software in the browser, the way a user meets it |
| bun-runtime | builder | — | affaan-m/ECC skills/bun-runtime | the Bun runtime and its tooling |
| canary-watch | builder | — | affaan-m/ECC skills/canary-watch | watches a canary release and catches its regressions |
| change-impact | aide | — | affaan-m/ECC skills/change-impact | names the parts of a system a change will touch |
| cisco-ios-patterns | builder | — | affaan-m/ECC skills/cisco-ios-patterns | the patterns for configuring Cisco IOS gear |
| click-path-audit | reviewer | — | affaan-m/ECC skills/click-path-audit | walks the paths users click and finds where they stall |
| clickhouse-io | builder | — | affaan-m/ECC skills/clickhouse-io | ClickHouse, the columnar database, put to work |
| code-tour | builder | — | affaan-m/ECC skills/code-tour | leads a walk through unfamiliar code and explains it |
| codebase-onboarding | builder | — | affaan-m/ECC skills/codebase-onboarding | the path a newcomer into a codebase takes |
| coding-standards | aide | — | affaan-m/ECC skills/coding-standards | sets and guards the standards a codebase is held to |
| compose-multiplatform-patterns | builder | — | affaan-m/ECC skills/compose-multiplatform-patterns | Compose UI across the platforms that share it |
| config-gc | builder | — | affaan-m/ECC skills/config-gc | clears out configuration that is no longer used |
| connections-optimizer | builder | — | affaan-m/ECC skills/connections-optimizer | trims connections and pooling to their least cost |
| content-hash-cache-pattern | builder | — | affaan-m/ECC skills/content-hash-cache-pattern | a cache keyed by content hash so stale never serves |
| context-and-decisions | aide | — | affaan-m/ECC skills/context-and-decisions | the context and decisions a piece of work carries |
| context-budget | builder | — | affaan-m/ECC skills/context-budget | spends a model's context on what earns its place |
| contract-first | builder | — | affaan-m/ECC skills/contract-first | the contract written and agreed before the code |
| cost-aware-llm-pipeline | builder | — | affaan-m/ECC skills/cost-aware-llm-pipeline | a model pipeline that knows what each call costs |
| cost-tracking | builder | — | affaan-m/ECC skills/cost-tracking | follows what a system costs as it runs |
| council-multi-model | builder | — | affaan-m/ECC skills/council-multi-model | several models weighed together on one decision |
| council | builder | — | affaan-m/ECC skills/council | models in council, challenged before a decision |
| cpp-coding-standards | aide | — | affaan-m/ECC skills/cpp-coding-standards | the standards a C++ codebase is held to |
| cpp-testing | builder | — | affaan-m/ECC skills/cpp-testing | tests for C++ code, written and run |
| csharp-testing | builder | — | affaan-m/ECC skills/csharp-testing | tests for C# code, written and run |
| dart-flutter-patterns | builder | — | affaan-m/ECC skills/dart-flutter-patterns | the patterns Dart and Flutter share |
| dashboard-builder | builder | — | affaan-m/ECC skills/dashboard-builder | a dashboard that shows the numbers that matter |
| data-scraper-agent | builder | — | affaan-m/ECC skills/data-scraper-agent | an agent that pulls data from its sources |
| data-throughput-accelerator | builder | — | affaan-m/ECC skills/data-throughput-accelerator | finds where data slows and widens the pipe |
| database-migrations | builder | — | affaan-m/ECC skills/database-migrations | schema changes written, ordered and rolled forward |
| defi-amm-security | builder | — | affaan-m/ECC skills/defi-amm-security | the risks of DeFi's automated markets, found first |
| deployment-patterns | builder | — | affaan-m/ECC skills/deployment-patterns | the patterns software is shipped under |
| django-celery | builder | — | affaan-m/ECC skills/django-celery | Celery's queued work inside a Django app |
| django-patterns | builder | — | affaan-m/ECC skills/django-patterns | the patterns a Django app is built on |
| django-security | builder | — | affaan-m/ECC skills/django-security | Django's security held unbroken |
| dmux-workflows | builder | — | affaan-m/ECC skills/dmux-workflows | multiplexed terminal sessions as a workflow |
| docker-patterns | builder | — | affaan-m/ECC skills/docker-patterns | images and containers built to the patterns that hold |
| docs-governance | aide | — | affaan-m/ECC skills/docs-governance | keeps the docs truthful, current and owned |
| documentation-lookup | builder | — | affaan-m/ECC skills/documentation-lookup | finds the doc that answers, fast |
| dotnet-patterns | builder | — | affaan-m/ECC skills/dotnet-patterns | the patterns .NET applications share |
| e2e-testing | builder | — | affaan-m/ECC skills/e2e-testing | the whole flow tested as a user walks it |
| email-ops | builder | — | affaan-m/ECC skills/email-ops | email sent, routed and observed |
| enterprise-agent-ops | builder | — | affaan-m/ECC skills/enterprise-agent-ops | agents run at the scale of a whole company |
| error-handling | builder | — | affaan-m/ECC skills/error-handling | errors caught, named and dealt with the same way everywhere |
| esign-field-placement | builder | — | affaan-m/ECC skills/esign-field-placement | signature fields placed where they hold |
| evm-token-decimals | builder | — | affaan-m/ECC skills/evm-token-decimals | token decimals on EVM chains, got right |
| exa-search | builder | — | affaan-m/ECC skills/exa-search | Exa's semantic search put to work |
| fal-ai-media | builder | — | affaan-m/ECC skills/fal-ai-media | fal.ai's models for generated media |
| fastapi-patterns | builder | — | affaan-m/ECC skills/fastapi-patterns | the patterns a FastAPI service is built on |
| flox-environments | builder | — | affaan-m/ECC skills/flox-environments | Flox environments, reproducible as built |
| foundation-models-on-device | builder | — | affaan-m/ECC skills/foundation-models-on-device | foundation models run on the device itself |
| frontend-a11y | builder | — | affaan-m/ECC skills/frontend-a11y | the front end made accessible |
| frontend-patterns | builder | — | affaan-m/ECC skills/frontend-patterns | the patterns a front end is built on |
| fsharp-testing | builder | — | affaan-m/ECC skills/fsharp-testing | tests for F# code, written and run |
| generating-python-installer | builder | — | affaan-m/ECC skills/generating-python-installer | a Python app turned into an installer |
| git-workflow | builder | — | affaan-m/ECC skills/git-workflow | the git habits a team works under |
| github-ops | builder | — | affaan-m/ECC skills/github-ops | GitHub repos and workflows operated |
| golang-patterns | builder | — | affaan-m/ECC skills/golang-patterns | the patterns Go code is built on |
| golang-testing | builder | — | affaan-m/ECC skills/golang-testing | tests for Go code, written and run |
| google-workspace-ops | builder | — | affaan-m/ECC skills/google-workspace-ops | Google Workspace administered |
| growth-log | builder | — | affaan-m/ECC skills/growth-log | the growth log kept and read back |
| healthcare-cdss-patterns | builder | — | affaan-m/ECC skills/healthcare-cdss-patterns | clinical decision support built to its patterns |
| healthcare-emr-patterns | builder | — | affaan-m/ECC skills/healthcare-emr-patterns | electronic medical records built to their patterns |
| healthcare-phi-compliance | reviewer | — | affaan-m/ECC skills/healthcare-phi-compliance | protected health information kept guarded |
| hermes-imports | builder | — | affaan-m/ECC skills/hermes-imports | Hermes imports worked through |
| hexagonal-architecture | builder | — | affaan-m/ECC skills/hexagonal-architecture | the core kept apart from its ports and adapters |
| hipaa-compliance | reviewer | — | affaan-m/ECC skills/hipaa-compliance | software held to HIPAA's rules |
| homelab-network-readiness | builder | — | affaan-m/ECC skills/homelab-network-readiness | a homelab network made ready |
| homelab-network-setup | builder | — | affaan-m/ECC skills/homelab-network-setup | a homelab network set up from bare metal |
| homelab-pihole-dns | builder | — | affaan-m/ECC skills/homelab-pihole-dns | Pi-hole DNS run at home |
| homelab-vlan-segmentation | builder | — | affaan-m/ECC skills/homelab-vlan-segmentation | a home network segmented with VLANs |
| homelab-wireguard-vpn | builder | — | affaan-m/ECC skills/homelab-wireguard-vpn | WireGuard VPN run from home |
| i18n-sync | builder | — | affaan-m/ECC skills/i18n-sync | translations kept in step across locales |
| inherit-legacy-style | builder | — | affaan-m/ECC skills/inherit-legacy-style | new code that matches the old code's style |
| intent-driven-development | builder | — | affaan-m/ECC skills/intent-driven-development | work driven from intent, not a full spec |
| iterative-retrieval | builder | — | affaan-m/ECC skills/iterative-retrieval | retrieval that comes back better each round |
| java-coding-standards | aide | — | affaan-m/ECC skills/java-coding-standards | the standards a Java codebase is held to |
| jira-integration | builder | — | affaan-m/ECC skills/jira-integration | Jira wired into the work |
| jpa-patterns | builder | — | affaan-m/ECC skills/jpa-patterns | the patterns JPA persistence is built on |
| knowledge-ops | builder | — | affaan-m/ECC skills/knowledge-ops | knowledge kept, found and current |
| kotlin-coroutines-flows | builder | — | affaan-m/ECC skills/kotlin-coroutines-flows | coroutines and flows done the Kotlin way |
| kotlin-exposed-patterns | builder | — | affaan-m/ECC skills/kotlin-exposed-patterns | the patterns Kotlin Exposed is built on |
| kotlin-ktor-patterns | builder | — | affaan-m/ECC skills/kotlin-ktor-patterns | the patterns a Ktor service is built on |
| kotlin-patterns | builder | — | affaan-m/ECC skills/kotlin-patterns | the patterns Kotlin code is built on |
| kotlin-testing | builder | — | affaan-m/ECC skills/kotlin-testing | tests for Kotlin code, written and run |
| kubernetes-patterns | builder | — | affaan-m/ECC skills/kubernetes-patterns | the patterns Kubernetes workloads run under |
| laravel-patterns | builder | — | affaan-m/ECC skills/laravel-patterns | the patterns a Laravel app is built on |
| laravel-plugin-discovery | builder | — | affaan-m/ECC skills/laravel-plugin-discovery | Laravel plugins discovered, not declared |
| laravel-security | builder | — | affaan-m/ECC skills/laravel-security | Laravel's security held unbroken |
| latency-critical-systems | builder | — | affaan-m/ECC skills/latency-critical-systems | systems built where the deadline is the spec |
| living-docs-governance | aide | — | affaan-m/ECC skills/living-docs-governance | docs that change as the system changes |
| llm-trading-agent-security | builder | — | affaan-m/ECC skills/llm-trading-agent-security | the risks of a trading agent that thinks, closed |
| loop-design-check | reviewer | — | affaan-m/ECC skills/loop-design-check | an agent loop's design checked before it runs |
| mailtrap-email-integration | builder | — | affaan-m/ECC skills/mailtrap-email-integration | Mailtrap wired in for email under test |
| mcp-server-patterns | builder | — | affaan-m/ECC skills/mcp-server-patterns | the patterns an MCP server is built on |
| messages-ops | builder | — | affaan-m/ECC skills/messages-ops | messages routed and observed |
| ml-adoption-playbook | aide | — | affaan-m/ECC skills/ml-adoption-playbook | the playbook a team adopts machine learning under |
| mle-workflow | builder | — | affaan-m/ECC skills/mle-workflow | the machine learning engineer's loop, end to end |
| module-governance | aide | — | affaan-m/ECC skills/module-governance | modules owned, bounded and depended on |
| module-regression | builder | — | affaan-m/ECC skills/module-regression | a module tested alone against regressions |
| mybatis-patterns | builder | — | affaan-m/ECC skills/mybatis-patterns | the patterns MyBatis persistence is built on |
| mysql-patterns | builder | — | affaan-m/ECC skills/mysql-patterns | the patterns a MySQL database is run under |
| nestjs-patterns | builder | — | affaan-m/ECC skills/nestjs-patterns | the patterns a NestJS app is built on |
| netmiko-ssh-automation | builder | — | affaan-m/ECC skills/netmiko-ssh-automation | network gear driven over SSH with Netmiko |
| network-bgp-diagnostics | builder | — | affaan-m/ECC skills/network-bgp-diagnostics | BGP trouble found and named |
| network-config-validation | builder | — | affaan-m/ECC skills/network-config-validation | network configuration validated before it ships |
| network-interface-health | builder | — | affaan-m/ECC skills/network-interface-health | interfaces watched and their troubles named |
| nextjs-turbopack | builder | — | affaan-m/ECC skills/nextjs-turbopack | Next.js on Turbopack's fast build |
| nodejs-keccak256 | builder | — | affaan-m/ECC skills/nodejs-keccak256 | keccak256 in Node.js, got right |
| nutrient-document-processing | builder | — | affaan-m/ECC skills/nutrient-document-processing | documents processed with Nutrient's SDK |
| nuxt4-patterns | builder | — | affaan-m/ECC skills/nuxt4-patterns | the patterns a Nuxt 4 app is built on |
| opensource-pipeline | builder | — | affaan-m/ECC skills/opensource-pipeline | open source contributions moved through one pipeline |
| osint-investigation | builder | — | affaan-m/ECC skills/osint-investigation | an investigation built from open sources |
| parallel-execution-optimizer | builder | — | affaan-m/ECC skills/parallel-execution-optimizer | work parallelized where it pays |
| perl-patterns | builder | — | affaan-m/ECC skills/perl-patterns | the patterns Perl code is built on |
| perl-security | builder | — | affaan-m/ECC skills/perl-security | Perl's security held unbroken |
| perl-testing | builder | — | affaan-m/ECC skills/perl-testing | tests for Perl code, written and run |
| plan-canvas | aide | — | affaan-m/ECC skills/plan-canvas | a plan laid out on one canvas before work starts |
| plan-orchestrate | builder | — | affaan-m/ECC skills/plan-orchestrate | a plan carried across the steps that depend on each other |
| plankton-code-quality | builder | — | affaan-m/ECC skills/plankton-code-quality | code quality measured on the little things |
| postgres-patterns | builder | — | affaan-m/ECC skills/postgres-patterns | the patterns a PostgreSQL database is run under |
| prediction-market-oracle-research | builder | — | affaan-m/ECC skills/prediction-market-oracle-research | oracles for prediction markets, researched |
| prisma-patterns | builder | — | affaan-m/ECC skills/prisma-patterns | the patterns Prisma is built on |
| product-capability | builder | — | affaan-m/ECC skills/product-capability | a product capability built out in the software |
| product-lens | aide | — | affaan-m/ECC skills/product-lens | work seen through what the product needs |
| production-audit | reviewer | — | affaan-m/ECC skills/production-audit | production audited for what will fail next |
| project-flow-ops | builder | — | affaan-m/ECC skills/project-flow-ops | the project's flow kept moving |
| prompt-caching-strategy | builder | — | affaan-m/ECC skills/prompt-caching-strategy | prompts cached to save the cost of asking twice |
| python-patterns | builder | — | affaan-m/ECC skills/python-patterns | the patterns Python code is built on |
| python-testing | builder | — | affaan-m/ECC skills/python-testing | tests for Python code, written and run |
| pytorch-patterns | builder | — | affaan-m/ECC skills/pytorch-patterns | the patterns PyTorch models are built on |
| quarkus-patterns | builder | — | affaan-m/ECC skills/quarkus-patterns | the patterns a Quarkus app is built on |
| quarkus-security | builder | — | affaan-m/ECC skills/quarkus-security | Quarkus's security held unbroken |
| rails-patterns | builder | — | affaan-m/ECC skills/rails-patterns | the patterns a Rails app is built on |
| react-native-patterns | builder | — | affaan-m/ECC skills/react-native-patterns | the patterns React Native apps are built on |
| react-patterns | builder | — | affaan-m/ECC skills/react-patterns | the patterns React is built on |
| react-performance | builder | — | affaan-m/ECC skills/react-performance | React kept fast where renders are costly |
| react-testing | builder | — | affaan-m/ECC skills/react-testing | tests for React code, written and run |
| recsys-pipeline-architect | builder | — | affaan-m/ECC skills/recsys-pipeline-architect | recommendation pipelines architected end to end |
| recursive-decision-ledger | builder | — | affaan-m/ECC skills/recursive-decision-ledger | decisions kept in a ledger that reads itself |
| redis-patterns | builder | — | affaan-m/ECC skills/redis-patterns | the patterns Redis is run under |
| regex-vs-llm-structured-text | builder | — | affaan-m/ECC skills/regex-vs-llm-structured-text | knows when the regex and when the model reads the text |
| repo-scan | reviewer | — | affaan-m/ECC skills/repo-scan | a repository scanned for what is wrong or secret |
| research-ops | builder | — | affaan-m/ECC skills/research-ops | the research workflow operated |
| rules-distill | builder | — | affaan-m/ECC skills/rules-distill | rules distilled from what has worked |
| rust-patterns | builder | — | affaan-m/ECC skills/rust-patterns | the patterns Rust code is built on |
| rust-testing | builder | — | affaan-m/ECC skills/rust-testing | tests for Rust code, written and run |
| safety-guard | reviewer | — | affaan-m/ECC skills/safety-guard | unsafe behaviour caught before it acts |
| santa-method | builder | — | affaan-m/ECC skills/santa-method | work delivered the Santa method's way |
| scientific-db-pubmed-database | builder | — | affaan-m/ECC skills/scientific-db-pubmed-database | PubMed built and queried |
| scientific-db-uspto-database | builder | — | affaan-m/ECC skills/scientific-db-uspto-database | USPTO built and queried |
| scientific-pkg-gget | builder | — | affaan-m/ECC skills/scientific-pkg-gget | gget's scientific data retrieval at work |
| scientific-thinking-literature-review | builder | — | affaan-m/ECC skills/scientific-thinking-literature-review | a literature review done like a scientist |
| scientific-thinking-scholar-evaluation | reviewer | — | affaan-m/ECC skills/scientific-thinking-scholar-evaluation | scholars judged by their record, not their noise |
| search-first | builder | — | affaan-m/ECC skills/search-first | the existing answer found before a new one is built |
| security-bounty-hunter | reviewer | — | affaan-m/ECC skills/security-bounty-hunter | the bounty hunter's hunt for what is broken |
| security-scan | reviewer | — | affaan-m/ECC skills/security-scan | a system scanned for security weaknesses |
| social-graph-ranker | builder | — | affaan-m/ECC skills/social-graph-ranker | a social graph turned into a ranking |
| springboot-patterns | builder | — | affaan-m/ECC skills/springboot-patterns | the patterns a Spring Boot app is built on |
| springboot-security | builder | — | affaan-m/ECC skills/springboot-security | Spring Boot's security held unbroken |
| story-lifecycle | builder | — | affaan-m/ECC skills/story-lifecycle | a user story carried through its whole life |
| strategic-compact | aide | — | affaan-m/ECC skills/strategic-compact | strategy compressed to its load-bearing points |
| swift-actor-persistence | builder | — | affaan-m/ECC skills/swift-actor-persistence | Swift actors and what their state keeps |
| swift-concurrency-6-2 | builder | — | affaan-m/ECC skills/swift-concurrency-6-2 | Swift 6.2 concurrency used squarely |
| swift-protocol-di-testing | builder | — | affaan-m/ECC skills/swift-protocol-di-testing | dependency injection tested through Swift protocols |
| swiftui-patterns | builder | — | affaan-m/ECC skills/swiftui-patterns | the patterns SwiftUI is built on |
| taste-application | builder | — | affaan-m/ECC skills/taste-application | taste applied, not just talked about |
| taste-distillation | builder | — | affaan-m/ECC skills/taste-distillation | taste distilled into reusable judgment |
| taste | builder | — | affaan-m/ECC skills/taste | the judgment that knows good when it sees it |
| terminal-opener | builder | — | affaan-m/ECC skills/terminal-opener | the right terminal opened in the right place |
| terminal-ops | builder | — | affaan-m/ECC skills/terminal-ops | terminal sessions operated |
| test-collaboration | builder | — | affaan-m/ECC skills/test-collaboration | tests worked on together, without collision |
| tinystruct-patterns | builder | — | affaan-m/ECC skills/tinystruct-patterns | the patterns Tinystruct is built on |
| token-budget-advisor | aide | — | affaan-m/ECC skills/token-budget-advisor | advises how many tokens a call can afford |
| typescript-patterns | builder | — | affaan-m/ECC skills/typescript-patterns | the patterns TypeScript is built on |
| ui-demo | builder | — | affaan-m/ECC skills/ui-demo | a demo that shows the interface it promises |
| ui-to-vue | builder | — | affaan-m/ECC skills/ui-to-vue | a design carried into Vue components |
| unified-notifications-ops | builder | — | affaan-m/ECC skills/unified-notifications-ops | notifications from many channels, one flow |
| vite-patterns | builder | — | affaan-m/ECC skills/vite-patterns | the patterns Vite builds under |
| vue-patterns | builder | — | affaan-m/ECC skills/vue-patterns | the patterns Vue.js is built on |
| windows-desktop-e2e | builder | — | affaan-m/ECC skills/windows-desktop-e2e | the Windows desktop app tested end to end |
| workspace-surface-audit | reviewer | — | affaan-m/ECC skills/workspace-surface-audit | the workspace's outer surface audited for risks |
| agent-architecture-audit | reviewer | — | affaan-m/ECC skills/agent-architecture-audit | an agent system's architecture checked for risks and gaps |
| autonomous-loops | builder | — | affaan-m/ECC skills/autonomous-loops | loops that let agents run without a person in each step |
| claude-devfleet | builder | — | affaan-m/ECC skills/claude-devfleet | a fleet of Claude coding agents, run together |
| codehealth-mcp | builder | — | affaan-m/ECC skills/codehealth-mcp | code health reported through an MCP server |
| continuous-agent-loop | builder | — | affaan-m/ECC skills/continuous-agent-loop | an agent loop that keeps going |
| continuous-learning-v2 | builder | — | affaan-m/ECC skills/continuous-learning-v2 | the second cut of learning that never stops |
| continuous-learning | builder | — | affaan-m/ECC skills/continuous-learning | a model that keeps learning from new data |
| delivery-gate | builder | — | affaan-m/ECC skills/delivery-gate | release gated on the checks that matter |
| dev-team | builder | — | affaan-m/ECC skills/dev-team | a team of developer agents, organized |
| dynamic-workflow-mode | builder | — | affaan-m/ECC skills/dynamic-workflow-mode | the workflow mode that fits the moment, chosen as it runs |
| eval-harness | builder | — | affaan-m/ECC skills/eval-harness | the harness that evaluates a model |
| ito-baskets | builder | — | affaan-m/ECC skills/ito-baskets | IT operations work, bundled into baskets |
| ito-compute | builder | — | affaan-m/ECC skills/ito-compute | IT operations compute, run well |
| ito-inference | builder | — | affaan-m/ECC skills/ito-inference | IT operations inference, served |
| ito-training | builder | — | affaan-m/ECC skills/ito-training | IT operations models, trained |
| make-interfaces-feel-better | builder | — | affaan-m/ECC skills/make-interfaces-feel-better | interfaces made to feel right, not just look right |
| nanoclaw-repl | builder | — | affaan-m/ECC skills/nanoclaw-repl | the Nanoclaw REPL, at work |
| nasiko-control-plane | builder | — | affaan-m/ECC skills/nasiko-control-plane | the control plane Nasiko runs on |
| openclaw-persona-forge | builder | — | affaan-m/ECC skills/openclaw-persona-forge | personas forged with OpenClaw |
| operator-approval-loop | builder | — | affaan-m/ECC skills/operator-approval-loop | the loop where an operator approves an agent's act |
| orch-add-feature | builder | — | affaan-m/ECC skills/orch-add-feature | the orchestration step that adds a feature |
| orch-build-mvp | builder | — | affaan-m/ECC skills/orch-build-mvp | the orchestration step that builds an MVP |
| orch-change-feature | builder | — | affaan-m/ECC skills/orch-change-feature | the orchestration step that changes a feature |
| orch-fix-defect | builder | — | affaan-m/ECC skills/orch-fix-defect | the orchestration step that fixes a defect |
| orch-pipeline | builder | — | affaan-m/ECC skills/orch-pipeline | the orchestration pipeline, whole |
| orch-refine-code | builder | — | affaan-m/ECC skills/orch-refine-code | the orchestration step that refines code |
| ralphinho-rfc-pipeline | builder | — | affaan-m/ECC skills/ralphinho-rfc-pipeline | RFCs moved through a pipeline |
| skill-comply | reviewer | — | affaan-m/ECC skills/skill-comply | a skill checked against the standard it must meet |
| skill-host-compat | builder | — | affaan-m/ECC skills/skill-host-compat | a skill made to work on different hosts |
| skill-scout | builder | — | affaan-m/ECC skills/skill-scout | new skills found and judged |
| skill-stocktake | builder | — | affaan-m/ECC skills/skill-stocktake | the skills in hand, counted and known |
| team-agent-orchestration | builder | — | affaan-m/ECC skills/team-agent-orchestration | many agents, one piece of work, orchestrated |
| team-builder | builder | — | affaan-m/ECC skills/team-builder | a team of agents built with each role defined |
| token-card | builder | — | affaan-m/ECC skills/token-card | token cards managed for payment |
| uncloud | builder | — | affaan-m/ECC skills/uncloud | cloud resources not in use, found and handled |
| videodb | builder | — | affaan-m/ECC skills/videodb | video data stored and queried |
| x-api | builder | — | affaan-m/ECC skills/x-api | the X API, integrated |
| blender-motion-state-inspection | builder | — | affaan-m/ECC skills/blender-motion-state-inspection | motion state inside Blender inspected and understood |
| gan-style-harness | builder | — | affaan-m/ECC skills/gan-style-harness | a GAN-style model trained and checked inside its harness |
| healthcare-eval-harness | builder | — | affaan-m/ECC skills/healthcare-eval-harness | healthcare models evaluated against the measures that matter |
| accounting-software-selection | aide | — | sickn33/agentic-awesome-skills business/accounting-software-selection | chooses accounting software against the business's needs |
| admin-access-register | builder | — | sickn33/agentic-awesome-skills business/admin-access-register | keeps a register of admin access and who holds it |
| advanced-analytics-dashboard | builder | — | sickn33/agentic-awesome-skills business/advanced-analytics-dashboard | builds advanced analytics dashboards |
| bamboohr-automation | builder | — | sickn33/agentic-awesome-skills business/bamboohr-automation | runs BambooHR tasks through a hosted connector |
| business-website-setup | builder | — | sickn33/agentic-awesome-skills business/business-website-setup | sets up a business website |
| company-email-accounts | builder | — | sickn33/agentic-awesome-skills business/company-email-accounts | runs company email accounts |
| csv-manual-export | builder | — | sickn33/agentic-awesome-skills business/csv-manual-export | builds an empty CSV from a confirmed field list |
| data-export-engine | builder | — | sickn33/agentic-awesome-skills business/data-export-engine | exports data on a schedule or on demand |
| data-privacy-controls | builder | — | sickn33/agentic-awesome-skills business/data-privacy-controls | sets and runs data privacy controls |
| dei-dashboard | builder | — | sickn33/agentic-awesome-skills business/dei-dashboard | tracks diversity, equity and inclusion measures against targets |
| json-schema-manual | builder | — | sickn33/agentic-awesome-skills business/json-schema-manual | builds a validation schema from a confirmed field list |
| notion-manual-import | builder | — | sickn33/agentic-awesome-skills business/notion-manual-import | performs the Notion step of an import with mapping and check |
| pipedrive-automation | builder | — | sickn33/agentic-awesome-skills business/pipedrive-automation | runs Pipedrive tasks through a hosted connector |
| reports-analytics | builder | — | sickn33/agentic-awesome-skills business/reports-analytics | builds reports and analytics |
| zoho-crm-automation | builder | — | sickn33/agentic-awesome-skills business/zoho-crm-automation | runs Zoho CRM tasks through a hosted connector |
| odoo-accounting-setup | builder | — | sickn33/agentic-awesome-skills business/odoo-accounting-setup | sets up Odoo accounting |
| odoo-automated-tests | builder | — | sickn33/agentic-awesome-skills business/odoo-automated-tests | writes automated tests for Odoo |
| odoo-backup-strategy | builder | — | sickn33/agentic-awesome-skills business/odoo-backup-strategy | plans Odoo backups and restores |
| odoo-docker-deployment | builder | — | sickn33/agentic-awesome-skills business/odoo-docker-deployment | deploys Odoo with Docker |
| odoo-ecommerce-configurator | builder | — | sickn33/agentic-awesome-skills business/odoo-ecommerce-configurator | configures Odoo ecommerce |
| odoo-edi-connector | builder | — | sickn33/agentic-awesome-skills business/odoo-edi-connector | builds Odoo EDI connectors |
| odoo-hr-payroll-setup | builder | — | sickn33/agentic-awesome-skills business/odoo-hr-payroll-setup | sets up Odoo HR and payroll |
| odoo-inventory-optimizer | builder | — | sickn33/agentic-awesome-skills business/odoo-inventory-optimizer | optimizes Odoo inventory |
| odoo-l10n-compliance | builder | — | sickn33/agentic-awesome-skills business/odoo-l10n-compliance | holds Odoo localization and compliance |
| odoo-manufacturing-advisor | builder | — | sickn33/agentic-awesome-skills business/odoo-manufacturing-advisor | advises Odoo manufacturing setup |
| odoo-migration-helper | builder | — | sickn33/agentic-awesome-skills business/odoo-migration-helper | helps migrate Odoo |
| odoo-module-developer | builder | — | sickn33/agentic-awesome-skills business/odoo-module-developer | develops Odoo modules |
| odoo-orm-expert | builder | — | sickn33/agentic-awesome-skills business/odoo-orm-expert | works Odoo's ORM |
| odoo-performance-tuner | builder | — | sickn33/agentic-awesome-skills business/odoo-performance-tuner | tunes Odoo performance |
| odoo-project-timesheet | builder | — | sickn33/agentic-awesome-skills business/odoo-project-timesheet | runs Odoo project timesheets |
| odoo-purchase-workflow | builder | — | sickn33/agentic-awesome-skills business/odoo-purchase-workflow | builds Odoo purchase workflows |
| odoo-qweb-templates | builder | — | sickn33/agentic-awesome-skills business/odoo-qweb-templates | writes Odoo QWeb templates |
| odoo-rpc-api | builder | — | sickn33/agentic-awesome-skills business/odoo-rpc-api | works Odoo's RPC API |
| odoo-sales-crm-expert | builder | — | sickn33/agentic-awesome-skills business/odoo-sales-crm-expert | runs Odoo sales and CRM |
| odoo-security-rules | builder | — | sickn33/agentic-awesome-skills business/odoo-security-rules | sets Odoo security rules |
| odoo-shopify-integration | builder | — | sickn33/agentic-awesome-skills business/odoo-shopify-integration | integrates Odoo with Shopify |
| odoo-upgrade-advisor | builder | — | sickn33/agentic-awesome-skills business/odoo-upgrade-advisor | advises Odoo upgrades |
| odoo-woocommerce-bridge | builder | — | sickn33/agentic-awesome-skills business/odoo-woocommerce-bridge | bridges Odoo and WooCommerce |
| odoo-xml-views-builder | builder | — | sickn33/agentic-awesome-skills business/odoo-xml-views-builder | builds Odoo XML views |
| woo-guard | reviewer | — | sickn33/agentic-awesome-skills ecommerce/woo-guard | reviews WooCommerce code and checkout changes |
| anti-sleep | builder | — | sickn33/agentic-awesome-skills operations/anti-sleep | keeps a Mac awake through a long run |
| it-manager-hospital | builder | — | sickn33/agentic-awesome-skills operations/it-manager-hospital | manages IT in a hospital setting |
| itil-expert | aide | — | sickn33/agentic-awesome-skills operations/itil-expert | advises IT service management with ITIL |
| mailtrap-setting-up-sending-domain | builder | — | sickn33/agentic-awesome-skills operations/mailtrap-setting-up-sending-domain | sets up a sending domain with DNS records in Mailtrap |
| pi-custom-model | builder | — | sickn33/agentic-awesome-skills operations/pi-custom-model | registers custom model names so saved variants resolve |
| powershell-windows | builder | — | sickn33/agentic-awesome-skills operations/powershell-windows | writes PowerShell for Windows tasks |
| pre-release-review | reviewer | — | sickn33/agentic-awesome-skills operations/pre-release-review | reviews a release before it ships |
| vps-server-management | builder | — | sickn33/agentic-awesome-skills operations/vps-server-management | manages a VPS server |
| asana-automation | builder | — | sickn33/agentic-awesome-skills project-management/asana-automation | runs Asana tasks through a hosted connector |
| basecamp-automation | builder | — | sickn33/agentic-awesome-skills project-management/basecamp-automation | runs Basecamp tasks through a hosted connector |
| confluence-automation | builder | — | sickn33/agentic-awesome-skills project-management/confluence-automation | runs Confluence pages through a hosted connector |
| freshservice-automation | builder | — | sickn33/agentic-awesome-skills project-management/freshservice-automation | runs Freshservice tickets through a hosted connector |
| github-issue-creator | builder | — | sickn33/agentic-awesome-skills project-management/github-issue-creator | turns rough reports into ready GitHub issues |
| jira-automation | builder | — | sickn33/agentic-awesome-skills project-management/jira-automation | runs Jira work through a hosted connector |
| linear-automation | builder | — | sickn33/agentic-awesome-skills project-management/linear-automation | runs Linear issues through a hosted connector |
| linear-claude-skill | builder | — | sickn33/agentic-awesome-skills project-management/linear-claude-skill | manages Linear issues, projects and teams |
| miro-automation | builder | — | sickn33/agentic-awesome-skills project-management/miro-automation | runs Miro boards through a hosted connector |
| monday-automation | builder | — | sickn33/agentic-awesome-skills project-management/monday-automation | runs Monday boards through a hosted connector |
| todoist-automation | builder | — | sickn33/agentic-awesome-skills project-management/todoist-automation | runs Todoist tasks through a hosted connector |
| trello-automation | builder | — | sickn33/agentic-awesome-skills project-management/trello-automation | runs Trello boards through a hosted connector |
| wrike-automation | builder | — | sickn33/agentic-awesome-skills project-management/wrike-automation | runs Wrike work through a hosted connector |
| shopify-review-triage | reviewer | — | sickn33/agentic-awesome-skills product/shopify-review-triage | triages Shopify reviews for the right next step |
| monopoly/security-checklist | reviewer | — | sickn33/agentic-awesome-skills monopoly/monopoly/security-checklist | reviews an architecture against a security checklist |
| agent-evals | builder | — | sickn33/agentic-awesome-skills | evaluates an agent's work against the measures that matter |
| ai-pipeline-orchestration | builder | — | sickn33/agentic-awesome-skills | orchestrates an AI pipeline end to end |
| alerting-oncall | builder | — | sickn33/agentic-awesome-skills | runs alerting and on-call handling |
| application-performance-performance-optimization | builder | — | sickn33/agentic-awesome-skills | optimizes an application's performance |
| backup-recovery | builder | — | sickn33/agentic-awesome-skills | backs up data and proves restores |
| block-storage | builder | — | sickn33/agentic-awesome-skills | runs block storage |
| blue-green-deploy | builder | — | sickn33/agentic-awesome-skills | deploys with blue-green cutover |
| brendangregg-use-tsa | builder | — | sickn33/agentic-awesome-skills | applies Brendan Gregg's TSA method to a performance problem |
| cdn-setup | builder | — | sickn33/agentic-awesome-skills | sets up a CDN |
| ci-cd-and-automation | builder | — | sickn33/agentic-awesome-skills | builds CI/CD pipelines and automation |
| cloud-penetration-testing | builder | — | sickn33/agentic-awesome-skills | penetration tests a cloud deployment |
| container-registries | builder | — | sickn33/agentic-awesome-skills | runs container registries |
| cost-optimization | builder | — | sickn33/agentic-awesome-skills | finds cost to cut safely |
| deployment-procedures | builder | — | sickn33/agentic-awesome-skills | defines and runs deployment procedures |
| deployment-validation-config-validate | reviewer | — | sickn33/agentic-awesome-skills | validates a deployment's configuration |
| devcontainers-nix | builder | — | sickn33/agentic-awesome-skills | sets up devcontainers with Nix |
| distributed-tracing | builder | — | sickn33/agentic-awesome-skills | traces a request across distributed systems |
| dns-management | builder | — | sickn33/agentic-awesome-skills | runs DNS |
| docker-management | builder | — | sickn33/agentic-awesome-skills | runs Docker hosts and images |
| ebpf-observability | builder | — | sickn33/agentic-awesome-skills | observes a system with eBPF |
| elk-stack | builder | — | sickn33/agentic-awesome-skills | runs the ELK stack for logs |
| feature-flags | builder | — | sickn33/agentic-awesome-skills | manages feature flags |
| frontend-observability | builder | — | sickn33/agentic-awesome-skills | observes frontend behaviour |
| gitops-workflow | builder | — | sickn33/agentic-awesome-skills | runs a GitOps workflow |
| gpu-kubernetes-operations | builder | — | sickn33/agentic-awesome-skills | runs GPU workloads on Kubernetes |
| gpu-server-management | builder | — | sickn33/agentic-awesome-skills | runs GPU servers |
| helm-charts | builder | — | sickn33/agentic-awesome-skills | writes and runs Helm charts |
| hybrid-cloud-networking | builder | — | sickn33/agentic-awesome-skills | runs networking across hybrid cloud |
| identity-access-management | builder | — | sickn33/agentic-awesome-skills | runs identity and access management |
| k8s-manifest-generator | builder | — | sickn33/agentic-awesome-skills | generates Kubernetes manifests |
| k8s-security-policies | builder | — | sickn33/agentic-awesome-skills | sets Kubernetes security policies |
| kubernetes-ops | builder | — | sickn33/agentic-awesome-skills | runs Kubernetes operations |
| linux-administration | builder | — | sickn33/agentic-awesome-skills | administers Linux systems |
| llm-caching | builder | — | sickn33/agentic-awesome-skills | caches LLM calls where they repeat |
| llm-cost-optimization | builder | — | sickn33/agentic-awesome-skills | cuts LLM cost without losing work |
| llm-fine-tuning | builder | — | sickn33/agentic-awesome-skills | fine-tunes an LLM |
| llm-gateway | builder | — | sickn33/agentic-awesome-skills | runs an LLM gateway |
| load-balancing | builder | — | sickn33/agentic-awesome-skills | runs load balancing |
| mdm-device-management | builder | — | sickn33/agentic-awesome-skills | manages devices through MDM |
| model-registry-governance | builder | — | sickn33/agentic-awesome-skills | governs the model registry |
| model-serving-kubernetes | builder | — | sickn33/agentic-awesome-skills | serves models on Kubernetes |
| mongodb | builder | — | sickn33/agentic-awesome-skills | runs MongoDB |
| multi-cloud-architecture | builder | — | sickn33/agentic-awesome-skills | designs architecture across clouds |
| multi-tenant-llm-hosting | builder | — | sickn33/agentic-awesome-skills | hosts LLMs for many tenants |
| mysql | builder | — | sickn33/agentic-awesome-skills | runs MySQL |
| nfs-storage | builder | — | sickn33/agentic-awesome-skills | runs NFS storage |
| object-storage | builder | — | sickn33/agentic-awesome-skills | runs object storage |
| observability-and-instrumentation | builder | — | sickn33/agentic-awesome-skills | instruments and observes systems |
| performance-tuning | builder | — | sickn33/agentic-awesome-skills | tunes performance |
| platform-engineering | builder | — | sickn33/agentic-awesome-skills | builds and runs the internal platform |
| postgresql-devsec | builder | — | sickn33/agentic-awesome-skills | runs PostgreSQL with development security |
| postmortem-writing | builder | — | sickn33/agentic-awesome-skills | writes incident postmortems |
| production-runtime-certification | reviewer | — | sickn33/agentic-awesome-skills | certifies production runtime readiness |
| prometheus-grafana | builder | — | sickn33/agentic-awesome-skills | runs Prometheus and Grafana monitoring |
| rag-infrastructure | builder | — | sickn33/agentic-awesome-skills | runs the RAG infrastructure |
| redis | builder | — | sickn33/agentic-awesome-skills | runs Redis |
| reverse-proxy | builder | — | sickn33/agentic-awesome-skills | runs a reverse proxy |
| saas-security-posture | reviewer | — | sickn33/agentic-awesome-skills | reviews a SaaS security posture |
| semantic-versioning | builder | — | sickn33/agentic-awesome-skills | applies semantic versioning to releases |
| service-mesh | builder | — | sickn33/agentic-awesome-skills | runs a service mesh |
| slo-implementation | builder | — | sickn33/agentic-awesome-skills | implements SLOs |
| sre-dashboards | builder | — | sickn33/agentic-awesome-skills | builds SRE dashboards |
| ssh-configuration | builder | — | sickn33/agentic-awesome-skills | configures SSH |
| startup-it-troubleshooting | builder | — | sickn33/agentic-awesome-skills | troubleshoots IT in a startup |
| systemd-services | builder | — | sickn33/agentic-awesome-skills | runs systemd services |
| terraform-skill | builder | — | sickn33/agentic-awesome-skills | writes and applies Terraform |
| tool-use-guardian | builder | — | sickn33/agentic-awesome-skills | guards tool use |
| user-management | builder | — | sickn33/agentic-awesome-skills | runs user accounts and access |
| vector-database-ops | builder | — | sickn33/agentic-awesome-skills | runs vector databases |
| windows-server | builder | — | sickn33/agentic-awesome-skills | administers Windows Server |
| analytics-tracking | builder | — | sickn33/agentic-awesome-skills | instruments a product and tracks its usage events |
| api-analyzer | reviewer | — | sickn33/agentic-awesome-skills | reviews an API for design, security and consumer fit |
| api-documentation-generator | builder | — | sickn33/agentic-awesome-skills | generates API reference documentation from code or a spec |
| api-integration | builder | — | sickn33/agentic-awesome-skills | integrates an outside API into a product |
| api-onboarding | builder | — | sickn33/agentic-awesome-skills | leads a developer through an API's first integration |
| api-sdk-generator | builder | — | sickn33/agentic-awesome-skills | generates a typed SDK for an API |
| api-security | reviewer | — | sickn33/agentic-awesome-skills | reviews an API for security weaknesses |
| api-testing-observability-api-mock | builder | — | sickn33/agentic-awesome-skills | tests an API with mocks and observes its behaviour |
| appdeploy | builder | — | sickn33/agentic-awesome-skills | deploys an application to its runtime |
| arrowspace | builder | — | sickn33/agentic-awesome-skills | works Apache Arrow's in-memory columnar data and its tools |
| backend-security-coder | builder | — | sickn33/agentic-awesome-skills | writes backend code with security built in |
| data-quality-frameworks | builder | — | sickn33/agentic-awesome-skills | sets up the frameworks that measure and catch bad data |
| database-cloud-optimization-cost-optimize | builder | — | sickn33/agentic-awesome-skills | optimizes a database's cloud spend |
| database-design | builder | — | sickn33/agentic-awesome-skills | designs a database schema from the work it must support |
| database-security | reviewer | — | sickn33/agentic-awesome-skills | reviews a database's access, encryption and configuration for risk |
| dbt-transformation-patterns | builder | — | sickn33/agentic-awesome-skills | the patterns dbt transformations are built and tested under |
| django-access-review | reviewer | — | sickn33/agentic-awesome-skills | reviews who can reach what in a Django app |
| django-perf-review | reviewer | — | sickn33/agentic-awesome-skills | reviews a Django app's performance |
| dotnet-backend | builder | — | sickn33/agentic-awesome-skills | a backend built on .NET's patterns |
| graphql | builder | — | sickn33/agentic-awesome-skills | a GraphQL API designed, built and run |
| lightning-architecture-review | reviewer | — | sickn33/agentic-awesome-skills | reviews a Lightning network's architecture and channel design |
| nft-standards | builder | — | sickn33/agentic-awesome-skills | the token standards NFTs are built and traded under |
| nodejs-backend-patterns | builder | — | sickn33/agentic-awesome-skills | the patterns a Node.js backend is built on |
| nosql-expert | builder | — | sickn33/agentic-awesome-skills | NoSQL databases chosen, modelled and run |
| openapi-spec-generation | builder | — | sickn33/agentic-awesome-skills | generates an OpenAPI specification from a live API |
| payment-integration | builder | — | sickn33/agentic-awesome-skills | integrates payment providers into a product |
| saas-multi-tenant | builder | — | sickn33/agentic-awesome-skills | a SaaS product built for many tenants with isolation and pricing |
| spark-optimization | builder | — | sickn33/agentic-awesome-skills | optimizes Spark jobs and clusters |
| sql-optimization-patterns | builder | — | sickn33/agentic-awesome-skills | the patterns SQL queries are optimized under |
| weather-data-lifecycle-management | builder | — | sickn33/agentic-awesome-skills | manages weather data from ingest through retention |
| weather-data-reproducibility | builder | — | sickn33/agentic-awesome-skills | keeps weather data work reproducible and auditable |
| web3-testing | builder | — | sickn33/agentic-awesome-skills | tests Web3 applications and contracts |
| architect-review | reviewer | — | sickn33/agentic-awesome-skills | a system's architecture reviewed against its requirements and trade-offs |
| cqrs-implementation | builder | — | sickn33/agentic-awesome-skills | reads separated from writes, with commands, queries and their handlers |
| ddd-context-mapping | builder | — | sickn33/agentic-awesome-skills | bounded contexts mapped, with the integration contract between each pair |
| ddd-strategic-design | builder | — | sickn33/agentic-awesome-skills | subdomains, bounded contexts and one ubiquitous language |
| ddd-tactical-patterns | builder | — | sickn33/agentic-awesome-skills | entities, value objects, aggregates, repositories and domain events |
| docs-architect | builder | — | sickn33/agentic-awesome-skills | technical documentation drawn from an existing codebase's architecture and design |
| event-sourcing-architect | builder | — | sickn33/agentic-awesome-skills | event-sourced systems: the event store, projections and replay |
| graphql-architect | builder | — | sickn33/agentic-awesome-skills | GraphQL schemas with federation, performance and enterprise security |
| microservices-patterns | builder | — | sickn33/agentic-awesome-skills | service boundaries, inter-service communication and data ownership |
| nodejs-best-practices | builder | — | sickn33/agentic-awesome-skills | Node.js framework choice, async patterns, security and performance |
| software-architecture | builder | — | sickn33/agentic-awesome-skills | quality-focused architecture decisions taken while code is written |
| billing-automation | builder | — | sickn33/agentic-awesome-skills | recurring billing, invoicing, dunning, proration and plan changes |
| cicd-automation-workflow-automate | builder | — | sickn33/agentic-awesome-skills | CI/CD pipelines and the workflow files that run them |
| prompt-engineer | builder | — | sickn33/agentic-awesome-skills | a rough request turned into a prompt a model follows, by a stated framework |
| andrej-karpathy | builder | — | sickn33/agentic-awesome-skills | behavioural guidelines that cut the common LLM coding mistakes |
| break-ai-fix-loops | builder | — | sickn33/agentic-awesome-skills | ineffective repair loops stopped with failure fingerprints and an attempt budget |
| clean-code | builder | — | sickn33/agentic-awesome-skills | clean-code, SOLID, DRY and KISS applied to changed production code |
| codebase-cleanup-tech-debt | builder | — | sickn33/agentic-awesome-skills | technical debt found in code and history, prioritised into bounded fixes |
| complexity-cuts | builder | — | sickn33/agentic-awesome-skills | Big-O lowered one transformation at a time, each verified or reverted |
| constraint-driven-development | builder | — | sickn33/agentic-awesome-skills | the project's quality bar written as constraints that are enforced |
| doubt-driven-development | builder | — | sickn33/agentic-awesome-skills | every non-trivial decision put to a fresh-context adversarial pass |
| invariant-guard | builder | — | sickn33/agentic-awesome-skills | the contract, loop invariant, termination argument and edge cases written first |
| logic-review | builder | — | sickn33/agentic-awesome-skills | logic bugs found by semi-formal execution tracing of a file or function |
| shellcheck-configuration | builder | — | sickn33/agentic-awesome-skills | ShellCheck configured and used for shell script quality |
| simplify-code | builder | — | sickn33/agentic-awesome-skills | a diff reviewed for clarity and safe simplifications, then the low-risk ones applied |
| ui-review | reviewer | — | sickn33/agentic-awesome-skills | UI code checked against a design system and accessibility practice |
| vibe-code-auditor | reviewer | — | sickn33/agentic-awesome-skills | rapidly generated code audited for structural flaws and production risk |
| phase-gated-debugging | builder | — | sickn33/agentic-awesome-skills | a phased protocol that blocks edits until the root cause is confirmed |
| debugging-strategies | builder | — | sickn33/agentic-awesome-skills | debugging turned from guesswork into a systematic method |
| test-fixing | builder | — | sickn33/agentic-awesome-skills | failing tests grouped and fixed systematically |
| ai-agent-evaluation-benchmarking | builder | — | sickn33/agentic-awesome-skills | agents evaluated on task completion, planning accuracy and tool use |
| ai-agent-tool-routing | builder | — | sickn33/agentic-awesome-skills | an agent's tool registry and router designed and reviewed |
| ai-code-generation-guardrails | builder | — | sickn33/agentic-awesome-skills | AI-written code guarded before merge, from plan checks to isolated behaviour |
| observability-cloud-planning | builder | — | sickn33/agentic-awesome-skills | monitoring scope, SLOs and incident readiness planned together |
| ai-agent-development | builder | — | sickn33/agentic-awesome-skills | autonomous agents and multi-agent orchestration built |
| api-security-testing | builder | — | sickn33/agentic-awesome-skills | API security testing across authentication, authorization and rate limiting |
| bash-scripting | builder | — | sickn33/agentic-awesome-skills | production-ready shell scripts with defensive patterns and error handling |
| kubernetes-deployment | builder | — | sickn33/agentic-awesome-skills | container orchestration, charts and production manifests |
| linux-troubleshooting | builder | — | sickn33/agentic-awesome-skills | Linux performance and system faults diagnosed |
| postgresql-optimization | builder | — | sickn33/agentic-awesome-skills | query tuning, indexing and performance analysis |
| rag-implementation | builder | — | sickn33/agentic-awesome-skills | retrieval-augmented generation, from embedding choice to retrieval |
| react-nextjs-development | builder | — | sickn33/agentic-awesome-skills | React and Next.js apps with the app router and server components |
| terraform-infrastructure | builder | — | sickn33/agentic-awesome-skills | infrastructure as code with reusable modules |
| web-security-testing | builder | — | sickn33/agentic-awesome-skills | web application security testing across the OWASP Top 10 classes |
| dos-verify-done-claims | reviewer | — | sickn33/agentic-awesome-skills | a done claim verified against ground truth before it is accepted |
| pre-ship-gate | reviewer | — | sickn33/agentic-awesome-skills | the silent failure modes checked before a deploy |
| browser-automation | builder | — | sickn33/agentic-awesome-skills | reliable browser checks from observed UI state, semantic locators and bounded waits |
| e2e-testing-patterns | builder | — | sickn33/agentic-awesome-skills | end-to-end suites built fast and maintainable |
| playwright-skill | builder | — | sickn33/agentic-awesome-skills | Playwright browser automation, screenshots and login flows |
| ab-testing | builder | — | sickn33/agentic-awesome-skills | an A/B test or growth experiment planned, designed and implemented |
| agentic-test-audit | reviewer | — | sickn33/agentic-awesome-skills | a test suite audited for mutants, order dependence, flakiness and slowness |
| agentic-verify | builder | — | sickn33/agentic-awesome-skills | a change proved caught by tests, tests written until it is |
| bats-testing-patterns | builder | — | sickn33/agentic-awesome-skills | shell scripts tested with the Bash Automated Testing System |
| k6-load-testing | builder | — | sickn33/agentic-awesome-skills | k6 load scenarios written for API, browser and scaling checks |
| mock-hunter | reviewer | — | sickn33/agentic-awesome-skills | a live page audited for mock data and hardcoded stand-ins |
| pypict-skill | builder | — | sickn33/agentic-awesome-skills | pairwise test cases generated |
| screen-reader-testing | builder | — | sickn33/agentic-awesome-skills | web applications tested with screen readers |
| test-framework-migration-skill | builder | — | sickn33/agentic-awesome-skills | test suites converted between Selenium, Playwright, Puppeteer and Cypress |
| test-guard | reviewer | — | sickn33/agentic-awesome-skills | changed test code reviewed against testing rules before it ships |
| unit-testing-test-generate | builder | — | sickn33/agentic-awesome-skills | unit tests generated across languages with edge cases and coverage in view |
| avoid-ai-writing | builder | — | sickn33/agentic-awesome-skills | prose audited and rewritten for formulaic or vague wording, meaning preserved |
| changelog-entry | builder | — | sickn33/agentic-awesome-skills | a changelog entry in Keep a Changelog form from a commit range or a pull request |
| production-code-audit | reviewer | — | sickn33/agentic-awesome-skills | a scoped codebase audited for evidenced security, correctness and performance issues |
| requirements-writing | builder | — | sickn33/agentic-awesome-skills | verifiable requirements written and reviewed, with traceability |
| reverse-engineer-anything | builder | — | sickn33/agentic-awesome-skills | a shipped app, binary or package investigated and its features traced with evidence |
| unslop-ui | builder | — | sickn33/agentic-awesome-skills | AI-generated interfaces audited and redesigned with a stated visual direction |
| ai-loop | builder | — | sickn33/agentic-awesome-skills | a bounded spec-build-review loop with explicit scope, stop conditions and approval |
| airflow-dag-patterns | builder | — | sickn33/agentic-awesome-skills | Apache Airflow DAGs built with operators, sensors, testing and deployment |
| brainstorming | builder | — | sickn33/agentic-awesome-skills | a vague idea turned into a validated design before creative work starts |
| build | builder | — | sickn33/agentic-awesome-skills | a major feature researched, planned in phases, and progress tracked |
| deprecation-and-migration | builder | — | sickn33/agentic-awesome-skills | old systems and APIs removed, their users migrated |
| executing-plans | builder | — | sickn33/agentic-awesome-skills | a written implementation plan executed with review checkpoints |
| finishing-a-development-branch | builder | — | sickn33/agentic-awesome-skills | completed work decided on: guided through integration |
| git-advanced-workflows | builder | — | sickn33/agentic-awesome-skills | advanced Git technique and history recovery |
| git-hooks-automation | builder | — | sickn33/agentic-awesome-skills | hooks set up with Husky, lint-staged, the pre-commit framework and commitlint |
| lint-and-validate | builder | — | sickn33/agentic-awesome-skills | configured lint and type checks run, real failures told apart from checks that did not run |
| ml-pipeline-workflow | builder | — | sickn33/agentic-awesome-skills | an end-to-end MLOps pipeline from data preparation to deployment |
| repo-maintainer | builder | — | sickn33/agentic-awesome-skills | repository hygiene audited and repaired across artifacts, dependencies, CI, docs and Git state |
| workflow-orchestration-patterns | builder | — | sickn33/agentic-awesome-skills | durable workflow design: Temporal and the patterns around it |
| c-pro | builder | — | sickn33/agentic-awesome-skills | C systems code with explicit memory ownership, pointer bounds and error handling |
| cpp-pro | builder | — | sickn33/agentic-awesome-skills | idiomatic C++ with RAII, smart pointers and the standard library |
| csharp-pro | builder | — | sickn33/agentic-awesome-skills | modern C# with records, pattern matching and async |
| elixir-pro | builder | — | sickn33/agentic-awesome-skills | Elixir with OTP supervision trees and Phoenix LiveView |
| golang-pro | builder | — | sickn33/agentic-awesome-skills | Go with modern concurrency and production-ready structure |
| haskell-pro | builder | — | sickn33/agentic-awesome-skills | Haskell types, pure domain logic and exception-safe concurrency |
| java-pro | builder | — | sickn33/agentic-awesome-skills | Java with virtual threads, pattern matching and Spring Boot |
| javascript-pro | builder | — | sickn33/agentic-awesome-skills | modern JavaScript with async patterns and the event loop |
| julia-pro | builder | — | sickn33/agentic-awesome-skills | Julia with multiple dispatch and performance work |
| php-pro | builder | — | sickn33/agentic-awesome-skills | idiomatic PHP with generators, iterators and SPL structures |
| python-pro | builder | — | sickn33/agentic-awesome-skills | Python with async, typing and production-ready structure |
| ruby-pro | builder | — | sickn33/agentic-awesome-skills | idiomatic Ruby with metaprogramming and Rails patterns |
| rust-pro | builder | — | sickn33/agentic-awesome-skills | Rust with ownership, async patterns and systems work |
| scala-pro | builder | — | sickn33/agentic-awesome-skills | Scala with functional programming and distributed data work |
| typescript-pro | builder | — | sickn33/agentic-awesome-skills | TypeScript with advanced types and strict type safety |
| vscode-extension-guide-en | builder | — | sickn33/agentic-awesome-skills | an editor extension from scaffolding to store publication |
| mcp-tool-developer | builder | — | sickn33/agentic-awesome-skills | MCP servers and tools built from scratch |
| agent-harness-fault-injection | builder | — | sickn33/agentic-awesome-skills | fault injection that proves an agent workflow recovers |
| agents-md | builder | — | sickn33/agentic-awesome-skills | agent instruction files written and audited from repository evidence |
| api-contract-testing | builder | — | sickn33/agentic-awesome-skills | contract tests that hold a provider and its consumers together |
| api-endpoint-builder | builder | — | sickn33/agentic-awesome-skills | REST endpoint scaffolds with validation, authentication and docs |
| api-rate-limit-handler | builder | — | sickn33/agentic-awesome-skills | idempotent throttling, backoff and retry for 429 and transient 5xx |
| async-python-patterns | builder | — | sickn33/agentic-awesome-skills | asyncio and concurrent Python done properly |
| bash-defensive-patterns | builder | — | sickn33/agentic-awesome-skills | shell scripts that fail safely |
| browser-extension-launch | builder | — | sickn33/agentic-awesome-skills | a browser extension built, tested and packaged for a store |
| code-audit | reviewer | — | sickn33/agentic-awesome-skills | security review and static analysis of a source tree |
| code-documentation-code-explain | builder | — | sickn33/agentic-awesome-skills | a difficult piece of code explained in plain words |
| code-documentation-doc-generate | builder | — | sickn33/agentic-awesome-skills | maintainable documentation written from the code |
| code-polish | builder | — | sickn33/agentic-awesome-skills | comments and small untidiness cleaned without changing behaviour |
| code-refactoring-context-restore | builder | — | sickn33/agentic-awesome-skills | interrupted work resumed from a handoff and the checkout |
| code-refactoring-tech-debt | builder | — | sickn33/agentic-awesome-skills | technical debt found, sized and prioritised from real code |
| code-review-and-quality | reviewer | — | sickn33/agentic-awesome-skills | a multi-axis review before a change is merged |
| code-simplification | builder | — | sickn33/agentic-awesome-skills | code made simpler without changing what it does |
| codebase-cleanup-deps-audit | reviewer | — | sickn33/agentic-awesome-skills | dependencies checked for vulnerabilities and licences |
| cross-platform-contract-propagation-audit | reviewer | — | sickn33/agentic-awesome-skills | whether a contract reaches every layer that must carry it |
| debugging-code | builder | — | sickn33/agentic-awesome-skills | live debugging with breakpoints and stepped execution |
| dependency-upgrade | builder | — | sickn33/agentic-awesome-skills | a major dependency upgrade planned and staged |
| devcontainer-setup | builder | — | sickn33/agentic-awesome-skills | a devcontainer with the tooling a project needs |
| diagnosing-bugs | builder | — | sickn33/agentic-awesome-skills | a hard bug or slowdown driven to its cause |
| distribute-skill-to-all-agents | builder | — | sickn33/agentic-awesome-skills | one skill distributed across the agent folders in use |
| dx-optimizer | builder | — | sickn33/agentic-awesome-skills | the tooling and setup a developer works in made better |
| effective-agent-skills | builder | — | sickn33/agentic-awesome-skills | agent skills authored and reviewed with triggers and safety notes |
| electron-development | builder | — | sickn33/agentic-awesome-skills | a desktop app with secure inter-process boundaries |
| environment-setup-guide | builder | — | sickn33/agentic-awesome-skills | a development environment set up and written down |
| error-debugging-error-analysis | builder | — | sickn33/agentic-awesome-skills | errors across a distributed system analysed |
| error-debugging-error-trace | builder | — | sickn33/agentic-awesome-skills | error tracking and monitoring put in place |
| error-debugging-multi-agent-review | reviewer | — | sickn33/agentic-awesome-skills | a diff reviewed from several viewpoints at once |
| error-detective | builder | — | sickn33/agentic-awesome-skills | error patterns and stack traces hunted across logs and code |
| error-handling-patterns | builder | — | sickn33/agentic-awesome-skills | failures handled as part of the design |
| framework-migration-code-migrate | builder | — | sickn33/agentic-awesome-skills | code moved from one framework to another |
| git-commit-message | builder | — | sickn33/agentic-awesome-skills | a commit message in the conventional shape |
| go-concurrency-patterns | builder | — | sickn33/agentic-awesome-skills | goroutines, channels and context used well |
| go-rust-reverse | builder | — | sickn33/agentic-awesome-skills | stripped Go and Rust binaries taken apart |
| graceful-shutdown | builder | — | sickn33/agentic-awesome-skills | servers and workers that drain and release cleanly |
| grpc-golang | builder | — | sickn33/agentic-awesome-skills | gRPC services with streaming, mutual TLS and observability |
| i18n-localization | builder | — | sickn33/agentic-awesome-skills | strings, locales and translations carried through an app |
| implement | builder | — | sickn33/agentic-awesome-skills | a piece of work built from a brief or a set of issues |
| improve-codebase-architecture | builder | — | sickn33/agentic-awesome-skills | places a codebase could be deepened, found and worked through |
| incremental-implementation | builder | — | sickn33/agentic-awesome-skills | a change delivered in small steps that each stand |
| javascript-testing-patterns | builder | — | sickn33/agentic-awesome-skills | JavaScript and TypeScript tests that hold |
| kotlin-coroutines-expert | builder | — | sickn33/agentic-awesome-skills | coroutines and flows with structured concurrency |
| laravel-development-workflow | builder | — | sickn33/agentic-awesome-skills | an existing Laravel app fixed from its cause |
| legacy-modernizer | builder | — | sickn33/agentic-awesome-skills | a legacy codebase modernised a piece at a time |
| linux-shell-scripting | builder | — | sickn33/agentic-awesome-skills | shell scripts for the usual system administration work |
| memory-safety-patterns | builder | — | sickn33/agentic-awesome-skills | ownership and resource rules that keep memory safe |
| monorepo-management | builder | — | sickn33/agentic-awesome-skills | a monorepo that stays cheap to build and change |
| multi-platform-apps-multi-platform | builder | — | sickn33/agentic-awesome-skills | one feature delivered the same on web, mobile and desktop |
| native-data-fetching | builder | — | sickn33/agentic-awesome-skills | network requests and data fetching done properly |
| performance-optimization | builder | — | sickn33/agentic-awesome-skills | an application made faster where it matters |
| performance-profiling | builder | — | sickn33/agentic-awesome-skills | where the time goes, measured before anything changes |
| personal-tool-builder | builder | — | sickn33/agentic-awesome-skills | a small tool built for one's own problem |
| poka-yoke | builder | — | sickn33/agentic-awesome-skills | the wrong action made impossible or self-announcing |
| posix-shell-pro | builder | — | sickn33/agentic-awesome-skills | strict POSIX shell that runs anywhere |
| python-development | builder | — | sickn33/agentic-awesome-skills | a Python application scaffolded and structured |
| python-packaging | builder | — | sickn33/agentic-awesome-skills | a Python package built and distributed |
| python-performance-optimization | builder | — | sickn33/agentic-awesome-skills | Python profiled and made faster |
| python-testing-patterns | builder | — | sickn33/agentic-awesome-skills | pytest suites with fixtures, mocks and test-first work |
| re-create | builder | — | sickn33/agentic-awesome-skills | a rotted module deleted and rewritten whole |
| repo-foundation | builder | — | sickn33/agentic-awesome-skills | features and migrations landed while the user's edits survive |
| resolving-merge-conflicts | builder | — | sickn33/agentic-awesome-skills | an in-progress merge or rebase resolved |
| rust-async-patterns | builder | — | sickn33/agentic-awesome-skills | async Rust with Tokio, errors and concurrency |
| show-the-change | builder | — | sickn33/agentic-awesome-skills | a change explained to people who do not read code |
| skill-check | reviewer | — | sickn33/agentic-awesome-skills | a skill checked against the published skill specification |
| spec-driven-loop | builder | — | sickn33/agentic-awesome-skills | requirements, design and acceptance frozen before a large change |
| swift-concurrency-expert | builder | — | sickn33/agentic-awesome-skills | Swift concurrency isolation and sendability fixed |
| systems-programming-rust-project | builder | — | sickn33/agentic-awesome-skills | a Rust systems project scaffolded and structured |
| tdd | builder | — | sickn33/agentic-awesome-skills | a feature or fix built test first |
| triage | builder | — | sickn33/agentic-awesome-skills | issues and outside pull requests moved through triage |
| unship | builder | — | sickn33/agentic-awesome-skills | UI variants compared in a real app and one kept |
| using-git-worktrees | builder | — | sickn33/agentic-awesome-skills | git worktrees used for parallel work |
| what-could-break | reviewer | — | sickn33/agentic-awesome-skills | what a change breaks outside its own diff, proven before it lands |
| vibe-code-cleanup | builder | — | sickn33/agentic-awesome-skills | a vibe-coded app cleaned and hardened for production |
| fixing-accessibility | builder | — | sickn33/agentic-awesome-skills | software made usable by people with disabilities, held to standards |
| fixing-metadata | builder | — | sickn33/agentic-awesome-skills | metadata made accurate and complete where search and sharing read it |
| web-performance-optimization | builder | — | sickn33/agentic-awesome-skills | a page made faster where it matters |
| frontend-seo | builder | — | sickn33/agentic-awesome-skills | a front end held findable and readable by search engines |
| ui-states | builder | — | sickn33/agentic-awesome-skills | the empty, loading, error and edge states of an interface designed fully |
| design-token-contrast | builder | — | sickn33/agentic-awesome-skills | design tokens checked and fixed for the contrast people need |
| scroll-experience | builder | — | sickn33/agentic-awesome-skills | the page's scrolling made smooth, readable and deliberate |
| landing-page | builder | — | sickn33/agentic-awesome-skills | one page built to convert its one audience |
| chat-widget | builder | — | sickn33/agentic-awesome-skills | a chat interface that streams answers and keeps them readable |
| progressive-web-app | builder | — | sickn33/agentic-awesome-skills | a web app that installs, works offline and re-engages |
| browser-extension-builder | builder | — | sickn33/agentic-awesome-skills | an extension built for a browser and kept working there |
| interactive-portfolio | builder | — | sickn33/agentic-awesome-skills | a portfolio whose motion and interaction show the work |
| frontend-architecture | builder | — | sickn33/agentic-awesome-skills | the structure a front end is built on, so change stays cheap |
| frontend-api-integration-patterns | builder | — | sickn33/agentic-awesome-skills | the interface and its APIs kept in step, retry and cache included |
| frontend-data-contracts | builder | — | sickn33/agentic-awesome-skills | the shape of data agreed between interface and API |
| frontend-optimistic-mutations | builder | — | sickn33/agentic-awesome-skills | an interface that changes first and reconciles with its data |
| fixing-motion-performance | builder | — | sickn33/agentic-awesome-skills | animation made fast enough for the device it runs on |
| improve-animations | builder | — | sickn33/agentic-awesome-skills | animation made more useful, clearer and more controlled |
| mobile-design | builder | — | sickn33/agentic-awesome-skills | the design of a phone interface across screens and sizes |
| mobile-security-coder | builder | — | sickn33/agentic-awesome-skills | a mobile app's data, storage and traffic held secure |
| building-native-ui | builder | — | sickn33/agentic-awesome-skills | the platform's own controls and idioms for a mobile interface |
| add-app-clip | builder | — | sickn33/agentic-awesome-skills | an App Clip or instant piece built so a moment finds it fast |
| ios-flows | builder | — | sickn33/agentic-awesome-skills | the iOS flows a user moves through, from one screen to the next |
| ios-screens | builder | — | sickn33/agentic-awesome-skills | the iOS screens a flow is made of |
| mobile-reverse | builder | — | sickn33/agentic-awesome-skills | a built mobile app read back to its design and intent |
| game-design | builder | — | sickn33/agentic-awesome-skills | the rules, verbs and loops that make a game worth playing |
| game-art | builder | — | sickn33/agentic-awesome-skills | the look of a game, built as usable art |
| game-audio | builder | — | sickn33/agentic-awesome-skills | the sound of a game, built to its design |
| multiplayer | builder | — | sickn33/agentic-awesome-skills | players connected and authorized in a shared game world |
| shader-programming-glsl | builder | — | sickn33/agentic-awesome-skills | GPU-side effects and materials written in GLSL |
| bdistill-knowledge-extraction | builder | — | sickn33/agentic-awesome-skills ai-research/bdistill-knowledge-extraction | pulls a clean set of facts out of a model's replies or a locally run model |
| maintain-codex-wiki | builder | — | sickn33/agentic-awesome-skills knowledge-management/maintain-codex-wiki | runs an engineering wiki where each change is reviewed first and cites its sources |
| faf-wizard | builder | — | sickn33/agentic-awesome-skills productivity/faf-wizard | writes a single context file telling an agent what a project is about |
| json-canvas | builder | — | sickn33/agentic-awesome-skills productivity/json-canvas | draws canvas diagrams saved as plain files |
| kernel-prompt | builder | — | sickn33/agentic-awesome-skills productivity/kernel-prompt | drafts and sharpens an instruction to give a model |
| read-all-adrs | aide | — | sickn33/agentic-awesome-skills productivity/read-all-adrs | goes through every decision record, then sums up where the project stands |
| setup-help | aide | — | sickn33/agentic-awesome-skills productivity/setup-help | guides a person through an install one step at a time |
| usage-engineer | aide | — | sickn33/agentic-awesome-skills productivity/usage-engineer | trims token waste and needless retries from coding-agent sessions |
| entropy-box | builder | — | sickn33/agentic-awesome-skills research/entropy-box | grounds loose requirements for embodied AI into workable workflows |
| agent-self-scheduling | builder | — | sickn33/agentic-awesome-skills | Schedules AI agent runs with cron, loops or external clocks, and keeps autonomous timers from running away. |
| goal-instruction-writer | builder | — | sickn33/agentic-awesome-skills | Previews, drafts, refines and audits durable agent goals, with acceptance evidence, drift controls and proportional checks. |
| agent-creator | builder | — | sickn33/agentic-awesome-skills | Creates custom AI subagents with a proper plugin structure, a generated persona and companion routing skills. |
| computer-use-agents | builder | — | sickn33/agentic-awesome-skills | Builds agents that use a computer as a person does: viewing the screen, moving the cursor and clicking. |
| agent-memory | builder | — | sickn33/agentic-awesome-skills | A hybrid memory system giving AI agents persistent, searchable knowledge. |
| prompt-engineering | builder | — | sickn33/agentic-awesome-skills | Prompt engineering patterns, practices and optimisation techniques, and when each of them applies. |
| tool-design | builder | — | sickn33/agentic-awesome-skills | Builds tools agents can use well, including the reduction patterns that keep a tool set small. |
| llm-structured-output | builder | — | sickn33/agentic-awesome-skills | Gets reliable JSON, enums and typed objects out of a model through response formats, tool use and schema constraints. |
| llm-security | builder | — | sickn33/agentic-awesome-skills | Assesses LLM applications and AI agents for prompt injection, tool abuse and retrieval exposure. |
| llm-app-patterns | builder | — | sickn33/agentic-awesome-skills | Architecture and integration sketches for LLM applications, with explicit retrieval, tool, privacy and verification choices. |
| embedding-strategies | builder | — | sickn33/agentic-awesome-skills | How to choose and tune embedding models for a vector search application. |
| vector-index-tuning | builder | — | sickn33/agentic-awesome-skills | Tunes a vector index for latency, recall and memory, from its parameters to the choice of index. |
| hybrid-search-implementation | builder | — | sickn33/agentic-awesome-skills | Combines vector and keyword search to improve retrieval in a RAG or search system. |
| seek-and-analyze-video | builder | — | sickn33/agentic-awesome-skills | Seeks through and analyses video content, keeping a persistent visual memory of what was seen. |
| audio-transcriber | builder | — | sickn33/agentic-awesome-skills | Turns audio recordings into Markdown documentation with summaries. |
| voice-agents | builder | — | sickn33/agentic-awesome-skills | Builds voice agents in which a person speaks to a system and is answered in kind. |
| ai-wrapper-product | builder | — | sickn33/agentic-awesome-skills | Builds a product that wraps a model's API into one focused tool. |

### 15-2000 Mathematical Science Occupations

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| data-modeling | builder | — | cbrock84/headcount plugins/data-analytics/skills/data-modeling | designs the warehouse and semantic layer with dimensional models and metrics |
| quantitative-analysis | builder | — | cbrock84/headcount plugins/data-analytics/skills/quantitative-analysis | answers a business question with data honestly framed |
| data-storytelling | builder | — | sickn33/agentic-awesome-skills | turns data into a clear story that drives a decision |
| warehouse | builder | — | sickn33/agentic-awesome-skills | runs a data warehouse as the governed source of truth for reporting |
| doc2math | builder | — | sickn33/agentic-awesome-skills science/doc2math | restates a technical document as a precisely worded math problem |
| matematico-tao | reviewer | — | sickn33/agentic-awesome-skills science/matematico-tao | weighs code complexity, dependencies and invariants against the assumptions given |
| mathguard | aide | — | sickn33/agentic-awesome-skills science/mathguard | picks a heavyweight method once a data set grows very large |
| matplotlib | builder | — | sickn33/agentic-awesome-skills science/matplotlib | draws charts and figures from data and results |
| networkx | builder | — | sickn33/agentic-awesome-skills science/networkx | constructs graphs and networks and studies their structure |
| seaborn | builder | — | sickn33/agentic-awesome-skills science/seaborn | makes statistical charts from data |
| statsmodels | builder | — | sickn33/agentic-awesome-skills science/statsmodels | fits statistical models and tests how well they hold |
| sympy | builder | — | sickn33/agentic-awesome-skills science/sympy | works maths out exactly, with symbols instead of rounded numbers |

## 17-0000 Architecture and Engineering Occupations

### 17-1000 Architects, Surveyors, and Cartographers

No source yet.

### 17-2000 Engineers

No source yet.

### 17-3000 Drafters, Engineering Technicians, and Mapping Technicians

No source yet.

## 19-0000 Life, Physical, and Social Science Occupations

### 19-1000 Life Scientists

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| biopython | builder | — | sickn33/agentic-awesome-skills science/biopython | runs calculations on DNA, protein and structure records |
| scanpy | builder | — | sickn33/agentic-awesome-skills science/scanpy | explores RNA readings taken from individual cells |
| scarf-single-cell | builder | — | sickn33/agentic-awesome-skills science/scarf-single-cell | explores single-cell data sets running to a million cells |

### 19-2000 Physical Scientists

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| nexrad-mosaic-construction | builder | — | sickn33/agentic-awesome-skills analysis/nexrad-mosaic-construction | builds a usable weather mosaic from NEXRAD radar data |
| nexrad-radar-visualization | builder | — | sickn33/agentic-awesome-skills analysis/nexrad-radar-visualization | turns NEXRAD radar data into readable visualizations |
| radar-satellite-analysis | builder | — | sickn33/agentic-awesome-skills analysis/radar-satellite-analysis | combines radar and satellite observations into one analysis |
| astropy | builder | — | sickn33/agentic-awesome-skills science/astropy | works with astronomical data and the calculations on it |
| cirq | builder | — | sickn33/agentic-awesome-skills science/cirq | lays out quantum circuits and runs them in simulation |
| qiskit | builder | — | sickn33/agentic-awesome-skills science/qiskit | assembles quantum circuits, adapts them for hardware and simulates them |

### 19-3000 Social Scientists and Related Workers

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| viboscope | reviewer | — | sickn33/agentic-awesome-skills collaboration/viboscope | weighs whether two people would work or get along well together, only with their agreement |
| deep-research-framework | builder | — | sickn33/agentic-awesome-skills research/deep-research-framework | lays out a research report around a question, ranked source tiers and cross-checks |
| dsh-deepread | reviewer | — | sickn33/agentic-awesome-skills research/dsh-deepread | reads a paper, article or book closely, tying each claim to evidence and drawing a map of it |
| efficient-web-research | reviewer | — | sickn33/agentic-awesome-skills research/efficient-web-research | reads web pages economically so research does not use up the context window |
| fact-check-x-complete | reviewer | — | sickn33/agentic-awesome-skills research/fact-check-x-complete | tests a claim against the original sources behind it |
| ii-commons | builder | — | sickn33/agentic-awesome-skills research/ii-commons | runs repeatable searches over scholarly and policy collections |
| last30days | builder | — | sickn33/agentic-awesome-skills research/last30days | collects what people said about a topic over the past month and writes a briefing |
| multi-source-search | builder | — | sickn33/agentic-awesome-skills research/multi-source-search | compares results from several web sources and records them in an evidence table |
| research-prompt | aide | — | sickn33/agentic-awesome-skills research/research-prompt | sharpens a fuzzy research need into one exact brief |
| survey-generator | builder | — | sickn33/agentic-awesome-skills research/survey-generator | writes a survey of a field in which every claim points to a source |

### 19-4000 Life, Physical, and Social Science Technicians

No source yet.

### 19-5000 Occupational Health and Safety Specialists and Technicians

No source yet.

## 21-0000 Community and Social Service Occupations

### 21-1000 Counselors, Social Workers, and Other Community and Social Service Specialists

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| quit-sponsor | aide | — | sickn33/agentic-awesome-skills personal-development/quit-sponsor | stands by a person trying to stop smoking, kindly and only with their agreement |
| satori | aide | — | sickn33/agentic-awesome-skills personal-development/satori | helps a person think a problem through gently, without diagnosing anything |

### 21-2000 Religious Workers

No source yet.

## 23-0000 Legal Occupations

### 23-1000 Lawyers, Judges, and Related Workers

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| chief-legal-and-risk-officer | aide | — | cbrock84/headcount plugins/legal-risk/skills/chief-legal-and-risk-officer | owns legal, contracts, IP, compliance, privacy, security governance and audit readiness |
| contract-review | reviewer | — | cbrock84/headcount plugins/legal-risk/skills/contract-review | reviews and negotiates commercial agreements to flag and fix material risk |
| corporate-governance | builder | — | cbrock84/headcount plugins/legal-risk/skills/corporate-governance | keeps entity records, board support, resolutions and delegations in order |
| disputes-and-legal-holds | builder | — | cbrock84/headcount plugins/legal-risk/skills/disputes-and-legal-holds | handles a dispute from first signs: sees when holds apply and scopes them |
| enterprise-risk | reviewer | — | cbrock84/headcount plugins/legal-risk/skills/enterprise-risk | scores and tracks risk on a register with owners and treatments |
| intellectual-property | reviewer | — | cbrock84/headcount plugins/legal-risk/skills/intellectual-property | checks what the org owns and borrows: marks, copyright, patents, secrets |
| privacy-and-data-protection | reviewer | — | cbrock84/headcount plugins/legal-risk/skills/privacy-and-data-protection | assesses how personal data is collected, used, shared and kept |
| regulatory-compliance | reviewer | — | cbrock84/headcount plugins/legal-risk/skills/regulatory-compliance | maps the rules that apply and keeps controls and monitoring inside them |
| advogado-especialista | aide | — | sickn33/agentic-awesome-skills legal/advogado-especialista | supports Brazilian legal research and drafting |
| employment-contract-templates | builder | — | sickn33/agentic-awesome-skills legal/employment-contract-templates | drafts employment contract templates |
| event-staffing-compliance | reviewer | — | sickn33/agentic-awesome-skills legal/event-staffing-compliance | checks event staffing against legal rules |
| fda-food-safety-auditor | reviewer | — | sickn33/agentic-awesome-skills legal/fda-food-safety-auditor | audits food safety records against FDA rules |
| fda-medtech-compliance-auditor | reviewer | — | sickn33/agentic-awesome-skills legal/fda-medtech-compliance-auditor | audits medical device records against FDA rules |
| legal-advisor | aide | — | sickn33/agentic-awesome-skills legal/legal-advisor | gives legal advice and drafts documents |
| lex | aide | — | sickn33/agentic-awesome-skills legal/lex | cross-jurisdiction research aid and contract scaffolding |
| leiloeiro-edital | reviewer | — | sickn33/agentic-awesome-skills leiloeiro/leiloeiro-edital | audits an auction notice for hidden risks and clauses |
| leiloeiro-juridico | aide | — | sickn33/agentic-awesome-skills leiloeiro/leiloeiro-juridico | legal analysis of an auction's grounds |

### 23-2000 Legal Support Workers

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| check-identity-pack | reviewer | — | sickn33/agentic-awesome-skills document-verification/check-identity-pack | checks an identity pack against the required documents |
| detect-ai-text | reviewer | — | sickn33/agentic-awesome-skills document-verification/detect-ai-text | detects likely AI-written text in a document |
| extract-document-data | builder | — | sickn33/agentic-awesome-skills document-verification/extract-document-data | pulls data out of documents into a clean structure |
| find-matching-tenders | builder | — | sickn33/agentic-awesome-skills document-verification/find-matching-tenders | finds tenders that match a profile or brief |
| screen-adverse-media | reviewer | — | sickn33/agentic-awesome-skills document-verification/screen-adverse-media | screens adverse media on a person or company |
| verify-citations | reviewer | — | sickn33/agentic-awesome-skills document-verification/verify-citations | checks citations support each claim they carry |
| verify-document | reviewer | — | sickn33/agentic-awesome-skills document-verification/verify-document | checks a document against the standard it must meet |

## 25-0000 Educational Instruction and Library Occupations

### 25-1000 Postsecondary Teachers

No source yet.

### 25-2000 Preschool, Elementary, Middle, Secondary, and Special Education Teachers

No source yet.

### 25-3000 Other Teachers and Instructors

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| examprep-ai | builder | — | sickn33/agentic-awesome-skills education/examprep-ai | builds a ranked revision plan from a syllabus or old exam papers |
| learn | aide | — | sickn33/agentic-awesome-skills education/learn | teaches a topic step by step, with exercises and understanding checks |
| lesson-generator | builder | — | sickn33/agentic-awesome-skills education/lesson-generator | creates a short course of several lessons, each with goals and a quiz |
| puzzle-activity-planner | builder | — | sickn33/agentic-awesome-skills education/puzzle-activity-planner | arranges puzzle-based activities for a classroom or an event |

### 25-4000 Librarians, Curators, and Archivists

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| wiki-builder | builder | — | sickn33/agentic-awesome-skills knowledge-management/wiki-builder | sets up a research wiki with a clear structure and a source for each page |
| compile-knowledge | builder | — | sickn33/agentic-awesome-skills productivity/compile-knowledge | gathers lasting findings into a store of notes that link to one another |
| obsidian-markdown | builder | — | sickn33/agentic-awesome-skills productivity/obsidian-markdown | writes notes using links, callout boxes and property fields |
| obsidian-bases | builder | — | sickn33/agentic-awesome-skills productivity/obsidian-bases | sets up table-style views across notes, kept as plain files |
| unpaid-intern | builder | — | sickn33/agentic-awesome-skills productivity/unpaid-intern | feeds transcripts, documents and tickets into a second brain the user owns |

### 25-9000 Other Educational Instruction and Library Occupations

No source yet.

## 27-0000 Arts, Design, Entertainment, Sports, and Media Occupations

### 27-1000 Art and Design Workers

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |

| isometric-figure | builder | — | wheresryan22/anatomy SKILL.md and references/ | explaining a thing as an isometric figure: what to draw, what to leave out, the kit's conventions |
| frontend-design-direction | aide | — | affaan-m/ECC skills/frontend-design-direction | the visual direction of a front end, set and held |
| frontend-slides | builder | — | affaan-m/ECC skills/frontend-slides | slides that present front-end work |
| liquid-glass-design | builder | — | affaan-m/ECC skills/liquid-glass-design | the liquid-glass look applied to interface design |
| motion-advanced | builder | — | affaan-m/ECC skills/motion-advanced | the hard parts of motion, mastered |
| motion-foundations | builder | — | affaan-m/ECC skills/motion-foundations | motion's basics, solid |
| motion-patterns | builder | — | affaan-m/ECC skills/motion-patterns | the patterns motion repeats |
| brand-kit-print-collateral | builder | — | sickn33/agentic-awesome-skills business/brand-kit-print-collateral | designs brand print collateral from the brand kit |
| design-theme-guide | builder | — | sickn33/agentic-awesome-skills business/design-theme-guide | writes a visual design theme guide |
| logo-image-design | builder | — | sickn33/agentic-awesome-skills business/logo-image-design | designs logos and image assets |
| presentation-deck | builder | — | sickn33/agentic-awesome-skills business/presentation-deck | builds presentation decks to a visual standard |
| product-design | builder | — | sickn33/agentic-awesome-skills business/product-design | designs product visuals, user flows and accessibility |
| product-inventor | builder | — | sickn33/agentic-awesome-skills business/product-inventor | invents a product across thinking and interface craft |
| product-design-harness | builder | — | sickn33/agentic-awesome-skills product/product-design-harness | harnesses product design work end to end |
| 3d-web-experience | builder | — | sickn33/agentic-awesome-skills | building and debugging web 3D scenes with Three.js and React Three Fiber |
| accessibility-compliance-accessibility-audit | reviewer | — | sickn33/agentic-awesome-skills | reviewer |
| algorithmic-art | builder | — | sickn33/agentic-awesome-skills | computational aesthetic work expressed through code |
| better-colors | builder | — | sickn33/agentic-awesome-skills | building and checking colour systems, palettes and semantic tokens |
| better-layout | builder | — | sickn33/agentic-awesome-skills | grouping, alignment, reading order and responsive structure |
| better-typography | builder | — | sickn33/agentic-awesome-skills | type scale, spacing, font features, wrapping and truncation |
| better-writing | builder | — | sickn33/agentic-awesome-skills | writing and reviewing interface copy |
| build-design | builder | — | sickn33/agentic-awesome-skills | building UI from a design file or image so it matches the design |
| design-philosophy | builder | — | sickn33/agentic-awesome-skills | visual philosophy and art direction for frontend work |
| deterministic-design | reviewer | — | sickn33/agentic-awesome-skills | reviewer |
| diagram-generator | builder | — | sickn33/agentic-awesome-skills | generating, validating and rendering diagrams from language, notes or schemas |
| interface-review | reviewer | — | sickn33/agentic-awesome-skills | reviewer |
| teardown | builder | — | sickn33/agentic-awesome-skills | technical illustrations of physical objects and how they work |
| ui-visual-validator | reviewer | — | sickn33/agentic-awesome-skills | reviewer |
| ux-audit | reviewer | — | sickn33/agentic-awesome-skills | reviewer |
| ux-flow | builder | — | sickn33/agentic-awesome-skills | designing user flows and navigation structure |
| ad-creative | builder | — | sickn33/agentic-awesome-skills marketing/ad-creative | writes and designs ad creatives for campaigns |
| post | builder | — | sickn33/agentic-awesome-skills marketing/post | writes and designs a social post or image |
| screenshots | builder | — | sickn33/agentic-awesome-skills seo utility/screenshots | captures and prepares screenshots for search and social |
| pptx-deck-creation | builder | — | sickn33/agentic-awesome-skills office-productivity/pptx-deck-creation | makes a slide deck that stays fully editable afterwards |

### 27-2000 Entertainers and Performers, Sports and Related Workers

No source yet.

### 27-3000 Media and Communication Workers

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| content-engine | builder | — | affaan-m/ECC skills/content-engine | the engine that turns a source into content |
| article-writing | builder | — | affaan-m/ECC skills/article-writing | an article written from its sources, ready to publish |
| crosspost | builder | — | affaan-m/ECC skills/crosspost | one piece posted across the channels |
| manim-video | builder | — | affaan-m/ECC skills/manim-video | math explained as a Manim video |
| remotion-video-creation | builder | — | affaan-m/ECC skills/remotion-video-creation | a video built with Remotion, frame by frame |
| social-publisher | builder | — | affaan-m/ECC skills/social-publisher | social posts written and published |
| tasteforge-video | builder | — | affaan-m/ECC skills/tasteforge-video | video made with TasteForge's tooling |
| video-editing | builder | — | affaan-m/ECC skills/video-editing | raw footage cut into a finished video |
| visa-doc-translate | builder | — | affaan-m/ECC skills/visa-doc-translate | visa documents translated for submission |
| beautiful-prose | builder | — | sickn33/agentic-awesome-skills | a writing style contract for forceful English prose without AI tics |
| bluebook-writing | builder | — | sickn33/agentic-awesome-skills | writing design-reading books and articles in plain language |
| changelog-updates | builder | — | sickn33/agentic-awesome-skills | release notes and product updates developers read |
| citation-management | builder | — | sickn33/agentic-awesome-skills | managing citations through the research and writing process |
| devrel-content | builder | — | sickn33/agentic-awesome-skills | technical content for developers: posts, tutorials and documents |
| docs-generator | builder | — | sickn33/agentic-awesome-skills | generating technical deliverables from completed analysis |
| docs-guard | reviewer | — | sickn33/agentic-awesome-skills | reviewer |
| documentation-and-adrs | builder | — | sickn33/agentic-awesome-skills | recording decisions and writing documentation |
| emotional-arc-designer | builder | — | sickn33/agentic-awesome-skills | mapping the emotional progression of a narrative or campaign |
| humanize-chinese | builder | — | sickn33/agentic-awesome-skills | detecting and rewriting AI-like Chinese text |
| internal-comms | builder | — | sickn33/agentic-awesome-skills | status reports, leadership updates, newsletters and FAQs |
| professional-proofreader | reviewer | — | sickn33/agentic-awesome-skills | reviewer |
| readme | builder | — | sickn33/agentic-awesome-skills | writing an accurate project README |
| scientific-writing | builder | — | sickn33/agentic-awesome-skills | drafting and revising scientific manuscripts |
| search-specialist | builder | — | sickn33/agentic-awesome-skills | focused web research with primary-source verification |
| story-bible-continuity | reviewer | — | sickn33/agentic-awesome-skills | reviewer |
| technical-tutorials | builder | — | sickn33/agentic-awesome-skills | step-by-step technical tutorials and code walkthroughs |
| video-router | builder | — | sickn33/agentic-awesome-skills | routing a video-production brief to generation, composition, editing or a supplied-footage cut |
| wiki-architect | builder | — | sickn33/agentic-awesome-skills | structured wiki catalogues and onboarding guides from a codebase |
| ai-blog-intro-writer | builder | — | sickn33/agentic-awesome-skills content seo/ai-blog-intro-writer | writes an opening paragraph for a blog post |
| ai-competitor-title-rewriter | builder | — | sickn33/agentic-awesome-skills content seo/ai-competitor-title-rewriter | rewrites your title using competitor titles as reference |
| ai-content-improver | builder | — | sickn33/agentic-awesome-skills content seo/ai-content-improver | improves existing content for search and reader |
| ai-content-outline-generator | builder | — | sickn33/agentic-awesome-skills content seo/ai-content-outline-generator | builds an outline before writing |
| ai-faq-creator | builder | — | sickn33/agentic-awesome-skills content seo/ai-faq-creator | writes FAQs from content and search questions |
| alternatives-pages | builder | — | sickn33/agentic-awesome-skills content seo/alternatives-pages | writes comparison and alternatives pages |
| blog-title-generator | builder | — | sickn33/agentic-awesome-skills content seo/blog-title-generator | invents blog titles around keywords |
| comment-to-dm-cta | builder | — | sickn33/agentic-awesome-skills marketing/comment-to-dm-cta | turns commenters into direct-message leads |
| content-creator | builder | — | sickn33/agentic-awesome-skills marketing/content-creator | creates content from brief to finished piece |
| copy-editing | builder | — | sickn33/agentic-awesome-skills marketing/copy-editing | edits copy for clarity, grammar and style |
| developer-newsletter | builder | — | sickn33/agentic-awesome-skills marketing/developer-newsletter | writes newsletters for developers |
| docs-as-marketing | builder | — | sickn33/agentic-awesome-skills marketing/docs-as-marketing | turns docs into marketing content that converts |
| draft-my-comments | builder | — | sickn33/agentic-awesome-skills marketing/draft-my-comments | drafts social media comments in the writer's voice |
| email-sequence | builder | — | sickn33/agentic-awesome-skills marketing/email-sequence | writes a sequence of marketing emails |
| get-seen-in-replies | builder | — | sickn33/agentic-awesome-skills marketing/get-seen-in-replies | writes replies that raise visibility |
| headline-analyzer | reviewer | — | sickn33/agentic-awesome-skills content seo/headline-analyzer | judges headlines for promise, clarity and click |
| linkedin-content-generator | builder | — | sickn33/agentic-awesome-skills marketing/linkedin-content-generator | writes LinkedIn posts and articles |
| linkedin-profile-optimizer | builder | — | sickn33/agentic-awesome-skills marketing/linkedin-profile-optimizer | improves a LinkedIn profile for search and visitors |
| meta-description-writer | builder | — | sickn33/agentic-awesome-skills on-page optimization/meta-description-writer | writes meta descriptions under search length limits |
| paragraph-keyword-optimizer | builder | — | sickn33/agentic-awesome-skills on-page optimization/paragraph-keyword-optimizer | rewrites paragraphs to include keywords naturally |
| postel-writing | builder | — | sickn33/agentic-awesome-skills marketing/postel-writing | writes in the Postel style, plain and precise |
| product-description-generator | builder | — | sickn33/agentic-awesome-skills content seo/product-description-generator | writes product descriptions for search and buyers |
| readability-enhancer | builder | — | sickn33/agentic-awesome-skills content seo/readability-enhancer | rewrites content to be easier to read |
| repurpose-into-a-post | builder | — | sickn33/agentic-awesome-skills marketing/repurpose-into-a-post | turns one piece into a social post |
| review-response-generator | builder | — | sickn33/agentic-awesome-skills marketing/review-response-generator | writes replies to reviews |
| same-idea-both-platforms | builder | — | sickn33/agentic-awesome-skills marketing/same-idea-both-platforms | adapts one idea for two platforms without duplicate feel |
| seo-aeo-landing-page-writer | builder | — | sickn33/agentic-awesome-skills content seo/seo-aeo-landing-page-writer | writes landing pages aimed at search and AI engines |
| subject-line-psychologist | builder | — | sickn33/agentic-awesome-skills marketing/subject-line-psychologist | writes subject lines that get opens |
| tone-of-voice-analyzer | aide | — | sickn33/agentic-awesome-skills marketing/tone-of-voice-analyzer | finds and documents a brand's tone of voice |
| turn-this-into-a-thread | builder | — | sickn33/agentic-awesome-skills marketing/turn-this-into-a-thread | turns a piece into a social thread |
| wechat-official-account-strategist | aide | — | sickn33/agentic-awesome-skills marketing/wechat-official-account-strategist | plans content for a WeChat official account |
| why-did-this-post-flop | reviewer | — | sickn33/agentic-awesome-skills marketing/why-did-this-post-flop | reads a failed post and finds likely causes |
| write-in-my-voice | builder | — | sickn33/agentic-awesome-skills marketing/write-in-my-voice | writes like the person by learning their voice |
| xiaohongshu-content-strategist | aide | — | sickn33/agentic-awesome-skills marketing/xiaohongshu-content-strategist | plans content for Xiaohongshu |
| doc-coauthoring | builder | — | sickn33/agentic-awesome-skills document-processing/doc-coauthoring | works alongside a person to draft a document, step by step |
| latex-paper-conversion | builder | — | sickn33/agentic-awesome-skills document-processing/latex-paper-conversion | turns a LaTeX paper into some other document format |
| i-have-adhd | builder | — | sickn33/agentic-awesome-skills productivity/i-have-adhd | shapes text for readers with ADHD: the next action first, in small steps |
| mdpr-skill | reviewer | — | sickn33/agentic-awesome-skills productivity/mdpr-skill | proofreads a Markdown slide deck before it is shared |
| news-sentiment-engine | builder | — | sickn33/agentic-awesome-skills research/news-sentiment-engine | sums up current news on a subject and the mood of the coverage |

### 27-4000 Media and Communication Equipment Workers

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| edit-video | builder | — | browser-use/video-use SKILL.md | the editor's craft: which take, where to cut, filler and pacing, the grade, subtitle style, fades at cuts; the plan proposed before any cut |

## 29-0000 Healthcare Practitioners and Technical Occupations

### 29-1000 Healthcare Diagnosing or Treating Practitioners

No source yet.

### 29-2000 Health Technologists and Technicians

No source yet.

### 29-9000 Other Healthcare Practitioners and Technical Occupations

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| emergency-card | builder | — | sickn33/agentic-awesome-skills health/emergency-card | makes a wallet card listing allergies, medications and conditions for emergencies |
| family-health-analyzer | reviewer | — | sickn33/agentic-awesome-skills health/family-health-analyzer | goes through a family's medical history and flags what a doctor should look at |
| fitness-analyzer | reviewer | — | sickn33/agentic-awesome-skills health/fitness-analyzer | reads exercise history and says how training is going, with advice |
| food-database-query | aide | — | sickn33/agentic-awesome-skills health/food-database-query | finds the nutrients and contents of a given food |
| goal-analyzer | reviewer | — | sickn33/agentic-awesome-skills health/goal-analyzer | checks how health goals are advancing and suggests what to do next |
| health-trend-analyzer | reviewer | — | sickn33/agentic-awesome-skills health/health-trend-analyzer | follows health measurements across time and points out changes that matter |
| mental-health-analyzer | reviewer | — | sickn33/agentic-awesome-skills health/mental-health-analyzer | looks through mental-health logs for patterns and ways to support the person |
| nutrition-analyzer | reviewer | — | sickn33/agentic-awesome-skills health/nutrition-analyzer | goes over food and nutrient logs and says what to adjust |
| occupational-health-analyzer | reviewer | — | sickn33/agentic-awesome-skills health/occupational-health-analyzer | goes over health records tied to a job and spots the hazards |
| oral-health-analyzer | reviewer | — | sickn33/agentic-awesome-skills health/oral-health-analyzer | goes over dental history and picks out recurring patterns |
| rehabilitation-analyzer | reviewer | — | sickn33/agentic-awesome-skills health/rehabilitation-analyzer | goes over recovery records and tracks how far the person has come |
| sexual-health-analyzer | reviewer | — | sickn33/agentic-awesome-skills health/sexual-health-analyzer | goes over sexual-health history and picks out recurring patterns |
| skin-health-analyzer | reviewer | — | sickn33/agentic-awesome-skills health/skin-health-analyzer | goes over skin records and picks out recurring patterns |
| sleep-analyzer | reviewer | — | sickn33/agentic-awesome-skills health/sleep-analyzer | goes over sleep logs for quality and suggests changes |
| tcm-constitution-analyzer | reviewer | — | sickn33/agentic-awesome-skills health/tcm-constitution-analyzer | judges a person's traditional-medicine body type and offers daily-life tips |
| travel-health-analyzer | reviewer | — | sickn33/agentic-awesome-skills health/travel-health-analyzer | assesses the health dangers of a destination and what to pack or arrange |
| weightloss-analyzer | reviewer | — | sickn33/agentic-awesome-skills health/weightloss-analyzer | goes over weight logs for the pace of loss and the balance of energy |

## 31-0000 Healthcare Support Occupations

### 31-1100 Home Health and Personal Care Aides; and Nursing Assistants, Orderlies, and Psychiatric Aides

No source yet.

### 31-2000 Occupational Therapy and Physical Therapist Assistants and Aides

No source yet.

### 31-9000 Other Healthcare Support Occupations

No source yet.

## 33-0000 Protective Service Occupations

### 33-1000 Supervisors of Protective Service Workers

No source yet.

### 33-2000 Firefighting and Prevention Workers

No source yet.

### 33-3000 Law Enforcement Workers

No source yet.

### 33-9000 Other Protective Service Workers

No source yet.

## 35-0000 Food Preparation and Serving Related Occupations

### 35-1000 Supervisors of Food Preparation and Serving Workers

No source yet.

### 35-2000 Cooks and Food Preparation Workers

No source yet.

### 35-3000 Food and Beverage Serving Workers

No source yet.

### 35-9000 Other Food Preparation and Serving Related Workers

No source yet.

## 37-0000 Building and Grounds Cleaning and Maintenance Occupations

### 37-1000 Supervisors of Building and Grounds Cleaning and Maintenance Workers

No source yet.

### 37-2000 Building Cleaning and Pest Control Workers

No source yet.

### 37-3000 Grounds Maintenance Workers

No source yet.

## 39-0000 Personal Care and Service Occupations

### 39-1000 Supervisors of Personal Care and Service Workers

No source yet.

### 39-2000 Animal Care and Service Workers

No source yet.

### 39-3000 Entertainment Attendants and Related Workers

No source yet.

### 39-4000 Funeral Service Workers

No source yet.

### 39-5000 Personal Appearance Workers

No source yet.

### 39-6000 Baggage Porters, Bellhops, and Concierges

No source yet.

### 39-7000 Tour and Travel Guides

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| travel-planner | builder | — | sickn33/agentic-awesome-skills travel/travel-planner | lays out a trip one day at a time, with costs and reservations worked in |

### 39-9000 Other Personal Care and Service Workers

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| party-planning | builder | — | sickn33/agentic-awesome-skills lifestyle/party-planning | organises a gathering: what to serve, which games to play and when things happen |

## 41-0000 Sales and Related Occupations

### 41-1000 Supervisors of Sales Workers

No source yet.

### 41-2000 Retail Sales Workers

No source yet.

### 41-3000 Sales Representatives, Services

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| activation | builder | — | cbrock84/headcount plugins/revenue/skills/activation | gets new users from signup to their first real value |
| chief-revenue-officer | aide | — | cbrock84/headcount plugins/revenue/skills/chief-revenue-officer | owns the revenue engine end to end: sales, pricing, success, retention |
| deal-negotiation | builder | — | cbrock84/headcount plugins/revenue/skills/deal-negotiation | negotiates a deal without giving away the terms that matter |
| outbound-prospecting | builder | — | cbrock84/headcount plugins/revenue/skills/outbound-prospecting | finds and qualifies prospects through cold, multi-channel outreach |
| pricing-and-packaging | builder | — | cbrock84/headcount plugins/revenue/skills/pricing-and-packaging | sets price, packages and tiers with upgrade paths and paywalls |
| referral-programs | builder | — | cbrock84/headcount plugins/revenue/skills/referral-programs | designs referral and affiliate programs with incentives and fraud control |
| retention | builder | — | cbrock84/headcount plugins/revenue/skills/retention | diagnoses and reduces churn across cancellation, recovery and at-risk detection |
| revenue-operations | builder | — | cbrock84/headcount plugins/revenue/skills/revenue-operations | runs lead routing, CRM hygiene and forecasting mechanics |
| sales-compensation-and-territory | builder | — | cbrock84/headcount plugins/revenue/skills/sales-compensation-and-territory | designs quotas, territories and commission plans that drive the behavior needed |
| sales-enablement | builder | — | cbrock84/headcount plugins/revenue/skills/sales-enablement | builds pitch decks, battlecards, objections and demo scripts for sales |
| cold-email | builder | — | sickn33/agentic-awesome-skills marketing/cold-email | writes cold outreach emails that get replies |
| daily-gift | builder | — | sickn33/agentic-awesome-skills productivity/daily-gift | suggests a present suited to who it is for and what is being celebrated |

### 41-4000 Sales Representatives, Wholesale and Manufacturing

No source yet.

### 41-9000 Other Sales and Related Workers

No source yet.

## 43-0000 Office and Administrative Support Occupations

### 43-1000 Supervisors of Office and Administrative Support Workers

No source yet.

### 43-2000 Communications Equipment Operators

No source yet.

### 43-3000 Financial Clerks

No source yet.

### 43-4000 Information and Record Clerks

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| chief-customer-officer | aide | — | cbrock84/headcount plugins/customer-experience/skills/chief-customer-officer | owns the customer's experience after the sale and the feedback loop into product |
| customer-onboarding-and-implementation | builder | — | cbrock84/headcount plugins/customer-experience/skills/customer-onboarding-and-implementation | takes a new customer from signature to working against an agreed definition of live |
| customer-success-management | builder | — | cbrock84/headcount plugins/customer-experience/skills/customer-success-management | runs ongoing accounts with coverage, health scores and renewal risk |
| escalation-management | builder | — | cbrock84/headcount plugins/customer-experience/skills/escalation-management | handles exceeded situations with severity, incident talk and recovery |
| self-service-and-knowledge | builder | — | cbrock84/headcount plugins/customer-experience/skills/self-service-and-knowledge | builds help center, in-product guidance and knowledge base |
| support-operations | builder | — | cbrock84/headcount plugins/customer-experience/skills/support-operations | designs and runs support with channels, queues, levels and honest metrics |
| voice-of-customer | builder | — | cbrock84/headcount plugins/customer-experience/skills/voice-of-customer | builds the loop from what customers say to what gets changed |
| backlink-tracking-template-generator | builder | — | sickn33/agentic-awesome-skills backlink & link-building/backlink-tracking-template-generator | makes a template for tracking backlinks and their status |
| local-seo-audit-checklist | builder | — | sickn33/agentic-awesome-skills local seo/local-seo-audit-checklist | makes a checklist for auditing local SEO |
| seo-checklist-generator | builder | — | sickn33/agentic-awesome-skills seo utility/seo-checklist-generator | makes an SEO checklist from a site's needs |
| file-organizer | builder | — | sickn33/agentic-awesome-skills productivity/file-organizer | suggests a tidier layout for a folder and hunts down duplicate files |
| project-memory-log | builder | — | sickn33/agentic-awesome-skills productivity/project-memory-log | maintains a single log and a single index for a project that runs for a long time |
| time-ledger | builder | — | sickn33/agentic-awesome-skills productivity/time-ledger | converts a person's account of their day into entries in a time record |

### 43-5000 Material Recording, Scheduling, Dispatching, and Distributing Workers

No source yet.

### 43-6000 Secretaries and Administrative Assistants

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| libreoffice/writer | builder | — | sickn33/agentic-awesome-skills document-processing/libreoffice/writer | creates word-processor documents, converts their format and runs mail merges |
| pdf-conversion-router | builder | — | sickn33/agentic-awesome-skills document-processing/pdf-conversion-router | sends a PDF down the right path to come out as Markdown, text, HTML or a document |
| meeting-notes | builder | — | sickn33/agentic-awesome-skills productivity/meeting-notes | shapes rough meeting jottings into minutes that list decisions and follow-ups |
| libreoffice/calc | builder | — | sickn33/agentic-awesome-skills spreadsheet-processing/libreoffice/calc | creates spreadsheets with formulas and handles unit or format conversions |

### 43-9000 Other Office and Administrative Support Workers

No source yet.

## 45-0000 Farming, Fishing, and Forestry Occupations

### 45-1000 Supervisors of Farming, Fishing, and Forestry Workers

No source yet.

### 45-2000 Agricultural Workers

No source yet.

### 45-3000 Fishing and Hunting Workers

No source yet.

### 45-4000 Forest, Conservation, and Logging Workers

No source yet.

## 47-0000 Construction and Extraction Occupations

### 47-1000 Supervisors of Construction and Extraction Workers

No source yet.

### 47-2000 Construction Trades Workers

No source yet.

### 47-3000 Helpers, Construction Trades

No source yet.

### 47-4000 Other Construction and Related Workers

No source yet.

### 47-5000 Extraction Workers

No source yet.

## 49-0000 Installation, Maintenance, and Repair Occupations

### 49-1000 Supervisors of Installation, Maintenance, and Repair Workers

No source yet.

### 49-2000 Electrical and Electronic Equipment Mechanics, Installers, and Repairers

No source yet.

### 49-3000 Vehicle and Mobile Equipment Mechanics, Installers, and Repairers

No source yet.

### 49-9000 Other Installation, Maintenance, and Repair Occupations

No source yet.

## 51-0000 Production Occupations

### 51-1000 Supervisors of Production Workers

No source yet.

### 51-2000 Assemblers and Fabricators

No source yet.

### 51-3000 Food Processing Workers

No source yet.

### 51-4000 Metal Workers and Plastic Workers

No source yet.

### 51-5100 Printing Workers

No source yet.

### 51-6000 Textile, Apparel, and Furnishings Workers

No source yet.

### 51-7000 Woodworkers

No source yet.

### 51-8000 Plant and System Operators

No source yet.

### 51-9000 Other Production Occupations

No source yet.

## 53-0000 Transportation and Material Moving Occupations

### 53-1000 Supervisors of Transportation and Material Moving Workers

No source yet.

### 53-2000 Air Transportation Workers

No source yet.

### 53-3000 Motor Vehicle Operators

No source yet.

### 53-4000 Rail Transportation Workers

No source yet.

### 53-5000 Water Transportation Workers

No source yet.

### 53-6000 Other Transportation Workers

No source yet.

### 53-7000 Material Moving Workers

No source yet.

## 55-0000 Military Specific Occupations

### 55-1000 Military Officer Special and Tactical Operations Leaders

No source yet.

### 55-2000 First-Line Enlisted Military Supervisors

No source yet.

### 55-3000 Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members

No source yet.

## Counts

| | |
| --- | --- |
| families | general + 98 minor groups in 23 major groups |
| rows | 1317 (5 built, 1312 not) |
| families with a row | 25 of 99 (general; 11-1000 Top Executives; 11-2000 Advertising, Marketing, Promotions, Public Relations, and Sales Managers; 11-3000 Operations Specialties Managers; 13-1000 Business Operations Specialists; 13-2000 Financial Specialists; 15-1200 Computer Occupations; 15-2000 Mathematical Science Occupations; 19-1000 Life Scientists; 19-2000 Physical Scientists; 19-3000 Social Scientists and Related Workers; 21-1000 Counselors, Social Workers, and Other Community and Social Service Specialists; 23-1000 Lawyers, Judges, and Related Workers; 23-2000 Legal Support Workers; 25-3000 Other Teachers and Instructors; 25-4000 Librarians, Curators, and Archivists; 27-1000 Art and Design Workers; 27-3000 Media and Communication Workers; 27-4000 Media and Communication Equipment Workers; 29-9000 Other Healthcare Practitioners and Technical Occupations; 39-7000 Tour and Travel Guides; 39-9000 Other Personal Care and Service Workers; 41-3000 Sales Representatives, Services; 43-4000 Information and Record Clerks; 43-6000 Secretaries and Administrative Assistants) |
| sources assessed | 11 (mattpocock/skills, karpathy/autoresearch, morluto/rea, cbrock84/headcount, The-Swarm-Corporation/AutoHedge, wheresryan22/anatomy, affaan-m/ECC, browser-use/video-use, AgriciDaniel/claude-seo, TauricResearch/TradingAgents, sickn33/agentic-awesome-skills; 2026-11-12) |

Which rows are built, and in what order, follows his word and the
Blueprints being built; the registry only says what exists and what does not.
