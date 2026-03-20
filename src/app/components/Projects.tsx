'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of your first project. Highlight the technologies used and key achievements.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com",
      year: 2024,
    },
    {
      id: 2,
      title: "Project Two",
      description: "Description of your second project. Explain the problem you solved and the impact it had.",
      image: "https://images.unsplash.com/photo-1633356122544-f134ef2944f5?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Node.js", "MongoDB"],
      link: "https://github.com",
      year: 2024,
    },
    {
      id: 3,
      title: "Project Three",
      description: "Your third project description. Include metrics or outcomes that demonstrate your work.",
      image: "https://images.unsplash.com/photo-1526374965328-7f5ae4e8a83f?w=600&h=400&fit=crop",
      technologies: ["Python", "Machine Learning", "Data Analysis"],
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
            className="w-full"
          >
            <div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/[0.08] bg-white/[0.01] p-6 md:p-12 backdrop-blur-3xl shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image Section - Left */}
                <div className="relative group perspective-1000">
                  <div className="absolute -inset-4 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                  <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-64 md:h-80 object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80"; // Abstract technical fallback
                        e.currentTarget.className = "w-full h-64 md:h-80 object-cover opacity-20 grayscale";
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </div>
                  {/* Architectural Corner Accent */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-white/20 rounded-tl-lg md:rounded-tl-xl pointer-events-none" />
                </div>

                {/* Content Section - Right */}
                <div className="flex flex-col gap-6 md:gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <span className="text-[9px] md:text-[10px] text-white/40 font-black tracking-[0.4em] uppercase">
                        EST. {currentProject.year}
                      </span>
                      <div className="h-px w-6 md:w-8 bg-white/10" />
                      <span className="text-[9px] md:text-[10px] text-white/20 font-mono tracking-widest">
                        PHASE_0{currentIndex + 1}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-4 md:mb-6 uppercase">
                      {currentProject.title}
                    </h3>
                    <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-light">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {currentProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[8px] md:text-[9px] font-black tracking-[0.2em] bg-white/[0.03] text-white/60 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/[0.05] hover:border-white/20 hover:text-white transition-all duration-500 uppercase"
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
                      className="group relative flex items-center justify-center px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-white text-black transition-all duration-700 hover:scale-105"
                    >
                      <span className="text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase">VIEW SOURCE</span>
                    </a>
                    <Link
                      href={`/projects/${currentProject.id}`}
                      className="group flex items-center justify-center px-8 md:px-10 py-3.5 md:py-4 rounded-full border border-white/10 text-white/80 transition-all duration-700 hover:bg-white/5 hover:border-white"
                    >
                      <span className="text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase">DETAILS</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between px-2">
        <button
          onClick={handlePrev}
          className="p-4 rounded-full border border-white/5 text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
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
                index === currentIndex ? 'w-12 bg-white/40' : 'w-4 bg-white/10'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-4 rounded-full border border-white/5 text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
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
