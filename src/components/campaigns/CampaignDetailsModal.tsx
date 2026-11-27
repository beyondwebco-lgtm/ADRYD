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
  Users,
  Calendar,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { CampaignPackage } from './campaignPackagesData';
import { modalBackdropVariants, modalCardVariants, motionTokens } from '@/lib/motion';

interface CampaignDetailsModalProps {
  selectedPackage: CampaignPackage | null;
  onClose: () => void;
}

export default function CampaignDetailsModal({
  selectedPackage,
  onClose,
}: CampaignDetailsModalProps) {
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Manage body scroll, focus, and global modal events
  useEffect(() => {
    if (!selectedPackage) return;

    // Save previous active element for focus restoration
    if (typeof document !== 'undefined') {
      previousActiveElement.current = document.activeElement as HTMLElement;
    }

    // Emit event to pause background animations and smooth scroll
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('adryd-modal-state', { detail: { isOpen: true } })
      );
    }

    // Lock body scroll and prevent layout shift
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
      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus();
      }
    };
  }, [selectedPackage, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {selectedPackage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto overscroll-none"
          role="presentation"
        >
          {/* Dimmed Blurred Backdrop (Fixed blur + animated opacity for optimal GPU performance) */}
          <motion.div
            key="campaign-modal-backdrop"
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
            key={`campaign-modal-${selectedPackage.id}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`campaign-modal-title-${selectedPackage.id}`}
            tabIndex={-1}
            variants={modalCardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-[92vw] max-w-[1140px] max-h-[88dvh] bg-[#030d17]/95 backdrop-blur-2xl border border-[#0A9BE0]/40 rounded-3xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(10,155,224,0.25)] text-white flex flex-col md:flex-row my-auto outline-none"
          >
            {/* Top Close Button (Consistent 44px touch target, high z-index, clear feedback) */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close campaign details"
              className="absolute top-3.5 right-3.5 md:top-4 md:right-4 z-40 w-11 h-11 rounded-full bg-black/70 hover:bg-black/95 text-white/80 hover:text-white border border-white/20 hover:border-[#B4F000] flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-lg active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            {/* =========================================================================
                LEFT PANEL: 100% UNSTRETCHED, UNCROPPED ORIGINAL CAMPAIGN POSTER (~44%)
                - Dedicated container with subtle dark background #07141c
                - object-fit: contain ensures entire artwork is pristine & visible
                - No dark gradients covering text
                - No duplicate badges overlaid on top of the image
               ========================================================================= */}
            <div className="w-full md:w-[44%] shrink-0 bg-[#07141c] flex items-center justify-center p-3 sm:p-5 md:p-6 border-b md:border-b-0 md:border-r border-[#0A9BE0]/25 overflow-hidden">
              <div className="relative w-full h-[32dvh] sm:h-[38dvh] md:h-full md:max-h-[76dvh] flex items-center justify-center">
                <Image
                  src={selectedPackage.image}
                  alt={selectedPackage.name}
                  width={900}
                  height={1000}
                  priority
                  className="w-auto h-auto max-w-full max-h-full object-contain object-center rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>

            {/* =========================================================================
                RIGHT PANEL: STRUCTURED CAMPAIGN INFORMATION & ENQUIRY (~56%)
                - Internally scrollable if content exceeds vertical space
                - Clear typographic visual hierarchy
                - Discrete action button distinct from any printed poster artwork
               ========================================================================= */}
            <div className="w-full md:w-[56%] flex flex-col justify-between overflow-y-auto max-h-[56dvh] md:max-h-[88dvh] p-5 sm:p-7 md:p-9 space-y-6 scrollbar-thin scrollbar-thumb-white/10">
              <div className="space-y-5">
                {/* 1. Category label */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
                  <span>{selectedPackage.category || 'ADRYD CAMPAIGN SPECIFICATION'}</span>
                </div>

                {/* 2. Title & Tagline */}
                <div>
                  <h3
                    id={`campaign-modal-title-${selectedPackage.id}`}
                    className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase leading-tight"
                  >
                    {selectedPackage.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0A9BE0] font-semibold mt-1 uppercase tracking-wider">
                    {selectedPackage.tagline}
                  </p>
                </div>

                {/* 3. Rider Count & Duration Spec Cards */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-[#0A9BE0]/10 border border-[#0A9BE0]/30 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#E2E8F0]/70">
                      <Users className="w-3.5 h-3.5 text-[#0A9BE0]" />
                      <span>Fleet Size</span>
                    </div>
                    <div className="text-sm sm:text-base font-black text-[#B4F000] mt-1">
                      {selectedPackage.riders}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#E2E8F0]/70">
                      <Calendar className="w-3.5 h-3.5 text-[#B4F000]" />
                      <span>Duration & Scope</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white mt-1">
                      {selectedPackage.duration}
                    </div>
                  </div>
                </div>

                {/* 4. Coverage Corridor */}
                <div className="flex items-center gap-2.5 text-xs text-[#E2E8F0]/85 bg-black/40 px-3.5 py-2.5 rounded-xl border border-white/10">
                  <MapPin className="w-4 h-4 text-[#0A9BE0] shrink-0" />
                  <span>
                    <strong className="text-white font-semibold">Coverage:</strong>{' '}
                    {selectedPackage.coverage}
                  </span>
                </div>

                {/* 5. Short Campaign Description */}
                <p className="text-xs sm:text-sm text-[#E2E8F0]/90 leading-relaxed font-normal">
                  {selectedPackage.desc}
                </p>

                {/* 6. Included Features / Services List */}
                <div className="pt-3 border-t border-white/10 space-y-3">
                  <div className="text-xs font-black uppercase tracking-wider text-[#B4F000] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#B4F000]" />
                    <span>Included In This Package</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedPackage.features.map((feat, idx) => (
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
              </div>

              {/* 7. Distinct Enquire Now Action Handover */}
              <div className="pt-5 border-t border-white/10 space-y-2.5">
                <Link
                  href={`/book-campaign?package=${selectedPackage.id}`}
                  onClick={onClose}
                  className="w-full py-4 px-6 rounded-full text-sm font-black flex items-center justify-center gap-2 bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] shadow-[0_0_30px_rgba(180,240,0,0.4)] transition-all hover:scale-[1.01] active:scale-[0.98]"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 text-[#000000]" />
                </Link>
                <p className="text-[11px] text-center text-[#94A3B8]">
                  Direct booking enquiry • Corridor routing &amp; campaign operations lead assigned
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
