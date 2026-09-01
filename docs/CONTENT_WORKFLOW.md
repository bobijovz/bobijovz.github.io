# Content Workflow

This document describes the content authoring and publishing workflow for the portfolio site. It includes the frontmatter schema for case studies, the publish flow, and a review checklist so contributors can add content without breaking templates.

## Frontmatter Schema (case-study.md)
Use this frontmatter in every case study (YAML):

---
title: "Short, descriptive title"
date: 2026-09-01
slug: "short-dash-slug"
summary: "One-sentence summary for previews"
role: "Your role (e.g., Lead Engineer)"
technologies: ["React", "Next.js"]
problem: "Short problem statement"
approach: "Short approach summary"
outcome: "Measured outcome or qualitative result"
images:
  - src: "/images/case1/hero.jpg"
    alt: "Alt text"
    caption: "Optional caption"
draft: false
---

Notes:
- `slug` should be URL-safe (lowercase, hyphens). If omitted, it will be derived from `title`.
- `date` is ISO-8601; use utc dates.
- `draft: true` excludes a case study from production builds.

## Publish Flow
1. Create a new file in `docs/case-studies/` using the provided template `docs/case-study-template.md`.
2. Fill frontmatter and body. Verify images exist and are optimized.
3. Commit to a feature branch named `case/<slug>` and open a PR. PR title: `Add case study: <title>`.
4. Assign reviewer (content owner + one technical reviewer). Reviewer checks: frontmatter schema, factual claims, image sizes, and accessibility.
5. When PR is approved and CI passes, merge to main. CI should run static-checks and frontmatter validation.
6. After merge, preview deploy verifies rendering; if visual issues are found, fix in a follow-up PR.

## Review Checklist (apply on every new case study)
- [ ] Frontmatter complete and valid
- [ ] No fabricated or unverifiable claims (see CLAIM_VERIFICATION.md)
- [ ] Images have alt text and appropriate sizes (srcset where possible)
- [ ] Accessibility checks: keyboard navigation, focus states, contrast
- [ ] Performance mindful: images optimized and lazy-loaded where appropriate
- [ ] MDX renders correctly in preview
- [ ] PR includes at least one technical reviewer and one content reviewer

## Automation
- Add a lightweight frontmatter schema validator in CI to fail on missing required fields.
- Enforce `draft: true` default for in-progress content to avoid accidental publish.

## Where to add new templates
- Case studies: `docs/case-studies/`
- Use `docs/case-study-template.md` as the starting point.
