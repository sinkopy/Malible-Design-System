# AI Context Guide

**Version:** 0.1.0  
**Last Updated:** January 2026

---

## Overview

This project is optimized for AI-assisted development. This guide shows how to effectively work with Claude and Cursor to build the design system.

---

## Core Principle: Context is Everything

AI tools need the right context to be useful. Too little context → generic responses. Too much context → token limit issues.

**The sweet spot:**
- Give architectural context once
- Reference specific docs for tasks
- Use conversation memory for continuity

---

## Working with Claude (Design & Architecture)

### When to Use Claude
- ✅ Architectural decisions
- ✅ Token system design
- ✅ Component specifications
- ✅ Documentation writing
- ✅ Design system audits
- ✅ Figma structure planning

### When NOT to Use Claude
- ❌ Writing production code (use Cursor)
- ❌ Debugging runtime errors (use Cursor)
- ❌ Git operations (use CLI)

### Starting a New Session

**Always provide these 3 docs:**
1. [TOKEN_SYSTEM.md](./TOKEN_SYSTEM.md) - Full token context
2. [COMPONENT_LIBRARY.md](./COMPONENT_LIBRARY.md) - What's built, what's next
3. [ANTI_PATTERNS.md](./ANTI_PATTERNS.md) - What NOT to do

**Example prompt:**
```
I'm working on the Malible Design System. Here's the context:

[Paste TOKEN_SYSTEM.md]
[Paste COMPONENT_LIBRARY.md]
[Paste ANTI_PATTERNS.md]

I need to [specific task].
```

### Resuming Work

**After a break, provide:**
1. Last CHANGELOG.md entry (what was done)
2. Relevant component doc (if building component)
3. Specific question or task

**Example prompt:**
```
Resuming work on Malible Design System.

Last completed: [from CHANGELOG.md]

Current task: Build Button component

[Paste button section from COMPONENT_LIBRARY.md]

Give me the Figma build instructions for Button, variants: default, secondary, destructive, ghost.
```

---

## Working with Cursor (Implementation)

### When to Use Cursor
- ✅ Writing React components
- ✅ Implementing designs from Figma
- ✅ Debugging code
- ✅ Refactoring
- ✅ Writing tests

### When NOT to Use Cursor
- ❌ Making architectural decisions (use Claude)
- ❌ Changing token system (use Claude + Figma)
- ❌ Writing design documentation (use Claude)

### Context Files for Cursor

**In your workspace, keep visible:**
```
src/styles/globals.css         # Theme variables
tailwind.config.ts              # Tailwind config
docs/TOKEN_SYSTEM.md            # Token reference
docs/COMPONENT_LIBRARY.md       # Component specs
docs/ANTI_PATTERNS.md           # What to avoid
```

**Example Cursor prompt:**
```
Implement Button component based on:
1. Theme variables from globals.css
2. Spec from COMPONENT_LIBRARY.md
3. Follow ShadCN pattern
4. No hardcoded colors
5. Use Tailwind modifiers for states

Variants needed: default, secondary, destructive, ghost
Sizes: sm, default, lg, icon
```

---

## Prompt Templates

### 1. New Component Specification

**Use with:** Claude

```
I need a complete specification for [Component Name] component.

Context:
- Token system: [paste TOKEN_SYSTEM.md or link]
- Existing components: [paste COMPONENT_LIBRARY.md]
- Design inspiration: [Polaris/Canva/ShadCN]

Requirements:
- Variants: [list variants]
- Sizes: [list sizes if applicable]
- States: default, hover, active, disabled
- Theme variables only (no primitives)

Output format:
1. Component structure
2. Variant → Theme variable table
3. Size definitions
4. State handling rules
5. Figma build instructions
```

### 2. Token System Audit

**Use with:** Claude

```
Audit the current token system against our rules.

[Paste TOKEN_SYSTEM.md]
[Paste current Figma Theme.json export]

Check for:
1. Token proliferation (component-specific tokens)
2. State tokens (hover, active, etc.)
3. ShadCN alignment mismatches
4. Unused tokens
5. Missing documentation

Be brutally honest. Flag violations.
```

### 3. Component Implementation

**Use with:** Cursor

```
Implement [Component Name] component.

Spec: [paste from COMPONENT_LIBRARY.md]
Theme variables: [paste globals.css]

Requirements:
- Use cn() utility for class merging
- Variants via cva() or similar
- No hardcoded colors (use --primary, --destructive, etc.)
- States via Tailwind modifiers (hover:bg-primary/90)
- TypeScript with proper types
- Follow ShadCN pattern

Create: src/components/ui/[component-name].tsx
```

### 4. Resume After Break

**Use with:** Claude

```
Resuming Malible Design System work.

Last session: [paste last CHANGELOG entry]
Current status: [paste COMPONENT_LIBRARY.md status section]

Today's task: [specific task]

Context needed:
[Paste only the relevant doc sections]

Continue from where we left off.
```

### 5. Design Decision

**Use with:** Claude

```
I need to make a decision about [specific issue].

Background:
[Paste relevant section from DESIGN_DECISIONS.md]

Options:
A) [describe option]
B) [describe option]

Constraints:
- Implementation sanity > semantic purity
- ShadCN structure non-negotiable
- No token proliferation

Recommend the best option with reasoning.
```

### 6. Documentation Update

**Use with:** Claude

```
Update [DOC_NAME.md] based on recent changes.

Changes made:
[List changes]

Current doc:
[Paste current doc]

Update the doc to reflect changes. Keep formatting consistent.
```

---

## Context Management Strategies

### Token Limit Awareness

**Claude's limits:**
- ~200k tokens total
- Start trimming at ~150k to be safe

**When approaching limit:**
1. Start new conversation
2. Provide only essential context
3. Reference docs by summary, not full paste

