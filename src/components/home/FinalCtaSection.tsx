'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section className="py-24 lg:py-36 bg-gradient-to-br from-[#D946EF] via-[#7856FF] to-[#2563EB] text-white relative overflow-hidden animate-gradient-slow">
      {/* Cinematic Ambient Glow Spheres */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-36 -right-32 w-[500px] h-[500px] rounded-full bg-[#38BDF8]/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#EC4899]/20 to-[#2DD4BF]/20 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest border border-white/25 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>JOIN THE MOVING UNIVERSE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.02] uppercase text-white drop-shadow-sm"
        >
          LET&apos;S MAKE YOUR BRAND{' '}
          <span className="text-[#38BDF8] drop-shadow-[0_0_35px_rgba(56,189,248,0.5)]">
            MOVE.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-lg sm:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto font-normal drop-shadow"
        >
          The next chapter of marketing starts with a conversation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <Link
            href="/book-campaign"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full bg-white text-[#7856FF] hover:bg-slate-50 text-base font-bold shadow-[0_12px_35px_rgba(0,0,0,0.2)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            <span>Launch Your Campaign</span>
            <ArrowRight className="w-5 h-5 text-[#7856FF]" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/60 text-base font-semibold backdrop-blur-md transition-all duration-200 hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Talk to Campaign Team</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
