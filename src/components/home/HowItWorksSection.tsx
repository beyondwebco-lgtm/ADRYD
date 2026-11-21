'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Compass, Radio, Sparkles } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      action: 'PLAN',
      title: 'Choose Campaign Goal',
      desc: 'Choose your campaign goal.',
      detail: 'Define target commercial corridors, vehicle numbers, duration and product showcase needs.',
      icon: Target,
      color: '#22D3EE',
      textColor: 'text-[#22D3EE]',
      cardBg: 'bg-[#22D3EE]/15 hover:bg-[#22D3EE]/25',
      border: 'border-[#22D3EE]/35 hover:border-[#22D3EE]',
      glow: 'shadow-[0_0_30px_rgba(34,211,238,0.25)]',
      iconBg: 'bg-[#22D3EE]/30',
    },
    {
      num: '02',
      action: 'MOVE',
      title: 'Activate Network',
      desc: 'Bring the campaign into motion.',
      detail: 'Tandem electric fleets take to premier high-footfall street corridors with eye-level product visibility.',
      icon: Compass,
      color: '#2DD4BF',
      textColor: 'text-[#2DD4BF]',
      cardBg: 'bg-[#2DD4BF]/15 hover:bg-[#2DD4BF]/25',
      border: 'border-[#2DD4BF]/35 hover:border-[#2DD4BF]',
      glow: 'shadow-[0_0_30px_rgba(45,212,191,0.25)]',
      iconBg: 'bg-[#2DD4BF]/30',
    },
    {
      num: '03',
      action: 'CONNECT',
      title: 'Engage Audiences',
      desc: 'Reach potential customers.',
      detail: 'Illuminated live showcases, scan-and-buy QR commerce and direct neighborhood sampling.',
      icon: Radio,
      color: '#C4B5FD',
      textColor: 'text-[#C4B5FD]',
      cardBg: 'bg-[#7856FF]/15 hover:bg-[#7856FF]/25',
      border: 'border-[#7856FF]/35 hover:border-[#C4B5FD]',
      glow: 'shadow-[0_0_30px_rgba(120,86,255,0.25)]',
      iconBg: 'bg-[#7856FF]/30',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-transparent relative overflow-hidden border-t border-white/10 text-white">
      {/* Ambient Turquoise, Mint & Sky Blue Lighting */}
      <div className="absolute top-0 left-1/3 w-[650px] h-[650px] bg-[#2DD4BF]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[600px] h-[600px] bg-[#22D3EE]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-[#38BDF8]/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#2DD4BF] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>HOW IT WORKS</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[1.05]">
            <span className="bg-gradient-to-r from-[#22D3EE] via-[#2DD4BF] to-[#C4B5FD] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_4px_30px_rgba(45,212,191,0.4)]">
              PLAN. MOVE. CONNECT.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
            A frictionless journey from campaign concept to active street-level engagement.
          </p>
        </div>

        {/* Connected Route Visualization (Desktop) */}
        <div className="hidden lg:block relative mb-12 px-12">
          <svg
            className="w-full h-14 overflow-visible"
            viewBox="0 0 1000 40"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="cyanMintGradientV5" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="50%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#C4B5FD" />
              </linearGradient>
            </defs>
            <path
              d="M 50,20 Q 300,5 500,20 T 950,20"
              stroke="url(#cyanMintGradientV5)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="10 10"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* 3 Frosted Action Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`p-8 rounded-3xl ${step.cardBg} backdrop-blur-2xl border ${step.border} ${step.glow} card-hover-lift flex flex-col justify-between relative`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-heading font-black text-white/35">
                      {step.num}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl ${step.iconBg} border border-white/15 shadow-sm flex items-center justify-center`}
                      style={{ color: step.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className={`font-heading font-black text-2xl uppercase tracking-wider ${step.textColor}`}>
                      {step.action}.
                    </h3>
                    <p className="text-lg font-bold text-white">
                      {step.desc}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed pt-1 font-normal">
                      {step.detail}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Step {step.num} of 03
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="p-8 rounded-3xl bg-white/[0.08] backdrop-blur-2xl border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-heading font-bold text-white">Ready to activate your corridor?</h4>
            <p className="text-sm text-slate-300">Choose your preferred corridors and start reaching local audiences.</p>
          </div>
          <Link
            href="/book-campaign"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#2DD4BF] hover:from-[#06B6D4] hover:to-[#0D9488] text-[#0F172A] font-bold text-sm shadow-[0_4px_20px_rgba(34,211,238,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
          >
            <span>Start Campaign Planning</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
