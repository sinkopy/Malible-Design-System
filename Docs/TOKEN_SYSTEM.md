# Token System Reference

**Version:** 0.1.0  
**Last Updated:** January 2026  
**Figma File:** [Link to Figma file]

---

## Architecture Overview

**2-Layer System:**
```
Primitives (90 variables) → Raw values
    ↓
Theme (28 variables) → ShadCN-compatible semantics
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
| neutral-100 | #f5f5f5 | |
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
| red-50 | #fbe8e8 | |
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
| blue-50 | #eaf8ff | |
| blue-100 | #c1eafe | |
| blue-200 | #99dcff | |
| blue-300 | #70cfff | |
| blue-400 | #1eb4ff | |
| blue-500 | #00a3f4 | |
| blue-600 | #008ed6 | **Info states** |
| blue-700 | #007ab7 | **Focus rings** |
| blue-800 | #00517a | |
| blue-900 | #003651 | |
| blue-950 | #002133 | |

### Colors: Green (Success) (11 values)
| Variable | Hex | Usage |
|----------|-----|-------|
| green-50 | #e2f4eb | |
| green-100 | #c4e9d6 | |
| green-200 | #97d8b7 | |
| green-300 | #7acda3 | Success borders |
| green-400 | #4ebc8c | |
| green-500 | #5cc196 | |
| green-600 | #3ea377 | **Success states** |
| green-700 | #328561 | Success text |
| green-800 | #266449 | |
| green-900 | #1c4936 | |
| green-950 | #123023 | |

### Colors: Amber (Warning/Caution) (11 values)
| Variable | Hex | Usage |
|----------|-----|-------|
| amber-50 | #fff1d6 | |
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
| Variable | Value | Usage |
|----------|-------|-------|
| spacing-0 | 0px | No spacing |
| spacing-2 | 2px | Hairline gaps |
| spacing-4 | 4px | Tight spacing |
| spacing-8 | 8px | **Default component spacing** |
| spacing-12 | 12px | Medium spacing |
| spacing-16 | 16px | Component padding |
| spacing-24 | 24px | Section spacing |
| spacing-32 | 32px | Large sections |

### Radii (3 values)
| Variable | Value | Usage |
|----------|-------|-------|
| radii-4 | 4px | Tight corners (badges) |
| radii-8 | 8px | **Default corner radius** |
| radii-full | 9999px | Pills, circles |

**Primitives Total: 90 variables**

---

## Collection 2: Theme (28 variables)

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
| secondary | neutral-50 | #fafafa | Secondary actions |
| secondary-foreground | neutral-700 | #3f3f46 | Text on secondary |

#### Muted & Accent
| Variable | References | Hex | Usage |
|----------|------------|-----|-------|
| muted | neutral-200 | #e5e5e5 | Disabled backgrounds |
| muted-foreground | neutral-500 | #71717a | Secondary text |
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

### Extended (8 variables)

#### Success
| Variable | References | Hex | Usage |
|----------|------------|-----|-------|
| success | green-600 | #3ea377 | Success states |
| success-foreground | white | #ffffff | Text on success |

#### Warning
| Variable | References | Hex | Usage |
|----------|------------|-----|-------|
| warning | amber-600 | #e09200 | Warnings |
| warning-foreground | white | #ffffff | Text on warnings |

#### Info
| Variable | References | Hex | Usage |
|----------|------------|-----|-------|
| info | blue-600 | #008ed6 | Info states |
| info-foreground | white | #ffffff | Text on info |

#### Canvas
| Variable | References | Hex | Usage |
|----------|------------|-----|-------|
| canvas | purple-600 | #914be6 | Canvas/editor UI |
| canvas-foreground | purple-700 | #7737c4 | Text on canvas |

**Theme Total: 28 variables**

---

## Semantic Rationale (Documentation Only)

This conceptual layer explains WHY primitives map to theme variables. **It does not exist as Figma variables.**

### Surface Semantics
- **surface.default** → `white` (main backgrounds)
- **surface.subtle** → `neutral-50` (secondary surfaces)
- **surface.muted** → `neutral-200` (disabled/inactive)
- **surface.brand** → `orange-600` (primary actions)
- **surface.critical** → `red-600` (destructive actions)
- **surface.success** → `green-600` (positive feedback)
- **surface.caution** → `amber-600` (warnings)
- **surface.info** → `blue-600` (informational)
- **surface.canvas** → `purple-600` (editor UI)

### Text Semantics
- **text.primary** → `neutral-950` (body text)
- **text.secondary** → `neutral-700` (captions, labels)
- **text.tertiary** → `neutral-500` (de-emphasized)
- **text.inverse** → `white` (text on dark backgrounds)
- **text.critical** → `red-700` (error text)
- **text.success** → `green-700` (success text)
- **text.caution** → `amber-700` (warning text)
- **text.info** → `blue-700` (info text)
- **text.link** → `blue-600` (hyperlinks)
- **text.brand** → `orange-600` (brand-colored text)

### Border Semantics
- **border.default** → `neutral-200` (standard borders)
- **border.subtle** → `neutral-300` (input borders, more contrast)
- **border.critical** → `red-300` (error states)
- **border.success** → `green-300` (success states)
- **border.caution** → `amber-300` (warning states)
- **border.info** → `blue-300` (info states)

---

## Token Usage Rules

### For Designers (Figma)
1. **Use Theme variables only** in components
2. **Never use Primitives directly** (they're reference only)
3. **No component-specific tokens**
4. **No state-specific tokens** (hover/active handled by opacity)

### For Developers (Code)
1. **Use CSS variables** from `globals.css`
2. **Never use hex values directly**
3. **No inline arbitrary values** (`bg-[#e0622d]`)
4. **States via Tailwind modifiers** (`hover:bg-primary/90`)

---

## CSS Variable Export

For implementation in `globals.css`:

```css
:root {
  /* Core Surfaces */
  --background: #ffffff;
  --foreground: #09090b;
  --card: #ffffff;
  --card-foreground: #09090b;
  --popover: #fafafa;
  --popover-foreground: #3f3f46;
  
  /* Brand Actions */
  --primary: #e0622d;
  --primary-foreground: #ffffff;
  --secondary: #fafafa;
  --secondary-foreground: #3f3f46;
  
  /* Muted & Accent */
  --muted: #e5e5e5;
  --muted-foreground: #71717a;
  --accent: #fafafa;
  --accent-foreground: #09090b;
  
  /* Destructive */
  --destructive: #bf1616;
  --destructive-foreground: #ffffff;
  
  /* Borders & Focus */
  --border: #e5e5e5;
  --input: #d4d4d4;
  --ring: #007ab7;
  
  /* Extended */
  --success: #3ea377;
  --success-foreground: #ffffff;
  --warning: #e09200;
  --warning-foreground: #ffffff;
  --info: #008ed6;
  --info-foreground: #ffffff;
  --canvas: #914be6;
  --canvas-foreground: #7737c4;
  
  /* Radius */
  --radius: 8px;
}
```

---

## Token Update Protocol

### When Primitive Changes
1. Update value in Figma Primitives collection
2. Export `primitives.json`
3. Commit to repo
4. Theme variables automatically update (they're aliased)
5. Update this doc if usage notes change
6. **Major version bump** in CHANGELOG.md

### When Theme Mapping Changes
1. Update reference in Figma Theme collection
2. Export `theme.json`
3. Update this doc
4. Update `globals.css`
5. Test all components
6. **Major version bump** in CHANGELOG.md

### When Adding New Token
**Don't.** Prove 5+ component usages first.

If truly needed:
1. Add to Primitives (if raw value) or Theme (if semantic)
2. Update this doc
3. Update COMPONENT_LIBRARY.md (show which components use it)
4. **Minor version bump** in CHANGELOG.md

---

## Validation Checklist

### Figma
- [ ] 90 Primitives exist
- [ ] 28 Theme variables exist
- [ ] All Theme variables reference Primitives
- [ ] No semantic collection exists
- [ ] No `general-` prefix

### Code
- [ ] `globals.css` has 28 CSS variables
- [ ] All match Theme collection values
- [ ] No hardcoded hex values in components
- [ ] Tailwind config extends with Theme colors

### Documentation
- [ ] This file matches current Figma state
- [ ] Hex values are accurate
- [ ] Usage notes are current

---

## Quick Reference: Common Mappings

| Need | Use Theme Variable | Resolves To |
|------|-------------------|-------------|
| Page background | `background` | white |
| Body text | `foreground` | neutral-950 |
| Primary button | `primary` | orange-600 |
| Delete button | `destructive` | red-600 |
| Success badge | `success` | green-600 |
| Warning alert | `warning` | amber-600 |
| Info message | `info` | blue-600 |
| Default border | `border` | neutral-200 |
| Input border | `input` | neutral-300 |
| Focus ring | `ring` | blue-700 |

---

## Version History

- **v0.1.0** (January 2026) - Initial token system
  - 90 Primitives
  - 28 Theme variables
  - Light mode only

---

## See Also

- [Figma Setup Guide](./FIGMA_SETUP.md) - How to rebuild from scratch
- [Component Library](./COMPONENT_LIBRARY.md) - How components use these tokens
- [Design Decisions](./DESIGN_DECISIONS.md) - Why this architecture
