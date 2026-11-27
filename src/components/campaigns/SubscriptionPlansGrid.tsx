'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Maximize2, Sparkles } from 'lucide-react';
import { SUBSCRIPTION_PLANS, CampaignPackage } from './campaignPackagesData';
import CampaignDetailsModal from './CampaignDetailsModal';

export default function SubscriptionPlansGrid() {
  const [selectedPlan, setSelectedPlan] = useState<CampaignPackage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SUBSCRIPTION_PLANS.map((sub) => (
          <div
            key={sub.id}
            onClick={() => setSelectedPlan(sub)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${sub.name} subscription plan`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedPlan(sub);
              }
            }}
            className={`rounded-3xl p-7 border ${sub.border} ${sub.cardBg} backdrop-blur-2xl card-hover-lift flex flex-col justify-between shadow-xl transition-all duration-300 cursor-pointer group relative`}
          >
            {sub.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#B4F000] text-[#000000] text-[11px] font-black uppercase tracking-wider shadow-md z-10">
                Most Popular Retainer
              </div>
            )}

            <div className="space-y-4">
              {/* Retainer Visual Poster Preview */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-3 border border-white/10 group-hover:border-[#0A9BE0]/50 transition-all bg-[#000000]/60 shadow-inner">
                <Image
                  src={sub.image}
                  alt={sub.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#B4F000]" />
                </div>
              </div>

              <div>
                <h3 className="font-heading font-black text-xl text-white group-hover:text-[#B4F000] transition-colors">
                  {sub.name}
                </h3>
                <div className={`text-xs font-bold mt-1 ${sub.color}`}>
                  {sub.riders}
                </div>
                <div className="text-[11px] text-[#E2E8F0]/70 font-medium mt-0.5">
                  {sub.duration} • {sub.coverage}
                </div>
              </div>

              <p className="text-xs text-[#E2E8F0]/85 leading-relaxed font-normal">
                {sub.desc}
              </p>

              <div className="pt-2 border-t border-white/10 space-y-2">
                {sub.features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${sub.color} shrink-0`} />
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
                  setSelectedPlan(sub);
                }}
                className={`w-full py-3 rounded-full text-xs font-black flex items-center justify-center gap-1.5 transition-all ${
                  sub.featured
                    ? 'bg-[#B4F000] text-[#000000] hover:bg-[#c3fc18] shadow-md shadow-[#B4F000]/25'
                    : 'bg-white/15 text-white hover:bg-white/25 border border-white/15 hover:border-[#0A9BE0]'
                }`}
              >
                <span>Enquire for Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="text-center">
                <span className="text-[10px] text-[#E2E8F0]/50 group-hover:text-[#B4F000] transition-colors">
                  Click card to view details ↗
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shared Reusable Modal for Monthly Retainers */}
      <CampaignDetailsModal
        selectedPackage={selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />
    </>
  );
}
