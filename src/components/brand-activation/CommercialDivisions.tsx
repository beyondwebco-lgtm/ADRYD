'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shirt, ShoppingCart, Share2, Tv, Palmtree, ArrowRight } from 'lucide-react';
import { COMMERCIAL_DIVISIONS } from '@/data/brandActivationData';

const DIVISION_ICONS: Record<string, React.ReactNode> = {
  'fashion-connect': <Shirt className="w-5 h-5" />,
  'live-sales': <ShoppingCart className="w-5 h-5" />,
  'affiliate-network': <Share2 className="w-5 h-5" />,
  'mobile-media': <Tv className="w-5 h-5" />,
  'travel-experiences': <Palmtree className="w-5 h-5" />,
};

export default function CommercialDivisions() {
  return (
    <section id="divisions" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commercial Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            ONE PLATFORM. FIVE BUSINESS DIVISIONS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Tailored commercial structures matching lifestyle creators, consumer retail brands, and enterprise promotion requirements.
          </p>
        </div>

        {/* 5 Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMERCIAL_DIVISIONS.map((div) => {
            const icon = DIVISION_ICONS[div.id] || <Sparkles className="w-5 h-5" />;
            return (
              <div
                key={div.id}
                className="p-6 rounded-2xl bg-[#030C16] border border-white/10 hover:border-[#0A9BE0]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${div.color}15`,
                        borderColor: `${div.color}40`,
                        color: div.color,
                      }}
                    >
                      {icon}
                    </div>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border"
                      style={{
                        backgroundColor: `${div.color}10`,
                        borderColor: `${div.color}30`,
                        color: div.color,
                      }}
                    >
                      {div.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{div.name}</h3>
                  <p className="text-xs font-semibold text-[#0A9BE0] mt-0.5">{div.tagline}</p>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">{div.description}</p>

                  <div className="mt-5 pt-4 border-t border-white/10 space-y-1.5">
                    <span className="text-[10px] uppercase font-mono text-white/50 block">Key Offerings</span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {div.keyOfferings.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#B4F000] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1">
                    {div.targetIndustries.map((ind, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] text-slate-400">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs text-slate-500 font-mono">
          *Proposed commercial divisions from the business proposal, organized for coordinated multi-channel execution.
        </div>

      </div>
    </section>
  );
}
