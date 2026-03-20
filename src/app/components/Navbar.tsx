'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="fixed top-6 w-full z-50 px-6 pointer-events-none">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto"
      >
        {/* Brand/Logo - Geometric & Minimal */}
        <div className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 border border-white/10 rounded-xl transition-all duration-700 group-hover:rotate-[45deg] group-hover:border-white/40 group-hover:bg-white/[0.02]" />
            <div className="w-1.5 h-1.5 bg-white rounded-full transition-all duration-700 group-hover:scale-150 shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
          </div>
          <a href="#home" className="text-[10px] font-black tracking-[0.4em] text-white/30 hover:text-white transition-colors duration-500 uppercase">
            EJ.SYSTEMS
          </a>
        </div>

        {/* Floating Nav Capsule */}
        <div className="flex items-center gap-1 p-1.5 bg-white/[0.01] backdrop-blur-3xl rounded-2xl border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
          <div className="hidden sm:flex items-center gap-1">
            <NavLink href="#home" label="HOME" />
            <NavLink href="#about" label="ABOUT" />
            <NavLink href="#projects" label="PROJECTS" />
            <NavLink href="#publications" label="RESEARCH" />
          </div>
          
          {/* Mobile Nav Icons */}
          <div className="flex sm:hidden items-center gap-1 px-2">
            <NavLink href="#home" label="" icon={<HomeIcon />} />
            <NavLink href="#projects" label="" icon={<ProjectIcon />} />
          </div>
          
          <div className="w-px h-5 bg-white/10 mx-2" />
          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-white/30 hover:text-white hover:bg-white/[0.03] rounded-xl transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.806 0-9.722h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.384 3.704 4.362v5.58zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.955.77-1.71 1.963-1.71 1.192 0 1.925.75 1.937 1.71 0 .947-.745 1.705-1.985 1.705zm1.946 11.597H3.392V9.626h3.891v10.826zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z"/>
            </svg>
          </a>
        </div>
      </motion.nav>
    </header>
  );
}

function NavLink({ href, label, icon }: { href: string; label: string; icon?: React.ReactNode }) {
  return (
    <Link 
      href={href.startsWith('#') ? `/${href}` : href} 
      className="px-4 sm:px-5 py-2 text-[10px] font-black tracking-[0.2em] text-white/40 hover:text-white transition-all duration-500 rounded-xl hover:bg-white/5 flex items-center justify-center min-w-[40px]"
    >
      {icon || label}
    </Link>
  );
}

function HomeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function ProjectIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
      <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );
}
