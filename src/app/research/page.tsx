import Link from 'next/link';
import Navbar from '../components/Navbar';
import Publications from '../components/Publications';

export default function ResearchArchive() {
  return (
    <div className="relative pb-20 min-h-screen overflow-hidden">
      <Navbar />

      <main className="max-w-[1600px] mx-auto px-8 md:px-16 pt-28 md:pt-40 relative">
        {/* Massive Background Title */}
        <div className="absolute top-[10vh] left-[-5vw] pointer-events-none select-none z-0 opacity-[0.03] dark:opacity-[0.05]">
          <h1 className="text-[clamp(6rem,20vw,25rem)] font-black text-[var(--text-primary)] leading-none uppercase tracking-tighter whitespace-nowrap">
            ARCHIVE
          </h1>
        </div>

        {/* Back Button */}
        <Link
          href="/#publications"
          className="group relative z-10 inline-flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-[var(--text-muted)] hover:text-black dark:hover:text-white transition-all mb-12"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          BACK_TO_HOME
        </Link>

        {/* Header */}
        <div className="relative z-10 mb-24 md:mb-32">
          <div className="flex items-center gap-6 mb-8">
            <span className="text-[9px] md:text-[10px] text-[var(--text-muted)] font-black tracking-[0.5em] uppercase">
              FULL_INDEX {"//"} RESEARCH_CATALOG
            </span>
            <div className="h-px w-24 bg-[var(--divider)]" />
          </div>
          <h1 className="text-5xl md:text-9xl font-black text-[var(--text-primary)] tracking-tighter leading-[0.8] uppercase mb-12">
            RESEARCH<br />PUBLICATIONS
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light max-w-2xl leading-tight">
            A comprehensive record of my theoretical research, industrial contributions, and academic publications.
          </p>
        </div>

        <div className="relative z-10">
          <Publications isArchive={true} />
        </div>
      </main>
    </div>
  );
}
