# Token System Reference

**Version:** 1.2.0  
**Last Updated:** January 13, 2026  
**Figma File:** Malible-X-ShadCn

---

## Architecture Overview

**2-Layer System:**
```
Primitives (90 variables) → Raw values
    ↓
Theme (33 variables) → ShadCN-compatible semantics
    ↓
Components → Consume Theme only
```

**No semantic middle layer.** The conceptual mapping (surface/text/border) exists in documentation only, not as Figma variables.

---

## Collection 1: Primitives (90 variables)

### Colors: Neutral (11 values)
| Variable | Hex | Usage |
|----------|-----|-------|
| neutral-50 | #fafafa | Lightest gray |
| neutral-100 | #f5f5f5 | Secondary backgrounds |
| neutral-200 | #e5e5e5 | Borders, muted backgrounds |
| neutral-300 | #d4d4d4 | Input borders |
| neutral-400 | #a1a1aa | |
| neutral-500 | #71717a | Secondary text |
| neutral-600 | #52525b | |
| neutral-700 | #3f3f46 | Tertiary text |
| neutral-800 | #27272a | |
| neutral-900 | #18181b | |
| neutral-950 | #09090b | Primary text, darkest |

### Colors: Orange (Brand) (11 values)
| Variable | Hex | Usage |
|----------|-----|-------|
| orange-50 | #fef0eb | Lightest tint |
| orange-100 | #fdd3c2 | |
| orange-200 | #fcb699 | |
| orange-300 | #fba784 | |
| orange-400 | #fa8a5b | |
| orange-500 | #f96d32 | |
| orange-600 | #e0622d | **Primary brand color** |
| orange-700 | #ae4c23 | |
| orange-800 | #7d3719 | |
| orange-900 | #642c14 | |
| orange-950 | #32160a | Darkest |

### Colors: Red (Critical) (11 values)
| Variable | Hex | Usage |
|----------|-----|-------|
| red-50 | #fde8e8 | Destructive subtle bg |
| red-100 | #fadbdb | |
| red-200 | #f6b6b6 | |
| red-300 | #ed6d6d | Error borders |
| red-400 | #e73636 | |
| red-500 | #e42525 | |
| red-600 | #bf1616 | **Destructive actions** |
| red-700 | #a31414 | Error text |
| red-800 | #7f0f0f | |
| red-900 | #5a0b0b | |
| red-950 | #3b0707 | |

### Colors: Blue (Info/Focus) (11 values)
| Variable | Hex | Usage |
|----------|-----|-------|
| blue-50 | #eaf8ff | Info subtle bg |
| blue-100 | #c1eafe | |
| blue-200 | #99dcff | |
| blue-300 | #70cfff | |
| blue-400 | #1eb4ff | |
| blue-500 | #00a3f4 | |
| blue-600 | #008ed6 | **Info states, Link text** |
| blue-700 | #007ab7 | **Focus rings** |
| blue-800 | #00517a | |
| blue-900 | #003651 | |
| blue-950 | #002133 | |

### Colors: Green (Success) (11 values)
| Variable | Hex | Usage |
|----------|-----|-------|
| green-50 | #e2f4eb | Success subtle bg |
| green-100 | #c4e9d6 | |
| green-200 | #97d8b7 | |
| green-300 | #7acda3 | Success borders |
| green-400 | #4ebc8c | |
| green-500 | #5cc196 | |
| green-600 | #3ea377 | **Success states, Switch checked** |
| green-700 | #328561 | Success text |
| green-800 | #266449 | |
| green-900 | #1c4936 | |
| green-950 | #123023 | |

### Colors: Amber (Warning/Caution) (11 values)
| Variable | Hex | Usage |
|----------|-----|-------|
| amber-50 | #fef6e6 | Warning subtle bg |
| amber-100 | #ffe9c2 | |
| amber-200 | #ffdb99 | |
| amber-300 | #ffcc70 | Warning borders |
| amber-400 | #ffb833 | |
| amber-500 | #f59f00 | |
| amber-600 | #e09200 | **Warning states** |
| amber-700 | #b87700 | Warning text |
| amber-800 | #8f5d00 | |
| amber-900 | #664200 | |
| amber-950 | #472f00 | |

