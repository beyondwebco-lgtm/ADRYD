'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building, Sparkles, Check, XCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { SHOWROOM_INVESTMENT } from '@/data/brandActivationData';

export default function TheAdrydAdvantage() {
  return (
    <section id="advantage" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>The ADRYD Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            YOUR BRAND. BEYOND THE SHOWROOM.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            ADRYD combines active mobility, personal human interaction, digital product discovery and live commerce into one high-conversion system.
          </p>
        </div>

        {/* 2-Column Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Traditional Model */}
          <div className="p-8 rounded-3xl bg-[#040B13] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-red-400 block font-bold">Traditional Approach</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">Physical Retail Showroom</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-slate-300">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Heavy Upfront Capital:</strong> ₹4,00,000+ sunk into security deposits, interior fitouts, lighting and fixtures.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Fixed-Location Dependency:</strong> Waiting for walk-in shoppers who happen to pass one specific storefront.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Disconnected Marketing:</strong> Separate budget required for print ads, billboards, and local social boosts.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Inventory Risk:</strong> Must manufacture complete inventory runs before knowing if styles resonate with local shoppers.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-slate-400 font-mono">
              High risk commitment before verifying product-market fit.
            </div>
          </div>

          {/* Right Column: ADRYD Activation Model */}
          <div className="p-8 rounded-3xl bg-[#031526] border-2 border-[#0A9BE0]/50 shadow-[0_0_40px_rgba(10,155,224,0.15)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B4F000]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#0A9BE0]/30 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-[#B4F000] block font-bold">ADRYD Model</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">Mobile Brand Activation</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-slate-200">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Zero Showroom Overhead:</strong> Deploy campaigns starting at ₹30,000 with zero long-term lease liabilities.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Active Transit Saturation:</strong> Branded EV fleets and promoters proactively target high-traffic tech parks &amp; high streets.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Live Promoters Wearing Apparel:</strong> Customers touch, feel, and see fabric styled in daylight conditions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#B4F000] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Pre-Orders &amp; Affiliate Attribution:</strong> Collect advance deposits to validate demand, backed by 12-month affiliate repeat sales.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#0A9BE0]/30 text-xs text-[#74D7FF] font-semibold flex items-center justify-between">
              <span>Rapid multi-corridor deployment within 48 hours</span>
              <span className="text-[#B4F000] font-bold">73.6% Capital Saved</span>
            </div>
          </div>
        </div>

        {/* Validation Callout Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#04101D] border border-[#0A9BE0]/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B4F000]" />
              <span>Market Validation Before Heavy Capital Commitment</span>
            </h4>
            <p className="text-sm text-[#94A3B8]">
              ADRYD does not replace permanent flagship retail. We empower entrepreneurs to test consumer appetite, sizing preferences, and pricing elasticity on city streets before signing multi-year commercial leases.
            </p>
          </div>
          <a
            href="#enquire"
            className="px-6 py-3 rounded-full bg-[#0A9BE0] hover:bg-[#0889c7] text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-md transition-all shrink-0"
          >
            Validate Demand Now →
          </a>
        </div>

      </div>
    </section>
  );
}
