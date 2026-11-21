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
    <div className="min-h-screen bg-white text-[#172B3A] pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 space-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A8C8] hover:underline mb-3"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF9FD] text-[#00A8C8] text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            Legal &amp; Privacy
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl text-[#172B3A] uppercase leading-tight">
            Privacy Policy
          </h1>

          <p className="text-xs text-[#637786]">
            Last Updated: November 2026 • ADRYD Mobility Technologies, Hyderabad
          </p>
        </div>

        <div className="bg-[#F6FAFC] border border-[#DCECF2] rounded-3xl p-8 sm:p-12 space-y-8 text-sm text-[#637786] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#172B3A]">1. Introduction</h2>
            <p>
              ADRYD Mobility Technologies (&quot;ADRYD&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates an electric mobility-powered mobile advertising and marketplace platform connecting businesses and advertisers with verified electric scooter riders in Hyderabad, Telangana, India. We take personal data privacy and location data confidentiality very seriously.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#172B3A]">2. Information We Collect</h2>
            <p>We collect information in three operational categories:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-[#172B3A]">Advertiser Enquiries:</strong> Business name, contact person name, business email address, phone number, industry, target campaign zones, and promotional artwork.
              </li>
              <li>
                <strong className="text-[#172B3A]">EV Rider Partners:</strong> Full name, phone number, email, vehicle make/model, ownership records, and service area preferences. During formal onboarding, statutory driving licence and registration documents are verified.
              </li>
              <li>
                <strong className="text-[#172B3A]">Location Telemetry:</strong> In line with our roadmap requirements, location coordinate logs are collected exclusively during active, accepted campaign hours with explicit rider permission.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#172B3A]">3. How Information Is Used</h2>
            <p>Information is used solely to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Generate accurate campaign proposals and route scheduling plans.</li>
              <li>Coordinate vehicle branding installation and safety compliance checks.</li>
              <li>Compile campaign execution summaries and proof-of-performance digests for advertisers.</li>
              <li>Administer partner compensation and customer service inquiries.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#172B3A]">4. Location Privacy Standards</h2>
            <p>
              ADRYD enforces strict privacy-by-design standards. Personal transit when riders are off-duty or outside active campaign windows is never monitored, collected, or logged. Advertiser reports display aggregated distance and corridor summaries, ensuring individual rider privacy is upheld.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#172B3A]">5. Data Retention &amp; Security</h2>
            <p>
              All enquiry and onboarding information is transmitted over encrypted SSL/TLS channels and stored on secure cloud databases with role-based access restrictions. We do not sell, rent, or trade personal data to third-party data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#172B3A]">6. Contact for Privacy Matters</h2>
            <p>
              For any questions, data modification requests, or privacy concerns, please contact our designated privacy officer at{' '}
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="text-[#00A8C8] underline font-bold"
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
