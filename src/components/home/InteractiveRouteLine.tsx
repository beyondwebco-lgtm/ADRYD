'use client';

import React, { useEffect, useRef } from 'react';

interface InteractiveRouteLineProps {
  sectionRef?: React.RefObject<HTMLElement | null>;
}

export default function InteractiveRouteLine({ sectionRef }: InteractiveRouteLineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const trailPathRef = useRef<SVGPathElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    const indicator = indicatorRef.current;
    if (!container || !path || !indicator) return;

    let rafId: number;
    let lastTime = performance.now();

    // Motion states (progress from 0.0 to 1.0 along the SVG path)
    let currentProgress = 0.5;
    let targetProgress = 0.5;
    let autonomousProgress = 0.5;
    let autoDirection = 1;
    let recentVelocity = 0;
    let isHovering = false;
    let isVisible = true;
    let trailLength = 0;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Speeds and damping constants
    const AUTO_SPEED = prefersReducedMotion ? 0.0 : 0.09; // Fraction of path per second
    const DAMPING_MOUSE = 7.0; // Responsive yet smooth interpolation
    const DAMPING_AUTO = 4.0; // Silky settle into autonomous drift

    // Calculate path length
    const totalLength = path.getTotalLength();

    // Map horizontal coordinate (from container or section) to path progress [0, 1]
    const updateTargetFromClientX = (clientX: number) => {
      const rect = container.getBoundingClientRect();
      if (rect.width <= 0) return;

      // The SVG path starts at x=50 and ends at x=950 in viewBox 0..1000 (5% to 95%)
      const rawProgress = (clientX - rect.left) / rect.width;
      // Map so mouse at 5% width is start of curve, 95% is end of curve
      const normalized = (rawProgress - 0.05) / 0.90;
      targetProgress = Math.max(0, Math.min(1, normalized));
    };

    // Event handlers for mouse & touch
    const handlePointerMove = (e: MouseEvent | PointerEvent) => {
      isHovering = true;
      updateTargetFromClientX(e.clientX);
    };

    const handlePointerEnter = (e: MouseEvent | PointerEvent) => {
      isHovering = true;
      updateTargetFromClientX(e.clientX);
    };

    const handlePointerLeave = () => {
      if (!isHovering) return;
      isHovering = false;
      // Resume autonomous movement seamlessly from the current progress
      autonomousProgress = currentProgress;
      // Keep traveling in the direction of recent movement, or reverse if near boundaries
      if (currentProgress > 0.92) {
        autoDirection = -1;
      } else if (currentProgress < 0.08) {
        autoDirection = 1;
      } else {
        autoDirection = recentVelocity >= 0 ? 1 : -1;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        isHovering = true;
        updateTargetFromClientX(e.touches[0].clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        isHovering = true;
        updateTargetFromClientX(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      handlePointerLeave();
    };

    // Attach listeners to container
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerenter', handlePointerEnter);
    container.addEventListener('pointerleave', handlePointerLeave);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);

    // If sectionRef is provided, also track movement anywhere across the section
    const sectionEl = sectionRef?.current;
    if (sectionEl) {
      sectionEl.addEventListener('pointermove', handlePointerMove);
      sectionEl.addEventListener('pointerleave', handlePointerLeave);
    }

    // Viewport IntersectionObserver: pause when offscreen
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
        },
        { threshold: 0.05 }
      );
      observer.observe(container);
    }

    // Main animation loop
    const animate = (timestamp: number) => {
      const delta = Math.min((timestamp - lastTime) / 1000, 0.1);
      lastTime = timestamp;

      if (isVisible && !prefersReducedMotion) {
        // If not hovering, update autonomous movement
        if (!isHovering) {
          autonomousProgress += autoDirection * AUTO_SPEED * delta;
          if (autonomousProgress >= 0.96) {
            autonomousProgress = 0.96;
            autoDirection = -1;
          } else if (autonomousProgress <= 0.04) {
            autonomousProgress = 0.04;
            autoDirection = 1;
          }
          targetProgress = autonomousProgress;
        }

        // Exponential smoothing (damping / frame-rate independent lerp)
        const damping = isHovering ? DAMPING_MOUSE : DAMPING_AUTO;
        const lerpFactor = 1 - Math.exp(-damping * delta);
        const prevProgress = currentProgress;
        currentProgress += (targetProgress - currentProgress) * lerpFactor;

        // Instantaneous velocity
        recentVelocity = delta > 0.0001 ? (currentProgress - prevProgress) / delta : 0;
        const currentSpeed = Math.abs(recentVelocity);
        const motionDir = recentVelocity >= 0 ? 1 : -1;

        // Dynamic trail length based on speed
        const targetTrailLen = isHovering
          ? Math.min(100, Math.max(16, currentSpeed * 2200))
          : 36; // Constant subtle luminous tail in autonomous cruise
        trailLength += (targetTrailLen - trailLength) * Math.min(1, delta * 8);

        // Calculate exact point on the SVG curve
        const currentDist = Math.max(0, Math.min(totalLength, currentProgress * totalLength));
        const pt = path.getPointAtLength(currentDist);

        const rect = container.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          // Map SVG user units (0..1000, 0..40) to container pixels
          const screenX = (pt.x / 1000) * rect.width;
          const screenY = (pt.y / 40) * rect.height;

          // Position the glowing indicator
          indicator.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) translate(-50%, -50%)`;

          // Update trailing micro-particles along the curve behind the travel direction
          const trailLags = [18, 36, 54];
          trailLags.forEach((lag, idx) => {
            const dotEl = trailRefs.current[idx];
            if (!dotEl) return;

            // Lag distance behind motion
            const trailDist =
              motionDir >= 0
                ? Math.max(0, currentDist - lag)
                : Math.min(totalLength, currentDist + lag);

            const trailPt = path.getPointAtLength(trailDist);
            const tx = (trailPt.x / 1000) * rect.width;
            const ty = (trailPt.y / 40) * rect.height;

            dotEl.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
            // Subtle fade based on speed and lag index
            const baseAlpha = 0.55 / (idx + 1.2);
            dotEl.style.opacity = `${Math.max(0.12, baseAlpha * Math.min(1.2, trailLength / 35))}`;
          });

          // Update SVG illuminated trail path segment
          if (trailPathRef.current) {
            let startDist = 0;
            let visibleLen = 0;

            if (motionDir >= 0) {
              startDist = Math.max(0, currentDist - trailLength);
              visibleLen = currentDist - startDist;
            } else {
              startDist = currentDist;
              const endDist = Math.min(totalLength, currentDist + trailLength);
              visibleLen = endDist - startDist;
            }

            if (visibleLen > 1) {
              trailPathRef.current.style.strokeDasharray = `${visibleLen} ${totalLength}`;
              trailPathRef.current.style.strokeDashoffset = `${-startDist}`;
              trailPathRef.current.style.opacity = '0.9';
            } else {
              trailPathRef.current.style.opacity = '0';
            }
          }
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    // Initialize position
    const initPt = path.getPointAtLength(0.5 * totalLength);
    const initialRect = container.getBoundingClientRect();
    if (initialRect.width > 0) {
      indicator.style.transform = `translate3d(${(initPt.x / 1000) * initialRect.width}px, ${(initPt.y / 40) * initialRect.height}px, 0) translate(-50%, -50%)`;
    }

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerenter', handlePointerEnter);
      container.removeEventListener('pointerleave', handlePointerLeave);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      if (sectionEl) {
        sectionEl.removeEventListener('pointermove', handlePointerMove);
        sectionEl.removeEventListener('pointerleave', handlePointerLeave);
      }
    };
  }, [sectionRef]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-10 sm:h-12 lg:h-14 select-none touch-none overflow-visible cursor-ew-resize"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 1000 40"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Approved Brand Gradient: Electric Blue (#0A9BE0) to Chartreuse (#B4F000) */}
          <linearGradient id="blueLimeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0A9BE0" />
            <stop offset="50%" stopColor="#74D7FF" />
            <stop offset="100%" stopColor="#B4F000" />
          </linearGradient>

          {/* Luminous Trail Glowing Gradient */}
          <linearGradient id="routeGlowTrailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0A9BE0" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#74D7FF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#B4F000" stopOpacity="1" />
          </linearGradient>

          {/* Glow filter for the energetic pulse */}
          <filter id="routeLineGlow" x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Underlying ambient soft glow trace */}
        <path
          d="M 50,20 Q 300,5 500,20 T 950,20"
          stroke="url(#blueLimeGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          className="opacity-15 blur-[2px]"
        />

        {/* 2. Existing dashed gradient line (unchanged geometry & styling) */}
        <path
          ref={pathRef}
          d="M 50,20 Q 300,5 500,20 T 950,20"
          stroke="url(#blueLimeGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="10 10"
          className="opacity-80"
        />

        {/* 3. Luminous trail segment along the line */}
        <path
          ref={trailPathRef}
          d="M 50,20 Q 300,5 500,20 T 950,20"
          stroke="url(#routeGlowTrailGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#routeLineGlow)"
          className="pointer-events-none transition-opacity duration-150"
          style={{ opacity: 0 }}
        />
      </svg>

      {/* Trailing Micro-Particles (subtle luminous trail behind the moving indicator) */}
      {[
        { size: 9, color: '#B4F000', glow: 8, glowColor: 'rgba(180, 240, 0, 0.6)' },
        { size: 6, color: '#74D7FF', glow: 6, glowColor: 'rgba(116, 215, 255, 0.5)' },
        { size: 4, color: '#0A9BE0', glow: 5, glowColor: 'rgba(10, 155, 224, 0.4)' },
      ].map((dot, idx) => (
        <div
          key={idx}
          ref={(el) => {
            trailRefs.current[idx] = el;
          }}
          className="absolute top-0 left-0 rounded-full pointer-events-none will-change-transform z-10"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
            boxShadow: `0 0 ${dot.glow}px ${dot.glowColor}`,
            opacity: 0,
            transform: 'translate3d(-9999px, -9999px, 0) translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Primary Glowing Circular Indicator Dot */}
      <div
        ref={indicatorRef}
        className="absolute top-0 left-0 pointer-events-none will-change-transform z-20"
        style={{
          width: '14px',
          height: '14px',
          transform: 'translate3d(-9999px, -9999px, 0) translate(-50%, -50%)',
        }}
      >
        {/* Outer Electric Blue Glow (#0A9BE0) */}
        <div className="absolute -inset-2 rounded-full bg-[#0A9BE0]/45 blur-md pointer-events-none" />

        {/* Ambient Halo */}
        <div className="absolute -inset-1 rounded-full bg-[#0A9BE0]/60 blur-[3px] pointer-events-none" />

        {/* Solid Chartreuse Core (#B4F000) with Jewel Glow */}
        <div className="w-full h-full rounded-full bg-[#B4F000] shadow-[0_0_10px_3px_#B4F000,0_0_20px_5px_#0A9BE0] flex items-center justify-center relative">
          {/* Specular Photon Core Point */}
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_#ffffff]" />
        </div>
      </div>
    </div>
  );
}
