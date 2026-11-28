const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'components', 'brand-activation');

// 21. AnalyticsDashboardPreview.tsx
const analyticsContent = `'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BarChart3, MapPin, Package, Users, TrendingUp } from 'lucide-react';

const TABS = [
  { id: 'campaign', label: 'Campaign KPIs', icon: <BarChart3 className="w-4 h-4" /> },
  { id: 'city', label: 'City Breakdown', icon: <MapPin className="w-4 h-4" /> },
  { id: 'product', label: 'SKU Performance', icon: <Package className="w-4 h-4" /> },
  { id: 'promoter', label: 'Promoter Leaderboard', icon: <Users className="w-4 h-4" /> },
  { id: 'revenue', label: 'Revenue & ROI', icon: <TrendingUp className="w-4 h-4" /> },
];

export default function AnalyticsDashboardPreview() {
  const [activeTab, setActiveTab] = useState('campaign');

  return (
    <section id="analytics" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Telemetry &amp; Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            MEASURE WHAT MATTERS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Real-time entrepreneur telemetry tracking street impressions, QR lookbook scans, qualified conversations, completed orders, and net return on ad spend.
          </p>
        </div>

        {/* Dashboard Shell Container */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#031120] border-2 border-[#0A9BE0]/40 shadow-2xl overflow-hidden">
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-white/10 bg-[#020810] gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B4F000] animate-pulse" />
                <h3 className="text-lg font-bold text-white">ADRYD Campaign Intelligence Suite</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">Real-Time Commercial Telemetry Simulator</span>
            </div>

            <span className="px-3 py-1 rounded-full bg-[#0A9BE0]/20 text-[#0A9BE0] border border-[#0A9BE0]/30 text-xs font-mono font-bold self-start sm:self-auto">
              PROPOSED PLATFORM CAPABILITY
            </span>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 p-4 border-b border-white/10 overflow-x-auto no-scrollbar bg-[#030E1B]">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={\`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 \${
                    isActive
                      ? 'bg-[#B4F000] text-black shadow-md'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }\`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="p-6 sm:p-8">
            {activeTab === 'campaign' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-4 rounded-2xl bg-white/[0.04]">
                    <span className="text-2xl font-black text-white font-mono block">10,000</span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block mt-1">Pedestrian Reach</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.04]">
                    <span className="text-2xl font-black text-[#0A9BE0] font-mono block">400</span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block mt-1">QR Lookbook Scans</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.04]">
                    <span className="text-2xl font-black text-[#B4F000] font-mono block">60</span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block mt-1">Confirmed Orders</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.04]">
                    <span className="text-2xl font-black text-[#74D7FF] font-mono block">₹90,000</span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block mt-1">Gross Sales Generated</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-3 font-bold">Campaign Comparison Benchmark</h4>
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-white/10 text-slate-500 font-mono">
                        <th className="py-2">Duration</th>
                        <th className="py-2 text-center">Exposure</th>
                        <th className="py-2 text-center">QR Scans</th>
                        <th className="py-2 text-center">Orders</th>
                        <th className="py-2 text-right">Gross Target</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-mono text-slate-300">
                      <tr>
                        <td className="py-2.5 font-bold text-white">1-Day Flash</td>
                        <td className="py-2.5 text-center">2,000</td>
                        <td className="py-2.5 text-center">80</td>
                        <td className="py-2.5 text-center">12</td>
                        <td className="py-2.5 text-right text-[#0A9BE0]">₹18,000</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold text-[#B4F000]">3-Day Growth</td>
                        <td className="py-2.5 text-center">10,000</td>
                        <td className="py-2.5 text-center">400</td>
                        <td className="py-2.5 text-center">60</td>
                        <td className="py-2.5 text-right text-[#B4F000]">₹90,000</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold text-white">7-Day Blitz</td>
                        <td className="py-2.5 text-center">25,000</td>
                        <td className="py-2.5 text-center">1,000</td>
                        <td className="py-2.5 text-center">150</td>
                        <td className="py-2.5 text-right text-[#74D7FF]">₹2,25,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'city' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-3 font-bold">Pan-India Metro Performance</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-white/[0.02] flex justify-between items-center">
                      <span>Hyderabad (HITEC City / Jubilee Hills)</span>
                      <span className="text-[#B4F000] font-bold">46 Orders • ₹69,000</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] flex justify-between items-center">
                      <span>Bengaluru (Indiranagar / ORR)</span>
                      <span className="text-[#0A9BE0] font-bold">35 Orders • ₹52,500</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] flex justify-between items-center">
                      <span>Mumbai (Bandra / BKC)</span>
                      <span className="text-white font-bold">46 Orders • ₹69,000</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] flex justify-between items-center">
                      <span>Delhi NCR (Gurgaon / Saket)</span>
                      <span className="text-[#74D7FF] font-bold">46 Orders • ₹69,000</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'product' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-white/[0.03] flex justify-between items-center">
                  <div>
                    <span className="text-white font-bold block">Summer Linen Co-Ord Set</span>
                    <span className="text-slate-400 text-[10px]">SKU: FASHION-001 • Natural Beige</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#B4F000] font-bold text-sm">28 Orders</span>
                    <span className="text-slate-400 text-[10px] block">46.6% Share</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] flex justify-between items-center">
                  <div>
                    <span className="text-white font-bold block">Mandarin Collar Casual Shirt</span>
                    <span className="text-slate-400 text-[10px]">SKU: FASHION-002 • Olive Green</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#0A9BE0] font-bold text-sm">18 Orders</span>
                    <span className="text-slate-400 text-[10px] block">30.0% Share</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] flex justify-between items-center">
                  <div>
                    <span className="text-white font-bold block">Tailored Chino Trousers</span>
                    <span className="text-slate-400 text-[10px]">SKU: FASHION-003 • Navy Blue</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#74D7FF] font-bold text-sm">14 Orders</span>
                    <span className="text-slate-400 text-[10px] block">23.4% Share</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'promoter' && (
              <div className="space-y-2 font-mono text-xs">
                {[
                  { id: 'ADRYD-F104', name: 'Ananya Varma', scans: 142, orders: 25, value: '₹50,000', badge: 'Top Performer' },
                  { id: 'ADRYD-F102', name: 'Pooja Reddy', scans: 118, orders: 20, value: '₹40,000', badge: 'High Conversion' },
                  { id: 'ADRYD-F101', name: 'Vikram Sharma', scans: 96, orders: 15, value: '₹30,000', badge: 'Active Leader' },
                  { id: 'ADRYD-F103', name: 'Karthik Rao', scans: 64, orders: 10, value: '₹20,000', badge: 'Verified Partner' },
                ].map((p) => (
                  <div key={p.id} className="p-3 rounded-xl bg-white/[0.03] flex items-center justify-between">
                    <div>
                      <span className="text-white font-bold">{p.name}</span>
                      <span className="text-[#0A9BE0] text-[10px] ml-2">({p.id})</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-400">{p.scans} Scans</span>
                      <span className="text-[#B4F000] font-bold">{p.orders} Orders</span>
                      <span className="text-white font-bold">{p.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'revenue' && (
              <div className="p-4 rounded-2xl bg-white/[0.03] space-y-3 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-slate-300">Campaign Gross Revenue:</span>
                  <span className="text-white font-bold">₹90,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-slate-300">Direct Entrepreneur Share (90%):</span>
                  <span className="text-[#B4F000] font-bold">₹81,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-slate-300">Promoter Direct Sales Commission (6%):</span>
                  <span className="text-[#0A9BE0] font-bold">₹5,400</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-slate-300">Affiliate Repeat Pool (2%):</span>
                  <span className="text-[#74D7FF] font-bold">₹1,80,0</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-300">ADRYD Telemetry &amp; Gateway (2%):</span>
                  <span className="text-white font-bold">₹1,800</span>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
`;

