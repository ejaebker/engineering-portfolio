"use client";

import React from "react";
import { motion } from "framer-motion";

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
};

export default function AnimatedSection({ 
  id, 
  className = "", 
  children, 
  delay = 0 
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
      className={className}
    >
      {children}
    </motion.section>
  );
}
