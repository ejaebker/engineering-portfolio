'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function TelemetryCapsule() {
  const [mounted, setMounted] = useState(false);
  const [uptime, setUptime] = useState(0);
  const [load, setLoad] = useState(0);
  const [memory, setMemory] = useState(0);
  
  const lastScrollY = useRef(0);
  const lastTime = useRef<number>(0);

  useEffect(() => {
    lastTime.current = Date.now();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    
    // Uptime Timer
    const startTime = Date.now();
    const timer = setInterval(() => {
      setUptime(Math.floor((Date.now() - startTime) / 1000));
      
      // Simulate memory usage fluctuations
      const baseMem = 42.4;
      const jitter = Math.random() * 2.5;
      setMemory(parseFloat((baseMem + jitter).toFixed(2)));
    }, 1000);

    // Scroll Velocity for Load
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const distance = Math.abs(currentScrollY - lastScrollY.current);
      const timeDiff = currentTime - lastTime.current;
      
      if (timeDiff > 0) {
        const velocity = (distance / timeDiff) * 100;
        setLoad(Math.min(Math.round(velocity), 100));
      }

      lastScrollY.current = currentScrollY;
      lastTime.current = currentTime;
    };

    const decay = setInterval(() => {
      setLoad(prev => Math.max(0, prev - 5));
    }, 150);

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      clearInterval(decay);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!mounted) return null;

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] pointer-events-none md:pointer-events-auto">
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 0.8, rotate: -1 }}
        className="relative flex items-center gap-4 px-2 py-2 overflow-hidden group min-w-[140px] scale-75 origin-bottom-right"
      >
        {/* Visual "Load" Bar */}
        <div className="relative w-1 h-8 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            animate={{ height: `${load}%` }}
            className="absolute bottom-0 left-0 w-full bg-black/40 dark:bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          />
        </div>

        {/* Data Grid */}
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex justify-between items-center gap-3">
            <span className="text-[7px] font-black text-zinc-900/40 dark:text-white/40 tracking-[0.2em] uppercase">SYS_LOAD</span>
            <span className="text-[9px] font-mono text-[var(--text-primary)] font-bold">
              {load.toString().padStart(3, '0')}%
            </span>
          </div>
          
          <div className="flex justify-between items-center gap-3">
            <span className="text-[7px] font-black text-zinc-900/40 dark:text-white/40 tracking-[0.2em] uppercase">MEM_MAP</span>
            <span className="text-[9px] font-mono text-[var(--text-primary)] font-bold">
              {memory}MB
            </span>
          </div>

          <div className="flex justify-between items-center gap-3 border-t border-black/5 dark:border-white/5 pt-1 mt-0.5">
            <span className="text-[7px] font-black text-zinc-900/40 dark:text-white/40 tracking-[0.2em] uppercase">UPTIME</span>
            <span className="text-[9px] font-mono text-[var(--text-primary)] font-bold">
              {formatTime(uptime)}
            </span>
          </div>
        </div>

        {/* Decorative Corner Accents - Minimal */}
        <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-black/10 dark:border-white/10" />
        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-black/10 dark:border-white/10" />
      </motion.div>
    </div>
  );
}
