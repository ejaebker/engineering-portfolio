"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Publications from './components/Publications';
import Projects from './components/Projects';
import AnimatedSection from './components/AnimatedSection';
import PerspectiveCard from './components/PerspectiveCard';
import LocationGlobe from './components/LocationGlobe';

export default function Home() {
  return (
    <div className="relative pb-20">
      <Navbar />

      <main className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pt-20 md:pt-28 space-y-20 md:space-y-32 scroll-smooth">
        {/* HERO SECTION */}
        <AnimatedSection className="relative min-h-[85vh] flex flex-col justify-center" id="home">
          <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-12 lg:gap-0 items-center">
            {/* Left: Profile Info */}
            <div className="z-10 lg:pr-12 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1 className="text-[clamp(3rem,15vw,11rem)] font-black tracking-tighter mb-8 md:mb-12 leading-[0.8] text-[var(--text-primary)] drop-shadow-sm uppercase">
                  ERIC
                  <br />
                  JAEBKER
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
                  <div className="hidden md:block h-px w-16 bg-[var(--divider)]" />
                  <p className="text-[10px] md:text-xs font-black tracking-[0.6em] text-[var(--text-muted)] uppercase">
                    Electrical Engineer & Researcher
                  </p>
                </div>
                <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed mb-12 md:mb-16 max-w-xl font-light mx-auto md:mx-0">
                  Architecting intelligent systems through a blend of rigorous research and high-performance software engineering.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 items-center">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group py-2"
                  >
                    <span className="text-[10px] md:text-[11px] font-black tracking-[0.4em] text-[var(--text-primary)] transition-colors duration-500 uppercase">LINKEDIN</span>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-[var(--divider)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </a>
                  
                  <a
                    href="/WINTER 2026 resume.pdf"
                    className="group relative flex items-center gap-6 px-8 md:px-10 py-4 md:py-5 rounded-full border border-[var(--divider)] bg-black/[0.02] dark:bg-white/[0.02] hover:bg-[var(--text-primary)] hover:text-[var(--background)] transition-all duration-700"
                  >
                    <span className="text-[10px] md:text-[11px] font-black tracking-[0.4em] uppercase">GET RESUME</span>
                    <svg className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-1 text-[var(--text-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: Profile Picture */}
            <div className="relative flex justify-center md:justify-end overflow-visible mt-12 md:mt-0">
              <PerspectiveCard className="relative w-64 h-[450px] md:w-full md:h-[650px]">
                <div className="relative w-full h-full overflow-hidden rounded-[4rem] border border-white/5 bg-zinc-950 group shadow-2xl">
                  <Image
                    src="/IMG_0741.jpg"
                    alt="Eric Jaebker"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    priority
                  />
                  
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-40 pointer-events-none z-20" />
                </div>
              </PerspectiveCard>
              
              {/* Subtle Monochrome Glows */}
              <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-48 h-48 md:w-64 md:h-64 bg-white/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-56 h-56 md:w-80 md:h-80 bg-white/[0.03] blur-[100px] md:blur-[140px] rounded-full pointer-events-none" />
            </div>
          </div>
        </AnimatedSection>

        {/* ABOUT SECTION */}
        <AnimatedSection id="about" className="space-y-12 relative overflow-hidden md:overflow-visible">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-start relative z-10">
            <div className="md:sticky md:top-32 space-y-6">
              <h2 className="text-[10px] font-black text-[var(--text-muted)] tracking-[0.5em] uppercase">
                / PHILOSOPHY
              </h2>
              <div className="text-[10px] font-medium text-[var(--text-muted)] tracking-[0.2em] leading-relaxed uppercase">
                Bridging theory<br />
                and implementation<br />
                at scale.
              </div>
              <div className="pt-8 flex justify-center md:justify-start">
                <LocationGlobe />
              </div>
            </div>
            
            <div className="space-y-12 md:space-y-16">
              <div className="space-y-8 md:space-y-10 text-xl md:text-3xl text-[var(--text-secondary)] font-light leading-tight">
                <p>
                  I am an Electrical Engineer and Researcher dedicated to bridging the gap between theoretical models and real-world deployment. My work specializes in the intersection of hardware optimization and intelligent system design.
                </p>
                <p>
                  At Purdue University, my research focuses on developing high-performance computing solutions and machine learning architectures that are both efficient and scalable.
                </p>
              </div>

              {/* Technical Stats / Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pt-12 md:pt-16 border-t border-[var(--divider)]">
                <div className="space-y-3">
                  <div className="text-[9px] font-black text-[var(--text-muted)] tracking-[0.4em] uppercase">FOCUS_01</div>
                  <div className="text-base font-bold text-[var(--text-primary)] tracking-tight uppercase">Embedded Systems</div>
                </div>
                <div className="space-y-3">
                  <div className="text-[9px] font-black text-[var(--text-muted)] tracking-[0.4em] uppercase">FOCUS_02</div>
                  <div className="text-base font-bold text-[var(--text-primary)] tracking-tight uppercase">Machine Learning</div>
                </div>
                <div className="space-y-3">
                  <div className="text-[9px] font-black text-[var(--text-muted)] tracking-[0.4em] uppercase">FOCUS_03</div>
                  <div className="text-base font-bold text-[var(--text-primary)] tracking-tight uppercase">Signal Processing</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* PROJECTS SECTION */}
        <AnimatedSection id="projects" className="space-y-12">
          <div className="flex items-center gap-12 mb-8">
            <h2 className="text-[10px] font-black text-[var(--text-muted)] tracking-[0.5em] uppercase">
              / FEATURED WORK
            </h2>
            <div className="h-px flex-1 bg-[var(--divider)]" />
          </div>
          <Projects />
        </AnimatedSection>

        {/* PUBLICATIONS SECTION */}
        <AnimatedSection id="publications" className="space-y-12 pb-20">
           <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div className="space-y-6 md:sticky md:top-32">
              <h2 className="text-[10px] font-black text-[var(--text-muted)] tracking-[0.5em] uppercase">
                / RESEARCH
              </h2>
              <div className="pt-12">
                <Link
                  href="/research"
                  className="group relative flex items-center justify-between p-6 rounded-2xl border border-[var(--divider)] bg-black/[0.02] dark:bg-white/[0.02] hover:bg-[var(--text-primary)] transition-all duration-700"
                >
                  <span className="text-[10px] font-black tracking-[0.3em] text-[var(--text-primary)] group-hover:text-[var(--background)] uppercase transition-colors duration-500">VIEW_ALL_RESEARCH</span>
                  <svg className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-1 text-[var(--text-primary)] group-hover:text-[var(--background)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <Publications limit={3} />
          </div>
        </AnimatedSection>

        {/* CONTACT SECTION */}
        <AnimatedSection id="contact" className="py-32 border-t border-[var(--divider)]">
          <div className="max-w-3xl">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-12 leading-[0.85] uppercase text-[var(--text-primary)]">
              LET&apos;S BUILD<br />THE FUTURE.
            </h2>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-16 font-light max-w-xl">
              Always open to research collaborations, technical discussions, or exploring new frontiers in engineering.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <a
                href="mailto:ejaebker@purdue.edu"
                className="group relative flex items-center gap-6 px-12 py-6 rounded-full bg-zinc-900 dark:bg-[var(--text-primary)] text-white dark:text-[var(--background)] transition-all duration-700 hover:scale-105"
              >
                <span className="text-[11px] font-black tracking-[0.4em] uppercase">EMAIL ME</span>
                <svg className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative py-2"
              >
                <span className="text-[10px] md:text-[11px] font-black tracking-[0.4em] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors duration-500 uppercase">LINKEDIN</span>
                <div className="absolute bottom-0 left-0 w-full h-px bg-black/20 dark:bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* FOOTER */}
        <footer className="pt-20 pb-10 text-[10px] font-mono text-[var(--text-muted)] tracking-[0.2em] flex justify-between items-center border-t border-[var(--divider)]">
          <p>© {new Date().getFullYear()} ERIC JAEBKER</p>
          <div className="flex gap-8">
            <span className="hover:text-[var(--text-primary)] transition-colors cursor-default">SYSTEMS_ENGINEER</span>
            <span className="hover:text-[var(--text-primary)] transition-colors cursor-default">PURDUE_RESEARCH</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
