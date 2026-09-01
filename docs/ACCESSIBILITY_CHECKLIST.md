# Accessibility Checklist (WCAG 2.2 AA - Primary Flows)

This checklist captures concrete verification steps for primary site flows (homepage, case-study pages, contact path).

Core checks
- [ ] Semantic HTML (headings in order, landmarks present)
- [ ] Keyboard navigation: all interactive elements reachable and operable via keyboard
- [ ] Focus states visible and logical tab order
- [ ] Color contrast meets WCAG 2.2 AA for text and interactive elements (use automated and manual checks)
- [ ] Alt text provided for informative images; decorative images should have empty alt
- [ ] Reduced motion respected (@media (prefers-reduced-motion: reduce))
- [ ] Form labels and error states accessible to screen readers

Performance/accessibility automation suggestions
- Run axe-core or equivalent in CI for PRs affecting UI
- Include at least one manual accessibility test during QA (keyboard-only navigation + screen reader spot-check)

Recording results
- Put checklist outcomes in the PR template or screenshots in the PR description for the reviewer to verify.
