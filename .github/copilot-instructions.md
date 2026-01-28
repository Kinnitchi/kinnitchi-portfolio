# Copilot Instructions - Igor Oliveira Portfolio

## Project Overview

Professional portfolio built with **Next.js 14 App Router**, **TypeScript**, and **CSS Modules** targeting enterprise SaaS aesthetic. Single-page application with server-first rendering and premium UI design.

## Architecture Principles

### File Structure Pattern

- `app/` - Next.js App Router (layout.tsx, page.tsx only)
- `components/` - Reusable UI primitives (Button, Badge, Card, Container, Section, SectionTitle)
- `sections/` - Page sections as standalone components (Hero, About, Skills, Experience, Projects, Contact)
- `data/portfolio.ts` - Centralized content source (skills, experiences, projects)
- `styles/globals.css` - Design system tokens and CSS custom properties

### Server vs Client Components

**Default to Server Components.** Only use `'use client'` directive when:

- Component uses event handlers (onClick, onChange)
- Component uses React hooks (useState, useEffect)
- Example: `Button.tsx` uses `'use client'` for onClick support

### CSS Modules Convention

Every component has its paired `.module.css` file with identical base name:

```
Button.tsx → Button.module.css
Hero.tsx → Hero.module.css
```

Import pattern:

```tsx
import styles from "./ComponentName.module.css";
```

## Design System (styles/globals.css)

### Custom Properties Usage

All values must reference CSS variables from `styles/globals.css`:

- Colors: `var(--color-*)` (background, text-primary, accent, border, etc.)
- Spacing: `var(--spacing-*)` (xs to 5xl, 8px base scale)
- Shadows: `var(--shadow-*)` (xs, sm, md, lg, xl, 2xl, glow)
- Radius: `var(--radius-*)` (sm to full)
- Typography: `var(--font-weight-*)` (normal to extrabold)
- Transitions: `var(--transition-*)` (fast, normal, slow, bounce)

### Responsive Typography

Use `clamp()` for fluid typography:

```css
font-size: clamp(1rem, 2vw, 1.25rem);
```

### Premium UI Patterns

- **Gradients**: `var(--gradient-accent)` for text and backgrounds
- **Gradient text**: `-webkit-background-clip: text; -webkit-text-fill-color: transparent;`
- **Shadows on hover**: Combine with `transform: translateY(-Npx)` for depth
- **Border animations**: Use `::before` pseudo-elements with gradient backgrounds

## Data Management

Content lives in `data/portfolio.ts` with TypeScript interfaces:

```tsx
export interface Skill { name: string; category: string }
export interface Experience { company: string; role: string; ... }
export interface Project { title: string; technologies: string[]; ... }
```

Components import and map over these arrays. Never hardcode content in components.

## Component Patterns

### Container Wrapper

All sections use `<Container>` for max-width and horizontal padding:

```tsx
<Section id="about">
  <Container>
    <SectionTitle>About</SectionTitle>
    {/* content */}
  </Container>
</Section>
```

### Button Variants

Button supports 3 variants via props:

- `variant="primary"` - Gradient background (default)
- `variant="secondary"` - Surface background
- `variant="outline"` - Transparent with border

### Badge Component

New utility component with variants: `default`, `success`, `accent`, `outline`

## Development Workflow

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

## SEO Implementation

Metadata in `app/layout.tsx` using Next.js Metadata API:

- Title template with fallback
- Open Graph tags
- Twitter cards
- Robots configuration

## Performance Guidelines

- No client-side data fetching (static portfolio data)
- CSS Modules for zero-runtime styling
- Server Components maximize cacheable content
- `next/font` for optimized Google Fonts loading

## Adding New Sections

1. Create `sections/NewSection.tsx` (Server Component by default)
2. Create `sections/NewSection.module.css`
3. Import in `app/page.tsx`
4. Wrap content with `<Section>` and `<Container>`
5. Add data to `data/portfolio.ts` if needed

## TypeScript Conventions

- All components use TypeScript with typed props interfaces
- Props interfaces defined inline above component
- Export named interfaces when reused across files
- Use strict typing for data structures in `data/portfolio.ts`

## Deployment

Optimized for Vercel deployment:

- Framework preset: Next.js
- Build command: `npm run build`
- Output directory: `.next`
