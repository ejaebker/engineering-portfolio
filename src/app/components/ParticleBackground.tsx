"use client";
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  uniform float uTime;
  varying float vIntensity;

  vec2 getWirePos(float y, float t) {
    float x = sin(y * 0.05 + t * 0.3) * 10.0;
    float z = cos(y * 0.04 + t * 0.2) * 8.0;
    x += sin(y * 0.1 - t * 0.5) * 2.0;
    return vec2(x, z);
  }

  void main() {
    vec3 p = position;
    float t = uTime * 0.4;

    vec2 wirePos = getWirePos(p.y, t);
    
    float dx = p.x - wirePos.x;
    float dz = p.z - wirePos.y;
    float r = sqrt(dx*dx + dz*dz);
    if (r < 0.1) r = 0.1;

    // --- DEFINED CORE MATH ---
    // Lowered the "buffer" from 4 to 1.2 to make the core spin much faster
    // Increased strength to 25.0 to make it whip around the wire
    float speedFactor = 10.0 / (r + 1.2); 
    float angle = speedFactor * uTime * 0.05;

    float cosA = cos(angle);
    float sinA = sin(angle);
    
    float localX = dx * cosA - dz * sinA;
    float localZ = dx * sinA + dz * cosA;

    p.x = wirePos.x + localX;
    p.z = wirePos.y + localZ;

    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    gl_PointSize = 1.6 * (300.0 / -mvPosition.z);
    
    // Make the vIntensity falloff sharper so only the core glows
    vIntensity = clamp(speedFactor * 0.15, 0.0, 1.0);
  }
`;

const fragmentShader = `
  varying float vIntensity;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.48) discard; 
    
    // Core highlight colors
    vec3 baseColor = vec3(0.05, 0.15, 0.3); 
    vec3 highlight = vec3(0.7, 0.9, 1.0); // Slightly brighter highlight
    gl_FragColor = vec4(mix(baseColor, highlight, vIntensity), 0.3);
  }
`;

function BendingField() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const count = 20000; // Bumped count slightly for denser core

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // --- EXPONENTIAL DISTRIBUTION ---
      // Distribute particles in a circle around the center
      const angle = Math.random() * Math.PI * 2;
      
      // Math.pow(random, 3.0) forces the vast majority of points to stay near r=0
      const radius = Math.pow(Math.random(), 3.0) * 70.0; 

      pos[i * 3 + 0] = Math.cos(angle) * radius; // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 160; // Y (Height)
      pos[i * 3 + 2] = Math.sin(angle) * radius; // Z
    }
    return [pos];
  }, []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{ uTime: { value: 0 } }}
        transparent={true}
        blending={THREE.NormalBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-[#020202] pointer-events-none">
      <Canvas 
        camera={{ position: [0, 40, 100], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, powerPreference: "low-power" }}
      >
        <BendingField />
        <fog attach="fog" args={["#020202", 50, 200]} />
      </Canvas>
    </div>
  );
}