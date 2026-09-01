---
title: JJ Granados Technical Portfolio Architecture
created: 2026-09-01
updated: 2026-09-01
status: approved
---

# Architecture: JJ Granados Technical Portfolio

## Architecture Summary
Static-first, content-driven web application.

Recommended stack:
- Next.js
- React
- TypeScript
- MDX
- CSS/design tokens
- GitHub
- GitHub Pages + GitHub Actions (CI/CD)

No database or runtime backend is required for V1.

## Principles
1. Static-first
2. Content separated from presentation
3. Component-driven UI
4. Reusable case-study system
5. Minimal runtime dependencies
6. Accessibility by default
7. SEO and performance by default
8. Easy content updates
9. Avoid premature infrastructure

## High-Level Architecture

```text
Next.js Application
├── UI Components
├── Content
│   ├── MDX Case Studies
│   ├── Projects
│   └── Experience
├── Static Generation
└── GitHub Pages (deployed via GitHub Actions)
```

## Rendering
Prefer static generation and Server Components. Use Client Components only where interaction requires them.

## Suggested Structure

```text
src/
  app/
    page.tsx
    work/[slug]/page.tsx
    experience/page.tsx
    about/page.tsx
    contact/page.tsx
    sitemap.ts
    robots.ts
    layout.tsx
  components/
    layout/
    hero/
    work/
    experience/
    approach/
    toolbox/
    ai/
    contact/
  content/
    case-studies/
    projects/
    experience/
  lib/
  styles/
public/
  images/
  resume/
```

## Content Architecture
Use MDX with structured frontmatter.

Example:

```yaml
---
slug: gcash
title: GCash
category: Architecture Modernization
role: Android Developer
technologies:
  - Kotlin
  - Java
  - RxJava
status: published
featured: true
---
```

## Case Study Model
- slug
- title
- category
- role
- technologies[]
- status
- featured
- summary
- heroImage?
- publishedAt?
- content

## Project Model
- slug
- title
- category
- description
- technologies[]
- status
- featured
- link?
- image?

## Experience Model
- period
- company
- role
- technologies[]
- summary
- highlights[]

## Styling
Use CSS variables/design tokens. Prefer CSS-first animation. Avoid a large UI framework unless proven necessary.

## SEO
Per-route title, description, canonical URL, Open Graph metadata and appropriate structured data. Generate sitemap and robots.

## Analytics
Use privacy-conscious analytics. Track only useful events such as case-study opens, résumé clicks and contact/social clicks.

## Deployment
GitHub -> GitHub Actions CI (preview builds) -> GitHub Pages production.

## Security
No authentication, database credentials or custom server secrets required for V1. Use mail links rather than a custom contact backend initially.

## Performance Targets
Initial goals:
- Lighthouse Performance 90+
- Accessibility 95+
- Best Practices 95+
- SEO 95+

Prioritize real Core Web Vitals.

## ADRs

### ADR-001: Next.js
Chosen for static/content capabilities, React/TypeScript ecosystem, SEO and deployment simplicity.

### ADR-002: No Database
The portfolio is primarily static content; a database adds complexity without V1 value.

### ADR-003: MDX
Chosen for content-heavy technical case studies and reusable technical components.

### ADR-004: No CMS
Version-controlled content is appropriate because the owner is a developer and V1 has limited publishing complexity.

### ADR-005: Static-First
Chosen for performance, reliability and low operational complexity.

### ADR-006: Architecture Is a Capability
Do not position the user as an Architecture Consultant. Show architecture work as evidence of engineering ability.

## Future Evolution
The architecture leaves room for a CMS, technical blog, consultation booking, search and interactive demos, but none are V1 requirements.

## North Star
Simple infrastructure. Rich content. Reusable components. Fast delivery. Credible engineering evidence.
