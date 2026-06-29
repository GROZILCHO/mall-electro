# Mall Electro I18N Runtime Route Key Alignment Plan

Audit date: 2026-06-29
Task: ME-I18N-03
Mode: Documentation-only planning

## Files Inspected

- `PROJECT_BOOTSTRAP.md`
- `PROJECT_RULES.md`
- `AGENTS.md`
- `docs/02_ACTIVE_SPRINT.md`
- `docs/06_ARCHITECTURE_DECISIONS.md`
- `docs/09_I18N_ROUTE_PARITY_AUDIT.md`
- `data/i18n/types.ts`
- `data/i18n/locales.ts`
- `data/i18n/routes.ts`
- `App.tsx`
- `seo/seoConfig.ts`
- `scripts/prerender.mjs`

## Executive Decision

Use `routeKey` as the canonical runtime routing identity.

Use `pageKey` only as the runtime component, SEO, and content lookup target.

Use localized path mapping only as the URL input/output layer.

This decision is safe because the existing BG route parity audit passed, EN/RO route data is still inactive, and the current runtime and prerender behavior can be preserved while a bridge layer is introduced later.

## Documentation Contradictions

No blocking contradictions were found.

Notes:

- `PROJECT_BOOTSTRAP.md` still describes the current phase as stabilization before Sprint 9, while this task is part of the i18n foundation sequence. This is a phase-label drift, not a technical conflict for ME-I18N-03.
- `PROJECT_RULES.md` includes a confirmation protocol, but this task requires a concrete planning deliverable and validation report. The task-specific instruction is followed for output.
- `AGENTS.md` and `docs/06_ARCHITECTURE_DECISIONS.md` agree that locale-prefixed routes are the multilingual public route strategy.

## Source Of Truth Comparison

### Option: `routeKey`

`routeKey` represents the logical page identity across locales.

Strengths:

- Stable across BG, EN, and RO.
- Already defined as a typed union in `data/i18n/types.ts`.
- Matches the localized route map structure.
- Allows one logical page to have different localized slugs.
- Prevents English or Bulgarian URL wording from becoming the architecture identity.

Weaknesses:

- Current runtime `App.tsx` still uses `pageKey` and path-to-page mapping.
- A bridge layer will be required later.

Decision:

Selected as canonical routing identity.

### Option: `pageKey`

`pageKey` currently identifies component loaders and SSR page loading in `App.tsx`.

Strengths:

- Already used by `pageLoaders`, `clientPages`, and `routePageKeys`.
- Directly maps to React page components.
- Low disruption for current BG runtime behavior.

Weaknesses:

- It reflects implementation structure, not multilingual route intent.
- It is not consistently named with i18n keys. Example: `electricPanels` vs `serviceElectricPanels`.
- It would couple localized routing decisions to component naming.
- It would make future content/SEO route expansion more brittle.

Decision:

Do not use as canonical route identity. Keep as runtime lookup target.

### Option: Path Mapping

Path mapping represents concrete URL paths such as `/bg/uslugi` or `/en/services`.

Strengths:

- Required for browser routing, links, redirects, canonical URLs, sitemap, and prerender output.
- Human-readable and SEO-facing.

Weaknesses:

- Locale-specific by design.
- Slugs can change while the logical route should remain stable.
- Paths alone do not identify component, SEO, or content responsibilities safely.

Decision:

Keep path mapping as URL input/output only.

## Final Selected Source Of Truth

The canonical routing identity is:

```txt
routeKey
```

The supporting runtime model is:

```txt
routeKey -> pageKey -> component loader
routeKey + locale -> localized path
path -> locale + routeKey
routeKey -> SEO metadata key or SEO route entry
routeKey -> page/content data
```

## RouteKey / PageKey / Path Responsibility Model

### `routeKey`

Responsibilities:

- Logical route identity.
- Locale-independent page meaning.
- Internal navigation identity.
- Future i18n content lookup identity.
- Future SEO route alignment identity.

Must not:

- Import React components directly.
- Encode localized URL text.
- Depend on current component filenames.

### `pageKey`

Responsibilities:

- Runtime component lookup.
- SSR page loading.
- Bridge target from `routeKey` to page component.
- Existing SEO/content compatibility where keys already exist.

Must not:

- Become the multilingual route source of truth.
- Be exposed as URL architecture.
- Force i18n route names to match component names.

### `path`

Responsibilities:

- Public URL input/output.
- Locale-specific slug representation.
- Redirect target representation.
- Canonical, sitemap, and prerender output after explicit activation.

Must not:

- Become the canonical identity for logical pages.
- Be used as the only way to infer page responsibilities.
- Activate EN/RO routes before `localeDefinitions[locale].isPublic` and route status rules allow it.

## Service Key Mismatch Prevention Plan

Current mismatch:

- i18n route key: `serviceElectricPanels`
- runtime page key: `electricPanels`
- SEO key: `electricPanels`
- BG path: `/bg/uslugi/elektricheski-tabla`

