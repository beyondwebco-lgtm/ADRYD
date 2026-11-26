'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody, RapierRigidBody } from '@react-three/rapier';
import { ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { RotateCcw } from 'lucide-react';

interface PhysicsObjectProps {
  type: 'box' | 'sphere' | 'cylinder' | 'capsule';
  color: string;
  initialPosition: [number, number, number];
  size?: [number, number, number];
  radius?: number;
  height?: number;
}

function InteractiveBody({ type, color, initialPosition, size = [0.6, 0.6, 0.6], radius = 0.35, height = 0.6 }: PhysicsObjectProps) {
  const api = useRef<RapierRigidBody>(null);
  const [hovered, setHovered] = useState(false);

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color,
        roughness: 0.22,
        metalness: 0.15,
      }),
    [color]
  );

  const handleClick = useCallback(() => {
    if (!api.current) return;
    const impulseStrength = 2.4 + Math.random() * 1.8;
    const randomAngleX = (Math.random() - 0.5) * 1.4;
    const randomAngleZ = (Math.random() - 0.5) * 1.4;
    api.current.applyImpulse({ x: randomAngleX, y: impulseStrength, z: randomAngleZ }, true);
    api.current.applyTorqueImpulse(
      {
        x: (Math.random() - 0.5) * 0.3,
        y: (Math.random() - 0.5) * 0.3,
        z: (Math.random() - 0.5) * 0.3,
      },
      true
    );
  }, []);

  let colliderType: 'cuboid' | 'ball' | 'hull' = 'cuboid';
  if (type === 'sphere') colliderType = 'ball';
  else if (type === 'cylinder' || type === 'capsule') colliderType = 'hull';

  return (
    <RigidBody
      ref={api}
      colliders={colliderType}
      position={initialPosition}
      restitution={0.4}
      friction={0.7}
      linearDamping={0.4}
      angularDamping={0.45}
    >
      <mesh
        castShadow
        receiveShadow
        material={material}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.05 : 1}
      >
        {type === 'box' && <boxGeometry args={size} />}
        {type === 'sphere' && <sphereGeometry args={[radius, 32, 32]} />}
        {type === 'cylinder' && <cylinderGeometry args={[radius, radius, height, 24]} />}
        {type === 'capsule' && <capsuleGeometry args={[radius * 0.8, height * 0.6, 16, 24]} />}
      </mesh>
    </RigidBody>
  );
}

