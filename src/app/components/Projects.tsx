'use client';

import { useState, useMemo, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PerspectiveCard from './PerspectiveCard';

const Projects = memo(function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = useMemo(() => [
    {
      id: 1,
      title: "Edge Compute Optimization",
      description: "Low-latency machine learning inference on resource-constrained embedded hardware. Focused on reducing power consumption while maintaining high accuracy.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
      technologies: ["C++", "TensorFlow Lite", "ARM Cortex"],
      link: "https://github.com",
      year: 2024,
    },
    {
      id: 2,
      title: "Autonomous Signal Processing",
      description: "Real-time noise cancellation and signal enhancement for industrial sensor networks using adaptive filtering techniques.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop",
      technologies: ["Python", "FPGA", "Signal Processing"],
      link: "https://github.com",
      year: 2024,
    },
    {
      id: 3,
      title: "Neural Network Architecture",
      description: "Research into sparse neural networks and weight pruning to optimize deep learning models for mobile and edge deployment.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
      technologies: ["PyTorch", "Python", "CUDA"],
      link: "https://github.com",
      year: 2023,
    },
  ], []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 border border-dashed border-[var(--divider)] rounded-[3rem] text-center px-8">
        <div className="w-12 h-12 mb-8 border border-[var(--divider)] flex items-center justify-center opacity-40">
          <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)]">404</span>
        </div>
        <span className="type-meta mb-4">SYSTEM_STATUS // NO_ACTIVE_PROJECTS</span>
        <p className="text-[var(--text-secondary)] text-sm max-w-sm mb-12 font-light leading-relaxed text-measure">
          The project directory is currently being restructured for the 2026 technical roadmap. In the meantime, explore my published research and peer-reviewed contributions.
        </p>
        <Link 
          href="#publications" 
          className="group relative inline-flex items-center gap-6 px-10 py-5 bg-transparent border-x border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--background)] transition-all duration-500"
        >
          <div className="absolute top-0 left-0 w-4 h-px bg-[var(--text-primary)] group-hover:bg-transparent" />
          <div className="absolute bottom-0 right-0 w-4 h-px bg-[var(--text-primary)] group-hover:bg-transparent" />
          <span className="type-meta text-inherit">VIEW_RESEARCH_INDEX</span>
          <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    );
  }

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="space-y-12">
      {/* Carousel Container */}
      <div className="relative min-h-[550px] md:min-h-[450px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 25 },
              opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }}
            className="w-full h-full"
          >
            <PerspectiveCard className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-[var(--divider)] bg-[var(--background)] p-6 md:p-16">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                {/* Image Section - Left */}
                <div className="relative group lg:w-[55%] shrink-0">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-[var(--divider)] transition-transform duration-700 group-hover:scale-[1.01]">
                    <Image
                      src={currentProject.image}
                      alt={currentProject.title}
                      fill
                      sizes="(max-w: 768px) 100vw, (max-w: 1200px) 60vw, 800px"
                      className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-40" />
                  </div>
                  
                  {/* Decorative Architectural Elements */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-[var(--divider)] rounded-tl-2xl pointer-events-none" />
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-[var(--divider)] rounded-br-2xl pointer-events-none" />
                  
                  <div className="absolute top-8 right-8 bg-[var(--background)]/10 backdrop-blur-md border border-[var(--divider)] px-4 py-2 rounded-full hidden md:block">
                    <span className="type-meta text-[var(--text-primary)] opacity-60 dark:opacity-90">PROJECT_0{currentIndex + 1}</span>
                  </div>
                </div>

                {/* Content Section - Right */}
                <div className="flex flex-col lg:pt-8 flex-1">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <span className="type-meta">
                        EST. {currentProject.year}
                      </span>
                      <h3 className="type-h1 uppercase">
                        {currentProject.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-light line-clamp-3 text-measure">
                      {currentProject.description}
                    </p>

                    {/* Technologies - Technical Square style */}
                    <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4">
                      {currentProject.technologies.map((tech) => (
                        <div key={tech} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-[var(--text-muted)]" />
                          <span className="type-meta">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button - Architectural style */}
                    <div className="flex flex-col sm:flex-row gap-6 pt-8">
                      <Link
                        href={`/projects/${currentProject.id}`}
                        className="group relative inline-flex items-center justify-center px-10 py-5 bg-transparent border-x border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--background)] transition-all duration-500"
                        aria-label={`View details for ${currentProject.title}`}
                      >
                        <div className="absolute top-0 left-0 w-4 h-px bg-[var(--text-primary)] group-hover:bg-transparent" />
                        <div className="absolute bottom-0 right-0 w-4 h-px bg-[var(--text-primary)] group-hover:bg-transparent" />
                        <span className="type-meta text-inherit">VIEW_DETAILS</span>
                        <svg className="w-4 h-4 ml-4 transition-transform duration-500 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </PerspectiveCard>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls - Centered */}
      <div className="flex items-center justify-center gap-12 px-2">
        <button
          onClick={handlePrev}
          className="p-5 md:p-4 rounded-full border border-[var(--divider)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          aria-label="Previous project"
        >
          <svg className="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2 md:gap-4 items-center py-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="group relative flex items-center justify-center p-4"
              aria-label={`Go to project ${index + 1}`}
            >
              <div className={`h-1.5 transition-all duration-700 rounded-full ${
                index === currentIndex ? 'w-12 bg-[var(--text-primary)] opacity-60 dark:opacity-90' : 'w-4 bg-[var(--divider)] group-hover:bg-[var(--text-primary)] group-hover:opacity-30'
              }`} />
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-5 md:p-4 rounded-full border border-[var(--divider)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          aria-label="Next project"
        >
          <svg className="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
});

export default Projects;
