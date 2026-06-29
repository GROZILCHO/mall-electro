# Mall Electro - AI Project Bootstrap

## Purpose

This file is the mandatory entry point for every AI assistant, ChatGPT specialist and Codex session working on Mall Electro.

It is a navigational document. It must point agents to the correct project sources of truth and must not duplicate detailed technical documentation.

## Project

Name: Mall Electro

Type: Industrial B2B Website

Technology:

- React
- TypeScript
- Vite
- Tailwind CSS

## Current Project Phase

Sprint: Stabilization before Sprint 9

Current Focus: Design System Relock and Architecture Baseline

The current objective is to stabilize governance, Design System documentation and validation scripts before the Sprint 9 multilingual foundation work begins.

Sprint 9 will prepare the application architecture for future multilingual support:

- BG
- EN
- RO

Translations are not being implemented yet.

## Current Status

The project has completed:

- Design System
- Main page implementation
- Component architecture
- Documentation foundation
- Architecture Decision Records

The next implementation phase is multilingual foundation after stabilization is approved.

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

Always:

- reuse existing components
- follow the Design System
- respect Architecture Decision Records
- keep changes scoped to the approved task

## Current Sprint Goal

Relock the Design System and architecture baseline while keeping the existing Bulgarian website visually and functionally unchanged.

## Success Criteria

The project remains:

- modular
- scalable
- maintainable
- production-ready
- prepared for BG / EN / RO expansion

## Restrictions

Do not implement i18n.

Do not translate content.

Do not add routes.

Do not redesign UI.

Do not modify components, pages or styles unless a task explicitly approves that scope.

Documentation and validation-script changes are allowed when explicitly requested.
