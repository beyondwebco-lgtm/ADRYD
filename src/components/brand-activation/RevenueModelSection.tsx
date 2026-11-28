'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, DollarSign, PieChart, ShieldCheck, ArrowRight } from 'lucide-react';

export default function RevenueModelSection() {
  const [grossSales, setGrossSales] = useState(500000);

  // 90 / 6 / 2 / 2 proposed split
  const entrepreneurShare = grossSales * 0.90;
  const promoterShare = grossSales * 0.06;
  const affiliateShare = grossSales * 0.02;
  const adrydShare = grossSales * 0.02;

  return (
    <section id="revenue" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Performance-Aligned Split</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            UNDERSTAND YOUR NUMBERS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            The proposed ADRYD commercial revenue model guarantees that the entrepreneur keeps 90% of gross eligible product sales, while 10% fuels promoter commissions, rider incentives, and platform logistics.
          </p>
        </div>

        {/* Interactive Revenue Calculator Container */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-[#031526] border-2 border-[#0A9BE0]/40 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#B4F000] font-bold">Interactive Revenue Allocation</span>
              <h3 className="text-2xl font-black text-white mt-0.5">Proposed 90 / 6 / 2 / 2 Commercial Split</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#0A9BE0]/20 text-[#0A9BE0] border border-[#0A9BE0]/30 text-xs font-mono font-bold self-start sm:self-auto">
              PROPOSED PLATFORM MODEL
            </span>
          </div>

          {/* Gross Sales Slider */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-sm font-semibold mb-2">
              <span className="text-slate-300">Illustrative Gross Eligible Sales:</span>
              <span className="font-mono text-2xl font-black text-[#B4F000]">
                ₹{grossSales.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="100000"
              max="5000000"
              step="50000"
              value={grossSales}
              onChange={(e) => setGrossSales(Number(e.target.value))}
              className="w-full accent-[#B4F000] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
              <span>₹1,00,000</span>
              <span>₹25,00,000</span>
              <span>₹50,00,000</span>
            </div>
          </div>

          {/* Visual Percentage Allocation Bar */}
          <div className="mb-8 space-y-2">
            <div className="w-full h-5 rounded-full overflow-hidden flex bg-white/5 border border-white/10 p-0.5">
              <div style={{ width: '90%' }} className="h-full bg-[#B4F000] rounded-l-full" title="Entrepreneur: 90%" />
              <div style={{ width: '6%' }} className="h-full bg-[#0A9BE0]" title="Promoter: 6%" />
              <div style={{ width: '2%' }} className="h-full bg-[#74D7FF]" title="Affiliate Pool: 2%" />
              <div style={{ width: '2%' }} className="h-full bg-white rounded-r-full" title="ADRYD Platform: 2%" />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              <span className="text-[#B4F000] font-bold">90% Entrepreneur</span>
              <span className="text-[#0A9BE0]">6% Promoter</span>
              <span className="text-[#74D7FF]">2% Affiliate</span>
              <span className="text-white">2% ADRYD</span>
            </div>
          </div>

          {/* Itemized 4-Part Financial Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-center">
            <div className="p-4 rounded-2xl bg-[#B4F000]/10 border border-[#B4F000]/30">
              <span className="text-xs font-mono uppercase text-[#B4F000] font-bold block">Entrepreneur (90%)</span>
              <span className="text-xl font-black text-white font-mono block mt-1">
                ₹{entrepreneurShare.toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-300 block mt-1">Direct Brand Retained Receipts</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <span className="text-xs font-mono uppercase text-[#0A9BE0] font-bold block">Promoter (6%)</span>
              <span className="text-xl font-black text-white font-mono block mt-1">
                ₹{promoterShare.toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-300 block mt-1">Direct Sales Commission</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <span className="text-xs font-mono uppercase text-[#74D7FF] font-bold block">Affiliate / Fleet (2%)</span>
              <span className="text-xl font-black text-white font-mono block mt-1">
                ₹{affiliateShare.toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-300 block mt-1">Repeat Referral Pool</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
              <span className="text-xs font-mono uppercase text-white font-bold block">ADRYD Platform (2%)</span>
              <span className="text-xl font-black text-white font-mono block mt-1">
                ₹{adrydShare.toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-300 block mt-1">QR Telemetry &amp; Settlements</span>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
            <ShieldCheck className="w-4 h-4 text-[#B4F000] inline-block mr-1" />
            <span><strong>Transparent Commercial Qualification:</strong> Percentages reflect proposed commercial allocations. Gross receipts do not represent net profit; manufacturing costs, GST, payment gateway charges, shipping, and customer returns apply separately under written commercial contracts.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
