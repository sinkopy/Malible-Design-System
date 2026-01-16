# Project Structure

**Version:** 1.2.0  
**Last Updated:** January 13, 2026

---

## Directory Organization

```
malible-design-system/
│
├── public/                         # Static assets
│   ├── malible-logo.svg            # Brand logo
│   └── malible-tokens.json         # Downloadable token file
│
├── src/
│   ├── components/
│   │   ├── ui/                     # ShadCN-style components
│   │   │   ├── alert.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── file-input.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── textarea.tsx
│   │   │
│   │   ├── docs/                   # Documentation components
│   │   │   ├── doc-page.tsx        # Page wrapper with breadcrumb
│   │   │   ├── doc-section.tsx     # Section with title/description
│   │   │   ├── component-example.tsx # Preview + code block
│   │   │   ├── doc-navigation.tsx  # Prev/next navigation
│   │   │   ├── timestamp.tsx       # Last updated display
│   │   │   └── index.ts            # Barrel export
│   │   │
│   │   └── layout.tsx              # App layout with sidebar
│   │
│   ├── pages/                      # Documentation pages
│   │   ├── alert-docs.tsx
│   │   ├── avatar-docs.tsx
│   │   ├── badge-docs.tsx
│   │   ├── breadcrumb-docs.tsx
│   │   ├── button-docs.tsx
│   │   ├── card-docs.tsx
│   │   ├── checkbox-docs.tsx
│   │   ├── colors-docs.tsx
│   │   ├── input-docs.tsx
│   │   ├── label-docs.tsx
│   │   ├── radio-docs.tsx
│   │   ├── separator-docs.tsx
│   │   ├── shadows-docs.tsx
│   │   ├── switch-docs.tsx
│   │   ├── tabs-docs.tsx
│   │   ├── textarea-docs.tsx
│   │   ├── tokens-docs.tsx
│   │   └── typography-docs.tsx
│   │
│   ├── styles/
│   │   └── globals.css             # Theme variables + base styles
│   │
│   ├── lib/
│   │   └── utils.ts                # cn() utility
│   │
│   └── main.tsx                    # App entry point
│
├── docs/                           # Markdown documentation
│   ├── TOKEN_SYSTEM.md             # Complete token reference
│   ├── ANTI_PATTERNS.md            # What NOT to do
│   ├── DESIGN_DECISIONS.md         # Architecture rationale
│   ├── PROJECT_STRUCTURE.md        # This file
│   ├── QUICK_START.md              # Fast onboarding
│   ├── AI_CONTEXT_GUIDE.md         # AI workflow
│   └── DOCUMENTATION_INDEX.md      # Doc navigation
│
├── figma/                          # Figma exports (optional)
│   └── tokens/
│       └── theme.json              # Exported theme variables
│
├── index.html                      # HTML entry point
├── tailwind.config.ts              # Tailwind + token config
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Key Files Explained

### Core Configuration

| File | Purpose |
|------|---------|
| `tailwind.config.ts` | Extends Tailwind with theme colors, fonts |
| `src/styles/globals.css` | CSS variables for all 33 theme tokens |
| `index.html` | Loads Typekit (TT Commons Pro), Google Fonts (JetBrains Mono) |

### Component Files

| File | Contains |
|------|----------|
| `alert.tsx` | 5 variants (default, info, success, warning, destructive) |
| `avatar.tsx` | 3 sizes, 2 shapes (circle/square) |
| `badge.tsx` | 10 variants, 2 sizes |
| `breadcrumb.tsx` | Link, Page, Separator, Ellipsis components |
| `button.tsx` | 6 variants, 3 sizes, 3 icon sizes |
| `card.tsx` | Header, Title, Description, Content, Footer |
| `checkbox.tsx` | Unchecked, checked, indeterminate |
| `file-input.tsx` | Styled file upload |
| `input.tsx` | Default, disabled, error states |
| `label.tsx` | Form labels with peer states |
| `radio-group.tsx` | Radio group + items |
| `separator.tsx` | Horizontal, vertical dividers |
| `switch.tsx` | Green success when checked |
| `tabs.tsx` | Pill and underline variants |
| `textarea.tsx` | Default, error, disabled states |

### Documentation Components

| Component | Purpose |
|-----------|---------|
| `DocPage` | Wraps pages with breadcrumb, title, description, navigation |
| `DocSection` | Section heading with optional description |
| `ComponentExample` | Shows preview + syntax-highlighted code |
| `DocNavigation` | Previous/Next page links |
| `Timestamp` | "Last updated" display |

---

## Naming Conventions

### Files
- **Components:** kebab-case (`file-input.tsx`)
- **Pages:** kebab-case with `-docs` suffix (`button-docs.tsx`)
- **Docs:** SCREAMING_SNAKE_CASE.md (`TOKEN_SYSTEM.md`)

### Code
- **React components:** PascalCase (`<Button />`, `<DocPage />`)
- **Functions/variables:** camelCase (`handleClick`, `isDisabled`)
- **CSS variables:** kebab-case (`--primary-foreground`)
- **Tailwind classes:** kebab-case (`bg-primary`, `text-muted-foreground`)

### Figma
- **Collections:** PascalCase (`Primitives`, `Theme`)
- **Variables:** kebab-case (`primary-foreground`, `neutral-500`)
- **Components:** PascalCase (`Button`, `Input`)

---

## Dependencies

### Production
| Package | Purpose |
|---------|---------|
| react | UI framework |
| react-dom | DOM rendering |
| react-router-dom | Routing |
| @radix-ui/* | Headless UI primitives |
| class-variance-authority | Variant management (cva) |
| clsx | Class name merging |
| tailwind-merge | Tailwind class deduplication |
| @phosphor-icons/react | Icon library |

### Development
| Package | Purpose |
|---------|---------|
| typescript | Type checking |
| tailwindcss | Utility CSS |
| vite | Build tool |
| shiki | Syntax highlighting |

---

## Documentation Site

### Navigation Structure

```
FOUNDATION
├── /tokens      → tokens-docs.tsx
├── /colors      → colors-docs.tsx
├── /typography  → typography-docs.tsx
└── /shadows     → shadows-docs.tsx

