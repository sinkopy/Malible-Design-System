# Design Decisions

**Version:** 1.2.0  
**Last Updated:** January 13, 2026

---

## Purpose

This document explains **why** we made key architectural decisions for the Malible Design System. When someone asks "Why did we do it this way?", the answer is here.

---

## Core Philosophy

### Decision: Implementation Sanity > Semantic Purity

**The rule:** When there's a trade-off between semantic correctness and maintainability, always choose maintainability.

**Why:**
- Design systems are long-lived
- Maintenance cost >> initial design cost
- Pragmatic beats perfect

**Example:**
- Semantic purity would suggest: Primitives → Semantic → Theme → Components (4 layers)
- Implementation sanity says: Primitives → Theme → Components (2 layers, semantic in docs only)
- We chose implementation sanity

**Precedent set:** January 2026

---

## Token Architecture

### Decision: 2-Layer Token System (Not 3-Layer)

**What we chose:**
```
Primitives (90 variables) → Theme (33 variables) → Components
```

**What we rejected:**
```
Primitives → Semantic (surface-*, text-*, border-*) → Theme → Components
```

**Why:**
1. **Maintenance overhead** - 3 layers = 3 places to update
2. **Slower workflow** - Designers select: Theme → Primitive (direct)
3. **ShadCN alignment** - ShadCN expects 2 layers

**Trade-off accepted:** Less "pure" from design theory, but faster to use and maintain.

**Precedent set:** January 2026

---

### Decision: ShadCN Variable Names (No Prefix)

**What we chose:**
```css
--background
--foreground
--primary
--destructive
```

**What we rejected:**
```css
--malible-background
--general-primary
```

**Why:**
1. **ShadCN compatibility** - Components expect `--primary`, not `--malible-primary`
2. **Cleaner code** - `bg-primary` > `bg-[var(--malible-primary)]`

**Precedent set:** January 2026

---

### Decision: 8 Spacing Values (Not 11)

**What we chose:**
```
0, 2, 4, 8, 12, 16, 24, 32
```

**What we rejected:**
```
0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32
```

**Why:**
1. **4/8px grid alignment** - Industry standard
2. **Decision fatigue** - 8 options = clear jumps
3. **Visual distinction** - 8 vs 12 vs 16 = clearly different

**Precedent set:** January 2026

---

### Decision: No State Tokens

**What we chose:**
```tsx
hover:bg-primary/90
active:bg-primary/80
disabled:opacity-50
```

**What we rejected:**
```css
--primary-hover: #...;
--primary-active: #...;
```

**Why:**
1. **Token explosion** - 33 theme variables × 3 states = 99 variables
2. **Tailwind handles this** - Built-in opacity modifiers
3. **ShadCN pattern** - They use modifiers, not state tokens

**Precedent set:** January 2026

---

### Decision: Subtle Background Tokens

**What we added:**
```css
--info-subtle: #eaf8ff;
--success-subtle: #e2f4eb;
--warning-subtle: #fef6e6;
--destructive-subtle: #fde8e8;
```

**Why:**
1. **Badge backgrounds** - Subtle variants need consistent light backgrounds
2. **Alert backgrounds** - Same pattern
3. **10% opacity wasn't enough** - HSL at 10% didn't match Figma specs

**Why not just use opacity?**
- `bg-info/10` creates transparency, not a light tint
- Figma designs specify opaque light colors
- Subtle tokens give exact control

**Precedent set:** January 13, 2026

---

## Component-Specific Decisions

### Decision: Link Button Uses --info (Not --primary)

