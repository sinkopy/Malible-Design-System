# Malible Design System

**Status:** Active Development  
**Version:** 1.2.0  
**Last Updated:** January 13, 2026

---

## Overview

Malible is a production-ready design system built on:
- **Figma** for design (source of truth)
- **ShadCN** for implementation (non-negotiable execution layer)
- **2-layer token architecture** (Primitives → Theme)
- **Implementation sanity over semantic purity**

---

## Quick Links

### Getting Started
- [Project Structure](./docs/PROJECT_STRUCTURE.md) - File organization and conventions
- [Quick Start Guide](./docs/QUICK_START.md) - Get up and running in 5 minutes

### Token System
- [Token System Reference](./Docs/TOKEN_SYSTEM.md) - Complete primitives + theme mappings (33 tokens)

### Component Library
- [Component Update Log](./Docs/COMPONENT_UPDATE_LOG.md) - Component history and updates

### Working with AI
- [AI Context Guide](./Docs/AI_CONTEXT_GUIDE.md) - How to resume work with Claude/Cursor

### Decision Log
- [Design Decisions](./Docs/DESIGN_DECISIONS.md) - Why we made key architectural choices
- [Anti-Patterns](./Docs/ANTI_PATTERNS.md) - What NOT to do
- [Changelog](./CHANGELOG.md) - Version history

---

## Current Status

### ✅ Complete
- [x] Primitives collection (90 variables)
- [x] Theme collection (33 variables)
- [x] Token architecture finalized
- [x] Documentation framework
- [x] **15 components built:** Button, Input, Badge, Switch, Checkbox, Radio, Label, Separator, Textarea, Alert, Card, Avatar, Breadcrumb, Tabs, FileInput
- [x] **18 documentation pages** (4 foundation + 14 components)

### 🔄 In Progress
- [ ] FileInput documentation page (component exists, needs docs)

### 📋 Planned
- [ ] Select component
- [ ] Dropdown component
- [ ] Dialog component
- [ ] Popover component
- [ ] Tooltip component

---

## Core Principles

1. **Implementation Sanity > Semantic Purity**
   - When there's a trade-off, choose what's maintainable

2. **No Token Proliferation**
   - No component-specific tokens
   - No state-specific tokens
   - Every token must justify 5+ usages

3. **ShadCN Alignment**
   - Their structure is non-negotiable
   - We adapt, not fork

4. **Figma is Source of Truth**
   - Design first, code follows
   - Theme variables drive implementation

---

## File Structure

```
/
├── Docs/                    # All documentation
│   ├── PROJECT_STRUCTURE.md
│   ├── TOKEN_SYSTEM.md
│   ├── COMPONENT_UPDATE_LOG.md
│   ├── AI_CONTEXT_GUIDE.md
│   └── ...
├── Figma/                   # Figma exports and references
│   └── Tokens/
│       └── theme.json
├── src/                     # Implementation
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── ...
├── README.md               # This file
└── CHANGELOG.md            # Version history
```

---

## Contributing

Currently solo development. Documentation designed to scale to small team (2-3 people).

When bringing others on:
1. Start with [Quick Start Guide](./Docs/QUICK_START.md)
2. Read [Design Decisions](./Docs/DESIGN_DECISIONS.md)
3. Review [Anti-Patterns](./Docs/ANTI_PATTERNS.md)
4. Check [Component Update Log](./Docs/COMPONENT_UPDATE_LOG.md) for component history

---

## Getting Help

### Working with AI Tools

This project is optimized for AI-assisted development:
- **Claude** for architecture, design decisions, documentation
- **Cursor** for implementation, component building

See [AI Context Guide](./Docs/AI_CONTEXT_GUIDE.md) for effective prompting strategies.

### Resuming Work

1. Read the relevant doc for your task
2. Check CHANGELOG.md for recent changes
3. Reference [AI Context Guide](./Docs/AI_CONTEXT_GUIDE.md) for context management
4. Review [Documentation Index](./Docs/DOCUMENTATION_INDEX.md) for complete doc map

---

## License

[Your License Here]

---

## Acknowledgments

- **ShadCN** - Component architecture foundation
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled component primitives
- **Shopify Polaris** - Design system patterns
- **Canva App UI Kit** - Component inspiration