// Boundaries so objects bounce inside the stage
function Boundaries() {
  return (
    <>
      {/* Floor */}
      <RigidBody type="fixed" position={[0, -1.8, 0]} restitution={0.35} friction={0.85}>
        <mesh receiveShadow>
          <boxGeometry args={[10, 0.4, 8]} />
          <meshStandardMaterial color="#041220" roughness={0.85} />
        </mesh>
      </RigidBody>
      {/* Left Wall */}
      <RigidBody type="fixed" position={[-3.6, 1.5, 0]}>
        <mesh>
          <boxGeometry args={[0.3, 7, 8]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      </RigidBody>
      {/* Right Wall */}
      <RigidBody type="fixed" position={[3.6, 1.5, 0]}>
        <mesh>
          <boxGeometry args={[0.3, 7, 8]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      </RigidBody>
      {/* Back Wall */}
      <RigidBody type="fixed" position={[0, 1.5, -2.6]}>
        <mesh>
          <boxGeometry args={[8, 7, 0.3]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      </RigidBody>
      {/* Front Invisible Boundary */}
      <RigidBody type="fixed" position={[0, 1.5, 2.6]}>
        <mesh>
          <boxGeometry args={[8, 7, 0.3]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      </RigidBody>
    </>
  );
}

// 12 Stylized Geometric Shapes in Approved Palette: Black, Electric Blue (#0A9BE0), Chartreuse (#B4F000), White (#FFFFFF)
const initialObjects: PhysicsObjectProps[] = [
  // Product Boxes (Chartreuse, Electric Blue, White)
  { type: 'box', color: '#B4F000', initialPosition: [-0.8, 4.2, 0.1], size: [0.65, 0.65, 0.65] },
  { type: 'box', color: '#0A9BE0', initialPosition: [0.9, 4.8, -0.2], size: [0.6, 0.6, 0.6] },
  { type: 'box', color: '#FFFFFF', initialPosition: [-1.4, 5.5, 0.2], size: [0.55, 0.55, 0.55] },
  // Cylinders / Showcase Pods (Electric Blue, Slate, Chartreuse)
  { type: 'cylinder', color: '#0A9BE0', initialPosition: [0.2, 3.8, 0.3], radius: 0.32, height: 0.65 },
  { type: 'cylinder', color: '#E2E8F0', initialPosition: [-0.5, 5.0, -0.4], radius: 0.35, height: 0.6 },
  { type: 'cylinder', color: '#B4F000', initialPosition: [1.3, 4.2, 0.1], radius: 0.28, height: 0.55 },
  // Spheres (Chartreuse, Electric Blue, White)
  { type: 'sphere', color: '#B4F000', initialPosition: [-0.2, 4.5, 0.4], radius: 0.32 },
  { type: 'sphere', color: '#0A9BE0', initialPosition: [0.7, 5.3, -0.3], radius: 0.28 },
  { type: 'sphere', color: '#74D7FF', initialPosition: [-1.0, 3.5, -0.2], radius: 0.26 },
  { type: 'sphere', color: '#FFFFFF', initialPosition: [1.6, 3.9, 0.3], radius: 0.22 },
  // Capsules / Rounded Forms
  { type: 'capsule', color: '#0A9BE0', initialPosition: [0.0, 5.8, -0.1], radius: 0.24, height: 0.5 },
  { type: 'capsule', color: '#B4F000', initialPosition: [-0.7, 4.9, 0.3], radius: 0.22, height: 0.48 },
];

export default function GravityPhysicsCanvas() {
  const [resetKey, setResetKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Pause simulation when off-screen to preserve smooth 60 FPS
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
  };

  return (
    <div ref={containerRef} className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-3xl bg-[#041220]/80 backdrop-blur-xl border border-[#0A9BE0]/30 overflow-hidden shadow-inner">
      {/* Control Banner */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
        <div className="px-3 py-1 rounded-full bg-[#000000]/85 backdrop-blur-md border border-[#0A9BE0]/30 text-[11px] font-semibold text-[#E2E8F0] shadow-sm">
          Interactive Physics Sandbox • Click any shape to bounce
        </div>
        <button
          onClick={handleReset}
          className="pointer-events-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#000000]/85 hover:bg-[#0A9BE0]/20 border border-[#0A9BE0]/30 text-xs font-semibold text-white shadow-sm hover:shadow transition-all cursor-pointer"
          title="Reset & Drop Shapes"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#B4F000]" />
          <span>Drop Again</span>
        </button>
      </div>

      {/* Rapier Physics 3D Canvas */}
      {isVisible && (
        <Canvas
          shadows
          dpr={[1, 1.5]}
          camera={{ position: [0, 0.8, 6.2], fov: 45 }}
          gl={{ powerPreference: 'high-performance', antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.9} color="#FFFFFF" />
          <directionalLight
            position={[4, 8, 4]}
            intensity={1.3}
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
          <directionalLight position={[-4, 4, -2]} intensity={0.5} color="#0A9BE0" />

          <Physics key={resetKey} gravity={[0, -9.81, 0]}>
            <Boundaries />
            {initialObjects.map((obj, i) => (
              <InteractiveBody key={`${resetKey}-${i}`} {...obj} />
            ))}
          </Physics>

          <ContactShadows
            position={[0, -1.6, 0]}
            opacity={0.35}
            scale={7.5}
            blur={2.0}
            far={3.0}
          />
        </Canvas>
      )}
    </div>
  );
}
