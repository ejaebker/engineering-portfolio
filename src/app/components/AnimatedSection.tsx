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
      initial={{ opacity: 1, y: 0, scale: 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 1.2,
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
