'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Radio, Globe } from 'lucide-react';

export default function ConceptSection() {
  const pillars = [
    {
      action: 'MOVE',
      title: 'Active Mobility',
      desc: 'Turn everyday urban roads into high-recall moving media channels.',
      color: 'text-[#22D3EE]',
      badgeBg: 'bg-[#22D3EE]/20',
      border: 'border-[#22D3EE]/30',
      glow: 'shadow-[0_0_25px_rgba(34,211,238,0.25)]',
      icon: Zap,
    },
    {
      action: 'SHOWCASE',
      title: 'Physical Discovery',
      desc: 'Illuminated product displays bring real merchandise directly to shoppers.',
      color: 'text-[#C4B5FD]',
      badgeBg: 'bg-[#7856FF]/20',
      border: 'border-[#7856FF]/30',
      glow: 'shadow-[0_0_25px_rgba(120,86,255,0.25)]',
      icon: Radio,
    },
    {
      action: 'CONNECT',
      title: 'Instant Commerce',
      desc: 'On-scooter QR codes bridge street encounters to instant checkout.',
      color: 'text-[#F472B6]',
      badgeBg: 'bg-[#EC4899]/20',
      border: 'border-[#EC4899]/30',
      glow: 'shadow-[0_0_25px_rgba(236,72,153,0.25)]',
      icon: Globe,
    },
  ];

  return (
    <section id="the-idea" className="py-24 lg:py-32 bg-transparent relative overflow-hidden border-t border-white/10 text-white">
      {/* Ambient Lavender, Cyan & Soft Pink Radial Atmosphere */}
      <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-[#C4B5FD]/25 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#38BDF8]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F472B6]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#22D3EE] text-xs font-bold uppercase tracking-wider border border-white/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C4B5FD]" />
            <span>THE CONCEPT</span>
          </div>
          
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[1.05]">
            MARKETING THAT <span className="bg-gradient-to-r from-[#22D3EE] via-[#C4B5FD] to-[#F472B6] bg-clip-text text-transparent animate-gradient-slow drop-shadow-[0_4px_30px_rgba(34,211,238,0.4)]">MOVES.</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
            Connecting brands, products and people through electric mobility.
          </p>
        </div>

        {/* Dynamic Connected Universe Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Column: Flowing Energy Ribbon Reference Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/25 bg-gradient-to-br from-[#2563EB]/20 via-[#7856FF]/20 to-[#EC4899]/20"
          >
            <Image
              src="/images/v4/energy-ribbon-loop.jpg"
              alt="Connected Flowing Marketing Network"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726]/85 via-transparent to-transparent flex items-end p-8">
              <div className="text-white space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#22D3EE]">
                  The Moving Ecosystem
                </span>
                <p className="text-lg font-heading font-bold">
                  Moving from static billboards to interactive street experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Frosted Translucent Action Cards */}
          <div className="lg:col-span-7 space-y-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.action}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className={`p-7 rounded-3xl bg-white/[0.08] backdrop-blur-2xl border ${pillar.border} ${pillar.glow} card-hover-lift flex items-start gap-5`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${pillar.badgeBg} ${pillar.color} flex items-center justify-center shrink-0 border border-white/10`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className={`text-xl font-heading font-black tracking-wider ${pillar.color}`}>
                        {pillar.action}.
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        {pillar.title}
                      </span>
                    </div>
                    <p className="text-base text-slate-200 font-normal leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
