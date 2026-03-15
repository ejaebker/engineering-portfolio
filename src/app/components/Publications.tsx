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

  useEffect(() => {
    async function fetchPapers() {
      try {
        const res = await fetch(
          `https://api.semanticscholar.org/graph/v1/author/${authorId}/papers?fields=title,year,venue,externalIds,authors`
        );
        
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        
        const sortedPapers = (data.data || []).sort((a: Paper, b: Paper) => (b.year ?? 0) - (a.year ?? 0));
        setPapers(sortedPapers);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPapers();
  }, [authorId]);

  if (loading) {
    return <div className="text-zinc-500 font-mono text-sm animate-pulse">Scanning research database...</div>;
  }

  if (error || papers.length === 0) {
    return <div className="text-zinc-500 font-mono text-sm italic">No publications indexed for ID: {authorId}</div>;
  }

  return <PublicationsList papers={papers} />;
}
