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
  const blobColor = isDark ? 'rgba(255,255,255,' : 'rgba(139,92,246,'; // Lilac blobs in light mode

  return (
    <div className="fixed inset-0 z-[-20] overflow-hidden pointer-events-none bg-transparent">
      {/* High-Contrast Fluid Gradients */}
      <div className={`absolute inset-0 ${isDark ? 'opacity-40' : 'opacity-20'}`}>
        {/* Blob 1 */}
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-50, 150, -50],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-20%] left-[-10%] w-[1200px] h-[1200px] rounded-full blur-[140px]"
          style={{ background: `radial-gradient(circle, ${blobColor}${isDark ? '0.08' : '0.15'}) 0%, transparent 70%)` }}
        />

        {/* Blob 2 */}
        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [50, -150, 50],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] rounded-full blur-[160px]"
          style={{ background: `radial-gradient(circle, ${blobColor}${isDark ? '0.05' : '0.1'}) 0%, transparent 70%)` }}
        />

        {/* Blob 3 */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px]"
          style={{ background: `radial-gradient(circle, ${blobColor}${isDark ? '0.03' : '0.08'}) 0%, transparent 60%)` }}
        />
      </div>

      {/* Static Grain Overlay for Texture */}
      <div className={`absolute inset-0 bg-noise ${isDark ? 'opacity-[0.03] mix-blend-screen' : 'opacity-[0.05] mix-blend-multiply'}`} />
    </div>
  );
}
