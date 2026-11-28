'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shirt, ShoppingBag, QrCode, Share2 } from 'lucide-react';

export default function BrandActivationPromoSection() {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden border-t border-b border-white/10">
      {/* Background Subtle Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#0A9BE0]/15 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[300px] bg-[#B4F000]/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#031120] border-2 border-[#0A9BE0]/40 shadow-[0_0_50px_rgba(10,155,224,0.15)] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>New Commercial Vertical</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              MORE THAN ADVERTISING.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Discover how ADRYD brings mobility, human promotion, commerce and business collaborations together.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Fashion Connect</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Live Street Sales</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Affiliate Network</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">10-City Campaigns</span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/brand-activation"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#B4F000] hover:bg-[#c5fc1b] text-black font-black text-sm uppercase tracking-wider shadow-[0_4px_25px_rgba(180,240,0,0.35)] hover:shadow-[0_6px_30px_rgba(180,240,0,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Explore Brand Activation →</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
