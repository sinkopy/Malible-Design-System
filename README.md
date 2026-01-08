# Malible Design System

**Status:** In Development  
**Version:** 0.1.0  
**Last Updated:** January 2026

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
- [Token System Reference](./docs/TOKEN_SYSTEM.md) - Complete primitives + theme mappings
- [Figma Setup Guide](./docs/FIGMA_SETUP.md) - How to set up Figma from scratch

### Component Library
- [Component Library](./docs/COMPONENT_LIBRARY.md) - Build order and specifications
- [Component Build Playbook](./docs/COMPONENT_BUILD_PLAYBOOK.md) - Step-by-step component creation

### Working with AI
- [AI Context Guide](./docs/AI_CONTEXT_GUIDE.md) - How to resume work with Claude/Cursor
- [Prompt Templates](./docs/PROMPT_TEMPLATES.md) - Copy-paste prompts for common tasks

### Decision Log
- [Design Decisions](./docs/DESIGN_DECISIONS.md) - Why we made key architectural choices
- [Anti-Patterns](./docs/ANTI_PATTERNS.md) - What NOT to do
- [Changelog](./CHANGELOG.md) - Version history

---

## Current Status

### ✅ Complete
- [x] Primitives collection (90 variables)
- [x] Theme collection (28 variables)
- [x] Token architecture finalized
- [x] Documentation framework

### 🔄 In Progress
- [ ] Button component
- [ ] Input component
- [ ] Card component

### 📋 Planned
- [ ] Badge component
- [ ] Alert component
- [ ] Remaining Tier 1 components

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
├── docs/                    # All documentation
│   ├── PROJECT_STRUCTURE.md
│   ├── TOKEN_SYSTEM.md
│   ├── COMPONENT_LIBRARY.md
│   ├── FIGMA_SETUP.md
│   ├── AI_CONTEXT_GUIDE.md
│   └── ...
├── figma/                   # Figma exports and references
│   ├── tokens/
│   ├── components/
│   └── assets/
├── src/                     # Implementation
│   ├── components/
│   ├── styles/
│   └── ...
├── README.md               # This file
└── CHANGELOG.md            # Version history
```

---

## Contributing

Currently solo development. Documentation designed to scale to small team (2-3 people).

When bringing others on:
1. Start with [Quick Start Guide](./docs/QUICK_START.md)
2. Read [Design Decisions](./docs/DESIGN_DECISIONS.md)
3. Review [Anti-Patterns](./docs/ANTI_PATTERNS.md)
4. Follow [Component Build Playbook](./docs/COMPONENT_BUILD_PLAYBOOK.md)

---

## Getting Help

### Working with AI Tools

This project is optimized for AI-assisted development:
- **Claude** for architecture, design decisions, documentation
- **Cursor** for implementation, component building

See [AI Context Guide](./docs/AI_CONTEXT_GUIDE.md) for effective prompting strategies.

### Resuming Work

1. Read the relevant doc for your task
2. Check CHANGELOG.md for recent changes
3. Use prompt templates from [Prompt Templates](./docs/PROMPT_TEMPLATES.md)
4. Reference [AI Context Guide](./docs/AI_CONTEXT_GUIDE.md) for context management

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
