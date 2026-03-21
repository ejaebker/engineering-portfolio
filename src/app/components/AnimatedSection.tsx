"use client";

import React from "react";
import { motion } from "framer-motion";

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
  label?: string;
  showBrackets?: boolean;
};

export default function AnimatedSection({ 
  id, 
  className = "", 
  children, 
  delay = 0,
  label,
  showBrackets = false
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 1,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`relative ${className}`}
    >
      {label && (
        <div className="absolute -top-8 left-0 flex items-center gap-4 pointer-events-none">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 24 }}
            transition={{ duration: 1, delay: delay + 0.5 }}
            className="h-px bg-[var(--divider)]"
          />
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: delay + 0.8 }}
            className="text-[8px] font-mono tracking-[0.4em] text-[var(--text-muted)] uppercase"
          >
            {label} {"//"} DATA_TRACK_ACTIVE
          </motion.span>
        </div>
      )}
      
      {showBrackets && (
        <>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: delay + 0.3 }}
            className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-[var(--divider)] pointer-events-none"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: delay + 0.3 }}
            className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-[var(--divider)] pointer-events-none"
          />
        </>
      )}
      
      {children}
    </motion.section>
  );
}
