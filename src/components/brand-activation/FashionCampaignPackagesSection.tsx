'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { FASHION_CAMPAIGN_PACKAGES, FashionPackage } from '@/data/brandActivationData';

interface FashionCampaignPackagesSectionProps {
  onSelectPackage: (pkg: FashionPackage) => void;
}

export default function FashionCampaignPackagesSection({
  onSelectPackage,
}: FashionCampaignPackagesSectionProps) {
  return (
    <section id="packages" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Fashion Packages</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            START SMALL. SCALE SMART.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Engineered specifically for apparel creators, footwear designers, and lifestyle labels. Click any plan below to view comprehensive deliverables and request custom quotations.
          </p>
        </div>

        {/* 3 Fashion Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {FASHION_CAMPAIGN_PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                onClick={() => onSelectPackage(pkg)}
                className={`relative p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5 ${
                  isPopular
                    ? 'bg-[#03172A] border-2 border-[#B4F000] shadow-[0_0_50px_rgba(180,240,0,0.2)]'
                    : 'bg-[#030C16] border border-white/10 hover:border-[#0A9BE0]/50'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B4F000] text-black text-[11px] font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-black" />
                    <span>MOST POPULAR ACTIVATION</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-white/50 uppercase">{pkg.duration} CAMPAIGN</span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                        isPopular
                          ? 'bg-[#B4F000]/15 text-[#B4F000] border-[#B4F000]/30'
                          : 'bg-[#0A9BE0]/15 text-[#0A9BE0] border-[#0A9BE0]/30'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white group-hover:text-[#B4F000] transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#0A9BE0] mt-1">{pkg.tagline}</p>
                  <p className="text-xs text-slate-300 mt-4 leading-relaxed">{pkg.desc}</p>

                  <div className="grid grid-cols-2 gap-2 mt-6 p-3 rounded-2xl bg-white/[0.04] text-center font-mono">
                    <div className="p-2 rounded-xl bg-black/40">
                      <span className="text-xs text-slate-400 block">Promoters</span>
                      <span className="text-sm font-bold text-white">{pkg.promoters}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40">
                      <span className="text-xs text-slate-400 block">Reels</span>
                      <span className="text-sm font-bold text-[#B4F000]">{pkg.reels}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
                    <span className="text-[11px] font-mono uppercase text-white/50 block font-bold">
                      Key Inclusions
                    </span>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {pkg.features.slice(0, 4).map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#B4F000] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-xs text-slate-400 font-mono mb-3">
                    Planning Reference: <span className="text-white font-bold">{pkg.planningPrice}</span>
                  </div>

                  <button
                    type="button"
                    className={`w-full py-3 rounded-full text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isPopular
                        ? 'bg-[#B4F000] hover:bg-[#c5fc1b] text-black shadow-[0_4px_20px_rgba(180,240,0,0.35)]'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                  >
                    <span>Request Custom Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-slate-500 font-mono max-w-2xl mx-auto">
          *Fashion activation packages operate independently from ADRYD standard transit packages. Quotations depend on custom wardrobe tailoring, promoter styling requirements, and multi-corridor transit permits.
        </div>

      </div>
    </section>
  );
}
