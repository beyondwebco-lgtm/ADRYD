'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ParticleNode {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  color: string;
  pulsePhase: number;
}

export default function GlobalImmersiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const glowTopRef = useRef<HTMLDivElement>(null);
  const glowMidRef = useRef<HTMLDivElement>(null);
  const glowBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let isVisible = true;
    let time = 0;

    // Smoothed interaction states
    let targetScroll = 0;
    let smoothedScroll = 0;
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Particle nodes — Black × Electric Blue × Chartreuse Identity
    let particles: ParticleNode[] = [];
    const particleColors = ['#0A9BE0', '#B4F000', '#0A9BE0', '#FFFFFF', '#B4F000'];

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Initialize particles
      const count = Math.min(Math.floor((width * height) / 22000), 38);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 1,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Scroll tracking
    const handleScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      targetScroll = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX - width / 2) / (width / 2);
      mouse.targetY = (e.clientY - height / 2) / (height / 2);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Page visibility optimization
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Color interpolation function
    const interpolateColor = (color1: number[], color2: number[], factor: number) => {
      return color1.map((c, i) => Math.round(c + (color2[i] - c) * factor));
    };

    // Palettes across 8 sections in Black × Electric Blue × Chartreuse Identity: [R, G, B]
    const sectionPalettes = [
      // 0. Hero (Electric Blue #0A9BE0, Chartreuse #B4F000, Black #000000)
      { top: [10, 155, 224], mid: [180, 240, 0], bot: [10, 155, 224], bg: [0, 0, 0] },
      // 1. Concept / The Idea (Deep Blue #041220, Electric Blue #0A9BE0, Chartreuse #B4F000)
      { top: [4, 18, 32], mid: [10, 155, 224], bot: [180, 240, 0], bg: [2, 10, 18] },
      // 2. Services (Electric Blue #0A9BE0, Chartreuse #B4F000, Deep Blue #041220)
      { top: [10, 155, 224], mid: [180, 240, 0], bot: [4, 18, 32], bg: [0, 0, 0] },
      // 3. How It Works (Deep Blue #041220, Electric Blue #0A9BE0, Chartreuse #B4F000)
      { top: [4, 18, 32], mid: [10, 155, 224], bot: [180, 240, 0], bg: [3, 14, 25] },
      // 4. Product Categories (Electric Blue #0A9BE0, Chartreuse #B4F000, Deep Blue #041220)
      { top: [10, 155, 224], mid: [180, 240, 0], bot: [4, 18, 32], bg: [0, 0, 0] },
      // 5. Campaign Plans (Deep Blue #041220, Electric Blue #0A9BE0, Chartreuse #B4F000)
      { top: [4, 18, 32], mid: [10, 155, 224], bot: [180, 240, 0], bg: [2, 10, 18] },
      // 6. Partner With ADRYD (Chartreuse #B4F000, Electric Blue #0A9BE0, Deep Blue #041220)
      { top: [180, 240, 0], mid: [10, 155, 224], bot: [4, 18, 32], bg: [0, 0, 0] },
      // 7. Final CTA & Footer (Electric Blue #0A9BE0, Chartreuse #B4F000, Electric Blue #0A9BE0)
      { top: [10, 155, 224], mid: [180, 240, 0], bot: [10, 155, 224], bg: [0, 0, 0] },
    ];

    // Main animation loop
    const render = () => {
      if (isVisible && !prefersReducedMotion) {
        time += 0.012;

        // Smooth damping
        smoothedScroll += (targetScroll - smoothedScroll) * 0.06;
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        // Determine current palette stage
        const totalStages = sectionPalettes.length - 1;
        const stageProgress = smoothedScroll * totalStages;
        const currentIdx = Math.min(Math.floor(stageProgress), totalStages - 1);
        const nextIdx = Math.min(currentIdx + 1, totalStages);
        const stageFactor = stageProgress - currentIdx;

        const pCurrent = sectionPalettes[currentIdx];
        const pNext = sectionPalettes[nextIdx];

        const activeTop = interpolateColor(pCurrent.top, pNext.top, stageFactor);
        const activeMid = interpolateColor(pCurrent.mid, pNext.mid, stageFactor);
        const activeBot = interpolateColor(pCurrent.bot, pNext.bot, stageFactor);
        const activeBg = interpolateColor(pCurrent.bg, pNext.bg, stageFactor);

        // Update atmospheric DOM background glows softly
        if (glowTopRef.current) {
          glowTopRef.current.style.backgroundColor = `rgba(${activeTop[0]}, ${activeTop[1]}, ${activeTop[2]}, 0.35)`;
        }
        if (glowMidRef.current) {
          glowMidRef.current.style.backgroundColor = `rgba(${activeMid[0]}, ${activeMid[1]}, ${activeMid[2]}, 0.28)`;
        }
        if (glowBottomRef.current) {
          glowBottomRef.current.style.backgroundColor = `rgba(${activeBot[0]}, ${activeBot[1]}, ${activeBot[2]}, 0.30)`;
        }
        if (containerRef.current) {
          containerRef.current.style.backgroundColor = `rgb(${activeBg[0]}, ${activeBg[1]}, ${activeBg[2]})`;
        }

        ctx.clearRect(0, 0, width, height);

        // =====================================================================
        // 1. DRAW 3D FLOWING SATIN RIBBONS (Electric Blue × Chartreuse Gradient)
        // =====================================================================
        const ribbonCount = 3;

        for (let r = 0; r < ribbonCount; r++) {
          const ribbonOffset = r * (Math.PI * 0.7);
          const baseThickness = (height * 0.09) + (r * 18);
          
          // Generate ribbon spine nodes
          const steps = 48;
          const topPoints: { x: number; y: number }[] = [];
          const bottomPoints: { x: number; y: number }[] = [];

          for (let i = 0; i <= steps; i++) {
            const frac = i / steps;
            const x = frac * width;

            // Sinuous spatial trajectory modulated by time, scroll progress and cursor
            const scrollWave = Math.sin(frac * 4 + smoothedScroll * 6 + ribbonOffset) * (height * 0.16);
            const timeWave = Math.sin(frac * 3.2 + time + ribbonOffset) * (height * 0.12) +
                             Math.cos(frac * 2.1 - time * 0.7 + ribbonOffset) * (height * 0.08);
            const mouseWave = mouse.y * (height * 0.07) * (1 - Math.abs(frac - 0.5));

            const centerY = height * (0.35 + (r * 0.16) - (smoothedScroll * 0.18)) + scrollWave + timeWave + mouseWave;
            
            // Dynamic ribbon thickness & twist fold
            const twistFactor = Math.sin(frac * 5 + time * 1.2 + ribbonOffset);
            const halfThick = (baseThickness * 0.5) * (0.65 + 0.35 * Math.abs(twistFactor));

            topPoints.push({ x, y: centerY - halfThick });
            bottomPoints.push({ x, y: centerY + halfThick });
          }

          // Build ribbon gradient across screen matching Black × Electric Blue × Chartreuse identity
          const grad = ctx.createLinearGradient(0, height * 0.2, width, height * 0.8);
          if (r === 0) {
            // Main primary vibrant ribbon: Electric Blue -> Chartreuse -> Cyan-Blue -> Chartreuse -> Electric Blue
            grad.addColorStop(0.0, 'rgba(10, 155, 224, 0.85)');
            grad.addColorStop(0.25, 'rgba(180, 240, 0, 0.85)');
            grad.addColorStop(0.50, 'rgba(71, 201, 255, 0.80)');
            grad.addColorStop(0.75, 'rgba(180, 240, 0, 0.85)');
            grad.addColorStop(1.0, 'rgba(10, 155, 224, 0.85)');
          } else if (r === 1) {
            // Secondary companion ribbon: Deep Blue -> Electric Blue -> Chartreuse -> Electric Blue
            grad.addColorStop(0.0, 'rgba(4, 25, 46, 0.75)');
            grad.addColorStop(0.40, 'rgba(10, 155, 224, 0.65)');
            grad.addColorStop(0.75, 'rgba(180, 240, 0, 0.60)');
            grad.addColorStop(1.0, 'rgba(10, 155, 224, 0.55)');
          } else {
            // Ambient deep ribbon: Black foundation -> Deep Blue -> Electric Blue
            grad.addColorStop(0.0, 'rgba(0, 0, 0, 0.65)');
            grad.addColorStop(0.5, 'rgba(4, 25, 46, 0.50)');
            grad.addColorStop(1.0, 'rgba(10, 155, 224, 0.40)');
          }

          // Draw ribbon body
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(topPoints[0].x, topPoints[0].y);
          for (let i = 1; i < topPoints.length; i++) {
            const prev = topPoints[i - 1];
            const curr = topPoints[i];
            const mx = (prev.x + curr.x) / 2;
            const my = (prev.y + curr.y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, mx, my);
          }
          ctx.lineTo(topPoints[topPoints.length - 1].x, topPoints[topPoints.length - 1].y);

          // Connect down and trace back along bottom edge
          for (let i = bottomPoints.length - 1; i >= 0; i--) {
            ctx.lineTo(bottomPoints[i].x, bottomPoints[i].y);
          }
          ctx.closePath();

          ctx.fillStyle = grad;
          ctx.shadowColor = r === 0 ? 'rgba(10, 155, 224, 0.5)' : 'rgba(180, 240, 0, 0.35)';
          ctx.shadowBlur = r === 0 ? 35 : 20;
          ctx.fill();

          // Draw satin edge specular highlight
          ctx.lineWidth = r === 0 ? 2.5 : 1.5;
          ctx.strokeStyle = r === 0 ? 'rgba(255, 255, 255, 0.65)' : 'rgba(10, 155, 224, 0.45)';
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#0A9BE0';
          ctx.beginPath();
          ctx.moveTo(topPoints[0].x, topPoints[0].y);
          for (let i = 1; i < topPoints.length; i++) {
            ctx.lineTo(topPoints[i].x, topPoints[i].y);
          }
          ctx.stroke();

          // Subtle shaded lower fold
          ctx.lineWidth = 1.8;
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
          ctx.shadowBlur = 0;
          ctx.beginPath();
          ctx.moveTo(bottomPoints[0].x, bottomPoints[0].y);
          for (let i = 1; i < bottomPoints.length; i++) {
            ctx.lineTo(bottomPoints[i].x, bottomPoints[i].y);
          }
          ctx.stroke();

          ctx.restore();
        }

        // =====================================================================
        // 2. CONNECTED NETWORK CONSTELLATION & FLOATING AMBIENT PARTICLES
        // =====================================================================
        // Draw delicate connecting energy threads between nearby particles
        ctx.save();
        const maxDist = 130;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.hypot(dx, dy);
            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.25;
              ctx.strokeStyle = `rgba(10, 155, 224, ${alpha})`;
              ctx.lineWidth = 0.75;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
        ctx.restore();

        // Update and draw glowing particle motes
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Soft cursor repulsion
          const dxMouse = p.x - (width / 2 + mouse.x * width * 0.4);
          const dyMouse = p.y - (height / 2 + mouse.y * height * 0.4);
          const distMouse = Math.hypot(dxMouse, dyMouse);
          if (distMouse < 160 && distMouse > 0) {
            const push = (160 - distMouse) * 0.015;
            p.x += (dxMouse / distMouse) * push;
            p.y += (dyMouse / distMouse) * push;
          }

          const pulsate = p.size + Math.sin(time * 2.5 + p.pulsePhase) * 0.7;

          ctx.save();
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 14;
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(pulsate, 0.8), 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: '#000000' }}
      aria-hidden="true"
    >
      {/* 1. Underlying Atmospheric Fluid Texture */}
      <div className="absolute inset-0 opacity-25 mix-blend-screen scale-110 blur-xl pointer-events-none">
        <Image
          src="/images/v4/energy-ribbon-loop.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 2. Dynamic Scroll-Interpolated Atmospheric Radial Glow Fields */}
      <div
        ref={glowTopRef}
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full blur-[150px] transition-colors duration-700 pointer-events-none"
        style={{ backgroundColor: 'rgba(10, 155, 224, 0.35)' }}
      />
      <div
        ref={glowMidRef}
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px] transition-colors duration-700 pointer-events-none"
        style={{ backgroundColor: 'rgba(180, 240, 0, 0.22)' }}
      />
      <div
        ref={glowBottomRef}
        className="absolute -bottom-40 -right-32 w-[750px] h-[750px] rounded-full blur-[160px] transition-colors duration-700 pointer-events-none"
        style={{ backgroundColor: 'rgba(10, 155, 224, 0.30)' }}
      />

      {/* 3. Persistent 3D Flowing Satin Ribbons & Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* 4. Soft Vignette Overlay for Crisp Content Contrast */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#000000]/40 to-[#000000]/90 pointer-events-none" />
    </div>
  );
}
