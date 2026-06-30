# ME-I18N-13 - Sprint 9 I18N Foundation Readiness Audit

Audit date: 2026-06-30

Baseline commit: `04789205ce16c50cecbbda40d1ea234ed5d1b12d`

Mode: final readiness audit. No implementation files were modified.

## Files Inspected

- `PROJECT_BOOTSTRAP.md`
- `PROJECT_RULES.md`
- `AGENTS.md`
- `docs/00_PROJECT_STATUS.md`
- `docs/01_NEXT_ACTIONS.md`
- `docs/02_ACTIVE_SPRINT.md`
- `docs/03_DECISIONS_LOG.md`
- `docs/04_LANGUAGE_IMPLEMENTATION_PLAN.md`
- `docs/05_MASTER_TERMINOLOGY_TRANSLATION_GUIDE.md`
- `docs/06_ARCHITECTURE_DECISIONS.md`
- `docs/09_I18N_ROUTE_PARITY_AUDIT.md`
- `docs/10_I18N_RUNTIME_ROUTE_KEY_ALIGNMENT_PLAN.md`
- `docs/11_I18N_SEO_PRERENDER_ALIGNMENT_PLAN.md`
- `docs/12_I18N_SEO_RUNTIME_ROUTE_PARITY_AUDIT.md`
- `App.tsx`
- `entry-server.tsx`
- `seo/seoConfig.ts`
- `components/seo/SEO.tsx`
- `scripts/prerender.mjs`
- `scripts/check-i18n-output.mjs`
- `package.json`
- `data/i18n/types.ts`
- `data/i18n/locales.ts`
- `data/i18n/routes.ts`
- `data/i18n/routeBridge.ts`
- `data/i18n/runtimeRoutes.ts`
- `data/i18n/seoBridge.ts`
- `data/i18n/seoRuntimeRoutes.ts`

## Sprint 9 Foundation Summary

Status: PASS

Sprint 9 has established a typed i18n foundation without activating multilingual output. The project now separates route identity, runtime page identity and SEO identity through typed bridge files.

The active public output remains Bulgarian only. English and Romanian are represented as planned locale data but are not public, not routed, not prerendered and not emitted in sitemap or generated HTML.

## Architecture Decision Summary

Status: PASS

- `routeKey` is the canonical logical route identity.
- `pageKey` remains the runtime component lookup identity.
- `seoKey` remains the SEO metadata lookup identity.
- Locale route paths live in the structured i18n route layer.
- `bg` is the only public locale in the current runtime.
- `en` and `ro` remain planned and inactive.
- `/` redirects to `/bg/`.
- Legacy unprefixed URLs redirect to BG localized URLs.
- Hreflang, language switcher, EN/RO sitemap expansion and localized SEO output remain future work.

## Locale Foundation

Status: PASS

`data/i18n/locales.ts` defines `bg`, `en` and `ro`, with `bg` as the default and only public locale. `en` and `ro` are explicitly non-public.

`data/i18n/routes.ts` defines active BG routes and planned EN/RO routes. Planned EN/RO paths are data-only and are not exposed by runtime or build output.

## Runtime Route Foundation

Status: PASS

`App.tsx` consumes `bgRuntimeRoutes` and `bgRoutePageKeys` from `data/i18n/runtimeRoutes.ts`. Runtime routing remains BG-only.

The runtime registry filters through `isRoutePublicForLocale(routeKey, "bg")`. It does not iterate over all supported locales and does not expose EN/RO routes.

Root and legacy redirect behavior remains aligned with the ADR:

- `/` redirects to `/bg/`
- `/services` redirects to `/bg/uslugi`
- `/about` redirects to `/bg/za-nas`
- `/industries` redirects to `/bg/industrii`
- `/contact` redirects to `/bg/kontakti`

## SEO Route Foundation

Status: PASS

`seo/seoConfig.ts` is aligned with the BG SEO route adapter through `data/i18n/seoRuntimeRoutes.ts`. The public `seoRoutes` registry remains the production SEO source while route identity is now bridged through typed i18n route keys.

SEO output remains BG-only. No localized EN/RO SEO output, hreflang output or sitemap expansion has been introduced.

## Prerender And Sitemap Foundation

Status: PASS

`scripts/prerender.mjs` still prerenders from `seoRoutes`. It does not iterate over `SUPPORTED_LOCALES`, and it does not generate EN/RO route output.

Build output remains:

- prerendered route HTML files: 28
- sitemap URLs: 27
- EN/RO output: absent
- hreflang: absent

## Output Safety Guard

Status: PASS

`scripts/check-i18n-output.mjs` exists and is wired through `npm run check:i18n-output`.

The guard verifies:

- expected prerender route count
- expected sitemap URL count
- no `dist/en`
- no `dist/ro`
- no `/en/` URLs in generated HTML or sitemap
- no `/ro/` URLs in generated HTML or sitemap
- no hreflang output

## Documentation Governance

Status: PASS

The active Sprint 9 governance documents reflect the current foundation state:

- Sprint 9 I18N Foundation is active/current.
- BG remains the only active public locale.
- EN/RO remain planned and inactive.
- Runtime routing, SEO output, prerender output and sitemap output remain BG-only.
- The output safety guard is part of the current validation baseline.

`docs/06_ARCHITECTURE_DECISIONS.md` remains the authoritative ADR for multilingual route, slug, redirect and terminology strategy after `PROJECT_RULES.md` and `AGENTS.md`.

## Validation Results

Status: PASS

- `git status --short` before audit document: clean
- `npm run typecheck`: pass
- `npm run build`: pass
- `npm run check:i18n-output`: pass
- prerender route count: unchanged at 28
- sitemap URL count: unchanged at 27
- EN/RO output: absent
- hreflang: absent

## BG-Only Output Confirmation

Status: PASS

The generated output contains BG routes only, plus the expected root and 404 output. No EN/RO route directories are generated.

## EN/RO Inactive Confirmation

Status: PASS

EN and RO exist only as planned typed data. They are not public locales, are not consumed by runtime route registration, are not emitted by SEO output and are not included in prerendered output or sitemap output.

## Known Non-Blocking Issues

- Build reports stale `baseline-browser-mapping` and `caniuse-lite` data. This does not affect the Sprint 9 i18n foundation readiness result.
- Some older documentation and terminal-rendered strings still show visible encoding artifacts. This should be handled as a separate cleanup before translation extraction.
- Historical documentation files outside the active Sprint 9 governance set may mention future hreflang or EN/RO output. Current ADR and Sprint 9 documents correctly keep those features inactive until explicitly approved.

## Blockers

None.

## Final Readiness Decision

Status: PASS

Sprint 9 I18N Foundation is ready to close.

## Recommendation

Proceed to the next approved phase only after an explicit task brief. Do not activate EN/RO routes, hreflang, language switcher, sitemap expansion or localized SEO output as an implicit follow-up to this audit.
