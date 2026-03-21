'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

export default function DodecahedronLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const themeRef = useRef(resolvedTheme);

  // Update theme ref for the animation loop
  useEffect(() => {
    themeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Golden Ratio for Dodecahedron Geometry
    const phi = (1 + Math.sqrt(5)) / 2;
    const vertices = [
      [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1],
      [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1],
      [0, 1/phi, phi], [0, 1/phi, -phi], [0, -1/phi, phi], [0, -1/phi, -phi],
      [1/phi, phi, 0], [1/phi, -phi, 0], [-1/phi, phi, 0], [-1/phi, -phi, 0],
      [phi, 0, 1/phi], [phi, 0, -1/phi], [-phi, 0, 1/phi], [-phi, 0, -1/phi]
    ];

    const edges = [
      [0, 8], [0, 12], [0, 16], [1, 9], [1, 12], [1, 17],
      [2, 10], [2, 13], [2, 16], [3, 11], [3, 13], [3, 17],
      [4, 8], [4, 14], [4, 18], [5, 9], [5, 14], [5, 19],
      [6, 10], [6, 15], [6, 18], [7, 11], [7, 15], [7, 19],
      [8, 10], [9, 11], [12, 14], [13, 15], [16, 17], [18, 19]
    ];

    let angleX = 0;
    let angleY = 0;
    let animationFrameId: number;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Responsive scaling
    const scale = 16;
    const perspective = 4;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      angleX += 0.005;
      angleY += 0.008;

      // Rotation Matrices
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const rotatedVertices = vertices.map(([x, y, z]) => {
        // Rotate Y
        const nx = x * cosY - z * sinY;
        let nz = x * sinY + z * cosY;
        // Rotate X
        const ny = y * cosX - nz * sinX;
        nz = y * sinX + nz * cosX;
        
        // Perspective Projection
        const factor = perspective / (perspective + nz);
        return [nx * factor * scale + centerX, ny * factor * scale + centerY, nz];
      });

      // Use the ref for instant theme updates in the loop
      const isDark = themeRef.current === 'dark';
      const colorBase = isDark ? '255, 255, 255' : '0, 0, 0';

      // Draw Edges with Z-Depth based opacity
      edges.forEach(([v1, v2]) => {
        const p1 = rotatedVertices[v1];
        const p2 = rotatedVertices[v2];
        const avgZ = (p1[2] + p2[2]) / 2;
        const opacity = Math.max(0.1, 0.5 - avgZ / 5);
        
        ctx.beginPath();
        ctx.moveTo(p1[0], p1[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.strokeStyle = `rgba(${colorBase}, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Center Precision Point
      ctx.fillStyle = `rgba(${colorBase}, 0.5)`;
      ctx.fillRect(centerX - 0.5, centerY - 0.5, 1, 1);

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [mounted]);

  if (!mounted) return <div className="w-11 h-11" />;

  return (
    <div className="relative w-11 h-11 flex items-center justify-center group/logo">
      <div className="absolute inset-0 border border-[var(--text-primary)] opacity-0 group-hover/logo:opacity-10 transition-opacity duration-700" />
      <canvas 
        ref={canvasRef} 
        width={88} 
        height={88} 
        className="w-11 h-11 opacity-60 group-hover/logo:opacity-100 transition-opacity duration-700"
        role="img"
        aria-label="3D Dodecahedron Logo"
      />
    </div>
  );
}
