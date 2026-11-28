'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bike, Users, Compass, Check, ArrowRight } from 'lucide-react';
import { BUSINESS_ENGINES } from '@/data/brandActivationData';

const ENGINE_ICONS: Record<string, React.ReactNode> = {
  Bike: <Bike className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
};

export default function BusinessEngines() {
  return (
    <section id="engines" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>The Power Triad</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            THREE ENGINES. ONE ECOSYSTEM.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            A cohesive growth architecture combining street-level electric mobility, persuasive human brand ambassadors, and experiential lifestyle collaborations.
          </p>
        </div>

        {/* 3 Large Editorial Engines Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BUSINESS_ENGINES.map((engine) => {
            const icon = ENGINE_ICONS[engine.icon] || <Sparkles className="w-6 h-6" />;
            return (
              <div
                key={engine.id}
                className="p-8 rounded-3xl bg-[#040E1B] border border-white/10 hover:border-[#0A9BE0]/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shadow-lg"
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: engine.accentColor }}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${engine.accentColor}15`,
                        borderColor: `${engine.accentColor}40`,
                        color: engine.accentColor,
                      }}
                    >
                      {icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-white/50">{engine.number} ENGINE</span>
                  </div>

                  <h3 className="text-2xl font-black text-white tracking-tight">
                    {engine.title}
                  </h3>
                  <p
                    className="text-xs font-bold uppercase tracking-wider mt-1"
                    style={{ color: engine.accentColor }}
                  >
                    {engine.tagline}
                  </p>
                  <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                    {engine.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/10 space-y-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/60 block font-mono">
                      Core Capabilities
                    </span>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {engine.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#B4F000] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-center">
                  {engine.metrics.map((m, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-white/[0.04]">
                      <span className="text-base font-black text-white block">{m.value}</span>
                      <span className="text-[10px] text-slate-400 font-mono block mt-0.5">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Synergistic SVG Connecting Loop Note */}
        <div className="mt-12 text-center p-4 rounded-2xl bg-[#031526]/60 border border-[#0A9BE0]/25 text-xs text-slate-300 max-w-2xl mx-auto">
          <span className="text-[#B4F000] font-bold">Interlocking Advantage:</span> Mobility drives physical curiosity → Promoters convert interest into instant sales → Lifestyle trips generate lasting brand loyalty.
        </div>

      </div>
    </section>
  );
}
