import Navbar from './components/Navbar';
import Publications from './components/Publications';
//import ProjectCard from './components/ProjectCard'; // We'll update this next

export default function Home() {
  return (
    <div className="relative pb-20">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 pt-32 space-y-32">
        
        {/* HERO SECTION */}
        <section className="relative">
          {/* Subtle glow effect behind text */}
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-600/10 blur-[120px]" />
          
          <h1 className="text-6xl font-black tracking-tighter mb-4 font-mono">
            E. JAEBKER<span className="text-blue-500 animate-pulse">_</span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl font-mono border-l border-blue-500 pl-6">
            Systems Engineer // Hardware + Software
          </p>
          
          <div className="mt-10 flex items-center gap-6">
            <a href="https://www.linkedin.com/in/eric-jaebker-57b160291/" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-blue-400 hover:text-white transition-colors border-b border-blue-400/30">
              LINKEDIN
            </a>
            <a href="/resume.pdf" className="text-sm font-mono text-blue-400 hover:text-white transition-colors border-b border-blue-400/30">
              DOWNLOAD_CV
            </a>
          </div>
        </section>

        {/* PROJECTS SECTION - COMMENTED OUT */}
        {/*
        <section id="projects">
          <h2 className="text-xs font-mono text-blue-500 mb-8 tracking-[0.3em] uppercase underline underline-offset-8">
            01. Featured_Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <ProjectCard 
                title="Autonomous Rover" 
                description="LiDAR-based navigation on embedded Linux."
                tags={["C++", "ROS2"]}
             />
             <ProjectCard 
                title="Custom PCB" 
                description="Mixed-signal board for high-speed data acquisition."
                tags={["KiCad", "Embedded"]}
             />
          </div>
        </section>
        */}

        {/* PUBLICATIONS SECTION */}
        <section id="publications">
          <h2 className="text-xs font-mono text-blue-500 mb-8 tracking-[0.3em] uppercase underline underline-offset-8">
            02. Research_&_Publications
          </h2>
          <Publications />
        </section>

      </main>
    </div>
  );
}