### Colors: Purple (Canvas/Editor) (11 values)
| Variable | Hex | Usage |
|----------|-----|-------|
| purple-50 | #f8f2ff | |
| purple-100 | #ebdcff | |
| purple-200 | #d3b5ff | |
| purple-300 | #bb8eff | |
| purple-400 | #af76fe | |
| purple-500 | #a763fd | |
| purple-600 | #914be6 | **Canvas elements** |
| purple-700 | #7737c4 | Canvas text |
| purple-800 | #5c2a9b | |
| purple-900 | #401d72 | |
| purple-950 | #2b144f | |

### Colors: Base (2 values)
| Variable | Hex | Usage |
|----------|-----|-------|
| white | #ffffff | Backgrounds, inverse text |
| black | #070707 | (Reserved, rarely used) |

### Spacing (8 values)
| Variable | Value | Tailwind | Usage |
|----------|-------|----------|-------|
| spacing-0 | 0px | p-0 | No spacing |
| spacing-2 | 2px | p-0.5 | Hairline gaps |
| spacing-4 | 4px | p-1 | Tight spacing |
| spacing-8 | 8px | p-2 | **Default component spacing** |
| spacing-12 | 12px | p-3 | Medium spacing |
| spacing-16 | 16px | p-4 | Component padding |
| spacing-24 | 24px | p-6 | Section spacing |
| spacing-32 | 32px | p-8 | Large sections, page padding |

### Radii (3 values)
| Variable | Value | Tailwind | Usage |
|----------|-------|----------|-------|
| radii-4 | 4px | rounded | Tight corners (inputs) |
| radii-8 | 8px | rounded-lg | **Default corner radius** |
| radii-full | 9999px | rounded-full | Pills, badges, circles |

**Primitives Total: 90 variables**

---

## Collection 2: Theme (33 variables)

### ShadCN Core (20 variables)

#### Surfaces
| Variable | References | Hex | Usage |
|----------|------------|-----|-------|
| background | white | #ffffff | Main app background |
| foreground | neutral-950 | #09090b | Primary text |
| card | white | #ffffff | Card backgrounds |
| card-foreground | neutral-950 | #09090b | Text on cards |
| popover | neutral-50 | #fafafa | Dropdowns, modals |
| popover-foreground | neutral-700 | #3f3f46 | Text in dropdowns |

#### Brand Actions
| Variable | References | Hex | Usage |
|----------|------------|-----|-------|
| primary | orange-600 | #e0622d | Primary CTAs |
| primary-foreground | white | #ffffff | Text on primary |
| secondary | neutral-100 | #f5f5f5 | Secondary actions |
| secondary-foreground | neutral-700 | #424242 | Text on secondary |

#### Muted & Accent
| Variable | References | Hex | Usage |
|----------|------------|-----|-------|
| muted | neutral-200 | #e5e5e5 | Disabled backgrounds |
| muted-foreground | neutral-500 | #737373 | Secondary text |
| accent | neutral-50 | #fafafa | Hover states |
| accent-foreground | neutral-950 | #09090b | Text on accent |

#### Destructive
| Variable | References | Hex | Usage |
|----------|------------|-----|-------|
| destructive | red-600 | #bf1616 | Delete, errors |
| destructive-foreground | white | #ffffff | Text on destructive |

#### Borders & Focus
| Variable | References | Hex | Usage |
|----------|------------|-----|-------|
| border | neutral-200 | #e5e5e5 | Default borders |
| input | neutral-300 | #d4d4d4 | Input borders |
| ring | blue-700 | #007ab7 | Focus rings |

#### Radius
| Variable | References | Value | Usage |
|----------|------------|-------|-------|
| radius | radii-8 | 8px | Default corners |

### Extended Semantic (8 variables)

