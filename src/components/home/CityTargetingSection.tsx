'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Compass,
  ArrowRight,
  Clock,
  Bike,
  Sparkles,
  Info,
  Navigation2,
} from 'lucide-react';

const HYDERABAD_ZONES = [
  {
    id: 'hitec-city',
    name: 'HITEC City & Cyber Towers',
    type: 'Tech Corridor',
    pinCodes: '500081, 500084',
    audience: 'Tech professionals, corporate employees, young spenders',
    density: 'Very High',
    landmarks: 'Cyber Towers, Mindspace, Knowledge City, Inorbit Mall',
    coords: { x: 38, y: 44 },
  },
  {
    id: 'madhapur',
    name: 'Madhapur & Durgam Cheruvu',
    type: 'Lifestyle & Startups',
    pinCodes: '500081, 500033',
    audience: 'Startups, foodies, boutique shoppers, evening diners',
    density: 'High',
    landmarks: 'Cable Bridge, Avasa, 100 Feet Road, Metro Station',
    coords: { x: 44, y: 48 },
  },
  {
    id: 'gachibowli',
    name: 'Gachibowli & Financial Dist.',
    type: 'Corporate Hub',
    pinCodes: '500032, 500075',
    audience: 'Global MNC executives, affluent gated-community families',
    density: 'High',
    landmarks: 'Wipro Circle, WaveRock, Stadium, Kokapet SEZ',
    coords: { x: 28, y: 56 },
  },
  {
    id: 'jubilee-hills',
    name: 'Jubilee Hills & Banjara Hills',
    type: 'Luxury & High-Street',
    pinCodes: '500033, 500034',
    audience: 'High-net-worth individuals, fashion consumers, luxury buyers',
    density: 'High',
    landmarks: 'Road No. 36, Road No. 10, KBR Park, City Centre',
    coords: { x: 55, y: 52 },
  },
  {
    id: 'kukatpally',
    name: 'Kukatpally & KPHB Colony',
    type: 'Dense Residential & Retail',
    pinCodes: '500072, 500085',
    audience: 'Families, college students, hostel residents, shoppers',
    density: 'Very High',
    landmarks: 'Forum Sujana Mall, JNTU, Metro Corridor, Commercial Hub',
    coords: { x: 42, y: 28 },
  },
  {
    id: 'begumpet',
    name: 'Begumpet & Secunderabad',
    type: 'Central Commercial Hub',
    pinCodes: '500016, 500003',
    audience: 'Traditional traders, transit commuters, central businesses',
    density: 'High',
    landmarks: 'Prajay Corporate, Lifestyle, Paradise Circle, MG Road',
    coords: { x: 68, y: 38 },
  },
];