**What we chose:** Link variant uses blue (#008ed6)

**What we rejected:** Using primary orange (#e0622d)

**Why:**
1. **Figma design** - Specifies teal/blue for links
2. **Convention** - Blue has stronger "clickable link" association
3. **Hierarchy** - Orange primary is for CTAs, not navigation

**Visual:**
| Variant | Color | Token |
|---------|-------|-------|
| default | Orange | --primary |
| link | Blue | --info |

**Precedent set:** January 13, 2026

---

### Decision: Switch Uses --success When Checked

**What we chose:** Green (#3ea377) for checked state

**What we rejected:** Using primary orange

**Why:**
1. **Figma design** - Specifies green for "on" state
2. **Convention** - Green = positive/enabled
3. **Semantic clarity** - Primary is for actions, success is for positive states

**Visual:**
| State | Color | Token |
|-------|-------|-------|
| Unchecked | Gray | --muted |
| Checked | Green | --success |

**Precedent set:** January 13, 2026

---

### Decision: Badge Uses Flat 10 Variants

**What we chose:**
```
default, info, info-solid, success, success-solid, 
warning, warning-solid, destructive, destructive-solid, outline
```

**What we rejected:**
```tsx
// Compound props approach
<Badge variant="info" fill="subtle" />
<Badge variant="info" fill="solid" />
```

**Why:**
1. **ShadCN pattern** - Uses single variant prop
2. **Cleaner API** - One prop instead of two
3. **Direct mapping** - Matches Figma naming

**Usage:**
```tsx
<Badge variant="success">Done</Badge>        // Subtle green
<Badge variant="success-solid">Done</Badge>  // Solid green
```

**Precedent set:** January 13, 2026

---

## Typography Decisions

### Decision: Typekit Weight Mapping

**What we discovered:** TT Commons Pro via Typekit uses non-standard weights.

**Mapping:**
| Typekit Name | CSS Weight | Tailwind |
|--------------|------------|----------|
| Regular | 300 | font-light |
| Medium | 400 | font-normal |
| DemiBold | 500 | font-medium |
| Bold | 600 | font-semibold |

**Critical:** Do NOT use `font-weight: 650`. It doesn't exist.

**Why this matters:**
- Standard CSS would use 600 for DemiBold
- Typekit shifts everything down by ~100
- Using wrong weight = font doesn't render

**How we discovered:** h1 was showing bold instead of demibold. DevTools revealed Typekit's mapping.

**Precedent set:** January 13, 2026

---

### Decision: JetBrains Mono for Code

**What we chose:** JetBrains Mono via Google Fonts

**What we rejected:** System monospace, Fira Code, SF Mono

**Why:**
1. **Readability** - Clear distinction between similar characters
2. **Availability** - Free, Google Fonts hosted
3. **Consistency** - Same font across all platforms

**Implementation:**
```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

**Precedent set:** January 13, 2026

---

## Icon Decisions

### Decision: Phosphor Icons (Not Lucide)

**What we chose:** @phosphor-icons/react

**What we rejected:** lucide-react (ShadCN default)

**Why:**
1. **Visual weight** - Phosphor Regular matches Inter Medium
2. **Style consistency** - Cleaner, more geometric
3. **Variety** - More icon options

**Migration:**
```tsx
// Before
import { Check } from "lucide-react"

// After
import { Check } from "@phosphor-icons/react"
```

**Default weight:** Regular (not Bold or Light)

**Precedent set:** January 13, 2026

---

## Documentation Decisions

### Decision: Preview + Code Together (Not Tabbed)

**What we chose:** Show preview and code simultaneously

**What we rejected:** Tabs switching between preview and code

**Why:**
1. **ShadCN pattern** - Their docs show both together
2. **Better UX** - See code and result without clicking
3. **Faster scanning** - Developers can quickly find examples

**Implementation:**
```tsx
<ComponentExample code={codeString}>
  <Button>Preview</Button>
</ComponentExample>
```

**Precedent set:** January 13, 2026

---

### Decision: Shiki for Syntax Highlighting

**What we chose:** Shiki with github-light theme

**What we rejected:** Prism, highlight.js, dark themes

**Why:**
1. **VS Code engine** - Same highlighting as editor
2. **Light theme** - Matches documentation aesthetic
3. **Accuracy** - Better TypeScript/TSX support

**Precedent set:** January 13, 2026

---

## Tool & Workflow Decisions

### Decision: Figma API for Spec Extraction

**What we chose:** Use Figma MCP tools to extract exact specs

**What we rejected:** Manual inspection, eyeballing values

**Why:**
1. **Accuracy** - Exact pixel values, colors, shadows
2. **Speed** - No iteration cycles
3. **Consistency** - Same values every time

**Workflow:**
1. Get Figma URL with node ID
2. Call `get_design_context` to extract specs
3. Implement with exact values

**Key learning:** Figma API can identify inner shadows vs drop shadows, extract exact HSL values, and reveal layer structure.

**Precedent set:** January 13, 2026

---

### Decision: Figma as Source of Truth

**What we chose:** Design in Figma → Export specs → Implement in code

**What we rejected:** Code first, Figma later

**Why:**
1. **Designer workflow** - Designers work in Figma
2. **Token binding** - Figma variables are canonical
3. **Handoff clarity** - Design is "done" when Figma is done

**Precedent set:** January 2026

---

### Decision: ShadCN as Execution Layer

**What we chose:** Use ShadCN components, adapt our tokens to their structure

**What we rejected:** Building from scratch, heavily customizing ShadCN

**Why:**
1. **Battle-tested** - Accessibility built-in
2. **Maintenance** - Upstream updates available
3. **Adoption** - Developers familiar with patterns

**Precedent set:** January 2026

---

## Process Decisions

### Decision: "5+ Usages" Rule for New Tokens

**The rule:** A token must be used in 5+ places to justify existence.

**Why:**
1. **Prevents speculation** - "We might need this" = usually don't
2. **Forces consolidation** - Encourages reuse
3. **Empirical basis** - Real usages, not theoretical

**Exception:** Intent colors (success, warning, info) added with pattern certainty.

**Precedent set:** January 2026

---

## Code Comments and Documentation

### Decision: Hex Values in Comments Are Acceptable

**What we allow:**
- Hex color values (`#3ea377`) in code comments for reference/clarity
- Token references alongside hex values for developer convenience

**Why:**
1. **Developer convenience** - Quick visual reference when reading code
2. **Debugging aid** - Helps identify colors during development
3. **Documentation clarity** - Makes it clear which color is being used
4. **Non-functional** - Comments don't affect runtime behavior

**Pattern:**
```tsx
// ✅ Acceptable
// Checked state - success color (green #3ea377)
"data-[state=checked]:bg-success"

// ✅ Also acceptable
// Primary button uses --primary token (#e0622d)
className="bg-primary"
```

**Rules:**
- ✅ Hex values in comments are allowed
- ✅ Always include token reference alongside hex
- ❌ Never hardcode hex values in actual code/className
- ❌ Don't use hex values without token reference

**Precedent set:** January 13, 2026

---

## Component Update Logging

### Decision: Maintain Component Update Log

**What we track:**
- Component creation dates
- Major updates/changes to components
- Token changes affecting components
- Design spec updates

**Where:**
- `COMPONENT_UPDATE_LOG.md` - Centralized component history
- Individual component files - Inline comments with dates
- CHANGELOG.md - High-level component additions

**Format for component files:**
```tsx
/**
 * Component: Switch
 * Created: 2026-01-10
 * Last Updated: 2026-01-13
 * 
 * Updates:
 * - 2026-01-13: Added hex reference in comment for clarity
 * - 2026-01-10: Initial implementation with success color
 */
```

**Precedent set:** January 13, 2026

---

## Component-Specific Decisions

### Decision: Tooltip Component

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Background color | `--foreground` (#09090b) | Darker than Figma's #3f3f46; better contrast, consistent with inverted UI pattern |
| Padding | 8px uniform | Matches Figma; consistent with spacing system |
| Radius | 8px | Matches system --radius token |
| Font weight | 500 (Medium) | Figma spec; slightly bolder for readability on dark bg |
| Max width | 200px | Prevents overly wide tooltips; forces text wrap |
| Arrow | fill-foreground | Must match tooltip background color |

**Date:** January 13, 2026

---

### Decision: Slider Component

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Thumb size | 16×16 | Figma spec; compact, clean appearance |
| Thumb border | 1px `--muted-foreground` | Figma spec; subtle gray border instead of bold primary |
| Track height | 4px | Standard slider track height |
| Range support | Included | Radix handles dual thumbs natively via array values |
| Focus ring | ring-2, ring-offset-1 | Consistent with other form components |

**Date:** January 16, 2026

---

## Open Questions

### Question: Dark Mode Implementation

**Status:** Not yet decided

**Options:**
A) Duplicate Theme collection with Dark mode
B) Use Tailwind's dark: variants
C) CSS custom properties with data-theme attribute

**Needs decision when:** First component needs dark mode support

---

### Question: Animation/Transition Tokens

**Status:** Using Tailwind defaults (duration-150, ease-in-out)

**Question:** Do we need design system animation tokens?

**Needs decision when:** Animation becomes brand differentiator

---

## How to Use This Document

### When making a decision:
1. Check if similar decision exists here
2. Follow precedent if it exists
3. If new, document reasoning
4. Add to this file

### When questioning a decision:
1. Read rationale here
2. Understand trade-offs
3. If still wrong, propose change with better reasoning
4. Update document

### When onboarding:
Read this to understand "why", not just "what".

---

## See Also

- [Token System](./TOKEN_SYSTEM.md) - What tokens exist
- [Anti-Patterns](./ANTI_PATTERNS.md) - What not to do
- [Changelog](../CHANGELOG.md) - When decisions were made
