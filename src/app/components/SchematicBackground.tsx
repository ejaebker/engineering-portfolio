'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function SchematicBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const strokeColor = isDark ? '#ffffff' : '#000000';

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none opacity-[0.04] dark:opacity-[0.07]">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pcb-system" width="1600" height="1200" patternUnits="userSpaceOnUse">
            {/* --- CENTRAL PROCESSOR BLOCK --- */}
            <g transform="translate(700, 500)">
              <rect x="0" y="0" width="200" height="200" fill="none" stroke={strokeColor} strokeWidth="2" />
              <text x="100" y="110" textAnchor="middle" fill={strokeColor} fontSize="12" fontFamily="monospace" fontWeight="bold">CORE_PROCESSOR</text>
              <rect x="10" y="10" width="180" height="180" fill="none" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="4 4" />
              
              {/* BGA Escape Traces */}
              {[...Array(8)].map((_, i) => (
                <React.Fragment key={i}>
                  {/* To Memory (Top) */}
                  <path d={`M ${40 + i * 15} 0 L ${40 + i * 15} -150`} fill="none" stroke={strokeColor} strokeWidth="0.8" />
                  {/* To I/O (Left) */}
                  <path d={`M 0 ${40 + i * 15} L -250 ${40 + i * 15}`} fill="none" stroke={strokeColor} strokeWidth="0.8" />
                  {/* To Power (Right) */}
                  <path d={`M 200 ${40 + i * 15} L 400 ${40 + i * 15}`} fill="none" stroke={strokeColor} strokeWidth="0.8" />
                </React.Fragment>
              ))}
            </g>

            {/* --- MEMORY SUBSYSTEM (TOP) --- */}
            <g transform="translate(650, 100)">
              <rect x="0" y="0" width="300" height="150" fill="none" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="10 5" />
              <text x="150" y="30" textAnchor="middle" fill={strokeColor} fontSize="10" fontFamily="monospace" opacity="0.5">MEMORY_ARRAY_LPDDR4</text>
              {[...Array(4)].map((_, i) => (
                <rect key={i} x={30 + i * 70} y="50" width="40" height="80" fill="none" stroke={strokeColor} strokeWidth="1" />
              ))}
            </g>

            {/* --- SIGNAL I/O & FRONT END (LEFT) --- */}
            <g transform="translate(100, 450)">
              <rect x="0" y="0" width="250" height="300" fill="none" stroke={strokeColor} strokeWidth="1.5" />
              <text x="125" y="30" textAnchor="middle" fill={strokeColor} fontSize="10" fontFamily="monospace" opacity="0.5">ANALOG_FRONT_END</text>
              
              {/* Op-Amp Symbols */}
              <path d="M 50 100 L 100 125 L 50 150 Z" fill="none" stroke={strokeColor} strokeWidth="1.5" />
              <path d="M 50 200 L 100 225 L 50 250 Z" fill="none" stroke={strokeColor} strokeWidth="1.5" />
              
              {/* ADC Block */}
              <rect x="150" y="150" width="60" height="60" fill="none" stroke={strokeColor} strokeWidth="1" />
              <text x="180" y="185" textAnchor="middle" fill={strokeColor} fontSize="8" fontFamily="monospace">ADC</text>
            </g>

            {/* --- POWER MANAGEMENT (RIGHT) --- */}
            <g transform="translate(1200, 400)">
              <rect x="0" y="0" width="200" height="400" fill="none" stroke={strokeColor} strokeWidth="1.5" />
              <text x="100" y="30" textAnchor="middle" fill={strokeColor} fontSize="10" fontFamily="monospace" opacity="0.5">PMIC_STAGE</text>
              
              {/* Inductors (Buck Converters) */}
              {[...Array(3)].map((_, i) => (
                <g key={i} transform={`translate(50, ${80 + i * 100})`}>
                  <path d="M 0 20 Q 15 0 30 20 Q 45 40 60 20 Q 75 0 90 20" fill="none" stroke={strokeColor} strokeWidth="1.5" />
                  <rect x="110" y="10" width="20" height="20" fill="none" stroke={strokeColor} strokeWidth="1" />
                </g>
              ))}
            </g>

            {/* --- CONNECTIVE BUSES --- */}
            {/* Global System Bus */}
            <path d="M 0 1100 L 1600 1100" stroke={strokeColor} strokeWidth="4" opacity="0.1" />
            <path d="M 0 1115 L 1600 1115" stroke={strokeColor} strokeWidth="1" opacity="0.1" />

            {/* Ground Plane Hatching in Corners */}
            <path d="M 0 0 L 200 0 L 0 200 Z" fill="none" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="2 2" />
            <path d="M 1600 1200 L 1400 1200 L 1600 1000 Z" fill="none" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="2 2" />

            {/* Serpentine Delay Match (Bottom Left) */}
            <path d="M 100 1000 L 150 1000 L 160 1020 L 170 1000 L 180 1020 L 190 1000 L 200 1020 L 210 1000 L 400 1000" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.3" />
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#pcb-system)" />
      </svg>
    </div>
  );
}
