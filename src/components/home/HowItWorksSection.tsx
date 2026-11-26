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
      color: '#B4F000',
      textColor: 'text-[#B4F000]',
      cardBg: 'bg-[#092D19]/60 hover:bg-[#092D19]/80',
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
      color: '#65B32E',
      textColor: 'text-[#65B32E]',
      cardBg: 'bg-[#005522]/35 hover:bg-[#005522]/55',
      border: 'border-[#65B32E]/40 hover:border-[#65B32E]',
      glow: 'shadow-[0_0_30px_rgba(101,179,46,0.25)]',
      iconBg: 'bg-[#65B32E]/20',
    },
    {
      num: '03',
      action: 'CONNECT',
      title: 'Engage Audiences',
      desc: 'Reach potential customers.',
      detail: 'Illuminated live showcases, scan-and-buy QR commerce and direct neighborhood sampling.',
      icon: Radio,
      color: '#F4DE26',
      textColor: 'text-[#F4DE26]',
      cardBg: 'bg-[#F4DE26]/10 hover:bg-[#F4DE26]/20',
      border: 'border-[#F4DE26]/30 hover:border-[#F4DE26]',
      glow: 'shadow-[0_0_30px_rgba(244,222,38,0.25)]',
      iconBg: 'bg-[#F4DE26]/20',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-transparent relative overflow-hidden border-t border-white/10 text-white">
      {/* Ambient Forest Green, Deep Emerald & Electric Lime Lighting */}
      <div className="absolute top-0 left-1/3 w-[650px] h-[650px] bg-[#005522]/25 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[600px] h-[600px] bg-[#B4F000]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-[#092D19]/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#092D19]/60 backdrop-blur-md border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>HOW IT WORKS</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[1.05]">
            <span className="bg-gradient-to-r from-[#B4F000] via-[#E4EBE5] to-[#65B32E] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_4px_30px_rgba(180,240,0,0.4)]">
              PLAN. MOVE. CONNECT.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#E4EBE5] leading-relaxed max-w-2xl mx-auto font-normal">
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
              <linearGradient id="limeEmeraldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B4F000" />
                <stop offset="50%" stopColor="#65B32E" />
                <stop offset="100%" stopColor="#F4DE26" />
              </linearGradient>
            </defs>
            <path
              d="M 50,20 Q 300,5 500,20 T 950,20"
              stroke="url(#limeEmeraldGradient)"
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
                    <p className="text-sm text-[#E4EBE5]/80 leading-relaxed pt-1 font-normal">
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
        <div className="p-8 rounded-3xl bg-[#092D19]/60 backdrop-blur-2xl border border-[#B4F000]/25 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-heading font-bold text-white">Ready to activate your corridor?</h4>
            <p className="text-sm text-[#E4EBE5]/80 font-normal">Our campaign team maps optimal commercial zones for maximum audience recall.</p>
          </div>
          <Link
            href="/book-campaign"
            className="px-8 py-3.5 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#092D19] font-black text-xs uppercase tracking-wider shrink-0 shadow-md hover:scale-105 transition-all"
          >
            Start Planning
          </Link>
        </div>

      </div>
    </section>
  );
}
