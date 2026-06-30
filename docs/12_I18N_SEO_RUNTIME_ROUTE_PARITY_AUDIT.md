# ME-I18N-09 - SEO Runtime Route Registry Parity Audit

Audit date: 2026-06-30

Baseline commit: `5586b4a753be2c75c48e2e884aaeda2a219bdf31`

Mode: Read-only technical audit with documentation output. No implementation files were changed.

## Files Inspected

- `PROJECT_BOOTSTRAP.md`
- `PROJECT_RULES.md`
- `AGENTS.md`
- `docs/02_ACTIVE_SPRINT.md`
- `docs/06_ARCHITECTURE_DECISIONS.md`
- `docs/09_I18N_ROUTE_PARITY_AUDIT.md`
- `docs/10_I18N_RUNTIME_ROUTE_KEY_ALIGNMENT_PLAN.md`
- `docs/11_I18N_SEO_PRERENDER_ALIGNMENT_PLAN.md`
- `data/i18n/types.ts`
- `data/i18n/locales.ts`
- `data/i18n/routes.ts`
- `data/i18n/routeBridge.ts`
- `data/i18n/runtimeRoutes.ts`
- `data/i18n/seoBridge.ts`
- `data/i18n/seoRuntimeRoutes.ts`
- `seo/seoConfig.ts`
- `scripts/prerender.mjs`
- `entry-server.tsx`
- `components/seo/SEO.tsx`
- `App.tsx`

## Documentation Notes

No blocking contradictions were found.

Non-blocking notes:

- `PROJECT_BOOTSTRAP.md` and `docs/02_ACTIVE_SPRINT.md` still describe the phase as stabilization before Sprint 9, while the current approved task sequence is already executing Sprint 9 i18n foundation work.
- `PROJECT_RULES.md` contains a confirmation-only protocol, but this task explicitly requires a concrete audit document and validation report.
- These are process/documentation drift issues, not technical blockers for ME-I18N-09.

## Current Production SEO / Prerender Summary

Production SEO and prerender output remains driven by `seoRoutes` from `seo/seoConfig.ts`.

`scripts/prerender.mjs` imports `seoRoutes` through the built `entry-server` bundle and prerenders exactly `seoRoutes.length` routes. It also generates `sitemap.xml` from `seoRoutes.filter((route) => route.includeInSitemap !== false)`.

Current production route characteristics:

- Prerender route count: 28
- Sitemap URL count: 27
- Locale output: BG-only plus `/404`
- EN output: absent
- RO output: absent
- Hreflang output: absent
- Production SEO source: `seoRoutes`

## SEO Runtime Adapter Summary

`data/i18n/seoRuntimeRoutes.ts` defines a BG-only route registry adapter.

The adapter uses:

- `RouteKey` as canonical identity
- `seoBridge` for explicit `routeKey -> seoKey`
- localized BG route data for path resolution through the bridge
- `isRoutePublicForLocale(routeKey, "bg")` to keep the registry BG public/active only

The adapter is foundation-only. It is not imported by `seo/seoConfig.ts`, `scripts/prerender.mjs`, `entry-server.tsx`, `components/seo/SEO.tsx`, or `App.tsx`.

## Parity Table: `seoRoutes` vs `seoRuntimeRoutes`

