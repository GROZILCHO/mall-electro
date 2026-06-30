# Mall Electro - AI Project Bootstrap

## Purpose

This file is the mandatory entry point for every AI assistant, ChatGPT specialist and Codex session working on Mall Electro.

It is a navigational document. It points agents to the correct project sources of truth and must not duplicate detailed technical documentation.

## Project

Name: Mall Electro

Type: Industrial B2B Website

Technology:

- React
- TypeScript
- Vite
- Tailwind CSS

## Current Project Phase

Current Sprint: Sprint 9 - I18N Foundation

Current Focus: BG-only i18n architecture foundation, route/SEO bridge alignment, and output safety validation.

The current objective is to keep the existing Bulgarian site visually and functionally unchanged while preparing the architecture for future multilingual support:

- BG
- EN
- RO

Translations are not implemented yet.

EN and RO routes are not public yet.

BG remains the only active public locale.

## Current Status

The project has completed:

- Design System
- Main page implementation
- Component architecture
- Documentation foundation
- Architecture Decision Records
- Typed i18n locale and route foundation
- `routeKey -> pageKey` bridge
- BG-only runtime route adapter
- `routeKey -> seoKey` bridge
- BG-only SEO runtime route adapter
- SEO registry adapter integration
- I18N output safety guard

Current clean baseline after ME-I18N-11C:

`cfe14143cc0b8b6f93800bc3ce3716ab4bb4ac96`

## Mandatory Reading Order

Before performing any task, review:

1. `PROJECT_RULES.md`
2. `AGENTS.md`
3. `docs/00_PROJECT_STATUS.md`
4. `docs/01_NEXT_ACTIONS.md`
5. `docs/02_ACTIVE_SPRINT.md`
6. `docs/06_ARCHITECTURE_DECISIONS.md`

## Project Roles

- Project Owner: Rosen Stanev - owns business direction, final approvals and project priorities.
- Project Management: PM GPT - maintains planning, status, task sequencing and documentation alignment.
- Technical Lead: Front-End Lead - defines technical direction, architecture expectations and implementation quality.
- Implementation: Component Engineer - implements UI and component-level changes within the approved design system.
- Code Execution: Codex - inspects the repository, applies approved changes, runs checks and reports results.

## Documentation Priority

When documentation conflicts, use:

1. `PROJECT_RULES.md`
2. `AGENTS.md`
3. `docs/06_ARCHITECTURE_DECISIONS.md`
4. Remaining documents in `docs/`

If contradictions exist, do not guess. Report them before implementation.

## Current Rules

Do not:

- redesign approved UI
- duplicate components
- introduce new Design System patterns
- modify architecture without approval
- implement translations before Sprint 9 foundation is approved
- expose EN/RO routes before explicit activation approval
- add language switcher, hreflang, or sitemap expansion before approval

Always:

- reuse existing components
- follow the Design System
- respect Architecture Decision Records
- keep changes scoped to the approved task
- preserve BG-only public output until activation is approved
- run `npm run check:i18n-output` after production builds when i18n output safety matters

## Current Sprint Goal

Complete the Sprint 9 i18n foundation while keeping the existing Bulgarian website visually and functionally unchanged.

## Success Criteria

The project remains:

- modular
- scalable
- maintainable
- production-ready
- prepared for BG / EN / RO expansion
- BG-only in public output until explicit multilingual activation

## Restrictions

Do not translate content.

Do not expose EN or RO routes.

Do not add language switcher or hreflang.

Do not modify components, pages or styles unless a task explicitly approves that scope.

Documentation and validation-script changes are allowed when explicitly requested.
