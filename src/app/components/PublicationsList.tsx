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
          {/* Background Technical Accent */}
          <div className="absolute top-0 right-0 p-6 text-[40px] font-black text-white/[0.02] pointer-events-none select-none">
            0{papers.length - index}
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] text-white/40 font-black tracking-[0.3em] uppercase">
                {paper.year ?? 'N/A'} // {paper.venue || "UNPUBLISHED"}
              </span>
              <div className="h-px w-8 bg-white/10" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold group-hover:text-white transition-colors duration-500 leading-tight mb-4 max-w-2xl uppercase">
              {paper.title}
            </h3>
            
            {paper.authors && paper.authors.length > 0 && (
              <p className="text-sm text-zinc-500 mb-6 font-light">
                {paper.authors.slice(0, 3).map((a) => a.name).join(', ')}
                {paper.authors.length > 3 ? ' et al.' : ''}
              </p>
            )}
            
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
              {paper.externalIds?.DOI ? (
                <a 
                  href={`https://doi.org/${paper.externalIds.DOI}`}
                  className="text-[10px] text-white/30 hover:text-white font-black uppercase tracking-widest transition-all flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ACCESS_PAPER
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              ) : (
                <span className="text-[10px] text-white/10 font-black uppercase tracking-widest">
                  DOCUMENT_PENDING
                </span>
              )}
              
              <div className="text-[9px] font-mono text-white/10 tracking-[0.2em]">
                {paper.paperId.substring(0, 8).toUpperCase()}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
