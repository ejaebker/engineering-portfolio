"use client";

import React, { useEffect, useRef, useState } from "react";

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function AnimatedSection({ id, className = "", children }: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={
        `${className} transform transition-all duration-700 ease-out will-change-transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`
      }
    >
      {children}
    </section>
  );
}
