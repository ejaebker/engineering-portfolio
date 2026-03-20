'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="fixed top-8 w-full z-50 px-8 pointer-events-none">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto"
      >
        {/* Brand/Logo - Editorial & Minimal */}
        <div className="flex items-center gap-6 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 border border-white/20 rounded-full transition-all duration-700 group-hover:scale-110 group-hover:border-white/40" />
            <div className="w-1 h-1 bg-white rounded-full transition-all duration-700 group-hover:scale-[2]" />
          </div>
          <a href="#home" className="text-[11px] font-black tracking-[0.6em] text-white/40 hover:text-white transition-colors duration-500 uppercase">
            ERIC JAEBKER
          </a>
        </div>

        {/* Floating Nav Capsule */}
        <div className="flex items-center gap-2 p-2 bg-black/20 backdrop-blur-3xl rounded-full border border-white/5 shadow-2xl overflow-hidden">
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
  return (
    <Link 
      href={href.startsWith('#') ? `/${href}` : href} 
      className="px-6 py-2 text-[10px] font-black tracking-[0.4em] text-white/40 hover:text-white transition-all duration-500 rounded-full hover:bg-white/[0.03] flex items-center justify-center"
    >
      {icon || label}
    </Link>
  );
}
