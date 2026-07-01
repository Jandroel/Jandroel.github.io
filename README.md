# Jandroel Portfolio

Personal portfolio website for Jandroel. The site is designed as a clean digital profile to present selected projects, technical skills, development process, GitHub activity, and contact links in a responsive interface.

## Overview

This portfolio is a frontend-focused Next.js project with a custom visual identity, animated sections, reusable UI components, and editable content data. The layout is built to work well on desktop and mobile while keeping the content easy to update from a small set of TypeScript files.

## Sections

- Hero with animated 2.5D visual
- About section
- Featured projects
- Technologies and tools
- Journey / timeline
- GitHub and project highlights
- Work process
- Contact call-to-action

## Tech Stack

- Next.js with App Router
- React
- TypeScript
- Tailwind CSS
- Radix UI primitives
- Motion for React
- SVG/CSS 2.5D hero visual with parallax
- Lucide React and React Icons
- ESLint and Prettier
- pnpm

The project also keeps a `public/models` folder for a possible future `.glb` model integration.

## Project Structure

```txt
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    cards/
    effects/
    layout/
    sections/
    ui/
  data/
    links.ts
    projects.ts
    site.ts
    skills.ts
    timeline.ts
  lib/
  types/
public/
  models/
```

## Content Editing

Most portfolio content is centralized in `src/data`:

- `src/data/site.ts`: base profile and metadata
- `src/data/projects.ts`: project cards and links
- `src/data/skills.ts`: technologies and tools
- `src/data/timeline.ts`: journey/timeline items
- `src/data/links.ts`: navigation and external links

Global styling lives in `src/app/globals.css`, while the main page sections are in `src/components/sections`.

## Getting Started

Requirements:

- Node.js 24 LTS
- pnpm 11+

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Create a production build:

```bash
pnpm build
```

Run the production server locally:

```bash
pnpm start
```

## Quality Checks

Run lint:

```bash
pnpm lint
```

Run TypeScript checks:

```bash
pnpm typecheck
```

Format files:

```bash
pnpm format
```

Check formatting without writing changes:

```bash
pnpm format:check
```
