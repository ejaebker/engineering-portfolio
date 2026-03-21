'use client';

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

export default function PublicationsList({ papers, isArchive = false }: { papers: Paper[]; isArchive?: boolean }) {
  if (isArchive) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-x-12">
      {papers.map((paper, index) => (
        <motion.div
          key={paper.paperId}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className={`group relative flex flex-col gap-6 pt-12 border-t border-[var(--divider)] ${
            index % 3 === 1 ? 'md:mt-12' : index % 3 === 2 ? 'md:mt-24' : ''
          }`}
        >
          {/* Index Number - Editorial Detail */}
          <div className="absolute top-4 left-0 text-[10px] font-black text-[var(--text-muted)] tracking-widest opacity-40 group-hover:opacity-100 transition-opacity duration-700">
            INDEX_{String(index + 1).padStart(3, '0')}
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-[9px] font-black text-[var(--text-muted)] tracking-[0.4em] uppercase">
                {paper.year || 'N/A'} {"//"} {paper.venue || 'RESEARCH_PREPRINT'}
              </span>
              <h3 className="text-xl font-black text-[var(--text-primary)] leading-[1.2] uppercase tracking-tight group-hover:text-[var(--text-muted)] transition-colors duration-500 line-clamp-3">
                {paper.title}
              </h3>
            </div>

            <p className="text-[11px] text-[var(--text-secondary)] font-light italic leading-relaxed">
              {paper.authors?.map(a => a.name).join(', ')}
            </p>

            {paper.externalIds?.DOI && (
              <div className="pt-4 flex items-center justify-between">
                <a 
                  href={`https://doi.org/${paper.externalIds.DOI}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[9px] font-black text-[var(--text-primary)] hover:text-[var(--text-muted)] tracking-[0.3em] uppercase transition-all"
                >
                  ACCESS_PAPER
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="w-8 h-px bg-[var(--divider)] group-hover:w-16 transition-all duration-700" />
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
    );
  }

  // Home Page List View
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
          <div className="text-4xl md:text-5xl font-black text-[var(--text-primary)] opacity-10 group-hover:opacity-100 transition-opacity duration-700 leading-none">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black text-[var(--text-muted)] tracking-widest uppercase">
                {paper.year || 'N/A'} {"//"} {paper.venue || 'PREPRINT'}
              </span>
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-[var(--text-primary)] leading-tight uppercase group-hover:translate-x-2 transition-transform duration-500 line-clamp-2">
              {paper.title}
            </h3>
            <p className="text-sm md:text-base text-[var(--text-secondary)] font-light italic">
              {paper.authors?.slice(0, 3).map(a => a.name).join(', ')}
              {paper.authors && paper.authors.length > 3 ? ' et al.' : ''}
            </p>
            {paper.externalIds?.DOI && (
              <a 
                href={`https://doi.org/${paper.externalIds.DOI}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[10px] font-black text-[var(--text-muted)] hover:text-[var(--text-primary)] tracking-[0.3em] uppercase transition-colors pt-2"
              >
                ACCESS_FULL_TEXT
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
}
