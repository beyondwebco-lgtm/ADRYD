'use client';

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
