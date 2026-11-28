const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'components', 'brand-activation');

// 16. TravelExperiencesSection.tsx
const travelContent = `'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Palmtree, ChevronDown, ChevronUp, Users, ArrowRight, Shield, Check } from 'lucide-react';

export default function TravelExperiencesSection() {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <section id="travel" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Fashion × Tourism Synergy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            TRAVEL. EXPERIENCE. DISCOVER.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Co-brand weekend getaways, hill-station tours, and corporate retreats. Brand promoters wear your apparel while vacationing alongside paying tourists, capturing lifestyle social media content in scenic settings.
          </p>
        </div>

        {/* 3-Party Collaboration Flowchart */}
        <div className="p-8 rounded-3xl bg-[#031120] border-2 border-[#0A9BE0]/40 shadow-xl mb-12">
          <h3 className="text-xl font-black text-white uppercase mb-8 text-center">
            The Three-Party Collaboration Triad
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#0A9BE0]/20 text-[#0A9BE0] border border-[#0A9BE0]/30 mx-auto flex items-center justify-center font-bold">
                01
              </div>
              <h4 className="text-base font-bold text-white">Fashion Entrepreneur</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Supplies apparel samples, vacation wardrobe sets, and co-sponsors trip media production.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#B4F000]/20 text-[#B4F000] border border-[#B4F000]/30 mx-auto flex items-center justify-center font-bold">
                02
              </div>
              <h4 className="text-base font-bold text-white">Tourism Partner</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Manages tour itineraries, resort stays, luxury travel transit, and ticket bookings for paying tourists.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#74D7FF]/20 text-[#74D7FF] border border-[#74D7FF]/30 mx-auto flex items-center justify-center font-bold">
                03
              </div>
              <h4 className="text-base font-bold text-white">ADRYD Platform</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Deploys trained promoters, manages content creators, logs on-trip QR sales, and settles commissions.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Travel Formats Grid */}
        <div className="mb-12">
          <h3 className="text-xs font-bold uppercase tracking-wider text-center text-white/60 mb-6 font-mono">
            Supported Collaborative Travel Formats
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {[
              '1-Day Outings',
              'Weekend Escapes',
              'Holiday Retreats',
              'Adventure Treks',
              'College Group Tours',
              'Destination Pop-Ups',
            ].map((f, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#030C16] border border-white/10">
                <Palmtree className="w-4 h-4 text-[#B4F000] mx-auto mb-1.5" />
                <span className="text-xs font-semibold text-white">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable 3-Day Tourism Campaign Model */}
        <div className="p-6 rounded-2xl bg-[#040E1B] border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Illustrative 3-Day Tourism Collaboration Financial Breakdown
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                40 Participants (30 Paying Tourists + 10 Promoters) | ₹1.80L Receipts | ₹60,000 Product Sales
              </p>
            </div>
            <button
              type="button"
              onClick={() => setModelOpen(!modelOpen)}
              className="text-xs font-bold text-[#0A9BE0] hover:text-[#B4F000] flex items-center gap-1 transition-colors"
            >
              <span>{modelOpen ? 'Hide Model' : 'View Revenue Breakdown'}</span>
              {modelOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          <AnimatePresence>
            {modelOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-6 border-t border-white/10 mt-4 space-y-4 text-xs sm:text-sm text-slate-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] space-y-2">
                    <span className="text-xs font-mono uppercase text-[#0A9BE0] font-bold block">
                      Tour Package Economics
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      <li className="flex justify-between">
                        <span>30 Paying Tourists (₹5,000/pkg):</span>
                        <span className="text-white font-mono">₹1,50,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Fashion Brand Co-Sponsorship:</span>
                        <span className="text-[#B4F000] font-mono">₹30,000</span>
                      </li>
                      <li className="flex justify-between font-bold text-white border-t border-white/10 pt-1">
                        <span>Total Gross Receipts:</span>
                        <span className="text-[#B4F000] font-mono">₹1,80,000</span>
                      </li>
                      <li className="flex justify-between text-slate-400">
                        <span>Less: Travel Transit, Hotel &amp; Food Costs:</span>
                        <span className="font-mono">-₹1,20,000</span>
                      </li>
                      <li className="flex justify-between font-bold text-[#74D7FF] border-t border-white/10 pt-1">
                        <span>Tourism Operating Surplus:</span>
                        <span className="font-mono">₹30,000</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] space-y-2">
                    <span className="text-xs font-mono uppercase text-[#B4F000] font-bold block">
                      Fashion Brand Return On Outing
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      <li className="flex justify-between">
                        <span>Apparel Sales (40 Orders × ₹1,500):</span>
                        <span className="text-white font-mono font-bold">₹60,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>High-Res Scenic Outdoor Reels:</span>
                        <span className="text-[#74D7FF] font-mono">15 Produced</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Product Photoshoots at Scenic Lookouts:</span>
                        <span className="text-[#74D7FF] font-mono">50+ Photos</span>
                      </li>
                      <li className="flex justify-between text-slate-400 border-t border-white/10 pt-1">
                        <span>Brand Co-Sponsorship Expense:</span>
                        <span className="font-mono text-red-400">-₹30,000</span>
                      </li>
                      <li className="flex justify-between font-bold text-[#B4F000] border-t border-white/10 pt-1">
                        <span>Immediate Net Product Revenue:</span>
                        <span className="font-mono">₹30,000 Net + UGC Assets</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#010810] text-xs text-slate-400 font-mono">
                  *Illustrative travel partnership model. Requires mutual operator consent, comprehensive travel insurance, and compliance with tourism board safety regulations.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
`;

