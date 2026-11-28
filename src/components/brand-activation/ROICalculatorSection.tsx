'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calculator, ShieldCheck } from 'lucide-react';

export default function ROICalculatorSection() {
  const [grossSales, setGrossSales] = useState(90000);
  const [productCostPct, setProductCostPct] = useState(45);
  const [commissionPct, setCommissionPct] = useState(10);
  const [campaignFee, setCampaignFee] = useState(30000);
  const [extraExpenses, setExtraExpenses] = useState(0);

  const productCost = (grossSales * productCostPct) / 100;
  const commission = (grossSales * commissionPct) / 100;
  const remainingContribution = grossSales - productCost - commission - campaignFee - extraExpenses;
  const roi = campaignFee > 0 ? ((remainingContribution / campaignFee) * 100).toFixed(1) : '0';

  return (
    <section id="roi-calculator" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Unit Economics Planner</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            CALCULATE YOUR CAMPAIGN RETURN.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Model your unit economics, COGS, sales commissions, and net campaign contribution with precision before launching.
          </p>
        </div>

        {/* Interactive Calculator Shell */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-[#031526] border-2 border-[#0A9BE0]/40 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Left Column: Inputs */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">Campaign Assumptions</h3>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-300">Target Gross Sales (₹):</span>
                  <span className="font-mono text-[#B4F000] font-bold">₹{grossSales.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="30000"
                  max="500000"
                  step="10000"
                  value={grossSales}
                  onChange={(e) => setGrossSales(Number(e.target.value))}
                  className="w-full accent-[#B4F000] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-300">Product COGS (%):</span>
                  <span className="font-mono text-white font-bold">{productCostPct}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="80"
                  step="5"
                  value={productCostPct}
                  onChange={(e) => setProductCostPct(Number(e.target.value))}
                  className="w-full accent-[#0A9BE0] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-300">Sales Commission (%):</span>
                  <span className="font-mono text-[#74D7FF] font-bold">{commissionPct}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="1"
                  value={commissionPct}
                  onChange={(e) => setCommissionPct(Number(e.target.value))}
                  className="w-full accent-[#74D7FF] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-300">Campaign Fee (₹):</span>
                  <span className="font-mono text-white font-bold">₹{campaignFee.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="9000"
                  max="100000"
                  step="5000"
                  value={campaignFee}
                  onChange={(e) => setCampaignFee(Number(e.target.value))}
                  className="w-full accent-white cursor-pointer"
                />
              </div>
            </div>

            {/* Right Column: Dynamic Financial Results */}
            <div className="p-6 rounded-2xl bg-[#010810] border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">Net Financial Output</h3>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Gross Sales:</span>
                  <span className="text-white font-bold">₹{grossSales.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Less Product Cost ({productCostPct}%):</span>
                  <span className="text-red-400">-₹{productCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Less Commissions ({commissionPct}%):</span>
                  <span className="text-red-400">-₹{commission.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Less Campaign Booking Fee:</span>
                  <span className="text-red-400">-₹{campaignFee.toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-[#0A9BE0]/40 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">Remaining Contribution</span>
                  <span className={`text-2xl font-black font-mono ${remainingContribution >= 0 ? 'text-[#B4F000]' : 'text-red-400'}`}>
                    ₹{remainingContribution.toLocaleString()}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">Estimated ROI</span>
                  <span className={`text-3xl font-black font-mono ${Number(roi) >= 0 ? 'text-[#B4F000]' : 'text-red-400'}`}>
                    {roi}%
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-4 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
            <ShieldCheck className="w-4 h-4 text-[#B4F000] inline-block mr-1" />
            <span>The ROI calculator is a planning simulation tool, not a financial guarantee or legal revenue forecast. Results vary with seasonal demand, inventory fulfillment, and customer return rates.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
