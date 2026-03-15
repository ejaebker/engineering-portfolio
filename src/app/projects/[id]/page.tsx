import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

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
        <main className="max-w-5xl mx-auto px-6 pt-40 text-center">
          <h1 className="text-6xl font-black tracking-tighter mb-8 text-white">404_NOT_FOUND</h1>
          <p className="text-zinc-400 mb-12 font-light">The architecture you are looking for does not exist in our systems.</p>
          <Link href="/" className="text-[11px] font-black tracking-[0.3em] text-blue-400 hover:text-white transition-colors">
            RETURN_TO_CORE
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="relative pb-20 min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-28 md:pt-40 space-y-16 md:space-y-24">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-white/40 hover:text-white transition-all"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          BACK_TO_WORK
        </Link>

        {/* Header */}
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-end">
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-6">
              <span className="text-[9px] md:text-[10px] text-blue-500 font-black tracking-[0.5em] uppercase">
                {project.year} // PROJECT_FILE
              </span>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase">
              {project.title}
            </h1>
          </div>
          <div className="md:pb-4">
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Featured Image - Architectural Frame */}
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-900 aspect-video group shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
          {/* Decorative Overlay */}
          <div className="absolute top-6 right-6 md:top-10 md:right-10 text-[8px] md:text-[9px] font-mono text-white/20 tracking-widest uppercase">
            REF // {project.id.toString().padStart(4, '0')}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-start">
          <aside className="md:sticky md:top-32 space-y-10 md:space-y-12">
            {/* Technologies */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-[10px] font-black text-blue-500 tracking-[0.5em] uppercase">
                / STACK
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-[8px] md:text-[9px] font-black tracking-[0.2em] bg-white/[0.03] text-white/60 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/[0.05] uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-[10px] font-black text-blue-500 tracking-[0.5em] uppercase">
                / REPOSITORY
              </h2>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white text-black transition-all duration-700 hover:scale-[1.02]"
              >
                <span className="text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase">VIEW_SOURCE</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </aside>

          <div className="space-y-16 md:space-y-24 pb-20">
            {/* Full Description */}
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-[10px] font-black text-white/30 tracking-[0.5em] uppercase">
                01 // OVERVIEW
              </h2>
              <div className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light whitespace-pre-line">
                {project.fullDescription}
              </div>
            </div>

            {/* Challenges */}
            <div className="space-y-6 md:space-y-8 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.01] border border-white/[0.05] backdrop-blur-3xl">
              <h2 className="text-[10px] font-black text-blue-500 tracking-[0.5em] uppercase">
                02 // CHALLENGES
              </h2>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-light">
                {project.challenges}
              </p>
            </div>

            {/* Results */}
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-[10px] font-black text-white/30 tracking-[0.5em] uppercase">
                03 // OUTCOME
              </h2>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-light">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
