'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Navigation2,
  ArrowRight,
  Info,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function CityTargetingSection() {
  const [selectedLocation, setSelectedLocation] = useState(
    SITE_CONFIG.pilotLocations[0]
  );
  const [riderCount, setRiderCount] = useState<number>(2);
  const [durationHours, setDurationHours] = useState<number>(4);

  return (
    <section id="pilot-locations" className="py-24 bg-[#0C0D12] text-[#F2F3F5] relative overflow-hidden border-t border-[#353740]">
      {/* Background Subtle Tech Grid & Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#24212C]/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
              HYDERABAD PILOT NETWORK
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
              STARTING WITH HYDERABAD.{' '}
              <br />
              <span className="text-[#E7FF39]">BUILT TO MOVE FURTHER.</span>
            </h2>
            <p className="mt-4 text-base text-[#A5A8B3] leading-relaxed">
              Explore proposed pilot corridors across Hyderabad’s prime technology, residential, and
              lifestyle hubs. Tailored audience segmentation for high-recall promotions and product discovery.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#17191F] border border-[#353740] text-xs text-[#A5A8B3] flex items-start gap-2.5 max-w-sm">
            <Info className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              <strong className="text-white">Planning Disclaimer:</strong> Proposed Hyderabad pilot locations — subject to feasibility and permissions. Simulated routes represent conceptual coverage.
            </p>
          </div>
        </div>

        {/* 5 Proposed Pilot Locations Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {SITE_CONFIG.pilotLocations.map((loc) => {
            const isSelected = selectedLocation.id === loc.id;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setSelectedLocation(loc)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  isSelected
                    ? 'bg-[#17191F] border-[#E7FF39] shadow-[0_0_20px_rgba(231,255,57,0.2)] ring-1 ring-[#E7FF39]'
                    : 'bg-[#17191F]/70 border-[#353740] hover:border-[#E7FF39]/40 text-[#A5A8B3]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-heading font-bold text-sm ${isSelected ? 'text-[#E7FF39]' : 'text-white'}`}>
                    {loc.name}
                  </span>
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-[#E7FF39]' : 'text-[#353740]'}`} />
                </div>
                <div className="text-[10px] font-tech text-[#A5A8B3] uppercase line-clamp-1">
                  {loc.zoneType}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Grid: Map Canvas + Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left: Futuristic Vector Dark Map Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-[#17191F] border border-[#353740] rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#353740]">
              <div className="flex items-center gap-2">
                <Navigation2 className="w-4 h-4 text-[#E7FF39]" />
                <span className="font-heading font-bold text-sm text-white">
                  Hyderabad Metropolitan Grid Preview
                </span>
              </div>
              <span className="text-[10px] font-tech uppercase text-[#E7FF39] bg-[#24212C] px-2 py-0.5 rounded border border-[#353740]">
                Active Test Zone: {selectedLocation.name}
              </span>
            </div>

            {/* Stylized Vector Map Canvas */}
            <div className="relative w-full aspect-[16/11] bg-[#0C0D12] rounded-2xl border border-[#353740] overflow-hidden flex items-center justify-center">
              {/* Radial center glow */}
              <div className="absolute inset-0 bg-radial-gradient from-[#24212C]/40 to-transparent pointer-events-none" />

              {/* Highway & Corridor Neon Lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Major Arterial Roads (ORR, PVNR, Inner Ring) */}
                <path
                  d="M10,80 Q300,20 600,70 T1000,120"
                  fill="none"
                  stroke="#353740"
                  strokeWidth="2.5"
                />
                <path
                  d="M120,400 Q400,220 700,380 T950,280"
                  fill="none"
                  stroke="#353740"
                  strokeWidth="3"
                />
                <path
                  d="M480,20 Q460,250 500,500"
                  fill="none"
                  stroke="#353740"
                  strokeWidth="2"
                />
                {/* Active Dynamic Neon Route Corridor */}
                <path
                  d={`M${selectedLocation.coordinates.x * 6.5},${selectedLocation.coordinates.y * 4.2} Q${
                    selectedLocation.coordinates.x * 6.5 + 80
                  },${selectedLocation.coordinates.y * 4.2 - 50} ${selectedLocation.coordinates.x * 6.5 + 160},${
                    selectedLocation.coordinates.y * 4.2 + 30
                  }`}
                  fill="none"
                  stroke="#E7FF39"
                  strokeWidth="3"
                  className="animate-route-dash"
                />
              </svg>

              {/* Hotspots for each 5 pilot locations */}
              {SITE_CONFIG.pilotLocations.map((loc) => {
                const isSelected = selectedLocation.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setSelectedLocation(loc)}
                    style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none transition-all duration-300 z-20 ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                  >
                    <div className="relative flex items-center justify-center">
                      {isSelected && (
                        <span className="absolute w-8 h-8 rounded-full bg-[#E7FF39]/35 animate-ping" />
                      )}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shadow-lg border transition-all ${
                          isSelected
                            ? 'bg-[#E7FF39] border-white text-[#0C0D12] font-black'
                            : 'bg-[#17191F] border-[#E7FF39]/50 text-[#E7FF39] hover:bg-[#E7FF39] hover:text-[#0C0D12]'
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                      </div>
                    </div>
                    {/* Tooltip on Map */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded bg-[#17191F] border border-[#353740] text-[10px] font-heading font-semibold text-white whitespace-nowrap shadow-xl pointer-events-none transition-opacity ${
                        isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      {loc.name}
                    </div>
                  </button>
                );
              })}

              {/* Map Legend */}
              <div className="absolute bottom-3 left-3 bg-[#17191F]/90 backdrop-blur-sm border border-[#353740] px-3 py-1.5 rounded-lg text-[10px] text-[#A5A8B3] font-tech flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E7FF39]" />
                  <span>Proposed Pilot Route</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#353740]" />
                  <span>City Arterials</span>
                </div>
              </div>
            </div>

            {/* Simulated Key Spots */}
            <div className="mt-4 pt-4 border-t border-[#353740] flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-tech text-[#A5A8B3] uppercase">Key Corridors:</span>
              {selectedLocation.keySpots.map((spot, i) => (
                <span
                  key={i}
                  className="text-[10px] font-tech px-2 py-0.5 rounded bg-[#0C0D12] text-[#F2F3F5] border border-[#353740]"
                >
                  {spot}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Detailed Area Panel (5 cols) */}
          <div className="lg:col-span-5 bg-[#17191F] border border-[#353740] rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#353740] mb-5">
                <span className="font-tech text-xs uppercase tracking-wider text-[#E7FF39] font-bold">
                  Proposed Pilot Location Profile
                </span>
                <span className="text-[10px] font-tech uppercase text-[#A5A8B3]">
                  Hyderabad
                </span>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase mb-1">
                {selectedLocation.name}
              </h3>
              <div className="text-xs font-tech text-[#E7FF39] uppercase mb-5">
                {selectedLocation.zoneType}
              </div>

              {/* Target Audience Profile */}
              <div className="p-4 rounded-xl bg-[#0C0D12] border border-[#353740] space-y-1.5 mb-4">
                <div className="text-[10px] font-tech uppercase text-[#E7FF39] font-bold">
                  Proposed Target Audience
                </div>
                <p className="text-xs text-[#F2F3F5] leading-relaxed">
                  {selectedLocation.targetAudience}
                </p>
              </div>

              {/* Relevant Product Categories */}
              <div className="p-4 rounded-xl bg-[#0C0D12] border border-[#353740] space-y-1.5 mb-6">
                <div className="text-[10px] font-tech uppercase text-[#E7FF39] font-bold">
                  Relevant Product Categories
                </div>
                <p className="text-xs text-[#F2F3F5] leading-relaxed">
                  {selectedLocation.relevantCategories}
                </p>
              </div>

              {/* Simulation metrics */}
              <div className="p-4 rounded-xl bg-[#24212C]/60 border border-[#353740] grid grid-cols-2 gap-3 text-center">
                <div>
                  <div className="text-xl font-heading font-black text-white">
                    {riderCount} {riderCount === 1 ? 'Rider' : 'Riders'}
                  </div>
                  <div className="text-[10px] font-tech text-[#A5A8B3] uppercase">
                    Suggested Fleet
                  </div>
                </div>
                <div>
                  <div className="text-xl font-heading font-black text-[#E7FF39]">
                    {durationHours} Hours
                  </div>
                  <div className="text-[10px] font-tech text-[#A5A8B3] uppercase">
                    Peak Corridor Slot
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Link
                href={`/book-campaign?zone=${encodeURIComponent(selectedLocation.name)}`}
                className="w-full py-3.5 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] font-heading font-black text-xs uppercase tracking-wider text-center shadow-[0_0_20px_rgba(231,255,57,0.3)] flex items-center justify-center gap-2 transition-all"
              >
                <span>Plan Campaign in {selectedLocation.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-[10px] font-tech text-[#A5A8B3] text-center mt-2.5">
                Proposed Hyderabad pilot locations — subject to feasibility and permissions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
