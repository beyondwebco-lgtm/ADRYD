'use client';

import { useState } from 'react';
import { QrCode, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Info, Copy, Check } from 'lucide-react';

export default function AffiliateIdSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText('AFF-R10025');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      step: '01',
      title: 'Permanent ID Allocation',
      desc: 'Assigned upon completing orientation. Bound permanently to your verified rider profile.',
    },
    {
      step: '02',
      title: 'Multi-Surface Deployment',
      desc: 'Printed on vehicle display boxes, NFC smartcards, waterproof flyer slips, and digital links.',
    },
    {
      step: '03',
      title: 'Real-World Engagement',
      desc: 'Commuters and pedestrians scan during street pauses, red lights, or docked pop-up showcases.',
    },
    {
      step: '04',
      title: 'Immediate Customer Benefit',
      desc: 'Consumers unlock 10%–20% partner launch discounts when ordering via your code.',
    },
    {
      step: '05',
      title: 'Smart Attribution Tracking',
      desc: '60–90 day tracking cookie attributes repeat customer orders directly to your Rider ID.',
    },
    {
      step: '06',
      title: 'Automated Wallet Credits',
      desc: '5%–15% commission credited directly to your in-app wallet with instant UPI settlement.',
    },
  ];

  return (
    <section id="affiliate" className="relative py-24 bg-[#000000] border-t border-[#0A9BE0]/20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-[#B4F000]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F000]/10 border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider text-[#B4F000]">
            Long-Term Digital Equity
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            YOUR LIFETIME{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] to-[#0A9BE0]">
              AFFILIATE ID
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Every customer you introduce to a partner brand remains tied to your unique code. Turn casual street conversations into recurring commercial attribution.
          </p>
          <p className="text-xs text-[#94A3B8] font-medium mt-1">
            A lifetime affiliate identifier does not guarantee lifetime earnings or permanent commission rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Demo Smart Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Card Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#0A9BE0] to-[#B4F000] opacity-40 blur-xl" />

              {/* The Smart Card */}
              <div className="relative rounded-3xl p-7 bg-gradient-to-br from-[#041221] via-[#020810] to-[#010408] border-2 border-[#0A9BE0]/50 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-white space-y-6">
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#B4F000] text-black font-black flex items-center justify-center text-xs">
                      AD
                    </div>
                    <div>
                      <div className="text-xs font-black tracking-wider uppercase">ADRYD</div>
                      <div className="text-[10px] text-slate-400 font-mono">SMART RIDER PASS</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#0A9BE0]/20 border border-[#0A9BE0]/40 text-[10px] font-bold text-[#0A9BE0] uppercase">
                    Level 4 Gold
                  </div>
                </div>

                {/* Card Center: Rider Details & QR Box */}
                <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-black/60 border border-white/10">
                  <div className="space-y-1">
                    <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">
                      Verified Riderpreneur
                    </div>
                    <div className="text-lg font-black text-white">Arjun Sharma</div>
                    <div className="text-xs font-mono text-[#0A9BE0]">ID: ADRYD-R10025</div>
                  </div>

                  {/* QR Code graphic */}
                  <div className="w-20 h-20 rounded-xl bg-white p-1.5 flex flex-col items-center justify-center shrink-0 shadow-md">
                    <QrCode className="w-full h-full text-black" />
                  </div>
                </div>

                {/* Permanent Affiliate Code Pill */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#001426] border border-[#B4F000]/40">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">
                      Permanent Referral Code
                    </div>
                    <div className="text-base font-black text-[#B4F000] font-mono tracking-wider">
                      AFF-R10025
                    </div>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="px-3 py-1.5 rounded-xl bg-[#B4F000]/15 hover:bg-[#B4F000]/25 text-[#B4F000] text-xs font-bold border border-[#B4F000]/30 flex items-center gap-1.5 transition-all"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Card Footer NFC / Chip */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#B4F000]" />
                    NFC Contactless Enabled
                  </span>
                  <span className="font-mono text-slate-400">EXP: LIFETIME</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6-Step Lifecycle Flow */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-6">
              How the Affiliate Lifecycle Works
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {steps.map((st) => (
                <div
                  key={st.step}
                  className="p-4 rounded-2xl bg-[#030d17]/80 border border-[#0A9BE0]/20 hover:border-[#0A9BE0]/50 transition-all space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#B4F000] bg-[#B4F000]/15 px-2 py-0.5 rounded-md border border-[#B4F000]/30">
                      Step {st.step}
                    </span>
                    <h4 className="text-sm font-bold text-white">{st.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Regulatory Transparency Box */}
            <div className="p-4 rounded-2xl bg-[#03111f] border border-[#0A9BE0]/30 flex items-start gap-3 mt-6">
              <Info className="w-5 h-5 text-[#0A9BE0] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white">Commercial Transparency Note: </strong>
                The Lifetime Affiliate ID is an attribution tool designed to track real consumer purchases generated through your unique code. It does not represent an unconditional or passive income guarantee; earnings correspond directly to actual customer transactions and campaign partner terms.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
