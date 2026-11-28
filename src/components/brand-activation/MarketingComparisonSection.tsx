'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, X } from 'lucide-react';
import { MARKETING_COMPARISON_MATRIX } from '@/data/brandActivationData';

export default function MarketingComparisonSection() {
  return (
    <section id="comparison" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multi-Channel Benchmark</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            MORE THAN JUST VISIBILITY.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            A 12-dimension comparative analysis demonstrating how ADRYD transcends passive hoardings, newspaper ads, and static showrooms with real-world mobility and human engagement.
          </p>
        </div>

        {/* 12-Dimension Matrix Table */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#03101E] border border-[#0A9BE0]/30 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono uppercase text-[11px]">
                  <th className="py-3 px-3 w-1/4">Evaluation Dimension</th>
                  <th className="py-3 px-3 w-3/8 text-slate-400">Traditional Media (Hoardings / TV / Print)</th>
                  <th className="py-3 px-3 w-3/8 text-[#B4F000] font-bold">ADRYD Brand Activation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {MARKETING_COMPARISON_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-3 font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A9BE0]" />
                      <span>{row.dimension}</span>
                    </td>
                    <td className="py-3.5 px-3 text-slate-400 leading-relaxed">{row.traditional}</td>
                    <td className="py-3.5 px-3 font-medium text-slate-100 leading-relaxed bg-[#0A9BE0]/[0.03]">
                      <span className="text-[#B4F000] font-bold mr-1.5">✓</span>
                      <span>{row.adryd}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
