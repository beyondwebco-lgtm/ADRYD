'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, LayoutGroup } from 'framer-motion';
import { ArrowRight, Sparkles, Maximize2 } from 'lucide-react';
import { CAMPAIGN_PACKAGES, CampaignPackage } from '@/components/campaigns/campaignPackagesData';
import CampaignDetailsModal from '@/components/campaigns/CampaignDetailsModal';

export default function CampaignPackagesSection() {
  const [selectedPackage, setSelectedPackage] = useState<CampaignPackage | null>(null);

  return (
    <section id="plans" className="py-24 lg:py-32 bg-transparent relative overflow-hidden border-t border-white/10 text-white">
      {/* Ambient Electric Blue & Chartreuse Highlights */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#0A9BE0]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[550px] h-[550px] bg-[#041220]/50 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B4F000]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#041220]/80 backdrop-blur-md border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
              <span>CAMPAIGN TIERS</span>
            </div>
            
            <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[1.05]">
              <span className="bg-gradient-to-r from-[#0A9BE0] via-[#E2E8F0] to-[#B4F000] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_4px_30px_rgba(10,155,224,0.4)]">
                START SMALL. THINK BIG.
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-[#E2E8F0] font-normal leading-relaxed">
              Five compact campaign formats tailored for local business pilots, neighborhood launches and citywide activations.
            </p>
          </div>

          <div>
            <Link
              href="/campaign-plans"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#B4F000] hover:text-[#0A9BE0] transition-colors"
            >
              <span>Explore Monthly Retainers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 5 Compact Frosted Cards Grid with Shared Layout Group */}
        <LayoutGroup id="home-campaign-packages">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {CAMPAIGN_PACKAGES.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                layoutId={`campaign-card-${pkg.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setSelectedPackage(pkg)}
                tabIndex={0}
                role="button"
                aria-label={`View ${pkg.name} campaign details`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedPackage(pkg);
                  }
                }}
                className={`p-7 rounded-3xl ${pkg.cardBg} backdrop-blur-2xl border ${pkg.border} ${pkg.glow} card-hover-lift flex flex-col justify-between relative cursor-pointer group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${pkg.badgeStyle}`}>
                      {pkg.badge}
                    </span>
                    {pkg.featured && (
                      <span className="text-xs font-black text-[#B4F000] animate-pulse">★ FEATURED</span>
                    )}
                  </div>

                  {/* Campaign Visual Poster */}
                  <motion.div
                    layoutId={`campaign-image-${pkg.id}`}
                    className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-white/10 group-hover:border-[#B4F000]/50 transition-all bg-[#000000]/60 shadow-inner"
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

                  <motion.h3
                    layoutId={`campaign-title-${pkg.id}`}
                    className="font-heading font-black text-2xl text-white mb-2 group-hover:text-[#B4F000] transition-colors"
                  >
                    {pkg.name}
                  </motion.h3>

                  <div className={`text-xs font-bold mb-2 ${pkg.color}`}>
                    {pkg.riders} • {pkg.duration}
                  </div>

                  <p className="text-sm text-[#E2E8F0]/80 leading-relaxed font-normal mb-5">
                    {pkg.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPackage(pkg);
                    }}
                    className={`w-full py-3 px-4 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      pkg.featured
                        ? 'bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] font-black shadow-lg shadow-[#B4F000]/25'
                        : 'bg-white/15 hover:bg-white/25 text-white border border-white/15 hover:border-[#0A9BE0]'
                    }`}
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="text-center">
                    <span className="text-[10px] text-[#E2E8F0]/50 group-hover:text-[#B4F000] transition-colors">
                      Click to expand details ↗
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Centered Animated Details Popup Modal */}
          <CampaignDetailsModal
            selectedPackage={selectedPackage}
            onClose={() => setSelectedPackage(null)}
          />
        </LayoutGroup>

      </div>
    </section>
  );
}
