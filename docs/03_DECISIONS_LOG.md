# Mall Electro Decisions Log

Last updated: 2026-06-29

## Decision 001

Decision:
Home and Industries remain the approved visual baseline.

Reason:
These pages already define the correct industrial, premium and image-heavy design language for the brand.

Impact:
Future work should extend this system, not simplify or redesign it.

## Decision 002

Decision:
Bulgarian is the current source-of-truth language.

Reason:
The project is already stabilized around Bulgarian overview content and the team priority is BG-first execution.

Impact:
All future localizations must derive from reviewed Bulgarian source copy.

## Decision 003

Decision:
Multilingual rollout order is BG -> EN -> RO.

Reason:
This reduces complexity and lets the team validate architecture and translation workflow on one additional language before Romanian.

Impact:
English becomes the first localization test case for structure, metadata and route handling.

## Decision 004

Decision:
The next milestone is production deployment of the current site.

Reason:
The overview site is sufficiently built and current effort should now convert into a stable live release.

Impact:
Deployment readiness and route/hosting behavior have immediate priority.

## Decision 005

Decision:
Production deployment must use the full `npm run build` flow.

Reason:
The project includes SEO and prerender responsibilities that are not covered by a client-only build.

Impact:
Releases must preserve prerendered output, sitemap and robots generation.

## Decision 006

Decision:
No thin translated placeholder pages should be published.

Reason:
Thin translations would weaken SEO quality, brand quality and trust with industrial B2B users.

Impact:
Each localized page must contain real localized content and metadata.

## Decision 007

Decision:
Locale-aware route and SEO architecture must be planned before major translation rollout.

Reason:
Retrofitting canonical, hreflang, sitemap and route logic late would create unnecessary migration risk.

Impact:
Architecture and documentation work must precede large-scale translation.

## Decision 008

Decision:
Terminology control is required before EN and RO localization.

Reason:
Industrial electrical terminology must remain technically accurate and consistent across services, industries and CTAs.

Impact:
Translation work must follow a shared terminology guide rather than ad hoc wording choices.
