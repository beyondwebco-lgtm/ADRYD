'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, LayoutGroup } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, Maximize2 } from 'lucide-react';
import { CAMPAIGN_PACKAGES, CampaignPackage } from './campaignPackagesData';
import CampaignDetailsModal from './CampaignDetailsModal';

export default function CampaignPlansGrid() {
  const [selectedPackage, setSelectedPackage] = useState<CampaignPackage | null>(null);

  return (
    <LayoutGroup id="campaign-plans-grid">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {CAMPAIGN_PACKAGES.map((pkg) => (
          <motion.div
            key={pkg.id}
            layoutId={`campaign-card-${pkg.id}`}
            onClick={() => setSelectedPackage(pkg)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${pkg.name} package`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedPackage(pkg);
              }
            }}
            className={`rounded-3xl p-6 border ${pkg.border} ${pkg.cardBg} backdrop-blur-2xl card-hover-lift flex flex-col justify-between relative shadow-xl transition-all duration-300 cursor-pointer group`}
          >
            {pkg.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#B4F000] text-[#000000] text-[11px] font-black uppercase tracking-wider shadow-md z-10">
                Most Popular
              </div>
            )}

            <div className="space-y-4">
              {/* Campaign Visual Poster */}
              <motion.div
                layoutId={`campaign-image-${pkg.id}`}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3 border border-white/10 group-hover:border-[#B4F000]/50 transition-all bg-[#000000]/60 shadow-inner"
              >
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 via-transparent to-transparent pointer-events-none" />

                {/* Subtle Expand Indicator Overlay */}
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#B4F000]" />
                </div>
              </motion.div>

              <div>
                <motion.h3
                  layoutId={`campaign-title-${pkg.id}`}
                  className="font-heading font-black text-2xl text-white group-hover:text-[#B4F000] transition-colors"
                >
                  {pkg.name}
                </motion.h3>
                <div className={`text-sm font-bold mt-1 ${pkg.color}`}>
                  {pkg.riders}
                </div>
                <div className="text-xs text-[#E2E8F0]/70 font-medium mt-0.5">
                  {pkg.duration}
                </div>
              </div>

              <p className="text-xs text-[#E2E8F0]/85 leading-relaxed font-normal">
                {pkg.desc}
              </p>

              <div className="pt-2 border-t border-white/10 space-y-2">
                {pkg.features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${pkg.color} shrink-0`} />
                    <span className="truncate">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 space-y-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPackage(pkg);
                }}
                className={`w-full py-3 rounded-full text-xs font-black flex items-center justify-center gap-1.5 transition-all ${
                  pkg.featured
                    ? 'bg-[#B4F000] text-[#000000] hover:bg-[#c3fc18] shadow-md shadow-[#B4F000]/25'
                    : 'bg-white/15 text-white hover:bg-white/25 border border-white/15 hover:border-[#0A9BE0]'
                }`}
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="text-center">
                <span className="text-[10px] text-[#E2E8F0]/50 group-hover:text-[#B4F000] transition-colors">
                  Click card to view details ↗
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Shared Expanded Details Popup */}
      <CampaignDetailsModal
        selectedPackage={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />
    </LayoutGroup>
  );
}
