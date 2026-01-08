# Project Structure

**Version:** 0.1.0  
**Last Updated:** January 2026

---

## Directory Organization

```
malible-design-system/
│
├── docs/                           # Documentation (you are here)
│   ├── PROJECT_STRUCTURE.md        # This file
│   ├── TOKEN_SYSTEM.md             # Token reference
│   ├── COMPONENT_LIBRARY.md        # Component specs
│   ├── FIGMA_SETUP.md              # Figma structure
│   ├── AI_CONTEXT_GUIDE.md         # AI workflow
│   ├── PROMPT_TEMPLATES.md         # Copy-paste prompts
│   ├── DESIGN_DECISIONS.md         # Architecture choices
│   ├── ANTI_PATTERNS.md            # What NOT to do
│   ├── QUICK_START.md              # Fast onboarding
│   └── COMPONENT_BUILD_PLAYBOOK.md # Step-by-step component creation
│
├── figma/                          # Figma exports and references
│   ├── tokens/
│   │   ├── primitives.json         # Raw color/spacing/radii values
│   │   └── theme.json              # ShadCN-compatible variables
│   ├── components/                 # Per-component exports
│   │   ├── button/
│   │   ├── input/
│   │   └── ...
│   └── assets/                     # Icons, images, etc.
│
├── src/                            # Implementation
│   ├── components/                 # React components
│   │   ├── ui/                     # ShadCN components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   └── ...
│   ├── styles/
│   │   ├── globals.css             # Theme variables
│   │   └── ...
│   ├── lib/
│   │   └── utils.ts                # Utility functions
│   └── ...
│
├── README.md                       # Project overview
├── CHANGELOG.md                    # Version history
├── package.json
├── tailwind.config.ts              # Tailwind + token config
└── tsconfig.json
```

---

## Naming Conventions

### Files and Directories

**Docs:**
- SCREAMING_SNAKE_CASE.md for top-level docs (README.md, CHANGELOG.md)
- PascalCase.md for guides (ComponentLibrary.md)
- kebab-case.md for specific topics (button-component.md)

**Code:**
- kebab-case for directories (`src/components/ui`)
- kebab-case for component files (`button.tsx`)
- PascalCase for React components (`<Button />`)
- camelCase for functions and variables

**Figma:**
- PascalCase for collections (`Primitives`, `Theme`)
- kebab-case for variables (`primary-foreground`, `neutral-500`)
- PascalCase for components (`Button`, `Input`)

---

## Token Files

### Primitives (primitives.json)
Raw values only. No semantic meaning.

```json
{
  "neutral-50": "#fafafa",
  "neutral-950": "#09090b",
  "orange-600": "#e0622d",
  "spacing-8": "8px",
  "radii-8": "8px"
}
```

**Location:** `/figma/tokens/primitives.json`  
**Source:** Exported from Figma Primitives collection  
**Updates:** When primitive values change

### Theme (theme.json)
ShadCN-compatible semantic tokens.

```json
{
  "background": "Primitives:White",
  "foreground": "Primitives:Neutral/950",
  "primary": "Primitives:Orange/600"
}
```

**Location:** `/figma/tokens/theme.json`  
**Source:** Exported from Figma Theme collection  
**Updates:** When theme mappings change (rare)

---

## Component Files

Each component gets its own directory:

```
src/components/ui/button/
├── button.tsx              # Component implementation
├── button.stories.tsx      # Storybook stories (optional)
└── button.test.tsx         # Tests (optional)
```

For now, flat structure is fine:
```
src/components/ui/
├── button.tsx
├── input.tsx
├── card.tsx
└── ...
```

---

## Documentation Structure

### Primary Docs (Always Up-to-Date)

1. **README.md** - Project overview, quick links
2. **TOKEN_SYSTEM.md** - Complete token reference
3. **COMPONENT_LIBRARY.md** - Component status, specs
4. **AI_CONTEXT_GUIDE.md** - How to resume work with AI

### Reference Docs (Updated as Needed)

5. **FIGMA_SETUP.md** - How to rebuild Figma from scratch
6. **DESIGN_DECISIONS.md** - Why we made key choices
7. **ANTI_PATTERNS.md** - What NOT to do
8. **COMPONENT_BUILD_PLAYBOOK.md** - Step-by-step component creation

