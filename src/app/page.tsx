"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Publications from './components/Publications';
import Projects from './components/Projects';
import AnimatedSection from './components/AnimatedSection';
import PerspectiveCard from './components/PerspectiveCard';

const LocationGlobe = dynamic(() => import('./components/LocationGlobe'), {
  ssr: false,
  loading: () => <div className="w-32 h-32 rounded-full border border-[var(--divider)] animate-pulse" />
});

export default function Home() {
  return (
    <div className="relative pb-20">
      <Navbar />

      <main id="main-content" className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pt-20 md:pt-28 space-y-32 md:space-y-48 scroll-smooth">
        {/* HERO SECTION */}
        <AnimatedSection className="relative min-h-[90vh] flex flex-col justify-center" id="home">
          <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-12 lg:gap-0 items-center relative">
            {/* Left: Profile Info */}
            <div className="z-10 lg:pr-12 text-center lg:text-left">
              <div className="space-y-8 md:space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h1 className="type-hero drop-shadow-sm header-transition">
                    <span className="block overflow-hidden">
                      <motion.span 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="block"
                      >
                        ERIC
                      </motion.span>
                    </span>
                    <span className="block overflow-hidden mt-2">
                      <motion.span 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="block"
                      >
                        JAEBKER
                      </motion.span>
                    </span>
                  </h1>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                  className="flex flex-col md:flex-row items-center gap-6"
                >
                  <p className="type-meta">
                    Electrical Engineer & Researcher
                  </p>
                </motion.div>

                <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed max-w-xl font-light mx-auto md:mx-0 text-measure">
                  Architecting intelligent systems through a blend of rigorous research and high-performance software engineering.
                </p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
                  className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 items-center pt-4"
                >
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group py-4 px-2"
                  >
                    <span className="type-meta text-[var(--text-primary)] transition-colors duration-500">LINKEDIN</span>
                    <div className="absolute bottom-2 left-0 w-full h-px bg-[var(--text-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </a>
                  
                  <a
                    href="/WINTER 2026 resume.pdf"
                    className="group relative flex items-center gap-6 px-10 py-5 bg-transparent border-x border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--background)] transition-all duration-500 overflow-hidden"
                  >
                    {/* Onboarding Pulse Effect */}
                    <motion.div 
                      animate={{ 
                        opacity: [0, 0.15, 0],
                        scale: [0.9, 1.1, 1.2],
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-[var(--text-primary)] pointer-events-none"
                    />
                    
                    <div className="absolute top-0 left-0 w-4 h-px bg-[var(--text-primary)] group-hover:bg-transparent" />
                    <div className="absolute bottom-0 right-0 w-4 h-px bg-[var(--text-primary)] group-hover:bg-transparent" />
                    <span className="type-meta text-inherit relative z-10">GET RESUME</span>
                    <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Right: Profile Picture */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex justify-center md:justify-end overflow-visible mt-12 md:mt-0"
            >
              <PerspectiveCard className="relative w-full max-w-[320px] aspect-[3/4] md:w-full md:h-[650px]">
                <div className="relative w-full h-full overflow-hidden rounded-[4rem] border border-[var(--divider)] bg-[var(--background)] group">
                  <Image
                    src="/IMG_0741.jpg"
                    alt="Eric Jaebker"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    priority
                  />
                  
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-40 pointer-events-none z-20" />
                </div>
              </PerspectiveCard>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* ABOUT SECTION */}
        <AnimatedSection 
          id="about" 
          className="relative overflow-hidden md:overflow-visible"
          label="CORE_INTEL"
          showBrackets
        >
          {/* Main Layout: Asymmetric and spacious with structural divider */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-0 items-start relative z-10">
            {/* Left: Philosophy Header - More breathing room and narrower */}
            <div className="md:sticky md:top-32 md:w-[30%] space-y-10 md:pr-12">
              <div className="space-y-6">
                <h2 className="type-meta">
                  / PHILOSOPHY
                </h2>
                <div className="type-meta leading-relaxed opacity-60">
                  Synthesizing complex<br />
                  technical narratives<br />
                  into modular systems.
                </div>
              </div>
              
              <div className="pt-8 flex justify-start">
                <div className="relative">
                  <LocationGlobe />
                  {/* Subtle architectural guide */}
                  <div className="absolute -bottom-4 -left-4 w-12 h-px bg-[var(--divider)] opacity-50" />
                  <div className="absolute -bottom-4 -left-4 h-12 w-px bg-[var(--divider)] opacity-50" />
                </div>
              </div>
            </div>

            {/* Structural Vertical Line (The "Option 2" fix) */}
            <div className="hidden md:block w-px self-stretch bg-linear-to-b from-[var(--divider)] via-[var(--divider)] to-transparent opacity-40 mx-12" />
            
            {/* Right: Content - Offset and wider */}
            <div className="flex-1 md:pt-24 space-y-24 md:space-y-32 md:pl-12">
              <div className="space-y-10 md:space-y-12 text-xl md:text-3xl lg:text-4xl text-[var(--text-secondary)] font-light leading-tight max-w-3xl">
                <p className="transition-all duration-700">
                  I specialize in the architectural optimization of intelligent systems, with a particular focus on the intersection of hardware constraints and high-performance computing.
                </p>
                <p>
                  Currently, my research at Purdue University explores scalable machine learning architectures and efficient signal processing pipelines designed for real-world reliability.
                </p>
              </div>

              {/* Technical Stats / Skills Grid - Editorial Layout */}
              <div className="flex flex-col md:flex-row gap-12 md:gap-20 pt-16 md:pt-24 relative">
                <div className="space-y-4 md:w-1/3">
                  <div className="type-meta">FOCUS_01</div>
                  <div className="text-xl font-bold text-[var(--text-primary)] tracking-tighter uppercase leading-none">Embedded<br />Systems</div>
                </div>
                
                <div className="space-y-4 md:w-1/3">
                  <div className="type-meta">FOCUS_02</div>
                  <div className="text-xl font-bold text-[var(--text-primary)] tracking-tighter uppercase leading-none">Machine<br />Learning</div>
                </div>

                <div className="space-y-4 md:w-1/3">
                  <div className="type-meta">FOCUS_03</div>
                  <div className="text-xl font-bold text-[var(--text-primary)] tracking-tighter uppercase leading-none">Signal<br />Processing</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* PROJECTS SECTION */}
        <AnimatedSection 
          id="projects" 
          className="space-y-12"
          label="FEATURED_SYSTEMS"
          showBrackets
        >
          <div className="flex items-center gap-12 mb-8">
            <h2 className="type-meta">
              / FEATURED WORK
            </h2>
            <div className="h-px flex-1 bg-[var(--divider)]" />
          </div>
          <Projects />
        </AnimatedSection>

        {/* PUBLICATIONS SECTION */}
        <AnimatedSection 
          id="publications" 
          className="relative"
          label="RESEARCH_INDEX"
          showBrackets
        >
           <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start relative">
            {/* Left: Section Meta & Navigation */}
            <div className="space-y-12 md:sticky md:top-32 h-fit">
              <div className="space-y-6">
                <h2 className="type-meta">
                  / RESEARCH
                </h2>
                <div className="type-meta leading-relaxed">
                  Contributing to the<br />
                  next generation of<br />
                  intelligent systems.
                </div>
              </div>

              {/* Architectural Nav Button */}
              <div className="pt-4">
                <Link
                  href="/research"
                  className="group relative inline-flex items-center gap-8 px-10 py-5 bg-transparent border-x border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--background)] transition-all duration-500"
                >
                  <div className="absolute top-0 left-0 w-4 h-px bg-[var(--text-primary)] group-hover:bg-transparent" />
                  <div className="absolute bottom-0 right-0 w-4 h-px bg-[var(--text-primary)] group-hover:bg-transparent" />
                  
                  <span className="type-meta text-inherit">VIEW_ALL</span>
                  
                  <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Architectural Technical Detail */}
              <div className="hidden md:block pt-12 opacity-20 pointer-events-none">
                <div className="text-[8px] font-mono tracking-[0.4em] text-[var(--text-muted)] uppercase mb-2">SYS_REF // CAT_001</div>
                <div className="w-full h-px bg-linear-to-r from-[var(--divider)] to-transparent" />
              </div>
            </div>

            {/* Right: Publications List */}
            <div className="relative">
              {/* Vertical Guide Line */}
              <div className="hidden md:block absolute -left-12 top-0 h-full w-px bg-linear-to-b from-[var(--divider)] to-transparent" />
              <Publications limit={3} />
            </div>
          </div>
        </AnimatedSection>

        {/* CONTACT SECTION */}
        <AnimatedSection 
          id="contact" 
          className="py-32 border-t border-[var(--divider)]"
          label="COMMUNICATION_TERMINAL"
        >
          <div className="max-w-3xl">
            <h2 className="type-cta mb-12 text-[var(--text-primary)]">
              LET&apos;S BUILD<br />THE FUTURE.
            </h2>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-16 font-light max-w-xl text-measure">
              Always open to research collaborations, technical discussions, or exploring new frontiers in engineering.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <button
                onClick={() => {
                  const user = "ejaebker";
                  const domain = "purdue.edu";
                  window.location.href = `mailto:${user}@${domain}`;
                }}
                className="group relative flex items-center gap-6 px-10 py-5 bg-transparent border-x border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--background)] transition-all duration-500 cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-4 h-px bg-[var(--text-primary)] group-hover:bg-transparent" />
                <div className="absolute bottom-0 right-0 w-3 h-px bg-[var(--text-primary)] group-hover:bg-transparent" />
                <span className="type-meta text-inherit">EMAIL ME</span>
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative py-4 px-2"
              >
                <span className="type-meta group-hover:text-[var(--text-primary)] transition-colors duration-500">LINKEDIN</span>
                <div className="absolute bottom-2 left-0 w-full h-px bg-[var(--text-primary)]/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
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
