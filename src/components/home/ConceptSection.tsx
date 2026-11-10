import Link from 'next/link';
import { ArrowRight, Eye, Navigation, BarChart3, CheckCircle2 } from 'lucide-react';

export default function ConceptSection() {
  const pillars = [
    {
      num: '01',
      title: 'Advertise',
      subtitle: 'Real-World City Presence',
      description:
        'Move beyond high-cost static billboards that people ignore. Place your brand directly at eye level along Hyderabad’s busiest arterial routes, commercial hubs, and tech corridors.',
      icon: Eye,
      highlights: [
        'Eye-level pedestrian & commuter visibility',
        'High daily impression frequency',
        'Clean, eco-friendly EV fleet presence',
      ],
    },
    {
      num: '02',
      title: 'Activate',
      subtitle: 'Planned Corridor Deployment',
      description:
        'Deploy verified electric scooter riders along planned, approved routes. Reach high-density clusters including IT parks, gated communities, shopping streets, and student hostels.',
      icon: Navigation,
      highlights: [
        'Single, dual, or multi-scooter fleet options',
        'PIN-code and zone-specific coverage',
        'Uniformed brand-aligned EV partner riders',
      ],
    },
    {
      num: '03',
      title: 'Measure',
      subtitle: 'Verified Campaign Execution',
      description:
        'Eliminate blind OOH spending. As our technology roadmap unfolds, receive transparent campaign summaries, verified route logs, and photographic installation proof.',
      icon: BarChart3,
      highlights: [
        'Planned GPS route & time-window tracking',
        'Pre & post-campaign photographic proof',
        'Consolidated executive reporting summaries',
      ],
    },
  ];

  return (
    <section id="concept" className="py-24 bg-soft-ivory text-carbon-black relative overflow-hidden">
      {/* Editorial Decorative Background Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy/10 text-burgundy text-xs font-tech font-bold uppercase tracking-widest mb-4">
            The Future of Mobile Advertising
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-carbon-black uppercase leading-tight">
            We Don&apos;t Just Display Brands.{' '}
            <span className="text-burgundy">We Move Them.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-graphite/80 leading-relaxed font-normal">
            Traditional out-of-home advertising is static, expensive, and inflexible. ADRYD
            unlocks everyday electric vehicle movement as a dynamic, measurable advertising
            medium—bringing your story directly to where your audience lives, works, and shops.
          </p>
        </div>

        {/* 3 Editorial Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="group relative bg-white p-8 rounded-2xl border border-carbon-black/10 shadow-sm hover:shadow-xl hover:border-burgundy/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Number and Icon */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-carbon-black/5">
                    <span className="font-heading font-black text-4xl text-burgundy/25 group-hover:text-burgundy transition-colors">
                      {item.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-soft-ivory flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="text-xs font-tech font-bold uppercase tracking-wider text-burgundy mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-carbon-black mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-graphite/80 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2.5 mb-6 text-xs text-graphite font-medium">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-carbon-black/5">
                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-burgundy hover:text-burgundy-light group/link"
                  >
                    <span>Learn More About {item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Concept */}
        <div className="rounded-2xl bg-carbon-black text-soft-ivory p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-tech font-bold text-electric-yellow uppercase tracking-widest">
              Asset-Light Marketplace Model
            </div>
            <h4 className="font-heading font-bold text-xl sm:text-2xl text-white">
              Connecting Advertisers with Verified EV Partner Riders
            </h4>
            <p className="text-xs sm:text-sm text-muted-grey max-w-xl">
              We coordinate route planning, vehicle-compliant branding installation, and campaign
              briefing. Riders earn by executing approved campaigns.
            </p>
          </div>
          <Link
            href="/about"
            className="shrink-0 px-6 py-3 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider transition-all"
          >
            Read Our Vision
          </Link>
        </div>
      </div>
    </section>
  );
}
