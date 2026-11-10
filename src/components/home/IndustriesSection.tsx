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
} from 'lucide-react';

const industries = [
  {
    id: 'retail-fashion',
    name: 'Retail & Fashion',
    icon: ShoppingBag,
    example: 'New store openings, seasonal collections, weekend flash discounts',
    benefit: 'High-density high-street & residential corridor presence',
  },
  {
    id: 'restaurants-cafes',
    name: 'Restaurants & Cafés',
    icon: UtensilsCrossed,
    example: 'New outlet launches, lunch-hour delivery promotions, weekend brunch awareness',
    benefit: 'Target office workers in IT parks during peak lunch hours',
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Living',
    icon: Building,
    example: 'Pre-launch bookings, luxury villa site visits, gated community awareness',
    benefit: 'Route presence along affluent corridors and tech commuter routes',
  },
  {
    id: 'education-coaching',
    name: 'Education & Coaching',
    icon: GraduationCap,
    example: 'Admissions open, competitive exam courses, campus open days',
    benefit: 'Target student hubs, university zones, and hostel sectors',
  },
  {
    id: 'events-exhibitions',
    name: 'Events & Exhibitions',
    icon: CalendarCheck2,
    example: 'Concerts, trade expos, shopping festivals, startup summits',
    benefit: 'Concentrated 48-hour street blitz preceding the event',
  },
  {
    id: 'startups-d2c',
    name: 'Startups & D2C Brands',
    icon: Rocket,
    example: 'App download drives, direct product sampling, hyper-local awareness',
    benefit: 'Cost-effective alternative to expensive hoardings',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Wellness',
    icon: Stethoscope,
    example: 'Diagnostic center openings, wellness clinics, health checkup drives',
    benefit: 'Compliant local awareness across neighbourhood communities',
  },
  {
    id: 'marketing-agencies',
    name: 'Advertising Agencies',
    icon: Briefcase,
    example: 'Multi-client media planning, innovative OOH mix, experimental street marketing',
    benefit: 'White-label campaign reports and dedicated agency fleet capacity',
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-soft-ivory text-carbon-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy/10 text-burgundy text-xs font-tech font-bold uppercase tracking-widest mb-4">
            Target Segments
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-carbon-black uppercase leading-tight">
            Built For Brands That{' '}
            <span className="text-burgundy">Want To Be Seen.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-graphite/80 leading-relaxed font-normal">
            Whether you run a neighbourhood boutique or manage nationwide enterprise media plans,
            ADRYD adapts to your local conversion goals and target demographics.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl p-6 border border-carbon-black/10 shadow-sm hover:shadow-xl hover:border-burgundy/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-soft-ivory group-hover:bg-burgundy flex items-center justify-center text-burgundy group-hover:text-white transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-carbon-black mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-graphite/75 leading-relaxed mb-4">
                    {item.example}
                  </p>

                  <div className="p-3 rounded-lg bg-soft-ivory border border-carbon-black/5 text-[11px] text-graphite font-medium">
                    <span className="text-burgundy font-bold block mb-0.5">Key Advantage:</span>
                    <span>{item.benefit}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-carbon-black/5">
                  <Link
                    href={`/book-campaign?industry=${item.id}`}
                    className="inline-flex items-center justify-between w-full text-xs font-heading font-bold text-burgundy hover:text-burgundy-light group/btn"
                  >
                    <span>Launch for {item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Industry CTA */}
        <div className="text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-heading font-bold text-burgundy hover:underline"
          >
            <span>Explore All Industry Use Cases &amp; Custom Blueprints</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
