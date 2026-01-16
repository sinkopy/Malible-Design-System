# Documentation Index

**Malible Design System - Complete Documentation Package**  
**Version:** 1.2.0  
**Date:** January 13, 2026

---

## What We Have

✅ **15 components built** (Button, Input, Badge, Switch, Checkbox, Radio, Label, Separator, Textarea, Alert, Card, Avatar, Breadcrumb, Tabs, FileInput)  
✅ **33 theme tokens** (90 Primitives + 33 Theme)  
✅ **Documentation site** running at localhost:5173  
✅ **Full documentation system** (8 core documents)  
✅ **AI-optimized workflows** (Figma API integration)

---

## Documentation Map

### 🚀 Start Here (Required Reading)

| Doc | Time | Purpose |
|-----|------|---------|
| [QUICK_START.md](./QUICK_START.md) | 5 min | Get running fast |
| [TOKEN_SYSTEM.md](./TOKEN_SYSTEM.md) | 15 min | All 33 tokens with values |
| [ANTI_PATTERNS.md](./ANTI_PATTERNS.md) | 10 min | What NOT to do |

### 📚 Reference (Read as Needed)

| Doc | Purpose |
|-----|---------|
| [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) | File organization |
| [DESIGN_DECISIONS.md](./DESIGN_DECISIONS.md) | Why we made key choices |
| [AI_CONTEXT_GUIDE.md](./AI_CONTEXT_GUIDE.md) | Working with Claude/Cursor |

### 📝 Working Documents

| Doc | Purpose |
|-----|---------|
| [CHANGELOG.md](../CHANGELOG.md) | Version history |
| [GAP_ANALYSIS.md](./GAP_ANALYSIS.md) | Documentation gap analysis |
| This file | Navigation |

---

## Read in This Order

### First Session (30 min)
1. **QUICK_START.md** → Get oriented
2. **TOKEN_SYSTEM.md** → Learn tokens
3. **ANTI_PATTERNS.md** → Know what NOT to do

**Goal:** Ready to build components

### Deep Dive (30 min)
4. **PROJECT_STRUCTURE.md** → Understand files
5. **DESIGN_DECISIONS.md** → Know why
6. **AI_CONTEXT_GUIDE.md** → Optimize workflow

**Goal:** Understand architecture

---

## Document Purposes

| Document | Read When |
|----------|-----------|
| QUICK_START.md | First time, need quick ref |
| TOKEN_SYSTEM.md | Building components, verifying tokens |
| ANTI_PATTERNS.md | Before making changes, when stuck |
| PROJECT_STRUCTURE.md | Setting up, finding files |
| DESIGN_DECISIONS.md | Questioning choices |
| AI_CONTEXT_GUIDE.md | Using Claude/Cursor |

---

## Live Documentation Site

The design system has a live documentation site:

**URL:** http://localhost:5173

**Pages:**

| Route | Content |
|-------|---------|
| `/tokens` | Design tokens (spacing, radius, shadows) |
| `/colors` | Color system with swatches |
| `/typography` | Type scale, font families |
| `/shadows` | Shadow system (5 levels) |
| `/` | Button component |
| `/input` | Input component |
| `/badge` | Badge component |
| `/switch` | Switch component |
| `/checkbox` | Checkbox component |
| `/radio` | Radio component |
| `/separator` | Separator component |
| `/label` | Label component |
| `/textarea` | Textarea component |
| `/alert` | Alert component |
| `/card` | Card component |
| `/avatar` | Avatar component |
| `/breadcrumb` | Breadcrumb component |
| `/tabs` | Tabs component |

---

## Current Status

### Components

| Component | Status | Variants |
|-----------|--------|----------|
| Button | ✅ Complete | 6 variants, 3 sizes, 3 icon sizes |
| Input | ✅ Complete | Default, disabled, error |
| Badge | ✅ Complete | 10 variants, 2 sizes |
| Switch | ✅ Complete | On/off, disabled |
| Checkbox | ✅ Complete | Unchecked, checked, indeterminate |
| Radio | ✅ Complete | Via RadioGroup |
| Label | ✅ Complete | Default, with peer states |
| Separator | ✅ Complete | Horizontal, vertical |
| Textarea | ✅ Complete | Default, error, disabled |
| Alert | ✅ Complete | 5 variants (default, info, success, warning, destructive) |
| Card | ✅ Complete | With Header, Title, Description, Content, Footer |
| Avatar | ✅ Complete | 3 sizes, 2 shapes (circle/square) |
| Breadcrumb | ✅ Complete | With Link, Page, Separator, Ellipsis |
| Tabs | ✅ Complete | 2 variants (pill, underline) |
| FileInput | ⚠️ Needs Docs | Styled file upload |

### Tokens

| Category | Count | Status |
|----------|-------|--------|
| Primitives | 90 | ✅ Complete |
| Theme Core | 20 | ✅ Complete |
| Theme Extended | 8 | ✅ Complete |
| Theme Subtle | 5 | ✅ Complete |
| **Total** | **123** | - |

---

## Key Decisions Summary

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Token layers | 2 (not 3) | Implementation sanity |
| Link color | --info (blue) | Convention, Figma spec |
| Switch checked | --success (green) | Positive state convention |
| Badge variants | 10 flat | ShadCN pattern |
| Icons | Phosphor | Visual weight match |
| Font weights | 300/400/500/600 | Typekit mapping |
| Code highlighting | Shiki, github-light | Matches aesthetic |

---

## Quick Actions

### "I need to build a component"

1. Get Figma URL with node-id
2. Ask Claude to extract specs
3. Implement in Cursor
4. Create doc page
5. Add to navigation

### "I need to check a token"

→ Open [TOKEN_SYSTEM.md](./TOKEN_SYSTEM.md)

### "I'm not sure if this is allowed"

→ Check [ANTI_PATTERNS.md](./ANTI_PATTERNS.md)

### "Why did we do it this way?"

→ Check [DESIGN_DECISIONS.md](./DESIGN_DECISIONS.md)

### "How do I use AI effectively?"

→ Check [AI_CONTEXT_GUIDE.md](./AI_CONTEXT_GUIDE.md)

---

## Maintenance Schedule

### After Each Component
- [ ] Doc page created
- [ ] Navigation updated
- [ ] CHANGELOG updated

### Weekly
- [ ] Review docs for staleness
- [ ] Check TOKEN_SYSTEM.md accuracy

### After Token Changes
- [ ] Update TOKEN_SYSTEM.md
- [ ] Update globals.css
- [ ] Test all components

---

## Questions?

**Check in this order:**
1. ANTI_PATTERNS.md - Is it forbidden?
2. TOKEN_SYSTEM.md - What token should I use?
3. DESIGN_DECISIONS.md - Why was this decided?
4. AI_CONTEXT_GUIDE.md - How do I ask Claude?

**Still stuck?**
Start a Claude session with TOKEN_SYSTEM.md + ANTI_PATTERNS.md context.

---

**Ready to build. Documentation complete.**
