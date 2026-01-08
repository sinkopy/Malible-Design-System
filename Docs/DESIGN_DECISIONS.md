# Design Decisions

**Version:** 0.1.0  
**Last Updated:** January 2026

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
- Implementation sanity says: Primitives → Theme → Components (3 layers, semantic in docs only)
- We chose implementation sanity

**Precedent set:** January 2026

---

## Token Architecture

### Decision: 2-Layer Token System (Not 3-Layer)

**What we chose:**
```
Primitives (90 variables) → Theme (28 variables) → Components
```

**What we rejected:**
```
Primitives → Semantic (surface-*, text-*, border-*) → Theme → Components
```

**Why:**
1. **Maintenance overhead**
   - 3 layers = 3 places to update
   - Semantic layer adds indirection with no benefit
   - Designers don't think in semantic abstractions

2. **Slower workflow**
   - Designers select: Theme → Semantic → Primitive (too many clicks)
   - With 2 layers: Theme → Primitive (direct)

3. **ShadCN alignment**
   - ShadCN expects 2 layers
   - Adding semantic creates translation complexity
   - We're building on ShadCN, not reinventing it

**Trade-off accepted:**
- Less "pure" from design theory perspective
- But faster to use and maintain

**Where semantic lives:**
- Documentation (TOKEN_SYSTEM.md explains rationale)
- Not as Figma variables or CSS variables

**Precedent set:** January 2026  
**Decision maker:** Solo (you) + Claude  
**Revisit when:** Team grows to 5+ people AND semantic layer proves necessary

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
--app-destructive
```

**Why:**
1. **ShadCN compatibility**
   - ShadCN components expect `--primary`, not `--malible-primary`
   - Forking components to use prefixed names = maintenance hell

2. **Namespace collision unlikely**
   - These are app-level variables
   - Not a library consumed by others (yet)
   - If that changes, revisit

3. **Cleaner code**
   - `bg-primary` > `bg-[var(--malible-primary)]`

**Trade-off accepted:**
- If this becomes a published library, we might need prefixes
- For now, simplicity wins

**Precedent set:** January 2026  
**Revisit when:** Publishing as standalone package for external use

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
1. **4/8px grid alignment**
   - Industry standard (Material, iOS, Polaris)
   - 6, 10, 20 break grid rhythm

2. **Decision fatigue**
   - 11 options = "Should this be 10 or 12?"
   - 8 options = Clear jumps, faster decisions

3. **Visual distinction**
   - 8 vs 10 vs 12 = barely noticeable
   - 8 vs 12 vs 16 = clearly different

**Trade-off accepted:**
- Less granular spacing control
- Designers must round to nearest value
- But faster design velocity

**Migration rule:**
- 6px → 8px (usually)
- 10px → 12px (usually)
- 20px → 16px or 24px (context-dependent)

**Precedent set:** January 2026  
**Revisit when:** Never, unless data shows critical design blockers

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
--primary-disabled: #...;
```

**Why:**
1. **Token explosion**
   - 28 theme variables × 3 states = 84 variables
   - Unmaintainable

2. **Tailwind handles this**
   - Built-in opacity modifiers
   - Pseudo-class variants
   - Why duplicate?

3. **ShadCN pattern**
   - They use modifiers, not state tokens
   - We follow their pattern

**Trade-off accepted:**
- Can't globally change hover opacity (it's inline in components)
- But token count stays manageable

**Exception:**
- If product-wide hover style becomes critical (e.g., accessibility requirement)
- Then consider global hover modifier in Tailwind config
- Still not CSS variables

**Precedent set:** January 2026  
**Revisit when:** Accessibility audit requires global hover changes

---

### Decision: Extended Variables (success, warning, info, canvas)

**What we chose:**
Added 8 variables beyond ShadCN's 20:
- success, success-foreground
- warning, warning-foreground
- info, info-foreground
- canvas, canvas-foreground

**Why:**
1. **Real product need**
   - Form validation requires success/error states
   - Alerts need warning/info variants
   - Canvas editor needs distinct color

2. **Follows ShadCN pattern**
   - Base + foreground pair
   - No expansion beyond that
   - Consistent with destructive pattern

3. **Justifies 5+ usages**
   - Success: form inputs, badges, alerts, toasts, icons (5+)
   - Warning: similar spread
   - Info: similar spread
   - Canvas: editor UI, toolbars, panels (5+)

**What we didn't add:**
- `--tertiary` (no clear use case)
- `--info-light`, `--info-dark` (use opacity)
- `--success-border` (use success with opacity)

**Precedent set:** January 2026  
**Revisit when:** Adding new component that needs distinct semantic color

---

## Component Architecture

### Decision: No Component-Specific Tokens

**What we rejected:**
```css
--button-primary-bg
--input-background
--card-header-bg
```

**Why:**
1. **Duplicate system**
   - Button already uses `--primary`
   - Creating `--button-primary-bg` that references `--primary` = pointless layer

2. **Maintenance overhead**
   - Change primary color = update button token too
   - Why have the indirection?

3. **Cognitive load**
   - Which token do I use? `--primary` or `--button-primary-bg`?

