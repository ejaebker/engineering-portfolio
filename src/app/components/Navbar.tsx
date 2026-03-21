'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="fixed top-8 w-full z-50 px-8 pointer-events-none">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1600px] mx-auto flex items-center justify-between pointer-events-auto"
      >
        {/* Brand/Logo - Editorial & Minimal */}
        <div className="flex items-center gap-6 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 border border-[var(--divider)] rounded-full transition-all duration-700 group-hover:scale-110 group-hover:border-zinc-900/40 dark:group-hover:border-white/50" />
            <div className="w-1 h-1 bg-[var(--text-primary)] rounded-full transition-all duration-700 group-hover:scale-[2]" />
          </div>
          <a href="#home" className="text-[11px] font-black tracking-[0.6em] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-500 uppercase">
            ERIC JAEBKER
          </a>
        </div>

        {/* Floating Nav Capsule */}
        <div className="flex items-center gap-2 p-2 bg-white/40 dark:bg-black/20 backdrop-blur-3xl rounded-full border border-zinc-900/5 dark:border-white/5 shadow-2xl overflow-hidden">
          <div className="hidden sm:flex items-center">
            <NavLink href="#home" label="HOME" />
            <NavLink href="#about" label="ABOUT" />
            <NavLink href="#projects" label="PROJECTS" />
            <NavLink href="#publications" label="RESEARCH" />
          </div>
          
          <div className="w-px h-6 bg-white/10 mx-2" />
          
          <ThemeToggle />
        </div>
      </motion.nav>
    </header>
  );
}

function NavLink({ href, label, icon }: { href: string; label: string; icon?: React.ReactNode }) {
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

  const springConfig = { damping: 15, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  return (
    <Link 
      href={href.startsWith('#') ? `/${href}` : href} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative px-6 py-2 text-[10px] font-black tracking-[0.4em] text-zinc-900/40 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors duration-500 rounded-full flex items-center justify-center group/nav"
    >
      <motion.span style={{ x, y }} className="relative z-10 flex items-center justify-center">
        {icon || label}
      </motion.span>
      <motion.div 
        style={{ x: x.get() * 0.5, y: y.get() * 0.5 }}
        className="absolute inset-0 bg-zinc-900/[0.03] dark:bg-white/[0.1] rounded-full opacity-0 group-hover/nav:opacity-100 transition-opacity duration-500" 
      />
    </Link>
  );
}