Required strategy:

```txt
routeKey = canonical logical route identity
pageKey = runtime component/SEO/content lookup identity
path = locale-specific URL representation
```

Future bridge concept:

```ts
type RouteRuntimeBridge = Record<RouteKey, {
  pageKey: PageKey;
  seoKey: SeoPageKey;
}>;
```

Conceptual examples:

```txt
serviceElectricPanels -> electricPanels -> pages/services/ElectricPanels
serviceCableRoutes -> cableRoutes -> pages/services/CableRoutes
serviceMaintenance -> maintenanceService -> pages/services/MaintenanceService
industryHvp -> hvpIndustry -> pages/industries/HvpIndustry
```

This bridge must be explicit and typed. Do not rely on string replacement or naming conventions to infer mappings.

## Future App.tsx Wiring Strategy

ME-I18N-04 may introduce a bridge-driven route generation layer only if it preserves current BG behavior.

Safe transition model:

1. Keep existing `pageLoaders` and `PageKey` behavior unchanged.
2. Add a typed route-to-page bridge in a controlled location.
3. Generate only active BG routes from `localizedRoutes.bg`.
4. Keep `/` redirecting to `/bg/`.
5. Keep legacy unprefixed redirects pointing to Bulgarian localized routes.
6. Keep wildcard route resolving to `notFound`.
7. Preserve `loadSsrPagesForPath` behavior by resolving `path -> routeKey -> pageKey`.
8. Keep `/bg` and `/bg/` home normalization behavior.

EN/RO protection requirements:

- Runtime route generation must filter by `localeDefinitions[locale].isPublic === true`.
- Runtime route generation must filter by route status `active`.
- `planned` routes must never become React Router routes.
- `/en` and `/ro` must not be exposed until a later task explicitly activates them.

## Preserving Current `routePageKeys` Behavior

The future bridge must preserve what `routePageKeys` currently does:

- Resolve prerendered and SSR paths to the correct page component.
- Normalize trailing slashes.
- Resolve unknown paths to `notFound`.
- Support `/bg` and `/bg/` for the home page.

Recommended future replacement strategy:

```txt
current: path -> pageKey
future: path -> routeKey -> pageKey
```

This replacement should be introduced behind tests or validation checks that compare generated BG path-to-page mappings against the current hardcoded `routePageKeys` inventory.

## SEO / Prerender Preservation Strategy

Until EN/RO activation is explicitly approved:

- `seoRoutes` remains the prerender source.
- `scripts/prerender.mjs` continues to prerender `seoRoutes.length`.
- Sitemap generation remains unchanged.
- Canonical output remains unchanged.
- No hreflang is added in ME-I18N-03 or ME-I18N-04 unless explicitly scoped.
- No `/en` or `/ro` entries are added to `seoRoutes`.

Future SEO alignment should use:

```txt
routeKey -> seoKey -> SEO metadata entry
routeKey + locale -> localized SEO metadata
routeKey + locale -> localized canonical path
```

## Explicit Non-Goals

ME-I18N-03 does not introduce:

- Runtime route wiring.
- Language switcher.
- Hreflang.
- EN/RO route exposure.
- Sitemap expansion.
- Prerender route count changes.
- Translation files.
- Content extraction.
- SEO localization.
- Navbar changes.
- Footer changes.
- Layout changes.
- Page changes.
- Style changes.

## Risks

- A future implementation could accidentally expose EN/RO by iterating all `SUPPORTED_LOCALES` instead of only public active locales.
- A future implementation could break service detail pages if it assumes `routeKey` and `pageKey` names are identical.
- A future implementation could change prerender route count if `seoRoutes` is replaced before localized SEO activation is ready.
- Existing localized labels and SEO text show possible encoding/mojibake symptoms in terminal output; this should be handled separately from route wiring.
- `PROJECT_BOOTSTRAP.md` phase wording may need a later documentation sync once Sprint 9 is formally active.

## ME-I18N-04 Recommendation

Proceed to ME-I18N-04 only as a controlled foundation task.

ME-I18N-04 should:

- Add a typed conceptual bridge only if explicitly approved.
- Preserve all current BG routes and redirects.
- Keep `routeKey` as canonical identity.
- Keep `pageKey` as runtime lookup target.
- Keep localized paths as URL input/output.
- Keep EN/RO inactive.
- Keep prerender route count at 28.
- Include validation that generated BG route mappings match current runtime paths.

ME-I18N-04 should not:

- Activate `/en` or `/ro`.
- Add a language switcher.
- Add hreflang.
- Expand sitemap.
- Localize SEO.
- Extract page content.
- Refactor pages or layout.
- Redesign any UI.

## Conclusion

The selected model is:

```txt
routeKey is the canonical routing identity.
pageKey is the runtime lookup target.
localized path mapping is the URL input/output layer.
```

This plan supports future runtime wiring without changing the current Bulgarian site behavior and without exposing EN/RO routes.
