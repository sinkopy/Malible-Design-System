# Quick Start Guide

**Get up and running with Malible Design System in 5 minutes.**

---

## TL;DR

**Design System Stack:**
- Figma (design source of truth)
- ShadCN (component execution)
- 2-layer tokens: Primitives (90) → Theme (28)
- Rule: Implementation sanity > semantic purity

**Already built:**
- ✅ Primitives collection (colors, spacing, radii)
- ✅ Theme collection (ShadCN-compatible variables)
- ✅ Complete documentation

**Next:** Build components using Theme variables.

---

## For Designers

### 1. Access Figma File
[Link to Figma file]

### 2. Understand Token Structure

**Primitives** (hidden, reference only):
- Colors: neutral, orange, red, blue, green, amber, purple
- Spacing: 0, 2, 4, 8, 12, 16, 24, 32
- Radii: 4, 8, full

**Theme** (use these in components):
- background, foreground
- primary, primary-foreground
- destructive, destructive-foreground
- success, warning, info, canvas
- border, input, ring
- radius

### 3. Design Rule: Use Theme Only

❌ **Never** use Primitives directly  
✅ **Always** use Theme variables

**Example:**
- Button background: `Theme/primary` (not `Primitives/orange-600`)
- Text color: `Theme/foreground` (not `Primitives/neutral-950`)

### 4. States? Use Properties, Not Variants

❌ Don't create: Button/default, Button/hover, Button/active  
✅ Do create: Button with variant property (default, secondary, destructive)

States handled in code via opacity modifiers.

---

## For Developers

### 1. Clone Repo

```bash
git clone [repo-url]
cd malible-design-system
npm install
```

### 2. Understand File Structure

```
/docs        # Documentation (read these!)
/figma       # Token exports, component refs
/src         # Implementation
  /components/ui   # ShadCN components
  /styles          # globals.css with tokens
```

### 3. Key Files

**Must read:**
- [TOKEN_SYSTEM.md](./TOKEN_SYSTEM.md) - Complete token reference
- [ANTI_PATTERNS.md](./ANTI_PATTERNS.md) - What NOT to do

**Reference:**
- [COMPONENT_LIBRARY.md](./COMPONENT_LIBRARY.md) - Component specs
- [AI_CONTEXT_GUIDE.md](./AI_CONTEXT_GUIDE.md) - Working with AI tools

### 4. Token Usage in Code

**In globals.css:**
```css
:root {
  --background: #ffffff;
  --foreground: #09090b;
  --primary: #e0622d;
  --primary-foreground: #ffffff;
  /* ... 24 more variables */
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
// ✅ Right
className="bg-primary hover:bg-primary/90 active:bg-primary/80"

// ❌ Wrong
className="bg-primary bg-primary-hover:hover"  // No such token!
```

### 5. Component Pattern

Follow ShadCN structure:

```tsx
// src/components/ui/button.tsx
import { cn } from "@/lib/utils"

interface ButtonProps {
  variant?: "default" | "secondary" | "destructive" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

export function Button({ variant = "default", size = "default", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md",
        // Base styles using Theme variables
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // Size variants
        size === "default" && "h-10 px-4 py-2",
        size === "sm" && "h-9 px-3",
        className
      )}
      {...props}
    />
  )
}
```

---

## For AI-Assisted Development

### Working with Claude (Architecture/Design)

**Starting a session:**
```
I'm working on Malible Design System.

Context:
[Paste TOKEN_SYSTEM.md]
[Paste COMPONENT_LIBRARY.md]
[Paste ANTI_PATTERNS.md]

Task: [Your specific task]
```

**Resuming work:**
```
Continuing Malible Design System.

Last completed: [from CHANGELOG.md]
Current task: [specific task]

[Paste relevant doc section only]
```

### Working with Cursor (Implementation)

**Make these files visible:**
- `src/styles/globals.css`
- `docs/TOKEN_SYSTEM.md`
- `docs/ANTI_PATTERNS.md`

**Example prompt:**
```
Implement Button component.

Requirements:
- Use Theme variables from globals.css
- No hardcoded colors
- States via Tailwind modifiers
- Follow ShadCN pattern

Variants: default, secondary, destructive, ghost
Sizes: sm, default, lg, icon
```

---

## Core Principles (Memorize These)

1. **Implementation Sanity > Semantic Purity**
   - Pragmatic over perfect
   - Maintainable over theoretically correct

