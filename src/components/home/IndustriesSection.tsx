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
    <section className="py-24 bg-[#0C0D12] text-soft-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-yellow/10 border border-electric-yellow/30 text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
            Target Segments
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            Built For Brands That{' '}
            <span className="text-electric-yellow">Want To Be Seen.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-grey leading-relaxed font-normal">
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
                className="group bg-carbon-card rounded-2xl p-6 border border-graphite-border shadow-sm hover:shadow-xl hover:border-electric-yellow/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-carbon-card-hover group-hover:bg-electric-yellow flex items-center justify-center text-electric-yellow group-hover:text-carbon-black transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-muted-grey leading-relaxed mb-4">
                    {item.example}
                  </p>

                  <div className="p-3 rounded-lg bg-carbon-card-hover border border-graphite-border text-[11px] text-muted-grey font-medium">
                    <span className="text-electric-yellow font-bold block mb-0.5">Key Advantage:</span>
                    <span>{item.benefit}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-graphite-border">
                  <Link
                    href={`/book-campaign?industry=${item.id}`}
                    className="inline-flex items-center justify-between w-full text-xs font-heading font-bold text-electric-yellow hover:text-white group/btn"
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
            className="inline-flex items-center gap-2 text-sm font-heading font-bold text-electric-yellow hover:underline"
          >
            <span>Explore All Industry Use Cases &amp; Custom Blueprints</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
