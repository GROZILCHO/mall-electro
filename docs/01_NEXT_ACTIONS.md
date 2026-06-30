# Mall Electro Next Actions

Last updated: 2026-06-30

## Immediate Next Action

1. Run ME-I18N-13 - I18N Foundation Final Audit / Readiness Review.

ME-I18N-13 should confirm whether Sprint 9 foundation is ready to close or whether more guard/parity work is required before any activation work begins.

## Current Baseline To Protect

Current clean baseline after ME-I18N-11C:

`cfe14143cc0b8b6f93800bc3ce3716ab4bb4ac96`

Current public output expectations:

- prerender route count remains 28
- sitemap URL count remains 27
- BG remains the only public active locale
- EN remains planned and inactive
- RO remains planned and inactive
- no `dist/en`
- no `dist/ro`
- no hreflang
- no language switcher
- no EN/RO sitemap expansion

## Required Validation For I18N Foundation Work

Run these checks when validating output-sensitive i18n foundation changes:

1. `npm run typecheck`
2. `npm run build`
3. `npm run check:i18n-output`

The output safety guard validates generated `dist/` output after `npm run build`.

## Recommended ME-I18N-13 Scope

ME-I18N-13 should audit:

- routeKey/pageKey/seoKey responsibility separation
- BG runtime route adapter coverage
- BG SEO route adapter coverage
- production SEO registry integration
- prerender and sitemap parity
- EN/RO inactive status
- output safety guard coverage
- remaining documentation or implementation drift

## Do Not Start Yet

Do not start these until ME-I18N-13 explicitly approves readiness:

- language switcher
- hreflang
- sitemap expansion for EN/RO
- EN route activation
- RO route activation
- SEO localization
- translation extraction
- content localization
- public multilingual rollout

## Deployment Actions

Production deployment remains allowed for the current BG-only site if separately approved.

Deployment checklist:

1. Use the full production build flow from `npm run build`.
2. Run `npm run check:i18n-output`.
3. Validate final `dist/` contents before upload.
4. Verify `.htaccess` SPA fallback and caching behavior on hosting.
5. Test direct loads on all current public BG routes after deployment.
6. Validate prerendered output, sitemap and robots after deployment.

## Content Actions

These remain future work and should not be mixed into foundation guard tasks:

1. Review Bulgarian source copy for consistency and technical clarity.
2. Normalize service naming across all pages and future routes.
3. Normalize industry naming across all pages and future routes.
4. Keep B2B engineering tone consistent across translated versions.

## SEO Actions

Current SEO actions are protective, not expansive:

1. Preserve BG-only SEO route output.
2. Keep localized metadata planning separate from current output.
3. Prevent publication of incomplete translated routes.
4. Do not add hreflang or EN/RO sitemap entries until localized metadata and route activation are explicitly approved.

## Explicit Non-Actions

Do not do these during the remaining Sprint 9 foundation phase:

- redesign Home
- redesign Industries
- publish translated placeholder pages
- expose EN/RO routes
- add language switcher
- add hreflang
- expand sitemap for EN/RO
- modify approved design tokens or component strategy
