'use client';

import { Compass, Palmtree, Mountain, MapPin, CheckCircle2, Sparkles, Plane } from 'lucide-react';

export default function SponsoredTravelSection() {
  const trips = [
    {
      title: 'Goa Coastal Highway Expedition',
      destination: 'Goa • Coastal Bay',
      duration: '3 Days / 2 Nights',
      icon: Palmtree,
      color: '#B4F000',
      description: 'Scenic electric scooter convoy along picturesque coastal roads, sunset beachside awards banquet, and live brand activation showcase.',
      highlights: ['4-star beachfront resort stay', 'Sunset coastal fleet rally', 'Annual Riderpreneur Awards Gala'],
    },
    {
      title: 'Coorg Western Ghats Coffee Retreat',
      destination: 'Coorg • Karnataka Hills',
      duration: '3 Days / 2 Nights',
      icon: Mountain,
      color: '#0A9BE0',
      description: 'Mountain ridge rides through aromatic coffee estates, wellness camp, and direct strategic advisory roundtable with D2C brand founders.',
      highlights: ['Luxury plantation estate stay', 'Founder roundtable & bonfire', 'Artisan organic coffee sampling'],
    },
    {
      title: 'Pondicherry Promenade Heritage Tour',
      destination: 'Pondicherry • Bay of Bengal',
      duration: '3 Days / 2 Nights',
      icon: Compass,
      color: '#F4DE26',
      description: 'Heritage street rallies through French quarter avenues, coastal sunrise photo shoots, and celebration gala dinner with regional fleet peers.',
      highlights: ['French quarter boutique villa', 'Sunrise beach drone photoshoot', 'Regional Captains council dinner'],
    },
  ];

  return (
    <section className="relative py-24 bg-[#000000] border-t border-[#0A9BE0]/20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[400px] bg-[#0A9BE0]/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A9BE0]/15 border border-[#0A9BE0]/30 text-xs font-bold uppercase tracking-wider text-[#0A9BE0]">
            <Plane className="w-3.5 h-3.5 text-[#B4F000]" />
            <span>Brand Promotion Vacation Programme</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            SPONSORED TRAVEL &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4F000] to-[#0A9BE0]">
              PROMOTIONAL EXPERIENCES
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            High performance unlocks fully sponsored domestic holidays. Ride in scenic coastal convoys, bond with fellow regional captains, and celebrate your annual milestones in style.
          </p>
        </div>

        {/* 3 Trips Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {trips.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-7 bg-[#030d17]/90 border border-[#0A9BE0]/30 hover:border-[#B4F000]/60 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#B4F000]" />
                      <span>{t.destination}</span>
                    </span>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider"
                      style={{
                        backgroundColor: `${t.color}20`,
                        color: t.color,
                        border: `1px solid ${t.color}40`,
                      }}
                    >
                      {t.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-[#B4F000] transition-colors mb-3">
                    {t.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                    {t.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    {t.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0A9BE0] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#B4F000] font-bold">
                  ★ 100% All-Inclusive (Stay, Food, Travel & EV Fleet)
                </div>
              </div>
            );
          })}
        </div>

        {/* Qualification Criteria Pill */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#001426] border border-[#0A9BE0]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#B4F000] shrink-0" />
            <div className="text-xs text-slate-300">
              <strong className="text-white">Eligibility Criteria: </strong>
              Available to Level 7+ Regional Captains and the top 5% annual riders with 4.9+ safety and customer ratings.
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#B4F000]/20 text-[#B4F000] text-xs font-black uppercase tracking-wider shrink-0 border border-[#B4F000]/30">
            Annual Qualification
          </span>
        </div>
      </div>
    </section>
  );
}
