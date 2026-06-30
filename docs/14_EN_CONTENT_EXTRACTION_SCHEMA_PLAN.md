# ME-I18N-14 - EN Content Extraction & Schema Plan

Planning date: 2026-06-30

Baseline commit: `ce087fb1eb0659cc91a272138990023cb9e50339`

Mode: documentation-only planning. No runtime routing, SEO output, content extraction or public EN/RO activation is implemented by this document.

## Files Inspected

Governance and planning:

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
- `docs/13_I18N_FOUNDATION_READINESS_AUDIT.md`

I18N foundation:

- `data/i18n/types.ts`
- `data/i18n/locales.ts`
- `data/i18n/routes.ts`
- `data/i18n/routeBridge.ts`
- `data/i18n/runtimeRoutes.ts`
- `data/i18n/seoBridge.ts`
- `data/i18n/seoRuntimeRoutes.ts`

Runtime, SEO and validation:

- `App.tsx`
- `entry-server.tsx`
- `seo/seoConfig.ts`
- `components/seo/SEO.tsx`
- `scripts/check-i18n-output.mjs`
- `package.json`

Content surfaces:

- `pages/**/*.tsx`
- `components/**/*.tsx`
- `data/**/*.ts`
- `seo/**/*.ts`

## Current Hardcoded Content Summary

The current Bulgarian content is not centralized. It is distributed across page files, shared components, layout components, FAQ data modules and SEO configuration.

Observed hardcoded content categories:

- Page hero titles, subtitles, badges, CTA labels, image alt text and section copy in `pages/**`.
- Detail page data objects passed into `ServiceDetailLayout`, `SolutionDetailLayout` and `IndustryDetailLayout`.
- Navigation labels and dropdown link labels in `components/layout/Navbar.tsx`.
- Footer labels, legal labels, service links, address copy and copyright copy in `components/layout/Footer.tsx`.
- Contact form labels, placeholders, validation messages, mailto subject/body labels, submit state text and sidebar trust copy in `components/shared/ContactForm.tsx`.
- Shared CTA text and image text overlays in `components/shared/ContactCTA.tsx`.
- Shared process/testimonial/logo strip copy in `components/shared/**`.
- FAQ question/answer arrays in `data/*Faq.ts`.
- SEO titles, descriptions, Open Graph image references and schema text fields in `seo/seoConfig.ts`.
- Image alt text and technical overlay labels across page/detail components.
- Legal page body text in `pages/legal/*.tsx`.

The strongest existing pattern is that detail pages already pass structured content objects into layout components. That pattern should be preserved and moved into typed locale content modules instead of inventing a new rendering model.

## Content Surface Inventory

### Global UI

- Brand name: currently repeated as `Mall Electro`.
- Contact constants: centralized in `utils/siteConfig.ts`, but surrounding labels are not localized.
- Generic buttons: CTA labels are hardcoded in pages and shared components.
- Image alt text: hardcoded near image usage.
- Technical overlay labels: hardcoded in shared and detail components.

### Navigation

Current implementation:

- `Navbar.tsx` contains `navItems`, `serviceLinks`, `solutionLinks` and `industryLinks` arrays.
- Labels and hrefs are coupled in the same objects.
- Hrefs are BG localized paths.
- There is no locale-aware navigation source.

Extraction requirement:

- Keep route identity separate from visible labels.
- Future navigation content should reference `routeKey` values, not duplicate href strings as the primary identity.
- Hrefs should be resolved from locale route data only after the locale is active.

### Footer

Current implementation:

- Footer service links and legal links are local arrays.
- Menu labels, section headings, legal labels, address copy and copyright text are hardcoded.
- Some links use `Link`, while menu links still use anchor tags.

Extraction requirement:

- Footer labels should move to a `footer` namespace.
- Link targets should use route keys or approved external constants.
- Address and company identity should be split into stable business constants and localized display text.

### Forms

Current implementation:

- `ContactForm.tsx` stores project type options, labels, placeholders, validation errors, aria text, helper text and success text locally.
- Mailto subject/body labels are hardcoded in the submit handler.

