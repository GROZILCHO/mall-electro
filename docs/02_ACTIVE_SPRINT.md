# Mall Electro Active Sprint

Last updated: 2026-06-29

## Sprint Name

Design System Relock and Architecture Baseline Stabilization

## Sprint Goal

Stabilize Mall Electro before Sprint 9 i18n foundation work by aligning governance documents with the real Design System implementation, preserving the approved Bulgarian baseline and adding safe validation scripts.

## Sprint Scope

### In scope

- production deployment readiness
- multilingual planning
- terminology control
- language architecture planning
- route and SEO planning for localization
- PM and execution documentation
- Design System governance alignment
- button variant governance
- validation script readiness

### Out of scope

- full visual redesign
- new major page creation
- service detail page rollout
- industry detail page rollout
- broad component refactors
- i18n implementation
- translation work
- visual redesign

## Sprint Deliverables

- updated AI bootstrap entry point
- aligned Design System governance
- documented button variant status
- safe validation scripts where compatible
- build and typecheck validation results

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
5. Keep the current Bulgarian site visually unchanged

## Definition of Done

This sprint is complete when:

- Design System documentation matches the current approved implementation baseline
- active button variants are documented
- deprecated/pending variants are identified
- validation scripts are available where compatible
- no visual output changes are intentionally introduced

## Open Questions for Next Sprint

- Should Tailwind token aliases be normalized in a later visual QA task?
- Should unused `tertiary` and `monochrome` button variants be removed or retained as legacy compatibility?
- Should hardcoded component color values be gradually replaced with semantic classes after visual snapshots exist?
