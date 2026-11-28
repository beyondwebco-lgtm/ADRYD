'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag, Calculator, ShieldCheck, ArrowRight } from 'lucide-react';

export default function PreOrderSection() {
  const [orders, setOrders] = useState(200);
  const [productValue, setProductValue] = useState(1200);
  const [deposit, setDeposit] = useState(300);

  const potentialValue = orders * productValue;
  const advanceCashflow = orders * deposit;
  const balancePayable = potentialValue - advanceCashflow;

  return (
    <section id="pre-orders" className="relative py-24 bg-black text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-[#0A9BE0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Pre-Order &amp; Demand Validation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            SELL BEFORE YOU SCALE.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Eliminate deadstock risk. Demonstrate physical fabric samples and lookbooks on city streets to gather verified customer pre-orders and advance cash deposits before bulk production.
          </p>
        </div>

        {/* 2-Column: Workflow + Interactive Financial Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 6-Step Pre-Order Workflow (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-black text-white uppercase mb-2">
              The 6-Step Demand Validation Sequence
            </h3>

            <div className="space-y-3">
              {[
                { step: '01', title: 'Upload New Collection', desc: 'Create digital lookbook with high-res images, sizing specs, and targeted launch date.' },
                { step: '02', title: 'Curate Street Samples', desc: 'Provide 5–10 sample garments for brand promoters to wear and showcase in daylight.' },
                { step: '03', title: 'Demonstrate to Pedestrians', desc: 'Shoppers feel fabric texture, examine stitching, and view lookbook on mobile.' },
                { step: '04', title: 'Collect Verified Pre-Orders', desc: 'Customer selects size & color, booking the reservation via mobile form.' },
                { step: '05', title: 'Confirm Advance Deposit', desc: 'Customer pays advance reservation deposit (e.g., ₹300) via instant UPI.' },
                { step: '06', title: 'Manufacture & Ship', desc: 'Manufacture only confirmed quantities, delivering items with verified cash on delivery balance.' },
              ].map((s) => (
                <div key={s.step} className="p-3.5 rounded-xl bg-[#030C16] border border-white/10 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#B4F000]/15 text-[#B4F000] border border-[#B4F000]/30 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">{s.title}</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Calculator (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#031526] border-2 border-[#0A9BE0]/40 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#B4F000]" />
                <h3 className="text-lg font-bold text-white">Pre-Order Cashflow Simulator</h3>
              </div>
              <span className="text-xs font-mono text-[#0A9BE0]">LIVE MODEL</span>
            </div>

            {/* Sliders */}
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                  <span className="text-slate-300">Verified Pre-Orders:</span>
                  <span className="font-mono text-[#B4F000] font-bold">{orders} Orders</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="25"
                  value={orders}
                  onChange={(e) => setOrders(Number(e.target.value))}
                  className="w-full accent-[#B4F000] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                  <span className="text-slate-300">Average Product Retail Value:</span>
                  <span className="font-mono text-white font-bold">₹{productValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={productValue}
                  onChange={(e) => setProductValue(Number(e.target.value))}
                  className="w-full accent-[#0A9BE0] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                  <span className="text-slate-300">Advance Deposit per Order:</span>
                  <span className="font-mono text-[#74D7FF] font-bold">₹{deposit.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1500"
                  step="50"
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  className="w-full accent-[#74D7FF] cursor-pointer"
                />
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <div className="p-3.5 rounded-xl bg-white/[0.04] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 font-mono block">Potential Gross Order Value</span>
                  <span className="text-xs text-slate-300">(Orders × Product Value)</span>
                </div>
                <span className="text-xl font-black text-white font-mono">
                  ₹{potentialValue.toLocaleString()}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#B4F000]/10 border border-[#B4F000]/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#B4F000] font-mono block font-bold">Advance Cashflow Collected</span>
                  <span className="text-xs text-slate-300">(Orders × Deposit Amount)</span>
                </div>
                <span className="text-2xl font-black text-[#B4F000] font-mono">
                  ₹{advanceCashflow.toLocaleString()}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.04] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 font-mono block">Balance Payable on Delivery</span>
                  <span className="text-xs text-slate-300">(Collected upon parcel handover)</span>
                </div>
                <span className="text-lg font-bold text-slate-200 font-mono">
                  ₹{balancePayable.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#B4F000] inline-block mr-1" />
              <span>Customer deposits held safely under agreed delivery fulfillment and refund policies.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
