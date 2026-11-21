'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

interface ProductShowcaseCanvasProps {
  activeCategory?: string;
}

// 3D Stylized Palapitta Product Ensemble
function FloatingProducts({ activeCategory = 'beauty' }: ProductShowcaseCanvasProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const pointer = state.pointer;
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      pointer.x * 0.18,
      2,
      delta
    );
  });

  // Dynamic Palapitta tone based on active category
  const themeColor =
    activeCategory === 'fashion'
      ? '#00A8C8'
      : activeCategory === 'food'
      ? '#1756C1'
      : activeCategory === 'handmade'
      ? '#123C83'
      : activeCategory === 'beauty'
      ? '#00A8C8'
      : activeCategory === 'lifestyle'
      ? '#58C9EF'
      : '#00A8C8';

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {/* 3D Showcase Tote Bag in Palapitta Turquoise */}
      <group position={[0, -0.6, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.3, 1.2, 0.65]} />
          <meshStandardMaterial color={themeColor} roughness={0.25} metalness={0.12} />
        </mesh>
        {/* White Interior Trim */}
        <mesh position={[0, 0.61, 0]}>
          <boxGeometry args={[1.22, 0.02, 0.58]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
        </mesh>
        {/* Soft Carry Handles */}
        <mesh position={[0, 0.75, 0.34]}>
          <torusGeometry args={[0.26, 0.025, 16, 32, Math.PI]} />
          <meshStandardMaterial color={themeColor} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0.75, -0.34]}>
          <torusGeometry args={[0.26, 0.025, 16, 32, Math.PI]} />
          <meshStandardMaterial color={themeColor} roughness={0.25} />
        </mesh>
      </group>

      {/* Floating Product 1: Perfume / Serum Bottle in Translucent Ice Glass */}
      <group position={[-0.45, 0.7, 0.15]}>
        <Float speed={2.0} rotationIntensity={0.8} floatIntensity={1.1}>
          <mesh castShadow>
            <cylinderGeometry args={[0.16, 0.16, 0.55, 24]} />
            <meshPhysicalMaterial
              color="#FFFFFF"
              roughness={0.08}
              transmission={0.85}
              thickness={0.35}
              metalness={0.05}
            />
          </mesh>
          {/* Chrome / Silver Spray Nozzle */}
          <mesh position={[0, 0.35, 0]} castShadow>
            <cylinderGeometry args={[0.07, 0.07, 0.16, 16]} />
            <meshStandardMaterial color="#E8ECF0" metalness={0.9} roughness={0.15} />
          </mesh>
        </Float>
      </group>

      {/* Floating Product 2: Luxury Cosmetic Jar in Royal Wing Blue */}
      <group position={[0.42, 0.55, -0.1]}>
        <Float speed={1.8} rotationIntensity={0.9} floatIntensity={0.85}>
          <mesh castShadow>
            <cylinderGeometry args={[0.25, 0.25, 0.32, 32]} />
            <meshStandardMaterial color="#EAF9FD" roughness={0.2} />
          </mesh>
          {/* Royal Blue Lid */}
          <mesh position={[0, 0.2, 0]} castShadow>
            <cylinderGeometry args={[0.26, 0.26, 0.1, 32]} />
            <meshStandardMaterial color="#1756C1" roughness={0.15} metalness={0.3} />
          </mesh>
        </Float>
      </group>

      {/* Floating Product 3: Sleek Dropper / Essence Tube in White & Turquoise */}
      <group position={[0.05, 1.25, 0.0]}>
        <Float speed={2.3} rotationIntensity={0.7} floatIntensity={1.3}>
          <mesh castShadow rotation={[0.2, 0, -0.15]}>
            <cylinderGeometry args={[0.08, 0.08, 0.65, 20]} />
            <meshStandardMaterial color="#FFFFFF" roughness={0.18} />
          </mesh>
          <mesh position={[0.05, 0.38, 0]} rotation={[0.2, 0, -0.15]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#00A8C8" roughness={0.25} />
          </mesh>
        </Float>
      </group>

      {/* Floating Product 4: Translucent Cyan Organic Pebble (Inspired by Image 2) */}
      <group position={[-0.75, 0.28, -0.2]}>
        <Float speed={1.9} rotationIntensity={1.1} floatIntensity={0.8}>
          <mesh castShadow rotation={[0.5, 0.3, 0.2]}>
            <cylinderGeometry args={[0.22, 0.22, 0.08, 32]} />
            <meshPhysicalMaterial
              color="#00A8C8"
              roughness={0.08}
              transmission={0.8}
              thickness={0.5}
            />
          </mesh>
        </Float>
      </group>

      {/* Floating Product 5: Minimalist Gift Packaging Box in Ice Blue */}
      <group position={[0.7, 0.9, 0.1]}>
        <Float speed={2.2} rotationIntensity={1.0} floatIntensity={0.95}>
          <mesh castShadow rotation={[0.3, 0.6, -0.2]}>
            <boxGeometry args={[0.34, 0.44, 0.22]} />
            <meshStandardMaterial color="#58C9EF" roughness={0.2} metalness={0.1} />
          </mesh>
        </Float>
      </group>

      {/* Small Orbiting Pearls in Sky Blue */}
      <group position={[-0.2, 0.95, 0.35]}>
        <Float speed={2.8} floatIntensity={1.4}>
          <mesh>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color="#00A8C8" roughness={0.1} metalness={0.4} />
          </mesh>
        </Float>
      </group>
      <group position={[0.65, 0.25, 0.25]}>
        <Float speed={2.6} floatIntensity={1.2}>
          <mesh>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#1756C1" roughness={0.2} />
          </mesh>
        </Float>
      </group>
    </group>
  );
}

export default function ProductShowcaseCanvas({ activeCategory = 'beauty' }: ProductShowcaseCanvasProps) {
  return (
    <div className="w-full h-[360px] sm:h-[420px] lg:h-[460px] relative select-none">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.7, 3.8], fov: 42 }}
        gl={{ powerPreference: 'high-performance', antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} color="#FFFFFF" />
        <directionalLight
          position={[4, 6, 4]}
          intensity={1.3}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />
        <directionalLight position={[-4, 3, -2]} intensity={0.5} color="#EAF9FD" />
        <directionalLight position={[0, -2, 2]} intensity={0.3} color="#FFFFFF" />

        <FloatingProducts activeCategory={activeCategory} />

        <ContactShadows
          position={[0, -1.25, 0]}
          opacity={0.3}
          scale={5.0}
          blur={2.2}
          far={3.0}
        />
      </Canvas>
    </div>
  );
}
