import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  Sliders,
  MapPin,
  CalendarCheck,
  CheckCircle2,
  BarChart3,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Info,
  HelpCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works | From Your Idea to a Moving Campaign',
  description:
    'Discover the six-step moving campaign journey of ADRYD Upgrade: from brand brief and service selection to route deployment and verified outcomes across Hyderabad.',
};

const steps = [
  {
    step: '01',
    title: 'Tell Us About Your Brand',
    subtitle: 'Brand Discovery & Briefing',
    desc: 'Share your business, products and promotional objectives through our interactive campaign brief. Whether you are an artisan handloom brand, a D2C startup, or a regional enterprise, we tailor the operational concept to your audience.',
    highlights: [
      'Share brand story, product category & launch goals',
      'Identify target consumer profiles in Hyderabad',
      'No upfront financial commitment required',
    ],
  },
  {
    step: '02',
    title: 'Choose Your Campaign',
    subtitle: 'Service Architecture Selection',
    desc: 'Select promotion, showcase, pre-order, delivery or combined service interests. Choose pure eye-level EV wrapping, illuminated mobile showcase boxes, QR catalog ordering, or multi-vehicle fleet activations.',
    highlights: [
      'Select from the seven ADRYD service verticals',
      'Configure single or fleet vehicle counts',
      'Select burst campaigns or monthly retainer plans',
    ],
  },
  {
    step: '03',
    title: 'Select Your Audience',
    subtitle: 'Corridor & Corridor Mapping',
    desc: 'Choose proposed target areas, PIN codes, landmarks and preferred dates across Hyderabad. Focus on IT corridors (HITEC City, Madhapur, Gachibowli) or dense retail catchments (Kukatpally, Kompally).',
    highlights: [
      'Target high-footfall business and residential zones',
      'Align scheduled stops with peak commuter windows',
      'Focus on specific PIN-code clusters and tech campuses',
    ],
  },
  {
    step: '04',
    title: 'Plan Your Activation',
    subtitle: 'Route & Wrap Feasibility',
    desc: 'Review campaign requirements, branding, fleet size and operational feasibility with the ADRYD team. Our logistics specialists evaluate route permissions, vehicle fabrication specs, and rider scheduling.',
    highlights: [
      'Review digital 3D vehicle wrap mockups',
      'Inspect showcase acrylic mounting specifications',
      'Confirm stationary stop venue permissions',
    ],
  },
  {
    step: '05',
    title: 'Campaign Execution',
    subtitle: 'Street Deployment & Assistance',
    desc: 'Following approval and operational readiness, campaigns may be coordinated with eligible riders and vehicles. Trained promotional riders navigate scheduled corridors and assist curious shoppers.',
    highlights: [
      'Trained riders in compliant branded apparel',
      'Timed presence along agreed high-density roads',
      'On-ground customer assistance with QR code scanning',
    ],
  },
  {
    step: '06',
    title: 'Review Outcomes',
    subtitle: 'Performance & Telemetry Logs',
    desc: 'Campaign reporting may include route evidence, QR engagement, enquiries and order-related metrics where supported. Review photographic proof of installation, digital catalogue interactions, and customer leads.',
    highlights: [
      'Comprehensive post-campaign executive summary',
      'Photographic installation proof and route logs',
      'QR interaction counts and qualified lead handoffs',
    ],
  },
];

