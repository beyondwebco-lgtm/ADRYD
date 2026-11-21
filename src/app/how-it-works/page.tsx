import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Target,
  Compass,
  Rocket,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Users,
  Bike,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works | ADRYD Campaign Journey',
  description:
    'Learn how ADRYD brings mobile advertising, product showcases, QR commerce and hyperlocal delivery to life in three straightforward steps.',
};

const mainSteps = [
  {
    step: '01',
    title: 'Tell Us Your Goal',
    subtitle: 'Share your brand, products and campaign needs.',
    desc: 'Submit your campaign requirements: objective, target city corridor (e.g. Hitec City, Jubilee Hills), desired duration, rider count, and whether you require vehicle wrap branding, live product showcases, or QR-driven sampling.',
    icon: Target,
    bg: 'bg-[#EAF9FD]',
    border: 'border-[#D5EFF7]',
    color: 'text-[#00A8C8]',
  },
  {
    step: '02',
    title: 'We Plan Your Campaign',
    subtitle: 'We help explore suitable riders, routes and promotion formats.',
    desc: 'Our operations team plans optimized corridor routing, coordinates approved vehicle branding wraps, prepares illuminated product display enclosures, and briefs verified riders on safety and route protocols.',
    icon: Compass,
    bg: 'bg-white',
    border: 'border-[#DCECF2]',
    color: 'text-[#1756C1]',
  },
  {
    step: '03',
    title: 'Take Your Brand Further',
    subtitle: "Bring your campaign concept to life through ADRYD's planned mobility network.",
    desc: 'Your branded fleet takes to prime streets, creating high-recall impressions at eye level, showcasing products directly to interested customers, facilitating QR purchases, and generating viral street reaction content.',
    icon: Rocket,
    bg: 'bg-[#F6FAFC]',
    border: 'border-[#DCECF2]',
    color: 'text-[#123C83]',
  },
];

const stakeholderJourneys = [
  {
    title: 'Brand Owner Journey',
    role: 'Brands, Retailers & Makers',
    desc: 'From initial briefing to active street deployment, track your mobile presence and engage shoppers directly in their daily environments.',
    icon: ShoppingBag,
    bg: 'bg-[#EAF9FD]',
    border: 'border-[#D5EFF7]',
    color: 'text-[#00A8C8]',
    href: '/book-campaign',
    cta: 'Book Campaign',
  },
  {
    title: 'Customer Experience',
    role: 'Pedestrians, Commuters & Shoppers',
    desc: 'Encounter eye-level brand vehicles in prime commercial hubs, view illuminated products in transit, scan instant QR codes and order on the spot.',
    icon: Users,
    bg: 'bg-white',
    border: 'border-[#DCECF2]',
    color: 'text-[#1756C1]',
    href: '/services',
    cta: 'Explore Experience',
  },
  {
    title: 'Rider Partner Experience',
    role: 'EV Riders & Fleet Operators',
    desc: 'Monetize daily rides on approved electric scooters by participating in coordinated promotional runs with zero commissions taken from your earnings.',
    icon: Bike,
    bg: 'bg-[#F6FAFC]',
    border: 'border-[#DCECF2]',
    color: 'text-[#58C9EF]',
    href: '/become-a-rider',
    cta: 'Join as Rider',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white text-[#172B3A] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider border border-[#D5EFF7]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple Process</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#172B3A] uppercase leading-tight">
            Simple from{' '}
            <br />
            <span className="text-[#00A8C8]">start to finish.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#637786] leading-relaxed font-normal">
            How ADRYD transforms brand ideas into high-visibility moving marketplace campaigns across Hyderabad.
          </p>
        </div>

        {/* 3 Main Steps */}
        <div className="space-y-8 mb-24">
          {mainSteps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className={`rounded-3xl ${s.bg} border ${s.border} p-8 lg:p-10 card-hover-lift`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className={`font-heading font-black text-4xl ${s.color}`}>
                        {s.step}
                      </span>
                      <div className={`w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center ${s.color} border border-[#DCECF2]`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h2 className="font-heading font-black text-2xl text-[#172B3A]">
                      {s.title}
                    </h2>
                    <p className={`text-sm font-bold ${s.color}`}>
                      {s.subtitle}
                    </p>
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-sm sm:text-base text-[#637786] leading-relaxed font-normal">
                      {s.desc}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Stakeholder Journeys */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10 space-y-2">
            <h2 className="font-heading font-black text-3xl text-[#172B3A] uppercase">
              The Moving Ecosystem
            </h2>
            <p className="text-sm text-[#637786]">
              Connecting three key participants across our mobility network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stakeholderJourneys.map((j, idx) => {
              const Icon = j.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-3xl ${j.bg} border ${j.border} p-8 card-hover-lift flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center ${j.color} border border-[#DCECF2]`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${j.color}`}>
                        {j.role}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-[#172B3A] mt-1">
                        {j.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#637786] leading-relaxed font-normal mt-2">
                        {j.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      href={j.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#172B3A] hover:text-[#00A8C8] transition-colors"
                    >
                      <span>{j.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
