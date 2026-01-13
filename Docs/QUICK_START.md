# Quick Start Guide

**Get up and running with Malible Design System in 5 minutes.**

---

## TL;DR

**Design System Stack:**
- Figma (design source of truth)
- ShadCN (component execution)
- 2-layer tokens: Primitives (90) → Theme (33)
- Rule: Implementation sanity > semantic purity

**What's Built:**
- ✅ 6 components: Button, Input, Badge, Switch, Checkbox, Radio
- ✅ 33 theme tokens
- ✅ Documentation site at localhost:5173
- ✅ Full specs in Figma

**Next:** Label, Separator, Card, Alert

---

## For Designers

### 1. Access Figma File
Malible-X-ShadCn (link in project)

### 2. Understand Token Structure

**Primitives** (hidden, reference only):
- Colors: neutral, orange, red, blue, green, amber, purple
- Spacing: 0, 2, 4, 8, 12, 16, 24, 32
- Radii: 4, 8, full

**Theme** (use these in components):
- Core: background, foreground, primary, secondary, destructive
- Semantic: success, warning, info, canvas
- Subtle: info-subtle, success-subtle, warning-subtle, destructive-subtle
- UI: border, input, ring, muted

### 3. Design Rule: Use Theme Only

❌ **Never** use Primitives directly  
✅ **Always** use Theme variables

**Example:**
- Button background: `Theme/primary` (not `Primitives/orange-600`)
- Text color: `Theme/foreground` (not `Primitives/neutral-950`)

### 4. Key Color Decisions

| Element | Color | Token |
|---------|-------|-------|
| Primary CTA | Orange | --primary |
| Link text | Blue | --info |
| Switch checked | Green | --success |
| Error states | Red | --destructive |

---

## For Developers

### 1. Clone and Run

```bash
git clone [repo-url]
cd malible-design-system
npm install
npm run dev
```

Open http://localhost:5173

### 2. Key Files

| File | Purpose |
|------|---------|
| `src/styles/globals.css` | 33 CSS variables |
| `tailwind.config.ts` | Theme colors, fonts |
| `src/components/ui/` | All components |
| `src/pages/` | Documentation pages |

### 3. Token Usage

**In globals.css:**
```css
:root {
  --primary: 17 83% 53%;
  --primary-foreground: 0 0% 100%;
  --info: 200 100% 42%;
  --success: 152 48% 45%;
  /* ... 29 more variables */
}
```

**In components:**
```tsx
// ✅ Right
<button className="bg-primary text-primary-foreground">
  Click me
</button>

// ❌ Wrong
<button className="bg-[#e0622d] text-white">
  Click me
</button>
```

**States:**
```tsx
// ✅ Right - modifiers
className="bg-primary hover:bg-primary/90 active:bg-primary/80"

// ❌ Wrong - no state tokens exist
className="bg-primary-hover"
```

### 4. Current Components

| Component | Variants | Import |
|-----------|----------|--------|
| Button | default, secondary, destructive, outline, ghost, link | `@/components/ui/button` |
| Input | default + states | `@/components/ui/input` |
| Badge | 10 variants (subtle + solid pairs) | `@/components/ui/badge` |
| Switch | on/off with success color | `@/components/ui/switch` |
| Checkbox | unchecked, checked, indeterminate | `@/components/ui/checkbox` |
| Radio | via RadioGroup | `@/components/ui/radio-group` |

### 5. Icon Usage

```tsx
// ✅ Right - Phosphor
import { Check, Copy, X } from "@phosphor-icons/react"

// ❌ Wrong - Lucide
import { Check } from "lucide-react"
```

---

## For AI-Assisted Development

### Working with Claude

**Starting a session:**
```
I'm working on Malible Design System.

Context:
[Paste TOKEN_SYSTEM.md]
[Paste ANTI_PATTERNS.md]

Task: [Your specific task]
```

**Using Figma API:**
```
Extract specs from Figma for [component].
URL: https://figma.com/design/F0uwJvl8PSwAkciuZfE6Ed/...?node-id=XXX-XXX
```

### Working with Cursor

**Make these files visible:**
- `src/styles/globals.css`
- `docs/TOKEN_SYSTEM.md`
- `docs/ANTI_PATTERNS.md`

**Example prompt:**
```
Implement [Component] component.

Requirements:
- Use Theme variables from globals.css
- No hardcoded colors
- States via Tailwind modifiers
- Follow ShadCN pattern
- Use Phosphor icons
```

---

## Core Principles (Memorize)

1. **Implementation Sanity > Semantic Purity**
   - Pragmatic over perfect
   - Maintainable over theoretically correct

2. **No Token Proliferation**
   - No component-specific tokens
   - No state tokens
   - Every token needs 5+ usages

3. **ShadCN Non-Negotiable**
   - Their structure is law
   - We adapt to them

4. **Figma is Source of Truth**
   - Use Figma API for exact specs
   - Don't guess values

5. **States = Modifiers, Not Tokens**
   - `hover:bg-primary/90` ✅
   - `--primary-hover` token ❌

---

## Common Tasks

### Build a New Component

1. Design in Figma using Theme variables
2. Get specs via Figma API (`get_design_context`)
3. Implement following ShadCN pattern
4. Create doc page
5. Add to navigation

### Fix Token Issue

1. Check TOKEN_SYSTEM.md for correct token
2. Update Figma if needed
3. Update globals.css
4. Test components

### Add Documentation

1. Create page in `src/pages/[component]-docs.tsx`
2. Use DocPage, DocSection, ComponentExample
3. Add to router
4. Add to sidebar navigation
5. Add to DocNavigation order

---

## Validation Checklist

### Before Committing

**Design:**
- [ ] Uses Theme variables (not Primitives)
- [ ] No state variants in Figma
- [ ] Matches existing patterns

**Code:**
- [ ] No hardcoded hex values
- [ ] States via Tailwind modifiers
- [ ] Uses Phosphor icons
- [ ] Font weights are 300/400/500/600

**Docs:**
- [ ] Doc page created
- [ ] All variants shown
- [ ] Code examples work

---

## Getting Help

### "I'm stuck on [issue]"

1. Check [ANTI_PATTERNS.md](./ANTI_PATTERNS.md)
2. Check [TOKEN_SYSTEM.md](./TOKEN_SYSTEM.md)
3. Check [DESIGN_DECISIONS.md](./DESIGN_DECISIONS.md)

### "The AI suggests something wrong"

Validate against:
- TOKEN_SYSTEM.md (correct tokens)
- ANTI_PATTERNS.md (what NOT to do)
- DESIGN_DECISIONS.md (why we made choices)

### "Should I add a new token?"

Ask:
1. Do I have 5+ usages?
2. Can I use an existing token?
3. Is this component-specific? (Don't add)
4. Is this a state? (Use modifiers)

---

## Quick Reference

| Need | Token | Hex |
|------|-------|-----|
| Primary button | --primary | #e0622d |
| Link text | --info | #008ed6 |
| Switch on | --success | #3ea377 |
| Error | --destructive | #bf1616 |
| Body text | --foreground | #1a1a1a |
| Secondary text | --muted-foreground | #737373 |
| Borders | --border | #e5e5e5 |

---

**You're ready. Go build.**
