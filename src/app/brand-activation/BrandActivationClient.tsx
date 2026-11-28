'use client';

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