#### Success
| Variable | References | Hex | Usage |
|----------|------------|-----|-------|
| success | green-600 | #3ea377 | Success states, Switch checked |
| success-foreground | white | #ffffff | Text on success |

#### Warning
| Variable | References | Hex | Usage |
|----------|------------|-----|-------|
| warning | amber-600 | #e09200 | Warnings |
| warning-foreground | white | #ffffff | Text on warnings |

#### Info
| Variable | References | Hex | Usage |
|----------|------------|-----|-------|
| info | blue-600 | #008ed6 | Info states, Link text |
| info-foreground | white | #ffffff | Text on info |

#### Canvas
| Variable | References | Hex | Usage |
|----------|------------|-----|-------|
| canvas | purple-600 | #914be6 | Canvas/editor UI |
| canvas-foreground | purple-700 | #7737c4 | Text on canvas |

### Subtle Backgrounds (5 variables)

| Variable | Hex | Usage |
|----------|-----|-------|
| info-subtle | #eaf8ff | Info badge/alert backgrounds |
| success-subtle | #e2f4eb | Success badge/alert backgrounds |
| warning-subtle | #fef6e6 | Warning badge/alert backgrounds |
| destructive-subtle | #fde8e8 | Error badge/alert backgrounds |
| muted-subtle | #f5f5f5 | Neutral subtle backgrounds |

**Theme Total: 33 variables**

---

## Typography Tokens

### Font Families
| Token | Value | Usage |
|-------|-------|-------|
| --font-heading | "tt-commons-pro", sans-serif | Headings (h1-h3) |
| --font-body | "Inter", sans-serif | Body text, UI |
| --font-mono | "JetBrains Mono", monospace | Code blocks |

### Typekit Weight Mapping (TT Commons Pro)

**Critical:** Typekit uses non-standard weight mapping.

| Font Name | Typekit Weight | CSS font-weight |
|-----------|---------------|-----------------|
| Regular | 300 | font-light |
| Medium | 400 | font-normal |
| DemiBold | 500 | font-medium |
| Bold | 600 | font-semibold |

**Do NOT use font-weight: 650.** It doesn't exist.

### Type Scale
| Role | Size | Line Height | Weight | Font |
|------|------|-------------|--------|------|
| Display (h1) | 36px | 40px | 500 | TT Commons |
| Heading (h2) | 24px | 32px | 500 | TT Commons |
| Title (h3) | 18px | 24px | 500 | TT Commons |
| Body (p) | 14px | 20px | 400 | Inter |
| Caption (small) | 12px | 16px | 300 | Inter |

---

## CSS Variable Export

For implementation in `globals.css`:

```css
:root {
  /* Core Surfaces */
  --background: 0 0% 100%;
  --foreground: 0 0% 10%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 10%;
  --popover: 0 0% 98%;
  --popover-foreground: 0 0% 25%;
  
  /* Brand Actions */
  --primary: 17 83% 53%;
  --primary-foreground: 0 0% 100%;
  --secondary: 0 0% 96%;
  --secondary-foreground: 0 0% 26%;
  
  /* Muted & Accent */
  --muted: 0 0% 90%;
  --muted-foreground: 0 0% 45%;
  --accent: 0 0% 98%;
  --accent-foreground: 0 0% 10%;
  
  /* Destructive */
  --destructive: 0 84% 42%;
  --destructive-foreground: 0 0% 100%;
  
  /* Borders & Focus */
  --border: 0 0% 90%;
  --input: 0 0% 83%;
  --ring: 200 100% 37%;
  
  /* Extended Semantic */
  --success: 152 48% 45%;
  --success-foreground: 0 0% 100%;
  --warning: 38 100% 44%;
  --warning-foreground: 0 0% 100%;
  --info: 200 100% 42%;
  --info-foreground: 0 0% 100%;
  --canvas: 265 76% 60%;
  --canvas-foreground: 270 55% 49%;
  
  /* Subtle Backgrounds */
  --info-subtle: 200 100% 96%;
  --success-subtle: 145 47% 93%;
  --warning-subtle: 40 95% 95%;
  --destructive-subtle: 0 90% 95%;
  
  /* Radius */
  --radius: 0.5rem;
}
```

