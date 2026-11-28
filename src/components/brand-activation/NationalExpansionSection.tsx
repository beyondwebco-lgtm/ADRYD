'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin, ChevronRight, ChevronDown, ChevronUp, Globe2, Building2 } from 'lucide-react';
import { EXPANSION_CITIES, EXPANSION_PHASES, ExpansionCity } from '@/data/brandActivationData';

export default function NationalExpansionSection() {
  const [selectedCity, setSelectedCity] = useState<ExpansionCity>(EXPANSION_CITIES[0]);
  const [breakdownOpen, setBreakdownOpen] = useState(false);

  return (
    <section id="national" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proposed National Expansion Network</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            ONE BRAND. MULTIPLE CITIES.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            A synchronized multi-city campaign network deploying 140 promoters across 10 top metropolitan commerce hubs. Synchronized brand launches without permanent real estate overhead.
          </p>
        </div>

        {/* 2-Column: Interactive India Map + City Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* India SVG Map (7 cols) */}
          <div className="lg:col-span-7 p-6 rounded-3xl bg-[#031120] border-2 border-[#0A9BE0]/40 shadow-xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <span className="text-xs font-mono uppercase text-[#0A9BE0] font-bold">10 Metros • 140 Promoters</span>
              <span className="text-[11px] font-mono text-white/50">CLICK CITY NODE TO INSPECT</span>
            </div>

            {/* SVG Visual Container */}
            <div className="relative w-full aspect-[4/3] bg-[#010810] rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Connecting Route Lines */}
                <path
                  d="M48,62 L44,74 L53,77 L42,86 L33,60 L30,56 L26,45 L34,36 L38,30 L73,46 Z"
                  fill="none"
                  stroke="#0A9BE0"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                  className="opacity-40"
                />

                {/* City Nodes */}
                {EXPANSION_CITIES.map((city) => {
                  const isSelected = selectedCity.id === city.id;
                  return (
                    <g
                      key={city.id}
                      onClick={() => setSelectedCity(city)}
                      className="cursor-pointer group"
                    >
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={isSelected ? 4 : 2.5}
                        fill={isSelected ? '#B4F000' : '#0A9BE0'}
                        className="transition-all duration-200"
                      />
                      {isSelected && (
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r={6}
                          fill="none"
                          stroke="#B4F000"
                          strokeWidth="0.8"
                          className="animate-ping"
                        />
                      )}
                      <text
                        x={city.x + 3.5}
                        y={city.y + 1}
                        fill={isSelected ? '#FFFFFF' : '#94A3B8'}
                        fontSize="3.2"
                        fontFamily="monospace"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                      >
                        {city.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Selected City Details Card (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#030E1B] border-2 border-[#0A9BE0]/40 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#B4F000] font-bold">Phase {selectedCity.phase} Metro</span>
                <h3 className="text-3xl font-black text-white mt-0.5">{selectedCity.name}</h3>
                <span className="text-xs text-slate-400 font-mono">{selectedCity.state}</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-[#0A9BE0] font-mono block">
                  {selectedCity.promoters}
                </span>
                <span className="text-[10px] text-slate-400 font-mono block">Promoters Allocated</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-white/[0.04]">
                <strong className="text-white block mb-1">Target Retail Corridors:</strong>
                <p className="text-slate-300 leading-relaxed">{selectedCity.corridors}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.04]">
                <strong className="text-white block mb-1">Campaign Strategy &amp; Audience:</strong>
                <p className="text-slate-300 leading-relaxed">{selectedCity.focus}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Ready for booking</span>
              <a href="#enquire" className="text-[#B4F000] font-bold hover:underline">
                Select {selectedCity.name} →
              </a>
            </div>
          </div>
        </div>

        {/* 4 Expansion Phases Grid */}
        <div className="mb-12">
          <h3 className="text-xs font-bold uppercase tracking-wider text-center text-white/60 mb-6 font-mono">
            4-Phase Rollout Roadmap
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXPANSION_PHASES.map((ph) => (
              <div key={ph.phase} className="p-5 rounded-2xl bg-[#030C16] border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#B4F000]">Phase {ph.phase}</span>
                  <span className="text-[10px] font-mono text-white/50">{ph.timeline}</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{ph.title}</h4>
                <p className="text-xs text-[#0A9BE0] font-semibold mb-2">{ph.cities}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{ph.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable National Campaign Simulation */}
        <div className="p-6 rounded-2xl bg-[#040E1B] border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Illustrative Pan-India Campaign Performance Example
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Campaign Budget: ₹2,00,000 across 10 Cities | 320 Orders | ₹4,80,000 Gross Sales Target
              </p>
            </div>
            <button
              type="button"
              onClick={() => setBreakdownOpen(!breakdownOpen)}
              className="text-xs font-bold text-[#0A9BE0] hover:text-[#B4F000] flex items-center gap-1 transition-colors"
            >
              <span>{breakdownOpen ? 'Hide Simulation' : 'View City-Wise Split'}</span>
              {breakdownOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          <AnimatePresence>
            {breakdownOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-6 border-t border-white/10 mt-4 overflow-x-auto text-xs sm:text-sm text-slate-300"
              >
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400 font-mono uppercase text-[11px]">
                      <th className="py-2 px-2">City</th>
                      <th className="py-2 px-2">Budget Allocated</th>
                      <th className="py-2 px-2 text-center">Promoters</th>
                      <th className="py-2 px-2 text-center">Projected Orders</th>
                      <th className="py-2 px-2 text-right">Projected Sales (AOV ₹1,500)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-mono">
                    {EXPANSION_CITIES.map((c) => {
                      const cityOrders = c.promoters * 2.3;
                      const citySales = cityOrders * 1500;
                      return (
                        <tr key={c.id}>
                          <td className="py-2.5 px-2 text-white font-medium">{c.name}</td>
                          <td className="py-2.5 px-2 text-slate-300">₹{(c.promoters * 1428).toFixed(0)}</td>
                          <td className="py-2.5 px-2 text-center text-[#B4F000] font-bold">{c.promoters}</td>
                          <td className="py-2.5 px-2 text-center text-[#0A9BE0]">{Math.round(cityOrders)}</td>
                          <td className="py-2.5 px-2 text-right text-white">₹{Math.round(citySales).toLocaleString()}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
