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
    return <div className="text-zinc-500 font-mono text-[10px] tracking-widest animate-pulse flex items-center gap-3 uppercase">
      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
      Syncing_Research_Database...
    </div>;
  }

  if (error) {
    return (
      <div className="space-y-4">
        <div className="text-red-400/60 font-mono text-[10px] tracking-widest uppercase flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
          Network_Connectivity_Error
        </div>
        <button 
          onClick={() => setRetryCount(prev => prev + 1)}
          className="text-[9px] font-black tracking-[0.3em] uppercase text-white/40 hover:text-white border border-white/10 px-4 py-2 rounded-full transition-all"
        >
          RETRY_SYNC
        </button>
      </div>
    );
  }

  if (papers.length === 0) {
    return <div className="text-zinc-500 font-mono text-[10px] tracking-widest italic uppercase">No_Publications_Indexed // ID: {authorId}</div>;
  }

  return <PublicationsList papers={papers} />;
}
