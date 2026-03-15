"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Publications from './components/Publications';
import Projects from './components/Projects';
import AnimatedSection from './components/AnimatedSection';
import ThemeToggle from './components/ThemeToggle';


import PerspectiveCard from './components/PerspectiveCard';


export default function Home() {
  return (
    <div className="relative pb-20">
      <ThemeToggle />
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-20 md:pt-28 space-y-20 md:space-y-32 scroll-smooth">
        {/* HERO SECTION */}
        <AnimatedSection className="relative min-h-[85vh] flex flex-col justify-center" id="home">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-0 items-center">
            {/* Left: Profile Info */}
            <div className="z-10 md:pr-12 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1 className="text-[clamp(3.5rem,15vw,8rem)] font-black tracking-tighter mb-6 md:mb-8 leading-[0.85] bg-clip-text text-transparent bg-linear-to-b from-white via-white to-white/10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  ERIC<br />JAEBKER
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8">
                  <div className="hidden md:block h-px w-12 bg-blue-500/50 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  <p className="text-[10px] md:text-sm font-bold tracking-[0.3em] md:tracking-[0.5em] text-blue-400 uppercase drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">
                    Electrical Engineer & Researcher
                  </p>
                </div>
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 md:mb-12 max-w-xl font-light mx-auto md:mx-0">
                  Architecting intelligent systems through a blend of rigorous research and high-performance software engineering.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 items-center">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group py-2"
                  >
                    <span className="text-[10px] md:text-[11px] font-black tracking-[0.3em] text-white uppercase">LINKEDIN</span>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                    <div className="absolute -bottom-1 left-0 w-full h-px bg-blue-500 scale-x-0 group-hover:scale-x-50 transition-transform duration-700 delay-100 origin-left" />
                  </a>
                  
                  <a
                    href="/WINTER 2026 resume.pdf"
                    className="group relative flex items-center gap-4 px-6 md:px-8 py-3.5 md:py-4 rounded-full bg-white/[0.03] border border-white/5 hover:bg-white hover:text-black transition-all duration-700"
                  >
                    <span className="text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase">GET RESUME</span>
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-700 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: Profile Picture */}
            <div className="relative flex justify-center md:justify-end overflow-visible mt-8 md:mt-0">
              <PerspectiveCard className="relative w-64 h-[400px] md:w-full md:h-[600px]">
                <div className="relative w-full h-full overflow-hidden rounded-[3rem] md:rounded-[4rem] border border-white/5 bg-zinc-900 group shadow-2xl">
                  <Image
                    src="/IMG_0741.jpg"
                    alt="Eric Jaebker"
                    fill
                    className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    priority
                  />
                  
                  {/* Technical Overlay - Reveals on Hover */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10">
                    <div className="absolute top-8 left-8 md:top-10 md:left-10 text-[7px] md:text-[8px] font-mono text-blue-400 tracking-[0.3em] leading-relaxed">
                      SYSTEM_INIT // 0xAF42<br />
                      CORE_TEMP // 34.2C<br />
                      STATUS // OPTIMAL
                    </div>
                    {/* Architectural Grid Overlay */}
                    <div className="absolute inset-0 border-[0.5px] border-white/5 grid grid-cols-6 grid-rows-10" />
                  </div>

                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none z-20" />
                  <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10 flex justify-between items-end pointer-events-none z-30">
                    <div className="text-[8px] md:text-[10px] font-mono text-white/40 tracking-widest leading-relaxed">
                      PURDUE UNIVERSITY<br />
                      ELECTRICAL ENGINEERING
                    </div>
                  </div>
                </div>
              </PerspectiveCard>
              
              {/* Abstract Floating Shapes */}
              <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-48 h-48 md:w-64 md:h-64 bg-blue-500/5 blur-[80px] md:blur-[120px] rounded-full animate-pulse pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-56 h-56 md:w-80 md:h-80 bg-purple-500/5 blur-[100px] md:blur-[140px] rounded-full animate-pulse delay-1000 pointer-events-none" />
            </div>
          </div>
        </AnimatedSection>

        {/* ABOUT SECTION */}
        <AnimatedSection id="about" className="space-y-12 relative overflow-hidden md:overflow-visible">
          {/* Background Decorative Element - Hidden on very small screens */}
          <div className="hidden lg:block absolute -left-24 top-0 text-[120px] font-black text-white/[0.02] pointer-events-none select-none -rotate-90 origin-top-left">
            SYSTEM_ORIGIN
          </div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-12 items-start relative z-10">
            <div className="md:sticky md:top-32 space-y-4">
              <h2 className="text-[10px] font-black text-blue-500 tracking-[0.5em] uppercase">
                / ABOUT_CORE
              </h2>
              <div className="text-[9px] font-mono text-white/20 tracking-widest leading-relaxed">
                LOC // 40.4237° N, 86.9212° W<br />
                BUILD // v2.0.26<br />
                STATUS // ACTIVE_RESEARCH
              </div>
            </div>
            
            <div className="space-y-10 md:space-y-12">
              <div className="space-y-6 md:space-y-8 text-lg md:text-2xl text-zinc-400 font-light leading-relaxed">
                <p>
                  I am an Electrical Engineer and Researcher dedicated to bridging the gap between theoretical models and real-world deployment. My work specializes in the intersection of hardware optimization and intelligent system design.
                </p>
                <p>
                  At Purdue University, my research focuses on developing high-performance computing solutions and machine learning architectures that are both efficient and scalable.
                </p>
              </div>

              {/* Technical Stats / Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-10 md:pt-12 border-t border-white/[0.05]">
                <div className="space-y-2 p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03]">
                  <div className="text-[9px] font-black text-white/20 tracking-widest uppercase">Expertise_01</div>
                  <div className="text-sm font-bold text-white tracking-tight">Embedded Systems</div>
                </div>
                <div className="space-y-2 p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03]">
                  <div className="text-[9px] font-black text-white/20 tracking-widest uppercase">Expertise_02</div>
                  <div className="text-sm font-bold text-white tracking-tight">Machine Learning</div>
                </div>
                <div className="space-y-2 p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03]">
                  <div className="text-[9px] font-black text-white/20 tracking-widest uppercase">Expertise_03</div>
                  <div className="text-sm font-bold text-white tracking-tight">Signal Processing</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* PROJECTS SECTION */}
        <AnimatedSection id="projects" className="space-y-12">
          <div className="flex items-center gap-8 mb-4">
            <h2 className="text-[10px] font-bold text-blue-500 tracking-[0.5em] uppercase">
              / FEATURED WORK
            </h2>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <Projects />
        </AnimatedSection>

        {/* PUBLICATIONS SECTION */}
        <AnimatedSection id="publications" className="space-y-12">
           <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <h2 className="text-[10px] font-bold text-blue-500 tracking-[0.5em] uppercase sticky top-32">
              / RESEARCH
            </h2>
            <Publications />
          </div>
        </AnimatedSection>

        {/* CONTACT SECTION */}
        <AnimatedSection id="contact" className="py-20 border-t border-white/5">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10">
              LET&apos;S BUILD THE FUTURE.
            </h2>
            <p className="text-xl text-zinc-400 mb-12 font-light">
              Always open to research collaborations, technical discussions, or exploring new frontiers in engineering.
            </p>
            <div className="flex flex-wrap gap-8">
              <a
                href="mailto:ejaebker@purdue.edu"
                className="group relative flex items-center gap-4 px-10 py-5 rounded-full bg-white text-black transition-all duration-700 hover:scale-105"
              >
                <span className="text-[11px] font-black tracking-[0.3em]">EMAIL ME</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-10 py-5 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all duration-700"
              >
                <span className="text-[11px] font-black tracking-[0.3em]">LINKEDIN</span>
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* FOOTER */}
        <footer className="pt-20 pb-10 text-[10px] font-mono text-zinc-600 tracking-[0.2em] flex justify-between items-center">
          <p>© {new Date().getFullYear()} ERIC JAEBKER</p>
          <div className="flex gap-8">
            <span className="hover:text-white transition-colors cursor-default">SYSTEMS_ENGINEER</span>
            <span className="hover:text-white transition-colors cursor-default">PURDUE_RESEARCH</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
