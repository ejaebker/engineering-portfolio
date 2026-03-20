'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+<>?:{}|[]";

export default function DecryptionText({ 
  text, 
  className = "", 
  delay = 0,
  speed = 30
}: { 
  text: string; 
  className?: string;
  delay?: number;
  speed?: number;
}) {
  const [displayText, setDisplayText] = useState("");
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setIsRevealed(true);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, delay]);

  useEffect(() => {
    if (!isRevealed) {
      setDisplayText(text.split('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join(''));
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => {
        return text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === " ") return " ";
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
      });

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [isRevealed, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}
