'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Layers } from 'lucide-react';
import { FUTURE_ECOSYSTEM_MODULES } from '@/data/brandActivationData';

export default function TechnologyEcosystemSection() {
  return (
    <section id="tech-ecosystem" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platform Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            BUILT FOR A CONNECTED BUSINESS ECOSYSTEM.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            The proposed digital software modules synchronizing fleet riders, brand promoters, business founders, and instant payment settlements across India.
          </p>
        </div>

        {/* 12 Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FUTURE_ECOSYSTEM_MODULES.map((mod, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#030C16] border border-white/10 hover:border-[#0A9BE0]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Cpu className="w-4 h-4 text-[#0A9BE0]" />
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
                    {mod.status}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{mod.name}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-slate-500 font-mono">
          *Proposed architecture modules. Production software launches in sequential phases in coordination with fleet expansion.
        </div>

      </div>
    </section>
  );
}
