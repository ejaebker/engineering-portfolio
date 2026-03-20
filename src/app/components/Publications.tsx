'use client';

import { useEffect, useState } from 'react';
import PublicationsList from './PublicationsList';

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

export default function Publications() {
  const authorId = "2395917662"; 
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    
    async function fetchPapers() {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(
          `https://api.semanticscholar.org/graph/v1/author/${authorId}/papers?fields=title,year,venue,externalIds,authors`,
          { signal: controller.signal }
        );
        
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        
        const sortedPapers = (data.data || []).sort((a: Paper, b: Paper) => (b.year ?? 0) - (a.year ?? 0));
        setPapers(sortedPapers);
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          console.error(err);
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchPapers();
    return () => controller.abort();
  }, [authorId, retryCount]);

  if (loading) {
    return <div className="text-zinc-500 font-medium text-[10px] tracking-[0.3em] animate-pulse flex items-center gap-4 uppercase">
      <div className="w-4 h-px bg-white/20" />
      Updating Research Index
    </div>;
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="text-white/40 font-medium text-[10px] tracking-[0.3em] uppercase flex items-center gap-4">
          <div className="w-4 h-px bg-white/20" />
          Connection Unavailable
        </div>
        <button 
          onClick={() => setRetryCount(prev => prev + 1)}
          className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60 hover:text-white transition-all underline underline-offset-8 decoration-white/10"
        >
          RETRY_FETCH
        </button>
      </div>
    );
  }

  if (papers.length === 0) {
    return <div className="text-zinc-500 font-medium text-[10px] tracking-[0.3em] italic uppercase">No publications found for this index.</div>;
  }

  return <PublicationsList papers={papers} />;
}
