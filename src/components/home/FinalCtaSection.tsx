'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section className="py-28 lg:py-40 bg-gradient-to-b from-transparent via-[#041220]/60 to-[#000000]/98 text-white relative overflow-hidden border-t border-white/10">
      {/* Sinuous Cinematic Glowing Lighting Spheres */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#0A9BE0]/20 blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-36 -right-32 w-[650px] h-[650px] rounded-full bg-[#B4F000]/15 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-[#041220]/40 via-[#0A9BE0]/20 to-[#B4F000]/15 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#041220]/80 backdrop-blur-md text-[#B4F000] text-xs font-bold uppercase tracking-widest border border-[#0A9BE0]/35 shadow-[0_0_25px_rgba(10,155,224,0.25)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
          <span>JOIN THE MOVING MARKETING UNIVERSE</span>
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.02] uppercase text-white drop-shadow-md"
        >
          LET&apos;S MAKE YOUR BRAND{' '}
          <span className="bg-gradient-to-r from-[#0A9BE0] via-[#E2E8F0] to-[#B4F000] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_4px_35px_rgba(10,155,224,0.5)]">
            MOVE.
          </span>
        </motion.h2>

        {/* Short Copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-lg sm:text-2xl text-[#E2E8F0] leading-relaxed max-w-2xl mx-auto font-normal drop-shadow"
        >
          The next chapter of marketing starts with a conversation.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <Link
            href="/book-campaign"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] text-base font-black shadow-[0_12px_40px_rgba(180,240,0,0.35)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            <span>Launch Your Campaign</span>
            <ArrowRight className="w-5 h-5 text-[#000000]" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border-2 border-[#0A9BE0]/40 text-base font-semibold backdrop-blur-md transition-all duration-200 hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4 text-[#0A9BE0]" />
            <span>Talk to Campaign Team</span>
          </Link>
        </motion.div>

        <p className="text-center text-xs text-[#94A3B8] font-normal pt-6">
          Campaigns and programme opportunities are subject to availability, eligibility and agreed terms.
        </p>

      </div>
    </section>
  );
}
