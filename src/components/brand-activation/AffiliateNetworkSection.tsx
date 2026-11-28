'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Share2, Award, Calendar, Repeat, ShieldCheck } from 'lucide-react';
import { ILLUSTRATIVE_AFFILIATE_DATA } from '@/data/brandActivationData';

export default function AffiliateNetworkSection() {
  const totalOrders = ILLUSTRATIVE_AFFILIATE_DATA.reduce((acc, row) => acc + row.orders, 0);
  const totalSales = ILLUSTRATIVE_AFFILIATE_DATA.reduce((acc, row) => acc + row.salesValue, 0);
  const totalCommission = ILLUSTRATIVE_AFFILIATE_DATA.reduce((acc, row) => acc + row.commission, 0);

  return (
    <section id="affiliate" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Affiliate &amp; Repeat Commerce</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            ONE CAMPAIGN. CONTINUING OPPORTUNITIES.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Registered campaign promoters don&apos;t disappear after day one. Each promoter receives a persistent affiliate identity, generating sales over a 12-month attribution window.
          </p>
        </div>

        {/* 4 Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-[#030C16] border border-white/10">
            <Share2 className="w-5 h-5 text-[#B4F000] mb-3" />
            <h4 className="text-sm font-bold text-white">Unique Promoter IDs</h4>
            <p className="text-xs text-slate-300 mt-1">Lanyard badges &amp; personal QR codes linking directly to brand catalog.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#030C16] border border-white/10">
            <Calendar className="w-5 h-5 text-[#0A9BE0] mb-3" />
            <h4 className="text-sm font-bold text-white">12-Month Attribution</h4>
            <p className="text-xs text-slate-300 mt-1">Customers who scan once remain attributed to the promoter for 1 full year.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#030C16] border border-white/10">
            <Repeat className="w-5 h-5 text-[#74D7FF] mb-3" />
            <h4 className="text-sm font-bold text-white">Repeat-Purchase Equity</h4>
            <p className="text-xs text-slate-300 mt-1">Promoters earn commissions on repeat purchases, incentivizing genuine advocacy.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#030C16] border border-white/10">
            <ShieldCheck className="w-5 h-5 text-white mb-3" />
            <h4 className="text-sm font-bold text-white">Direct Settlement</h4>
            <p className="text-xs text-slate-300 mt-1">Commissions apply strictly to completed, non-refunded retail orders.</p>
          </div>
        </div>

        {/* Illustrative Performance Data Table */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#03101E] border border-[#0A9BE0]/30 shadow-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 mb-6 gap-2">
            <div>
              <h3 className="text-lg font-bold text-white">Illustrative Affiliate Performance Benchmark</h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">Sample Campaign: 4 Promoters / ₹2,000 Average Order Value</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#B4F000]/15 text-[#B4F000] border border-[#B4F000]/30 text-xs font-mono font-bold self-start sm:self-auto">
              SAMPLE DATA
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono uppercase text-[11px]">
                  <th className="py-3 px-2">Promoter ID</th>
                  <th className="py-3 px-2">Promoter Name</th>
                  <th className="py-3 px-2 text-center">Orders</th>
                  <th className="py-3 px-2 text-right">Avg Order Value</th>
                  <th className="py-3 px-2 text-right">Gross Sales</th>
                  <th className="py-3 px-2 text-right">Commission (6%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {ILLUSTRATIVE_AFFILIATE_DATA.map((row) => (
                  <tr key={row.promoterId} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-2 font-mono text-[#0A9BE0] font-bold">{row.promoterId}</td>
                    <td className="py-3.5 px-2 font-medium text-white">{row.name}</td>
                    <td className="py-3.5 px-2 text-center font-bold">{row.orders}</td>
                    <td className="py-3.5 px-2 text-right font-mono text-slate-300">₹{row.avgOrderValue.toLocaleString()}</td>
                    <td className="py-3.5 px-2 text-right font-mono font-bold text-white">₹{row.salesValue.toLocaleString()}</td>
                    <td className="py-3.5 px-2 text-right font-mono font-bold text-[#B4F000]">₹{row.commission.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-[#0A9BE0]/40 font-bold text-white text-xs sm:text-sm">
                  <td className="py-4 px-2 uppercase font-mono" colSpan={2}>Campaign Total</td>
                  <td className="py-4 px-2 text-center text-[#B4F000]">{totalOrders}</td>
                  <td className="py-4 px-2 text-right font-mono text-slate-300">₹2,000</td>
                  <td className="py-4 px-2 text-right font-mono text-[#74D7FF]">₹{totalSales.toLocaleString()}</td>
                  <td className="py-4 px-2 text-right font-mono text-[#B4F000]">₹{totalCommission.toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
            <span className="font-bold text-white">Legal &amp; Operational Qualification:</span> Illustrative affiliate performance figures provided for financial modeling. Commissions apply exclusively to eligible, non-refunded transactions under signed partner agreements. ADRYD does not guarantee specific order volumes or lifetime income.
          </div>
        </div>

      </div>
    </section>
  );
}
