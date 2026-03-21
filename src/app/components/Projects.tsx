'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PerspectiveCard from './PerspectiveCard';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
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
  ];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

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
      <div className="relative min-h-[500px] md:min-h-[400px]">
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
            <PerspectiveCard className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-[var(--divider)] bg-black/[0.01] dark:bg-white/[0.01] p-6 md:p-16 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.3)]">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                {/* Image Section - Left (Takes more space, asymmetric) */}
                <div className="relative group lg:w-[55%] shrink-0">
                  <div className="absolute -inset-6 bg-black/5 dark:bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-[var(--divider)] shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
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
                  
                  <div className="absolute top-8 right-8 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/5 px-4 py-2 rounded-full hidden md:block">
                    <span className="text-[10px] font-black tracking-widest text-white/90">PROJECT_0{currentIndex + 1}</span>
                  </div>
                </div>

                {/* Content Section - Right (Asymmetric spacing) */}
                <div className="flex flex-col lg:pt-8 flex-1">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <span className="text-[10px] text-[var(--text-muted)] font-black tracking-[0.5em] uppercase">
                        EST. {currentProject.year}
                      </span>
                      <h3 className="text-4xl md:text-6xl font-extrabold font-display text-[var(--text-primary)] tracking-tighter leading-[0.9] mb-4 md:mb-6 uppercase">
                        {currentProject.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-light">
                      {currentProject.description}
                    </p>

                    {/* Technologies - More minimal */}
                    <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4">
                      {currentProject.technologies.map((tech) => (
                        <div key={tech} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-[var(--text-muted)] rounded-full" />
                          <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--text-muted)] uppercase">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons - Distinctive Styling */}
                    <div className="flex flex-col sm:flex-row gap-6 pt-8">
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center px-10 py-4 bg-zinc-900 dark:bg-[var(--text-primary)] text-white dark:text-[var(--background)] transition-all duration-500 hover:scale-105"
                      >
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 dark:border-black/30" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 dark:border-black/30" />
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase">VIEW_SOURCE</span>
                      </a>
                      <Link
                        href={`/projects/${currentProject.id}`}
                        className="group relative flex items-center justify-center px-10 py-4 border border-[var(--divider)] bg-transparent text-[var(--text-primary)] transition-all duration-500 hover:bg-[var(--text-primary)] hover:text-[var(--background)]"
                      >
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--divider)] group-hover:border-transparent" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--divider)] group-hover:border-transparent" />
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase">DETAILS</span>
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
          className="p-5 md:p-4 rounded-full border border-[var(--divider)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-black/20 dark:hover:border-white/40 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          aria-label="Previous project"
        >
          <svg className="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-4 md:gap-6 items-center py-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="group relative flex items-center justify-center p-2"
              aria-label={`Go to project ${index + 1}`}
            >
              <div className={`h-1.5 transition-all duration-700 rounded-full ${
                index === currentIndex ? 'w-12 bg-black/60 dark:bg-white/90' : 'w-4 bg-[var(--divider)] group-hover:bg-black/30 dark:group-hover:bg-white/40'
              }`} />
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-5 md:p-4 rounded-full border border-[var(--divider)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-black/20 dark:hover:border-white/40 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          aria-label="Next project"
        >
          <svg className="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
