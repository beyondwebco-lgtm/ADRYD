'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

// Procedural 3D ADRYD Palapitta & Violet Electric Scooter
function PalapittaScooter() {
  const scooterRef = useRef<THREE.Group>(null);
  const wheelsRef = useRef<THREE.Group[]>([]);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!scooterRef.current) return;

    // Smooth pointer parallax with spring-like damping
    const pointer = state.pointer;
    targetRotation.current.x = pointer.y * 0.08;
    targetRotation.current.y = pointer.x * 0.18;

    scooterRef.current.rotation.x = THREE.MathUtils.damp(
      scooterRef.current.rotation.x,
      targetRotation.current.x,
      2.0,
      delta
    );
    scooterRef.current.rotation.y = THREE.MathUtils.damp(
      scooterRef.current.rotation.y,
      -0.42 + targetRotation.current.y,
      2.0,
      delta
    );

    // Subtle continuous wheel roll
    wheelsRef.current.forEach((wheel) => {
      if (wheel) wheel.rotation.x += delta * 0.5;
    });
  });

  // Premium Palapitta Blue & Vibrant Violet Materials
  const materials = useMemo(() => {
    return {
      pearlWhite: new THREE.MeshPhysicalMaterial({
        color: '#FFFFFF',
        roughness: 0.12,
        metalness: 0.06,
        clearcoat: 0.95,
        clearcoatRoughness: 0.06,
      }),
      palapittaBlue: new THREE.MeshPhysicalMaterial({
        color: '#00A8C8',
        roughness: 0.18,
        metalness: 0.25,
        clearcoat: 0.85,
      }),
      vibrantViolet: new THREE.MeshPhysicalMaterial({
        color: '#7856FF',
        roughness: 0.18,
        metalness: 0.22,
        clearcoat: 0.85,
      }),
      royalBlue: new THREE.MeshStandardMaterial({
        color: '#1756C1',
        roughness: 0.25,
        metalness: 0.35,
      }),
      skyBlueGlow: new THREE.MeshStandardMaterial({
        color: '#58C9EF',
        roughness: 0.2,
        metalness: 0.1,
        emissive: '#00A8C8',
        emissiveIntensity: 0.45,
      }),
      violetGlow: new THREE.MeshStandardMaterial({
        color: '#7856FF',
        roughness: 0.2,
        metalness: 0.1,
        emissive: '#7856FF',
        emissiveIntensity: 0.45,
      }),
      chassisMatte: new THREE.MeshStandardMaterial({
        color: '#1C2026',
        roughness: 0.6,
        metalness: 0.3,
      }),
      tireRubber: new THREE.MeshStandardMaterial({
        color: '#14161A',
        roughness: 0.88,
        metalness: 0.05,
      }),
      alloyWheel: new THREE.MeshStandardMaterial({
        color: '#262930',
        roughness: 0.35,
        metalness: 0.7,
      }),
      chromeMetal: new THREE.MeshStandardMaterial({
        color: '#E8ECF0',
        roughness: 0.15,
        metalness: 0.9,
      }),
      seatLeather: new THREE.MeshStandardMaterial({
        color: '#1F2228',
        roughness: 0.75,
        metalness: 0.1,
      }),
      headlampLens: new THREE.MeshPhysicalMaterial({
        color: '#FFFFFF',
        roughness: 0.05,
        transmission: 0.9,
        thickness: 0.15,
        emissive: '#FFFFFF',
        emissiveIntensity: 0.8,
      }),
      showcaseGlass: new THREE.MeshPhysicalMaterial({
        color: '#FFFFFF',
        roughness: 0.08,
        transmission: 0.88,
        thickness: 0.3,
        opacity: 0.92,
        transparent: true,
      }),
      glassSculpture: new THREE.MeshPhysicalMaterial({
        color: '#7856FF',
        roughness: 0.08,
        transmission: 0.85,
        thickness: 0.6,
        ior: 1.52,
        clearcoat: 1.0,
      }),
    };
  }, []);

  return (
    <group ref={scooterRef} position={[0, -0.18, 0]} rotation={[0, -0.42, 0]}>
      {/* ================= 1. MAIN CHASSIS & FLOORBOARD ================= */}
      <mesh position={[0, 0.38, 0.05]} material={materials.chassisMatte} castShadow>
        <boxGeometry args={[0.54, 0.14, 1.45]} />
      </mesh>
      <mesh position={[0, 0.46, -0.02]} material={materials.seatLeather} receiveShadow>
        <boxGeometry args={[0.46, 0.02, 1.15]} />
      </mesh>
      {/* Center Palapitta Blue Floor Accent Line */}
      <mesh position={[-0.04, 0.475, -0.02]} material={materials.palapittaBlue}>
        <boxGeometry args={[0.03, 0.01, 1.05]} />
      </mesh>
      {/* Center Vibrant Violet Floor Accent Line */}
      <mesh position={[0.04, 0.475, -0.02]} material={materials.vibrantViolet}>
        <boxGeometry args={[0.03, 0.01, 1.05]} />
      </mesh>

      {/* ================= 2. FRONT APRON & COCKPIT ================= */}
      <group position={[0, 0.52, 0.72]}>
        {/* Sculpted Front Curved Shield in Pearl White */}
        <mesh position={[0, 0.45, 0.02]} rotation={[-0.22, 0, 0]} material={materials.pearlWhite} castShadow>
          <boxGeometry args={[0.48, 0.92, 0.22]} />
        </mesh>
        
        {/* Twin Pill Projector Headlamps */}
        <group position={[0, 0.38, 0.16]} rotation={[-0.22, 0, 0]}>
          <mesh material={materials.chassisMatte}>
            <boxGeometry args={[0.26, 0.12, 0.04]} />
          </mesh>
          <mesh position={[-0.065, 0, 0.02]} material={materials.headlampLens}>
            <cylinderGeometry args={[0.038, 0.038, 0.02, 20]} />
          </mesh>
          <mesh position={[0.065, 0, 0.02]} material={materials.headlampLens}>
            <cylinderGeometry args={[0.038, 0.038, 0.02, 20]} />
          </mesh>
          {/* Cyan / Violet Ambient Halo */}
          <mesh position={[0, 0, 0.015]} material={materials.skyBlueGlow}>
            <boxGeometry args={[0.27, 0.02, 0.02]} />
          </mesh>
        </group>

        {/* Front Fender in Palapitta Turquoise */}
        <mesh position={[0, -0.08, 0.24]} rotation={[-0.1, 0, 0]} material={materials.palapittaBlue} castShadow>
          <boxGeometry args={[0.24, 0.18, 0.42]} />
        </mesh>

        {/* Handlebars Stem & Cockpit */}
        <group position={[0, 0.98, -0.1]}>
          <mesh material={materials.pearlWhite} castShadow>
            <boxGeometry args={[0.28, 0.15, 0.18]} />
          </mesh>
          {/* Center Digital Cockpit with Violet Halo */}
          <mesh position={[0, 0.06, 0.06]} rotation={[-0.5, 0, 0]} material={materials.violetGlow}>
            <boxGeometry args={[0.16, 0.08, 0.02]} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} material={materials.chromeMetal} castShadow>
            <cylinderGeometry args={[0.022, 0.022, 0.84, 16]} />
          </mesh>
          <mesh position={[-0.36, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.seatLeather}>
            <cylinderGeometry args={[0.034, 0.034, 0.16, 16]} />
          </mesh>
          <mesh position={[0.36, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.seatLeather}>
            <cylinderGeometry args={[0.034, 0.034, 0.16, 16]} />
          </mesh>
          {/* Mirrors */}
          <group position={[-0.32, 0.14, -0.02]}>
            <mesh material={materials.chassisMatte}>
              <cylinderGeometry args={[0.007, 0.007, 0.18, 8]} />
            </mesh>
            <mesh position={[-0.04, 0.08, 0]} rotation={[0, 0.3, 0]} material={materials.chassisMatte}>
              <boxGeometry args={[0.11, 0.07, 0.02]} />
            </mesh>
          </group>
          <group position={[0.32, 0.14, -0.02]}>
            <mesh material={materials.chassisMatte}>
              <cylinderGeometry args={[0.007, 0.007, 0.18, 8]} />
            </mesh>
            <mesh position={[0.04, 0.08, 0]} rotation={[0, -0.3, 0]} material={materials.chassisMatte}>
              <boxGeometry args={[0.11, 0.07, 0.02]} />
            </mesh>
          </group>
        </group>
      </group>

      {/* ================= 3. REAR BODY & SEAT ================= */}
      <group position={[0, 0.62, -0.45]}>
        <mesh material={materials.pearlWhite} castShadow receiveShadow>
          <boxGeometry args={[0.56, 0.46, 0.88]} />
        </mesh>

        {/* Palapitta Blue & Vibrant Violet Dual Body Trims */}
        <mesh position={[-0.285, -0.02, 0.05]} material={materials.palapittaBlue}>
          <boxGeometry args={[0.015, 0.035, 0.78]} />
        </mesh>
        <mesh position={[0.285, -0.02, 0.05]} material={materials.vibrantViolet}>
          <boxGeometry args={[0.015, 0.035, 0.78]} />
        </mesh>
        
        {/* Glowing Badge Circles */}
        <mesh position={[-0.288, 0.08, -0.15]} rotation={[0, Math.PI / 2, 0]} material={materials.skyBlueGlow}>
          <cylinderGeometry args={[0.035, 0.035, 0.01, 16]} />
        </mesh>
        <mesh position={[0.288, 0.08, -0.15]} rotation={[0, -Math.PI / 2, 0]} material={materials.violetGlow}>
          <cylinderGeometry args={[0.035, 0.035, 0.01, 16]} />
        </mesh>

        {/* Seat */}
        <mesh position={[0, 0.28, 0.04]} material={materials.seatLeather} castShadow>
          <boxGeometry args={[0.42, 0.14, 0.84]} />
        </mesh>
        <mesh position={[0, 0.32, -0.44]} material={materials.chromeMetal}>
          <boxGeometry args={[0.38, 0.03, 0.12]} />
        </mesh>
      </group>

      {/* ================= 4. REAR PROMOTIONAL SHOWCASE CABINET ================= */}
      <group position={[0, 0.95, -0.72]}>
        <mesh position={[0, -0.18, 0]} material={materials.chassisMatte} castShadow>
          <cylinderGeometry args={[0.05, 0.06, 0.18, 12]} />
        </mesh>
        <mesh material={materials.pearlWhite} castShadow receiveShadow>
          <boxGeometry args={[0.5, 0.38, 0.55]} />
        </mesh>
        {/* Violet & Palapitta Top Cover Trim */}
        <mesh position={[0, 0.2, 0]} material={materials.vibrantViolet}>
          <boxGeometry args={[0.52, 0.03, 0.57]} />
        </mesh>
        {/* Acrylic Display Windows */}
        <mesh position={[-0.255, 0.02, 0]} rotation={[0, Math.PI / 2, 0]} material={materials.showcaseGlass}>
          <planeGeometry args={[0.48, 0.28]} />
        </mesh>
        <mesh position={[0.255, 0.02, 0]} rotation={[0, -Math.PI / 2, 0]} material={materials.showcaseGlass}>
          <planeGeometry args={[0.48, 0.28]} />
        </mesh>
        {/* Rear Brand Display */}
        <mesh position={[0, 0.02, -0.28]} rotation={[0, Math.PI, 0]} material={materials.skyBlueGlow}>
          <planeGeometry args={[0.38, 0.24]} />
        </mesh>
      </group>

      {/* ================= 5. WHEEL ASSEMBLIES ================= */}
      {/* Front Wheel */}
      <group
        position={[0, 0.26, 0.94]}
        ref={(el) => {
          if (el) wheelsRef.current[0] = el;
        }}
      >
        <mesh rotation={[0, 0, Math.PI / 2]} material={materials.tireRubber} castShadow>
          <torusGeometry args={[0.25, 0.078, 18, 36]} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]} material={materials.alloyWheel}>
          <cylinderGeometry args={[0.19, 0.19, 0.09, 24]} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]} material={materials.palapittaBlue}>
          <torusGeometry args={[0.185, 0.008, 16, 32]} />
        </mesh>
        <mesh position={[0.055, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.chromeMetal}>
          <cylinderGeometry args={[0.14, 0.14, 0.01, 20]} />
        </mesh>
        <mesh position={[0.06, 0.08, 0.05]} material={materials.royalBlue}>
          <boxGeometry args={[0.03, 0.07, 0.06]} />
        </mesh>
      </group>

      {/* Rear Wheel */}
      <group
        position={[0, 0.26, -0.92]}
        ref={(el) => {
          if (el) wheelsRef.current[1] = el;
        }}
      >
        <mesh rotation={[0, 0, Math.PI / 2]} material={materials.tireRubber} castShadow>
          <torusGeometry args={[0.25, 0.078, 18, 36]} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]} material={materials.alloyWheel}>
          <cylinderGeometry args={[0.2, 0.2, 0.11, 24]} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]} material={materials.vibrantViolet}>
          <torusGeometry args={[0.185, 0.008, 16, 32]} />
        </mesh>
      </group>

      {/* ================= 6. FLOATING VIOLET & BLUE GEOMETRIC SHAPES ================= */}
      {/* Translucent Violet Glass Torus */}
      <group position={[0.82, 0.95, 0.2]}>
        <Float speed={1.1} rotationIntensity={0.8} floatIntensity={0.5}>
          <mesh material={materials.glassSculpture} castShadow>
            <torusGeometry args={[0.12, 0.05, 16, 32]} />
          </mesh>
        </Float>
      </group>
      {/* Palapitta Cyan Sphere */}
      <group position={[0.92, 0.88, 0.3]}>
        <Float speed={1.3} rotationIntensity={0.9} floatIntensity={0.6}>
          <mesh material={materials.palapittaBlue} castShadow>
            <sphereGeometry args={[0.08, 24, 24]} />
          </mesh>
        </Float>
      </group>
      {/* Soft Violet Sphere */}
      <group position={[-0.78, 0.72, -0.3]}>
        <Float speed={1.2} rotationIntensity={0.7} floatIntensity={0.5}>
          <mesh material={materials.vibrantViolet} castShadow>
            <sphereGeometry args={[0.075, 20, 20]} />
          </mesh>
        </Float>
      </group>
      {/* Sky Blue Orbiting Capsule */}
      <group position={[-0.65, 1.15, 0.2]}>
        <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.5}>
          <mesh material={materials.skyBlueGlow}>
            <capsuleGeometry args={[0.05, 0.12, 16, 16]} />
          </mesh>
        </Float>
      </group>
    </group>
  );
}

export default function HeroScooterCanvas() {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] relative select-none">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 1.05, 4.0], fov: 42 }}
        gl={{ powerPreference: 'high-performance', antialias: true, alpha: true }}
      >
        {/* Soft Environmental Studio Lighting */}
        <ambientLight intensity={0.9} color="#FFFFFF" />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.3}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />
        {/* Soft Ice Blue fill light */}
        <directionalLight position={[-4, 4, -2]} intensity={0.5} color="#EAF9FD" />
        {/* Palapitta turquoise rim highlight */}
        <directionalLight position={[0, 4, -4]} intensity={0.8} color="#00A8C8" />
        {/* Vibrant Violet ambient accent rim */}
        <directionalLight position={[-3, 3, -3]} intensity={0.6} color="#7856FF" />

        {/* Slow 7-Second Floating Cycle */}
        <Float speed={0.9} rotationIntensity={0.14} floatIntensity={0.28}>
          <PalapittaScooter />
        </Float>

        {/* Soft Ambient Ground Shadow */}
        <ContactShadows
          position={[0, -0.56, 0]}
          opacity={0.32}
          scale={5.8}
          blur={2.4}
          far={3.5}
        />
      </Canvas>
    </div>
  );
}
