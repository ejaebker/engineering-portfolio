import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  year: number;
  fullDescription: string;
  challenges: string;
  outcome: string;
}

const projects: Record<string, Project> = {
  '1': {
    id: 1,
    title: "Engineering Portfolio",
    description: "An expressive editorial portfolio designed with sophisticated typography and organic motion. Built using Next.js 15, TypeScript, and Framer Motion for a seamless, high-performance user experience.",
    image: "/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    link: "https://github.com/ejaebker/engineering-portfolio",
    year: 2026,
    fullDescription: `Built using Next.js 15, TypeScript, and Framer Motion, this portfolio serves as a technical demonstration of modern web standards and high-performance frontend architecture. The project was developed in collaboration with Gemini CLI, leveraging AI-driven orchestration to accelerate the transition from architectural concept to a polished, production-ready interface.

Key technical features include:
- AI-Augmented Workflow: Developed using Gemini CLI for rapid prototyping, strategic refactoring, and complex state management.
- Custom Cursor System: Intelligent, reactive cursor that adapts to interactive elements.
- Organic Motion Engine: Custom Framer Motion configurations for smooth, non-linear transitions.
- Responsive Architecture: Fluid layouts that maintain typographic integrity across all device scales.`,
    challenges: "The primary challenge was balancing complex visual effects and motion with high performance and accessibility standards. Utilizing Gemini CLI allowed for efficient experimentation with non-linear animations while ensuring that high-contrast typography remained performant across different devices.",
    outcome: "Successfully created a unique, high-impact digital identity that reflects technical maturity and design-forward thinking, achieving high Lighthouse scores while maintaining a rich, immersive aesthetic.",
  },
};

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects[id];

  if (!project) {
    return (
      <div className="relative pb-20">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 pt-40 text-center">
          <h1 className="text-6xl font-black tracking-tighter mb-8 text-[var(--text-primary)]">404_NOT_FOUND</h1>
          <p className="text-[var(--text-secondary)] mb-12 font-light">The architecture you are looking for does not exist in our systems.</p>
          <Link href="/" className="text-[11px] font-black tracking-[0.3em] text-[var(--text-primary)] hover:opacity-70 transition-colors">
            RETURN_TO_CORE
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="relative pb-20 min-h-screen overflow-hidden">
      <Navbar />

      <main id="main-content" className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pt-28 md:pt-40 relative">
        {/* Massive Background Title */}
        <div className="absolute top-[10vh] left-[-5vw] pointer-events-none select-none z-0 opacity-[0.03] dark:opacity-[0.05]">
          <h1 className="text-[clamp(6rem,20vw,25rem)] font-black text-[var(--text-primary)] leading-none uppercase tracking-tighter whitespace-nowrap header-transition">
            {project.title.split(' ')[0]}
          </h1>
        </div>

        {/* Back Button - Architectural Style */}
        <Link
          href="/#projects"
          className="group relative z-10 inline-flex items-center gap-6 px-8 py-5 border-x border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--background)] transition-all duration-500 mb-8"
          aria-label="Back to projects"
        >
          <div className="absolute top-0 left-0 w-3 h-px bg-[var(--text-primary)] group-hover:bg-transparent" />
          <div className="absolute bottom-0 right-0 w-3 h-px bg-[var(--text-primary)] group-hover:bg-transparent" />
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="type-meta">BACK_TO_HOME</span>
        </Link>

        {/* Hero Header - Asymmetric Grid */}
        <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-start mb-32 md:mb-48">
          <div className="space-y-8">
            <div className="flex items-center gap-6 mb-8">
              <span className="type-meta">
                {project.year} {"//"} PROJECT_NODE
              </span>
              <div className="h-px w-24 bg-[var(--divider)]" />
            </div>
            <h1 className="text-5xl md:text-[clamp(4rem,10vw,9rem)] font-black text-[var(--text-primary)] tracking-tighter leading-[0.9] uppercase max-w-4xl mb-12">
              {project.title}
            </h1>
            <p className="text-xl md:text-3xl text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Floating Metadata - Aligned Right */}
          <aside className="lg:pt-24 space-y-12 border-l border-[var(--divider)] pl-12 hidden lg:block">
            <div className="space-y-4">
              <h2 className="type-meta !text-[var(--text-primary)]">/ STACK</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span key={tech} className="type-meta">{tech}</span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="type-meta !text-[var(--text-primary)]">/ REPOSITORY</h2>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-6 py-4 border border-[var(--divider)] bg-[var(--background)] text-[10px] font-black hover:bg-[var(--text-primary)] hover:text-[var(--background)] tracking-[0.4em] transition-all uppercase"
                aria-label={`View source code for ${project.title} on GitHub`}
              >
                VIEW_SOURCE_CODE
              </a>
            </div>
          </aside>
        </div>

        {/* Featured Image - Overlapping & Scaled */}
        <div className="relative z-20 mb-32 md:mb-48">
          <div className="relative aspect-[21/9] rounded-[3rem] md:rounded-[5rem] overflow-hidden border border-[var(--divider)] bg-[var(--background)] group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-w: 768px) 100vw, (max-w: 1600px) 90vw, 1400px"
              className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 dark:opacity-40" />
            
            {/* Visual Callout Overlay */}
            <div className="absolute bottom-12 right-12 md:bottom-16 md:right-16 text-right">
              <div className="text-[clamp(1rem,3vw,2rem)] font-black text-white leading-none uppercase tracking-tighter opacity-20 md:opacity-0 md:group-hover:opacity-60 transition-opacity duration-1000 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform">
                VISUAL_SIG
              </div>
              <div className="text-[8px] font-mono text-white/30 tracking-[0.4em] uppercase">REF_ID // {project.id.toString().padStart(4, '0')}</div>
            </div>
          </div>
        </div>

        {/* Detailed Narrative Section - Offset Columns */}
        <div className="relative z-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-16 md:gap-32 items-start mb-40">
          <div className="lg:sticky lg:top-40 space-y-16">
            <div className="space-y-8">
              <h2 className="type-meta">01 {"//"} THE_CHALLENGE</h2>
              <p className="text-lg md:text-2xl text-[var(--text-secondary)] font-light leading-relaxed">
                {project.challenges}
              </p>
            </div>
            
            {/* Mobile Stack Info */}
            <div className="lg:hidden space-y-12">
               <div className="space-y-4">
                <h2 className="type-meta !text-[var(--text-primary)]">/ STACK</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className="type-meta">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="type-meta !text-[var(--text-primary)]">/ REPOSITORY</h2>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block px-6 py-4 border border-[var(--divider)] bg-[var(--background)] text-[10px] font-black hover:bg-[var(--text-primary)] hover:text-[var(--background)] tracking-[0.4em] transition-all uppercase"
                  aria-label={`View source code for ${project.title} on GitHub`}
                >
                  VIEW_SOURCE_CODE
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-24">
            <div className="space-y-8 p-12 md:p-20 rounded-[3rem] md:rounded-[4rem] bg-[var(--background)] border border-[var(--divider)] relative overflow-hidden group">
              <h2 className="type-meta !text-[var(--text-primary)] relative z-10">02 {"//"} THE_APPROACH</h2>
              <div className="text-xl md:text-3xl text-[var(--text-secondary)] leading-snug font-light whitespace-pre-line relative z-10">
                {project.fullDescription}
              </div>
            </div>

            <div className="space-y-8 pl-12 md:pl-20 border-l-2 border-[var(--divider)]">
              <h2 className="type-meta relative z-10">03 {"//"} FINAL_OUTCOME</h2>
              <p className="text-xl md:text-4xl font-black text-[var(--text-primary)] leading-[0.9] uppercase tracking-tighter">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