### Working Docs (Updated Frequently)

9. **CHANGELOG.md** - Version history
10. **PROMPT_TEMPLATES.md** - AI prompts for common tasks

---

## Version Control Strategy

### What Gets Committed

**Always:**
- All docs in `/docs`
- README.md, CHANGELOG.md
- Token JSON files (`/figma/tokens`)
- All code (`/src`)
- Config files (package.json, tailwind.config.ts)

**Never:**
- node_modules/
- .next/, dist/, build/
- .env files
- Large binary assets (use Figma links instead)

### Figma Files

**Don't commit:**
- .fig files (too large, binary)

**Do commit:**
- JSON exports of variables
- Component screenshots (for reference)
- Links to Figma files in docs

**Figma source of truth:**
- Live Figma file is canonical
- JSON exports are snapshots for implementation
- Update JSON when tokens change

---

## Branching Strategy (When Team Grows)

**For now (solo):**
- Work directly on `main`
- Tag releases: `v0.1.0`, `v0.2.0`

**When team grows:**
```
main                    # Production-ready
├── develop             # Integration branch
├── feature/button      # Component work
├── feature/tokens      # Token updates
└── docs/update-guide   # Documentation work
```

---

## File Naming Patterns

### Components
- Component file: `button.tsx`
- Stories: `button.stories.tsx`
- Tests: `button.test.tsx`
- Types: `button.types.ts` (if needed)

### Documentation
- Overview docs: `COMPONENT_LIBRARY.md`
- Specific guides: `button-component.md`
- Reference: `token-reference.md`

### Exports
- Figma JSON: `theme-2026-01-09.json` (dated)
- Component screenshots: `button-variants.png`
- Assets: `icon-chevron-down.svg`

---

## Source of Truth Hierarchy

1. **Figma (Design)**
   - Variables: Primitives + Theme
   - Components: Button, Input, Card, etc.
   - **This is the canonical source**

2. **Documentation**
   - TOKEN_SYSTEM.md reflects current Figma state
   - COMPONENT_LIBRARY.md tracks implementation status

3. **Code (Implementation)**
   - Must match Figma design
   - Uses Theme variables from globals.css
   - Implementation details (animations, etc.) documented in code comments

**Decision flow:**
```
Design change in Figma
    ↓
Update token JSON exports
    ↓
Update TOKEN_SYSTEM.md
    ↓
Update code implementation
    ↓
Update CHANGELOG.md
```

---

## When to Update What

### Daily/Per Task
- CHANGELOG.md (every significant change)
- Component implementation files
- AI_CONTEXT_GUIDE.md (if workflow changes)

### Weekly/Per Milestone
- COMPONENT_LIBRARY.md (status updates)
- README.md (if structure changes)

### Rarely (Major Changes Only)
- TOKEN_SYSTEM.md (only if tokens change)
- FIGMA_SETUP.md (only if Figma structure changes)
- PROJECT_STRUCTURE.md (only if file organization changes)

---

## AI Context Files

Keep these updated for effective AI collaboration:

**Critical for Claude/Cursor:**
1. TOKEN_SYSTEM.md - Full token context
2. COMPONENT_LIBRARY.md - What's built, what's next
3. ANTI_PATTERNS.md - What not to do
4. Current component spec (when building)

**Use PROMPT_TEMPLATES.md for:**
- Starting new component
- Resuming work after break
- Getting design system audit
- Debugging token issues

---

## Maintenance Checklist

### After Component Completion
- [ ] Update COMPONENT_LIBRARY.md status
- [ ] Add entry to CHANGELOG.md
- [ ] Export component JSON from Figma
- [ ] Take screenshot for reference
- [ ] Update README.md progress

### After Token Change
- [ ] Update Figma variables
- [ ] Export new token JSON
- [ ] Update TOKEN_SYSTEM.md
- [ ] Update globals.css
- [ ] Test all components
- [ ] Major version bump in CHANGELOG.md

### Weekly Review
- [ ] Check docs for staleness
- [ ] Update completion percentages
- [ ] Clean up commented code
- [ ] Review anti-patterns list

---

## Questions?

See [AI Context Guide](./AI_CONTEXT_GUIDE.md) for how to get answers using Claude/Cursor.