| RouteKey | SEO key | Production path | Adapter path | Prerender | Sitemap | Indexing | Status |
|---|---|---|---|---|---|---|---|
| `home` | `home` | `/bg` | `/bg` | yes | yes | indexable | pass |
| `about` | `about` | `/bg/za-nas` | `/bg/za-nas` | yes | yes | indexable | pass |
| `services` | `services` | `/bg/uslugi` | `/bg/uslugi` | yes | yes | indexable | pass |
| `solutions` | `solutions` | `/bg/reshenia` | `/bg/reshenia` | yes | yes | indexable | pass |
| `solutionNewProductionSite` | `solutionNewProductionSite` | `/bg/reshenia/nov-proizvodstven-obekt` | `/bg/reshenia/nov-proizvodstven-obekt` | yes | yes | indexable | pass |
| `solutionModernization` | `solutionModernization` | `/bg/reshenia/modernizatsia-na-elektro-sistema` | `/bg/reshenia/modernizatsia-na-elektro-sistema` | yes | yes | indexable | pass |
| `solutionCableInfrastructureBase` | `solutionCableInfrastructureBase` | `/bg/reshenia/kabelna-infrastruktura-za-baza` | `/bg/reshenia/kabelna-infrastruktura-za-baza` | yes | yes | indexable | pass |
| `solutionServiceExpansion` | `solutionServiceExpansion` | `/bg/reshenia/serviz-i-razshiryavane` | `/bg/reshenia/serviz-i-razshiryavane` | yes | yes | indexable | pass |
| `solutionHeightInstallation` | `solutionHeightInstallation` | `/bg/reshenia/elektromontazh-na-visochina-s-vishka` | `/bg/reshenia/elektromontazh-na-visochina-s-vishka` | yes | yes | indexable | pass |
| `solutionPanelAutomationLine` | `solutionPanelAutomationLine` | `/bg/reshenia/tabla-i-avtomatizatsia-za-tehnologichni-linii` | `/bg/reshenia/tabla-i-avtomatizatsia-za-tehnologichni-linii` | yes | yes | indexable | pass |
| `serviceElectricPanels` | `electricPanels` | `/bg/uslugi/elektricheski-tabla` | `/bg/uslugi/elektricheski-tabla` | yes | yes | indexable | pass |
| `serviceCableRoutes` | `cableRoutes` | `/bg/uslugi/kabelni-traseta` | `/bg/uslugi/kabelni-traseta` | yes | yes | indexable | pass |
| `serviceIndustrialElectricalInstallations` | `industrialElectricalInstallations` | `/bg/uslugi/industrialni-elektroinstalatsii` | `/bg/uslugi/industrialni-elektroinstalatsii` | yes | yes | indexable | pass |
| `serviceAutomation` | `automation` | `/bg/uslugi/avtomatizatsia` | `/bg/uslugi/avtomatizatsia` | yes | yes | indexable | pass |
| `serviceLowVoltage` | `lowVoltage` | `/bg/uslugi/nisko-naprezhenie` | `/bg/uslugi/nisko-naprezhenie` | yes | yes | indexable | pass |
| `serviceMaintenance` | `maintenanceService` | `/bg/uslugi/poddrazhka-i-serviz` | `/bg/uslugi/poddrazhka-i-serviz` | yes | yes | indexable | pass |
| `industries` | `industries` | `/bg/industrii` | `/bg/industrii` | yes | yes | indexable | pass |
| `industryHvp` | `industryHvp` | `/bg/industrii/hvp` | `/bg/industrii/hvp` | yes | yes | indexable | pass |
| `industryZarnoprerabotka` | `industryZarnoprerabotka` | `/bg/industrii/zarnoprerabotka` | `/bg/industrii/zarnoprerabotka` | yes | yes | indexable | pass |
| `industryMelnitsi` | `industryMelnitsi` | `/bg/industrii/melnitsi` | `/bg/industrii/melnitsi` | yes | yes | indexable | pass |
| `industryAgro` | `industryAgro` | `/bg/industrii/agro` | `/bg/industrii/agro` | yes | yes | indexable | pass |
| `industryLogistika` | `industryLogistika` | `/bg/industrii/logistika` | `/bg/industrii/logistika` | yes | yes | indexable | pass |
| `industryProizvodstveniPredpriyatiya` | `industryProizvodstveniPredpriyatiya` | `/bg/industrii/proizvodstveni-predpriyatiya` | `/bg/industrii/proizvodstveni-predpriyatiya` | yes | yes | indexable | pass |
| `contact` | `contact` | `/bg/kontakti` | `/bg/kontakti` | yes | yes | indexable | pass |
| `privacyPolicy` | `privacyPolicy` | `/bg/politika-za-poveritelnost` | `/bg/politika-za-poveritelnost` | yes | yes | indexable | pass |
| `cookiePolicy` | `cookiePolicy` | `/bg/politika-za-biskvitki` | `/bg/politika-za-biskvitki` | yes | yes | indexable | pass |
| `termsOfUse` | `termsOfUse` | `/bg/usloviya-za-polzvane` | `/bg/usloviya-za-polzvane` | yes | yes | indexable | pass |
| `notFound` | `notFound` | `/404` | `/404` | yes | no | noindex | pass |