const FAQS = [
  {
    q: 'Does submitting a campaign brief on this website confirm a booking?',
    a: 'No. The current website accepts campaign enquiries and quotation requests. All campaigns undergo operational feasibility checks, vehicle livery fabrication reviews, and route scheduling before commercial confirmation.',
  },
  {
    q: 'How are campaign corridors planned in Hyderabad?',
    a: 'Corridors are planned based on your target demographic profiles across test zones like HITEC City, Madhapur, Kukatpally, Kompally, and Gachibowli. Routes adhere to municipal traffic guidelines and focus on eye-level visibility during peak commuter and shopping hours.',
  },
  {
    q: 'What types of merchandise can be showcased in ADRYD Upgrade?',
    a: 'Our pilot focuses on five priority categories: Fashion & Textiles, Homemade Bakery & Packaged Foods, Farm-Fresh & Organic Products, Handmade Crafts & Gifts, and Lifestyle & Personal Care. All merchandise must be non-hazardous, securely packaged, and compliant with transport weight limits.',
  },
  {
    q: 'How does QR-enabled mobile commerce work on the scooters?',
    a: 'Vehicles feature high-contrast illuminated QR badges. When commuters or pedestrians scan the code with their smartphone, they are directed to the brand’s digital catalogue, exclusive launch discount page, or pre-order form.',
  },
  {
    q: 'Are ADRYD campaign metrics and GPS tracking currently live?',
    a: 'ADRYD Insights and automated real-time GPS tracking represent upcoming platform capabilities on our technology roadmap. During our current pilot phase, campaigns use verified route schedules, photographic installation proofs, and manual route logs.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0C0D12] text-[#F2F3F5] pt-32 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[#24212C]/60 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#E7FF39]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E7FF39]" />
            STEP-BY-STEP OPERATIONAL FRAMEWORK
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase leading-[1.02] mb-4">
            FROM YOUR IDEA{' '}
            <br />
            <span className="text-[#E7FF39]">TO A MOVING CAMPAIGN.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#A5A8B3] max-w-2xl leading-relaxed">
            From initial concept and service selection to route corridor planning, vehicle fabrication,
            and outcome reporting. A structured, transparent pathway to urban brand mobility.
          </p>
        </div>

        {/* 6 Step Detailed Vertical Flow */}
        <div className="space-y-8 mb-20">
          {steps.map((s) => (
            <div
              key={s.step}
              className="p-8 sm:p-10 rounded-3xl bg-[#17191F] border border-[#353740] hover:border-[#E7FF39]/40 transition-all shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#353740]">
                <div className="flex items-center gap-4">
                  <span className="font-heading font-black text-4xl text-[#E7FF39]">
                    {s.step}
                  </span>
                  <div>
                    <span className="text-[10px] font-tech text-[#A5A8B3] uppercase tracking-wider block">
                      {s.subtitle}
                    </span>
                    <h2 className="font-heading font-black text-2xl text-white uppercase">
                      {s.title}
                    </h2>
                  </div>
                </div>
                <span className="text-xs font-tech uppercase px-2.5 py-1 rounded bg-[#0C0D12] text-[#E7FF39] border border-[#353740] self-start sm:self-auto">
                  Stage {s.step} of 06
                </span>
              </div>

              <p className="text-sm text-[#F2F3F5] leading-relaxed mb-6">
                {s.desc}
              </p>

              <div className="pt-2 border-t border-[#353740]/60">
                <div className="text-[11px] font-tech font-bold uppercase tracking-wider text-[#E7FF39] mb-2">
                  Key Stage Highlights:
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#A5A8B3]">
                  {s.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E7FF39] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Notice Banner */}
        <div className="p-6 rounded-3xl bg-[#17191F] border border-[#353740] flex items-start gap-3.5 text-xs text-[#A5A8B3] mb-16">
          <Info className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Enquiry &amp; Feasibility Notice:</strong> The current website
            is designed to receive custom campaign briefs and quotation requests, not automatic bookings.
            Every activation is reviewed by our planning team to confirm vehicle availability, route approvals,
            and wrap fabrication lead times before commercial launch.
          </p>
        </div>

        {/* FAQs Section */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="font-tech text-xs text-[#E7FF39] uppercase font-bold">
              Frequently Asked Questions
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase mt-1">
              Common Questions About ADRYD Operations
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#17191F] border border-[#353740] space-y-2"
              >
                <h4 className="font-heading font-bold text-base text-white flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#E7FF39] shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-[#A5A8B3] leading-relaxed pl-6.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#17191F] border border-[#353740] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-heading font-black text-2xl text-white uppercase">
              Ready to Share Your Campaign Brief?
            </h3>
            <p className="text-xs sm:text-sm text-[#A5A8B3] mt-1 max-w-xl">
              Complete our 4-step campaign planner and receive a customized route schedule for Hyderabad.
            </p>
          </div>
          <Link
            href="/book-campaign"
            className="shrink-0 px-8 py-4 rounded-xl bg-[#E7FF39] hover:bg-[#D4FF00] text-[#0C0D12] font-heading font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(231,255,57,0.3)]"
          >
            Launch a Campaign
          </Link>
        </div>
      </div>
    </div>
  );
}