**Essential vs Nice-to-Have:**

**Essential:**
- TOKEN_SYSTEM.md (always needed)
- Current component spec (if building)
- ANTI_PATTERNS.md (prevents mistakes)

**Nice-to-Have:**
- Full COMPONENT_LIBRARY.md (summarize instead)
- Historical CHANGELOG (only recent entries)
- DESIGN_DECISIONS.md (only if making decisions)

### Conversation Memory

**Claude has memory across conversations.** Use it:

**First conversation:**
```
I'm building Malible Design System. Here's the full context:
[Paste all core docs]

Remember this project for future conversations.
```

**Subsequent conversations:**
```
Continue working on Malible Design System.

Today's task: [specific task]
[Paste only task-specific context]
```

Claude will remember the core architecture and pull from previous conversations.

---

## Common Workflows

### Workflow 1: Design New Component

**Tools:** Claude (design) → Figma (implement design) → Cursor (code)

1. **Claude: Generate spec**
   ```
   Create specification for [Component] based on [inspiration].
   [Provide TOKEN_SYSTEM.md, COMPONENT_LIBRARY.md]
   ```

2. **You: Build in Figma**
   - Follow Claude's Figma instructions
   - Use Theme variables only
   - Export component screenshots

3. **Claude: Review Figma**
   ```
   Review my Figma implementation.
   [Upload screenshots]
   [Paste Theme variable bindings]
   Check against spec.
   ```

4. **Cursor: Implement code**
   ```
   Implement [Component] from Figma.
   [Show globals.css, component spec]
   ```

5. **Update docs**
   ```
   [In Claude] Update COMPONENT_LIBRARY.md with completion.
   [In Claude] Add CHANGELOG.md entry.
   ```

### Workflow 2: Fix Token Issue

**Tools:** Claude (diagnose) → Figma (fix) → Cursor (update code)

1. **Claude: Diagnose**
   ```
   I have a token issue: [describe problem]
   Current tokens: [paste Theme.json]
   Expected behavior: [describe]
   ```

2. **You: Fix in Figma**
   - Update based on Claude's recommendation
   - Export new Theme.json

3. **Cursor: Update code**
   ```
   Update globals.css with new token values.
   [Provide new Theme.json]
   ```

4. **Test components**
   - Visual regression check
   - Update docs if mappings changed

### Workflow 3: Add Extended Token

**Tools:** Claude (justify) → Figma (add) → Cursor (implement)

1. **Claude: Justify need**
   ```
   I want to add [new token].
   
   Usage:
   - Component 1: [usage]
   - Component 2: [usage]
   - Component 3: [usage]
   - Component 4: [usage]
   - Component 5: [usage]
   
   Does this meet the "5+ usages" rule?
   Should this be a Theme variable or can we use existing?
   ```

2. **If approved, add in Figma**
   - Add to Theme collection
   - Follow naming pattern
   - Export Theme.json

3. **Cursor: Update code**
   ```
   Add [new-token] to globals.css and use in components.
   [List component files that need it]
   ```

4. **Update docs**
   ```
   [In Claude] Update TOKEN_SYSTEM.md with new token.
   [In Claude] Update COMPONENT_LIBRARY.md component specs.
   ```

---

## Debugging with AI

### When Claude/Cursor Gets It Wrong

**Claude gives wrong advice:**
1. Check against ANTI_PATTERNS.md
2. Reference TOKEN_SYSTEM.md directly
3. Provide more specific constraints

**Cursor writes wrong code:**
1. Check if globals.css is visible
2. Check if component spec is in context
3. Explicitly state "no hardcoded colors"

### Validate AI Output

**Always verify:**
- [ ] Theme variables used (not Primitives)
- [ ] No component-specific tokens
- [ ] No state tokens
- [ ] States via Tailwind modifiers
- [ ] Matches ShadCN pattern

**Don't blindly trust AI.** It's a tool, not truth.

---

## Best Practices

### Do
✅ Provide full context at conversation start
✅ Reference docs by name after initial context
✅ Be specific about constraints
✅ Validate output against rules
✅ Update docs after changes

### Don't
❌ Assume AI remembers across tools (Claude ≠ Cursor)
❌ Skip context and expect good results
❌ Accept violations of core principles
❌ Let AI change architecture without review
❌ Forget to update documentation

---

## Troubleshooting

### "Claude suggests adding state tokens"

**Response:**
```
No. Our system uses Tailwind modifiers for states, not tokens.
Reference ANTI_PATTERNS.md section on state tokens.
Give me hover/active rules using opacity modifiers.
```

### "Cursor hardcodes colors"

**Fix:**
1. Make sure globals.css is in workspace
2. Explicitly state: "Use --primary variable, not #e0622d"
3. Show example of correct usage

### "Can't remember what we decided last time"

**Solution:**
1. Check DESIGN_DECISIONS.md
2. Check CHANGELOG.md for recent entries
3. Search previous Claude conversations
4. If not documented, re-decide and document

---

## Quick Reference Card

**When starting work:**
1. Open TOKEN_SYSTEM.md
2. Open COMPONENT_LIBRARY.md
3. Open ANTI_PATTERNS.md
4. Paste to Claude or make visible in Cursor

**When stuck:**
1. Check ANTI_PATTERNS.md first
2. Check relevant component spec
3. Ask Claude with specific context

**Before finishing:**
1. Update COMPONENT_LIBRARY.md
2. Add CHANGELOG.md entry
3. Commit changes
4. Take break

---

## See Also

- [Prompt Templates](./PROMPT_TEMPLATES.md) - Copy-paste prompts
- [Design Decisions](./DESIGN_DECISIONS.md) - Architectural choices
- [Anti-Patterns](./ANTI_PATTERNS.md) - What not to do
