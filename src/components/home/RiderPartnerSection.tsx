import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Bike, Users2, Sparkles, Truck, QrCode } from 'lucide-react';

const partnerOpportunities = [
  {
    title: 'Mobile Brand Promotion',
    desc: 'Ride along planned, approved corridors displaying high-recall brand livery on electric two-wheelers.',
    icon: Bike,
  },
  {
    title: 'Product Showcase Assistance',
    desc: 'Help manage stationary showcase stops, enabling consumers to inspect products safely.',
    icon: Sparkles,
  },
  {
    title: 'QR Customer Guidance',
    desc: 'Assist interested commuters with scanning on-scooter QR codes to explore catalogues and discount offers.',
    icon: QrCode,
  },
  {
    title: 'Approved Campaign Execution',
    desc: 'Participate in structured, time-windowed campaign sessions aligned with your daily mobility.',
    icon: CheckCircle2,
  },
  {
    title: 'Local Delivery Concepts',
    desc: 'Support hyperlocal order drop-offs and store replenishment opportunities in designated zones.',
    icon: Truck,
  },
  {
    title: 'Fleet Partner Programs',
    desc: 'Commercial electric two-wheeler fleet owners can register vehicles for scheduled brand deployments.',
    icon: Users2,
  },
];

export default function RiderPartnerSection() {
  return (
    <section id="partner" className="py-24 bg-[#000000] text-[#B8B8B8] relative overflow-hidden border-t border-[#222222]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#03F2FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Rider Photography (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#222222] shadow-2xl group">
              <Image
                src="/images/adryd-rider-partner.jpg"
                alt="ADRYD Promotional Partner Rider with Electric Vehicle"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-transparent to-transparent" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#000000]/90 backdrop-blur-md border border-[#222222] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#101010] border border-[#03F2FF]/40 flex items-center justify-center text-[#03F2FF]">
                    <Bike className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-heading font-bold text-[#FFFFFF]">
                      Verified Promotional Partner Network
                    </div>
                    <div className="text-[10px] text-[#888888]">
                      Hyderabad Pilot • Promotional &amp; Showcase Execution
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-tech font-bold text-[#03F2FF] bg-[#03F2FF]/10 px-2.5 py-1 rounded-full border border-[#03F2FF]/30 uppercase">
                  Open Pilot
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Headlines, Opportunities & CTA (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101010] border border-[#03F2FF]/30 text-[#03F2FF] text-xs font-tech font-bold uppercase tracking-widest mb-4 w-fit">
              <Zap className="w-3.5 h-3.5 text-[#03F2FF]" />
              PARTNER OPPORTUNITIES
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-[#FFFFFF] uppercase leading-tight mb-4">
              JOIN THE MOVEMENT.{' '}
              <br />
              <span className="text-[#E7FF39]">BECOME AN ADRYD PARTNER.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#B8B8B8] leading-relaxed mb-6">
              ADRYD offers electric vehicle riders and commercial fleet operators opportunities to
              participate in structured mobile brand campaigns, product showcases, and customer engagement
              across Hyderabad.
            </p>

            {/* 6 Opportunities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {partnerOpportunities.slice(0, 4).map((opp, idx) => {
                const Icon = opp.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#101010] border border-[#222222] flex items-start gap-3 hover:border-[#03F2FF]/40 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#000000] border border-[#222222] flex items-center justify-center text-[#E7FF39] shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xs text-[#FFFFFF] mb-0.5">
                        {opp.title}
                      </div>
                      <p className="text-[11px] text-[#888888] leading-snug">
                        {opp.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Income Disclaimer */}
            <div className="p-3.5 rounded-xl bg-[#101010] border border-[#222222] text-xs text-[#888888] mb-6 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#03F2FF] shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed">
                <strong className="text-[#FFFFFF]">Fair Disclosure:</strong> Registering interest does not guarantee campaign assignment or fixed monthly income. Partner opportunities depend on active advertiser briefs, route alignment, and vehicle eligibility.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/become-a-rider"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#000000] font-heading font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(231,255,57,0.3)] transition-all"
              >
                <span>Register Rider Interest</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/become-a-rider#fleet-partnership"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-xl bg-[#000000] hover:bg-[#03F2FF]/10 border border-[#03F2FF]/40 hover:border-[#03F2FF] text-[#FFFFFF] hover:text-[#03F2FF] text-xs font-heading font-semibold transition-all hover:shadow-[0_0_15px_rgba(3,242,255,0.25)]"
              >
                <span>Fleet Partner Enquiry</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
