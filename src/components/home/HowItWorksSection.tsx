'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Target, Compass, Rocket, Bike, Sparkles } from 'lucide-react';

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for scooter progression along the Palapitta blue route
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 25%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  // Calculate scooter position along horizontal axis for desktop
  const scooterX = useTransform(smoothProgress, [0, 1], ['5%', '92%']);

  const steps = [
    {
      step: '01',
      title: 'Tell Us Your Goal',
      description: 'Share your brand, products and campaign needs.',
      detail: 'Select your preferred target audience, high-traffic corridors, and product showcase requirements.',
      icon: Target,
      color: 'text-[#00A8C8]',
      bg: 'bg-[#EAF9FD]',
      border: 'border-[#D5EFF7]',
    },
    {
      step: '02',
      title: 'We Plan Your Campaign',
      description: 'We help explore suitable riders, routes and promotion formats.',
      detail: 'Coordinate vehicle branding, rider briefing, display cabinet layouts and scheduled pilot corridors.',
      icon: Compass,
      color: 'text-[#1756C1]',
      bg: 'bg-[#EAF9FD]',
      border: 'border-[#D5EFF7]',
    },
    {
      step: '03',
      title: 'Take Your Brand Further',
      description: "Bring your campaign concept to life through ADRYD's planned mobility network.",
      detail: 'Engage urban consumers in motion with street-level visibility and instant QR-enabled commerce.',
      icon: Rocket,
      color: 'text-[#123C83]',
      bg: 'bg-[#EAF9FD]',
      border: 'border-[#D5EFF7]',
    },
  ];

  return (
    <section ref={containerRef} id="how-it-works" className="py-20 lg:py-28 bg-[#F6FAFC] relative overflow-hidden border-t border-[#DCECF2]">
      {/* Background Soft Palapitta Glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#EAF9FD] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#EAF9FD] rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DCECF2] text-[#00A8C8] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Process</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#172B3A] tracking-tight uppercase">
            THREE SIMPLE STEPS.
          </h2>
          <p className="text-base sm:text-lg text-[#637786] font-normal">
            A straightforward process to explore, plan and deploy your mobile campaign concept.
          </p>
        </div>

        {/* ================= CURVED PALAPITTA BLUE ROUTE (Desktop) ================= */}
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
                <linearGradient id="palapittaRouteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00A8C8" />
                  <stop offset="50%" stopColor="#1756C1" />
                  <stop offset="100%" stopColor="#58C9EF" />
                </linearGradient>
              </defs>
              {/* Soft Route Shadow */}
              <path
                d="M 20,24 Q 250,2 500,24 T 980,24"
                stroke="#DCECF2"
                strokeWidth="10"
                strokeLinecap="round"
              />
              {/* Palapitta Curved Moving Route */}
              <path
                d="M 20,24 Q 250,2 500,24 T 980,24"
                stroke="url(#palapittaRouteGrad)"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>

            {/* Moving Scooter Indicator along Curved Blue Route */}
            <motion.div
              style={{ left: scooterX }}
              className="absolute -top-3 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
            >
              <div className="w-10 h-10 rounded-full bg-[#00A8C8] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(0,168,200,0.35)] border-2 border-white ring-2 ring-[#00A8C8]/30">
                <Bike className="w-5 h-5 animate-pulse" />
              </div>
              <span className="text-[10px] font-bold text-[#00A8C8] bg-white px-2 py-0.5 rounded-full shadow-sm mt-1 whitespace-nowrap border border-[#DCECF2]">
                In Motion
              </span>
            </motion.div>
          </div>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative rounded-3xl bg-white p-8 border border-[#DCECF2] shadow-[0_10px_30px_rgba(0,168,200,0.03)] hover:shadow-[0_20px_40px_rgba(0,168,200,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Big decorative number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center font-bold shadow-sm`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className={`font-heading font-black text-4xl sm:text-5xl ${item.color}`}>
                    {item.step}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-2xl text-[#172B3A]">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#172B3A] font-medium leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-xs text-[#637786] leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-8 border-t border-[#DCECF2] mt-6">
                  <Link
                    href="/book-campaign"
                    className={`inline-flex items-center gap-1.5 text-xs font-bold ${item.color} hover:underline`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
