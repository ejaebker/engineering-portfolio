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
    title: "Edge Compute Optimization",
    description: "Low-latency machine learning inference on resource-constrained embedded hardware. Focused on reducing power consumption while maintaining high accuracy.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
    technologies: ["C++", "TensorFlow Lite", "ARM Cortex"],
    link: "https://github.com",
    year: 2024,
    fullDescription: `
      This project focused on the deployment of deep neural networks on microcontrollers with limited SRAM and processing power. 
      Through advanced quantization techniques and layer fusion, I achieved a 4x reduction in model size with negligible accuracy loss.
      
      Key achievements include:
      - Optimized inference engine for ARM Cortex-M4 processors.
      - Implemented custom kernels for depthwise separable convolutions.
      - Reduced average power consumption by 35% compared to baseline implementations.
    `,
    challenges: "The primary challenge was managing the extremely tight memory budget, requiring manual memory allocation and careful buffer reuse strategies.",
    outcome: "Successfully deployed a real-time keyword spotting system running at 15fps on a 64MHz MCU.",
  },
  '2': {
    id: 2,
    title: "Autonomous Signal Processing",
    description: "Real-time noise cancellation and signal enhancement for industrial sensor networks using adaptive filtering techniques.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop",
    technologies: ["Python", "FPGA", "Signal Processing"],
    link: "https://github.com",
    year: 2024,
    fullDescription: `
      Developed a high-throughput signal processing pipeline for filtering high-frequency noise in industrial vibration sensors. 
      The system utilizes a hybrid approach with adaptive filters running on FPGA for ultra-low latency.
      
      Key achievements include:
      - Achieved 2ms end-to-end latency for signal reconstruction.
      - Designed a parallelized LMS filtering architecture.
      - Integrated seamlessly with existing SCADA monitoring systems.
    `,
    challenges: "Handling non-stationary noise environments required the development of a modified adaptive algorithm with faster convergence rates.",
    outcome: "Reduced false alarm rates in machine health monitoring by 60%.",
  },
  '3': {
    id: 3,
    title: "Neural Network Architecture",
    description: "Research into sparse neural networks and weight pruning to optimize deep learning models for mobile and edge deployment.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
    technologies: ["PyTorch", "Python", "CUDA"],
    link: "https://github.com",
    year: 2023,
    fullDescription: `
      Investigated structured and unstructured pruning methods to create lightweight versions of state-of-the-art architectures. 
      This research involved developing custom pruning schedules that adapt to the training dynamics.
      
      Key achievements include:
      - Developed a novel pruning metric based on activation gradients.
      - Reduced FLOPS by 50% while maintaining 98% of baseline Top-1 accuracy on ImageNet.
      - Open-sourced a pruning library currently used by several research groups.
    `,
    challenges: "Balancing the trade-off between sparsity and hardware-friendly execution patterns was a continuous optimization task.",
    outcome: "Published results in [Journal/Conference Name] and demonstrated real-world speedups on mobile GPUs.",
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
          <h1 className="text-6xl font-black tracking-tighter mb-8 text-[var(--text-primary)]">404_NOT_FOUND</h1>
          <p className="text-[var(--text-secondary)] mb-12 font-light">The architecture you are looking for does not exist in our systems.</p>
          <Link href="/" className="text-[11px] font-black tracking-[0.3em] text-[var(--text-primary)] hover:opacity-70 transition-colors">
            RETURN_TO_CORE
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="relative pb-20 min-h-screen overflow-hidden">
      <Navbar />

      <main className="max-w-[1600px] mx-auto px-8 md:px-16 pt-28 md:pt-40 relative">
        {/* Massive Background Title - Grid Breaking */}
        <div className="absolute top-[10vh] left-[-5vw] pointer-events-none select-none z-0 opacity-[0.03] dark:opacity-[0.05]">
          <h1 className="text-[clamp(6rem,20vw,25rem)] font-black text-[var(--text-primary)] leading-none uppercase tracking-tighter whitespace-nowrap">
            {project.title.split(' ')[0]}
          </h1>
        </div>

        {/* Back Button */}
        <Link
          href="/#projects"
          className="group relative z-10 inline-flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-[var(--text-muted)] hover:text-black dark:hover:text-white transition-all mb-12"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          BACK_TO_WORK
        </Link>

        {/* Hero Header - Asymmetric Grid */}
        <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-start mb-24 md:mb-40">
          <div className="space-y-8 md:space-y-12">
            <div className="flex items-center gap-6">
              <span className="text-[9px] md:text-[10px] text-[var(--text-muted)] font-black tracking-[0.5em] uppercase">
                {project.year} {"//"} PROJECT_NODE
              </span>
              <div className="h-px w-24 bg-[var(--divider)]" />
            </div>
            <h1 className="text-5xl md:text-[clamp(4rem,10vw,9rem)] font-black text-[var(--text-primary)] tracking-tighter leading-[0.8] uppercase max-w-4xl">
              {project.title}
            </h1>
            <p className="text-xl md:text-3xl text-[var(--text-secondary)] font-light leading-tight max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Floating Metadata - Aligned Right */}
          <aside className="lg:pt-24 space-y-12 border-l border-[var(--divider)] pl-12 hidden lg:block">
            <div className="space-y-4">
              <h2 className="text-[10px] font-black text-[var(--text-primary)] tracking-[0.5em] uppercase">/ STACK</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span key={tech} className="text-[9px] font-black tracking-[0.2em] text-[var(--text-muted)] uppercase">{tech}</span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-[10px] font-black text-[var(--text-primary)] tracking-[0.5em] uppercase">/ REPOSITORY</h2>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-xl border border-[var(--divider)] bg-black/[0.02] dark:bg-white/[0.02] text-xs font-bold hover:bg-[var(--text-primary)] hover:text-[var(--background)] tracking-widest transition-all uppercase underline-offset-8">VIEW_SOURCE_CODE</a>
            </div>
          </aside>
        </div>

        {/* Featured Image - Overlapping & Scaled */}
        <div className="relative z-20 mb-24 md:mb-48">
          <div className="relative aspect-[21/9] rounded-[3rem] md:rounded-[5rem] overflow-hidden border border-[var(--divider)] bg-zinc-100 dark:bg-zinc-900 group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 dark:opacity-40" />
            
            {/* Visual Callout Overlay */}
            <div className="absolute bottom-12 right-12 md:bottom-20 md:right-20 text-right">
              <div className="text-[clamp(2rem,5vw,4rem)] font-black text-white leading-none uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-1000 translate-y-4 group-hover:translate-y-0 transition-transform">
                VISUAL_SIG
              </div>
              <div className="text-[10px] font-mono text-white/40 tracking-[0.5em] uppercase">REF_ID // {project.id.toString().padStart(4, '0')}</div>
            </div>
          </div>
        </div>

        {/* Detailed Narrative Section - Offset Columns */}
        <div className="relative z-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-16 md:gap-32 items-start mb-40">
          <div className="lg:sticky lg:top-40 space-y-16">
            <div className="space-y-8">
              <h2 className="text-[10px] font-black text-[var(--text-muted)] tracking-[0.5em] uppercase">01 {"//"} THE_CHALLENGE</h2>
              <p className="text-lg md:text-2xl text-[var(--text-secondary)] font-light leading-relaxed">
                {project.challenges}
              </p>
            </div>
            
            {/* Mobile Stack Info */}
            <div className="lg:hidden space-y-12">
               <div className="space-y-4">
                <h2 className="text-[10px] font-black text-[var(--text-primary)] tracking-[0.5em] uppercase">/ STACK</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className="text-[9px] font-black tracking-[0.2em] text-[var(--text-muted)] uppercase">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-[10px] font-black text-[var(--text-primary)] tracking-[0.5em] uppercase">/ REPOSITORY</h2>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block text-xs font-bold hover:underline tracking-widest text-[var(--text-primary)] uppercase underline-offset-8">VIEW_SOURCE_CODE</a>
              </div>
            </div>
          </div>

          <div className="space-y-24">
            <div className="space-y-8 p-12 md:p-20 rounded-[3rem] md:rounded-[4rem] bg-black/[0.02] dark:bg-white/[0.02] border border-[var(--divider)] backdrop-blur-3xl relative overflow-hidden group">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--divider)] blur-[100px] rounded-full" />
              
              <h2 className="text-[10px] font-black text-[var(--text-primary)] tracking-[0.5em] uppercase relative z-10">02 {"//"} THE_APPROACH</h2>
              <div className="text-xl md:text-3xl text-[var(--text-secondary)] leading-tight font-light whitespace-pre-line relative z-10">
                {project.fullDescription}
              </div>
            </div>

            <div className="space-y-8 pl-12 md:pl-20 border-l-2 border-[var(--divider)]">
              <h2 className="text-[10px] font-black text-[var(--text-muted)] tracking-[0.5em] uppercase">03 {"//"} FINAL_OUTCOME</h2>
              <p className="text-xl md:text-4xl font-black text-[var(--text-primary)] leading-[0.9] uppercase tracking-tighter">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
