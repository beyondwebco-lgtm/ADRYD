'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, ChevronDown, ChevronUp, QrCode, Shield, Shirt, UserCheck } from 'lucide-react';
import { FASHION_CATEGORIES, FASHION_WORKFLOW_STEPS } from '@/data/brandActivationData';

export default function FashionConnectSection() {
  const [policiesOpen, setPoliciesOpen] = useState(false);

  return (
    <section id="fashion" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>ADRYD Fashion Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            YOUR PRODUCTS BECOME THE ADVERTISEMENT.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Eliminate sterile mannequins and studio models. Trained brand promoters wear your shirts, dresses, jackets, and footwear during prime pedestrian street hours.
          </p>
        </div>

        {/* Fashion Categories Badges Grid */}
        <div className="mb-16">
          <h3 className="text-xs font-bold uppercase tracking-wider text-center text-white/60 mb-6 font-mono">
            Supported Apparel &amp; Lifestyle Categories
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {FASHION_CATEGORIES.map((cat, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-[#040E1B] border border-white/10 hover:border-[#0A9BE0]/40 text-xs sm:text-sm font-semibold text-slate-200 transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* 2-Column: 10-Step Sequence + Illustrative Promoter Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 10-Step Sequential Storyboard (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-xl font-black text-white uppercase mb-4 flex items-center gap-2">
              <Shirt className="w-5 h-5 text-[#B4F000]" />
              <span>10-Step Street-to-Sale Storyboard</span>
            </h3>

            <div className="space-y-2.5">
              {FASHION_WORKFLOW_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="p-3.5 rounded-xl bg-[#030C16] border border-white/10 hover:border-[#0A9BE0]/40 transition-colors flex items-start gap-3.5"
                >
                  <span className="w-7 h-7 rounded-lg bg-[#0A9BE0]/15 text-[#0A9BE0] border border-[#0A9BE0]/30 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">{step.title}</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustrative Promoter Profile Card (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-[#031120] border-2 border-[#0A9BE0]/40 shadow-[0_0_40px_rgba(10,155,224,0.15)] relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B4F000] animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase text-[#B4F000]">Active Street Ambassador</span>
              </div>
              <span className="text-xs font-mono text-white/50">HYDERABAD CORRIDOR</span>
            </div>

            {/* Promoter Visual Identity */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0A9BE0]/20 border border-[#0A9BE0]/40 flex items-center justify-center text-[#0A9BE0] shrink-0 font-black text-xl">
                AF
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Vikram Sharma</h4>
                <div className="text-xs text-[#0A9BE0] font-mono mt-0.5">Promoter ID: ADRYD-F101</div>
                <div className="text-xs text-slate-400 mt-0.5">Outfit Spec: Summer Linen Co-ord (SKU-F01)</div>
              </div>
            </div>

            {/* Conceptual QR Code Display */}
            <div className="p-6 rounded-2xl bg-[#010810] border border-[#0A9BE0]/30 text-center mb-6">
              <div className="w-32 h-32 mx-auto rounded-xl bg-white p-2.5 flex items-center justify-center shadow-md">
                <QrCode className="w-full h-full text-black" />
              </div>
              <div className="mt-3 text-xs font-mono text-[#B4F000] font-semibold">
                SCAN TO VIEW OUTFIT LOOKBOOK
              </div>
              <div className="text-[11px] text-white/50 font-mono mt-0.5">
                (Demonstration QR Code • Attribution ID: F101-HYD)
              </div>
            </div>

            {/* Real-Time Telemetry Simulation */}
            <div className="grid grid-cols-3 gap-2 text-center pt-2">
              <div className="p-2.5 rounded-xl bg-white/[0.04]">
                <span className="text-lg font-black text-white block">184</span>
                <span className="text-[10px] text-slate-400 font-mono block">QR Scans</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.04]">
                <span className="text-lg font-black text-[#B4F000] block">42</span>
                <span className="text-[10px] text-slate-400 font-mono block">Inquiries</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.04]">
                <span className="text-lg font-black text-[#0A9BE0] block">15</span>
                <span className="text-[10px] text-slate-400 font-mono block">Direct Orders</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Safeguards & Product Protection Policy */}
        <div className="mt-12 p-6 rounded-2xl bg-[#040E1B] border border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-[#0A9BE0]" />
              <h4 className="text-sm sm:text-base font-bold text-white">
                Apparel Security, Sanitization &amp; Return Protocol
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setPoliciesOpen(!policiesOpen)}
              className="text-xs font-bold text-[#0A9BE0] hover:text-[#B4F000] flex items-center gap-1 transition-colors"
            >
              <span>{policiesOpen ? 'Hide Policies' : 'View Protocol Details'}</span>
              {policiesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          <AnimatePresence>
            {policiesOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-6 border-t border-white/10 mt-4 space-y-3 text-xs sm:text-sm text-slate-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-white/[0.03]">
                    <strong className="text-white block mb-1">Product Ownership &amp; Return:</strong>
                    Sample garments remain 100% property of the brand partner. Garments are systematically inventoried, tagged, and returned post-campaign.
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03]">
                    <strong className="text-white block mb-1">Sanitization &amp; Care:</strong>
                    All apparel undergoes professional eco-friendly steam sanitization before and between promoter allocations.
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03]">
                    <strong className="text-white block mb-1">Damage &amp; Loss Coverage:</strong>
                    ADRYD maintains structured sample protection agreements covering accidental tears, stains, or transit damage at agreed replacement value.
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03]">
                    <strong className="text-white block mb-1">Promoter Code of Conduct:</strong>
                    Promoters strictly adhere to non-smoking, clean hydration, and professional posture guidelines while wearing partner apparel.
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