Extraction requirement:

- Form strings need a dedicated `forms.contact` schema.
- Validation messages and mailto labels must be localized together.
- Project type options need stable option keys, not localized text as the only value.

### Shared CTA

Current implementation:

- `ContactCTA.tsx` has hardcoded badge, headline, body, button labels, image alt text and overlay labels.
- It uses the shared site phone constant but not localized CTA copy.

Extraction requirement:

- Shared CTA copy should move to `cta.primaryContact` or `common.cta`.
- Button labels should be shared where possible but overrideable per page.

### Overview Pages

Current implementation:

- `Home.tsx` composes home components whose content is mostly inside `components/home/**`.
- `Services.tsx`, `Solutions.tsx`, `About.tsx`, `Industries.tsx` and `Contact.tsx` contain page-specific hardcoded content.

Extraction requirement:

- Each overview page should have a page-level namespace.
- Home is component-split today, so extraction must include `components/home/**` and not only `pages/Home.tsx`.

### Service Detail Pages

Current implementation:

- Six service pages use `ServiceDetailLayout`.
- Each service page passes structured data: `hero`, `overview`, `suitability`, `process`, `faq`, `related`.
- FAQ content is externalized in `data/*Faq.ts`, but only as BG arrays.

Extraction requirement:

- Service page content should be grouped under `serviceDetails`.
- Each service should have a stable `contentKey` such as `serviceElectricPanels`.
- FAQ data should either become part of the same localized content entry or be imported from a parallel localized FAQ namespace.

### Solution Detail Pages

Current implementation:

- Six solution pages use `SolutionDetailLayout`.
- Each page passes structured sections: `hero`, `context`, `included`, `services`, `industries`, `process`, `technical`, `faq`, `cta`.
- Some default CTA fallback text still lives inside `SolutionDetailLayout`.

Extraction requirement:

- Solution content should be grouped under `solutionDetails`.
- Default layout fallback copy should move to shared localized content before EN activation.
- Linked service/industry cards should reference route keys plus localized labels/text.

### Industry Detail Pages

Current implementation:

- Six industry pages use `IndustryDetailLayout`.
- Each page passes structured sections: `hero`, `overview`, `systems`, `projectNeeds`, `process`, `faq`, `relatedIndustries`.
- A default "all industries" button label remains inside the layout component.

Extraction requirement:

- Industry content should be grouped under `industryDetails`.
- Industry terminology must follow ADR-005 and the terminology guide.
- Related industry cards should not infer labels from slugs.

### Legal Pages

Current implementation:

- `PrivacyPolicy.tsx`, `CookiePolicy.tsx` and `TermsOfUse.tsx` contain page hero copy and legal body copy directly.
- SEO entries exist separately in `seo/seoConfig.ts`.

Extraction requirement:

- Legal content needs a dedicated `legal` namespace because it has longer structured body sections and may require legal review per locale.
- EN legal content should not be generated as placeholder text.

### SEO And Schema

Current implementation:

- `seo/seoConfig.ts` contains BG titles and descriptions for all public routes.
- Schema generators contain localized text fields for address, service name, service types and breadcrumb item names.
- FAQ schema uses `data/*Faq.ts` question and answer text.

Extraction requirement:

- SEO metadata should move to an `seo` content namespace only after visible content extraction foundations are stable.
- Schema text should be modeled separately from visible page copy when fields have schema-specific wording.
- Breadcrumb text should not use full page title by default if future localized UX needs shorter labels.

## Recommended Content Namespace Model

Future locale content should live under:

```txt
data/i18n/content/
  types.ts
  contentKeys.ts
  contentBridge.ts
  bg/
  en/
  ro/
  shared/
```

Recommended namespaces:

