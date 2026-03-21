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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
      {papers.map((paper, index) => (
        <motion.div
          key={paper.paperId}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="group relative flex flex-col gap-4 py-10 border-b border-[var(--divider)]"
        >
          {/* Index Number - Compact */}
          <div className="absolute top-8 right-0 text-4xl font-black text-[var(--text-primary)] opacity-[0.05] group-hover:opacity-100 transition-all duration-700 leading-none pointer-events-none">
            {String(index + 1).padStart(2, '0')}
          </div>

          <div className="space-y-4 pr-12">
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-black text-[var(--text-muted)] tracking-[0.4em] uppercase">
                {paper.year || 'N/A'} {"//"} {paper.venue || 'RESEARCH_PREPRINT'}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-black text-[var(--text-primary)] leading-[1.1] uppercase group-hover:translate-x-2 transition-transform duration-500 tracking-tight line-clamp-2">
                {paper.title}
              </h3>
              
              <p className="text-sm text-[var(--text-secondary)] font-light italic line-clamp-2">
                {paper.authors?.map(a => a.name).join(', ')}
              </p>
            </div>

            {paper.externalIds?.DOI && (
              <div className="pt-2">
                <a 
                  href={`https://doi.org/${paper.externalIds.DOI}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[9px] font-black text-[var(--text-muted)] hover:text-[var(--text-primary)] tracking-[0.3em] uppercase transition-all group/link"
                >
                  <span className="border-b border-transparent group-hover/link:border-[var(--text-primary)] transition-all pb-0.5">ACCESS_FILE</span>
                  <svg className="w-3 h-3 transition-transform group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
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
          transition={{ delay: index * 0.1 }}
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
