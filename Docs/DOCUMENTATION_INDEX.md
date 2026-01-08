# Documentation Index

**Malible Design System - Complete Documentation Package**  
**Version:** 0.1.0  
**Date:** January 9, 2026

---

## What You Have

✅ **Complete token foundation** (90 Primitives + 28 Theme variables)  
✅ **Full documentation system** (9 core documents)  
✅ **AI-optimized workflows** (Claude + Cursor ready)  
✅ **Clear architectural decisions** (with rationale)

---

## Documentation Map

### 🚀 Start Here (Required Reading)

1. **[README.md](./README.md)** (5 min)
   - Project overview
   - Quick links
   - Current status

2. **[QUICK_START.md](./QUICK_START.md)** (10 min)
   - Get running in 5 minutes
   - Core principles
   - Common tasks

3. **[TOKEN_SYSTEM.md](./TOKEN_SYSTEM.md)** (20 min)
   - Complete token reference
   - All 90 Primitives + 28 Theme variables
   - Hex values, mappings, rationale

4. **[ANTI_PATTERNS.md](./ANTI_PATTERNS.md)** (15 min)
   - Critical: What NOT to do
   - Common violations
   - How to avoid mistakes

---

### 📚 Reference (Read as Needed)

5. **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)**
   - File organization
   - Naming conventions
   - Version control strategy

6. **[DESIGN_DECISIONS.md](./DESIGN_DECISIONS.md)**
   - Why we made key choices
   - Trade-offs accepted
   - When to revisit decisions

7. **[AI_CONTEXT_GUIDE.md](./AI_CONTEXT_GUIDE.md)**
   - How to work with Claude/Cursor
   - Prompt templates
   - Context management

---

### 📝 Working Documents (Update Frequently)

8. **[CHANGELOG.md](./CHANGELOG.md)**
   - Version history
   - What changed when
   - Upcoming milestones

9. **[THEME_VARIABLES_REFERENCE.md](./THEME_VARIABLES_REFERENCE.md)**
   - Quick theme variable lookup
   - (Superseded by TOKEN_SYSTEM.md, kept for reference)

---

## Read in This Order

### Day 1: Foundation (50 min)
1. README.md → Understand project
2. QUICK_START.md → Get oriented
3. TOKEN_SYSTEM.md → Learn tokens
4. ANTI_PATTERNS.md → Know what NOT to do

**Goal:** Ready to build first component

---

### Day 2: Deep Dive (60 min)
5. PROJECT_STRUCTURE.md → Understand file organization
6. DESIGN_DECISIONS.md → Know why we made choices
7. AI_CONTEXT_GUIDE.md → Optimize workflow

**Goal:** Understand architecture deeply

---

### Ongoing: Reference
- CHANGELOG.md → Track progress
- AI_CONTEXT_GUIDE.md → When resuming work
- ANTI_PATTERNS.md → When in doubt

---

## Document Purposes

| Document | Purpose | Read When |
|----------|---------|-----------|
| README.md | Overview & navigation | First time, onboarding |
| QUICK_START.md | Fast ramp-up | First time, need quick ref |
| TOKEN_SYSTEM.md | Complete token reference | Building components, verifying tokens |
| ANTI_PATTERNS.md | Avoid mistakes | Before making changes, when stuck |
| PROJECT_STRUCTURE.md | File organization | Setting up, organizing work |
| DESIGN_DECISIONS.md | Architectural rationale | Questioning choices, onboarding |
| AI_CONTEXT_GUIDE.md | AI workflow optimization | Using Claude/Cursor, resuming work |
| CHANGELOG.md | Version tracking | Starting session, documenting changes |

---

## How to Use These Docs

### For Solo Work (Now)
1. **Read** foundation docs (Day 1 list)
2. **Reference** AI_CONTEXT_GUIDE.md when using Claude/Cursor
3. **Update** CHANGELOG.md after each milestone
4. **Check** ANTI_PATTERNS.md when making architectural choices