- `common`: brand labels, generic CTA labels, repeated status labels, reusable industrial terms.
- `navigation`: top navigation, dropdowns, mobile menu labels.
- `footer`: footer sections, legal link labels, address display labels.
- `forms`: contact form labels, placeholders, options, validation messages, mailto labels and helper messages.
- `cta`: shared CTA blocks such as `ContactCTA`.
- `home`: Home-specific component copy.
- `servicesOverview`: Services overview page content.
- `serviceDetails`: service detail page content keyed by content key.
- `solutionsOverview`: Solutions overview page content.
- `solutionDetails`: solution detail page content keyed by content key.
- `about`: About page content.
- `industriesOverview`: Industries overview page content and industry overview components.
- `industryDetails`: industry detail page content keyed by content key.
- `contact`: Contact page hero and local contact-page copy.
- `legal`: privacy, cookie and terms page content.
- `seo`: SEO title, description, OG image and noindex/include flags where localized content owns metadata.
- `schema`: schema-specific localized text fragments.
- `media`: localized alt text and non-visual image metadata where needed.

The names above are intentionally aligned to current page groups and layout component boundaries. They should not be collapsed into one large translation object.

## Recommended TypeScript Schema Model

Use TypeScript files rather than JSON. This aligns with ADR-006 and the existing `data/` layer.

Recommended future types:

```ts
export type ContentKey =
  | "home"
  | "servicesOverview"
  | "serviceElectricPanels"
  | "serviceCableRoutes"
  | "serviceIndustrialElectricalInstallations"
  | "serviceAutomation"
  | "serviceLowVoltage"
  | "serviceMaintenance"
  | "solutionsOverview"
  | "solutionNewProductionSite"
  | "solutionModernization"
  | "solutionCableInfrastructureBase"
  | "solutionServiceExpansion"
  | "solutionHeightInstallation"
  | "solutionPanelAutomationLine"
  | "about"
  | "industriesOverview"
  | "industryHvp"
  | "industryZarnoprerabotka"
  | "industryMelnitsi"
  | "industryAgro"
  | "industryLogistika"
  | "industryProizvodstveniPredpriyatiya"
  | "contact"
  | "privacyPolicy"
  | "cookiePolicy"
  | "termsOfUse"
  | "notFound";
```

Recommended future bridge:

```ts
interface ContentBridgeDefinition {
  routeKey: RouteKey;
  pageKey: RuntimePageKey;
  seoKey: SeoPageKey;
  contentKey: ContentKey;
  namespace: ContentNamespace;
}
```

Recommended schema principles:

- Use explicit interfaces for reusable section shapes.
- Keep page detail schemas close to existing layout prop shapes.
- Do not use free-form `Record<string, string>` for page content except narrow shared label maps.
- Use stable keys for form options and card identities.
- Keep media alt text inside content schema or a dedicated media namespace, not in route config.
- Keep `href` generation separate from localized labels; prefer `routeKey` in content references.

## RouteKey / PageKey / SeoKey / ContentKey Responsibility Model

The accepted identity model must be preserved and extended:

- `routeKey`: canonical logical route identity.
- `pageKey`: runtime component/page lookup target.
- `seoKey`: SEO metadata lookup target.
- `contentKey`: localized content namespace lookup target.
- `path`: locale-specific URL input/output layer.

Do not assume:

- `routeKey === pageKey`
- `routeKey === seoKey`
- `routeKey === contentKey`
- `pageKey === seoKey`
- `seoKey === contentKey`

Required strategy:

- Add an explicit `routeKey -> contentKey` bridge before extracting real content.
- Keep content lookup independent from route slugs.
- Keep runtime routing BG-only until activation is separately approved.
- Keep SEO lookup independent so localized SEO can be validated before sitemap expansion.

## Page Content Extraction Map

| Surface | Current location | Future namespace | Recommended extraction priority |
| --- | --- | --- | --- |
| Home overview | `pages/Home.tsx`, `components/home/**` | `home` | Medium |
| Services overview | `pages/Services.tsx` | `servicesOverview` | Medium |
| Service details | `pages/services/*.tsx`, `data/*Faq.ts` | `serviceDetails` | Medium-high |
| Solutions overview | `pages/Solutions.tsx` | `solutionsOverview` | Medium |
| Solution details | `pages/solutions/*.tsx`, `data/solution*Faq.ts` | `solutionDetails` | Medium-high |
| About | `pages/About.tsx`, `components/about/About.tsx` | `about` | Medium |
| Industries overview | `pages/Industries.tsx`, `components/industries/**` | `industriesOverview` | Medium |
| Industry details | `pages/industries/*.tsx`, `data/*IndustryFaq.ts` | `industryDetails` | Medium-high |
| Contact | `pages/Contact.tsx`, `ContactForm.tsx` | `contact`, `forms` | High |
| Legal | `pages/legal/*.tsx` | `legal` | Low until legal review |
| Not found | `pages/NotFound.tsx`, `seo/seoConfig.ts` | `notFound` | Low |