**Trade-off accepted:**
- Less explicit component-to-token mapping
- But simpler mental model

**Precedent set:** January 2026  
**Revisit when:** Never

---

### Decision: No Shadow Tokens

**What we rejected:**
```css
--shadow-sm
--shadow-md
--shadow-button
--shadow-card
```

**Why:**
1. **Tailwind provides this**
   - `shadow-sm`, `shadow-md`, `shadow-lg` utilities
   - Already consistent across design

2. **Not semantic concepts**
   - Shadows are visual effects, not semantic meaning
   - Don't map to brand identity

3. **Component-specific anyway**
   - Different shadows per component
   - Hard to make semantic

**Trade-off accepted:**
- Can't change shadow globally via token
- But shadow changes are rare
- Use Tailwind's shadow scale

**Precedent set:** January 2026  
**Revisit when:** Brand requires unique shadow style across all components

---

### Decision: States as Interaction Physics (Not Variants)

**What we chose:**
Figma components have variants: default, secondary, destructive, ghost  
States (hover, active, disabled) handled in code via modifiers

**What we rejected:**
Figma variants: default, default-hover, default-active, default-disabled...

**Why:**
1. **Variant explosion**
   - 4 variants × 4 states = 16 Figma variants
   - Unmaintainable

2. **Can't implement this way**
   - Code doesn't have "hover variant"
   - Code has CSS `:hover` pseudoclass

3. **Design vs. interaction**
   - Designers design states (visual)
   - Developers implement interaction (code)
   - Clean separation

**How states are documented:**
- Component spec lists: default appearance
- Then: "Hover: 90% opacity. Active: 80% opacity. Disabled: 50% opacity."
- Implemented in code, not Figma variants

**Precedent set:** January 2026  
**Revisit when:** Never

---

## Tool Decisions

### Decision: Figma as Source of Truth

**What we chose:**
Design in Figma → Export specs → Implement in code

**What we rejected:**
- Code first, Figma later
- "Living style guide" generated from code
- Storybook as design tool

**Why:**
1. **Designer workflow**
   - Designers work in Figma
   - Not in code or Storybook

2. **Token binding**
   - Figma variables are the canonical tokens
   - Code imports them

3. **Handoff clarity**
   - Design is "done" when Figma is done
   - Code implements design (not interprets)

**Trade-off accepted:**
- Code can't deviate from design without changing Figma first
- Extra step if developer finds implementation issue
- But clearer responsibility boundaries

**Precedent set:** January 2026  
**Revisit when:** Team is 100% developers (no dedicated designer)

---

### Decision: ShadCN as Execution Layer

**What we chose:**
- Use ShadCN components as-is
- Adapt our tokens to their structure
- Don't fork or heavily modify

**What we rejected:**
- Building from scratch
- Heavily customizing ShadCN
- Using different component library

**Why:**
1. **Battle-tested**
   - ShadCN patterns are proven
   - Accessibility built-in
   - Active community

2. **Maintenance**
   - Upstream updates available
   - Security patches flow down
   - We don't maintain component primitives

3. **Adoption**
   - Developers familiar with ShadCN
   - Extensive docs and examples
   - Lower learning curve

**Trade-off accepted:**
- Constrained by ShadCN's opinions
- Can't have patterns they don't support
- But that's a feature, not a bug (prevents over-engineering)

**Precedent set:** January 2026  
**Revisit when:** ShadCN abandoned OR we need patterns it fundamentally can't support

---

## Process Decisions

### Decision: "5+ Usages" Rule for New Tokens

**The rule:** A token must be used in 5+ places to justify existence.

**Why:**
1. **Prevents speculation**
   - "We might need this" = usually don't
   - Unused tokens = cognitive load

2. **Forces consolidation**
   - Can existing tokens work?
   - Encourages reuse over proliferation

3. **Empirical basis**
   - Real usages, not theoretical
   - Easier to justify to team

**How to apply:**
Before adding token, list 5+ actual components/use cases.

**Exception:**
Intent colors (success, warning, info) added with <5 usages initially because pattern is obvious and expansion is certain.

**Precedent set:** January 2026  
**Revisit when:** Team questions arbitrary "5" number (could be 3 or 7)

---

### Decision: Version Control Strategy

**What we chose:**
- Token changes = major version
- Component additions = minor version
- Bug fixes = patch version

**Why:**
Semantic versioning makes breaking changes obvious.

**Major breaking changes:**
- Removing tokens
- Renaming tokens
- Changing token architecture

**Minor additions:**
- New components
- New tokens (following rules)

**Patches:**
- Bug fixes
- Hex value adjustments (same semantic)
- Documentation

**Precedent set:** January 2026

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

**Status:** Not yet decided

**Current:** Using Tailwind defaults (duration-150, ease-in-out)

**Question:** Do we need design system animation tokens?

**Needs decision when:** Animation becomes brand differentiator

---

### Question: Breakpoint Strategy

**Status:** Using Tailwind defaults (sm, md, lg, xl, 2xl)

**Question:** Do we need custom breakpoints for product?

**Needs decision when:** Design requires non-standard responsive behavior

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
