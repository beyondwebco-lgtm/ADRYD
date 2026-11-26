'use client';

import Link from 'next/link';
import { ArrowRight, Building2, Users2, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

export default function EntrepreneurEcosystemSection() {
  return (
    <section className="relative py-24 bg-[#000000] border-t border-[#0A9BE0]/20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px] bg-[#B4F000]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F000]/10 border border-[#B4F000]/30 text-xs font-bold uppercase tracking-wider text-[#B4F000]">
            The Symbiotic Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            HOW ENTREPRENEURS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] to-[#0A9BE0]">
              & BRANDS BENEFIT
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A flourishing two-sided marketplace. When passionate riders represent innovative products with professionalism, brands achieve unmatched street recall at a fraction of traditional billboard costs.
          </p>
        </div>

        {/* Two-Sided Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Side A: What Brands Need */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#030d17]/90 border border-[#0A9BE0]/30 shadow-[0_10px_30px_rgba(0,0,0,0.6)] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0A9BE0]/20 border border-[#0A9BE0]/30 flex items-center justify-center text-[#0A9BE0]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    Enterprise & Founder Need
                  </span>
                  <h3 className="text-xl font-black text-white">What Brands Need</h3>
                </div>
              </div>
            </div>

            <div className="space-y-3.5">
              {[
                { title: 'Dynamic High-Street Footprint', desc: 'Moving visibility through premium commercial avenues instead of passive static hoardings.' },
                { title: 'Authentic Product Sampling', desc: 'Putting real samples and trials directly into the hands of target consumers in corporate hubs.' },
                { title: 'Verified Proof of Execution', desc: 'GPS corridor tracking, timestamped fleet photography, and real-time dashboard analytics.' },
                { title: 'Agile Cost-Effective Deployments', desc: 'Activate 1 to 50+ vehicles within 48 hours without long-term rigid outdoor media lock-ins.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0A9BE0] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">{item.title}</div>
                    <div className="text-xs text-slate-300 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side B: What Riderpreneurs Deliver */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#03111f]/95 border-2 border-[#B4F000]/60 shadow-[0_10px_30px_rgba(180,240,0,0.2)] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#B4F000]/20 border border-[#B4F000]/30 flex items-center justify-center text-[#B4F000]">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#B4F000] uppercase tracking-widest block">
                    On-Ground Human Power
                  </span>
                  <h3 className="text-xl font-black text-white">What Riderpreneurs Deliver</h3>
                </div>
              </div>
            </div>

            <div className="space-y-3.5">
              {[
                { title: 'Professional Brand Representation', desc: 'Neat uniform kits, courteous customer communication, and trained product knowledge.' },
                { title: 'Precision Peak-Hour Coverage', desc: 'Saturating high-density corridors (Cyber Towers, Financial District, Jubilee Hills) when crowds peak.' },
                { title: 'Instant Mobile Sales & QR Leads', desc: 'Collecting customer pre-orders and processing cashless transactions right at the curb.' },
                { title: 'Local Cultural Warmth', desc: 'Real local ambassadors who connect with city commuters with authentic friendliness.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B4F000] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">{item.title}</div>
                    <div className="text-xs text-slate-200 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#001426] via-[#041a2e] to-[#010810] border border-[#0A9BE0]/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#B4F000]">
              Brand Activation Hub
            </div>
            <h4 className="text-2xl font-black text-white">
              Are you an entrepreneur or brand marketer?
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Deploy our verified electric fleet to launch your next product drop, store opening, or hyper-local corridor blitz across Hyderabad.
            </p>
          </div>

          <Link
            href="/book-campaign"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#B4F000] hover:bg-[#c3fc18] text-[#000000] font-black text-sm shadow-[0_4px_20px_rgba(180,240,0,0.4)] hover:shadow-[0_6px_25px_rgba(180,240,0,0.6)] transition-all shrink-0"
          >
            <span>Launch a Brand Campaign</span>
            <ArrowRight className="w-4 h-4 text-[#000000]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
