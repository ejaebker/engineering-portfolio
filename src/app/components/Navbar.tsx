'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import DodecahedronLogo from './DodecahedronLogo';
import { useEffect, useState, useCallback, memo } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = memo(function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // ─────── ⚡ OVERDRIVE: View Transition Wrapper ───────
  const navigateWithTransition = useCallback((e: React.MouseEvent, href: string) => {
    // Close mobile menu on navigation
    setIsMenuOpen(false);

    // Only apply to internal non-hash links for full page morphs
    if (!href.includes('#') && 'startViewTransition' in document) {
      e.preventDefault();
      const docWithTransition = document as unknown as { 
        startViewTransition: (callback: () => void) => void 
      };
      docWithTransition.startViewTransition(() => {
        router.push(href);
      });
    }
  }, [router]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    // ─────── ⚡ OPTIMIZE: IntersectionObserver for zero-jank scroll ───────
    const sections = ['home', 'about', 'projects', 'publications'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', 
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-6 md:top-8 w-full z-50 px-8 md:px-16 lg:px-24 pointer-events-none" role="banner">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1600px] mx-auto flex items-center justify-between pointer-events-auto"
        aria-label="Main Navigation"
      >
        {/* Brand/Logo - Editorial & Minimal */}
        <div className="flex items-center gap-6 group text-[var(--text-primary)] logo-transition">
          <DodecahedronLogo />
          <Link 
            href="/#home" 
            onClick={(e) => navigateWithTransition(e, '/#home')}
            className="type-meta opacity-70 group-hover:opacity-100 transition-opacity duration-500 py-4"
            aria-label="Eric Jaebker Home"
          >
            E.J
          </Link>
        </div>

        {/* Nav Links & Toggle - Minimal Distilled Layout */}
        <div className="flex items-center gap-2 relative text-[var(--text-primary)]">
          <div className="hidden sm:flex items-center relative" role="menubar">
            <NavLink href="#home" label="HOME" active={activeSection === 'home'} onNavigate={navigateWithTransition} />
            <NavLink href="#about" label="ABOUT" active={activeSection === 'about'} onNavigate={navigateWithTransition} />
            <NavLink href="#projects" label="PROJECTS" active={activeSection === 'projects'} onNavigate={navigateWithTransition} />
            <NavLink href="#publications" label="RESEARCH" active={activeSection === 'publications'} onNavigate={navigateWithTransition} />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden flex flex-col gap-1.5 p-4 items-end group"
            aria-expanded={isMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            <div className={`h-px bg-[var(--text-primary)] transition-all duration-500 ${isMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8 group-hover:w-6'}`} />
            <div className={`h-px bg-[var(--text-primary)] transition-all duration-500 ${isMenuOpen ? 'opacity-0' : 'w-4 group-hover:w-8'}`} />
            <div className={`h-px bg-[var(--text-primary)] transition-all duration-500 ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-6 group-hover:w-4'}`} />
          </button>
          
          <div className="w-px h-6 bg-[var(--text-primary)] opacity-10 mx-2 transition-opacity duration-500" aria-hidden="true" />
          
          <ThemeToggle />
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[var(--background)] z-40 sm:hidden pointer-events-auto"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-12">
              <NavLink href="#home" label="HOME" active={activeSection === 'home'} onNavigate={navigateWithTransition} isMobile />
              <NavLink href="#about" label="ABOUT" active={activeSection === 'about'} onNavigate={navigateWithTransition} isMobile />
              <NavLink href="#projects" label="PROJECTS" active={activeSection === 'projects'} onNavigate={navigateWithTransition} isMobile />
              <NavLink href="#publications" label="RESEARCH" active={activeSection === 'publications'} onNavigate={navigateWithTransition} isMobile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

export default Navbar;

const NavLink = memo(function NavLink({ 
  href, 
  label, 
  icon, 
  active, 
  onNavigate,
  isMobile
}: { 
  href: string; 
  label: string; 
  icon?: React.ReactNode; 
  active?: boolean;
  onNavigate: (e: React.MouseEvent, href: string) => void;
  isMobile?: boolean;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const springConfig = { damping: 20, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const hoverX = useTransform(x, (val) => val * 0.5);
  const hoverY = useTransform(y, (val) => val * 0.5);

  const fullHref = href.startsWith('#') ? `/${href}` : href;

  return (
    <Link 
      href={fullHref} 
      onClick={(e) => onNavigate(e, fullHref)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="menuitem"
      aria-current={active ? 'page' : undefined}
      className={`relative px-6 transition-all duration-500 rounded-full flex items-center justify-center group/nav outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${
        isMobile 
          ? 'py-8 text-2xl tracking-[0.6em]' 
          : 'py-4 type-meta'
      } ${
        active ? 'opacity-100' : 'opacity-70 hover:opacity-100'
      }`}
    >
      <motion.span style={{ x, y }} className="relative z-10 flex items-center justify-center uppercase">
        {icon || label}
      </motion.span>
      
      {active && (
        <motion.div 
          layoutId="activeNav"
          className="absolute inset-0 border-x border-[var(--text-primary)] opacity-20 pointer-events-none"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="absolute top-0 left-0 w-2 h-px bg-[var(--text-primary)]" />
          <div className="absolute bottom-0 right-0 w-2 h-px bg-[var(--text-primary)]" />
        </motion.div>
      )}

      {!isMobile && (
        <motion.div 
          style={{ x: hoverX, y: hoverY }}
          className="absolute bottom-0 left-0 w-full h-px bg-[var(--text-primary)] opacity-0 group-hover/nav:opacity-40 scale-x-0 group-hover/nav:scale-x-100 transition-all duration-500 origin-left pointer-events-none" 
        />
      )}
    </Link>
  );
});
