# Mall Electro Active Sprint

Last updated: 2026-06-29

## Sprint Name

Multilingual Foundation and Deployment Readiness

## Sprint Goal

Prepare Mall Electro for a safe production deployment and establish the documentation and structural rules required for BG -> EN -> RO implementation without damaging the approved Bulgarian baseline.

## Sprint Scope

### In scope

- production deployment readiness
- multilingual planning
- terminology control
- language architecture planning
- route and SEO planning for localization
- PM and execution documentation

### Out of scope

- full visual redesign
- new major page creation
- service detail page rollout
- industry detail page rollout
- broad component refactors

## Sprint Deliverables

- project status document
- next actions document
- active sprint definition
- decisions log
- language implementation plan
- master terminology and translation guide
- production deployment clarity for current site

## Working Assumptions

- Bulgarian is the current source language.
- English is the first localization target.
- Romanian follows only after EN patterns are validated.
- Current public pages stay as the approved functional baseline.

## Priority Stack

1. Protect current Bulgarian baseline
2. Protect SEO/prerender integrity
3. Define multilingual architecture
4. Prepare terminology and translation consistency
5. Execute production deployment cleanly

## Definition of Done

This sprint is complete when:

- the documentation set is in place
- multilingual scope is clearly defined
- translation governance is documented
- deployment path is documented and understood
- no source code changes are required to complete the PM documentation package

## Open Questions for Next Sprint

- Will the default public root remain Bulgarian during the first multilingual release?
- Will localized URLs use translated slugs in all languages?
- Will translation data be stored per page, per component, or in a centralized locale structure?
- Will multilingual rollout happen route-by-route or full overview set first?
