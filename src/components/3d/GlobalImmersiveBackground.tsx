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
    let lastDomUpdateScroll = -1;
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Detect mobile or low-power device
    const isMobile =
      typeof window !== 'undefined' &&
      (window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches);

    // Particle nodes — Black × Electric Blue × Chartreuse Identity
    let particles: ParticleNode[] = [];
    const particleColors = ['#0A9BE0', '#B4F000', '#0A9BE0', '#FFFFFF', '#B4F000'];

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      // Cap DPR at 1 on mobile, 1.25 on desktop to keep fill-rate blistering fast
      const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Initialize lightweight particle pool
      const count = isMobile
        ? Math.min(Math.floor((width * height) / 45000), 12)
        : Math.min(Math.floor((width * height) / 30000), 24);

      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.8 + 1,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
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

    // Mouse tracking (only on non-touch devices)
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      mouse.targetX = (e.clientX - width / 2) / (width / 2);
      mouse.targetY = (e.clientY - height / 2) / (height / 2);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Page visibility & modal pause optimization
    let isModalActive = false;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const handleModalState = (e: Event) => {
      const customEvent = e as CustomEvent<{ isOpen?: boolean }>;
      isModalActive = !!customEvent.detail?.isOpen;
    };
    window.addEventListener('adryd-modal-state', handleModalState);

    // Color interpolation function
    const interpolateColor = (color1: number[], color2: number[], factor: number) => {
      return color1.map((c, i) => Math.round(c + (color2[i] - c) * factor));
    };

    // Palettes across 8 sections in Black × Electric Blue × Chartreuse Identity: [R, G, B]
    const sectionPalettes = [
      { top: [10, 155, 224], mid: [180, 240, 0], bot: [10, 155, 224], bg: [0, 0, 0] },
      { top: [4, 18, 32], mid: [10, 155, 224], bot: [180, 240, 0], bg: [2, 10, 18] },
      { top: [10, 155, 224], mid: [180, 240, 0], bot: [4, 18, 32], bg: [0, 0, 0] },
      { top: [4, 18, 32], mid: [10, 155, 224], bot: [180, 240, 0], bg: [3, 14, 25] },
      { top: [10, 155, 224], mid: [180, 240, 0], bot: [4, 18, 32], bg: [0, 0, 0] },
      { top: [4, 18, 32], mid: [10, 155, 224], bot: [180, 240, 0], bg: [2, 10, 18] },
      { top: [180, 240, 0], mid: [10, 155, 224], bot: [4, 18, 32], bg: [0, 0, 0] },
      { top: [10, 155, 224], mid: [180, 240, 0], bot: [10, 155, 224], bg: [0, 0, 0] },
    ];

    // Helper to safely update DOM atmospheric glows ONLY when scroll value actually changes
    const updateGlowsIfNeeded = (currentScroll: number) => {
      if (Math.abs(currentScroll - lastDomUpdateScroll) < 0.008) return;
      lastDomUpdateScroll = currentScroll;

      const totalStages = sectionPalettes.length - 1;
      const stageProgress = currentScroll * totalStages;
      const currentIdx = Math.min(Math.floor(stageProgress), totalStages - 1);
      const nextIdx = Math.min(currentIdx + 1, totalStages);
      const stageFactor = stageProgress - currentIdx;

      const pCurrent = sectionPalettes[currentIdx];
      const pNext = sectionPalettes[nextIdx];

      const activeTop = interpolateColor(pCurrent.top, pNext.top, stageFactor);
      const activeMid = interpolateColor(pCurrent.mid, pNext.mid, stageFactor);
      const activeBot = interpolateColor(pCurrent.bot, pNext.bot, stageFactor);
      const activeBg = interpolateColor(pCurrent.bg, pNext.bg, stageFactor);

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
    };

    // Initial glow sync
    updateGlowsIfNeeded(0);

    // Frame rate control: 30fps on mobile is buttery smooth for ambient background while cutting CPU load in half
    let lastRenderTime = 0;
    const targetInterval = isMobile ? 1000 / 30 : 1000 / 60;

    // Main animation loop
    const render = (now: number) => {
      if (isVisible && !prefersReducedMotion && !isModalActive) {
        const elapsed = now - lastRenderTime;

        if (elapsed >= targetInterval) {
          lastRenderTime = now - (elapsed % targetInterval);
          time += isMobile ? 0.016 : 0.010;

          // Smooth damping
          smoothedScroll += (targetScroll - smoothedScroll) * 0.08;
          if (!isMobile) {
            mouse.x += (mouse.targetX - mouse.x) * 0.05;
            mouse.y += (mouse.targetY - mouse.y) * 0.05;
          }

          // Throttle DOM mutations to actual scroll movements
          updateGlowsIfNeeded(smoothedScroll);

          ctx.clearRect(0, 0, width, height);

          // =====================================================================
          // 1. DRAW 3D FLOWING SATIN RIBBONS (Electric Blue × Chartreuse Gradient)
          // =====================================================================
          // 2 ribbons on mobile, 3 on desktop
          const ribbonCount = isMobile ? 2 : 3;

          for (let r = 0; r < ribbonCount; r++) {
            const ribbonOffset = r * (Math.PI * 0.7);
            const baseThickness = height * 0.08 + r * 14;

            // Reduce steps on mobile for fast bezier calculation
            const steps = isMobile ? 24 : 36;
            const topPoints: { x: number; y: number }[] = [];
            const bottomPoints: { x: number; y: number }[] = [];

            for (let i = 0; i <= steps; i++) {
              const frac = i / steps;
              const x = frac * width;

              const scrollWave = Math.sin(frac * 4 + smoothedScroll * 5 + ribbonOffset) * (height * 0.15);
              const timeWave =
                Math.sin(frac * 3 + time + ribbonOffset) * (height * 0.10) +
                Math.cos(frac * 2 - time * 0.6 + ribbonOffset) * (height * 0.06);
              const mouseWave = isMobile ? 0 : mouse.y * (height * 0.06) * (1 - Math.abs(frac - 0.5));

              const centerY =
                height * (0.35 + r * 0.16 - smoothedScroll * 0.18) + scrollWave + timeWave + mouseWave;

              const twistFactor = Math.sin(frac * 4.5 + time + ribbonOffset);
              const halfThick = baseThickness * 0.5 * (0.7 + 0.3 * Math.abs(twistFactor));

              topPoints.push({ x, y: centerY - halfThick });
              bottomPoints.push({ x, y: centerY + halfThick });
            }

            // Ribbon gradient
            const grad = ctx.createLinearGradient(0, height * 0.2, width, height * 0.8);
            if (r === 0) {
              grad.addColorStop(0.0, 'rgba(10, 155, 224, 0.75)');
              grad.addColorStop(0.3, 'rgba(180, 240, 0, 0.80)');
              grad.addColorStop(0.7, 'rgba(71, 201, 255, 0.75)');
              grad.addColorStop(1.0, 'rgba(180, 240, 0, 0.80)');
            } else if (r === 1) {
              grad.addColorStop(0.0, 'rgba(4, 25, 46, 0.65)');
              grad.addColorStop(0.5, 'rgba(10, 155, 224, 0.55)');
              grad.addColorStop(1.0, 'rgba(180, 240, 0, 0.50)');
            } else {
              grad.addColorStop(0.0, 'rgba(0, 0, 0, 0.55)');
              grad.addColorStop(0.5, 'rgba(4, 25, 46, 0.40)');
              grad.addColorStop(1.0, 'rgba(10, 155, 224, 0.35)');
            }

            // Draw ribbon body
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

            for (let i = bottomPoints.length - 1; i >= 0; i--) {
              ctx.lineTo(bottomPoints[i].x, bottomPoints[i].y);
            }
            ctx.closePath();

            ctx.fillStyle = grad;
            ctx.fill();

            // Specular top highlight (hardware blend)
            ctx.lineWidth = r === 0 ? 2 : 1;
            ctx.strokeStyle = r === 0 ? 'rgba(255, 255, 255, 0.55)' : 'rgba(10, 155, 224, 0.40)';
            ctx.beginPath();
            ctx.moveTo(topPoints[0].x, topPoints[0].y);
            for (let i = 1; i < topPoints.length; i++) {
              ctx.lineTo(topPoints[i].x, topPoints[i].y);
            }
            ctx.stroke();
          }

          // =====================================================================
          // 2. PARTICLES & CONSTELLATION THREADS (Optimized, No Software ShadowBlur)
          // =====================================================================
          if (!isMobile && particles.length > 0) {
            // Draw connecting energy threads (Desktop only)
            const maxDist = 110;
            ctx.strokeStyle = 'rgba(10, 155, 224, 0.18)';
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            for (let i = 0; i < particles.length; i++) {
              for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                if (Math.abs(dx) < maxDist && Math.abs(dy) < maxDist) {
                  const dist = Math.hypot(dx, dy);
                  if (dist < maxDist) {
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                  }
                }
              }
            }
            ctx.stroke();
          }

          // Update & draw glowing particles
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            const pulsate = p.size + Math.sin(time * 2 + p.pulsePhase) * 0.5;

            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, Math.max(pulsate, 0.8), 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    // Defer starting the animation loop by 250ms (or on idle) so initial FCP, LCP, and hydration complete instantaneously!
    let startTimer: ReturnType<typeof setTimeout>;
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        animId = requestAnimationFrame(render);
      });
    } else {
      startTimer = setTimeout(() => {
        animId = requestAnimationFrame(render);
      }, 200);
    }

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(startTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('adryd-modal-state', handleModalState);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: '#000000' }}
      aria-hidden="true"
    >
      {/* 1. Underlying Atmospheric Fluid Texture (Lazy loaded, non-blocking) */}
      <div className="absolute inset-0 opacity-25 mix-blend-screen scale-110 blur-xl pointer-events-none">
        <Image
          src="/images/v4/energy-ribbon-loop.jpg"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
        />
      </div>

      {/* 2. Dynamic Scroll-Interpolated Atmospheric Radial Glow Fields (GPU Accelerated) */}
      <div
        ref={glowTopRef}
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full blur-[140px] pointer-events-none transform-gpu"
        style={{ backgroundColor: 'rgba(10, 155, 224, 0.35)' }}
      />
      <div
        ref={glowMidRef}
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none transform-gpu"
        style={{ backgroundColor: 'rgba(180, 240, 0, 0.22)' }}
      />
      <div
        ref={glowBottomRef}
        className="absolute -bottom-40 -right-32 w-[750px] h-[750px] rounded-full blur-[140px] pointer-events-none transform-gpu"
        style={{ backgroundColor: 'rgba(10, 155, 224, 0.30)' }}
      />

      {/* 3. Persistent 3D Flowing Satin Ribbons & Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block transform-gpu"
      />

      {/* 4. Soft Vignette Overlay for Crisp Content Contrast */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#000000]/40 to-[#000000]/90 pointer-events-none" />
    </div>
  );
}
