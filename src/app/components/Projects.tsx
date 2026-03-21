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
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            className="w-full h-full"
          >
            <PerspectiveCard className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-[var(--divider)] bg-black/[0.01] dark:bg-white/[0.01] p-6 md:p-12 backdrop-blur-3xl shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image Section - Left */}
                <div className="relative group perspective-1000">
                  <div className="absolute -inset-4 bg-black/5 dark:bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                  <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-[var(--divider)] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] w-full h-64 md:h-80">
                    <Image
                      src={currentProject.image}
                      alt={currentProject.title}
                      fill
                      className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 dark:opacity-60" />
                  </div>
                  {/* Architectural Corner Accent */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-[var(--divider)] rounded-tl-lg md:rounded-tl-xl pointer-events-none" />
                </div>

                {/* Content Section - Right */}
                <div className="flex flex-col gap-6 md:gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <span className="text-[9px] md:text-[10px] text-zinc-900/40 dark:text-white/80 font-black tracking-[0.4em] uppercase">
                        EST. {currentProject.year}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] tracking-tighter leading-none mb-4 md:mb-6 uppercase line-clamp-2">
                      {currentProject.title}
                    </h3>
                    <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-light line-clamp-4">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {currentProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[8px] md:text-[9px] font-black tracking-[0.2em] bg-black/[0.03] dark:bg-white/[0.05] text-[var(--text-muted)] px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-[var(--divider)] hover:border-black/30 dark:hover:border-white/50 hover:text-black dark:hover:text-white transition-all duration-500 uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4">
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-zinc-900 dark:bg-[var(--text-primary)] text-white dark:text-[var(--background)] transition-all duration-700 hover:scale-105"
                    >
                      <span className="text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase">VIEW SOURCE</span>
                    </a>
                    <Link
                      href={`/projects/${currentProject.id}`}
                      className="group flex items-center justify-center px-8 md:px-10 py-3.5 md:py-4 rounded-full border border-[var(--divider)] bg-black/[0.02] dark:bg-white/[0.02] text-[var(--text-primary)] transition-all duration-700 hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/50 dark:hover:border-white/80"
                    >
                      <span className="text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase">DETAILS</span>
                    </Link>
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
          className="p-4 rounded-full border border-[var(--divider)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-black/20 dark:hover:border-white/40 transition-all duration-300"
          aria-label="Previous project"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 transition-all duration-700 rounded-full ${
                index === currentIndex ? 'w-12 bg-black/60 dark:bg-white/90' : 'w-4 bg-[var(--divider)]'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-4 rounded-full border border-[var(--divider)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-black/20 dark:hover:border-white/40 transition-all duration-300"
          aria-label="Next project"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