// 17. FashionCampaignPackagesSection.tsx
const packagesContent = `'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { FASHION_CAMPAIGN_PACKAGES, FashionPackage } from '@/data/brandActivationData';

interface FashionCampaignPackagesSectionProps {
  onSelectPackage: (pkg: FashionPackage) => void;
}

export default function FashionCampaignPackagesSection({
  onSelectPackage,
}: FashionCampaignPackagesSectionProps) {
  return (
    <section id="packages" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Fashion Packages</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            START SMALL. SCALE SMART.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Engineered specifically for apparel creators, footwear designers, and lifestyle labels. Click any plan below to view comprehensive deliverables and request custom quotations.
          </p>
        </div>

        {/* 3 Fashion Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {FASHION_CAMPAIGN_PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                onClick={() => onSelectPackage(pkg)}
                className={\`relative p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5 \${
                  isPopular
                    ? 'bg-[#03172A] border-2 border-[#B4F000] shadow-[0_0_50px_rgba(180,240,0,0.2)]'
                    : 'bg-[#030C16] border border-white/10 hover:border-[#0A9BE0]/50'
                }\`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B4F000] text-black text-[11px] font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-black" />
                    <span>MOST POPULAR ACTIVATION</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-white/50 uppercase">{pkg.duration} CAMPAIGN</span>
                    <span
                      className={\`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border \${
                        isPopular
                          ? 'bg-[#B4F000]/15 text-[#B4F000] border-[#B4F000]/30'
                          : 'bg-[#0A9BE0]/15 text-[#0A9BE0] border-[#0A9BE0]/30'
                      }\`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white group-hover:text-[#B4F000] transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#0A9BE0] mt-1">{pkg.tagline}</p>
                  <p className="text-xs text-slate-300 mt-4 leading-relaxed">{pkg.desc}</p>

                  <div className="grid grid-cols-2 gap-2 mt-6 p-3 rounded-2xl bg-white/[0.04] text-center font-mono">
                    <div className="p-2 rounded-xl bg-black/40">
                      <span className="text-xs text-slate-400 block">Promoters</span>
                      <span className="text-sm font-bold text-white">{pkg.promoters}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40">
                      <span className="text-xs text-slate-400 block">Reels</span>
                      <span className="text-sm font-bold text-[#B4F000]">{pkg.reels}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
                    <span className="text-[11px] font-mono uppercase text-white/50 block font-bold">
                      Key Inclusions
                    </span>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {pkg.features.slice(0, 4).map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#B4F000] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-xs text-slate-400 font-mono mb-3">
                    Planning Reference: <span className="text-white font-bold">{pkg.planningPrice}</span>
                  </div>

                  <button
                    type="button"
                    className={\`w-full py-3 rounded-full text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all \${
                      isPopular
                        ? 'bg-[#B4F000] hover:bg-[#c5fc1b] text-black shadow-[0_4px_20px_rgba(180,240,0,0.35)]'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }\`}
                  >
                    <span>Request Custom Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-slate-500 font-mono max-w-2xl mx-auto">
          *Fashion activation packages operate independently from ADRYD standard transit packages. Quotations depend on custom wardrobe tailoring, promoter styling requirements, and multi-corridor transit permits.
        </div>

      </div>
    </section>
  );
}
`;

// 18. RevenueModelSection.tsx
const revenueContent = `'use client';

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
`;

