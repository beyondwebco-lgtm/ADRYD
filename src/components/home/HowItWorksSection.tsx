'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, Compass, Radio, Sparkles } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      action: 'PLAN',
      title: 'Choose Campaign Goal',
      desc: 'Choose your campaign goal.',
      detail: 'Define target commercial corridors, vehicle numbers, duration and product showcase needs.',
      icon: Target,
      color: '#B4F000',
      textColor: 'text-[#B4F000]',
      cardBg: 'bg-[#041220]/70 hover:bg-[#041220]/90',
      border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
      glow: 'shadow-[0_0_30px_rgba(180,240,0,0.25)]',
      iconBg: 'bg-[#B4F000]/20',
    },
    {
      num: '02',
      action: 'MOVE',
      title: 'Activate Network',
      desc: 'Bring the campaign into motion.',
      detail: 'Tandem electric fleets take to premier high-footfall street corridors with eye-level product visibility.',
      icon: Compass,
      color: '#0A9BE0',
      textColor: 'text-[#0A9BE0]',
      cardBg: 'bg-[#051C33]/60 hover:bg-[#051C33]/85',
      border: 'border-[#0A9BE0]/40 hover:border-[#0A9BE0]',
      glow: 'shadow-[0_0_30px_rgba(10,155,224,0.25)]',
      iconBg: 'bg-[#0A9BE0]/20',
    },
    {
      num: '03',
      action: 'CONNECT',
      title: 'Engage Audiences',
      desc: 'Reach potential customers.',
      detail: 'Illuminated live showcases, scan-and-buy QR commerce and direct neighborhood sampling.',
      icon: Radio,
      color: '#B4F000',
      textColor: 'text-[#B4F000]',
      cardBg: 'bg-[#041220]/70 hover:bg-[#041220]/90',
      border: 'border-[#B4F000]/30 hover:border-[#B4F000]',
      glow: 'shadow-[0_0_30px_rgba(180,240,0,0.25)]',
      iconBg: 'bg-[#B4F000]/20',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-transparent relative overflow-hidden border-t border-white/10 text-white">
      {/* Ambient Electric Blue & Chartreuse Lighting */}
      <div className="absolute top-0 left-1/3 w-[650px] h-[650px] bg-[#0A9BE0]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[600px] h-[600px] bg-[#B4F000]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-[#041220]/50 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#041220]/80 backdrop-blur-md border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>HOW IT WORKS</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[1.05]">
            <span className="bg-gradient-to-r from-[#0A9BE0] via-[#E2E8F0] to-[#B4F000] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_4px_30px_rgba(10,155,224,0.4)]">
              PLAN. MOVE. CONNECT.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#E2E8F0] leading-relaxed max-w-2xl mx-auto font-normal">
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
              <linearGradient id="blueLimeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0A9BE0" />
                <stop offset="50%" stopColor="#74D7FF" />
                <stop offset="100%" stopColor="#B4F000" />
              </linearGradient>
            </defs>
            <path
              d="M 50,20 Q 300,5 500,20 T 950,20"
              stroke="url(#blueLimeGradient)"
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
                    <span className="text-4xl font-heading font-black text-white/30">
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
                    <p className="text-sm text-[#E2E8F0]/80 leading-relaxed pt-1 font-normal">
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
        <div className="p-8 rounded-3xl bg-[#041220]/75 backdrop-blur-2xl border border-[#0A9BE0]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-heading font-bold text-white">Ready to activate your corridor?</h4>
            <p className="text-sm text-[#E2E8F0]/80 font-normal">Our campaign team maps optimal commercial zones for maximum audience recall.</p>
          </div>
          <Link
            href="/book-campaign"
            className="px-8 py-3.5 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] font-black text-xs uppercase tracking-wider shrink-0 shadow-md hover:scale-105 transition-all"
          >
            Start Planning
          </Link>
        </div>

      </div>
    </section>
  );
}
