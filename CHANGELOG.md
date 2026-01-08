# Changelog

All notable changes to the Malible Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### To Do
- [ ] Button component (Tier 1)
- [ ] Input component (Tier 1)
- [ ] Card component (Tier 1)
- [ ] Badge component (Tier 1)
- [ ] Alert component (Tier 1)

---

## [0.1.0] - 2026-01-09

### Added - Token Foundation
- **Primitives collection** (90 variables)
  - 7 color scales: neutral, orange, red, blue, green, amber, purple
  - 2 base colors: white, black
  - 8 spacing values: 0, 2, 4, 8, 12, 16, 24, 32
  - 3 radius values: 4, 8, full (9999)
  
- **Theme collection** (28 variables)
  - 20 ShadCN core variables (background, foreground, primary, etc.)
  - 8 extended variables (success, warning, info, canvas)
  - All reference Primitives directly (no semantic middle layer)

### Added - Documentation
- README.md - Project overview and navigation
- PROJECT_STRUCTURE.md - File organization and conventions
- TOKEN_SYSTEM.md - Complete token reference with rationale
- AI_CONTEXT_GUIDE.md - How to work effectively with Claude/Cursor
- ANTI_PATTERNS.md - What NOT to do (critical violations)
- CHANGELOG.md - This file
- QUICK_START.md - Fast onboarding guide
- DESIGN_DECISIONS.md - Architectural choices and rationale

### Decisions Made
- **2-layer token system** over 3-layer
  - Primitives → Theme (semantic layer is documentation only)
  - Rationale: Implementation sanity > semantic purity
  
- **8 spacing values** instead of 11
  - Removed 6px, 10px, 20px from scale
  - Rationale: Reduces cognitive load, aligns to 4/8px grid
  
- **ShadCN naming** without prefixes
  - Variables named `--primary`, not `--general-primary`
  - Rationale: Direct compatibility with ShadCN components
  
- **State handling via modifiers**, not tokens
  - No `--primary-hover`, `--primary-active` tokens
  - Rationale: States are interaction physics, not design tokens

### Architecture Principles Established
1. Implementation sanity > semantic purity
2. No component-specific tokens
3. No state-specific tokens  
4. Every token must justify 5+ usages
5. ShadCN structure is non-negotiable
6. Figma is source of truth for design

---

## Version Guidelines

### Version Numbers
- **Major (x.0.0)**: Breaking changes to token structure or architecture
- **Minor (0.x.0)**: New components, new tokens (non-breaking)
- **Patch (0.0.x)**: Bug fixes, documentation updates

### When to Bump Versions

**Major version bump (breaking change):**
- Removing tokens
- Renaming tokens
- Changing token architecture
- Breaking API changes in components

**Minor version bump (new features):**
- Adding new components
- Adding new tokens (following rules)
- Non-breaking component enhancements

**Patch version bump (fixes):**
- Bug fixes
- Documentation updates
- Refactoring without API changes
- Hex value adjustments (same semantic meaning)

---

## Template for Future Entries

```markdown
## [x.x.x] - YYYY-MM-DD

### Added
- New feature or component
- What was added and why

### Changed
- What changed
- Migration path if breaking

### Fixed
- Bug fixes
- What was wrong and how it was fixed

### Removed
- What was removed
- Why it was removed
- Migration path

### Deprecated
- What will be removed in future
- Timeline for removal
```

---

## Upcoming Milestones

### v0.2.0 - Tier 1 Components
**Target:** End of January 2026
- [ ] Button component (4 variants, 4 sizes)
- [ ] Input component (states + validation)
- [ ] Card component (variants + composition)
- [ ] Badge component (tones + sizes)
- [ ] Alert component (tones + dismissible)

### v0.3.0 - Tier 2 Components
**Target:** February 2026
- [ ] Dialog/Modal
- [ ] Select/Dropdown
- [ ] Checkbox
- [ ] Switch
- [ ] Tabs
- [ ] Avatar
- [ ] Tooltip

### v1.0.0 - Production Ready
**Target:** March 2026
- All Tier 1 & 2 components complete
- Full documentation
- Storybook/showcase
- Dark mode support
- Component tests

---

[Unreleased]: https://github.com/yourorg/malible-design-system/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/yourorg/malible-design-system/releases/tag/v0.1.0
