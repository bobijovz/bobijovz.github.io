---
title: JJ Granados Technical Portfolio Implementation Plan
created: 2026-09-01
updated: 2026-09-01
status: planning-ready
---

# Implementation Plan

## Delivery Order

### Epic 1 — Foundation
- Initialize Next.js + TypeScript
- Configure linting/formatting
- Establish design tokens
- Establish folder structure
- Configure preview deployment using GitHub Actions (preview builds on pull requests)

### Epic 2 — Global UI
- Header
- Navigation
- Footer
- Buttons
- Typography
- Responsive container
- Accessibility primitives

### Epic 3 — Homepage
- Hero
- Selected work
- Engineering approach
- Career story
- Independent projects
- Toolbox
- Experience
- AI engineering
- Contact

### Epic 4 — Case Study System
- MDX pipeline
- Frontmatter
- Dynamic route
- Case study header
- Content sections
- Before/after component
- Technical diagram component

### Epic 5 — Content
- GCash
- Xamarin to .NET MAUI
- Damstra Learn
- Tara Tsek
- TaxPH
- TrainsPH
- Current projects
- Career history

### Epic 6 — Quality
- SEO
- Performance
- Accessibility
- Image optimization
- Reduced motion
- Lighthouse review

### Epic 7 — Production
- Domain
- Analytics
- Production deployment to GitHub Pages via GitHub Actions
- Final content review
- Final visual review

## Definition of Done
- Acceptance criteria pass.
- Responsive behavior verified.
- Accessibility verified.
- No unsupported claims.
- Code formatted and linted.
- Relevant tests pass.
- Visual review completed.

## Planning Gate
Before implementation, run the current BMAD story/epic planning workflow using:
- prd.md
- DESIGN.md
- EXPERIENCE.md
- architecture.md

The resulting stories become the implementation contract.

## Implementation Constraints
Do not build a backend or database without a real requirement.
Do not add a CMS until content-management pain exists.
Do not add heavy animation libraries solely to reproduce a prototype.
Do not build the whole site as one large component.
