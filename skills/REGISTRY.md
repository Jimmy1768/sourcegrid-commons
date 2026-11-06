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

### 15-2000 Mathematical Science Occupations

| Skill | role | status | source | what it is |
| --- | --- | --- | --- | --- |
| data-modeling | builder | — | cbrock84/headcount plugins/data-analytics/skills/data-modeling | designs the warehouse and semantic layer with dimensional models and metrics |
| quantitative-analysis | builder | — | cbrock84/headcount plugins/data-analytics/skills/quantitative-analysis | answers a business question with data honestly framed |

## 17-0000 Architecture and Engineering Occupations

### 17-1000 Architects, Surveyors, and Cartographers

No source yet.

### 17-2000 Engineers

No source yet.

### 17-3000 Drafters, Engineering Technicians, and Mapping Technicians

No source yet.

## 19-0000 Life, Physical, and Social Science Occupations

### 19-1000 Life Scientists

No source yet.

### 19-2000 Physical Scientists

No source yet.

### 19-3000 Social Scientists and Related Workers

No source yet.

### 19-4000 Life, Physical, and Social Science Technicians

No source yet.

### 19-5000 Occupational Health and Safety Specialists and Technicians

No source yet.

## 21-0000 Community and Social Service Occupations

### 21-1000 Counselors, Social Workers, and Other Community and Social Service Specialists

No source yet.

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

### 23-2000 Legal Support Workers

No source yet.

## 25-0000 Educational Instruction and Library Occupations

### 25-1000 Postsecondary Teachers

No source yet.

### 25-2000 Preschool, Elementary, Middle, Secondary, and Special Education Teachers

No source yet.

### 25-3000 Other Teachers and Instructors

No source yet.

### 25-4000 Librarians, Curators, and Archivists

No source yet.

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

No source yet.

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

No source yet.

### 39-9000 Other Personal Care and Service Workers

No source yet.

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

### 43-5000 Material Recording, Scheduling, Dispatching, and Distributing Workers

No source yet.

### 43-6000 Secretaries and Administrative Assistants

No source yet.

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
| rows | 493 (5 built, 488 not) |
| families with a row | 14 of 99 (general; 11-1000 Top Executives; 11-2000 Advertising, Marketing, Promotions, Public Relations, and Sales Managers; 11-3000 Operations Specialties Managers; 13-1000 Business Operations Specialists; 13-2000 Financial Specialists; 15-1200 Computer Occupations; 15-2000 Mathematical Science Occupations; 23-1000 Lawyers, Judges, and Related Workers; 27-1000 Art and Design Workers; 27-3000 Media and Communication Workers; 27-4000 Media and Communication Equipment Workers; 41-3000 Sales Representatives, Services; 43-4000 Information and Record Clerks) |
| sources assessed | 10 (mattpocock/skills, karpathy/autoresearch, morluto/rea, cbrock84/headcount, The-Swarm-Corporation/AutoHedge, wheresryan22/anatomy, affaan-m/ECC, browser-use/video-use, AgriciDaniel/claude-seo, TauricResearch/TradingAgents; 2026-11-06) |

Which rows are built, and in what order, follows his word and the
Blueprints being built; the registry only says what exists and what does not.
