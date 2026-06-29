# Mall Electro Project Status

Last updated: 2026-06-29

## Project Snapshot

Mall Electro is a React/Vite B2B industrial website focused on electrical systems, electrical panels, industrial electrical installations, cable routes, automation, low-voltage systems and engineering execution.

The approved overview page set is in place:

- Home
- Services
- About
- Industries
- Contact

The current product direction is:

1. Keep the Bulgarian site stable as the source version.
2. Prepare the site architecture for multilingual rollout.
3. Deploy the current production-ready build safely.

## Current State

### Built and available

- Main overview routes are implemented and working.
- Core CTA/contact flow exists.
- Production build workflow exists in `package.json`.
- SEO/prerender workflow exists and must be preserved for production releases.
- Approved design baseline is already established through Home and Industries.

### Stabilized areas

- Main page structure is in place.
- Shared industrial visual language is in place.
- Contact and routing basics are in place.
- Deployment path for static hosting is understood.

### Active constraints

- The Bulgarian version remains the source of truth.
- No thin translated shells should be published.
- Future route changes must stay aligned with SEO config, prerender output and sitemap generation.
- Home and Industries should not be visually simplified.

## Current Priority

The active project priority is multilingual implementation in this order:

1. BG baseline preservation
2. EN implementation
3. RO implementation

This means the team should not start with direct text replacement only. The correct path is content architecture, route strategy, SEO language strategy and terminology control first.

## Next Milestone

The next milestone is production deployment of the current approved site build, followed by multilingual foundation work.

Milestone goal:

- Stable deployment of current Bulgarian site
- No broken routes
- Correct SPA fallback
- Correct prerender/SEO output
- Documentation ready for multilingual execution

## Risks

- Multilingual work can fragment the current SEO setup if routing, canonical and hreflang logic are added inconsistently.
- Translation without a terminology guide will create inconsistent industrial language.
- Route expansion without synchronized SEO/prerender updates can cause crawl and indexing issues.
- Direct deployment shortcuts can bypass the full build flow if the wrong command is used.

## Recommended Operating Mode

- Treat Bulgarian content as the master content layer.
- Treat English as the first target localization after architecture is prepared.
- Treat Romanian as the third language layer after EN patterns are validated.
- Keep code changes narrow and documentation-led during the multilingual preparation phase.
