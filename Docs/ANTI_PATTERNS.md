# Anti-Patterns

**Version:** 0.1.0  
**Last Updated:** January 2026

---

## Purpose

This document lists **what NOT to do** in the Malible Design System. These are mistakes that break the architecture, create technical debt, or violate core principles.

**When in doubt, check this first.**

---

## Token Layer Violations

### ❌ Creating Component-Specific Tokens

**Wrong:**
```css
--button-primary-bg: var(--primary);
--button-secondary-bg: var(--secondary);
--input-background: var(--background);
--card-header-bg: var(--muted);
```

**Why it's wrong:**
- Duplicates the entire token system
- Components already have Theme variables
- Zero benefit, pure maintenance overhead

**Right:**
Components use Theme variables directly:
- Button uses `--primary`
- Input uses `--background`
- Card header uses `--muted`

---

### ❌ Creating State Tokens

**Wrong:**
```css
--primary-hover: #...;
--primary-active: #...;
--primary-disabled: #...;
--destructive-hover: #...;
```

**Why it's wrong:**
- States are Tailwind's job, not tokens
- Creates explosion of variables
- Breaks ShadCN patterns

**Right:**
```tsx
className="bg-primary hover:bg-primary/90 active:bg-primary/80 disabled:opacity-50"
```

States handled via opacity modifiers, not new tokens.

---

### ❌ Keeping Semantic Layer as Variables

**Wrong (3-layer system):**
```
Primitives → Semantic (surface-*, text-*, border-*) → Theme
```

**Why it's wrong:**
- Extra maintenance overhead
- Slows down designers
- Indirection for no benefit

**Right (2-layer system):**
```
Primitives → Theme → Components
```

Semantic layer exists in **documentation only**, not as Figma variables.

---

### ❌ Adding Prefixes to Theme Variables

**Wrong:**
```css
--general-background: #ffffff;
--general-primary: #e0622d;
--malible-destructive: #bf1616;
```

**Why it's wrong:**
- Breaks ShadCN component expectations
- Components look for `--primary`, not `--general-primary`

**Right:**
```css
--background: #ffffff;
--primary: #e0622d;
--destructive: #bf1616;
```

No prefixes. Match ShadCN exactly.

---

### ❌ Semantic Token Sprawl

**Wrong:**
```css
--info: #008ed6;
--info-foreground: #ffffff;
--info-background: #eaf8ff;
--info-border: #70cfff;
--info-light: #c1eafe;
--info-dark: #003651;
```

**Why it's wrong:**
- ShadCN pattern is: base + foreground. That's it.
- More than 2 variables per context = token bloat

**Right:**
```css
--info: #008ed6;
--info-foreground: #ffffff;
```

Lighter/darker shades achieved via opacity modifiers, not new tokens.

---

### ❌ Alpha Values as Tokens

**Wrong:**
```css
--alpha-4: rgba(11, 10, 10, 0.04);
--alpha-9: rgba(11, 10, 10, 0.09);
--alpha-black-8: rgba(0, 0, 0, 0.08);
```

**Why it's wrong:**
- Tailwind already does this with `/10`, `/20`, etc.
- Creates duplicate system

**Right:**
```tsx
className="bg-foreground/10"  // 10% opacity
className="bg-black/5"        // 5% opacity
```

Use Tailwind's built-in opacity utilities.

---

### ❌ Creating Tokens for Single Use

**Wrong:**
Adding `--highlight-yellow: #ffeb3b` used only in one marketing banner.

**Why it's wrong:**
- Violates "5+ usages" rule
- Inline value is fine for one-offs

**Right:**
- If used 1-2 times: Use arbitrary value `bg-[#ffeb3b]`
- If used 3-4 times: Consider extraction
- If used 5+ times: Add to Theme

---

## Component Structure Violations

### ❌ Encoding States in Component Variants

**Wrong (in Figma):**
```
Button
├── Variant: default
├── Variant: default-hover
├── Variant: default-active
├── Variant: default-disabled
├── Variant: secondary
├── Variant: secondary-hover
├── Variant: secondary-active
└── Variant: secondary-disabled
```

