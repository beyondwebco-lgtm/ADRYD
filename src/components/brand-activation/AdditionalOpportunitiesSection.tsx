'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ChevronUp, Layers, ArrowUpRight } from 'lucide-react';
import { ADDITIONAL_OPPORTUNITIES } from '@/data/brandActivationData';

export default function AdditionalOpportunitiesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="additional" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>15 Specialized Expansion Vectors</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            MORE WAYS TO BUILD YOUR BUSINESS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Beyond standard street activations: explore specialized commercial formats, B2B wholesale acquisition, boutique pop-ups, and cross-brand bundling.
          </p>
        </div>

        {/* Cross-Brand Collaborative Bundling Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#031526] border-2 border-[#0A9BE0]/40 shadow-xl mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 mb-6 gap-2">
            <div>
              <span className="text-xs font-mono uppercase text-[#B4F000] font-bold">Featured Innovation</span>
              <h3 className="text-2xl font-black text-white mt-0.5">Cross-Brand Collaborative Bundling</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#0A9BE0]/20 text-[#0A9BE0] border border-[#0A9BE0]/30 text-xs font-mono font-bold self-start sm:self-auto">
              75% MARKETING COST REDUCTION
            </span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Four non-competing lifestyle creators (e.g., Linen Shirt Maker + Leather Footwear Brand + Eyewear Designer + Artisanal Travel Snack) co-sponsor a single unified campaign. Brand promoters are styled head-to-toe in all 4 brands simultaneously, dividing campaign expenses into equal 25% shares while reaching four overlapping consumer segments.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
            <div className="p-3 rounded-xl bg-white/[0.04]">
              <span className="text-[#B4F000] font-bold block">Apparel</span>
              <span className="text-slate-400 text-[10px]">Linen Outfits</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.04]">
              <span className="text-[#0A9BE0] font-bold block">Footwear</span>
              <span className="text-slate-400 text-[10px]">Leather Loafers</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.04]">
              <span className="text-[#74D7FF] font-bold block">Eyewear</span>
              <span className="text-slate-400 text-[10px]">Polarized Shades</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.04]">
              <span className="text-white font-bold block">Accessories</span>
              <span className="text-slate-400 text-[10px]">Travel Duffles</span>
            </div>
          </div>
        </div>

        {/* 15 Opportunities Expandable Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ADDITIONAL_OPPORTUNITIES.map((opp) => {
            const isExpanded = expandedId === opp.id;
            return (
              <div
                key={opp.id}
                className="p-5 rounded-2xl bg-[#030C16] border border-white/10 hover:border-[#0A9BE0]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded bg-[#0A9BE0]/15 text-[#0A9BE0] border border-[#0A9BE0]/30 text-[10px] font-mono uppercase font-bold">
                      {opp.category}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleExpand(opp.id)}
                      className="text-slate-400 hover:text-white transition-colors"
                      aria-label="Expand opportunity"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2">{opp.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{opp.whatItMeans}</p>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pt-4 border-t border-white/10 mt-3 space-y-2 text-xs text-slate-300"
                    >
                      <div>
                        <strong className="text-[#0A9BE0] block">How ADRYD Supports:</strong>
                        <p>{opp.howAdrydSupports}</p>
                      </div>
                      <div>
                        <strong className="text-[#B4F000] block">Commercial Benefit:</strong>
                        <p>{opp.businessBenefit}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
