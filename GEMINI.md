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
- **Recruiters & Hiring Managers:** Looking for technical proficiency, experience, and clear contact points.
- **Fellow Researchers:** Interested in technical depth, publications, and specific engineering insights.

### Brand Personality
- **Voice/Tone:** Professional but visionary. 
- **Keywords:** Futuristic, Minimal, Clean.
- **Emotional Goals:** Awe through subtle motion, clarity through structure, and confidence through technical detail.

### Aesthetic Direction
- **Visual Tone:** High-contrast minimalism with organic, fluid movements.
- **References:** [Zaha Hadid](https://www.zaha-hadid.com/) (eclectic minimalism), [Lusion](https://lusion.co/) (nature-inspired motion).
- **Anti-References:** Corporate genericism, rigid/cluttered layouts, "template-like" appearance.

### Design Principles
1. **Motion as Narrative:** Every interaction should feel fluid and intentional, mirroring the "nature and movement" of Lusion.
2. **Structural Minimalism:** Use space and typography to create hierarchy, inspired by the bold, sweeping forms of Zaha Hadid.
3. **Futuristic Clarity:** Maintain a "neon" or high-tech edge while ensuring information is extremely easy to parse.
4. **Organic Precision:** Blend precise engineering details with soft, organic transitions and background effects.
