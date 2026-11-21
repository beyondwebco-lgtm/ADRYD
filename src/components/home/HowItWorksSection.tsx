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
      title: 'Define Objectives',
      desc: 'Tell us your campaign goal.',
      detail: 'Share target corridors, campaign duration, and showcase requirements.',
      icon: Target,
      color: '#2563EB',
      textColor: 'text-[#2563EB]',
      bg: 'bg-[#EFF6FF]',
      border: 'border-[#DBEAFE]',
    },
    {
      num: '02',
      action: 'MOVE',
      title: 'Deploy The Fleet',
      desc: 'Activate the proposed mobility network.',
      detail: 'Electric vehicles take to prime commercial corridors with eye-level branding.',
      icon: Compass,
      color: '#2DD4BF',
      textColor: 'text-[#0D9488]',
      bg: 'bg-[#F0FDFA]',
      border: 'border-[#CCFBF1]',
    },
    {
      num: '03',
      action: 'CONNECT',
      title: 'Engage Audiences',
      desc: 'Engage potential customers.',
      detail: 'Live product showcases, instant QR commerce, and real-time community engagement.',
      icon: Radio,
      color: '#38BDF8',
      textColor: 'text-[#0284C7]',
      bg: 'bg-[#F0F9FF]',
      border: 'border-[#E0F2FE]',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#F0FDFA] relative overflow-hidden border-t border-[#CCFBF1]">
      {/* Ambient Cyan and Mint Atmosphere */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#38BDF8]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#2DD4BF]/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CCFBF1] text-[#0D9488] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span>HOW IT WORKS</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#142238] tracking-tight uppercase leading-[1.05]">
            THREE STEPS.{' '}
            <span className="text-[#0D9488]">
              REAL-WORLD REACH.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl mx-auto font-normal">
            A frictionless journey from campaign concept to active street-level engagement.
          </p>
        </div>

        {/* Futuristic Connected Route Visualization (Desktop) */}
        <div className="hidden lg:block relative mb-8 px-12">
          <svg
            className="w-full h-12 overflow-visible"
            viewBox="0 0 1000 40"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="cyanMintGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="50%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
            </defs>
            <path
              d="M 50,20 Q 300,5 500,20 T 950,20"
              stroke="url(#cyanMintGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="8 8"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* 3 Action Steps Grid */}
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
                className={`p-8 rounded-3xl ${step.bg} border ${step.border} card-hover-lift flex flex-col justify-between relative shadow-sm`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-heading font-black text-[#142238]/30">
                      {step.num}
                    </span>
                    <div
                      className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center"
                      style={{ color: step.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className={`font-heading font-black text-2xl uppercase tracking-wider ${step.textColor}`}>
                      {step.action}.
                    </h3>
                    <p className="text-lg font-bold text-[#142238]">
                      {step.desc}
                    </p>
                    <p className="text-sm text-[#64748B] leading-relaxed pt-1 font-normal">
                      {step.detail}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-black/5 text-xs font-bold text-slate-500">
                  {step.title}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Single CTA after section */}
        <div className="text-center">
          <Link
            href="/book-campaign"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#0D9488] hover:bg-[#0F766E] text-white text-base font-bold shadow-[0_10px_30px_rgba(13,148,136,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            <span>Plan Your Campaign Route</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
}
