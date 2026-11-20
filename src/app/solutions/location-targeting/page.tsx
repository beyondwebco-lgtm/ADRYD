import type { Metadata } from 'next';
import Link from 'next/link';
import { Compass, MapPin, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Location & Corridor Targeting | ADRYD Hyderabad',
  description:
    'Surgical geographic and corridor-based EV advertising in Hyderabad. Target tech corridors, commercial hubs, high-streets, and specific PIN codes.',
};

const ZONES_BREAKDOWN = [
  {
    name: 'Tech & IT Corridor',
    locations: 'HITEC City, Madhapur, Gachibowli, Financial District, Kondapur',
    audience: 'Software engineers, corporate executives, startup founders, tech commuters',
    pinCodes: '500081, 500032, 500084, 500075',
    peakTimes: '8:30 AM - 11:30 AM & 5:00 PM - 8:30 PM',
  },
  {
    name: 'Luxury & Lifestyle Hub',
    locations: 'Jubilee Hills, Banjara Hills, Film Nagar, Somajiguda',
    audience: 'Affluent homeowners, luxury shoppers, fashion consumers, fine diners',
    pinCodes: '500033, 500034, 500096, 500082',
    peakTimes: '12:00 PM - 3:00 PM & 6:00 PM - 10:00 PM',
  },
  {
    name: 'Dense Residential & Retail',
    locations: 'Kukatpally, KPHB Colony, Nizampet, Miyapur',
    audience: 'Families, university students, women’s hostel residents, weekend shoppers',
    pinCodes: '500072, 500085, 500090, 500049',
    peakTimes: '10:00 AM - 1:00 PM & 5:30 PM - 9:30 PM',
  },
  {
    name: 'Central Commercial & Transit',
    locations: 'Begumpet, Secunderabad, Ameerpet, Panjagutta',
    audience: 'Traders, daily metro commuters, students, wholesale shoppers',
    pinCodes: '500016, 500003, 500038, 500082',
    peakTimes: '9:00 AM - 12:00 PM & 5:00 PM - 9:00 PM',
  },
];

export default function LocationTargetingPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#B8B8B8] pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#03F2FF]/30 text-[#03F2FF] text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            Geographic Precision
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#FFFFFF] uppercase leading-[1.02] mb-4">
            Location &amp; Corridor Targeting
          </h1>
          <p className="text-base sm:text-lg text-[#888888] max-w-2xl leading-relaxed">
            Eliminate wasted impressions by choosing the exact commercial arteries and residential
            clusters in Hyderabad that align with your customer demographics.
          </p>
        </div>

        {/* 4 Hyderabad Zones Breakdown */}
        <div className="space-y-6 mb-12">
          {ZONES_BREAKDOWN.map((zone, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#101010] border border-[#222222] hover:border-[#03F2FF]/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#222222]">
                <h3 className="font-heading font-bold text-xl text-[#FFFFFF] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#E7FF39]" />
                  {zone.name}
                </h3>
                <span className="text-xs font-tech text-[#03F2FF] uppercase bg-[#000000] px-2.5 py-1 rounded border border-[#03F2FF]/30">
                  PINs: {zone.pinCodes}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-[#888888] block text-[10px] font-tech uppercase mb-1">
                    Key Corridors &amp; Hubs
                  </span>
                  <span className="text-[#FFFFFF] font-medium">{zone.locations}</span>
                </div>
                <div>
                  <span className="text-[#888888] block text-[10px] font-tech uppercase mb-1">
                    Audience Demographics
                  </span>
                  <span className="text-[#FFFFFF] font-medium">{zone.audience}</span>
                </div>
                <div>
                  <span className="text-[#888888] block text-[10px] font-tech uppercase mb-1">
                    Recommended Peak Window
                  </span>
                  <span className="text-[#E7FF39] font-tech font-bold">{zone.peakTimes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Permissions & Compliance Notice */}
        <div className="p-4 rounded-xl bg-[#101010] border border-[#222222] mb-12 flex items-start gap-3 text-xs text-[#888888]">
          <ShieldAlert className="w-4 h-4 text-[#03F2FF] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#FFFFFF]">Corridor Permission Notice:</strong> In accordance with our
            operating compliance guidelines, specific transit corridors, high-security roads, or
            private mall driveways are validated for accessibility and regulatory compliance before
            final route authorization.
          </p>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-[#101010] border border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="font-heading font-bold text-xl text-[#FFFFFF]">
              Target a Specific Zone or Corridor
            </h4>
            <p className="text-xs text-[#B8B8B8] mt-1">
              Select your preferred Hyderabad commercial hub in our interactive campaign planner.
            </p>
          </div>
          <Link
            href="/book-campaign"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#000000] font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(231,255,57,0.3)]"
          >
            Open Campaign Planner
          </Link>
        </div>
      </div>
    </div>
  );
}