---

## Token Usage Rules

### For Designers (Figma)
1. **Use Theme variables only** in components
2. **Never use Primitives directly** (they're reference only)
3. **No component-specific tokens** (no --button-bg)
4. **No state-specific tokens** (hover/active handled by opacity)

### For Developers (Code)
1. **Use CSS variables** from `globals.css`
2. **Never hardcode hex values**
3. **No arbitrary values** (`bg-[#e0622d]`)
4. **States via Tailwind modifiers** (`hover:bg-primary/90`)

### State Handling Pattern
```tsx
// Default state
bg-primary text-primary-foreground

// Hover: reduce opacity
hover:bg-primary/90

// Active: reduce more
active:bg-primary/80

// Disabled: half opacity
disabled:opacity-50 disabled:pointer-events-none

// Focus: ring
focus-visible:ring-2 focus-visible:ring-ring
```

---

## Component → Token Mappings

### Button
| Variant | Background | Text | Border |
|---------|------------|------|--------|
| default | --primary | --primary-foreground | none |
| secondary | --secondary | --secondary-foreground | none |
| destructive | --destructive | --destructive-foreground | none |
| outline | transparent | --foreground | --input |
| ghost | transparent | --foreground | none |
| link | transparent | --info | none (underline) |

### Badge
| Variant | Background | Text |
|---------|------------|------|
| default | --muted | --muted-foreground |
| info | --info-subtle | --info |
| info-solid | --info | --info-foreground |
| success | --success-subtle | --success |
| success-solid | --success | --success-foreground |
| warning | --warning-subtle | --warning |
| warning-solid | --warning | --warning-foreground |
| destructive | --destructive-subtle | --destructive |
| destructive-solid | --destructive | --destructive-foreground |
| outline | transparent | --foreground |

### Switch
| State | Background |
|-------|------------|
| Unchecked | --muted |
| Checked | --success |
| Disabled | 50% opacity |

### Input
| State | Border | Ring |
|-------|--------|------|
| Default | --input | none |
| Focus | --input | --ring |
| Error | --destructive | --destructive/20 |
| Disabled | --input | none + opacity |

---

## Quick Reference Card

| Need | Use Token | Hex |
|------|-----------|-----|
| Page background | --background | #ffffff |
| Body text | --foreground | #1a1a1a |
| Primary button | --primary | #e0622d |
| Delete button | --destructive | #bf1616 |
| Success state | --success | #3ea377 |
| Warning state | --warning | #e09200 |
| Info state | --info | #008ed6 |
| Link text | --info | #008ed6 |
| Default border | --border | #e5e5e5 |
| Input border | --input | #d4d4d4 |
| Focus ring | --ring | #007ab7 |
| Secondary text | --muted-foreground | #737373 |

---

## Validation Checklist

### Figma
- [ ] 90 Primitives exist
- [ ] 33 Theme variables exist
- [ ] All Theme variables reference Primitives
- [ ] No semantic collection exists
- [ ] No `general-` prefix

### Code
- [ ] `globals.css` has 33 CSS variables
- [ ] All match Theme collection values
- [ ] No hardcoded hex values in components
- [ ] Tailwind config extends with Theme colors

### Documentation
- [ ] This file matches current Figma state
- [ ] Hex values are accurate
- [ ] Usage notes are current

---

## Version History

- **v1.2.0** (January 13, 2026)
  - Added subtle background tokens (5)
  - Link uses --info (not --primary)
  - Switch uses --success when checked
  - Added Typekit weight mapping
  - Total: 33 Theme variables

- **v0.1.0** (January 9, 2026)
  - Initial token system
  - 90 Primitives
  - 28 Theme variables
  - Light mode only

---

## See Also

- [Design Decisions](./DESIGN_DECISIONS.md) - Why this architecture
- [Anti-Patterns](./ANTI_PATTERNS.md) - What NOT to do
- [Component Library](./COMPONENT_LIBRARY.md) - Component specifications