**Why it's wrong:**
- Explodes variant count
- States are interaction physics, not design variants
- Can't be implemented this way in code

**Right:**
```
Button
├── Variant: default
├── Variant: secondary
├── Variant: destructive
└── Variant: ghost

States defined in code via modifiers:
hover:bg-primary/90
active:bg-primary/80
disabled:opacity-50
```

---

### ❌ Over-Specifying Typography Tokens

**Wrong:**
```
text.body.large.default
text.body.large.emphasis
text.body.large.subdued
text.body.large.default.hover
```

**Why it's wrong:**
- Too granular
- Creates decision paralysis

**Right:**
Collapse to:
- `--foreground` (body text)
- `--muted-foreground` (subdued)
- Use font-weight utilities for emphasis

---

### ❌ Tokenizing Shadows

**Wrong:**
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);
--shadow-card: 0 2px 8px rgba(0,0,0,0.12);
--shadow-button: 0 1px 3px rgba(0,0,0,0.08);
```

**Why it's wrong:**
- Shadows are visual effects, not semantic concepts
- Tailwind provides shadow-sm, shadow-md, etc.
- Component-specific shadows → token bloat

**Right:**
Use Tailwind's shadow utilities:
```tsx
className="shadow-sm"  // Small shadow
className="shadow-md"  // Medium shadow
className="shadow-lg"  // Large shadow
```

---

## Implementation Violations

### ❌ Hardcoded Hex Values

**Wrong:**
```tsx
<button className="bg-[#e0622d] text-[#ffffff]">
  Click me
</button>
```

**Why it's wrong:**
- Bypasses token system
- Can't update globally
- Defeats purpose of design system

**Right:**
```tsx
<button className="bg-primary text-primary-foreground">
  Click me
</button>
```

---

### ❌ Using !important to Force Styles

**Wrong:**
```css
.button-primary {
  background: var(--primary) !important;
  color: var(--primary-foreground) !important;
}
```

**Why it's wrong:**
- Breaks cascade
- Indicates token mapping is wrong
- Creates override wars

**Right:**
Fix the token mapping. If `--primary` is wrong, change what it references in Theme collection.

---

### ❌ Inline Style with CSS Variables

**Wrong:**
```tsx
<div style={{ backgroundColor: 'var(--primary)' }}>
  Content
</div>
```

**Why it's wrong:**
- Bypasses Tailwind
- Can't use modifiers
- Not co-located with other styles

**Right:**
```tsx
<div className="bg-primary">
  Content