2. **No Token Proliferation**
   - No component-specific tokens (e.g., `--button-bg`)
   - No state tokens (e.g., `--primary-hover`)
   - Every token needs 5+ usages

3. **ShadCN Non-Negotiable**
   - Their structure is law
   - We adapt to them, not vice versa

4. **Figma is Source of Truth**
   - Design first, code follows
   - Theme variables drive both

5. **States = Modifiers, Not Tokens**
   - `hover:bg-primary/90` ✅
   - `--primary-hover` token ❌

---

## Common Tasks

### Task: Build a New Component

1. **Check spec** in [COMPONENT_LIBRARY.md](./COMPONENT_LIBRARY.md)
2. **Design in Figma** using Theme variables
3. **Implement in code** following ShadCN pattern
4. **Update docs**: COMPONENT_LIBRARY.md + CHANGELOG.md

### Task: Add a New Token

**Stop.** Do you have 5+ usages? No? Don't add it.

If yes:
1. Add to Figma Theme collection
2. Export `theme.json`
3. Update `globals.css`
4. Update TOKEN_SYSTEM.md
5. Update CHANGELOG.md (minor version bump)

### Task: Fix a Token Issue

1. **Diagnose** with Claude (provide TOKEN_SYSTEM.md)
2. **Fix in Figma** Theme collection
3. **Export** new `theme.json`
4. **Update** `globals.css`
5. **Test** all components
6. **Update** docs

### Task: Resume After Break

1. Read last CHANGELOG.md entry
2. Check COMPONENT_LIBRARY.md status
3. Load relevant docs into Claude/Cursor
4. Continue work

---

## Validation Checklist

Before committing, verify:

### Design (Figma)
- [ ] Components use Theme variables, not Primitives
- [ ] No state variants (hover, active, disabled)
- [ ] No component-specific tokens created

### Code
- [ ] No hardcoded hex values
- [ ] Using Theme variables (`--primary`, not `--orange-600`)
- [ ] States via modifiers (`hover:bg-primary/90`)
- [ ] Matches ShadCN pattern

### Documentation
- [ ] COMPONENT_LIBRARY.md updated
- [ ] CHANGELOG.md entry added
- [ ] No outdated information

---

## Getting Help

### "I'm stuck on [issue]"

1. Check [ANTI_PATTERNS.md](./ANTI_PATTERNS.md) - Is it a known violation?
2. Check [TOKEN_SYSTEM.md](./TOKEN_SYSTEM.md) - Is there a token for this?
3. Check [AI_CONTEXT_GUIDE.md](./AI_CONTEXT_GUIDE.md) - Prompt templates

### "The AI is suggesting something wrong"

Validate against:
- TOKEN_SYSTEM.md (correct token usage)
- ANTI_PATTERNS.md (what NOT to do)
- DESIGN_DECISIONS.md (why we made choices)

Don't blindly accept AI suggestions.

### "Should I add a new token?"

Ask:
1. Do I have 5+ usages? (If no → don't add)
2. Can I use an existing token? (If yes → use existing)
3. Is this component-specific? (If yes → don't add)
4. Is this a state? (If yes → use modifiers)

Still unsure? Ask Claude with TOKEN_SYSTEM.md context.

---

## Next Steps

1. **Read these docs** (30 min):
   - [TOKEN_SYSTEM.md](./TOKEN_SYSTEM.md)
   - [ANTI_PATTERNS.md](./ANTI_PATTERNS.md)
   - [COMPONENT_LIBRARY.md](./COMPONENT_LIBRARY.md)

2. **Explore Figma** (15 min):
   - Open the file
   - Look at Primitives collection
   - Look at Theme collection
   - See how they reference each other

3. **Build first component** (2-4 hours):
   - Start with Button (well-specified)
   - Follow [COMPONENT_BUILD_PLAYBOOK.md](./COMPONENT_BUILD_PLAYBOOK.md)
   - Use AI tools with proper context

4. **Ship it**:
   - Update COMPONENT_LIBRARY.md
   - Add CHANGELOG.md entry
   - Commit and push

---

## Questions?

- Check [AI_CONTEXT_GUIDE.md](./AI_CONTEXT_GUIDE.md) for prompt templates
- Reference [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for file organization
- Read [DESIGN_DECISIONS.md](./DESIGN_DECISIONS.md) for architectural rationale

**You're ready. Go build.**
