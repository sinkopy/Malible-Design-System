# Anti-Patterns

**Version:** 1.2.0  
**Last Updated:** January 13, 2026

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

## Typography Violations

### ❌ Using font-weight: 650

**Wrong:**
```css
h1 {
  font-weight: 650;
}
```

**Why it's wrong:**
- 650 doesn't exist in Typekit's weight mapping
- Font will fallback or render incorrectly

**Right:**
```css
h1 {
  font-weight: 500; /* DemiBold in Typekit */
}
```

**Typekit Mapping:**
| Name | Typekit Weight |
|------|---------------|
| Regular | 300 |
| Medium | 400 |
| DemiBold | 500 |
| Bold | 600 |

---

### ❌ Using Wrong Font for Context

**Wrong:**
```tsx
// Using heading font for body text
<p className="font-heading">Body text here</p>

// Using body font for headings
<h1 className="font-body">Heading</h1>
```

**Right:**
```tsx
// TT Commons Pro for headings
<h1 className="font-heading">Heading</h1>

// Inter for body
<p className="font-body">Body text here</p>

// JetBrains Mono for code
<code className="font-mono">code</code>
```

---

## Icon Violations

### ❌ Using Lucide Icons

**Wrong:**
```tsx
import { Check, X, Copy } from "lucide-react"
```

**Why it's wrong:**
- We standardized on Phosphor icons
- Mixing icon libraries = inconsistent visual weight

**Right:**
```tsx
import { Check, X, Copy } from "@phosphor-icons/react"
```

**Default weight:** Regular (not Bold or Light)

---

### ❌ Inconsistent Icon Sizes

**Wrong:**
```tsx
<Check size={14} />
<X size={18} />
<Copy size={16} />
```

**Right:**
Standardized sizes per context:
```tsx
// In buttons
<Check size={16} />  // sm button
<Check size={18} />  // default button
<Check size={20} />  // lg button

// In badges
<Check size={12} />  // sm badge
<Check size={14} />  // default badge
```

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
└── ...
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

### ❌ Using Primary Color for Links

**Wrong:**
```tsx
// Link button using primary (orange)
link: "text-primary underline-offset-4 hover:underline",
```

**Why it's wrong:**
- Figma design specifies blue for links
- Orange primary is for CTAs, not navigation

**Right:**
```tsx
// Link button using info (blue)
link: "text-info underline underline-offset-4 h-auto p-0",
```

---

### ❌ Using Primary Color for Switch Checked State

**Wrong:**
```tsx
// Switch checked state using primary (orange)
data-[state=checked]:bg-primary
```

**Why it's wrong:**
- Figma design specifies green for "on" state
- Green = positive/enabled convention

**Right:**
```tsx
// Switch checked state using success (green)
data-[state=checked]:bg-success
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
// Custom button that diverges from ShadCN pattern
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

## Documentation Violations

### ❌ Using Tabs for Preview/Code

**Wrong:**
```tsx
<Tabs>
  <TabsContent value="preview">...</TabsContent>
  <TabsContent value="code">...</TabsContent>
</Tabs>
```

**Why it's wrong:**
- Extra click to see code
- ShadCN shows both together

**Right:**
```tsx
<ComponentExample code={codeString}>
  <Button>Preview</Button>
</ComponentExample>
// Shows preview AND code simultaneously
```

---

### ❌ Dark Code Blocks

**Wrong:**
```tsx
codeToHtml(code, { theme: "github-dark" })
```

**Why it's wrong:**
- Dark blocks clash with light documentation
- Inconsistent with ShadCN docs aesthetic

**Right:**
```tsx
codeToHtml(code, { theme: "github-light" })
```

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
2. Extract specs via Figma API
3. Implement in code
4. Sync point: both use same tokens
```

---

### ❌ Guessing Figma Values

**Wrong:**
"This looks like about 12px padding and maybe #e5e5e5 for the border..."

**Why it's wrong:**
- Creates iteration cycles
- Specs will be off
- Wastes time

**Right:**
Use Figma API to extract exact values:
```
1. Get Figma URL with node ID
2. Call get_design_context
3. Use exact pixel values, colors, shadows
```

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

## 🚨 Red Flags (Stop Immediately)

If you see any of these, stop and fix:

1. A token name contains "component" (e.g., `--button-bg`)
2. A token name contains "state" (e.g., `--primary-hover`)
3. More than 2 variables for one semantic context
4. A prefix on Theme variables (e.g., `--general-primary`)
5. Hardcoded hex values in component code
6. Inline `style={}` with CSS variables
7. Component variants for states (e.g., `Button/hover`)
8. Raw Primitive values used directly in components
9. Lucide icons instead of Phosphor
10. font-weight values not in [300, 400, 500, 600]

---

## Checklist: "Am I Creating an Anti-Pattern?"

Before adding anything new, ask:

- [ ] Is this a component-specific token? → ❌ Don't create
- [ ] Is this a state token? → ❌ Use modifiers instead
- [ ] Does this have 5+ usages? → If no, don't tokenize
- [ ] Does this match ShadCN patterns? → If no, rethink
- [ ] Am I using Phosphor icons? → If no, switch
- [ ] Is my font-weight standard? → If not 300/400/500/600, wrong
- [ ] Am I hardcoding values? → Use tokens instead
- [ ] Did I check Figma specs? → If guessing, use API

**When in doubt, check DESIGN_DECISIONS.md for precedent.**

---

## See Also

- [Design Decisions](./DESIGN_DECISIONS.md) - Why we made key choices
- [Token System](./TOKEN_SYSTEM.md) - Correct token usage
- [AI Context Guide](./AI_CONTEXT_GUIDE.md) - How to work with AI without violations
