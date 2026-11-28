'use client';

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
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    isActive
                      ? 'bg-[#B4F000] text-black shadow-md'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
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
