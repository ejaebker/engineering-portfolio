'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const currentProject = projects[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="space-y-8">
      {/* Carousel Container */}
      <div className="rounded-2xl overflow-hidden border border-zinc-800/50 bg-zinc-900/30 p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section - Left */}
          <div className="relative group">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-80 object-cover rounded-xl border border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content Section - Right */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-xs text-blue-500 font-mono font-bold tracking-tighter">
                {currentProject.year} • PROJECT {currentIndex + 1} OF {projects.length}
              </span>
              <h3 className="text-3xl font-bold mt-4 text-white">
                {currentProject.title}
              </h3>
              <p className="text-base text-zinc-300 mt-4 leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <p className="text-xs text-zinc-500 font-mono mb-3">TECHNOLOGIES</p>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-blue-500/10 text-blue-300 px-3 py-1.5 rounded-full border border-blue-500/20 hover:border-blue-500/50 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center rounded-lg bg-blue-500/90 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400/90"
              >
                VIEW PROJECT ↗
              </a>
              <Link
                href={`/projects/${currentProject.id}`}
                className="flex-1 inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:border-white"
              >
                DETAILS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="p-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-blue-500 transition-all duration-200"
          aria-label="Previous project"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="flex gap-2.5">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2.5 bg-blue-500 shadow-lg shadow-blue-500/50'
                  : 'w-2.5 h-2.5 bg-zinc-600 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-blue-500 transition-all duration-200"
          aria-label="Next project"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
