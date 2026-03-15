async function getPapers(authorId: string) {
  // Only stop if the ID is empty or still the default instructional string
  if (!authorId || authorId === "YOUR_AUTHOR_ID_HERE") return [];

  const res = await fetch(
    `https://api.semanticscholar.org/graph/v1/author/${authorId}/papers?fields=title,year,venue,externalIds,authors`,
    { next: { revalidate: 86400 } }
  );
  
  if (!res.ok) return [];
  const data = await res.json();
  
  const papers = data.data || [];
  return papers.sort((a: Paper, b: Paper) => (b.year ?? 0) - (a.year ?? 0));
}

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

export default async function Publications() {
  // Use your actual ID here
  const authorId = "2395917662"; 
  const papers = await getPapers(authorId);

  if (papers.length === 0) {
    return <div className="text-zinc-500 font-mono text-sm italic">No publications found for ID: {authorId}</div>;
  }

  return (
    <div className="space-y-6">
      {papers.map((paper: Paper) => (
        <div key={paper.paperId} className="group border-l border-zinc-800 hover:border-blue-500 pl-6 py-2 transition-all">
          <span className="text-xs text-blue-500 font-mono font-bold tracking-tighter">
            {paper.year ?? 'N/A'} • {paper.venue || "RESEARCH_ENTRY"}
          </span>
          <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors">
            {paper.title}
          </h3>
          {paper.authors && paper.authors.length > 0 && (
            <p className="text-sm text-zinc-400 mt-2">
              {paper.authors.slice(0, 3).map((a) => a.name).join(', ')}
              {paper.authors.length > 3 ? ' et al.' : ''}
            </p>
          )}
          {paper.externalIds?.DOI && (
            <a 
              href={`https://doi.org/${paper.externalIds.DOI}`}
              className="text-[10px] text-zinc-500 hover:text-white font-mono uppercase mt-2 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOI: {paper.externalIds.DOI} ↗
            </a>
          )}
        </div>
      ))}
    </div>
  );
}