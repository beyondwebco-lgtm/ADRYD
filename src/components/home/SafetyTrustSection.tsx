import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Lock,
  MapPin,
  UserCheck,
  Eye,
  Info,
} from 'lucide-react';

const principles = [
  {
    title: 'Approved Vehicle Branding',
    desc: 'Promotional wrap materials, display structures, and dimensions adhere to motor vehicle regulations, ensuring zero impairment of rider visibility, vehicle balance, or road safety.',
    icon: CheckCircle2,
  },
  {
    title: 'Rider Safety & Eligibility',
    desc: 'Promotional partner riders must hold valid driving licences, registered electric vehicles, and complete safety orientation before participating in active corridor campaigns.',
    icon: UserCheck,
  },
  {
    title: 'Secure Product Handling',
    desc: 'Showcase enclosures use impact-resistant, weather-sealed acrylic units with lockable compartments to protect merchandise, samples, and consumer textiles during transit.',
    icon: Lock,
  },
  {
    title: 'Venue & Location Permissions',
    desc: 'Scheduled stationary showcase stops and sampling sessions are planned in designated commercial zones and private business premises in accordance with local municipal guidelines.',
    icon: MapPin,
  },
  {
    title: 'Verified Seller Information',
    desc: 'Brands showcasing products or collecting pre-orders are verified with genuine business contact details, transparent return policies, and accurate product representations.',
    icon: FileCheck,
  },
  {
    title: 'Transparent Customer Communication',
    desc: 'QR-linked catalogues clearly specify indicative delivery timelines, product specifications, and pre-booking conditions without misleading claims.',
    icon: Eye,
  },
  {
    title: 'Responsible Data Practices',
    desc: 'Customer enquiry forms and QR interactions adhere to privacy-by-design standards, safeguarding user phone numbers and emails without third-party data reselling.',
    icon: ShieldCheck,
  },
];

export default function SafetyTrustSection() {
  return (
    <section id="safety-trust" className="py-24 bg-[#0C0D12] text-[#F2F3F5] relative overflow-hidden border-t border-[#353740]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[500px] bg-[#24212C]/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17191F] border border-[#353740] text-[#E7FF39] text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E7FF39]" />
            Operating Principles
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight">
            BUILT AROUND{' '}
            <span className="text-[#E7FF39]">RESPONSIBLE OPERATIONS.</span>
          </h2>
          <p className="mt-4 text-base text-[#A5A8B3] leading-relaxed">
            Safety, municipal compliance, verified seller representation, and consumer trust form the
            foundational operating guidelines of the ADRYD moving marketplace.
          </p>
        </div>

        {/* 7 Operating Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {principles.slice(0, 6).map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#17191F] border border-[#353740] hover:border-[#E7FF39]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#E7FF39] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-[#A5A8B3] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 7th Principle Wide Card */}
        <div className="p-6 rounded-2xl bg-[#17191F] border border-[#353740] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#24212C] border border-[#353740] flex items-center justify-center text-[#E7FF39] shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white mb-1">
                {principles[6].title}
              </h3>
              <p className="text-xs text-[#A5A8B3] max-w-2xl leading-relaxed">
                {principles[6].desc}
              </p>
            </div>
          </div>
          <span className="text-[10px] font-tech text-[#E7FF39] uppercase px-3 py-1 rounded bg-[#24212C] border border-[#353740] shrink-0">
            Privacy-First
          </span>
        </div>

        {/* Regulatory Disclosure Banner */}
        <div className="p-5 rounded-2xl bg-[#17191F] border border-[#353740] flex items-start gap-3.5 text-xs text-[#A5A8B3] leading-relaxed">
          <Info className="w-4 h-4 text-[#E7FF39] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Legal &amp; Regulatory Context:</strong> Vehicle modifications,
            product display boxes, on-street sampling, and commercial operations remain subject to applicable
            approvals, municipal transport guidelines, and statutory vehicle specifications. ADRYD operates
            under active pilot validation in Hyderabad and makes no unverified licensing or governmental
            endorsement claims.
          </p>
        </div>
      </div>
    </section>
  );
}

