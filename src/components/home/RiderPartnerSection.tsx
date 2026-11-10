import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Bike } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Register Interest',
    desc: 'Submit your contact details, EV model, and preferred service areas in Hyderabad.',
  },
  {
    num: '02',
    title: 'Submit Partner Details',
    desc: 'Provide basic vehicle registration, valid driving licence, and insurance records.',
  },
  {
    num: '03',
    title: 'Complete Verification',
    desc: 'Our operations team inspects vehicle condition, cosmetic neatness, and safety readiness.',
  },
  {
    num: '04',
    title: 'Explore Campaign Assignments',
    desc: 'Receive paid promotional route opportunities that match your daily commute or schedule.',
  },
];

export default function RiderPartnerSection() {
  return (
    <section className="py-24 bg-carbon-dark text-soft-ivory relative overflow-hidden border-t border-graphite-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Rider Photography (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-graphite-border shadow-2xl group">
              <Image
                src="/images/adryd-rider-partner.jpg"
                alt="ADRYD Electric Scooter Partner Rider"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/80 via-transparent to-transparent" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-carbon-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-burgundy/60 border border-burgundy-light flex items-center justify-center text-electric-yellow">
                    <Bike className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-heading font-bold text-white">
                      Verified EV Partner Network
                    </div>
                    <div className="text-[10px] text-muted-grey">
                      Hyderabad Pilot • Safety &amp; Document Verified
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-tech font-bold text-electric-yellow bg-electric-yellow/10 px-2 py-1 rounded border border-electric-yellow/20 uppercase">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Headlines, Process & CTA (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy/30 border border-burgundy-light text-electric-yellow text-xs font-tech font-bold uppercase tracking-widest mb-4 w-fit">
              <Zap className="w-3.5 h-3.5 text-electric-yellow" />
              EV Rider &amp; Fleet Partner Network
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-white uppercase leading-tight mb-4">
              Your EV.{' '}
              <span className="text-electric-yellow">New Opportunities.</span>
            </h2>

            <p className="text-sm sm:text-base text-muted-grey leading-relaxed mb-8">
              Own an electric scooter in Hyderabad? Explore opportunities to participate in approved,
              brand-sponsored promotional campaigns. Monetise your daily commutes and scheduled city
              routes while championing sustainable electric mobility.
            </p>

            {/* 4 Process Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {steps.map((s) => (
                <div
                  key={s.num}
                  className="p-4 rounded-xl bg-carbon-card border border-graphite-border flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-xs text-electric-yellow">
                      Step {s.num}
                    </span>
                    <span className="h-2.5 w-[1px] bg-white/20" />
                    <span className="font-heading font-bold text-xs text-white line-clamp-1">
                      {s.title}
                    </span>
                  </div>
                  <p className="text-xs text-muted-grey leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Fair Disclosure */}
            <p className="text-[11px] text-muted-grey/70 mb-6 flex items-start gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-electric-yellow shrink-0 mt-0.5" />
              <span>
                Registering interest does not guarantee campaign assignment or fixed income.
                Assignments depend on active advertiser briefs, route alignment, and vehicle
                verification.
              </span>
            </p>

            {/* Action CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/become-a-rider"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-electric-yellow hover:bg-electric-yellow-hover text-carbon-black font-heading font-bold text-xs uppercase tracking-wider shadow-xl transition-all"
              >
                <span>Register as an EV Partner</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-xl bg-graphite/50 hover:bg-graphite border border-graphite-border text-soft-ivory text-xs font-heading font-semibold transition-all"
              >
                <span>Fleet Inquiries</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
