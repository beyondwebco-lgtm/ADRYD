'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { ENTREPRENEUR_JOURNEY_STEPS } from '@/data/brandActivationData';

export default function EntrepreneurJourneySection() {
  return (
    <section id="onboarding" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Structured Onboarding Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            FROM IDEA TO ACTIVATION.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            The 10-step operational timeline guiding business founders from initial profile registration to synchronized multi-city campaign execution.
          </p>
        </div>

        {/* 10-Step Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {ENTREPRENEUR_JOURNEY_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-4 rounded-2xl bg-[#030C16] border border-white/10 hover:border-[#0A9BE0]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="w-7 h-7 rounded-lg bg-[#0A9BE0]/15 text-[#0A9BE0] border border-[#0A9BE0]/30 text-xs font-mono font-bold flex items-center justify-center mb-3">
                  {step.step}
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5">{step.title}</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
