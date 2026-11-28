const fs = require('fs');
const path = require('path');

// 1. Homepage Promo Section: src/components/home/BrandActivationPromoSection.tsx
const promoContent = `'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shirt, ShoppingBag, QrCode, Share2 } from 'lucide-react';

export default function BrandActivationPromoSection() {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden border-t border-b border-white/10">
      {/* Background Subtle Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#0A9BE0]/15 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[300px] bg-[#B4F000]/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#031120] border-2 border-[#0A9BE0]/40 shadow-[0_0_50px_rgba(10,155,224,0.15)] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>New Commercial Vertical</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              MORE THAN ADVERTISING.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Discover how ADRYD brings mobility, human promotion, commerce and business collaborations together.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Fashion Connect</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Live Street Sales</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Affiliate Network</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">10-City Campaigns</span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/brand-activation"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#B4F000] hover:bg-[#c5fc1b] text-black font-black text-sm uppercase tracking-wider shadow-[0_4px_25px_rgba(180,240,0,0.35)] hover:shadow-[0_6px_30px_rgba(180,240,0,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Explore Brand Activation →</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'components', 'home', 'BrandActivationPromoSection.tsx'),
  promoContent,
  'utf8'
);
console.log('Created BrandActivationPromoSection.tsx');

// 2. Client Orchestrator: src/app/brand-activation/BrandActivationClient.tsx
const clientContent = `'use client';

import React, { useState } from 'react';
import BrandActivationHero from '@/components/brand-activation/BrandActivationHero';
import SectionNavigation from '@/components/brand-activation/SectionNavigation';
import TheAdrydAdvantage from '@/components/brand-activation/TheAdrydAdvantage';
import PromotionOpportunities from '@/components/brand-activation/PromotionOpportunities';
import BusinessEngines from '@/components/brand-activation/BusinessEngines';
import CommercialDivisions from '@/components/brand-activation/CommercialDivisions';
import FashionConnectSection from '@/components/brand-activation/FashionConnectSection';
import QRCustomerJourney from '@/components/brand-activation/QRCustomerJourney';
import AffiliateNetworkSection from '@/components/brand-activation/AffiliateNetworkSection';
import SocialMediaSection from '@/components/brand-activation/SocialMediaSection';
import FootfallSection from '@/components/brand-activation/FootfallSection';
import MobileMediaSection from '@/components/brand-activation/MobileMediaSection';
import PreOrderSection from '@/components/brand-activation/PreOrderSection';
import NationalExpansionSection from '@/components/brand-activation/NationalExpansionSection';
import TravelExperiencesSection from '@/components/brand-activation/TravelExperiencesSection';
import FashionCampaignPackagesSection from '@/components/brand-activation/FashionCampaignPackagesSection';
import RevenueModelSection from '@/components/brand-activation/RevenueModelSection';
import MarketingComparisonSection from '@/components/brand-activation/MarketingComparisonSection';
import ShowroomComparisonSection from '@/components/brand-activation/ShowroomComparisonSection';
import AnalyticsDashboardPreview from '@/components/brand-activation/AnalyticsDashboardPreview';
import ROICalculatorSection from '@/components/brand-activation/ROICalculatorSection';
import AdditionalOpportunitiesSection from '@/components/brand-activation/AdditionalOpportunitiesSection';
import EntrepreneurJourneySection from '@/components/brand-activation/EntrepreneurJourneySection';
import TechnologyEcosystemSection from '@/components/brand-activation/TechnologyEcosystemSection';
import BusinessSafeguardsSection from '@/components/brand-activation/BusinessSafeguardsSection';
import BrandActivationCTA from '@/components/brand-activation/BrandActivationCTA';
import BrandActivationModal from '@/components/brand-activation/BrandActivationModal';
import { PromotionOpportunity, FashionPackage } from '@/data/brandActivationData';

