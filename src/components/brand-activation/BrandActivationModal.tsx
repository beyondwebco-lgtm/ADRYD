'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, Sparkles, Building2, ShieldCheck, Zap, Layers } from 'lucide-react';
import { PromotionOpportunity, FashionPackage } from '@/data/brandActivationData';
import { modalBackdropVariants, modalCardVariants } from '@/lib/motion';

interface BrandActivationModalProps {
  isOpen: boolean;
  onClose: () => void;
  opportunity?: PromotionOpportunity | null;
  fashionPackage?: FashionPackage | null;
  onSelectForEnquiry: (itemName: string) => void;
}

export default function BrandActivationModal({
  isOpen,
  onClose,
  opportunity,
  fashionPackage,
  onSelectForEnquiry,
}: BrandActivationModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || (!opportunity && !fashionPackage)) return null;

  const isOpportunity = !!opportunity;
  const title = opportunity?.title || fashionPackage?.name || '';
  const badge = opportunity?.badge || fashionPackage?.badge || 'Brand Activation';
  const tagline = opportunity?.tagline || fashionPackage?.tagline || '';
  const accentColor = opportunity?.color || (fashionPackage?.isPopular ? '#B4F000' : '#0A9BE0');

  const handleEnquireClick = () => {
    onSelectForEnquiry(title);
    onClose();
    const ctaSection = document.getElementById('enquire');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          variants={modalBackdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          variants={modalCardVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#040D18] border border-[#0A9BE0]/30 shadow-[0_24px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(10,155,224,0.15)] overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#02070D]/80 backdrop-blur-xl">
            <div className="flex items-center gap-2.5">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border"
                style={{
                  color: accentColor,
                  borderColor: `${accentColor}40`,
                  backgroundColor: `${accentColor}15`,
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{badge}</span>
              </span>
              <span className="text-xs text-white/50 hidden sm:inline-block font-mono">
                {isOpportunity ? `OPP-${opportunity?.number}` : `${fashionPackage?.duration || ''} CAMPAIGN`}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4F000]"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
            {/* Title & Tagline */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {title}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-[#0A9BE0] mt-1">
                {tagline}
              </p>
            </div>

            {/* Framed Image Showcase */}
            <div className="relative w-full h-56 sm:h-72 rounded-2xl bg-[#010810] border border-[#0A9BE0]/30 overflow-hidden shadow-inner flex items-center justify-center p-3">
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#0A9BE0]/60 pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#0A9BE0]/60 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#0A9BE0]/60 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#0A9BE0]/60 pointer-events-none" />

              <div className="relative w-full h-full">
                <Image
                  src={
                    isOpportunity
                      ? '/images/brand-activation/promoters-standee-hero.jpg'
                      : '/images/brand-activation/fashion-showcase.jpg'
                  }
                  alt={title}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>

              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#E2E8F0] pointer-events-none">
                ADRYD ACTIVATION SPEC
              </div>
            </div>

            {/* Opportunity Details */}
            {isOpportunity && opportunity && (
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#0A9BE0]" />
                    <span>What It Does</span>
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {opportunity.details.whatItDoes}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* How It Works */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#B4F000]" />
                      <span>Operational Workflow</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {opportunity.details.howItWorks.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-[#B4F000]/20 text-[#B4F000] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Entrepreneur Benefits */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0A9BE0]" />
                      <span>Commercial Benefits</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {opportunity.details.entrepreneurBenefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#B4F000] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#74D7FF]" />
                    <span>Ideal For</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.details.useCases.map((uc, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-[#0A9BE0]/10 border border-[#0A9BE0]/20 text-xs text-slate-200"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Fashion Package Details */}
            {!isOpportunity && fashionPackage && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                    <span className="text-[11px] text-white/60 uppercase font-mono block">Duration</span>
                    <span className="text-base font-bold text-white">{fashionPackage.duration}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                    <span className="text-[11px] text-white/60 uppercase font-mono block">Promoters</span>
                    <span className="text-base font-bold text-[#B4F000]">{fashionPackage.promoters}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                    <span className="text-[11px] text-white/60 uppercase font-mono block">EV Fleet</span>
                    <span className="text-base font-bold text-[#0A9BE0]">{fashionPackage.riders}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                    <span className="text-[11px] text-white/60 uppercase font-mono block">Reels Captured</span>
                    <span className="text-base font-bold text-white">{fashionPackage.reels}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
                    Package Scope & Overview
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {fashionPackage.desc}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/60">
                    Included Features & Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                    {fashionPackage.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#B4F000] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0A9BE0]/10 border border-[#0A9BE0]/20 text-xs text-[#0A9BE0]">
                  <span className="font-bold">Planning Benchmark:</span> Illustrative campaign reference rate is {fashionPackage.planningPrice}. Final quotation depends on exact corridor selection, promoter styling, and date scheduling.
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-white/10 bg-[#02070D]/90 backdrop-blur-xl">
            <div className="text-xs text-white/60 text-center sm:text-left">
              <span>Looking to activate in Hyderabad or multi-city? Connect with campaign planners.</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 rounded-full border border-white/20 text-xs font-bold text-white hover:bg-white/10 transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleEnquireClick}
                className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#B4F000] hover:bg-[#c4fc19] text-[#000000] text-xs font-black shadow-[0_4px_16px_rgba(180,240,0,0.3)] transition-all"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#000000]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
