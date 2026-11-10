import Link from 'next/link';
import { ArrowRight, Check, Bike, Users, ShieldAlert, Sparkles, Building2 } from 'lucide-react';

const solutions = [
  {
    id: 'single-rider',
    name: 'Single Rider Campaign',
    tagline: 'Hyper-Local Impact',
    icon: Bike,
    badge: 'Popular for Local Brands',
    description:
      'A dedicated electric scooter displaying your brand identity, operating within a focused local radius or neighbourhood commercial zone.',
    idealFor: 'Cafés, boutique retail, local clinics, neighbourhood services, and pilot testing.',
    features: [
      '1 Dedicated Electric Vehicle & Rider',
      'Targeted local commercial radius',
      'High-impact side and rear branding panels',
      'Campaign execution confirmation & photos',
    ],
    link: '/solutions/single-rider',
    query: 'single-rider',
  },
  {
    id: 'dual-rider',
    name: 'Dual Rider Campaign',
    tagline: 'Coordinated Street Recall',
    icon: Users,
    badge: 'High Recall',
    description:
      'Two branded EVs moving in coordinated formation or covering complementary zones to deliver unmistakable visual impact and double street frequency.',
    idealFor: 'New store launches, food delivery apps, restaurant openings, and promotional flash sales.',
    features: [
      '2 Coordinated Electric Vehicles & Riders',
      'Tandem route pairing or twin-zone coverage',
      'Double visual impression frequency',
      'Timed rush-hour corridor targeting',
    ],
    link: '/solutions/dual-rider',
    query: 'dual-rider',
  },
  {
    id: 'fleet-advertising',
    name: 'Multi-Rider Fleet',
    tagline: 'Citywide Dominance',
    icon: Building2,
    badge: 'Enterprise & FMCG',
    description:
      'A coordinated fleet of 4 to 10+ branded electric vehicles blanketing major urban intersections, IT parks, and transit corridors simultaneously.',
    idealFor: 'Product launches, fintech apps, real estate pre-launches, cinema releases, and citywide festivals.',
    features: [
      'Multi-vehicle fleet (4 to 10+ EVs)',
      'Simultaneous multi-zone coverage',
      'Maximum urban street buzz & social recall',
      'Dedicated campaign operations manager',
    ],
    link: '/solutions/fleet-advertising',
    query: 'multi-rider-fleet',
  },
  {
    id: 'bulk-custom',
    name: 'Bulk & Custom Campaigns',
    tagline: 'Bespoke Agency Solutions',
    icon: Sparkles,
    badge: 'Custom Architecture',
    description:
      'Tailored long-term contracts, custom vehicle integrations, ADRYD Upgrade mobile commerce showcases, or bespoke creative production.',
    idealFor: 'Advertising agencies, enterprise brands, event activations, and seasonal roadshows.',
    features: [
      'Custom vehicle modifications & showcase boxes',
      'Multi-week or monthly retainers',
      'Integrated creative & social video production',
      'Custom routing and event stationing permits',
    ],
    link: '/solutions',
    query: 'custom-package',
  },
];

export default function SolutionsSection() {
  return (
    <section className="py-24 bg-carbon-black text-soft-ivory relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-burgundy/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy/30 border border-burgundy-light/50 text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4">
            Campaign Formats
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-white uppercase leading-tight">
            One City.{' '}
            <span className="text-electric-yellow">Endless Possibilities.</span>
          </h2>
          <p className="mt-4 text-base text-muted-grey leading-relaxed">
            Choose the deployment scale tailored to your brand goals. From targeted local store
            launches to synchronized citywide fleet activations across Hyderabad.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-carbon-card border border-graphite-border rounded-2xl p-6 hover:border-electric-yellow/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl hover:shadow-electric-yellow/5"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-tech font-bold uppercase px-2.5 py-1 rounded-full bg-graphite text-electric-yellow border border-graphite-border">
                      {item.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-burgundy/40 border border-burgundy-light/40 flex items-center justify-center text-electric-yellow group-hover:bg-electric-yellow group-hover:text-carbon-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="text-xs font-tech font-semibold uppercase tracking-wider text-muted-grey mb-1">
                    {item.tagline}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-3">
                    {item.name}
                  </h3>

                  <p className="text-xs text-muted-grey leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Ideal Use Case */}
                  <div className="p-3 rounded-lg bg-graphite/40 border border-graphite-border mb-5 text-[11px]">
                    <span className="text-electric-yellow font-semibold block mb-0.5">
                      Ideal For:
                    </span>
                    <span className="text-soft-ivory/80 leading-normal">{item.idealFor}</span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6 text-xs text-soft-ivory/80">
                    {item.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-electric-yellow shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-graphite-border flex flex-col gap-2">
                  <Link
                    href={`/book-campaign?package=${item.query}`}
                    className="w-full py-2.5 px-3 rounded-lg bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider text-center transition-all"
                  >
                    Enquire This Package
                  </Link>

                  <Link
                    href={item.link}
                    className="inline-flex items-center justify-center gap-1 text-[11px] font-medium text-muted-grey hover:text-white transition-colors py-1"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-burgundy-900 via-burgundy to-burgundy-900 border border-burgundy-light flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-xl text-white mb-1">
              Need a Custom Multi-Week or Multi-City Fleet Campaign?
            </h4>
            <p className="text-xs sm:text-sm text-soft-ivory/80 max-w-xl">
              Our marketing strategy team creates bespoke routing schedules, custom showcase
              fabrication, and rider briefing for large brands and agencies.
            </p>
          </div>
          <Link
            href="/book-campaign?package=custom-package"
            className="shrink-0 px-6 py-3 rounded-xl bg-white hover:bg-soft-ivory text-burgundy font-heading font-bold text-xs uppercase tracking-wider transition-all"
          >
            Speak to Campaign Director
          </Link>
        </div>
      </div>
    </section>
  );
}
