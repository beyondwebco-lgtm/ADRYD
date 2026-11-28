'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, TrendingUp, Users, QrCode, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { FOOTFALL_LOCATIONS, FUNNEL_METRICS } from '@/data/brandActivationData';

export default function FootfallSection() {
  return (
    <section id="footfall" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Hyperlocal Footfall Capture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            GO WHERE YOUR CUSTOMERS ARE.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Intercept high-density urban footfall corridors during peak lunch and evening shopping hours. Transform passive pedestrians into active brand patrons.
          </p>
        </div>

        {/* 10 Footfall Locations Grid */}
        <div className="mb-16">
          <h3 className="text-xs font-bold uppercase tracking-wider text-center text-white/60 mb-6 font-mono">
            Target Deployment Corridors &amp; High-Footfall Zones
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {FOOTFALL_LOCATIONS.map((loc, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#030C16] border border-white/10 hover:border-[#0A9BE0]/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B4F000] shrink-0" />
                  <h4 className="text-xs font-bold text-white">{loc.name}</h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Day Campaign Conversion Funnel */}
        <div className="p-8 rounded-3xl bg-[#031120] border-2 border-[#0A9BE0]/40 shadow-xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 mb-8 gap-2">
            <div>
              <span className="text-xs font-mono uppercase text-[#B4F000] font-bold">Illustrative Conversion Funnel</span>
              <h3 className="text-2xl font-black text-white mt-0.5">3-Day Saturation Campaign Metrics</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#0A9BE0]/20 text-[#0A9BE0] border border-[#0A9BE0]/30 text-xs font-mono font-bold self-start sm:self-auto">
              BENCHMARK SIMULATION
            </span>
          </div>

          <div className="space-y-4">
            {FUNNEL_METRICS.map((m, idx) => {
              const widthPct = Math.max(15, 100 - idx * 18);
              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-white">{m.stage}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-white/60 text-xs">{m.pct}</span>
                      <span className="font-mono font-black text-base text-[#B4F000]">
                        {m.count.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-3 rounded-full bg-white/[0.05] overflow-hidden p-0.5 border border-white/10">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${widthPct}%`,
                        backgroundColor: m.color,
                      }}
                    />
                  </div>
                  <div className="text-[11px] text-slate-400">{m.label}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#010810] p-4 rounded-2xl border border-white/10">
            <div>
              <span className="text-[11px] font-mono uppercase text-slate-400 block">Illustrative Output</span>
              <span className="text-xl font-black text-white">60 Completed Orders × ₹1,500 AOV</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] font-mono uppercase text-[#B4F000] block">Gross Product Sales</span>
              <span className="text-2xl font-black text-[#B4F000]">₹90,000</span>
            </div>
          </div>

          <div className="mt-4 text-[11px] text-slate-500 font-mono text-center">
            *Planning conversion targets based on commercial proposal modeling. Actual performance varies with product category, pricing, season, and corridor permissions.
          </div>
        </div>

      </div>
    </section>
  );
}
