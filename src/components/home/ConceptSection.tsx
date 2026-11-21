'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Zap, Radio, Globe } from 'lucide-react';
import Link from 'next/link';

export default function ConceptSection() {
  const pillars = [
    {
      action: 'MOVE',
      title: 'Active Mobility',
      desc: 'Turn everyday urban roads into high-recall moving media channels.',
      color: 'text-[#2563EB]',
      badgeBg: 'bg-[#EFF6FF]',
      border: 'border-[#DBEAFE]',
      icon: Zap,
    },
    {
      action: 'SHOWCASE',
      title: 'Physical Discovery',
      desc: 'Illuminated product displays bring real merchandise directly to shoppers.',
      color: 'text-[#7856FF]',
      badgeBg: 'bg-[#F5F3FF]',
      border: 'border-[#EDE9FE]',
      icon: Radio,
    },
    {
      action: 'CONNECT',
      title: 'Instant Commerce',
      desc: 'On-scooter QR codes bridge street encounters to instant checkout.',
      color: 'text-[#D946EF]',
      badgeBg: 'bg-[#FDF4FF]',
      border: 'border-[#F5D0FE]',
      icon: Globe,
    },
  ];

  return (
    <section id="the-idea" className="py-24 lg:py-32 bg-[#F5F3FF] relative overflow-hidden border-t border-[#E0E7FF]">
      {/* Ambient Lavender & Cyan Glows */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#C4B5FD]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#38BDF8]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#2563EB] text-xs font-bold uppercase tracking-wider border border-[#DBEAFE] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#7856FF]" />
            <span>THE CONCEPT</span>
          </div>
          
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#142238] tracking-tight uppercase leading-[1.05]">
            MARKETING THAT <span className="text-[#2563EB] drop-shadow-sm">MOVES.</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-2xl mx-auto font-normal">
            ADRYD brings brands, products and audiences together through electric mobility.
          </p>
        </div>

        {/* Dynamic Connected Universe Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Column: Flowing Energy Ribbon & Network Graphic (Image 2 & 3 Reference) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-gradient-to-br from-[#2563EB]/10 via-[#7856FF]/10 to-[#EC4899]/10"
          >
            <Image
              src="/images/v4/energy-ribbon-loop.jpg"
              alt="Connected Flowing Marketing Network"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#142238]/80 via-transparent to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                  The Moving Ecosystem
                </span>
                <p className="text-lg font-heading font-bold mt-1">
                  Moving from static billboards to interactive street experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Action Cards */}
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
                  className={`p-7 rounded-3xl bg-white border ${pillar.border} shadow-[0_8px_30px_rgba(37,99,235,0.04)] card-hover-lift flex items-start gap-5`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${pillar.badgeBg} ${pillar.color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className={`text-xl font-heading font-black tracking-wider ${pillar.color}`}>
                        {pillar.action}.
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                        {pillar.title}
                      </span>
                    </div>
                    <p className="text-base text-[#64748B] font-normal leading-relaxed">
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
