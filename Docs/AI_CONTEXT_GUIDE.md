# AI Context Guide

**Version:** 1.2.0  
**Last Updated:** January 13, 2026

---

## Overview

This project is optimized for AI-assisted development. This guide shows how to effectively work with Claude and Cursor to build the design system.

---

## Core Principle: Context is Everything

AI tools need the right context to be useful. Too little context → generic responses. Too much context → token limit issues.

**The sweet spot:**
- Give architectural context once
- Reference specific docs for tasks
- Use Figma API for exact specs

---

## Working with Claude (Design & Architecture)

### When to Use Claude
- ✅ Architectural decisions
- ✅ Token system design
- ✅ Component specifications
- ✅ Documentation writing
- ✅ Design system audits
- ✅ Figma spec extraction (via API)

### When NOT to Use Claude
- ❌ Writing production code (use Cursor)
- ❌ Debugging runtime errors (use Cursor)
- ❌ Git operations (use CLI)

### Starting a New Session

**Always provide these 2 docs:**
1. [TOKEN_SYSTEM.md](./TOKEN_SYSTEM.md) - Full token context
2. [ANTI_PATTERNS.md](./ANTI_PATTERNS.md) - What NOT to do

**Example prompt:**
```
I'm working on the Malible Design System. Here's the context:

[Paste TOKEN_SYSTEM.md]
[Paste ANTI_PATTERNS.md]

I need to [specific task].
```

### Resuming Work

**After a break, provide:**
1. Last session summary
2. Relevant component doc (if building)
3. Specific question or task

**Example prompt:**
```
Resuming work on Malible Design System.

Last completed: Badge component with 10 variants
Current task: Build Label and Separator components

Continue from where we left off.
```

---

## Using Figma API (Critical Workflow)

### Why This Matters

**Old workflow (slow, inaccurate):**
```
1. Look at Figma design
2. Guess values: "looks like 12px padding, maybe #e5e5e5"
3. Implement
4. Compare, iterate
5. Still not quite right
```

**New workflow (fast, accurate):**
```
1. Get Figma node URL
2. Call get_design_context
3. Get exact values: 12px padding, #e5e5e5 border
4. Implement once, correct
```

### How to Extract Specs

**Step 1: Get the URL**
From Figma, right-click component → "Copy link to selection"

URL format:
```
https://figma.com/design/F0uwJvl8PSwAkciuZfE6Ed/Malible-X-ShadCn?node-id=842-44442
```

**Step 2: Ask Claude to extract**
```
Extract specs from this Figma component:
https://figma.com/design/F0uwJvl8PSwAkciuZfE6Ed/Malible-X-ShadCn?node-id=842-44442
```

**Step 3: Claude calls Figma API**
Claude will call `get_design_context` and return:
- Exact colors (HSL values)
- Pixel dimensions
- Padding/margins
- Border radius
- Shadow values (including inner vs drop shadows)
- Font specs

### What the API Can Extract

| Property | Example Output |
|----------|----------------|
| Colors | `bg-[var(--success,#3ea377)]` |
| Dimensions | `w-[32px] h-[18px]` |
| Radius | `rounded-[12px]` |
| Shadows | `shadow-[0px_1px_3px_-1px_rgba(26,26,26,0.05)]` |
| Inset shadows | `shadow-[inset_0px_-1px_0px_...]` |
| Typography | `font-["Inter:Medium"] text-[14px]` |

### Real Example

**Request:**
```
Get the specs for the Link button variant:
https://figma.com/design/F0uwJvl8PSwAkciuZfE6Ed/...?node-id=4088-5805
```

**API Response revealed:**
- Color: `--info, #008ed6` (not primary!)
- Has underline decoration
- Font: Inter Medium 14px

This saved us from implementing wrong (primary orange) and iterating.

---

## Working with Cursor (Implementation)

### When to Use Cursor
- ✅ Writing React components
- ✅ Implementing designs from specs
- ✅ Debugging code
- ✅ Refactoring
- ✅ Writing tests

### Context Files for Cursor

**Keep visible in workspace:**
```
src/styles/globals.css         # Theme variables
tailwind.config.ts             # Tailwind config
docs/TOKEN_SYSTEM.md           # Token reference
docs/ANTI_PATTERNS.md          # What to avoid
```

**Example Cursor prompt:**
```
Implement Label component based on these specs:

- Font: Inter Medium 14px (weight 400 in Typekit)
- Color: --foreground (#1a1a1a)
- Disabled: --muted-foreground (#737373)
- Required asterisk: --destructive (#bf1616)

Follow ShadCN pattern. No hardcoded colors.
```

---

## Prompt Templates

### 1. Extract Component Specs from Figma

