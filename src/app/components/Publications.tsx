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

export default function Publications({ limit, isArchive = false }: { limit?: number; isArchive?: boolean }) {
  const authorId = "2395917662"; 
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<'network' | 'timeout' | 'generic' | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout
    
    async function fetchPapers() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.semanticscholar.org/graph/v1/author/${authorId}/papers?fields=title,year,venue,externalIds,authors`,
          { signal: controller.signal }
        );
        
        clearTimeout(timeoutId);

        if (res.status === 404) throw new Error('not_found');
        if (!res.ok) throw new Error('network');
        
        const data = await res.json();
        const sortedPapers = (data.data || []).sort((a: Paper, b: Paper) => (b.year ?? 0) - (a.year ?? 0));
        setPapers(limit ? sortedPapers.slice(0, limit) : sortedPapers);
      } catch (err: unknown) {
        if (err instanceof Error) {
          if (err.name === 'AbortError') {
            setError('timeout');
          } else if (err.message === 'network') {
            setError('network');
          } else {
            setError('generic');
          }
          console.error('[Publications Fetch Error]:', err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchPapers();
    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [authorId, retryCount, limit]);

  if (loading) {
    return <div className="text-[var(--text-secondary)] font-medium text-[10px] tracking-[0.3em] animate-pulse flex items-center gap-4 uppercase">
      <div className="w-4 h-px bg-zinc-900/10 dark:bg-white/40" />
      Updating Research Index
    </div>;
  }

  if (error) {
    const errorMsg = error === 'timeout' 
      ? 'Connection Timeout' 
      : error === 'network' 
        ? 'Network Failure' 
        : 'Service Unavailable';

    return (
      <div className="space-y-6">
        <div className="text-[var(--text-muted)] font-medium text-[10px] tracking-[0.3em] uppercase flex items-center gap-4">
          <div className="w-4 h-px bg-[var(--divider)]" />
          {errorMsg}
        </div>
        <button 
          onClick={() => setRetryCount(prev => prev + 1)}
          className="text-[10px] font-black tracking-[0.4em] uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all underline underline-offset-8 decoration-[var(--divider)]"
        >
          FORCE_RECONNECT
        </button>
      </div>
    );
  }

  if (papers.length === 0) {
    return <div className="text-[var(--text-secondary)] font-medium text-[10px] tracking-[0.3em] italic uppercase">No publications found for this index.</div>;
  }

  return <PublicationsList papers={papers} isArchive={isArchive} />;
}
