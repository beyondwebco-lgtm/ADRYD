'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Navigation2,
  ArrowRight,
  Info,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function CityTargetingSection() {
  const [selectedLocation, setSelectedLocation] = useState(
    SITE_CONFIG.pilotLocations[0]
  );
  const [riderCount] = useState<number>(2);
  const [durationHours] = useState<number>(4);

  return (
    <section id="pilot-locations" className="py-24 bg-[#000000] text-[#B8B8B8] relative overflow-hidden border-t border-[#222222]">
      {/* Background Subtle Tech Grid & Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#03F2FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101010] border border-[#03F2FF]/30 text-[#03F2FF] text-xs font-tech font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#03F2FF] animate-pulse" />
              HYDERABAD PILOT NETWORK
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#FFFFFF] uppercase leading-tight">
              STARTING WITH HYDERABAD.{' '}
              <br />
              <span className="text-[#E7FF39]">BUILT TO MOVE FURTHER.</span>
            </h2>
            <p className="mt-4 text-base text-[#B8B8B8] leading-relaxed">
              Explore proposed pilot corridors across Hyderabad’s prime technology, residential, and
              lifestyle hubs. Tailored audience segmentation for high-recall promotions and product discovery.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#101010] border border-[#222222] text-xs text-[#888888] flex items-start gap-2.5 max-w-sm">
            <Info className="w-4 h-4 text-[#03F2FF] shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              <strong className="text-[#FFFFFF]">Planning Disclaimer:</strong> Proposed Hyderabad pilot locations — subject to feasibility and permissions. Simulated routes represent conceptual coverage.
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
                    ? 'bg-[#101010] border-[#E7FF39] shadow-[0_0_20px_rgba(231,255,57,0.2)] ring-1 ring-[#E7FF39]'
                    : 'bg-[#101010]/70 border-[#222222] hover:border-[#E7FF39]/40 text-[#888888]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-heading font-bold text-sm ${isSelected ? 'text-[#E7FF39]' : 'text-[#FFFFFF]'}`}>
                    {loc.name}
                  </span>
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-[#E7FF39]' : 'text-[#888888]'}`} />
                </div>
                <div className="text-[10px] font-tech text-[#888888] uppercase line-clamp-1">
                  {loc.zoneType}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Grid: Map Canvas + Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left: Futuristic Vector Dark Map Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-[#101010] border border-[#222222] rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#222222]">
              <div className="flex items-center gap-2">
                <Navigation2 className="w-4 h-4 text-[#03F2FF]" />
                <span className="font-heading font-bold text-sm text-[#FFFFFF]">
                  Hyderabad Metropolitan Grid Preview
                </span>
              </div>
              <span className="text-[10px] font-tech uppercase text-[#03F2FF] bg-[#000000] px-2.5 py-0.5 rounded border border-[#03F2FF]/30">
                Active Test Zone: {selectedLocation.name}
              </span>
            </div>

            {/* Stylized Vector Map Canvas */}
            <div className="relative w-full aspect-[16/11] bg-[#000000] rounded-2xl border border-[#222222] overflow-hidden flex items-center justify-center">
              {/* Radial center glow */}
              <div className="absolute inset-0 bg-radial-gradient from-[#03F2FF]/5 to-transparent pointer-events-none" />

              {/* Highway & Corridor Neon Lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Major Arterial Roads (ORR, PVNR, Inner Ring) */}
                <path
                  d="M10,80 Q300,20 600,70 T1000,120"
                  fill="none"
                  stroke="#222222"
                  strokeWidth="2.5"
                />
                <path
                  d="M120,400 Q400,220 700,380 T950,280"
                  fill="none"
                  stroke="#222222"
                  strokeWidth="3"
                />
                <path
                  d="M480,20 Q460,250 500,500"
                  fill="none"
                  stroke="#222222"
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
                            ? 'bg-[#E7FF39] border-[#FFFFFF] text-[#000000] font-black'
                            : 'bg-[#101010] border-[#03F2FF]/50 text-[#03F2FF] hover:bg-[#03F2FF] hover:text-[#000000]'
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                      </div>
                    </div>
                    {/* Tooltip on Map */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded bg-[#101010] border border-[#222222] text-[10px] font-heading font-semibold text-[#FFFFFF] whitespace-nowrap shadow-xl pointer-events-none transition-opacity ${
                        isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      {loc.name}
                    </div>
                  </button>
                );
              })}

              {/* Map Legend */}
              <div className="absolute bottom-3 left-3 bg-[#101010]/90 backdrop-blur-sm border border-[#222222] px-3 py-1.5 rounded-lg text-[10px] text-[#888888] font-tech flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E7FF39]" />
                  <span>Proposed Pilot Route</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#333333]" />
                  <span>City Arterials</span>
                </div>
              </div>
            </div>

            {/* Simulated Key Spots */}
            <div className="mt-4 pt-4 border-t border-[#222222] flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-tech text-[#03F2FF] uppercase">Key Corridors:</span>
              {selectedLocation.keySpots.map((spot, i) => (
                <span
                  key={i}
                  className="text-[10px] font-tech px-2 py-0.5 rounded bg-[#000000] text-[#B8B8B8] border border-[#222222]"
                >
                  {spot}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Detailed Area Panel (5 cols) */}
          <div className="lg:col-span-5 bg-[#101010] border border-[#222222] rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#222222] mb-5">
                <span className="font-tech text-xs uppercase tracking-wider text-[#03F2FF] font-bold">
                  Proposed Pilot Location Profile
                </span>
                <span className="text-[10px] font-tech uppercase text-[#888888]">
                  Hyderabad
                </span>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#FFFFFF] uppercase mb-1">
                {selectedLocation.name}
              </h3>
              <div className="text-xs font-tech text-[#E7FF39] uppercase mb-5">
                {selectedLocation.zoneType}
              </div>

              {/* Target Audience Profile */}
              <div className="p-4 rounded-xl bg-[#000000] border border-[#222222] space-y-1.5 mb-4">
                <div className="text-[10px] font-tech uppercase text-[#03F2FF] font-bold">
                  Proposed Target Audience
                </div>
                <p className="text-xs text-[#B8B8B8] leading-relaxed">
                  {selectedLocation.targetAudience}
                </p>
              </div>

              {/* Relevant Product Categories */}
              <div className="p-4 rounded-xl bg-[#000000] border border-[#222222] space-y-1.5 mb-6">
                <div className="text-[10px] font-tech uppercase text-[#03F2FF] font-bold">
                  Relevant Product Categories
                </div>
                <p className="text-xs text-[#B8B8B8] leading-relaxed">
                  {selectedLocation.relevantCategories}
                </p>
              </div>

              {/* Simulation metrics */}
              <div className="p-4 rounded-xl bg-[#151515] border border-[#222222] grid grid-cols-2 gap-3 text-center">
                <div>
                  <div className="text-xl font-heading font-black text-[#FFFFFF]">
                    {riderCount} {riderCount === 1 ? 'Rider' : 'Riders'}
                  </div>
                  <div className="text-[10px] font-tech text-[#888888] uppercase">
                    Suggested Fleet
                  </div>
                </div>
                <div>
                  <div className="text-xl font-heading font-black text-[#E7FF39]">
                    {durationHours} Hours
                  </div>
                  <div className="text-[10px] font-tech text-[#888888] uppercase">
                    Peak Corridor Slot
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Link
                href={`/book-campaign?zone=${encodeURIComponent(selectedLocation.name)}`}
                className="w-full py-3.5 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#000000] font-heading font-black text-xs uppercase tracking-wider text-center shadow-[0_0_20px_rgba(231,255,57,0.3)] flex items-center justify-center gap-2 transition-all"
              >
                <span>Plan Campaign in {selectedLocation.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-[10px] font-tech text-[#888888] text-center mt-2.5">
                Proposed Hyderabad pilot locations — subject to feasibility and permissions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