</div>
```

---

### ❌ Forking ShadCN Components

**Wrong:**
```tsx
// Custom button that uses --brand-primary instead of --primary
export function CustomButton() {
  return <button className="bg-[var(--brand-primary)]">...</button>
}
```

**Why it's wrong:**
- Diverges from ShadCN
- Now you maintain a fork
- Breaks updates

**Right:**
Map your brand primary **TO** `--primary` in Theme collection. Use ShadCN Button as-is.

---

### ❌ Creating Wrapper Components for Token Translation

**Wrong:**
```tsx
// Wrapper that translates semantic tokens to ShadCN
function ThemedButton({ variant, ...props }) {
  const bg = variant === 'brand' ? 'var(--surface-brand)' : 'var(--primary)';
  return <Button style={{ background: bg }} {...props} />;
}
```

**Why it's wrong:**
- Runtime translation overhead
- Hides what's actually happening
- Parallel token system in disguise

**Right:**
`--primary` **IS** your brand color. No translation needed.

---

## Design Process Violations

### ❌ Pixel-Pushing Instead of Using System

**Wrong:**
Designer: "The button padding should be 13px, not 12px or 16px."

**Why it's wrong:**
- Breaks spacing scale
- Creates one-off values
- System exists to prevent this

**Right:**
Use `spacing-12` (12px) or `spacing-16` (16px). If neither works, the design needs adjustment, not the system.

---

### ❌ Adding Tokens Before Components Exist

**Wrong:**
"Let's add `--tertiary`, `--quaternary`, `--quinary` variants now in case we need them."

**Why it's wrong:**
- Speculative design
- Tokens without usage = dead code
- Adds cognitive load

**Right:**
Add tokens when you have 5+ actual usages. Not before.

---

### ❌ Designing Without Theme Variables

**Wrong (in Figma):**
Using raw Primitive values directly in components:
- Button fill: `Primitives/orange-600`
- Text fill: `Primitives/neutral-950`

**Why it's wrong:**
- Bypasses Theme layer
- Can't change globally
- Breaks semantic intent

**Right:**
- Button fill: `Theme/primary`
- Text fill: `Theme/foreground`

---

## Workflow Violations

### ❌ Updating Code Before Figma

**Wrong workflow:**
```
1. Write code with new token
2. Update Figma later
3. Token mismatch hell
```

**Why it's wrong:**
- Figma is source of truth
- Creates divergence
- Design → code, not code → design

**Right workflow:**
```
1. Design in Figma with Theme variables
2. Export specifications
3. Implement in code
4. Sync point: both use same tokens
```

---

### ❌ Not Documenting Decisions

**Wrong:**
Make architectural change, don't document why.

**Why it's wrong:**
- 3 months later: "Why did we do this?"
- New team member: "This seems wrong..."
- Temptation to "fix" what was intentional

**Right:**
- Add entry to DESIGN_DECISIONS.md
- Add entry to CHANGELOG.md
- Future you will thank you

---

### ❌ Accepting AI Suggestions Without Validation

**Wrong:**
```
Claude: "Add --button-hover token for this"
You: "OK" *adds token*
```

**Why it's wrong:**
- AI doesn't enforce your rules
- Creates violations
- You're responsible for architecture

**Right:**
```
Claude: "Add --button-hover token"
You: "No. Check ANTI_PATTERNS.md - we don't use state tokens. 
     Give me hover rule using opacity modifiers."
Claude: "You're right. Use hover:bg-primary/90"
```

Validate against principles, don't blindly accept.

---

## Version Control Violations

### ❌ Committing Figma Files

**Wrong:**
```
git add design-system.fig
git commit -m "Updated Figma file"
```

**Why it's wrong:**
- Binary files in Git
- Huge repo size
- Merge conflicts impossible to resolve

**Right:**
- Keep Figma file on Figma (link in README)
- Commit JSON exports of variables
- Commit screenshots for reference

---

### ❌ Not Versioning Documentation

**Wrong:**
Update TOKEN_SYSTEM.md, don't update CHANGELOG.md.

**Why it's wrong:**
- Can't track when things changed
- Can't roll back if needed
- No audit trail

**Right:**
Every token change → CHANGELOG.md entry with version bump.

---

## When You See These, Stop Immediately

🚨 **Red flags that indicate system violation:**

1. A token name contains "component" (e.g., `--button-bg`)
2. A token name contains "state" (e.g., `--primary-hover`)
3. More than 2 variables for one semantic context (e.g., `--info`, `--info-foreground`, `--info-border`)
4. A prefix on Theme variables (e.g., `--general-primary`)
5. Hardcoded hex values in component code
6. Inline `style={}` with CSS variables
7. Component variants for states (e.g., `Button/hover`)
8. Raw Primitive values used directly in components

**If you see any of these, stop and fix before continuing.**

---

## Checklist: "Am I Creating an Anti-Pattern?"

Before adding anything new, ask:

- [ ] Is this a component-specific token? → ❌ Don't create
- [ ] Is this a state token? → ❌ Use modifiers instead
- [ ] Does this have 5+ usages? → If no, don't tokenize
- [ ] Does this match ShadCN patterns? → If no, rethink
- [ ] Am I adding a 3rd variable to a context? → Probably wrong
- [ ] Am I bypassing the token system? → Fix mapping instead
- [ ] Can this be solved with existing tokens? → Use existing
- [ ] Does this violate "implementation sanity"? → Simplify

**When in doubt, check DESIGN_DECISIONS.md for precedent.**

---

## See Also

- [Design Decisions](./DESIGN_DECISIONS.md) - Why we made key choices
- [Token System](./TOKEN_SYSTEM.md) - Correct token usage
- [AI Context Guide](./AI_CONTEXT_GUIDE.md) - How to work with AI without violations