// 22. ROICalculatorSection.tsx
const roiContent = `'use client';

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
                  <span className={\`text-2xl font-black font-mono \${remainingContribution >= 0 ? 'text-[#B4F000]' : 'text-red-400'}\`}>
                    ₹{remainingContribution.toLocaleString()}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">Estimated ROI</span>
                  <span className={\`text-3xl font-black font-mono \${Number(roi) >= 0 ? 'text-[#B4F000]' : 'text-red-400'}\`}>
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
`;

// 23. AdditionalOpportunitiesSection.tsx
const additionalContent = `'use client';

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
`;

// 24. EntrepreneurJourneySection.tsx
const journeyStepsContent = `'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { ENTREPRENEUR_JOURNEY_STEPS } from '@/data/brandActivationData';

export default function EntrepreneurJourneySection() {
  return (
    <section id="onboarding" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Structured Onboarding Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            FROM IDEA TO ACTIVATION.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            The 10-step operational timeline guiding business founders from initial profile registration to synchronized multi-city campaign execution.
          </p>
        </div>

        {/* 10-Step Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {ENTREPRENEUR_JOURNEY_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-4 rounded-2xl bg-[#030C16] border border-white/10 hover:border-[#0A9BE0]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="w-7 h-7 rounded-lg bg-[#0A9BE0]/15 text-[#0A9BE0] border border-[#0A9BE0]/30 text-xs font-mono font-bold flex items-center justify-center mb-3">
                  {step.step}
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5">{step.title}</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
`;

