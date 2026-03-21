import Link from 'next/link';
import Navbar from '../components/Navbar';
import Publications from '../components/Publications';

export default function ResearchArchive() {
  return (
    <div className="relative pb-20 min-h-screen overflow-hidden">
      <Navbar />

      <main id="main-content" className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pt-28 md:pt-40 relative">
        {/* Massive Background Title */}
        <div className="absolute top-[10vh] left-[-5vw] pointer-events-none select-none z-0 opacity-[0.03] dark:opacity-[0.05]">
          <h1 className="text-[clamp(6rem,20vw,25rem)] font-black text-[var(--text-primary)] leading-none uppercase tracking-tighter whitespace-nowrap header-transition">
            ARCHIVE
          </h1>
        </div>

        {/* Back Button - Architectural Style */}
        <Link
          href="/#publications"
          className="group relative z-10 inline-flex items-center gap-6 px-8 py-5 border-x border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--background)] transition-all duration-500 mb-8"
          aria-label="Back to home"
        >
          <div className="absolute top-0 left-0 w-3 h-px bg-[var(--text-primary)] group-hover:bg-transparent" />
          <div className="absolute bottom-0 right-0 w-3 h-px bg-[var(--text-primary)] group-hover:bg-transparent" />
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="type-meta">BACK_TO_HOME</span>
        </Link>

        {/* Header */}
        <div className="relative z-10 mb-32">
          <div className="flex items-center gap-6 mb-8">
            <span className="type-meta">
              FULL_INDEX {"//"} RESEARCH_CATALOG
            </span>
            <div className="h-px w-24 bg-[var(--divider)]" />
          </div>
          <h1 className="text-5xl md:text-9xl font-black text-[var(--text-primary)] tracking-tighter leading-[0.8] uppercase mb-8">
            RESEARCH<br />PUBLICATIONS
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light max-w-2xl leading-tight">
            A comprehensive record of my theoretical research, industrial contributions, and academic publications.
          </p>
        </div>

        <div className="relative z-10 space-y-32 pb-32">
          <Publications isArchive={true} />
        </div>
      </main>
    </div>
  );
}
