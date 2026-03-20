# Engineering Portfolio - Gemini Context

This file provides persistent instructions and standards for the Engineering Portfolio project.

## Project Overview
A professional engineering portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. It showcases projects, publications, and a resume.

## Tech Stack & Conventions
- **Framework:** Next.js 15+ (App Router).
- **Language:** TypeScript (strict mode).
- **Styling:** Tailwind CSS (utility-first approach).
- **Icons/Assets:** SVGs in `/public` or Lucide React (if installed).
- **Components:** Functional components with arrow functions, located in `src/app/components/`.

## Coding Standards
- **Type Safety:** Always define interfaces/types for props and data structures. Avoid `any`.
- **Components:** Keep components modular and reusable. Use `Lucide` icons where appropriate.
- **Project Structure:**
  - `src/app/components/`: Shared UI components.
  - `src/app/projects/[id]/`: Dynamic routes for detailed project pages.
- **Naming:** PascalCase for components and files; camelCase for functions and variables.

## Content Management
- **Projects:** When adding new projects, ensure they are integrated into `src/app/components/Projects.tsx` or a central data file if one is created.
- **Resume:** The current resume is located at `public/WINTER 2026 resume.pdf`.

## Development Workflow
- Always run `npm run dev` to verify changes.
- Ensure all new components are responsive and support dark/light modes (using `ThemeToggle.tsx`).

## Design Context

### Users
- **Recruiters & Hiring Managers:** Looking for high-level impact, professional polish, and technical maturity.
- **Fellow Researchers:** Interested in clean, sophisticated presentation of complex technical narratives.

### Brand Personality
- **Voice/Tone:** Sophisticated, precise, and forward-thinking.
- **Keywords:** Clean, Forward-thinking, Unique.
- **Emotional Goals:** Professional confidence, quiet authority, and visual clarity.

### Aesthetic Direction
- **Visual Tone:** Expressive Editorial. High-contrast typography, grid-breaking layouts, and zero-color monochrome depth.
- **References:** 
  - [Gareth Hughes](https://www.gareth-hughes.com/) (typography-as-structure)
  - [Lorenzo Daldosso](https://www.lorenzodaldosso.it/) (characterful interactions)
  - [Visitors.now](https://visitors.now/) (immersive atmospheric fluidity)
- **Anti-References:** Cyberpunk clutter, technical jargon overlays, neon colors, busy patterns, corporate genericism.

### Design Principles
1. **Typographic Hierarchy:** Lead with bold, large-scale typography (inspired by Gareth Hughes) that defines the layout's structure and acts as a visual texture.
2. **Atmospheric Fluidity:** Maintain a continuous, organic background movement (inspired by Visitors.now) using monochromatic noise and gradients to create a living environment.
3. **Architectural Composition:** Use white space and grid-breaking layouts to create an editorial feel that guides focus and creates a sense of scale.
4. **Characterful Precision:** Implement subtle, unique interactions (inspired by Daldosso) that invert grayscale values or shift opacity to signify interactivity without using color.
5. **Balanced Maturity:** Ensure that despite the experimental layout and strict monochrome, high contrast and readability are preserved for a professional experience.