// 25. TechnologyEcosystemSection.tsx
const techContent = `'use client';

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
`;

// 26. BusinessSafeguardsSection.tsx
const safeguardsContent = `'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Shield, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const SAFEGUARDS = [
  {
    title: 'Commercial Contracts & Intellectual Property',
    desc: 'All brand activations require formal written partner agreements defining campaign duration, promoter apparel rights, sample return protocols, and intellectual property protections.',
  },
  {
    title: 'Commission Attribution & Settlement Payouts',
    desc: 'Promoter and affiliate commissions apply strictly to confirmed, completed, and non-refunded transactions. Automated payout schedules operate under standard commercial settlement windows.',
  },
  {
    title: 'Customer Data Privacy & Consent',
    desc: 'Shopper contact details collected via QR forms or pre-order registries adhere to strict data protection standards and are never sold to unauthorized third parties.',
  },
  {
    title: 'Public Space & Transit Permits',
    desc: 'All street-level promotional fleets and promoter staging stations operate in full compliance with municipal urban regulations, traffic police guidelines, and private campus permissions.',
  },
  {
    title: 'Travel Collaboration Safety & Insurance',
    desc: 'Fashion-tourism weekend getaways require verified licensed tour operator partners, individual travel insurance coverage, and signed participant consent documentation.',
  },
  {
    title: 'Sample Care, Sanitization & Replacement Terms',
    desc: 'Partner apparel is catalogued upon handover and treated with professional sanitization standards. Damage or loss during active operations is reimbursed under agreed replacement values.',
  },
];

export default function BusinessSafeguardsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="safeguards" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Compliance &amp; Operational Security</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            BUSINESS TRANSPARENCY &amp; SAFEGUARDS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Institutional-grade risk management frameworks, statutory municipal compliance, and clear legal boundaries protecting every stakeholder.
          </p>
        </div>

        {/* Accordions */}
        <div className="max-w-4xl mx-auto space-y-3">
          {SAFEGUARDS.map((s, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#030C16] border border-white/10 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-[#B4F000] shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-white">{s.title}</span>
                  </div>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3"
                    >
                      {s.desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Legal Links Footer */}
        <div className="mt-12 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
          <span>Review foundational website policies:</span>
          <Link href="/terms" className="text-[#0A9BE0] hover:text-[#B4F000] underline inline-flex items-center gap-1">
            <span>Terms &amp; Conditions</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
          <Link href="/privacy" className="text-[#0A9BE0] hover:text-[#B4F000] underline inline-flex items-center gap-1">
            <span>Privacy Policy</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
          <Link href="/partner-terms" className="text-[#0A9BE0] hover:text-[#B4F000] underline inline-flex items-center gap-1">
            <span>Partner Terms</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>

      </div>
    </section>
  );
}
`;

