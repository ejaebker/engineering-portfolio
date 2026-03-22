# Engineering Portfolio Documentation

A high-fidelity technical portfolio built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed with a **"Surgical Editorial"** aesthetic to bridge the gap between high-end print design and precise engineering documentation.

---

## 1. Design System & Philosophy

### Aesthetic: "Blueprints meets Vogue"
- **Surgical Precision**: Minimalist layouts, sharp 1px borders, rigid grid alignment, and technical "archival" metadata labels.
- **Editorial Presence**: Aggressive typographic scale, bold headers, asymmetric compositions, and generous use of whitespace.
- **Atmospheric Depth**: A subtle architectural background (`SchematicBackground.tsx`) and high-contrast theme transitions.

### Key Typeset Presets (globals.css)
- `.type-hero`: Massive headlines (Names, Contact CTA).
- `.type-h1`: Section headers and project titles.
- `.type-h2`: Sub-headers and list item titles.
- `.type-meta`: Technical archival labels (10px, 0.4em tracking, uppercase).
- `.text-measure`: Constrained width (65ch) for optimal paragraph readability.

### Design Tokens
- **Light Theme**: Background: `#F8F9FA` | Foreground: `#121212`
- **Dark Theme**: Background: `#0c0c0e` (subtle blue chroma) | Foreground: `#fcfcfd`

---

## 2. Technical Architecture

### Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS 4+
- **Motion**: Framer Motion 12+ (standardized 600ms expo-out transitions)
- **3D/Canvas**: Three.js & HTML5 Canvas (Logo & Globe)
- **Deployment**: Cloudflare Pages (with OpenNext adapter)

### Core Components
- `Navbar.tsx`: Custom theme-aware navigation with `IntersectionObserver` for zero-jank scroll tracking.
- `Projects.tsx`: High-impact carousel with `PerspectiveCard` tilt interactions.
- `PublicationsList.tsx`: Context-aware list view (Compact for Home, Full-Row for Archive).
- `SchematicBackground.tsx`: Responsive SVG pattern mimicking a high-end PCB/CPU layout.

---

## 3. Content Management

### Updating Projects
Modify the `projects` array in `src/app/components/Projects.tsx`:
```typescript
{
  id: number,
  title: string,
  description: string,
  image: string (Unsplash URL or /public/path),
  technologies: string[],
  link: string,
  year: number
}
```

### Managing Research
The Publications section pulls data via `PublicationsList.tsx`. To update the list, modify the data source referenced in `src/app/components/Publications.tsx`.

### Resume
The resume is linked globally. Replace the file at `public/WINTER 2026 resume.pdf` to update it across the site.

---

## 4. Deployment (Cloudflare Pages)

### Infrastructure
The site is integrated with Cloudflare Pages via a Git-to-Build pipeline.
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (or `.vercel/output` if using OpenNext)
- **Caching**: Controlled via `public/_headers` to ensure static assets are served from the edge.

### Performance Optimizations
- **Dynamic Imports**: 3D components (Globe) load client-side only to reduce initial bundle size.
- **Memoization**: Core UI components use `React.memo` to prevent redundant re-renders during scroll.
- **Image Priority**: Hero images use the Next.js `priority` attribute for faster LCP.

---

## 5. Maintenance Commands

- `npm run dev`: Start development server.
- `npm run lint`: Run ESLint for design system & accessibility audit.
- `npm run build`: Generate production build.

---

*Last Updated: March 2026*
