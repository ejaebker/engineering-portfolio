'use client';

import { motion, Variants } from 'framer-motion';

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

export default function PublicationsList({ papers }: { papers: Paper[] }) {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-8"
    >
      {papers.map((paper: Paper, index: number) => (
        <motion.div 
          key={paper.paperId} 
          variants={item}
          className="group relative bg-white/[0.01] border border-white/[0.05] rounded-3xl p-8 transition-all duration-500 hover:bg-white/[0.03] hover:border-white/20 overflow-hidden"
        >
          {/* Large Editorial Number */}
          <div className="absolute -top-4 -right-2 text-[clamp(4rem,10vw,8rem)] font-black text-white/[0.03] pointer-events-none select-none tracking-tighter">
            {String(papers.length - index).padStart(2, '0')}
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-6">
              <span className="text-[10px] text-white/40 font-black tracking-[0.5em] uppercase">
                {paper.year ?? 'N/A'} — {paper.venue || "UNPUBLISHED"}
              </span>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold group-hover:text-white transition-colors duration-500 leading-tight mb-6 max-w-2xl uppercase tracking-tight">
              {paper.title}
            </h3>
            
            {paper.authors && paper.authors.length > 0 && (
              <p className="text-base text-zinc-500 mb-10 font-light italic">
                {paper.authors.slice(0, 3).map((a) => a.name).join(', ')}
                {paper.authors.length > 3 ? ' et al.' : ''}
              </p>
            )}
            
            <div className="pt-6 border-t border-white/[0.05]">
              {paper.externalIds?.DOI ? (
                <a 
                  href={`https://doi.org/${paper.externalIds.DOI}`}
                  className="inline-flex items-center gap-4 text-[11px] text-white/30 hover:text-white font-black uppercase tracking-[0.4em] transition-all group/link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW PUBLICATION
                  <svg className="w-4 h-4 transition-transform duration-500 group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ) : (
                <span className="text-[11px] text-white/10 font-black uppercase tracking-[0.4em]">
                  DOCUMENT PENDING
                </span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
