'use client';

import React, { useEffect, useState } from 'react';
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
  CheckCircle2,
} from 'lucide-react';
import { CampaignPackage } from './campaignPackagesData';

interface CampaignDetailsModalProps {
  selectedPackage: CampaignPackage | null;
  onClose: () => void;
  layoutGroupId?: string;
}

export default function CampaignDetailsModal({
  selectedPackage,
  onClose,
}: CampaignDetailsModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!selectedPackage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPackage, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPackage) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedPackage]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {selectedPackage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
          {/* Dimmed Blurred Backdrop */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Smooth Expanded Modal Card */}
          <motion.div
            key={`modal-card-${selectedPackage.id}`}
            layoutId={`campaign-card-${selectedPackage.id}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${selectedPackage.id}`}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-4xl bg-[#041220]/95 backdrop-blur-2xl border border-[#0A9BE0]/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(10,155,224,0.35)] text-white my-auto max-h-[92vh] flex flex-col md:grid md:grid-cols-12 overflow-y-auto"
            transition={{ type: 'spring', stiffness: 350, damping: 32 }}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close details popup"
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white/80 hover:text-white border border-white/20 hover:border-[#B4F000] flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Visual Campaign Poster (Desktop col-span-5) */}
            <div className="relative aspect-[4/3] md:aspect-auto md:col-span-5 bg-black/70 overflow-hidden flex flex-col justify-end min-h-[260px] md:min-h-[480px]">
              <motion.div
                layoutId={`campaign-image-${selectedPackage.id}`}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={selectedPackage.image}
                  alt={selectedPackage.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041220] via-black/20 to-black/30 pointer-events-none" />
              </motion.div>

              {/* Floating Badge Over Poster */}
              <div className="relative z-10 p-5 space-y-2">
                <span
                  className={`inline-block text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border shadow-md backdrop-blur-md ${selectedPackage.badgeStyle}`}
                >
                  {selectedPackage.badge}
                </span>
                {selectedPackage.featured && (
                  <span className="block text-xs font-black text-[#B4F000] tracking-wide drop-shadow-md">
                    ★ MOST POPULAR ACTIVATION
                  </span>
                )}
              </div>
            </div>

            {/* Right Column: Detailed Specs & Handover (Desktop col-span-7) */}
            <div className="p-6 sm:p-8 md:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0A9BE0]">
                  <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
                  <span>ADRYD CAMPAIGN SPECIFICATION</span>
                </div>

                <div>
                  <motion.h3
                    layoutId={`campaign-title-${selectedPackage.id}`}
                    id={`modal-title-${selectedPackage.id}`}
                    className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight uppercase"
                  >
                    {selectedPackage.name}
                  </motion.h3>
                  <p className="text-xs text-[#0A9BE0] font-semibold mt-1 uppercase tracking-wide">
                    {selectedPackage.tagline}
                  </p>
                </div>

                {/* Highlighted Spec Pills */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-2xl bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#E2E8F0]/70">
                      <Users className="w-3.5 h-3.5 text-[#0A9BE0]" />
                      <span>Fleet Size</span>
                    </div>
                    <div className="text-sm sm:text-base font-black text-[#B4F000] mt-0.5">
                      {selectedPackage.riders}
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#E2E8F0]/70">
                      <Calendar className="w-3.5 h-3.5 text-[#B4F000]" />
                      <span>Duration & Scope</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white mt-0.5">
                      {selectedPackage.duration}
                    </div>
                  </div>
                </div>

                {/* Coverage Corridor */}
                <div className="flex items-center gap-2 text-xs text-[#E2E8F0]/80 bg-black/30 px-3 py-2 rounded-xl border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-[#0A9BE0] shrink-0" />
                  <span><strong className="text-white">Coverage:</strong> {selectedPackage.coverage}</span>
                </div>

                {/* Short description */}
                <p className="text-xs sm:text-sm text-[#E2E8F0]/90 leading-relaxed font-normal">
                  {selectedPackage.desc}
                </p>

                {/* Included Features Checklist */}
                <div className="pt-2 border-t border-white/10 space-y-2.5">
                  <div className="text-xs font-black uppercase tracking-wider text-[#B4F000] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B4F000]" />
                    <span>Included In This Package</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedPackage.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-white/95"
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

              {/* Bottom Actions Handover */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <Link
                  href={`/book-campaign?package=${selectedPackage.id}`}
                  onClick={onClose}
                  className="w-full py-3.5 px-6 rounded-full text-sm font-black flex items-center justify-center gap-2 bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] shadow-[0_0_30px_rgba(180,240,0,0.4)] transition-all hover:scale-[1.01]"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 text-[#000000]" />
                </Link>
                <p className="text-[11px] text-center text-[#E2E8F0]/60">
                  Pre-selected booking • Route plan &amp; dedicated operations lead assigned
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
