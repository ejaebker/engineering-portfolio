'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import * as THREE from 'three';

const Globe = dynamic(() => import('react-globe.gl'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-zinc-900/10 rounded-full animate-pulse" />
});

export default function LocationGlobe() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeRef = useRef<any>(null);
  const [isHovered, setIsHovered] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [countries, setCountries] = useState<{ features: any[] }>({ features: [] });
  const [globeReady, setGlobeReady] = useState(false);
  
  /**
   * LOCATION DATA: 
   * These coordinates point directly to Purdue University, West Lafayette, Indiana.
   * Latitude: 40.4237 (North of the equator)
   * Longitude: -86.9212 (West of the Prime Meridian)
   */
  const myLocation = { lat: 40.4237, lng: -86.9212 };

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries);
  }, []);

  useEffect(() => {
    if (globeReady && globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = !isHovered;
      controls.autoRotateSpeed = 2.0;
      controls.enableZoom = false;
      controls.enablePan = false;

      if (isHovered) {
        // Precise camera movement to the target coordinates
        globeRef.current.pointOfView({ 
          lat: myLocation.lat, 
          lng: myLocation.lng, 
          altitude: 1.8 
        }, 1200);
      }
    }
  }, [isHovered, globeReady, myLocation.lat, myLocation.lng]);

  return (
    <div 
      className="relative w-48 h-48 md:w-64 md:h-64 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Globe
        ref={globeRef}
        onGlobeReady={() => setGlobeReady(true)}
        backgroundColor="rgba(0,0,0,0)"
        width={256}
        height={256}
        
        // Simplified Blue/Green Aesthetic
        globeMaterial={new THREE.MeshPhongMaterial({
          color: '#1a365d', // Deep blue ocean
          transparent: true,
          opacity: 0.9,
          shininess: 0.5
        })}
        
        polygonsData={countries.features}
        polygonCapColor={() => '#4ade80'} // Simplified Green land
        polygonSideColor={() => 'rgba(0,0,0,0.1)'}
        polygonStrokeColor={() => 'rgba(255,255,255,0.05)'}
        
        showAtmosphere={true}
        atmosphereColor="#ffffff"
        atmosphereAltitude={0.1}
        
        // Using HTML markers for the person icon
        htmlElementsData={[{
          lat: myLocation.lat,
          lng: myLocation.lng,
          visible: isHovered
        }]}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        htmlElement={(d: any) => {
          const el = document.createElement('div');
          // Anchor the SVG exactly at the bottom-center so the feet point to the lat/lng
          el.innerHTML = `
            <div style="transform: translate(-50%, -100%); transition: opacity 0.5s ease, transform 0.5s ease; opacity: ${d.visible ? 1 : 0};">
              <div style="position: relative;">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2Z" fill="#ff4444"/>
                  <path d="M7 9C7 7.89543 7.89543 7 9 7H15C16.1046 7 17 7.89543 17 9V14H15V22H13V16H11V22H9V14H7V9Z" fill="#ff4444"/>
                </svg>
                <div style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); white-space: nowrap; color: white; font-size: 8px; font-weight: 900; background: rgba(0,0,0,0.5); padding: 2px 6px; border-radius: 4px; backdrop-filter: blur(4px);">PURDUE UNIVERSITY</div>
              </div>
            </div>
          `;
          el.style.pointerEvents = 'none';
          return el;
        }}
      />
      
      {/* Visual Indicator */}
      <div className="absolute bottom-0 left-0 text-[8px] font-black text-zinc-900/50 dark:text-white/50 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-700">
        LOC // INDIANA, USA
      </div>
    </div>
  );
}
