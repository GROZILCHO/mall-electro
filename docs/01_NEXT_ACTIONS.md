# Mall Electro Next Actions

Last updated: 2026-06-29

## Immediate Actions

1. Confirm production deployment package and deployment checklist.
2. Freeze current Bulgarian overview content as the reference baseline.
3. Define multilingual route structure for BG, EN and RO.
4. Define localization ownership for copy, SEO metadata and UI labels.
5. Audit current text sources that must be externalized before language rollout.

## Deployment Actions

1. Use the full production build flow from `npm run build`.
2. Validate final `dist/` contents before upload.
3. Verify `.htaccess` SPA fallback and caching behavior on hosting.
4. Test direct loads on all current public routes after deployment.
5. Validate prerendered output, sitemap and robots after deployment.

## Multilingual Preparation Actions

1. Decide final locale URL structure.
2. Define translation file strategy and content ownership.
3. Identify reusable text groups:
   - navigation
   - page hero content
   - CTA copy
   - service labels
   - industry labels
   - contact labels
   - SEO titles and descriptions
4. Prepare BG master terminology before any EN or RO translation begins.
5. Define hreflang, canonical and sitemap generation rules per locale.

## Content Actions

1. Review Bulgarian source copy for consistency and technical clarity.
2. Normalize service naming across all pages and future routes.
3. Normalize industry naming across all pages and future routes.
4. Keep B2B engineering tone consistent across translated versions.

## SEO Actions

1. Preserve current SEO route setup.
2. Plan localized metadata per route, not shared metadata across languages.
3. Prevent publication of incomplete translated routes.
4. Add locale-aware sitemap logic when multilingual routing is introduced.

## Delivery Sequence

1. Production deployment
2. Multilingual architecture setup
3. Bulgarian text externalization pass
4. English localization
5. English QA
6. Romanian localization
7. Romanian QA

## Explicit Non-Actions

Do not do these during this phase:

- redesign Home
- redesign Industries
- publish thin translated placeholder pages
- add public routes without SEO/prerender alignment
- modify approved design tokens or component strategy
