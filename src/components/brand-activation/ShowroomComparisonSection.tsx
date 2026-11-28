'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Building, Check, ArrowRight } from 'lucide-react';
import { SHOWROOM_INVESTMENT } from '@/data/brandActivationData';

export default function ShowroomComparisonSection() {
  const diff = SHOWROOM_INVESTMENT.traditional.total - SHOWROOM_INVESTMENT.adryd.total;
  const pctSaved = ((diff / SHOWROOM_INVESTMENT.traditional.total) * 100).toFixed(1);

  return (
    <section id="showroom-compare" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Capital Efficiency Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            TEST THE MARKET BEFORE INVESTING BIG.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Comparing the capital commitment of opening a physical showroom versus deploying a rapid ADRYD market validation campaign.
          </p>
        </div>

        {/* 2-Card Cost Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Traditional Showroom Cost Card */}
          <div className="p-8 rounded-3xl bg-[#040B13] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-red-400 font-bold block">Traditional Infrastructure</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">Physical Store Setup + Month 1</h3>
                </div>
                <span className="text-2xl font-black text-white font-mono">
                  ₹{SHOWROOM_INVESTMENT.traditional.total.toLocaleString()}
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {SHOWROOM_INVESTMENT.traditional.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between py-1.5 border-b border-white/5">
                    <span>{item.name}</span>
                    <span className="font-mono text-white font-semibold">₹{item.cost.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-slate-400 font-mono">
              Recurring monthly liabilities: rent, electricity, and sales salaries continue indefinitely.
            </div>
          </div>

          {/* ADRYD Market Testing Card */}
          <div className="p-8 rounded-3xl bg-[#031526] border-2 border-[#0A9BE0]/50 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#0A9BE0]/30 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-[#B4F000] font-bold block">ADRYD Validation Model</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">Multi-Corridor Market Testing</h3>
                </div>
                <span className="text-3xl font-black text-[#B4F000] font-mono">
                  ₹{SHOWROOM_INVESTMENT.adryd.total.toLocaleString()}
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                {SHOWROOM_INVESTMENT.adryd.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#B4F000]" />
                      <span>{item.name}</span>
                    </span>
                    <span className="font-mono text-white font-semibold">₹{item.cost.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#0A9BE0]/30 flex items-center justify-between text-xs font-mono">
              <span className="text-[#74D7FF]">Capital Preserved:</span>
              <span className="text-[#B4F000] font-bold text-sm">₹{diff.toLocaleString()} ({pctSaved}% Saved)</span>
            </div>
          </div>
        </div>

        {/* Balanced Conclusion Note */}
        <div className="text-center text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
          *Physical retail showrooms remain valuable for in-person alterations and long-term brand equity. ADRYD allows smart entrepreneurs to validate product fit, pricing elasticity, and customer demand before signing high-risk leases.
        </div>

      </div>
    </section>
  );
}