COMPONENTS
├── /            → button-docs.tsx (home)
├── /input       → input-docs.tsx
├── /badge       → badge-docs.tsx
├── /switch      → switch-docs.tsx
├── /checkbox    → checkbox-docs.tsx
├── /radio       → radio-docs.tsx
├── /separator   → separator-docs.tsx
├── /label       → label-docs.tsx
├── /textarea    → textarea-docs.tsx
├── /alert       → alert-docs.tsx
├── /card        → card-docs.tsx
├── /avatar      → avatar-docs.tsx
├── /breadcrumb  → breadcrumb-docs.tsx
└── /tabs        → tabs-docs.tsx
```

### Page Order (for navigation)
1. Tokens
2. Colors
3. Typography
4. Button
5. Input
6. Badge
7. Switch
8. Checkbox
9. Radio
10. Separator
11. Label
12. Textarea
13. Alert
14. Card
15. Avatar
16. Breadcrumb
17. Tabs

---

## Source of Truth Hierarchy

```
1. Figma (Design)
   └── Variables: Primitives + Theme
   └── Components: Button, Input, etc.
   
2. Documentation
   └── TOKEN_SYSTEM.md reflects Figma
   └── COMPONENT_LIBRARY.md tracks status

3. Code (Implementation)
   └── Must match Figma design
   └── Uses Theme variables from globals.css
```

**Flow:**
```
Design change in Figma
    ↓
Update token JSON exports
    ↓
Update TOKEN_SYSTEM.md
    ↓
Update globals.css
    ↓
Update components
    ↓
Update CHANGELOG.md
```

---

## When to Update What

### After Component Work
- [ ] Update component file
- [ ] Update doc page
- [ ] Test all variants/states
- [ ] Commit with descriptive message

### After Token Change
- [ ] Update Figma variables
- [ ] Export new theme.json
- [ ] Update TOKEN_SYSTEM.md
- [ ] Update globals.css
- [ ] Test all components
- [ ] Major version bump

### After Adding Component
- [ ] Create component file in `src/components/ui/`
- [ ] Create doc page in `src/pages/`
- [ ] Add route to router
- [ ] Add to sidebar navigation
- [ ] Add to DocNavigation order

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Dev server:** http://localhost:5173

---

## Git Workflow

### Commit Messages
```
feat: add Label component
fix: correct Switch checked color to success
docs: update TOKEN_SYSTEM.md with subtle tokens
style: standardize table formatting
refactor: extract DocNavigation component
```

### What to Commit
✅ All source code (`src/`)
✅ Documentation (`docs/`)
✅ Configuration files
✅ Token exports (`figma/tokens/`)

### What NOT to Commit
❌ `node_modules/`
❌ `dist/`
❌ `.env` files
❌ Large binary assets

---

## Questions?

See [AI Context Guide](./AI_CONTEXT_GUIDE.md) for working with Claude/Cursor.