export default function CityTargetingSection() {
  const [selectedZone, setSelectedZone] = useState(HYDERABAD_ZONES[0]);
  const [riderCount, setRiderCount] = useState<number>(2);
  const [durationDays, setDurationDays] = useState<number>(7);

  // Estimated illustrative metrics (simulation only)
  const estKm = riderCount * durationDays * 35; // roughly 35 km/day per rider
  const estHours = riderCount * durationDays * 6; // roughly 6 hours/day

  return (
    <section className="py-24 bg-gradient-to-b from-burgundy-900 via-burgundy to-burgundy-900 text-soft-ivory relative overflow-hidden">
      {/* Background Subtle Tech Shapes */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-electric-yellow/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
              <Compass className="w-3.5 h-3.5 text-electric-yellow" />
              Interactive Hyderabad Route Simulator
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-white uppercase leading-tight">
              Your City. Your Audience.{' '}
              <span className="text-electric-yellow">Your Campaign.</span>
            </h2>
            <p className="mt-4 text-base text-soft-ivory/80 leading-relaxed">
              Explore hyper-local campaign planning across Hyderabad’s premier business,
              residential, and lifestyle corridors. Plan rider allocation and estimate street coverage.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-black/30 border border-white/10 text-xs text-soft-ivory/80 flex items-start gap-2.5 max-w-sm">
            <Info className="w-4 h-4 text-electric-yellow shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              <strong>Planning Simulation:</strong> Illustrative estimates for campaign planning. Final routes,
              time slots, and municipal permissions are confirmed prior to launch.
            </p>
          </div>
        </div>

        {/* Main Interactive Grid: Map + Selector Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left: Interactive Hyderabad Map Visual (7 cols) */}
          <div className="lg:col-span-7 bg-carbon-black/70 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Navigation2 className="w-4 h-4 text-electric-yellow" />
                <span className="font-heading font-bold text-sm text-white">
                  Hyderabad Metropolitan Grid
                </span>
              </div>
              <span className="text-[11px] font-tech uppercase text-electric-yellow bg-electric-yellow/10 px-2 py-0.5 rounded border border-electric-yellow/30">
                Live Zone: {selectedZone.name}
              </span>
            </div>

            {/* Stylized Vector Map Canvas */}
            <div className="relative w-full aspect-[16/11] bg-graphite/40 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
              {/* Subtle road grid illustration */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Major Arterial Roads (Outer Ring Road, PVNR Expressway, Metro Corridor) */}
                <path
                  d="M10,80 Q300,10 600,60 T1000,120"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="3"
                />
                <path
                  d="M120,400 Q400,200 700,380 T950,280"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="4"
                />
                <path
                  d="M500,20 Q480,250 520,500"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="3"
                />
                {/* Active Dynamic Route Corridor */}
                <path
                  d={`M${selectedZone.coords.x * 6},${selectedZone.coords.y * 4} Q${
                    selectedZone.coords.x * 6 + 100
                  },${selectedZone.coords.y * 4 - 60} ${selectedZone.coords.x * 6 + 180},${
                    selectedZone.coords.y * 4 + 40
                  }`}
                  fill="none"
                  stroke="#FFE500"
                  strokeWidth="3"
                  className="animate-route-dash"
                />
              </svg>

              {/* Pulsing Hotspots for each zone */}
              {HYDERABAD_ZONES.map((zone) => {
                const isSelected = selectedZone.id === zone.id;
                return (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setSelectedZone(zone)}
                    style={{ left: `${zone.coords.x}%`, top: `${zone.coords.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group/pin focus:outline-none transition-all duration-300 z-20 ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                  >
                    <div className="relative flex items-center justify-center">
                      {isSelected && (
                        <span className="absolute w-8 h-8 rounded-full bg-electric-yellow/40 animate-ping" />
                      )}
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shadow-lg border transition-all ${
                          isSelected
                            ? 'bg-electric-yellow border-white text-carbon-black font-bold'
                            : 'bg-carbon-black border-electric-yellow/60 text-electric-yellow hover:bg-electric-yellow hover:text-carbon-black'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    {/* Tooltip on Map */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2.5 py-1 rounded bg-carbon-black/90 border border-white/20 text-[10px] font-heading font-semibold whitespace-nowrap shadow-xl pointer-events-none transition-opacity ${
                        isSelected ? 'opacity-100' : 'opacity-0 group-pin:opacity-100'
                      }`}
                    >
                      {zone.name}
                    </div>
                  </button>
                );
              })}

              {/* Watermark / Map Legend */}
              <div className="absolute bottom-3 left-3 bg-carbon-black/80 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-lg text-[10px] text-muted-grey font-tech flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-electric-yellow" />
                  <span>Selected Corridor</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <span>Available Hubs</span>
                </div>
              </div>
            </div>

            {/* Selected Zone Details Box */}
            <div className="mt-5 p-4 rounded-xl bg-white/5 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-[10px] font-tech uppercase text-electric-yellow block mb-0.5">
                  Target Demographics
                </span>
                <span className="text-white font-medium">{selectedZone.audience}</span>
              </div>
              <div>
                <span className="text-[10px] font-tech uppercase text-electric-yellow block mb-0.5">
                  High-Footfall Landmarks
                </span>
                <span className="text-white font-medium">{selectedZone.landmarks}</span>
              </div>
              <div>
                <span className="text-[10px] font-tech uppercase text-electric-yellow block mb-0.5">
                  Target PIN Codes
                </span>
                <span className="text-white font-tech font-bold tracking-wider">
                  {selectedZone.pinCodes}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Simulation Controls & Estimator (5 cols) */}
          <div className="lg:col-span-5 bg-carbon-card border border-graphite-border rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-graphite-border">
                <span className="font-heading font-bold text-base text-white">
                  Campaign Parameters
                </span>
                <span className="text-xs font-tech text-electric-yellow uppercase">
                  Step 1 of 3
                </span>
              </div>

              {/* Select Zone Dropdown / Buttons */}
              <div className="space-y-4 mb-6">
                <label className="text-xs font-tech uppercase tracking-wider text-muted-grey block">
                  Select Target Commercial Zone
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {HYDERABAD_ZONES.map((z) => (
                    <button
                      key={z.id}
                      type="button"
                      onClick={() => setSelectedZone(z)}
                      className={`p-2.5 rounded-lg text-left text-xs font-medium border transition-all ${
                        selectedZone.id === z.id
                          ? 'bg-burgundy/60 border-electric-yellow text-white font-bold'
                          : 'bg-graphite/40 border-graphite-border text-muted-grey hover:text-white hover:bg-graphite'
                      }`}
                    >
                      <div className="line-clamp-1">{z.name}</div>
                      <div className="text-[10px] text-electric-yellow/80 font-tech">
                        {z.type}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Number of Riders */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-tech uppercase tracking-wider text-muted-grey">
                    Deployment Fleet Size
                  </span>
                  <span className="font-heading font-bold text-electric-yellow">
                    {riderCount} {riderCount === 1 ? 'EV Rider' : 'EV Riders'}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 4, 8].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setRiderCount(n)}
                      className={`py-2 rounded-lg text-xs font-heading font-bold border transition-all ${
                        riderCount === n
                          ? 'bg-electric-yellow border-electric-yellow text-carbon-black shadow-md'
                          : 'bg-graphite/40 border-graphite-border text-muted-grey hover:text-white'
                      }`}
                    >
                      {n} {n === 1 ? 'Rider' : 'Riders'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Campaign Duration */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-tech uppercase tracking-wider text-muted-grey">
                    Campaign Duration
                  </span>
                  <span className="font-heading font-bold text-electric-yellow">
                    {durationDays} Days
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 7, 14, 30].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDurationDays(d)}
                      className={`py-2 rounded-lg text-xs font-heading font-bold border transition-all ${
                        durationDays === d
                          ? 'bg-electric-yellow border-electric-yellow text-carbon-black shadow-md'
                          : 'bg-graphite/40 border-graphite-border text-muted-grey hover:text-white'
                      }`}
                    >
                      {d} Days
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulation Output Cards */}
              <div className="p-4 rounded-xl bg-graphite/50 border border-graphite-border space-y-3 mb-6">
                <div className="text-[11px] font-tech uppercase tracking-widest text-electric-yellow">
                  Estimated Street Exposure
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-heading font-black text-white">
                      ~{estKm.toLocaleString()}{' '}
                      <span className="text-xs font-normal text-muted-grey">km</span>
                    </div>
                    <div className="text-[10px] text-muted-grey">Est. Street Transit</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-black text-white">
                      ~{estHours}{' '}
                      <span className="text-xs font-normal text-muted-grey">hrs</span>
                    </div>
                    <div className="text-[10px] text-muted-grey">Cumulative Street Hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <Link
                href={`/book-campaign?zone=${encodeURIComponent(
                  selectedZone.name
                )}&riders=${riderCount}&duration=${durationDays}`}
                className="w-full py-3.5 px-4 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider text-center shadow-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <span>Plan This Campaign in {selectedZone.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