## Shared Component String Extraction Map

| Component | Hardcoded strings | Future namespace |
| --- | --- | --- |
| `Navbar.tsx` | main nav, dropdown labels, mobile menu aria label | `navigation` |
| `Footer.tsx` | menu headings, service/legal labels, address display, copyright | `footer` |
| `ContactCTA.tsx` | badge, headline, body, buttons, alt text, overlay labels | `cta` |
| `ContactForm.tsx` | labels, placeholders, errors, options, mailto subject/body, helper text | `forms.contact` |
| `Process.tsx` | process step labels and intro | `common.process` or page-specific override |
| `FAQSection.tsx` | structural component only, receives localized items | none beyond props |
| `PageHero.tsx` | structural component, receives localized hero props | none beyond props |
| `ServiceTile.tsx` | structural labels such as CTA/read-more text if present | `common.cards` |
| `LogoStrip.tsx` | partner/brand strip labels if visible | `common.trust` |
| `Testimonials.tsx` | testimonial copy and author labels | `common.testimonials` |

## Navigation And Footer Extraction Notes

Navigation and footer should be extracted before page bodies because they are global and repeated on every route.

Recommended model:

- `navigation.main`: ordered entries with `routeKey` and localized `label`.
- `navigation.services`: service dropdown entries with `routeKey` and localized `label`.
- `navigation.solutions`: solution dropdown entries with `routeKey` and localized `label`.
- `navigation.industries`: industry dropdown entries with `routeKey` and localized `label`.
- `footer.sections`: localized section headings.
- `footer.links`: route-keyed links.
- `footer.contact`: localized address labels and contact headings.

Do not expose EN navigation until EN pages are production-ready. A language switcher remains blocked.

## Form String Extraction Notes

Contact form extraction should use stable option keys:

```ts
type ContactProjectTypeKey =
  | "industrialElectricalInstallation"
  | "panelsAndAutomation"
  | "maintenanceAndService"
  | "other";
```

The displayed option label should be localized, while submitted values should remain stable enough for internal processing.

The mailto subject/body must be localized consistently with form labels. Validation messages must be extracted with placeholders where needed.

## SEO Metadata Extraction Notes

SEO content extraction should not be the first implementation step. It should follow visible content schema stabilization.

Future SEO namespace should include:

- title
- description
- ogImage
- noindex
- includeInSitemap
- canonical text dependencies where needed

SEO route output must remain BG-only until EN visible content, EN SEO metadata and route parity are proven. Hreflang must remain blocked until localized SEO exists.

## Schema.org Text Extraction Notes

Schema text is currently generated in `seo/seoConfig.ts` and FAQ schema consumes `data/*Faq.ts`.

Future schema localization should cover:

- Organization/LocalBusiness display address fields where locale-specific presentation is needed.
- Service schema `name` and `serviceType`.
- Breadcrumb item labels.
- FAQ question and answer text.
- Any future industry/service schema text fields.

Schema content should not blindly reuse visible section copy if schema wording needs shorter or more structured text.

## BG Source Content Preservation Strategy

Bulgarian remains the source language.

Before EN content population:

1. Freeze a reviewed BG content snapshot.
2. Extract BG content into typed modules without changing visible output.
3. Compare rendered BG pages before and after extraction.
4. Keep current BG route count and sitemap count unchanged.
5. Run `npm run check:i18n-output` after every output-sensitive change.

Do not translate from mojibake-rendered terminal output. Translation should be based on correctly encoded source files or reviewed copy documents.

