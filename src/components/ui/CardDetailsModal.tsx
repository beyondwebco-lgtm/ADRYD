'use client';

import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Check,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { DetailCardItem } from '@/data/websiteCardsData';
import { modalBackdropVariants, modalCardVariants } from '@/lib/motion';

interface CardDetailsModalProps {
  item: DetailCardItem | null;
  onClose: () => void;
}

export default function CardDetailsModal({ item, onClose }: CardDetailsModalProps) {
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Manage body scroll locking, focus, and global modal events
  useEffect(() => {
    if (!item) return;

    // Save previous active element for restoration
    if (typeof document !== 'undefined') {
      previousActiveElement.current = document.activeElement as HTMLElement;
    }

    // Emit event to pause 3D backgrounds and Lenis smooth scroll
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('adryd-modal-state', { detail: { isOpen: true } })
      );
    }

    // Lock body scroll and compensate for scrollbar width to prevent layout shift
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    // Auto-focus modal for keyboard accessibility
    const timer = setTimeout(() => {
      modalRef.current?.focus();
    }, 50);

    // Escape key listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);

      // Restore body styles
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;

      // Resume background animations and smooth scroll
      if (typeof window !== 'undefined') {
        window.dispatchEvent(
          new CustomEvent('adryd-modal-state', { detail: { isOpen: false } })
        );
      }

      // Restore focus to original triggering button
      if (
        previousActiveElement.current &&
        typeof previousActiveElement.current.focus === 'function'
      ) {
        previousActiveElement.current.focus();
      }
    };
  }, [item, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {item && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto overscroll-none"
          role="presentation"
        >
          {/* Dimmed Blurred Backdrop */}
          <motion.div
            key="card-modal-backdrop"
            variants={modalBackdropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Premium Perfectly Aligned Two-Column Modal Container */}
          <motion.div
            ref={modalRef}
            key={`card-modal-${item.id}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`card-modal-title-${item.id}`}
            tabIndex={-1}
            variants={modalCardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-[94vw] max-w-[1140px] md:h-[650px] max-h-[90dvh] bg-[#030d17]/95 backdrop-blur-2xl border border-[#0A9BE0]/40 rounded-3xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(10,155,224,0.25)] text-white flex flex-col md:flex-row my-auto outline-none"
          >
            {/* Top Close Button (Consistent 44px touch target) */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close card details"
              className="absolute top-3.5 right-3.5 md:top-4 md:right-4 z-50 w-11 h-11 rounded-full bg-black/80 hover:bg-black text-white/80 hover:text-white border border-white/20 hover:border-[#B4F000] flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-lg active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            {/* =========================================================================
                LEFT PANEL: DEDICATED VISUAL MEDIA SHOWCASE BLOCK (~46%)
                - Fixed, stable proportions ensuring consistent alignment across all cards
                - Crisp, defined "box or block" with subtle neon border & dark glass surface
                - Graphic / photo is guaranteed to FIT inside the box with Next.js fill + object-contain
                - Preserves 100% native aspect ratio without distortion or cropping
               ========================================================================= */}
            <div className="w-full md:w-[46%] md:h-full shrink-0 bg-[#030e18] p-3.5 sm:p-5 md:p-6 border-b md:border-b-0 md:border-r border-[#0A9BE0]/20 flex flex-col justify-center overflow-hidden">
              {/* Defined Box / Block Frame */}
              <div className="relative w-full h-[280px] sm:h-[350px] md:h-full rounded-2xl bg-[#010810] border border-[#0A9BE0]/30 shadow-[inset_0_2px_12px_rgba(0,0,0,0.85),0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center p-3 sm:p-4 md:p-5 group">
                {/* Subtle Ambient Radial Glow behind the artwork */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-40"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(10,155,224,0.20) 0%, rgba(180,240,0,0.06) 50%, transparent 75%)',
                  }}
                  aria-hidden="true"
                />

                {/* Dedicated Fitting Graphic / Photo Container */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 46vw"
                    className="object-contain object-center rounded-xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
                  />
                </div>

                {/* Corner Brackets for High-Tech Engineering Frame Feel */}
                <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#0A9BE0]/50 rounded-tl pointer-events-none" />
                <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#0A9BE0]/50 rounded-tr pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#B4F000]/50 rounded-bl pointer-events-none" />
                <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#B4F000]/50 rounded-br pointer-events-none" />
              </div>
            </div>

            {/* =========================================================================
                RIGHT PANEL: STRUCTURED SPECIFICATIONS & ACTIONS (~54%)
                - Internally scrollable if content exceeds vertical space
                - Clear typographic visual hierarchy
                - Discrete action buttons
               ========================================================================= */}
            <div className="w-full md:w-[54%] md:h-full flex flex-col justify-between overflow-y-auto p-5 sm:p-7 md:p-8 space-y-6 scrollbar-thin scrollbar-thumb-white/10">
              <div className="space-y-5">
                {/* 1. Category label */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
                  <span>{item.category || 'ADRYD SPECIFICATION'}</span>
                </div>

                {/* 2. Title & Tagline */}
                <div>
                  <h3
                    id={`card-modal-title-${item.id}`}
                    className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase leading-tight"
                  >
                    {item.title}
                  </h3>
                  {item.tagline && (
                    <p className="text-xs sm:text-sm text-[#0A9BE0] font-semibold mt-1 uppercase tracking-wider">
                      {item.tagline}
                    </p>
                  )}
                </div>

                {/* 3. Badges Grid (if available) */}
                {item.badges && item.badges.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {item.badges.map((b, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-2xl border backdrop-blur-sm ${
                          b.isPrimary
                            ? 'bg-[#0A9BE0]/10 border-[#0A9BE0]/30'
                            : 'bg-white/5 border-white/10'
                        }`}
                      >
                        <div className="text-[10px] font-bold uppercase text-[#E2E8F0]/70">
                          {b.label}
                        </div>
                        <div
                          className={`text-sm sm:text-base font-black mt-1 ${
                            b.isPrimary ? 'text-[#B4F000]' : 'text-white'
                          }`}
                        >
                          {b.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 4. Highlight Callout Box (if available) */}
                {item.highlight && (
                  <div className="text-xs text-[#E2E8F0]/90 bg-black/40 px-3.5 py-2.5 rounded-xl border border-white/10 flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#B4F000] mt-1.5 shrink-0 animate-pulse" />
                    <span>{item.highlight}</span>
                  </div>
                )}

                {/* 5. Detailed Description */}
                <p className="text-xs sm:text-sm text-[#E2E8F0]/90 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* 6. Included Features / Capabilities Checklist */}
                {item.features && item.features.length > 0 && (
                  <div className="pt-3 border-t border-white/10 space-y-3">
                    <div className="text-xs font-black uppercase tracking-wider text-[#B4F000] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#B4F000]" />
                      <span>{item.featuresTitle || 'Included Capabilities & Deliverables'}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-white/95"
                        >
                          <div className="w-4 h-4 rounded-full bg-[#B4F000]/20 border border-[#B4F000] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-[#B4F000]" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 7. Action CTA Footer */}
              <div className="pt-5 border-t border-white/10 space-y-3">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={item.ctaHref}
                    onClick={onClose}
                    className="w-full sm:flex-1 py-4 px-6 rounded-full text-sm font-black flex items-center justify-center gap-2 bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] shadow-[0_0_30px_rgba(180,240,0,0.4)] transition-all hover:scale-[1.01] active:scale-[0.98]"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#000000]" />
                  </Link>

                  {item.secondaryCtaText && item.secondaryCtaHref && (
                    <Link
                      href={item.secondaryCtaHref}
                      onClick={onClose}
                      className="w-full sm:w-auto py-4 px-5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-[1.01]"
                    >
                      <span>{item.secondaryCtaText}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#0A9BE0]" />
                    </Link>
                  )}
                </div>

                {item.note && (
                  <p className="text-[11px] text-center text-[#94A3B8]">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
