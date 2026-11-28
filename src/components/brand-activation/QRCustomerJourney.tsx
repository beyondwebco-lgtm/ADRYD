'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, QrCode, BookOpen, CheckSquare, ShoppingCart, CreditCard, Award } from 'lucide-react';

const STEPS = [
  { step: '01', title: 'Discover Product', desc: 'Shopper encounters brand promoter or moving display unit on urban street.', icon: <Eye className="w-4 h-4" /> },
  { step: '02', title: 'Scan Promoter QR', desc: 'Shopper scans promoter\'s unique lanyard QR code using any smartphone camera.', icon: <QrCode className="w-4 h-4" /> },
  { step: '03', title: 'Browse Digital Lookbook', desc: 'Mobile web catalogue opens instantly with high-res photos, video reels, and sizing charts.', icon: <BookOpen className="w-4 h-4" /> },
  { step: '04', title: 'Select Product & Size', desc: 'Customer selects color, size, and tries physical fabric swatches from promoter.', icon: <CheckSquare className="w-4 h-4" /> },
  { step: '05', title: 'Order or Pre-Order', desc: 'Chooses immediate on-ground delivery or reserves items via pre-order deposit.', icon: <ShoppingCart className="w-4 h-4" /> },
  { step: '06', title: 'Instant UPI Payment', desc: 'Completes touch-free checkout via Google Pay, PhonePe, Paytm, or Card.', icon: <CreditCard className="w-4 h-4" /> },
  { step: '07', title: 'Promoter Attribution', desc: 'System automatically tags transaction to promoter ID for 12-month commission tracking.', icon: <Award className="w-4 h-4" /> },
];

export default function QRCustomerJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="journey" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frictionless Discovery Funnel</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            SEE. SCAN. SHOP.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            The 7-step street-to-checkout journey connecting real-world pedestrian interest with digital commerce and instant promoter attribution.
          </p>
        </div>

        {/* 7-Step Journey Interactive Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {STEPS.map((s, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={s.step}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isCurrent
                    ? 'bg-[#031526] border-[#0A9BE0] shadow-[0_0_25px_rgba(10,155,224,0.3)] scale-[1.02]'
                    : 'bg-[#030C16] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold ${isCurrent ? 'text-[#B4F000]' : 'text-white/50'}`}>
                      {s.step}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isCurrent ? 'bg-[#0A9BE0]/20 text-[#0A9BE0]' : 'bg-white/5 text-slate-400'}`}>
                      {s.icon}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{s.title}</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">{s.desc}</p>
                </div>

                <div className="mt-4 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Step {idx + 1} of 7</span>
                  {isCurrent && <span className="text-[#B4F000] font-bold">ACTIVE</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Conceptual Note */}
        <div className="mt-8 text-center text-xs text-slate-500 font-mono">
          *Demonstration journey architecture. Production lookbook and checkout modules connect to brand partner eCommerce or ADRYD hosted catalogues.
        </div>

      </div>
    </section>
  );
}
