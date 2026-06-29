# Mall Electro Architecture Decisions

Last updated: 2026-06-29

Status: Approved for multilingual planning baseline

## Purpose

This document records the formal architecture decisions that must guide multilingual implementation for Mall Electro before code changes begin.

These decisions define the route model, redirect model, terminology baseline, translation storage direction and SEO responsibilities for the BG -> EN -> RO rollout.

## ADR-001 - Language Route Strategy

Decision:
Use locale-prefixed routes for public multilingual pages.

Approved route roots:

- `/bg/`
- `/en/`
- `/ro/`

Reason:
Locale-prefixed routing provides explicit language separation, cleaner SEO control, predictable sitemap generation and scalable route management for future localized sections.

Impact:

- all public localized pages must live under a locale prefix
- future route additions must follow the locale structure
- SEO and prerender logic must become locale-aware

## ADR-002 - Default Root Strategy

Decision:
Redirect `/` to `/bg/`.

No automatic language detection is allowed in v1.

Reason:
The Bulgarian site is the current source version and should remain the stable default public entry. Removing auto-detection reduces ambiguity, QA complexity and redirect instability during the first multilingual release.

Impact:

- `/` becomes a deterministic redirect target
- browser-language detection is explicitly deferred
- all entry-point logic must assume Bulgarian as the default language in v1

## ADR-003 - Localized Slug Strategy

Decision:
Use localized slugs per language.

Examples:

- BG: `/bg/uslugi/`
- EN: `/en/services/`
- RO: `/ro/servicii/`

Reason:
Localized slugs improve search relevance, readability and user trust in each market. They also align better with localized metadata and intent-based navigation.

Impact:

- route mapping must be maintained per locale
- internal links must use locale-specific slugs
- canonical and hreflang logic must reference the correct per-locale path

## ADR-004 - Legacy URL Redirect Strategy

Decision:
Preserve existing unprefixed URLs through redirects to Bulgarian localized routes.

Approved redirects:

- `/services` -> `/bg/uslugi/`
- `/about` -> `/bg/za-nas/`
- `/industries` -> `/bg/industrii/`
- `/contact` -> `/bg/kontakti/`

Reason:
The project already has an unprefixed route history. Redirect preservation protects user bookmarks, reduces link breakage and supports a controlled migration to the new multilingual route system.

Impact:

- redirect handling must be included in routing and deployment strategy
- legacy URLs must not remain as parallel canonical content
- sitemap and canonical output must favor the localized destination URLs

## ADR-005 - HVP Terminology Strategy

Decision:
Use the following preferred terminology:

- BG: `ХВП (хранително-вкусова промишленост)`
- EN: `Food processing industry`
- RO: `Industria alimentară`

Reason:
The Bulgarian abbreviation is important for local industry recognition, but the expanded meaning should be explicit. English and Romanian should use natural, understandable industry wording instead of transliterating the abbreviation.

Impact:

- BG content may use the abbreviation with its expanded form where clarity is needed
- EN and RO pages should not inherit the abbreviation as their primary visible label
- metadata and headings should follow the same terminology rule

## ADR-006 - Translation Storage Strategy

Decision:
Use structured i18n files in TypeScript format.

Repository context observed before this decision:

- the existing `data/` layer is TypeScript-based
- current content modules in `data/` are `.ts` files, not `.json`

Reason:
Choosing `.ts` aligns with the current repository structure, keeps content close to the existing typed data layer and allows safer typed exports and structured grouping during implementation.

Impact:

- multilingual content should be organized in structured `.ts` locale modules
- the translation layer should be designed for reusable UI strings and page-specific content
- JSON should not be introduced as the default localization storage format unless a later ADR replaces this decision

## ADR-007 - SEO Strategy

Decision:
Each locale route must include:

- localized canonical URL
- hreflang alternates
- localized title and description
- localized schema text fields

Reason:
Localized routes without localized SEO output create mixed-language indexing risk and weaken search intent targeting in each language.

Impact:

- SEO config must expand from route-only to route-plus-locale logic
- schema text must be localized, not only visible page text
- sitemap generation must include locale-aware entries

## ADR-008 - Priority of Documents

Decision:
When instructions conflict, use this priority order:

1. `PROJECT_RULES.md`
2. `AGENTS.md`
3. `docs/06_ARCHITECTURE_DECISIONS.md`
4. Other files in `docs/`

Exception:
For multilingual route decisions specifically, this ADR supersedes older route lists in `AGENTS.md` once this document exists.

Reason:
The project needs a formal architecture source for multilingual routing without weakening the core design and workflow rules already defined by the higher-priority documents.

Impact:

- `PROJECT_RULES.md` remains the design-system authority
- `AGENTS.md` remains the general implementation authority
- this ADR becomes the source of truth for multilingual route architecture
- older unprefixed route planning in documentation should be treated as historical unless explicitly re-approved

## Documentation Sync Status

The route, slug, redirect and terminology decisions in this ADR are synchronized with:

- `AGENTS.md`
- `docs/04_LANGUAGE_IMPLEMENTATION_PLAN.md`
- `docs/05_MASTER_TERMINOLOGY_TRANSLATION_GUIDE.md`

If older documentation mentions unprefixed public routes as the final route model, treat that content as historical and defer to this ADR.

## Implementation Boundary

This document does not itself implement multilingual support.

It defines the approved architecture that future implementation must follow.
