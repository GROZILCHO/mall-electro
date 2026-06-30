# ME-I18N-06 - I18N SEO / Prerender Alignment Plan

Audit date: 2026-06-30

Mode: Documentation-only planning. No implementation files were changed.

## Files Inspected

- `PROJECT_BOOTSTRAP.md`
- `PROJECT_RULES.md`
- `AGENTS.md`
- `docs/02_ACTIVE_SPRINT.md`
- `docs/06_ARCHITECTURE_DECISIONS.md`
- `docs/09_I18N_ROUTE_PARITY_AUDIT.md`
- `docs/10_I18N_RUNTIME_ROUTE_KEY_ALIGNMENT_PLAN.md`
- `App.tsx`
- `entry-server.tsx`
- `seo/seoConfig.ts`
- `components/seo/SEO.tsx`
- `scripts/prerender.mjs`
- `data/i18n/types.ts`
- `data/i18n/locales.ts`
- `data/i18n/routes.ts`
- `data/i18n/routeBridge.ts`
- `data/i18n/runtimeRoutes.ts`

## Current SEO / Prerender Architecture

The current SEO and prerender output is controlled by `seoRoutes` in `seo/seoConfig.ts`.

`entry-server.tsx` exports `seoRoutes`, `getSeoRouteByPath`, `renderHeadTags`, and `render`. `scripts/prerender.mjs` imports those exports from the built server bundle and iterates directly over `seoRoutes` to generate static HTML files, `sitemap.xml`, and `robots.txt`.

`components/seo/SEO.tsx` uses `SeoPageKey` to render client-side SEO tags for individual pages. The prerender path uses `renderHeadTags` from `entry-server.tsx`, so SSR/static SEO output and client SEO output share the same metadata source.

Current prerender route count: 28.

Current sitemap URL count: 27, because the `notFound` SEO route is included in prerender output but has `includeInSitemap: false`.

Current locale output: BG-only public output plus `/404`. No EN or RO prerender output is generated.

## Responsibility Model

`RouteKey` is the stable i18n route identity. It defines the logical route across locales.

`RuntimePageKey` is the runtime page/component identity. It is used by `App.tsx` and `data/i18n/runtimeRoutes.ts` to load the correct React page.

`SeoPageKey` is the SEO metadata identity. It is currently defined in `seo/seoConfig.ts` and does not always match `RouteKey`. For example, `serviceElectricPanels` maps to the runtime/SEO page key `electricPanels`.

The future SEO route generation model should be explicit:

```txt
RouteKey -> RuntimePageKey -> SeoPageKey
RouteKey + locale -> localized public path
RouteKey + locale + SeoPageKey metadata -> SEO route output
public active locale routes -> prerender registry
```

Do not infer `SeoPageKey` from `RouteKey` by string manipulation. Use a typed bridge.

## Recommended Source Of Truth

For the next implementation step, keep `seoRoutes` as the effective source of truth for production prerender output until route parity is proven.

Introduce a BG-only SEO route registry adapter that maps:

- active/public BG `RouteKey`
- existing `SeoPageKey`
- existing BG public path
- existing SEO metadata object

The adapter should prove that a route-key-driven registry can reproduce the current `seoRoutes` output without changing route count, canonical URLs, sitemap output, JSON-LD output, or metadata keys.

Do not replace `seoRoutes` directly until a parity check confirms:

- same 28 prerender routes
- same 27 sitemap URLs
- same paths
- same `includeInSitemap` behavior
- same `noindex` behavior
- no `/en` or `/ro` output

## BG-Only Preservation Strategy

The next implementation must preserve current Bulgarian output exactly.

Required constraints:

- Use only locale `bg`.
- Include only routes that are active and public for BG.
- Preserve `/404` as prerendered but excluded from sitemap.
- Preserve current canonical URL trailing-slash behavior.
- Preserve current `og:locale` value `bg_BG`.
- Preserve existing titles, descriptions, Open Graph image paths, and JSON-LD text fields.
- Preserve current prerender route count: 28.
- Preserve current sitemap URL count: 27.
- Do not alter legacy redirects in `App.tsx`.
- Do not alter runtime routing.

## EN / RO Exposure Prevention

EN and RO must remain planned but inactive.

Required constraints:

- Do not iterate over all `SUPPORTED_LOCALES` when generating prerender routes.
- Do not generate `/en` or `/ro` directories in `dist`.
- Do not add EN or RO URLs to `sitemap.xml`.
- Do not add EN or RO canonical URLs.
- Do not add EN or RO schema text.
- Keep EN/RO route definitions available only as inactive planning data.
- Any future generator must filter by explicit public/active locale status before output.

## Hreflang Non-Goal

Hreflang is not part of ME-I18N-06 or the next safe BG-only alignment step.

Hreflang should be added only after localized metadata, localized route activation, canonical rules, sitemap expansion, and QA rules are approved together.

## Sitemap Expansion Non-Goal

Sitemap expansion is not part of ME-I18N-06 or the next safe BG-only alignment step.

The sitemap must remain BG-only until EN and RO are explicitly activated for production SEO output.

## Risks

- `RouteKey` and `SeoPageKey` names are not identical for service detail pages. A typed mapping is required.
- Replacing `seoRoutes` before parity validation can change canonical URLs, sitemap inclusion, `noindex`, or JSON-LD output.
- Iterating over `SUPPORTED_LOCALES` too early can leak `/en` or `/ro` output.
- Localized slugs already exist as planning data, but EN/RO are not public SEO surfaces yet.
- Existing visible encoding corruption in SEO strings is outside this task and should not be mixed with route registry alignment.

## ME-I18N-07 Recommendation

Proceed to ME-I18N-07 only as a BG-only SEO route registry adapter task.

Recommended ME-I18N-07 scope:

- Add an explicit typed bridge from `RouteKey` to `SeoPageKey`.
- Add a BG-only SEO registry adapter that can reproduce the current `seoRoutes` list.
- Keep `seoRoutes` as the production prerender source until parity is proven.
- Add validation that confirms route count, path list, sitemap inclusion, and EN/RO absence.

ME-I18N-07 must not:

- expose EN/RO routes
- add hreflang
- expand sitemap
- localize metadata
- change runtime routing
- change UI
- change prerender route count