### When Team Grows (Later)
1. **Onboard** new members with Day 1 + Day 2 reading
2. **Reference** PROJECT_STRUCTURE.md for conventions
3. **Discuss** DESIGN_DECISIONS.md when questioning architecture
4. **Enforce** ANTI_PATTERNS.md in code reviews

### For AI Sessions
**Always provide to Claude:**
- TOKEN_SYSTEM.md
- ANTI_PATTERNS.md
- Relevant section of current task

**Keep visible in Cursor:**
- TOKEN_SYSTEM.md
- ANTI_PATTERNS.md
- PROJECT_STRUCTURE.md

---

## Maintenance Schedule

### Daily
- [ ] Update CHANGELOG.md when you complete something

### Weekly
- [ ] Review ANTI_PATTERNS.md - any new patterns to add?
- [ ] Check TOKEN_SYSTEM.md - still accurate?

### Monthly
- [ ] Review DESIGN_DECISIONS.md - any decisions to revisit?
- [ ] Check all docs for staleness
- [ ] Clean up outdated information

### Per Milestone
- [ ] Update README.md status
- [ ] Bump version in CHANGELOG.md
- [ ] Review all docs for accuracy

---

## Doc Health Checklist

### Is Documentation Healthy?

✅ **Yes** if:
- README.md status section is current
- TOKEN_SYSTEM.md matches Figma
- CHANGELOG.md has recent entries
- ANTI_PATTERNS.md catches real mistakes

❌ **No** if:
- Docs haven't been updated in 2+ weeks
- TOKEN_SYSTEM.md doesn't match implementation
- Team questions decisions not in DESIGN_DECISIONS.md
- New mistakes not documented in ANTI_PATTERNS.md

---

## Quick Reference Card

**Need to...?**

- **Understand tokens** → TOKEN_SYSTEM.md
- **Avoid mistakes** → ANTI_PATTERNS.md
- **Start fast** → QUICK_START.md
- **Know why** → DESIGN_DECISIONS.md
- **Find files** → PROJECT_STRUCTURE.md
- **Use AI tools** → AI_CONTEXT_GUIDE.md
- **Track changes** → CHANGELOG.md
- **Onboard someone** → README.md → QUICK_START.md

---

## What's Missing (Intentionally)

These docs don't exist yet because they're not needed:

- **Component Library** - Will be created when first component is built
- **Component Build Playbook** - Will be created with Button component
- **Figma Setup Guide** - Covered in TOKEN_SYSTEM.md for now
- **Prompt Templates** - Integrated into AI_CONTEXT_GUIDE.md

These will be added as project evolves.

---

## Documentation Philosophy

**Principles:**
1. **Practical over comprehensive** - Document what's needed, not everything
2. **Single source of truth** - Each fact lives in one place
3. **Easy to maintain** - If it's hard to update, it won't be updated
4. **AI-friendly** - Structured for copy-paste into Claude/Cursor
5. **Version controlled** - All docs in Git, track changes

**Not principles:**
- ❌ Documenting for documentation's sake
- ❌ Theoretical design system concepts
- ❌ Documenting every possible scenario
- ❌ Writing for external audiences (yet)

---

## Next Steps

1. ✅ **Documentation complete** (you're reading it!)
2. ⬜ **Build Button component** (first real test)
3. ⬜ **Validate token usage** (does it work in practice?)
4. ⬜ **Iterate on docs** (fix what doesn't work)
5. ⬜ **Continue building** (Input, Card, Badge, Alert)

---

## Questions?

Check:
1. QUICK_START.md - "Getting Help" section
2. AI_CONTEXT_GUIDE.md - Prompt templates
3. ANTI_PATTERNS.md - Is it a known issue?
4. DESIGN_DECISIONS.md - Was this decided already?

Still stuck? Start a Claude session with TOKEN_SYSTEM.md + ANTI_PATTERNS.md context.

---

**Ready to build. Documentation complete. Let's ship.**
