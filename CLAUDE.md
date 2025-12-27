# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev          # Start development server (port 3000)
npm run build        # Production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check formatting without changes
```

**Environment Setup:**
- Node.js 20+ required (see .nvmrc)
- Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ID` for form functionality

## Architecture

**Stack:** Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4

**Directory Structure:**
- `src/app/` - App Router pages (each route has its own `page.tsx`)
- `src/components/layout/` - Shared layout components (Header, Footer)
- `src/app/globals.css` - Tailwind imports and CSS custom properties for theme

**Routes:**
- `/` - Marketing homepage
- `/enterprise` - Enterprise pilot request form (client component with Formspree)
- `/basic-demo`, `/samples`, `/guides` - Stub pages for future content

## Conventions

**Styling:**
- Use Tailwind utility classes exclusively
- Theme colors via CSS variables: `--tr-primary` (teal), `--tr-accent` (orange), `--tr-bg`, `--tr-text`
- Mobile-first responsive design with `md:` breakpoints

**Components:**
- Server components by default; add `'use client'` only when needed (useState, event handlers)
- Import alias: `@/*` maps to `src/*`

**Code Style:**
- Single quotes, 100-char line width, ES5 trailing commas (enforced by Prettier)
- Strict TypeScript enabled

**Page Structure Pattern:**
```tsx
export default function PageName() {
  return (
    <>
      <section className="bg-white py-20">{/* Hero */}</section>
      <section className="bg-gray-50 py-16">{/* Features */}</section>
    </>
  );
}
```
