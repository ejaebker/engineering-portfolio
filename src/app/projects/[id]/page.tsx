import Link from 'next/link';
import Navbar from '@/app/components/Navbar';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  year: number;
  fullDescription: string;
  challenges: string;
  outcome: string;
}

const projects: Record<string, Project> = {
  '1': {
    id: 1,
    title: "Project One",
    description: "A brief description of your first project. Highlight the technologies used and key achievements.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com",
    year: 2024,
    fullDescription: `
      This project represents a comprehensive solution to [problem statement]. Built with modern technologies 
      and best practices in mind, it demonstrates proficiency in full-stack development.
      
      Key achievements include:
      - Implemented responsive design across all devices
      - Optimized performance with a 95+ Lighthouse score
      - Implemented CI/CD pipeline for automated testing and deployment
      - Contributed to the open-source ecosystem with this technology
    `,
    challenges: "The main challenge was [describe a technical challenge]. The solution involved [explain approach].",
    outcome: "The project resulted in [quantifiable results or impact]. This led to [further benefits or learnings].",
  },
  '2': {
    id: 2,
    title: "Project Two",
    description: "Description of your second project. Explain the problem you solved and the impact it had.",
    image: "https://images.unsplash.com/photo-1633356122544-f134ef2944f5?w=1200&h=600&fit=crop",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    link: "https://github.com",
    year: 2024,
    fullDescription: `
      This full-stack application showcases modern web development practices with [technology stack].
      It was built to solve [specific problem] for [target users].
      
      Key achievements include:
      - Deployed to production serving [X] users
      - Managed real-time data synchronization
      - Implemented secure authentication and authorization
      - Built scalable backend infrastructure
    `,
    challenges: "Scaling the database to handle concurrent requests was challenging. Implemented [solution].",
    outcome: "Achieved 99.9% uptime and processed [X] transactions successfully.",
  },
  '3': {
    id: 3,
    title: "Project Three",
    description: "Your third project description. Include metrics or outcomes that demonstrate your work.",
    image: "https://images.unsplash.com/photo-1526374965328-7f5ae4e8a83f?w=1200&h=600&fit=crop",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    link: "https://github.com",
    year: 2023,
    fullDescription: `
      This machine learning project demonstrates data analysis and model development capabilities.
      The project achieved [specific results] using [methodology].
      
      Key achievements include:
      - Built and trained [model type] with [accuracy/performance metric]
      - Processed and cleaned [amount] of data
      - Published findings in [venue/publication]
      - Open-sourced tools used by [X] researchers
    `,
    challenges: "Data quality issues required extensive preprocessing. Implemented [approach].",
    outcome: "Model achieved [X]% accuracy and insights were published in [venue].",
  },
};

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects[id];

  if (!project) {
    return (
      <div className="relative pb-20">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 pt-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-zinc-400 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="#projects" className="text-blue-400 hover:text-blue-300">
            ← Back to Projects
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="relative pb-20">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-32 space-y-12">
        {/* Back Button */}
        <Link
          href="#projects"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-semibold transition"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <span className="text-xs text-blue-500 font-mono font-bold tracking-tighter">
            {project.year}
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            {project.title}
          </h1>
          <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden border border-blue-500/30 shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Technologies */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase underline underline-offset-8">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="text-sm bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/40 hover:border-blue-500/70 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Full Description */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase underline underline-offset-8">
            Overview
          </h2>
          <p className="text-zinc-300 leading-relaxed whitespace-pre-line">
            {project.fullDescription}
          </p>
        </div>

        {/* Challenges */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase underline underline-offset-8">
            Challenges & Solutions
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            {project.challenges}
          </p>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono text-blue-500 tracking-[0.3em] uppercase underline underline-offset-8">
            Results & Learnings
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            {project.outcome}
          </p>
        </div>

        {/* Call to Action */}
        <div className="border-t border-zinc-800 pt-12 flex flex-col sm:flex-row gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center rounded-lg bg-blue-500/90 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400/90"
          >
            VIEW ON GITHUB ↗
          </a>
          <Link
            href="#projects"
            className="flex-1 inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:border-white"
          >
            BACK TO PROJECTS
          </Link>
        </div>
      </main>
    </div>
  );
}