## EN-First Rollout Strategy

Recommended Sprint 10 sequence:

1. Define typed content schemas and `contentKey` bridge.
2. Extract shared BG UI strings without changing rendered BG output.
3. Extract navigation/footer BG strings without changing rendered BG output.
4. Extract CTA and form BG strings without changing rendered BG output.
5. Extract page hero BG strings.
6. Extract overview page BG sections.
7. Extract service, solution and industry detail BG content.
8. Extract BG SEO and schema text into locale-aware structures.
9. Populate EN content in inactive modules.
10. Validate EN route/content/SEO parity without public exposure.
11. Activate a limited EN allowlist only after content and SEO are complete.

## RO Deferral Strategy

Romanian must remain deferred until the EN workflow proves:

- content schema coverage
- route/content/SEO parity
- EN terminology quality
- QA process
- output guard update strategy
- safe sitemap and hreflang expansion plan

RO files may exist later as empty or planned typed shells only if a task explicitly approves them. No RO public activation should happen before EN is validated in production-equivalent output.

## EN Activation Boundary

EN must remain inactive until all of the following are true:

- EN visible content exists for the selected route allowlist.
- EN SEO metadata exists for the selected route allowlist.
- EN schema text exists where required.
- EN route/content/SEO parity is validated.
- Output guard is intentionally updated for the approved EN output scope.
- Hreflang plan is approved.
- Sitemap expansion plan is approved.
- Language switcher exposure is approved.

Activation must use an explicit public route allowlist. Do not activate EN by iterating all `SUPPORTED_LOCALES`.

## Explicit Blocked Items

- Do not activate RO before EN is validated.
- Do not add hreflang before localized SEO metadata exists.
- Do not expand sitemap before route/content/SEO parity is proven.
- Do not add language switcher before target pages are production-ready.
- Do not expose `/en/` routes during content extraction.
- Do not expose `/ro/` routes during content extraction.
- Do not publish translated placeholder pages.
- Do not use route slugs as content identity.
- Do not assume all current page strings can be safely machine-translated without terminology review.

## Risks

- `PROJECT_BOOTSTRAP.md`, `docs/00_PROJECT_STATUS.md`, `docs/01_NEXT_ACTIONS.md` and `docs/02_ACTIVE_SPRINT.md` still describe Sprint 9 / ME-I18N-13 as current, although ME-I18N-13C has been committed and this task starts Sprint 10. This is governance drift, not an implementation blocker for this documentation-only package.
- Several documents and terminal-rendered file reads show visible encoding artifacts. Translation extraction must use correctly encoded source content and reviewed BG copy.
- Navigation currently couples labels and href strings; careless extraction could duplicate route truth outside `data/i18n/routes.ts`.
- Contact form options currently use localized text as option values; extraction should introduce stable option keys before EN.
- SEO and schema text are mixed in `seo/seoConfig.ts`; moving them too early could affect prerender output if not protected by tests.
- Legal pages require review before EN publication and should not be generated as placeholder translations.
- Some shared layouts contain fallback BG text; these must be found and extracted before EN activation.

## Recommended ME-I18N-15 Package

Recommended next task:

`ME-I18N-15 - ContentKey Foundation & Schema Skeleton`

Recommended scope:

- Add typed `ContentKey` and `ContentNamespace` definitions.
- Add a typed `routeKey -> contentKey` bridge.
- Add empty/schema-only content module structure under `data/i18n/content/`.
- Do not extract real page copy yet.
- Do not add EN/RO content.
- Do not wire runtime rendering to the new content layer.
- Preserve BG-only runtime, SEO, prerender and sitemap output.
- Run `npm run typecheck`, `npm run build` and `npm run check:i18n-output`.

Reason:

This creates the missing identity layer safely before touching visible copy. It is large enough to justify a Codex package but narrow enough to preserve current BG production output.

## Final Planning Decision

Status: READY FOR ME-I18N-15

The project is ready to proceed to a schema-only `contentKey` foundation task. It is not ready to activate EN routes, add hreflang, expand sitemap or expose a language switcher.
