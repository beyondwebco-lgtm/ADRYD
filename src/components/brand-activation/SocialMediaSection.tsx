'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Video, Camera, Users, Globe, BarChart3, ArrowRight } from 'lucide-react';

export default function SocialMediaSection() {
  return (
    <section id="social" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Viral Social Amplification</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            FROM STREETS TO SCREENS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Every physical street campaign doubles as a high-production daylight studio photoshoot and viral video generator, syndicated across Instagram Reels, YouTube Shorts, and WhatsApp.
          </p>
        </div>

        {/* Illustrative Campaign Production Scope */}
        <div className="p-8 rounded-3xl bg-[#031222] border-2 border-[#0A9BE0]/40 shadow-xl mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#B4F000] font-bold">Illustrative 5-City Production Scope</span>
              <h3 className="text-2xl font-black text-white mt-1">Multi-City Social Content Blitz</h3>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-[#0A9BE0]/20 text-[#0A9BE0] border border-[#0A9BE0]/30 text-xs font-mono font-bold self-start sm:self-auto">
              TURNKEY SOCIAL ENGINE
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-3xl sm:text-4xl font-black text-[#B4F000] block">20</span>
              <span className="text-xs font-semibold text-slate-300 mt-1 block">Trained Promoters</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-3xl sm:text-4xl font-black text-[#0A9BE0] block">40</span>
              <span className="text-xs font-semibold text-slate-300 mt-1 block">Dedicated Reels</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-3xl sm:text-4xl font-black text-[#74D7FF] block">100</span>
              <span className="text-xs font-semibold text-slate-300 mt-1 block">Pro Photographs</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-3xl sm:text-4xl font-black text-white block">05</span>
              <span className="text-xs font-semibold text-slate-300 mt-1 block">Influencer Collabs</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 col-span-2 sm:col-span-1">
              <span className="text-3xl sm:text-4xl font-black text-[#B4F000] block">05</span>
              <span className="text-xs font-semibold text-slate-300 mt-1 block">Target Metros</span>
            </div>
          </div>
        </div>

        {/* Measurable Reporting Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#030C16] border border-white/10">
            <Video className="w-6 h-6 text-[#0A9BE0] mb-3" />
            <h4 className="text-base font-bold text-white">Short-Form Video Production</h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Street encounters, customer reactions, styling lookbooks, and behind-the-scenes rider footage edited specifically for 9:16 vertical engagement algorithms.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#030C16] border border-white/10">
            <Users className="w-6 h-6 text-[#B4F000] mb-3" />
            <h4 className="text-base font-bold text-white">Micro-Influencer Integration</h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Local lifestyle creators intercept the campaign fleet on location, capturing authentic unboxing and try-on content for their geo-targeted followers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#030C16] border border-white/10">
            <BarChart3 className="w-6 h-6 text-[#74D7FF] mb-3" />
            <h4 className="text-base font-bold text-white">Full-Funnel Reporting</h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Transparent telemetry tracking impressions, profile visits, bio QR scans, catalogue inquiries, completed checkouts, and customer acquisition costs.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
