import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | ADRYD Platform',
  description:
    'Read the official Privacy Policy of ADRYD Mobility Technologies: our commitments to data protection, rider location consent, and client privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#B8B8B8] pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#03F2FF] hover:text-[#E7FF39] transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#03F2FF]/30 text-[#03F2FF] text-xs font-tech font-bold uppercase tracking-widest mb-4">
            <Lock className="w-3.5 h-3.5" />
            Legal &amp; Privacy Architecture
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-[#FFFFFF] uppercase leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#888888]">
            Last Updated: November 2026 • ADRYD Mobility Technologies, Hyderabad
          </p>
        </div>

        <div className="bg-[#101010] border border-[#222222] rounded-2xl p-8 sm:p-12 shadow-2xl space-y-8 text-xs sm:text-sm text-[#888888] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#FFFFFF]">1. Introduction</h2>
            <p>
              ADRYD Mobility Technologies (&quot;ADRYD&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) operates an electric mobility-powered mobile advertising and marketplace
              platform connecting businesses and advertisers with verified electric scooter riders in
              Hyderabad, Telangana, India. We take personal data privacy and location data confidentiality
              very seriously.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#FFFFFF]">2. Information We Collect</h2>
            <p>We collect information in three operational categories:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-[#FFFFFF]">Advertiser Enquiries:</strong> Business name,
                contact person name, business email address, phone number, industry, target campaign
                zones, and promotional artwork.
              </li>
              <li>
                <strong className="text-[#FFFFFF]">EV Rider Partners:</strong> Full name, phone number,
                email, vehicle make/model, ownership records, and service area preferences. During
                formal onboarding, statutory driving licence and registration documents are verified.
              </li>
              <li>
                <strong className="text-[#FFFFFF]">Location Telemetry:</strong> In line with our
                roadmap requirements, location coordinate logs are collected exclusively during
                active, accepted campaign hours with explicit rider permission.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#FFFFFF]">3. How Information Is Used</h2>
            <p>Information is used solely to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Generate accurate campaign proposals and route scheduling plans.</li>
              <li>Coordinate vehicle branding installation and safety compliance checks.</li>
              <li>Compile campaign execution summaries and proof-of-performance digests for advertisers.</li>
              <li>Administer partner compensation and customer service inquiries.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#FFFFFF]">4. Location Privacy Standards</h2>
            <p>
              ADRYD enforces strict privacy-by-design standards. Personal transit when riders are off-duty
              or outside active campaign windows is never monitored, collected, or logged. Advertiser
              reports display aggregated distance and corridor summaries, ensuring individual rider
              privacy is upheld.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#FFFFFF]">5. Data Retention &amp; Security</h2>
            <p>
              All enquiry and onboarding information is transmitted over encrypted SSL/TLS channels
              and stored on secure cloud databases with role-based access restrictions. We do not sell,
              rent, or trade personal data to third-party data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#FFFFFF]">6. Contact for Privacy Matters</h2>
            <p>
              For any questions, data modification requests, or privacy concerns, please contact our
              designated privacy officer at{' '}
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="text-[#03F2FF] hover:text-[#E7FF39] underline transition-colors"
              >
                {SITE_CONFIG.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
