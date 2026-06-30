# Mall Electro Project Status

Last updated: 2026-06-30

## Project Snapshot

Mall Electro is a React/Vite B2B industrial website focused on electrical systems, electrical panels, industrial electrical installations, cable routes, automation, low-voltage systems and engineering execution.

The approved overview page set is in place:

- Home
- Services
- About
- Industries
- Contact

## Current Sprint

Sprint 9 - I18N Foundation is active and in progress.

Current clean baseline after ME-I18N-11C:

`cfe14143cc0b8b6f93800bc3ce3716ab4bb4ac96`

## Current I18N Foundation State

The project now has a typed i18n foundation for future BG / EN / RO expansion.

Current architecture model:

- `routeKey` is the canonical logical route identity.
- `pageKey` is the runtime component and content lookup target.
- `seoKey` is the SEO metadata lookup target.
- Localized `path` values are the URL input/output layer.

Implemented foundation pieces:

- typed locale and route definitions
- `routeKey -> pageKey` bridge
- BG-only runtime route adapter
- `routeKey -> seoKey` bridge
- BG-only SEO runtime route adapter
- SEO registry adapter integration
- output safety guard through `npm run check:i18n-output`

## Public Output Status

Current public output remains BG-only.

- BG is the only public active locale.
- EN routes are planned but inactive.
- RO routes are planned but inactive.
- Runtime routing remains BG-only.
- SEO/prerender output remains BG-only.
- No language switcher is active.
- No hreflang output is active.
- No sitemap expansion for EN/RO is active.

Current output invariants:

- prerender route count: 28
- sitemap URL count: 27
- `dist/en`: absent
- `dist/ro`: absent
- `hreflang`: absent

## Built and Available

- Main overview routes are implemented and working.
- Core CTA/contact flow exists.
- Production build workflow exists in `package.json`.
- SEO/prerender workflow exists and must be preserved for production releases.
- Approved design baseline is established through Home and Industries.
- I18N output safety guard exists and validates generated `dist/` output after build.

## Active Constraints

- Bulgarian remains the source language and the only active public locale.
- No thin translated shells should be published.
- Future route changes must stay aligned with SEO config, prerender output and sitemap generation.
- Home and Industries should not be visually simplified.
- EN/RO must not be exposed before explicit activation approval.

## Current Priority

The active project priority is completing Sprint 9 i18n foundation readiness before any visible multilingual rollout.

Priority order:

1. Preserve Bulgarian baseline.
2. Preserve SEO/prerender integrity.
3. Keep EN/RO inactive until approved.
4. Complete final i18n foundation audit.
5. Only then plan controlled multilingual activation work.

## Next Milestone

The next milestone is ME-I18N-13 - I18N Foundation Final Audit / Readiness Review.

Milestone goal:

- confirm route/runtime/SEO guard coverage
- confirm no EN/RO public output
- confirm documentation and implementation are aligned
- decide whether the project is ready for the next controlled i18n phase

## Risks

- Future tasks could accidentally expose EN/RO by iterating all supported locales instead of public active locales.
- Hreflang or sitemap expansion before localized metadata is ready would create SEO risk.
- Translation without terminology governance will create inconsistent industrial language.
- Route expansion without synchronized SEO/prerender updates can cause crawl and indexing issues.
- Existing source content still has visible encoding/mojibake symptoms in some areas; this is separate from the route foundation.

## Recommended Operating Mode

- Treat Bulgarian content as the master content layer.
- Treat English as the first target localization after architecture readiness is approved.
- Treat Romanian as the third language layer after EN patterns are validated.
- Keep code changes narrow and validation-led during the remaining Sprint 9 foundation phase.
- Run `npm run build` and `npm run check:i18n-output` when public output safety is relevant.