export default function BrandActivationClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<PromotionOpportunity | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<FashionPackage | null>(null);
  const [prefilledEnquiry, setPrefilledEnquiry] = useState<string>('');

  const handleOpenOpportunity = (opp: PromotionOpportunity) => {
    setSelectedOpportunity(opp);
    setSelectedPackage(null);
    setModalOpen(true);
  };

  const handleOpenPackage = (pkg: FashionPackage) => {
    setSelectedPackage(pkg);
    setSelectedOpportunity(null);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedOpportunity(null);
    setSelectedPackage(null);
  };

  const handleSelectForEnquiry = (itemName: string) => {
    setPrefilledEnquiry(itemName);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#B4F000] selection:text-black">
      <BrandActivationHero />
      <SectionNavigation />
      <TheAdrydAdvantage />
      <PromotionOpportunities onSelectOpportunity={handleOpenOpportunity} />
      <BusinessEngines />
      <CommercialDivisions />
      <FashionConnectSection />
      <QRCustomerJourney />
      <AffiliateNetworkSection />
      <SocialMediaSection />
      <FootfallSection />
      <MobileMediaSection />
      <PreOrderSection />
      <NationalExpansionSection />
      <TravelExperiencesSection />
      <FashionCampaignPackagesSection onSelectPackage={handleOpenPackage} />
      <RevenueModelSection />
      <MarketingComparisonSection />
      <ShowroomComparisonSection />
      <AnalyticsDashboardPreview />
      <ROICalculatorSection />
      <AdditionalOpportunitiesSection />
      <EntrepreneurJourneySection />
      <TechnologyEcosystemSection />
      <BusinessSafeguardsSection />
      <BrandActivationCTA prefilledItem={prefilledEnquiry} />

      <BrandActivationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        opportunity={selectedOpportunity}
        fashionPackage={selectedPackage}
        onSelectForEnquiry={handleSelectForEnquiry}
      />
    </div>
  );
}
`;

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'app', 'brand-activation', 'BrandActivationClient.tsx'),
  clientContent,
  'utf8'
);
console.log('Created BrandActivationClient.tsx');

// 3. Server Page: src/app/brand-activation/page.tsx
const pageContent = `import { Metadata } from 'next';
import BrandActivationClient from './BrandActivationClient';

export const metadata: Metadata = {
  title: 'ADRYD Brand Activation & Commerce Network | Fashion, Live Sales & Brand Promotion',
  description:
    'Explore ADRYD proposed brand activation ecosystem, combining electric mobility, human promotion, affiliate sales, mobile LED media, and fashion-tourism collaborations across India.',
  openGraph: {
    title: 'ADRYD Brand Activation & Commerce Network — Don’t Just Advertise. Activate Your Brand.',
    description:
      'A next-generation business growth platform designed to connect mobility, human promotion, direct sales, affiliate marketing and nationwide brand experiences.',
    url: 'https://adryd-v3-preview.pages.dev/brand-activation',
    siteName: 'ADRYD',
    images: [
      {
        url: '/images/brand-activation/promoters-standee-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'ADRYD Brand Activation & Commerce Network',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADRYD Brand Activation & Commerce Network',
    description:
      'Connecting mobility, human promotion, direct sales, affiliate marketing and nationwide brand experiences in India.',
    images: ['/images/brand-activation/promoters-standee-hero.jpg'],
  },
};

export default function BrandActivationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'ADRYD Brand Activation & Commerce Network',
            serviceType: 'Mobile Brand Activation, Experiential Marketing & Direct Commerce',
            provider: {
              '@type': 'Organization',
              name: 'ADRYD',
              url: 'https://adryd-v3-preview.pages.dev',
            },
            areaServed: {
              '@type': 'Country',
              name: 'India',
            },
            description:
              'A next-generation business growth platform designed to connect mobility, human promotion, direct sales, affiliate marketing and nationwide brand experiences.',
          }),
        }}
      />
      <BrandActivationClient />
    </>
  );
}
`;

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'app', 'brand-activation', 'page.tsx'),
  pageContent,
  'utf8'
);
console.log('Created src/app/brand-activation/page.tsx');
