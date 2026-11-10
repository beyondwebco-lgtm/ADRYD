import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShoppingBag,
  UtensilsCrossed,
  Building,
  GraduationCap,
  CalendarCheck2,
  Rocket,
  Stethoscope,
  Briefcase,
  ArrowRight,
  Check,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve | ADRYD Mobility Media',
  description:
    'Tailored electric mobility advertising strategies for retail, real estate, restaurants, education, events, startups, and marketing agencies across Hyderabad.',
};

const INDUSTRY_BLUEPRINTS = [
  {
    id: 'retail-fashion',
    title: 'Retail, Fashion & Lifestyle',
    icon: ShoppingBag,
    summary: 'Bring seasonal wear, boutique launches, and festive discounts to high-footfall high streets.',
    recommendedFleet: '2 to 4 EV Scooters',
    recommendedCorridors: 'Jubilee Hills Rd 36, Banjara Hills Rd 10, Inorbit Mall Area',
    strategy: 'Use ADRYD Upgrade illuminated showcase boxes for tactile product inspection outside tech campuses and women’s hostels.',
  },
  {
    id: 'restaurants-cafes',
    title: 'Restaurants, Breweries & Cafés',
    icon: UtensilsCrossed,
    summary: 'Drive high-volume lunch orders and evening weekend footfall to newly opened dining venues.',
    recommendedFleet: '2 EV Scooters',
    recommendedCorridors: 'Madhapur 100 Ft Rd, Gachibowli Financial District, Knowledge City',
    strategy: 'Concentrate morning coffee hours and 12:00 PM – 2:30 PM lunch surges right at IT park entrances with QR delivery discount codes.',
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Living Communities',
    icon: Building,
    summary: 'Generate high-intent site visit enquiries for luxury villas, gated apartments, and commercial projects.',
    recommendedFleet: '4 to 8 EV Scooters',
    recommendedCorridors: 'Kokapet SEZ, Narsingi, Tellapur, Financial District, Jubilee Hills',
    strategy: 'Target affluent commuter arterial roads during weekend mornings and weekday evening traffic jams with clean, elegant branding.',
  },
  {
    id: 'education-coaching',
    title: 'Education, Universities & EdTech',
    icon: GraduationCap,
    summary: 'Amplify seasonal admission drives, competitive exam batches, and open house dates.',
    recommendedFleet: '2 to 4 EV Scooters',
    recommendedCorridors: 'Ameerpet, Kukatpally, Madhapur, Dilsukhnagar, Ashok Nagar',
    strategy: 'Saturate dense student residential clusters, library hubs, and metro transit points preceding enrollment deadlines.',
  },
  {
    id: 'events-exhibitions',
    title: 'Events, Expos & Concerts',
    icon: CalendarCheck2,
    summary: 'Execute a concentrated 48-to-72 hour urban blitz leading up to major ticketed events and trade expos.',
    recommendedFleet: '6 to 10+ EV Scooters',
    recommendedCorridors: 'HITEX Exhibition Center, HICC, Gachibowli Stadium, Cyber Towers',
    strategy: 'Coordinated convoys circling exhibition approaches and city metro corridors to ignite urgent ticket sales.',
  },
  {
    id: 'startups-d2c',
    title: 'Startups & Emerging D2C Brands',
    icon: Rocket,
    summary: 'Get your app downloads or physical products noticed without burning millions on static billboards.',
    recommendedFleet: '2 to 4 EV Scooters',
    recommendedCorridors: 'HITEC City, T-Hub Phase 2, Madhapur, Kondapur',
    strategy: 'Combine moving scooters with bold QR pre-order incentives and Instagram reel street content for viral organic reach.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare, Clinics & Diagnostics',
    icon: Stethoscope,
    summary: 'Promote new branch openings, preventive wellness packages, and local health checkup camps.',
    recommendedFleet: '1 to 2 EV Scooters',
    recommendedCorridors: 'Kukatpally, Begumpet, Secunderabad, Kondapur',
    strategy: 'Compliant, dignified local awareness along residential family sectors and arterial neighbourhood transit lanes.',
  },
  {
    id: 'marketing-agencies',
    title: 'Advertising Agencies & Media Buyers',
    icon: Briefcase,
    summary: 'Integrate dynamic electric vehicle mobility into your clients’ multi-channel outdoor media plans.',
    recommendedFleet: 'Flexible Agency Fleet Booking',
    recommendedCorridors: 'Custom Hyderabad Citywide Grid',
    strategy: 'Access white-label post-campaign execution audits, photographic proof decks, and priority fleet reservation.',
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-carbon-black text-soft-ivory pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy/30 border border-burgundy-light text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            Strategic Industry Blueprints
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-[1.02] mb-4">
            Built For Brands That Want To Be Seen
          </h1>
          <p className="text-base sm:text-lg text-muted-grey max-w-2xl leading-relaxed">
            Every business category has unique customer touchpoints. Explore how ADRYD customizes
            fleet sizes, corridor timings, and promotional formats for your sector.
          </p>
        </div>

        {/* 8 Industry Blueprints Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {INDUSTRY_BLUEPRINTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-carbon-card border border-graphite-border hover:border-electric-yellow/40 transition-all flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-graphite-border">
                    <div className="w-12 h-12 rounded-xl bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-tech text-electric-yellow font-bold uppercase">
                      Hyderabad Blueprint
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-2xl text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-grey leading-relaxed mb-6">
                    {item.summary}
                  </p>

                  <div className="space-y-3 p-4 rounded-xl bg-graphite/40 border border-graphite-border text-xs mb-6">
                    <div>
                      <span className="text-muted-grey block text-[10px] font-tech uppercase mb-0.5">
                        Recommended Fleet Scale:
                      </span>
                      <span className="text-white font-bold">{item.recommendedFleet}</span>
                    </div>
                    <div>
                      <span className="text-muted-grey block text-[10px] font-tech uppercase mb-0.5">
                        Target Corridors:
                      </span>
                      <span className="text-electric-yellow font-medium">{item.recommendedCorridors}</span>
                    </div>
                    <div>
                      <span className="text-muted-grey block text-[10px] font-tech uppercase mb-0.5">
                        Tactical Approach:
                      </span>
                      <span className="text-soft-ivory/90 leading-relaxed">{item.strategy}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-graphite-border">
                  <Link
                    href={`/book-campaign?industry=${item.id}`}
                    className="inline-flex items-center justify-between w-full text-xs font-heading font-bold text-electric-yellow hover:underline"
                  >
                    <span>Plan {item.title} Campaign</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-burgundy-900 via-burgundy to-burgundy-900 border border-burgundy-light flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-xl text-white">
              Don&apos;t See Your Vertical?
            </h4>
            <p className="text-xs text-soft-ivory/80 mt-1">
              Our marketing strategy team creates bespoke routing schedules and custom vehicle
              activations for emerging sectors.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider"
          >
            Consult Campaign Specialist
          </Link>
        </div>
      </div>
    </div>
  );
}
