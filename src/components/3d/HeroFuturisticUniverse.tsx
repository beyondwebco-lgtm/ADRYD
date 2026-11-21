'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ParticleNode {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  pulsePhase: number;
}

export default function HeroFuturisticUniverse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let isVisible = true;

    // Pointer tracking with smooth damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Palette: Electric Blue, Vibrant Violet, Sky Cyan, Electric Pink, Fresh Mint
    const colors = ['#38BDF8', '#7856FF', '#2563EB', '#EC4899', '#2DD4BF'];

    let particles: ParticleNode[] = [];

    const resize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Generate network nodes proportional to screen size (controlled density for performance)
      const count = Math.min(Math.floor((width * height) / 14000), 55);
      particles = [];
      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2.2 + 1.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const handlePointerMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouse.targetX = e.clientX - rect.left - width / 2;
      mouse.targetY = e.clientY - rect.top - height / 2;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Pause rendering when off-screen to preserve battery and 60 FPS
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    let time = 0;

    const render = () => {
      if (isVisible && !prefersReducedMotion) {
        time += 0.015;

        // Smooth damping for mouse
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        ctx.clearRect(0, 0, width, height);

        // 1. Draw flowing energy ribbon curves
        ctx.save();
        ctx.lineWidth = 1.4;

        // Draw 3 flowing sinuous curves
        for (let waveIndex = 0; waveIndex < 3; waveIndex++) {
          const waveColor = waveIndex === 0 ? 'rgba(56, 189, 248, 0.22)' : waveIndex === 1 ? 'rgba(120, 86, 255, 0.20)' : 'rgba(236, 72, 153, 0.16)';
          ctx.strokeStyle = waveColor;
          ctx.beginPath();
          const baseHeight = height * (0.35 + waveIndex * 0.22);
          for (let x = 0; x <= width; x += 15) {
            const yOffset =
              Math.sin(x * 0.0035 + time + waveIndex) * 45 +
              Math.cos(x * 0.002 - time * 0.8) * 30 +
              (mouse.y * 0.08 * (waveIndex + 1));
            const y = baseHeight + yOffset;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        ctx.restore();

        // 2. Draw connecting network lines between close nodes
        ctx.save();
        const maxDist = 120;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.hypot(dx, dy);
            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.25;
              ctx.strokeStyle = `rgba(120, 86, 255, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
        ctx.restore();

        // 3. Update & render particle nodes
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Gentle autonomous wandering
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Soft cursor displacement
          const dxMouse = p.x - (width / 2 + mouse.x * 0.6);
          const dyMouse = p.y - (height / 2 + mouse.y * 0.6);
          const distMouse = Math.hypot(dxMouse, dyMouse);
          if (distMouse < 180 && distMouse > 0) {
            const push = (180 - distMouse) * 0.015;
            p.x += (dxMouse / distMouse) * push;
            p.y += (dyMouse / distMouse) * push;
          }

          // Pulsing glow
          const currentSize = p.size + Math.sin(time * 2 + p.pulsePhase) * 0.6;
          
          ctx.save();
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(currentSize, 0.5), 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handlePointerMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* 1. Underlying Atmospheric Fluid Gradient Texture (Instant high-res fallback) */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen scale-110 blur-xl">
        <Image
          src="/images/v4/hero-fluid-universe.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 2. Multicolor Radial Energy Blurs */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#2563EB]/40 to-[#7856FF]/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#EC4899]/35 via-[#D946EF]/25 to-[#38BDF8]/30 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#2DD4BF]/20 to-[#38BDF8]/25 blur-[120px] pointer-events-none" />

      {/* 3. Interactive WebGL/Canvas Particle & Energy Ribbon Field */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* 4. Subtle Vignette Depth Layer */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#142238]/40 to-[#142238]/90 pointer-events-none" />
    </div>
  );
}
