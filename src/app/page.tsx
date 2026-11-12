import HeroSection from '@/components/home/HeroSection';
import ConceptSection from '@/components/home/ConceptSection';
import ServicesSection from '@/components/home/ServicesSection';
import AdrydUpgradeSection from '@/components/home/AdrydUpgradeSection';
import ProductCategoriesSection from '@/components/home/ProductCategoriesSection';
import CampaignPackagesSection from '@/components/home/CampaignPackagesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import CityTargetingSection from '@/components/home/CityTargetingSection';
import CreativeServicesSection from '@/components/home/CreativeServicesSection';
import TechnologyPreviewSection from '@/components/home/TechnologyPreviewSection';
import RiderPartnerSection from '@/components/home/RiderPartnerSection';
import SafetyTrustSection from '@/components/home/SafetyTrustSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <>
      {/* 01: Full-Viewport Cinematic Carbon Black × Neon Volt Hero */}
      <HeroSection />

      {/* 02: The ADRYD Concept (More Than Advertising. A Marketplace in Motion) */}
      <ConceptSection />

      {/* 03: The Seven ADRYD Services (Promote, Showcase, Sell, Pre-Order, Deliver, Viral, Insights) */}
      <ServicesSection />

      {/* 04: ADRYD Upgrade (From Brand Visibility to Product Discovery to Commerce) */}
      <AdrydUpgradeSection />

      {/* 05: Product Categories (8 Categories with 5 Pilot Priority Sectors) */}
      <ProductCategoriesSection />

      {/* 06: Campaign Packages (5 Illustrative Packages & 4 Monthly Retainer Plans) */}
      <CampaignPackagesSection />

      {/* 07: How ADRYD Works (6-Step Moving Campaign Timeline) */}
      <HowItWorksSection />

      {/* 08: Hyderabad Pilot Locations (5 Test Corridors with Audience Profiles) */}
      <CityTargetingSection />

      {/* 09: ADRYD Viral (From the Street to the Screen) */}
      <CreativeServicesSection />

      {/* 10: Technology & Roadmap (Designed for a Connected Future) */}
      <TechnologyPreviewSection />

      {/* 11: Partner Network (Join the Movement. Become an ADRYD Partner) */}
      <RiderPartnerSection />

      {/* 12: Safety & Trust (Built Around Responsible Operations) */}
      <SafetyTrustSection />

      {/* 13: Final Cinematic CTA */}
      <FinalCtaSection />
    </>
  );
}
