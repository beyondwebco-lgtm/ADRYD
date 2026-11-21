import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Megaphone,
  ShoppingBag,
  QrCode,
  PackageCheck,
  Truck,
  Video,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | ADRYD The Moving Marketplace',
  description:
    'Discover ADRYD’s seven service verticals: Mobile Advertising, Product Showcases, QR Selling, Pre-Orders, Hyperlocal Delivery, Viral Content and Campaign Insights.',
};

const serviceVerticals = [
  {
    id: 'promote',
    title: 'Promote',
    tagline: 'Take brands onto the streets.',
    icon: Megaphone,
    bg: 'bg-white',
    border: 'border-[#DFEAF0]',
    color: 'text-[#00A8C8]',
    btnColor: 'bg-[#00A8C8] hover:bg-[#0093AF] text-white',
    description: 'High-impact mobile advertising using electric scooter fleets wrapped in vibrant, approved brand livery moving along high-footfall commercial corridors.',
    features: ['High-recall street visibility', 'Targeted urban corridors', 'Uniformed brand ambassadors', 'Eco-friendly electric fleet'],
  },
  {
    id: 'showcase',
    title: 'Showcase',
    tagline: 'Bring products closer to customers.',
    icon: ShoppingBag,
    bg: 'bg-[#F0ECFF]',
    border: 'border-[#E4DCFF]',
    color: 'text-[#7856FF]',
    btnColor: 'bg-[#7856FF] hover:bg-[#6844EE] text-white',
    description: 'Specialized vehicle-mounted illuminated display boxes and product sampling trays that allow potential buyers to examine, touch and experience your items.',
    features: ['Illuminated showcase display', 'Curated sampling trays', 'Live product demos', 'Secure weather-resistant boxes'],
  },
  {
    id: 'sell',
    title: 'Sell',
    tagline: 'Create opportunities to purchase.',
    icon: QrCode,
    bg: 'bg-white',
    border: 'border-[#DFEAF0]',
    color: 'text-[#00A8C8]',
    btnColor: 'bg-[#00A8C8] hover:bg-[#0093AF] text-white',
    description: 'Direct QR-driven mobile commerce enabling pedestrians and commuters to scan and immediately purchase featured items through mobile-optimized checkout pages.',
    features: ['Instant QR catalogue access', 'Frictionless mobile checkout', 'Digital payment integration', 'Campaign-specific promo codes'],
  },
  {
    id: 'preorder',
    title: 'Pre-Order',
    tagline: 'Capture customer interest.',
    icon: PackageCheck,
    bg: 'bg-[#F0ECFF]',
    border: 'border-[#E4DCFF]',
    color: 'text-[#7856FF]',
    btnColor: 'bg-[#7856FF] hover:bg-[#6844EE] text-white',
    description: 'Capture advance orders, test consumer interest for new product launches, and gather committed purchase intent prior to broad market rollout.',
    features: ['Demand validation testing', 'Exclusive pre-launch reservations', 'Community & office group orders', 'Early-bird customer capture'],
  },
  {
    id: 'deliver',
    title: 'Deliver',
    tagline: 'Support local fulfilment.',
    icon: Truck,
    bg: 'bg-white',
    border: 'border-[#DFEAF0]',
    color: 'text-[#123C83]',
    btnColor: 'bg-[#123C83] hover:bg-[#0F2F66] text-white',
    description: 'Same-day hyperlocal delivery and fast restocking for local retailers, supporting immediate promotional fulfilment within designated delivery corridors.',
    features: ['Same-day neighborhood drop', 'Boutique retail replenishment', 'Sample pack distribution', 'Sustainable zero-emission transit'],
  },
  {
    id: 'viral',
    title: 'Viral',
    tagline: 'Extend reach through social content.',
    icon: Video,
    bg: 'bg-[#F0ECFF]',
    border: 'border-[#E4DCFF]',
    color: 'text-[#7856FF]',
    btnColor: 'bg-[#7856FF] hover:bg-[#6844EE] text-white',
    description: 'Creative social media capture, street reaction videos, influencer collaborations and high-energy content translating real-world buzz into digital reach.',
    features: ['Street interaction reels', 'High-res campaign B-roll', 'Micro-influencer meetups', 'Multi-platform social content'],
  },
  {
    id: 'insights',
    title: 'Insights',
    tagline: 'Explore future reporting capabilities.',
    icon: BarChart3,
    bg: 'bg-[#EAF9FD]',
    border: 'border-[#D5EFF7]',
    color: 'text-[#00A8C8]',
    btnColor: 'bg-[#00A8C8] hover:bg-[#0093AF] text-white',
    description: 'Planned telemetry and verification systems designed to log campaign operating hours, route tracking, QR engagement scans and audience reach metrics.',
    features: ['Corridor route logs', 'Daily active hours tracking', 'QR scan interaction logs', 'Campaign post-run summaries'],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#172B3A] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider border border-[#D5EFF7]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seven Service Verticals</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#172B3A] uppercase leading-tight">
            One platform.{' '}
            <br />
            <span className="text-[#00A8C8]">More possibilities.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#637786] leading-relaxed font-normal">
            ADRYD connects physical brand movement with product discovery, digital commerce and local delivery.
          </p>
        </div>

        {/* 7 Services Detailed Cards */}
        <div className="space-y-8">
          {serviceVerticals.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className={`rounded-3xl ${svc.bg} border ${svc.border} p-8 lg:p-10 card-hover-lift scroll-mt-32`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left: Icon & Title */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center ${svc.color} border border-[#DCECF2]`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="font-heading font-black text-3xl text-[#172B3A]">
                        {svc.title}
                      </h2>
                      <p className={`text-sm font-bold mt-1 ${svc.color}`}>
                        {svc.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Middle: Description & Features */}
                  <div className="lg:col-span-5 space-y-5">
                    <p className="text-sm sm:text-base text-[#637786] leading-relaxed font-normal">
                      {svc.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {svc.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#172B3A]">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${svc.color} shrink-0`} />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: CTA */}
                  <div className="lg:col-span-3 flex lg:justify-end">
                    <Link
                      href={`/book-campaign?service=${svc.id}`}
                      className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs shadow-sm transition-all ${svc.btnColor}`}
                    >
                      <span>Plan This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
