'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Target, Compass, Rocket, Bike, Sparkles } from 'lucide-react';

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 25%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const scooterX = useTransform(smoothProgress, [0, 1], ['5%', '92%']);

  const steps = [
    {
      step: '01',
      title: 'Tell Us Your Goal',
      description: 'Share your brand objectives, target audience and corridor priorities.',
      icon: Target,
      color: 'text-[#00A8C8]',
      bg: 'bg-white',
      border: 'border-[#DFEAF0]',
      iconBg: 'bg-[#EAF9FD]',
    },
    {
      step: '02',
      title: 'We Plan Your Campaign',
      description: 'We configure optimal EV fleet counts, route schedules and display setups.',
      icon: Compass,
      color: 'text-[#7856FF]',
      bg: 'bg-white',
      border: 'border-[#E4DCFF]',
      iconBg: 'bg-[#F0ECFF]',
    },
    {
      step: '03',
      title: 'Launch Your Presence',
      description: 'Your branded fleet hits the streets, engaging consumers with real visibility.',
      icon: Rocket,
      color: 'text-[#1756C1]',
      bg: 'bg-white',
      border: 'border-[#DFEAF0]',
      iconBg: 'bg-[#EAF9FD]',
    },
  ];

  return (
    <section ref={containerRef} id="how-it-works" className="py-20 lg:py-28 bg-[#F0ECFF] relative overflow-hidden border-t border-[#E4DCFF]">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-white/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#EAF9FD] rounded-full blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E4DCFF] text-[#7856FF] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple Execution</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#172B3A] tracking-tight uppercase">
            THREE SIMPLE STEPS.
          </h2>
          <p className="text-base sm:text-lg text-[#637786] font-normal">
            A straightforward process to explore, plan and deploy your mobile campaign concept.
          </p>
        </div>

        {/* ================= CURVED BLUE & VIOLET ROUTE (Desktop) ================= */}
        <div className="hidden md:block relative mb-12 px-6">
          <div className="relative h-16 flex items-center">
            {/* Background Track Route */}
            <svg
              className="w-full h-12 overflow-visible"
              viewBox="0 0 1000 48"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00A8C8" />
                  <stop offset="50%" stopColor="#7856FF" />
                  <stop offset="100%" stopColor="#1756C1" />
                </linearGradient>
              </defs>
              <path
                d="M 20,24 Q 250,2 500,24 T 980,24"
                stroke="rgba(120, 86, 255, 0.15)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M 20,24 Q 250,2 500,24 T 980,24"
                stroke="url(#routeGradient)"
                strokeWidth="3.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
              />
            </svg>

            {/* Moving Scooter Marker */}
            <motion.div
              style={{ left: scooterX }}
              className="absolute top-1/2 -translate-y-1/2 -ml-6 w-12 h-12 rounded-2xl bg-white border-2 border-[#00A8C8] shadow-[0_8px_20px_rgba(0,168,200,0.25)] flex items-center justify-center text-[#00A8C8] z-20"
            >
              <Bike className="w-6 h-6 animate-pulse" />
            </motion.div>
          </div>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`rounded-3xl ${st.bg} border ${st.border} p-8 card-hover-lift flex flex-col justify-between shadow-[0_8px_25px_rgba(120,86,255,0.04)]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${st.iconBg} ${st.color} flex items-center justify-center font-bold`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-heading font-black text-3xl text-[#172B3A]/20">
                      {st.step}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-2xl text-[#172B3A] uppercase tracking-tight mb-3">
                    {st.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#637786] font-normal leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Centered Action CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7856FF] hover:bg-[#6440FF] text-white text-sm font-bold shadow-[0_8px_25px_rgba(120,86,255,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>See Step-by-Step Pilot Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
