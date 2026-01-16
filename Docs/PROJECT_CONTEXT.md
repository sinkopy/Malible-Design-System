# Malible Design System - Current Context

**Date:** January 13, 2026  
**Version:** 1.2  
**Status:** Documentation site live at localhost:5173

---

## Project Status

### ✅ Completed Components (15)

| Component | Variants | Key Decisions |
|-----------|----------|---------------|
| Button | default, secondary, destructive, outline, ghost, link | Link uses --info (blue, not primary) |
| Input | default, disabled, error, file-input | Custom FileInput wrapper |
| Badge | 10 variants (subtle + solid pairs), 2 sizes | Flat variants, not compound |
| Switch | on/off, disabled | Checked uses --success (green) |
| Checkbox | unchecked, checked, indeterminate, disabled | - |
| Radio | via RadioGroup | - |
| Label | default, with peer states | Radix UI Label primitive |
| Separator | horizontal, vertical | Radix UI Separator primitive |
| Textarea | default, error, disabled | Matches Input styling pattern |
| Alert | default, info, success, warning, destructive | ShadCN pattern (icons as children) |
| Card | Header, Title, Description, Content, Footer | Radix UI patterns |
| Avatar | sm/default/lg, circle/square | Radix UI Avatar primitive |
| Breadcrumb | Link, Page, Separator, Ellipsis | Phosphor icons (CaretRight, DotsThree) |
| Tabs | pill (default), underline | Pill uses --info for underline variant |
| FileInput | styled file upload | ⚠️ Component exists, needs docs page |

### ✅ Documentation Pages (18)

**Foundation:**
- `/tokens` - Design tokens, spacing, radius, shadows
- `/colors` - Color system with swatches  
- `/typography` - Type scale, font families
- `/shadows` - Shadow system (5 levels)

**Components:**
- `/` (Button)
- `/input`
- `/badge`
- `/switch`
- `/checkbox`
- `/radio`
- `/separator`
- `/label`
- `/textarea`
- `/alert`
- `/card`
- `/avatar`
- `/breadcrumb`
- `/tabs`

### 🔲 Next Components

1. Select
2. Dropdown
3. Dialog
4. Popover
5. Tooltip
6. Progress
7. Skeleton

---

## Token System

### Summary

| Collection | Count |
|------------|-------|
| Primitives | 90 |
| Theme | 33 |
| **Total** | 123 |

### Color Tokens (Theme)

**Core:**
```css
--primary: 17 83% 53%;           /* #E0622D - Orange */
--primary-foreground: 0 0% 100%;
--secondary: 0 0% 96%;
--secondary-foreground: 0 0% 26%;
--destructive: 0 84% 42%;        /* #bf1616 - Red */
--destructive-foreground: 0 0% 100%;
--muted: 0 0% 96%;
--muted-foreground: 0 0% 45%;
```

**Semantic:**
```css
--info: 200 100% 42%;            /* #008ed6 - Blue (Link text) */
--info-foreground: 0 0% 100%;
--success: 152 48% 45%;          /* #3ea377 - Green (Switch checked) */
--success-foreground: 0 0% 100%;
--warning: 38 100% 44%;          /* #e09200 - Amber */
--warning-foreground: 0 0% 100%;
```

**Subtle Backgrounds:**
```css
--info-subtle: 200 100% 96%;
--success-subtle: 145 47% 93%;
--warning-subtle: 40 95% 95%;
--destructive-subtle: 0 90% 95%;
```

**UI:**
```css
--background: 0 0% 100%;
--foreground: 0 0% 10%;
--border: 0 0% 90%;
--input: 0 0% 83%;
--ring: 200 100% 37%;
```

### Spacing Scale
```
0, 2, 4, 8, 12, 16, 24, 32
```

### Border Radius
```
--radius: 8px (default)
4px (small)
9999px (full/pill)
```

---

## Typography

### Typekit Weight Mapping (CRITICAL)

| Font Name | CSS Weight | Tailwind |
|-----------|------------|----------|
| Regular | 300 | font-light |
| Medium | 400 | font-normal |
| DemiBold | 500 | font-medium |
| Bold | 600 | font-semibold |

**Do NOT use font-weight: 650. It doesn't exist.**

### Type Scale

| Role | Size | Weight | Font |
|------|------|--------|------|
| Display (h1) | 36px | 500 | TT Commons |
| Heading (h2) | 24px | 500 | TT Commons |
| Title (h3) | 18px | 500 | TT Commons |
| Body (p) | 14px | 400 | Inter |
| Caption | 12px | 300 | Inter |
| Code | 13px | 400 | JetBrains Mono |

---

## Key Decisions (Locked)

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Token layers | 2 (Primitives → Theme) | Implementation sanity |
| Link button color | --info (blue) | Figma spec, convention |
| Switch checked | --success (green) | Positive state |
| Badge API | 10 flat variants | ShadCN pattern |
| Icons | Phosphor | Visual weight match |
| Code highlighting | Shiki, github-light | Aesthetic match |
| Preview/Code | Show together (not tabs) | ShadCN pattern |

---

## File Structure

```
src/
├── components/
│   ├── ui/           # ShadCN components
│   ├── docs/         # Documentation components
│   └── layout.tsx
├── pages/            # Doc pages
├── styles/
│   └── globals.css   # 33 CSS variables
└── lib/
    └── utils.ts

docs/                 # Markdown documentation
├── TOKEN_SYSTEM.md
├── ANTI_PATTERNS.md
├── DESIGN_DECISIONS.md
├── PROJECT_STRUCTURE.md
├── QUICK_START.md
├── AI_CONTEXT_GUIDE.md
└── DOCUMENTATION_INDEX.md
```

---

## Anti-Patterns (Avoid)

❌ Component-specific tokens (`--button-bg`)
❌ State tokens (`--primary-hover`)
❌ Hardcoded hex values
❌ Lucide icons (use Phosphor)
❌ font-weight: 650 (use 500)
❌ Guessing Figma values (use API)
❌ Primary color for links (use --info)

---

## Workflow

### Building Components

1. Get Figma URL with node-id
2. Claude extracts specs via `get_design_context`
3. Implement with exact values
4. Create doc page
5. Add to navigation

### AI Context

**Always provide:**
- TOKEN_SYSTEM.md
- ANTI_PATTERNS.md
- Figma URL for specs

---

## Next Immediate Actions

1. Create FileInput documentation page (component exists but missing docs)
2. Design Select in Figma
3. Extract specs via Figma API
4. Implement in code
5. Add documentation pages

---

**Last Updated:** January 13, 2026  
**Next Session:** FileInput docs + Select component
