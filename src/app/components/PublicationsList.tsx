'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';

interface Author {
  name: string;
}

interface Paper {
  paperId: string;
  title: string;
  year?: number;
  venue?: string;
  authors?: Author[];
  externalIds?: {
    DOI?: string;
  };
}

const PublicationsList = memo(function PublicationsList({ papers, isArchive = false }: { papers: Paper[]; isArchive?: boolean }) {
  if (isArchive) {
    // ─────── ⚡ ARCHIVE: Surgical Vertical Row Layout ───────
    return (
      <div className="space-y-0">
        {papers.map((paper, index) => (
          <motion.div
            key={paper.paperId}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="group relative grid md:grid-cols-[100px_1fr_auto] gap-8 md:gap-16 py-12 border-b border-[var(--divider)] items-start first:border-t"
            >
            {/* Index Number - Static position with strong presence */}
            <div className="text-5xl md:text-7xl font-black text-[var(--text-primary)] opacity-5 group-hover:opacity-100 transition-all duration-700 leading-none font-display -mt-2">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Main Content - Tightened grouping for title/meta */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="type-meta">{paper.year || 'N/A'}</span>
                  <div className="w-8 h-px bg-[var(--divider)]" />
                  <span className="type-meta">{paper.venue || 'RESEARCH_PREPRINT'}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight uppercase group-hover:translate-x-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] leading-[1] max-w-4xl text-[var(--text-primary)]">
                  {paper.title}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-[150px_1fr] gap-4 md:gap-8 items-start">
                <p className="type-meta opacity-30 pt-1">CONTRIBUTORS_</p>
                <p className="text-base md:text-lg text-[var(--text-secondary)] font-light italic text-measure leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                  {paper.authors?.map(a => a.name).join(', ')}
                </p>
              </div>
            </div>

            {/* Action - Floating editorial style */}
            {paper.externalIds?.DOI && (
              <div className="pt-4 md:pt-2 self-start md:self-center">
                <a 
                  href={`https://doi.org/${paper.externalIds.DOI}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link relative inline-flex items-center gap-6 px-12 py-6 bg-transparent border-x border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--background)] transition-all duration-700 overflow-hidden"
                >
                  <span className="type-meta text-inherit relative z-10">ACCESS_SOURCE</span>
                  <svg className="w-5 h-5 transition-transform duration-700 group-hover/link:translate-x-2 group-hover/link:-translate-y-1 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  // ─────── ⚡ HOME: Original Compact List View ───────
  return (
    <div className="space-y-8">
      {papers.map((paper, index) => (
        <motion.div
          key={paper.paperId}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative grid md:grid-cols-[80px_1fr] gap-6 py-10 border-b border-[var(--divider)] last:border-0"
        >
          <div className="text-4xl md:text-5xl font-black text-[var(--text-primary)] opacity-10 group-hover:opacity-100 transition-opacity duration-700 leading-none font-display">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="type-meta">
                {paper.year || 'N/A'} {"//"} {paper.venue || 'PREPRINT'}
              </span>
            </div>
            <h3 className="type-h2 group-hover:translate-x-2 transition-transform duration-500 uppercase line-clamp-2">
              {paper.title}
            </h3>
            <p className="text-sm md:text-base text-[var(--text-secondary)] font-light italic text-measure">
              {paper.authors?.slice(0, 3).map(a => a.name).join(', ')}
              {paper.authors && paper.authors.length > 3 ? ' et al.' : ''}
            </p>
            {paper.externalIds?.DOI && (
              <a 
                href={`https://doi.org/${paper.externalIds.DOI}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 type-meta text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors py-4 pr-4"
                aria-label={`View paper: ${paper.title}`}
              >
                VIEW_PAPER
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
});

export default PublicationsList;
