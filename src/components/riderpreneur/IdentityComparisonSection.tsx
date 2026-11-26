'use client';

import { X, Check, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface ComparisonRow {
  dimension: string;
  traditional: string;
  riderpreneur: string;
}

const COMPARISONS: ComparisonRow[] = [
  {
    dimension: 'Daily Identity',
    traditional: 'Anonymous delivery worker hurrying to drop food packages without direct customer value.',
    riderpreneur: 'Recognized Brand Ambassador, direct sales partner & certified on-ground marketing lead.',
  },
  {
    dimension: 'Earning Model',
    traditional: 'Purely piece-rate per drop (₹30–₹50). Zero income during idle traffic signals or rain pauses.',
    riderpreneur: 'Corridor hourly visibility retainers + sampling commissions + recurring digital affiliate royalties.',
  },
  {
    dimension: 'Fuel & Fleet Expenses',
    traditional: 'Heavy petrol costs (₹250–₹400/day) eating away 35% of daily gross income, plus frequent maintenance.',
    riderpreneur: '100% Electric mobility. Low-cost EV charging (~₹25–₹40/day) with sponsored fleet rental options.',
  },
  {
    dimension: 'Skill Progression',
    traditional: 'No transferable skills gained; same repetitive delivery tasks year after year.',
    riderpreneur: 'Certified training in product pitching, consumer engagement, mobile content production & fleet logistics.',
  },
  {
    dimension: 'Long-term Career Path',
    traditional: 'Dead-end gig work. No titles, no bonuses, zero seniority benefits regardless of tenure.',
    riderpreneur: '10-level structured ladder (Starter to Antique) with micro-fleet agency ownership and equity perks.',
  },
  {
    dimension: 'Lifestyle & Community',
    traditional: 'Isolated solo riding under stressful algorithmic delivery timers and penalties.',
    riderpreneur: 'Synchronized fleet convoys, peer leadership council, startup founder mixers & sponsored vacations.',
  },
];

export default function IdentityComparisonSection() {
  return (
    <section className="relative py-20 bg-[#000000] border-t border-[#0A9BE0]/20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F000]/10 border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider text-[#B4F000]">
            The Paradigm Shift
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            FROM DELIVERY RIDER TO{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] to-[#0A9BE0]">
              MARKETING PROFESSIONAL
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Compare the realities of conventional gig delivery against the transformative potential of the ADRYD Riderpreneur ecosystem.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: Traditional Delivery Rider */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#0a0505]/80 border border-red-500/20 backdrop-blur-md relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-red-500/20 mb-6">
                <div>
                  <span className="text-[11px] font-bold text-red-400 uppercase tracking-widest block">
                    The Status Quo
                  </span>
                  <h3 className="text-2xl font-black text-slate-200 mt-1">Traditional Gig Delivery</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-6">
                {COMPARISONS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="mt-1 rounded-full p-1 bg-red-500/15 text-red-400 shrink-0">
                      <X className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-slate-400">
                        {item.dimension}
                      </div>
                      <p className="text-sm text-slate-300 mt-1 leading-snug">
                        {item.traditional}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-red-500/20 text-center">
              <span className="text-xs text-red-400 font-semibold">
                High burnout, zero career equity, flat linear income.
              </span>
            </div>
          </div>

          {/* Column 2: ADRYD Riderpreneur */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#03111f]/90 border-2 border-[#B4F000]/60 backdrop-blur-md relative flex flex-col justify-between shadow-[0_15px_40px_rgba(10,155,224,0.25)]">
            {/* Top highlight ribbon */}
            <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-[#B4F000] text-[#000000] text-xs font-black tracking-wider uppercase shadow-md">
              The ADRYD Advantage
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#0A9BE0]/30 mb-6">
                <div>
                  <span className="text-[11px] font-bold text-[#B4F000] uppercase tracking-widest block">
                    The Future
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">ADRYD Riderpreneur</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#B4F000]/20 border border-[#B4F000]/50 flex items-center justify-center text-[#B4F000]">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-6">
                {COMPARISONS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="mt-1 rounded-full p-1 bg-[#B4F000]/20 text-[#B4F000] shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-[#0A9BE0]">
                        {item.dimension}
                      </div>
                      <p className="text-sm text-white font-medium mt-1 leading-snug">
                        {item.riderpreneur}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0A9BE0]/30 flex items-center justify-between">
              <span className="text-xs text-[#B4F000] font-bold">
                Multiple income streams, compounding career progression.
              </span>
              <span className="text-xs font-mono font-bold text-white bg-[#0A9BE0]/20 px-2.5 py-1 rounded-full border border-[#0A9BE0]/40">
                100% Electric
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