## Missing Production Routes

None.

Every current `seoRoutes` entry has a matching BG SEO runtime registry entry after `/bg/` home normalization to `/bg`.

## Extra Adapter Routes

None.

Every BG SEO runtime registry entry has a matching current `seoRoutes` entry.

## RouteKey / SeoKey Mismatches

The following mismatches are intentional and correctly handled by `seoBridge`:

- `serviceElectricPanels` -> `electricPanels`
- `serviceCableRoutes` -> `cableRoutes`
- `serviceIndustrialElectricalInstallations` -> `industrialElectricalInstallations`
- `serviceAutomation` -> `automation`
- `serviceLowVoltage` -> `lowVoltage`
- `serviceMaintenance` -> `maintenanceService`

No logic in the audited adapter assumes `routeKey === seoKey`.

No logic in the audited adapter assumes `routeKey === pageKey`.

## 404 Handling Notes

The current production SEO route for `/404` is represented by:

- `seoRoutes` key: `notFound`
- adapter `routeKey`: `notFound`
- adapter `seoKey`: `notFound`
- prerender eligibility: yes
- sitemap eligibility: no
- indexing status: noindex

Parity result: pass.

## Sitemap Eligibility Notes

Current production sitemap generation excludes only routes where `includeInSitemap === false`.

The BG SEO runtime registry mirrors this:

- 27 sitemap-eligible routes
- `notFound` excluded from sitemap

Parity result: pass.

## Indexing / Noindex Notes

Current `seoRoutes` marks only `notFound` as `noindex: true`.

The BG SEO runtime registry mirrors this as:

- `notFound.isIndexable = false`
- all other entries `isIndexable = true`

Parity result: pass.

## EN / RO Exposure Check

EN and RO remain inactive.

Observed state:

- `localeDefinitions.en.isPublic = false`
- `localeDefinitions.ro.isPublic = false`
- EN route map entries are `planned`
- RO route map entries are `planned`
- `seoRoutes` has no `/en` or `/ro` entries
- `scripts/prerender.mjs` still prerenders only `seoRoutes`
- `data/i18n/seoRuntimeRoutes.ts` filters only BG public/active routes
- No production runtime SEO wiring uses EN or RO

Parity result: pass.

## Risks Before Implementation Wiring

- Replacing `seoRoutes` before an automated parity check exists could still change crawl output unintentionally.
- ME-I18N-10 should not wire `seoRuntimeRoutes` directly into `scripts/prerender.mjs` without first comparing generated entries against current `seoRoutes`.
- Current SEO text still contains visible encoding/mojibake symptoms in source output; this is unrelated to route parity and should not be mixed into route registry wiring.
- Home path normalization must remain deliberate: production SEO uses `/bg`, while localized route data stores `/bg/`; both resolve to the same canonical behavior after normalization.

## Recommendation For ME-I18N-10

Proceed to ME-I18N-10 only as a controlled parity-helper step.

Recommended ME-I18N-10 scope:

- Add a non-production parity utility or typed comparison helper for `seoRoutes` vs BG SEO runtime registry.
- Keep `seoRoutes` as the production source.
- Do not replace `scripts/prerender.mjs` behavior.
- Do not add hreflang.
- Do not expose EN/RO routes.
- Do not expand sitemap.

Conclusion: the BG SEO runtime route registry can represent the current production SEO/prerender route model with full route, path, sitemap, indexing, and 404 parity.
