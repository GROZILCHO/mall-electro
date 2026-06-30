# Mall Electro Active Sprint

Last updated: 2026-06-30

## Sprint Name

Sprint 9 - I18N Foundation

## Sprint Goal

Build and validate the technical foundation for future multilingual support while keeping the existing Bulgarian website visually, functionally and SEO-output unchanged.

## Current Baseline

Clean baseline after ME-I18N-11C:

`cfe14143cc0b8b6f93800bc3ce3716ab4bb4ac96`

## Sprint Scope

### In scope

- typed locale and route foundation
- routeKey/pageKey bridge alignment
- routeKey/seoKey bridge alignment
- BG-only runtime route adapter
- BG-only SEO runtime route adapter
- SEO registry adapter integration
- output safety validation
- final foundation readiness audit
- documentation governance sync

### Out of scope

- full visual redesign
- new major page creation
- service detail page rollout
- industry detail page rollout
- broad component refactors
- translation implementation
- content localization
- language switcher
- hreflang
- EN/RO public route activation
- sitemap expansion for EN/RO
- SEO localization
- automatic language detection

## Completed Sprint 9 Work

ME-I18N-01 through ME-I18N-11C are complete.

Completed foundation artifacts:

- typed i18n locale and route foundation
- `routeKey -> pageKey` bridge
- BG-only runtime route adapter
- route parity audit
- runtime route key alignment plan
- SEO/prerender alignment plan
- `routeKey -> seoKey` bridge
- BG-only SEO runtime route adapter
- SEO runtime route parity audit
- SEO registry adapter integration
- output safety guard
- clean Git baseline after ME-I18N-11C

## Current Output Invariants

The current production output remains BG-only.

- BG is the only public active locale.
- EN is planned but inactive.
- RO is planned but inactive.
- Runtime routing remains BG-only.
- SEO/prerender output remains BG-only.
- Prerender route count remains 28.
- Sitemap URL count remains 27.
- `dist/en` remains absent.
- `dist/ro` remains absent.
- Hreflang remains absent.
- Language switcher remains absent.

## Required Validation

Use the following commands for Sprint 9 foundation validation:

1. `npm run typecheck`
2. `npm run build`
3. `npm run check:i18n-output`

The i18n output safety guard validates generated `dist/` output after build.

## Working Assumptions

- Bulgarian is the current source language.
- English is the first localization target after foundation approval.
- Romanian follows only after EN patterns are validated.
- Current public pages stay as the approved functional baseline.
- EN/RO route data can exist as planned architecture data but must not become public output without explicit activation approval.

## Priority Stack

1. Protect current Bulgarian baseline.
2. Protect SEO/prerender integrity.
3. Keep EN/RO inactive.
4. Validate routeKey/pageKey/seoKey separation.
5. Complete final foundation readiness audit.
6. Defer public multilingual activation until separately approved.

## Remaining Sprint 9 Foundation Work

Next planned task:

- ME-I18N-13 - I18N Foundation Final Audit / Readiness Review

ME-I18N-13 should decide whether Sprint 9 foundation is ready to close or whether additional guard/parity work is required.

## Definition of Done

The remaining Sprint 9 foundation stage is complete when:

- documentation reflects Sprint 9 as active/current
- routeKey/pageKey/seoKey responsibilities are confirmed
- BG-only runtime route behavior is preserved
- BG-only SEO/prerender output is preserved
- prerender route count remains 28
- sitemap URL count remains 27
- EN/RO output remains absent
- hreflang remains absent
- language switcher remains absent
- `npm run check:i18n-output` passes after build
- ME-I18N-13 final audit approves readiness for the next controlled i18n phase

## Open Questions For Later Phases

- When should language switcher implementation begin?
- What approval gate is required before hreflang and sitemap expansion?
- What QA process is required before EN route activation?
- What QA process is required before RO route activation?
- Should existing encoding/mojibake content issues be handled before translation extraction?
