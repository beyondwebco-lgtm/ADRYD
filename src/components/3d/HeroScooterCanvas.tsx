'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

// Procedural 3D ADRYD Palapitta Electric Scooter
// Closely crafted after the official reference asset (white unibody, cyan/Palapitta accents, horizontal pill LED lights)
function PalapittaScooter() {
  const scooterRef = useRef<THREE.Group>(null);
  const wheelsRef = useRef<THREE.Group[]>([]);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!scooterRef.current) return;

    // Smooth pointer parallax with spring-like damping
    const pointer = state.pointer;
    targetRotation.current.x = pointer.y * 0.1;
    targetRotation.current.y = pointer.x * 0.22;

    scooterRef.current.rotation.x = THREE.MathUtils.damp(
      scooterRef.current.rotation.x,
      targetRotation.current.x,
      2.5,
      delta
    );
    scooterRef.current.rotation.y = THREE.MathUtils.damp(
      scooterRef.current.rotation.y,
      -0.45 + targetRotation.current.y,
      2.5,
      delta
    );

    // Subtle continuous wheel roll
    wheelsRef.current.forEach((wheel) => {
      if (wheel) wheel.rotation.x += delta * 0.6;
    });
  });

  // Premium Palapitta Blue Materials
  const materials = useMemo(() => {
    return {
      pearlWhite: new THREE.MeshPhysicalMaterial({
        color: '#FFFFFF',
        roughness: 0.12,
        metalness: 0.08,
        clearcoat: 0.95,
        clearcoatRoughness: 0.08,
      }),
      palapittaBlue: new THREE.MeshPhysicalMaterial({
        color: '#00A8C8',
        roughness: 0.18,
        metalness: 0.25,
        clearcoat: 0.8,
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
        roughness: 0.1,
        transmission: 0.85,
        thickness: 0.3,
        opacity: 0.92,
        transparent: true,
      }),
      glassSculpture: new THREE.MeshPhysicalMaterial({
        color: '#00A8C8',
        roughness: 0.08,
        transmission: 0.88,
        thickness: 0.6,
        ior: 1.52,
        clearcoat: 1.0,
      }),
    };
  }, []);

  return (
    <group ref={scooterRef} position={[0, -0.18, 0]} rotation={[0, -0.45, 0]}>
      {/* ================= 1. MAIN CHASSIS & FLOORBOARD ================= */}
      {/* Underbody Chassis Spine */}
      <mesh position={[0, 0.38, 0.05]} material={materials.chassisMatte} castShadow>
        <boxGeometry args={[0.54, 0.14, 1.45]} />
      </mesh>
      {/* Non-slip Floorboard Surface */}
      <mesh position={[0, 0.46, -0.02]} material={materials.seatLeather} receiveShadow>
        <boxGeometry args={[0.46, 0.02, 1.15]} />
      </mesh>
      {/* Center Palapitta Blue Floor Accent Line */}
      <mesh position={[0, 0.475, -0.02]} material={materials.palapittaBlue}>
        <boxGeometry args={[0.04, 0.01, 1.05]} />
      </mesh>

      {/* ================= 2. FRONT APRON & COCKPIT (Matching Reference Image) ================= */}
      <group position={[0, 0.52, 0.72]}>
        {/* Sculpted Front Curved Shield in Pearl White */}
        <mesh position={[0, 0.45, 0.02]} rotation={[-0.22, 0, 0]} material={materials.pearlWhite} castShadow>
          <boxGeometry args={[0.48, 0.92, 0.22]} />
        </mesh>
        
        {/* Signature Dual Horizontal Pill Headlamps */}
        <group position={[0, 0.38, 0.16]} rotation={[-0.22, 0, 0]}>
          {/* Outer Black Bezel */}
          <mesh material={materials.chassisMatte}>
            <boxGeometry args={[0.26, 0.12, 0.04]} />
          </mesh>
          {/* Twin Pill LED Projectors */}
          <mesh position={[-0.065, 0, 0.02]} material={materials.headlampLens}>
            <cylinderGeometry args={[0.038, 0.038, 0.02, 20]} />
          </mesh>
          <mesh position={[0.065, 0, 0.02]} material={materials.headlampLens}>
            <cylinderGeometry args={[0.038, 0.038, 0.02, 20]} />
          </mesh>
          {/* Surrounding Palapitta Cyan Halo Ring */}
          <mesh position={[0, 0, 0.015]} material={materials.skyBlueGlow}>
            <boxGeometry args={[0.27, 0.02, 0.02]} />
          </mesh>
        </group>

        {/* Aerodynamic Front Fender / Mudguard in Palapitta Turquoise (Reference Image Accent) */}
        <mesh position={[0, -0.08, 0.24]} rotation={[-0.1, 0, 0]} material={materials.palapittaBlue} castShadow>
          <boxGeometry args={[0.24, 0.18, 0.42]} />
        </mesh>

        {/* Handlebars Stem & Cockpit Cowl */}
        <group position={[0, 0.98, -0.1]}>
          {/* Center Digital Cockpit Housing */}
          <mesh material={materials.pearlWhite} castShadow>
            <boxGeometry args={[0.28, 0.15, 0.18]} />
          </mesh>
          {/* Center Glass Screen with Glowing Sky Blue Ring (Matching Reference Cockpit Halo) */}
          <mesh position={[0, 0.06, 0.06]} rotation={[-0.5, 0, 0]} material={materials.skyBlueGlow}>
            <boxGeometry args={[0.16, 0.08, 0.02]} />
          </mesh>
          {/* Handlebar Cross Tube */}
          <mesh rotation={[0, 0, Math.PI / 2]} material={materials.chromeMetal} castShadow>
            <cylinderGeometry args={[0.022, 0.022, 0.84, 16]} />
          </mesh>
          {/* Dual Ergonomic Black Grips */}
          <mesh position={[-0.36, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.seatLeather}>
            <cylinderGeometry args={[0.034, 0.034, 0.16, 16]} />
          </mesh>
          <mesh position={[0.36, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.seatLeather}>
            <cylinderGeometry args={[0.034, 0.034, 0.16, 16]} />
          </mesh>
          {/* Sleek Oval Mirrors (Matching Reference Image) */}
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

      {/* ================= 3. REAR SCULPTED BODY & SEAT (Matching Reference Image) ================= */}
      <group position={[0, 0.62, -0.45]}>
        {/* Sculpted Pearl White Rear Quarter Panels */}
        <mesh material={materials.pearlWhite} castShadow receiveShadow>
          <boxGeometry args={[0.56, 0.46, 0.88]} />
        </mesh>

        {/* Signature Palapitta Blue Contour Accent Line (Reference Image Feature!) */}
        <mesh position={[-0.285, -0.02, 0.05]} material={materials.palapittaBlue}>
          <boxGeometry args={[0.015, 0.04, 0.78]} />
        </mesh>
        <mesh position={[0.285, -0.02, 0.05]} material={materials.palapittaBlue}>
          <boxGeometry args={[0.015, 0.04, 0.78]} />
        </mesh>
        {/* Glowing Badge Circle */}
        <mesh position={[-0.288, 0.08, -0.15]} rotation={[0, Math.PI / 2, 0]} material={materials.skyBlueGlow}>
          <cylinderGeometry args={[0.035, 0.035, 0.01, 16]} />
        </mesh>
        <mesh position={[0.288, 0.08, -0.15]} rotation={[0, -Math.PI / 2, 0]} material={materials.skyBlueGlow}>
          <cylinderGeometry args={[0.035, 0.035, 0.01, 16]} />
        </mesh>

        {/* Ergonomic Contoured Saddle Seat in Charcoal */}
        <mesh position={[0, 0.28, 0.04]} material={materials.seatLeather} castShadow>
          <boxGeometry args={[0.42, 0.14, 0.84]} />
        </mesh>
        {/* Rear Grab Rail / Rack */}
        <mesh position={[0, 0.32, -0.44]} material={materials.chromeMetal}>
          <boxGeometry args={[0.38, 0.03, 0.12]} />
        </mesh>
      </group>

      {/* ================= 4. REAR PROMOTIONAL SHOWCASE CABINET (ADRYD Moving Marketplace) ================= */}
      <group position={[0, 0.95, -0.72]}>
        {/* Mounting Frame */}
        <mesh position={[0, -0.18, 0]} material={materials.chassisMatte} castShadow>
          <cylinderGeometry args={[0.05, 0.06, 0.18, 12]} />
        </mesh>
        {/* Aerodynamic White Showcase Pod */}
        <mesh material={materials.pearlWhite} castShadow receiveShadow>
          <boxGeometry args={[0.5, 0.38, 0.55]} />
        </mesh>
        {/* Palapitta Blue Top Cover Trim */}
        <mesh position={[0, 0.2, 0]} material={materials.palapittaBlue}>
          <boxGeometry args={[0.52, 0.03, 0.57]} />
        </mesh>
        {/* Illuminated Acrylic Display Windows */}
        <mesh position={[-0.255, 0.02, 0]} rotation={[0, Math.PI / 2, 0]} material={materials.showcaseGlass}>
          <planeGeometry args={[0.48, 0.28]} />
        </mesh>
        <mesh position={[0.255, 0.02, 0]} rotation={[0, -Math.PI / 2, 0]} material={materials.showcaseGlass}>
          <planeGeometry args={[0.48, 0.28]} />
        </mesh>
        {/* Rear Glowing Digital Brand Display */}
        <mesh position={[0, 0.02, -0.28]} rotation={[0, Math.PI, 0]} material={materials.skyBlueGlow}>
          <planeGeometry args={[0.38, 0.24]} />
        </mesh>
      </group>

      {/* ================= 5. WHEEL ASSEMBLIES ================= */}
      {/* Front Wheel Assembly */}
      <group
        position={[0, 0.26, 0.94]}
        ref={(el) => {
          if (el) wheelsRef.current[0] = el;
        }}
      >
        {/* Rubber Tire */}
        <mesh rotation={[0, 0, Math.PI / 2]} material={materials.tireRubber} castShadow>
          <torusGeometry args={[0.25, 0.078, 18, 36]} />
        </mesh>
        {/* Matte Black Multi-spoke Alloy Hub */}
        <mesh rotation={[0, 0, Math.PI / 2]} material={materials.alloyWheel}>
          <cylinderGeometry args={[0.19, 0.19, 0.09, 24]} />
        </mesh>
        {/* Palapitta Blue Rim Pinstripe */}
        <mesh rotation={[0, 0, Math.PI / 2]} material={materials.palapittaBlue}>
          <torusGeometry args={[0.185, 0.008, 16, 32]} />
        </mesh>
        {/* Disc Brake Rotor */}
        <mesh position={[0.055, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.chromeMetal}>
          <cylinderGeometry args={[0.14, 0.14, 0.01, 20]} />
        </mesh>
        {/* Caliper */}
        <mesh position={[0.06, 0.08, 0.05]} material={materials.royalBlue}>
          <boxGeometry args={[0.03, 0.07, 0.06]} />
        </mesh>
      </group>

      {/* Rear Wheel Assembly */}
      <group
        position={[0, 0.26, -0.92]}
        ref={(el) => {
          if (el) wheelsRef.current[1] = el;
        }}
      >
        {/* Rubber Tire */}
        <mesh rotation={[0, 0, Math.PI / 2]} material={materials.tireRubber} castShadow>
          <torusGeometry args={[0.25, 0.078, 18, 36]} />
        </mesh>
        {/* Integrated Hub Electric Motor Case */}
        <mesh rotation={[0, 0, Math.PI / 2]} material={materials.alloyWheel}>
          <cylinderGeometry args={[0.2, 0.2, 0.11, 24]} />
        </mesh>
        {/* Palapitta Blue Rim Pinstripe */}
        <mesh rotation={[0, 0, Math.PI / 2]} material={materials.palapittaBlue}>
          <torusGeometry args={[0.185, 0.008, 16, 32]} />
        </mesh>
      </group>

      {/* ================= 6. FLOATING PALAPITTA ABSTRACT SHAPES (Referencing Image 2) ================= */}
      {/* Translucent Cyan Glass Form */}
      <group position={[0.82, 0.95, 0.2]}>
        <Float speed={2.0} rotationIntensity={1.0} floatIntensity={0.7}>
          <mesh material={materials.glassSculpture} castShadow>
            <torusGeometry args={[0.12, 0.05, 16, 32]} />
          </mesh>
        </Float>
      </group>
      {/* Royal Blue Sphere (Direct match to reference image 2!) */}
      <group position={[0.92, 0.92, 0.3]}>
        <Float speed={2.2} rotationIntensity={1.2} floatIntensity={0.8}>
          <mesh material={materials.royalBlue} castShadow>
            <sphereGeometry args={[0.08, 24, 24]} />
          </mesh>
        </Float>
      </group>
      {/* Sky Blue Orbiting Capsule */}
      <group position={[-0.78, 0.7, -0.3]}>
        <Float speed={1.8} rotationIntensity={1.4} floatIntensity={0.6}>
          <mesh material={materials.skyBlueGlow}>
            <capsuleGeometry args={[0.06, 0.12, 16, 16]} />
          </mesh>
        </Float>
      </group>
      {/* Palapitta Turquoise Pebble */}
      <group position={[-0.65, 1.15, 0.2]}>
        <Float speed={2.4} rotationIntensity={0.8} floatIntensity={0.7}>
          <mesh material={materials.palapittaBlue}>
            <sphereGeometry args={[0.07, 24, 24]} />
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
        {/* Palapitta turquoise rim highlight for clean automotive edge definition */}
        <directionalLight position={[0, 4, -4]} intensity={0.8} color="#00A8C8" />

        {/* Floating Palapitta Scooter */}
        <Float speed={1.6} rotationIntensity={0.18} floatIntensity={0.35}>
          <PalapittaScooter />
        </Float>

        {/* Soft Ambient Ground Shadow */}
        <ContactShadows
          position={[0, -0.56, 0]}
          opacity={0.35}
          scale={5.8}
          blur={2.4}
          far={3.5}
        />
      </Canvas>
    </div>
  );
}
