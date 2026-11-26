'use client';

import { useState } from 'react';
import { Calculator, Info, ShieldCheck, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';

export default function EarningsCalculatorSection() {
  // Configurable sliders
  const [transitHours, setTransitHours] = useState(30); // 30 hrs @ 200/hr = 6000
  const [samplesSold, setSamplesSold] = useState(50); // 50 items @ 100 = 5000
  const [reelsCount, setReelsCount] = useState(3); // 3 reels @ 1000 = 3000
  const [affiliateSales, setAffiliateSales] = useState(25); // 25 sales @ 100 = 2500
  const [referralsCount, setReferralsCount] = useState(2); // 2 peers @ 1250 = 2500
  const [deductExpenses, setDeductExpenses] = useState(false);

  // Computations
  const brandTransitPay = transitHours * 200;
  const samplingPay = samplesSold * 100;
  const contentPay = reelsCount * 1000;
  const affiliatePay = affiliateSales * 100;
  const referralPay = referralsCount * 1250;

  const grossEarnings = brandTransitPay + samplingPay + contentPay + affiliatePay + referralPay;

  // Operating Expenses estimate
  const chargingCost = 800;
  const mobileDataCost = 400;
  const maintenanceCost = 800;
  const totalExpenses = deductExpenses ? chargingCost + mobileDataCost + maintenanceCost : 0;

  const netEarnings = Math.max(0, grossEarnings - totalExpenses);

  return (
    <section id="earnings" className="relative py-24 bg-[#000000] border-t border-[#0A9BE0]/20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[500px] bg-[#B4F000]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F000]/10 border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider text-[#B4F000]">
            Financial Modeling
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            INTERACTIVE EARNINGS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] to-[#0A9BE0]">
              CALCULATOR
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Simulate your hypothetical monthly earning potential by combining corridor visibility, sampling, content creation, and digital affiliate referrals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sliders & Controls */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-[#030d17]/90 border border-[#0A9BE0]/30 shadow-[0_15px_40px_rgba(0,0,0,0.7)] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#B4F000]" />
                <span>Adjust Your Activity Levels</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">Monthly Projection</span>
            </div>

            {/* Slider 1: Corridor Transit Hours */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">Brand Display Transit (Hours/Month)</span>
                <span className="font-mono font-bold text-[#0A9BE0]">{transitHours} Hours (~₹{brandTransitPay.toLocaleString()})</span>
              </div>
              <input
                type="range"
                min="10"
                max="80"
                step="5"
                value={transitHours}
                onChange={(e) => setTransitHours(Number(e.target.value))}
                aria-label="Brand Display Transit Hours per Month"
                className="w-full accent-[#0A9BE0] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>10 hrs</span>
                <span>45 hrs</span>
                <span>80 hrs</span>
              </div>
            </div>

            {/* Slider 2: Sampling & Direct Sales Handouts */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">Direct Sampling & Product Sales (Items)</span>
                <span className="font-mono font-bold text-[#B4F000]">{samplesSold} Units (~₹{samplingPay.toLocaleString()})</span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                step="5"
                value={samplesSold}
                onChange={(e) => setSamplesSold(Number(e.target.value))}
                aria-label="Direct Sampling and Product Sales Units per Month"
                className="w-full accent-[#B4F000] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>10 items</span>
                <span>80 items</span>
                <span>150 items</span>
              </div>
            </div>

            {/* Slider 3: Social Media Reels / Shorts */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">Social Media Street Reels (Approved Videos)</span>
                <span className="font-mono font-bold text-[#0A9BE0]">{reelsCount} Reels (~₹{contentPay.toLocaleString()})</span>
              </div>
              <input
                type="range"
                min="0"
                max="8"
                step="1"
                value={reelsCount}
                onChange={(e) => setReelsCount(Number(e.target.value))}
                aria-label="Approved Social Media Reels per Month"
                className="w-full accent-[#0A9BE0] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0 reels</span>
                <span>4 reels</span>
                <span>8 reels</span>
              </div>
            </div>

            {/* Slider 4: Affiliate Customer Orders */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">Affiliate Customer Orders (Via Code)</span>
                <span className="font-mono font-bold text-[#B4F000]">{affiliateSales} Orders (~₹{affiliatePay.toLocaleString()})</span>
              </div>
              <input
                type="range"
                min="0"
                max="80"
                step="5"
                value={affiliateSales}
                onChange={(e) => setAffiliateSales(Number(e.target.value))}
                aria-label="Affiliate Customer Orders per Month"
                className="w-full accent-[#B4F000] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0 orders</span>
                <span>40 orders</span>
                <span>80 orders</span>
              </div>
            </div>

            {/* Slider 5: Peer Onboarding Referrals */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">Peer Rider Referrals Mentored</span>
                <span className="font-mono font-bold text-[#0A9BE0]">{referralsCount} Peers (~₹{referralPay.toLocaleString()})</span>
              </div>
              <input
                type="range"
                min="0"
                max="6"
                step="1"
                value={referralsCount}
                onChange={(e) => setReferralsCount(Number(e.target.value))}
                aria-label="Peer Rider Referrals Mentored per Month"
                className="w-full accent-[#0A9BE0] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0 peers</span>
                <span>3 peers</span>
                <span>6 peers</span>
              </div>
            </div>

            {/* Expense Deductions Toggle */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between p-3.5 rounded-2xl bg-[#010810] border border-white/5">
              <div>
                <div className="text-xs font-bold text-white">Deduct Estimated Operating Expenses</div>
                <div className="text-[11px] text-slate-400">EV charging (~₹800), mobile data (~₹400), maintenance reserve (~₹800)</div>
              </div>
              <button
                type="button"
                onClick={() => setDeductExpenses(!deductExpenses)}
                aria-pressed={deductExpenses}
                aria-label="Toggle Estimated Operating Expenses Deduction"
                className={`w-12 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
                  deductExpenses ? 'bg-[#B4F000]' : 'bg-white/20'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-black transition-transform ${
                    deductExpenses ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Right Column: Earnings Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 bg-[#03111f] border-2 border-[#B4F000]/60 shadow-[0_20px_50px_rgba(180,240,0,0.2)] relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B4F000]">
                  Projected Take-Home
                </span>
                <span className="text-xs font-mono text-slate-400">Per Month</span>
              </div>

              {/* Big Total */}
              <div className="mb-6">
                <div className="text-4xl sm:text-5xl font-black text-white">
                  ₹{netEarnings.toLocaleString('en-IN')}
                </div>
                <div className="text-xs font-semibold text-slate-400 mt-1">
                  {deductExpenses ? (
                    <span className="text-[#0A9BE0]">Net Take-Home after ₹2,000 estimated operating reserves</span>
                  ) : (
                    <span className="text-[#B4F000]">Estimated Gross Platform Earnings</span>
                  )}
                </div>
              </div>

              {/* Stream Breakdown */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Brand Transit Retainers:</span>
                  <span className="font-mono font-bold text-white">₹{brandTransitPay.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sampling & Spot Sales:</span>
                  <span className="font-mono font-bold text-white">₹{samplingPay.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Content / Reel Bounties:</span>
                  <span className="font-mono font-bold text-white">₹{contentPay.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Affiliate Purchases:</span>
                  <span className="font-mono font-bold text-white">₹{affiliatePay.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Referrals & Mentorship:</span>
                  <span className="font-mono font-bold text-white">₹{referralPay.toLocaleString()}</span>
                </div>

                {deductExpenses && (
                  <div className="flex justify-between text-red-400 pt-2 border-t border-white/10">
                    <span>Operating Expenses:</span>
                    <span className="font-mono font-bold">-₹{totalExpenses.toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Mandatory Required Disclaimer */}
            <div className="p-4 rounded-2xl bg-[#050b12] border border-white/10 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-400 leading-relaxed">
                <strong className="text-slate-200">Illustrative example only. </strong>
                Actual earnings are not guaranteed and depend on verified performance, available campaigns, applicable agreements and operating expenses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
