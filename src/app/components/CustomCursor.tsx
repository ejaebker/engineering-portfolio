'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function CustomCursor() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // High-precision spring for a "surgical" feel
  const springConfig = { damping: 20, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Precision Surgical Dot */}
      <motion.div
        className={`absolute w-1.5 h-1.5 rounded-full ${
          isDark ? 'bg-white' : 'bg-black'
        }`}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isVisible ? (isHovering ? 0.5 : 1) : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.2 }
        }}
      />
    </div>
  );
}
