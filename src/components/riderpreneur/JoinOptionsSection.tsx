'use client';

import Link from 'next/link';
import { Zap, BatteryCharging, ArrowRight, CheckCircle2, Shield, ArrowUpRight } from 'lucide-react';

export default function JoinOptionsSection() {
  return (
    <section id="join-options" className="relative py-20 bg-[#000000] border-t border-[#0A9BE0]/20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-[#B4F000]/10 rounded-full blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-xs font-bold uppercase tracking-wider text-[#0A9BE0]">
            Flexible Onboarding Options
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            TWO WAYS TO JOIN{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] to-[#0A9BE0]">
              ADRYD
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Whether you own an electric two-wheeler or need a rental EV with swappable batteries, we have an immediate pathway for you to start earning as a Riderpreneur.
          </p>
        </div>

        {/* 2 Big Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Option 1: Own EV */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#030d17]/90 border border-[#0A9BE0]/35 hover:border-[#B4F000]/60 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black tracking-widest px-3 py-1.5 rounded-full bg-[#0A9BE0]/20 text-[#0A9BE0] border border-[#0A9BE0]/35 uppercase">
                  Option 01
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 flex items-center justify-center text-[#0A9BE0]">
                  <Zap className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#B4F000] transition-colors mb-2">
                Ride Your Own Electric Scooter
              </h3>
              <p className="text-sm font-semibold text-[#0A9BE0] mb-4">
                Maximum Earning Retention • Zero Vehicle Rental Fees
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Mount our lightweight, non-invasive backlit display kit onto your personal electric scooter (Ola, Ather, TVS iQube, Bajaj Chetak, Hero Vida, etc.). Retain 100% of your earnings with zero vehicle deductions.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#B4F000] shrink-0" />
                  <span>15-minute standard non-damaging display kit mounting</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#B4F000] shrink-0" />
                  <span>Keep 100% of corridor hourly rates and sales margins</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#B4F000] shrink-0" />
                  <span>Rapid 24-hour document verification & activation</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#B4F000] shrink-0" />
                  <span>Low home charging cost (~₹25–₹35 per 80 km)</span>
                </div>
              </div>
            </div>

            <Link
              href="/become-a-rider?type=own_vehicle"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] font-black text-base shadow-[0_6px_20px_rgba(180,240,0,0.35)] hover:shadow-[0_8px_30px_rgba(180,240,0,0.5)] transition-all"
            >
              <span>Register with Own Vehicle</span>
              <ArrowRight className="w-4 h-4 text-[#000000]" />
            </Link>
          </div>

          {/* Option 2: Rental Fleet */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#03111f]/95 border-2 border-[#0A9BE0]/50 hover:border-[#0A9BE0] transition-all duration-300 shadow-[0_12px_40px_rgba(10,155,224,0.3)] flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black tracking-widest px-3 py-1.5 rounded-full bg-[#B4F000]/20 text-[#B4F000] border border-[#B4F000]/35 uppercase">
                  Option 02
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#B4F000]/15 border border-[#B4F000]/30 flex items-center justify-center text-[#B4F000]">
                  <BatteryCharging className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#0A9BE0] transition-colors mb-2">
                Join via Rental Electric Fleet
              </h3>
              <p className="text-sm font-semibold text-[#B4F000] mb-4">
                Low Security Deposit • Swappable Batteries • Full Maintenance
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Don&apos;t own an electric scooter? Get deployed with our verified partner EV fleet. Benefit from affordable weekly lease options, unlimited battery swapping, and full vehicle maintenance.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#0A9BE0] shrink-0" />
                  <span>Immediate EV scooter allocation with low initial deposit</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#0A9BE0] shrink-0" />
                  <span>Unlimited 2-minute battery swaps across 40+ city stations</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#0A9BE0] shrink-0" />
                  <span>Free routine servicing, tire maintenance and insurance</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#0A9BE0] shrink-0" />
                  <span>Weekly rental automatically settled from campaign earnings</span>
                </div>
              </div>
            </div>

            <Link
              href="/become-a-rider?type=rental"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#0A9BE0] hover:bg-[#20aff5] text-white font-black text-base shadow-[0_6px_20px_rgba(10,155,224,0.35)] hover:shadow-[0_8px_30px_rgba(10,155,224,0.5)] transition-all"
            >
              <span>Apply for Rental Electric Scooter</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>

        {/* Secondary Fleet Partner Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#040e17] border border-[#0A9BE0]/25 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-[#B4F000]">
              Commercial Fleet Operators
            </div>
            <h4 className="text-lg font-bold text-white">
              Do you manage a fleet of 10+ electric scooters in Hyderabad?
            </h4>
            <p className="text-xs text-slate-400">
              Monetize idle fleet hours and secure steady monthly campaign retainers for your vehicle network.
            </p>
          </div>

          <Link
            href="/become-a-rider?partner=fleet"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all shrink-0"
          >
            <span>Partner as Fleet Provider</span>
            <ArrowUpRight className="w-4 h-4 text-[#B4F000]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