// 27. BrandActivationCTA.tsx
const ctaContent = `'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface BrandActivationCTAProps {
  prefilledItem?: string;
}

export default function BrandActivationCTA({ prefilledItem = '' }: BrandActivationCTAProps) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    category: 'Fashion & Apparel',
    campaignType: prefilledItem || '3-Day Fashion Brand Growth',
    targetCity: 'Hyderabad',
    budgetRange: '₹30,000 – ₹60,000',
    notes: '',
    agreed: false,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.businessName) {
      setErrorMessage('Please fill in your name, business name, and contact phone number.');
      setStatus('error');
      return;
    }

    if (!formData.agreed) {
      setErrorMessage('Please accept the privacy policy and commercial terms to proceed.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'brand-activation',
          name: formData.name,
          businessName: formData.businessName,
          phone: formData.phone,
          email: formData.email,
          category: formData.category,
          campaignType: formData.campaignType,
          targetCity: formData.targetCity,
          budgetRange: formData.budgetRange,
          notes: formData.notes,
          source: 'brand-activation-page',
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit enquiry. Please try again.');
      }

      setStatus('success');
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please check your connection.');
      setStatus('error');
    }
  };

  return (
    <section id="enquire" className="relative py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch Your Brand</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            MOVE YOUR BRAND. MULTIPLY YOUR REACH. GROW YOUR BUSINESS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Take your products directly to thousands of high-intent urban shoppers. Fill out the commercial enquiry form below to receive a custom activation proposal within 24 hours.
          </p>
        </div>

        {/* Enquiry Form Container */}
        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-[#031526] border-2 border-[#0A9BE0]/40 shadow-2xl">
          {status === 'success' ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#B4F000]/20 text-[#B4F000] border-2 border-[#B4F000]/40 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase">Enquiry Successfully Submitted!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for your interest in ADRYD Brand Activation. Our campaign strategy team will review your business requirements and contact you via phone or email within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#B4F000] text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Business / Brand Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Brand or boutique name"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#B4F000] text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#B4F000] text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@brand.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#B4F000] text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Product Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#B4F000] text-sm text-white outline-none"
                  >
                    <option value="Fashion & Apparel">Fashion &amp; Apparel</option>
                    <option value="Footwear & Bags">Footwear &amp; Bags</option>
                    <option value="Jewelry & Accessories">Jewelry &amp; Accessories</option>
                    <option value="Cosmetics & Wellness">Cosmetics &amp; Wellness</option>
                    <option value="Technology & Gadgets">Technology &amp; Gadgets</option>
                    <option value="Food & Artisanal FMCG">Food &amp; Artisanal FMCG</option>
                    <option value="Travel & Tourism">Travel &amp; Tourism</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Preferred Campaign
                  </label>
                  <select
                    name="campaignType"
                    value={formData.campaignType}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#B4F000] text-sm text-white outline-none"
                  >
                    <option value="1-Day Instant Fashion Promotion">1-Day Instant Promotion</option>
                    <option value="3-Day Fashion Brand Growth">3-Day Brand Growth</option>
                    <option value="7-Day Fashion Market Expansion">7-Day Market Expansion</option>
                    <option value="Pan-India Multi-City Blitz">Pan-India Multi-City Blitz</option>
                    <option value="Fashion × Tourism Collaboration">Tourism Collaboration</option>
                    <option value="Custom Bespoke Activation">Custom Bespoke Activation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Target City
                  </label>
                  <select
                    name="targetCity"
                    value={formData.targetCity}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#B4F000] text-sm text-white outline-none"
                  >
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Kochi">Kochi</option>
                    <option value="Jaipur">Jaipur</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                  Specific Requirements or Target Corridors
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us about your brand collection, target launch date, or preferred retail areas..."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#B4F000] text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="agreed"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded accent-[#B4F000] cursor-pointer"
                />
                <label htmlFor="agreed" className="text-xs text-slate-400 cursor-pointer leading-relaxed">
                  I agree to receive campaign planning communications from ADRYD and acknowledge the commercial terms and privacy policy.
                </label>
              </div>

              {status === 'error' && errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-full bg-[#B4F000] hover:bg-[#c5fc1b] text-black font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(180,240,0,0.4)] transition-all disabled:opacity-50 cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Brand Activation Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(dir, 'AnalyticsDashboardPreview.tsx'), analyticsContent, 'utf8');
fs.writeFileSync(path.join(dir, 'ROICalculatorSection.tsx'), roiContent, 'utf8');
fs.writeFileSync(path.join(dir, 'AdditionalOpportunitiesSection.tsx'), additionalContent, 'utf8');
fs.writeFileSync(path.join(dir, 'EntrepreneurJourneySection.tsx'), journeyStepsContent, 'utf8');
fs.writeFileSync(path.join(dir, 'TechnologyEcosystemSection.tsx'), techContent, 'utf8');
fs.writeFileSync(path.join(dir, 'BusinessSafeguardsSection.tsx'), safeguardsContent, 'utf8');
fs.writeFileSync(path.join(dir, 'BrandActivationCTA.tsx'), ctaContent, 'utf8');

console.log('Created Analytics, ROI, Additional, Journey, Tech, Safeguards, and CTA sections');
