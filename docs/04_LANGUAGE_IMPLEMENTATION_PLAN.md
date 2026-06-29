# Mall Electro Language Implementation Plan

Last updated: 2026-06-29

## Objective

Implement multilingual support for Mall Electro in a controlled sequence:

1. Preserve Bulgarian as the current production source.
2. Introduce English as the first target locale.
3. Introduce Romanian after English structure and QA are proven.

## Guiding Principles

- Bulgarian remains the master source copy.
- Translation is not only text replacement; it includes route strategy, SEO, metadata and terminology.
- No locale should ship with partial content quality.
- Existing approved page architecture should be reused, not reinvented.
- Locale-prefixed routing is the approved public strategy.
- Localized slugs are the approved strategy.
- `/` redirects to `/bg/` in v1.
- No automatic language detection is allowed in v1.
- Legacy unprefixed URLs must redirect to Bulgarian localized routes.

## Recommended Rollout Phases

## Phase 1 - Bulgarian Freeze and Extraction

Goal:
Prepare the current Bulgarian site as the master language baseline.

Tasks:

- review and normalize Bulgarian page copy
- identify all user-facing strings
- separate reusable UI strings from page-specific content
- mark service and industry naming standards
- mark SEO titles, descriptions and schema text that must localize later
- prepare the legacy redirect inventory for migration-safe rollout

Output:

- stable Bulgarian source text set
- clear content inventory for localization

## Phase 2 - Localization Architecture

Goal:
Prepare the technical model for multilingual content.

Tasks:

- implement the approved locale route structure in planning artifacts
- define locale key conventions
- define content storage structure
- define locale-aware route mapping
- define canonical and hreflang rules per locale route
- define localized sitemap behavior
- define legacy redirect behavior for existing unprefixed URLs

Approved route model:

- BG: `/bg/`
- EN: `/en/`
- RO: `/ro/`

Approved root behavior:

- `/` redirects to `/bg/`
- no browser-language auto-detection in v1

Approved localized slug examples:

- BG: `/bg/uslugi/`
- EN: `/en/services/`
- RO: `/ro/servicii/`

Approved legacy redirect examples:

- `/services` -> `/bg/uslugi/`
- `/about` -> `/bg/za-nas/`
- `/industries` -> `/bg/industrii/`
- `/contact` -> `/bg/kontakti/`

Structured i18n storage should use `.ts` files unless implementation inspection later finds a stronger technical reason to change.

Route slugs should be localized per locale rather than mechanically reused.

## Phase 3 - English Implementation

Goal:
Deliver the first full non-Bulgarian language version.

Tasks:

- translate shared UI strings
- translate page-level content
- localize SEO metadata
- validate route mapping
- validate internal links
- validate canonical and hreflang tags per locale route
- localize schema text fields
- run route-by-route QA

Output:

- complete EN overview page set

## Phase 4 - English QA and Correction

Goal:
Validate the multilingual system before Romanian begins.

Tasks:

- terminology QA
- tone QA
- link QA
- metadata QA
- sitemap QA
- canonical QA
- hreflang QA
- browser and route QA

Pass condition:

- EN is structurally correct and linguistically consistent

## Phase 5 - Romanian Implementation

Goal:
Replicate the proven EN process for RO.

Tasks:

- translate based on Bulgarian source and approved terminology
- localize route slugs
- localize metadata
- localize schema text fields
- validate canonical and hreflang output
- validate internal linking

## Phase 6 - Cross-Language QA

Goal:
Validate the site as one multilingual product.

Tasks:

- compare route parity across locales
- compare SEO coverage across locales
- compare CTA consistency
- compare service and industry naming consistency
- confirm no untranslated mixed-language strings remain

## Content Buckets to Externalize

- navigation labels
- footer labels
- hero titles and subtitles
- CTA button labels
- service names
- service blurbs
- industry names
- form labels
- validation/error/success messages
- SEO titles
- SEO descriptions
- schema text fragments
- redirect mapping notes where locale migration affects existing public URLs

## Acceptance Criteria

The multilingual implementation should only be considered ready when:

- each locale has complete overview pages
- routes are consistent and intentionally mapped
- SEO tags are localized per locale route
- hreflang is correct
- canonical URLs are localized correctly per locale route
- schema text fields are localized
- no placeholder translations remain
- terminology is consistent with the translation guide

## Risks to Avoid

- mixing source Bulgarian with partially translated pages
- publishing EN or RO with missing metadata
- keeping Bulgarian slugs everywhere instead of following the approved localized slug strategy
- duplicating content blindly across locales
- translating technical terminology inconsistently