// 19. MarketingComparisonSection.tsx
const comparisonContent = `'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, X } from 'lucide-react';
import { MARKETING_COMPARISON_MATRIX } from '@/data/brandActivationData';

export default function MarketingComparisonSection() {
  return (
    <section id="comparison" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multi-Channel Benchmark</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            MORE THAN JUST VISIBILITY.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            A 12-dimension comparative analysis demonstrating how ADRYD transcends passive hoardings, newspaper ads, and static showrooms with real-world mobility and human engagement.
          </p>
        </div>

        {/* 12-Dimension Matrix Table */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#03101E] border border-[#0A9BE0]/30 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono uppercase text-[11px]">
                  <th className="py-3 px-3 w-1/4">Evaluation Dimension</th>
                  <th className="py-3 px-3 w-3/8 text-slate-400">Traditional Media (Hoardings / TV / Print)</th>
                  <th className="py-3 px-3 w-3/8 text-[#B4F000] font-bold">ADRYD Brand Activation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {MARKETING_COMPARISON_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-3 font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A9BE0]" />
                      <span>{row.dimension}</span>
                    </td>
                    <td className="py-3.5 px-3 text-slate-400 leading-relaxed">{row.traditional}</td>
                    <td className="py-3.5 px-3 font-medium text-slate-100 leading-relaxed bg-[#0A9BE0]/[0.03]">
                      <span className="text-[#B4F000] font-bold mr-1.5">✓</span>
                      <span>{row.adryd}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
`;

// 20. ShowroomComparisonSection.tsx
const showroomContent = `'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Building, Check, ArrowRight } from 'lucide-react';
import { SHOWROOM_INVESTMENT } from '@/data/brandActivationData';

export default function ShowroomComparisonSection() {
  const diff = SHOWROOM_INVESTMENT.traditional.total - SHOWROOM_INVESTMENT.adryd.total;
  const pctSaved = ((diff / SHOWROOM_INVESTMENT.traditional.total) * 100).toFixed(1);

  return (
    <section id="showroom-compare" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Capital Efficiency Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            TEST THE MARKET BEFORE INVESTING BIG.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Comparing the capital commitment of opening a physical showroom versus deploying a rapid ADRYD market validation campaign.
          </p>
        </div>

        {/* 2-Card Cost Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Traditional Showroom Cost Card */}
          <div className="p-8 rounded-3xl bg-[#040B13] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-red-400 font-bold block">Traditional Infrastructure</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">Physical Store Setup + Month 1</h3>
                </div>
                <span className="text-2xl font-black text-white font-mono">
                  ₹{SHOWROOM_INVESTMENT.traditional.total.toLocaleString()}
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {SHOWROOM_INVESTMENT.traditional.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between py-1.5 border-b border-white/5">
                    <span>{item.name}</span>
                    <span className="font-mono text-white font-semibold">₹{item.cost.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-slate-400 font-mono">
              Recurring monthly liabilities: rent, electricity, and sales salaries continue indefinitely.
            </div>
          </div>

          {/* ADRYD Market Testing Card */}
          <div className="p-8 rounded-3xl bg-[#031526] border-2 border-[#0A9BE0]/50 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#0A9BE0]/30 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-[#B4F000] font-bold block">ADRYD Validation Model</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">Multi-Corridor Market Testing</h3>
                </div>
                <span className="text-3xl font-black text-[#B4F000] font-mono">
                  ₹{SHOWROOM_INVESTMENT.adryd.total.toLocaleString()}
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                {SHOWROOM_INVESTMENT.adryd.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#B4F000]" />
                      <span>{item.name}</span>
                    </span>
                    <span className="font-mono text-white font-semibold">₹{item.cost.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#0A9BE0]/30 flex items-center justify-between text-xs font-mono">
              <span className="text-[#74D7FF]">Capital Preserved:</span>
              <span className="text-[#B4F000] font-bold text-sm">₹{diff.toLocaleString()} ({pctSaved}% Saved)</span>
            </div>
          </div>
        </div>

        {/* Balanced Conclusion Note */}
        <div className="text-center text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
          *Physical retail showrooms remain valuable for in-person alterations and long-term brand equity. ADRYD allows smart entrepreneurs to validate product fit, pricing elasticity, and customer demand before signing high-risk leases.
        </div>

      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(dir, 'TravelExperiencesSection.tsx'), travelContent, 'utf8');
fs.writeFileSync(path.join(dir, 'FashionCampaignPackagesSection.tsx'), packagesContent, 'utf8');
fs.writeFileSync(path.join(dir, 'RevenueModelSection.tsx'), revenueContent, 'utf8');
fs.writeFileSync(path.join(dir, 'MarketingComparisonSection.tsx'), comparisonContent, 'utf8');
fs.writeFileSync(path.join(dir, 'ShowroomComparisonSection.tsx'), showroomContent, 'utf8');

console.log('Created Travel, Packages, Revenue, Comparison, and Showroom sections');
