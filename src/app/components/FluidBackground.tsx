'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function FluidBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const blobColor = isDark ? '167, 139, 250' : '139, 92, 246'; // Subtle Lilac RGB

  return (
    <div className="fixed inset-0 z-[-20] overflow-hidden pointer-events-none bg-transparent">
      {/* High-Contrast Fluid Gradients */}
      <div className={`absolute inset-0 ${isDark ? 'opacity-[0.12]' : 'opacity-[0.08]'}`}>
        {/* Blob 1 - Lilac Hint */}
        <motion.div
          animate={{
            x: [-150, 150, -150],
            y: [-100, 100, -100],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-30%] left-[-15%] w-[1400px] h-[1400px] rounded-full blur-[180px]"
          style={{ background: `radial-gradient(circle, rgba(${blobColor}, 0.15) 0%, transparent 75%)` }}
        />

        {/* Blob 2 - Secondary Lilac Hint */}
        <motion.div
          animate={{
            x: [150, -150, 150],
            y: [100, -200, 100],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-25%] right-[-15%] w-[1200px] h-[1200px] rounded-full blur-[200px]"
          style={{ background: `radial-gradient(circle, rgba(${blobColor}, 0.1) 0%, transparent 70%)` }}
        />
      </div>

      {/* Static Grain Overlay for Texture */}
      <div className={`absolute inset-0 bg-noise ${isDark ? 'opacity-[0.03] mix-blend-screen' : 'opacity-[0.05] mix-blend-multiply'}`} />
    </div>
  );
}
