'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-[#00A8C8] via-[#1756C1] to-[#123C83] text-white relative overflow-hidden">
      {/* Subtle Ambient Decorative Circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-20 w-96 h-96 rounded-full bg-[#58C9EF]/20 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Moving Marketplace</span>
        </div>

        <h2 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] uppercase">
          LET&apos;S GET YOUR BRAND MOVING.
        </h2>

        <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-normal">
          Connect your products with thousands of urban customers every single day across Hyderabad&apos;s prime corridors.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book-campaign"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-white text-[#00A8C8] hover:bg-[#EAF9FD] text-base font-bold shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>Launch a Campaign</span>
            <ArrowRight className="w-5 h-5 text-[#00A8C8]" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-transparent hover:bg-white/10 text-white border-2 border-white/60 text-base font-semibold transition-all duration-200"
          >
            <span>Talk to Campaign Team</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
