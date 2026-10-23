# Skill registry — the commons' index of every Skill, built or not

The commons' index of every Skill that should exist, organized by family,
as `recipes/REGISTRY.md` is for Recipes — the Director's decision of
2026-10-17: organize a complete registry first, build on need. Its reach is
his, 2026-10-23: *"there are 98 profession categories and 867 blueprints
planned, to be built, by another blueprint, called Foundry. i aim to cover
all of these jobs."* A source is judged once against this registry, never
once per Blueprint. Nothing here is built by being listed: a Skill is built
in the Workshop, as a Mandate on the commons, when a Blueprint being built
needs it, never by a Control session (his rule, 2026-10-23). This file was
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
- **A row enters on an observed need or an observed failure from a real
  session**, never a hypothetical (the source's own bar, SCOPE.md of
  mattpocock/skills). Behaviour that composes from existing Skills gets no
  new row.
- **A row is built when a Blueprint being built needs it**, never because
  the row exists (his logic for Recipes, 2026-10-17).

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

Note: grill-with-docs (interview that builds the domain model as it goes)
is a composition of interview and domain-modeling; no row, by the rule
above.

## 11-0000 Management Occupations

### 11-1000 Top Executives

No source yet.

### 11-2000 Advertising, Marketing, Promotions, Public Relations, and Sales Managers

No source yet.

### 11-3000 Operations Specialties Managers

No source yet.

### 11-9000 Other Management Occupations

No source yet.

## 13-0000 Business and Financial Operations Occupations

### 13-1000 Business Operations Specialists

No source yet.

### 13-2000 Financial Specialists

No source yet.

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

### 15-2000 Mathematical Science Occupations

No source yet.

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

No source yet.

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

No source yet.

### 27-2000 Entertainers and Performers, Sports and Related Workers

No source yet.

### 27-3000 Media and Communication Workers

No source yet.

### 27-4000 Media and Communication Equipment Workers

No source yet.

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

No source yet.

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

No source yet.

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
| rows | 13 (5 built, 8 not) |
| families with a row | 2 of 99 (general; 15-1200 Computer Occupations) |
| sources assessed | 1 (mattpocock/skills, 2026-10-23) |

Which rows are built, and in what order, follows the Blueprints being
built; the registry only says what exists and what does not.