```
Extract specs from this Figma component:
[Paste Figma URL with node-id]

I need:
- Colors (as tokens)
- Dimensions
- Typography
- States if visible
```

### 2. New Component Implementation

```
Implement [Component Name] component.

Specs from Figma:
[Paste extracted specs]

Requirements:
- Use Theme variables from globals.css
- States via Tailwind modifiers
- Use Phosphor icons (not Lucide)
- Font weights: 300/400/500/600 only
- Follow ShadCN pattern
```

### 3. Add Component Documentation

```
Create documentation page for [Component].

Pattern to follow:
- DocPage with category, title, description
- DocSection for each variant group
- ComponentExample with preview + code
- Add to navigation order

Reference existing pages: button-docs.tsx, badge-docs.tsx
```

### 4. Token Audit

```
Audit this component against our token rules.

[Paste component code]

Check for:
1. Hardcoded hex values
2. Component-specific tokens
3. State tokens
4. Lucide icons (should be Phosphor)
5. Wrong font weights
```

### 5. Resume After Break

```
Resuming Malible Design System work.

Last session: [what was done]
Current status: 6 components complete

Today's task: [specific task]
```

---

## Common Workflows

### Workflow 1: Design New Component

**Tools:** Claude (specs) → Cursor (code)

1. **Get Figma URL** for component
2. **Claude: Extract specs**
   ```
   Extract specs from: [Figma URL]
   ```
3. **Cursor: Implement**
   ```
   Implement [Component] from these specs:
   [Paste specs from Claude]
   ```
4. **Create doc page**
5. **Update navigation**

### Workflow 2: Fix Design Mismatch

**Tools:** Claude (diagnose) → Cursor (fix)

1. **Claude: Check Figma**
   ```
   Our [Component] doesn't match Figma.
   Extract current specs: [Figma URL]
   Compare to our implementation.
   ```
2. **Cursor: Apply fix**
   ```
   Update [Component] with correct specs:
   [Paste corrections]
   ```

### Workflow 3: Add Token

**Only if you have 5+ usages!**

1. **Claude: Justify**
   ```
   I want to add [new token].
   
   Usages:
   - Component 1: [usage]
   - Component 2: [usage]
   - Component 3: [usage]
   - Component 4: [usage]
   - Component 5: [usage]
   
   Does this meet our rules?
   ```
2. **If approved:**
   - Add to Figma Theme collection
   - Update globals.css
   - Update TOKEN_SYSTEM.md

---

## Debugging with AI

### When Claude Gets It Wrong

**Claude suggests state token:**
```
You: "No. Check ANTI_PATTERNS.md - we don't use state tokens.
     Give me hover rule using opacity modifiers."
```

**Claude suggests wrong color:**
```
You: "Check Figma. Link should use --info (blue), not --primary.
     Extract specs from: [Figma URL]"
```

### When Cursor Writes Wrong Code

1. Check if globals.css is visible
2. Explicitly state constraints:
   ```
   Requirements:
   - NO hardcoded hex values
   - NO Lucide icons (use Phosphor)
   - Font weights ONLY 300/400/500/600
   ```

### Validate AI Output

**Always verify:**
- [ ] Theme variables used (not hex)
- [ ] No component-specific tokens
- [ ] No state tokens
- [ ] States via Tailwind modifiers
- [ ] Phosphor icons (not Lucide)
- [ ] Font weights are standard

---

## Best Practices

### Do
✅ Use Figma API for exact specs
✅ Provide TOKEN_SYSTEM.md + ANTI_PATTERNS.md
✅ Be specific about constraints
✅ Validate output against rules
✅ Update docs after changes

### Don't
❌ Guess Figma values (use API)
❌ Accept violations of core principles
❌ Let AI change architecture without review
❌ Use Lucide icons
❌ Use non-standard font weights

---

## Quick Reference Card

**When starting work:**
1. Have TOKEN_SYSTEM.md ready
2. Have ANTI_PATTERNS.md ready
3. Get Figma URLs for components

**When building component:**
1. Extract specs via Figma API
2. Implement with exact values
3. Validate against anti-patterns
4. Create documentation

**When stuck:**
1. Check ANTI_PATTERNS.md
2. Check DESIGN_DECISIONS.md
3. Extract fresh specs from Figma

**Before finishing:**
1. Validate no anti-patterns
2. Doc page complete
3. Navigation updated
4. Commit changes

---

## See Also

- [Token System](./TOKEN_SYSTEM.md) - Complete token reference
- [Anti-Patterns](./ANTI_PATTERNS.md) - What not to do
- [Design Decisions](./DESIGN_DECISIONS.md) - Architectural choices
