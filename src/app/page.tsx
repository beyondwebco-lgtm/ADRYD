import HeroSection from '@/components/home/HeroSection';
import ConceptSection from '@/components/home/ConceptSection';
import ServicesSection from '@/components/home/ServicesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ProductCategoriesSection from '@/components/home/ProductCategoriesSection';
import CampaignPackagesSection from '@/components/home/CampaignPackagesSection';
import GravitySection from '@/components/home/GravitySection';
import RiderPartnerSection from '@/components/home/RiderPartnerSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <>
      {/* 01: Hero — YOUR BRAND. EVERYWHERE IT MATTERS. (3D Palapitta Electric Scooter) */}
      <HeroSection />

      {/* 02: About — MORE THAN ADVERTISING. */}
      <ConceptSection />

      {/* 03: Services — ONE PLATFORM. MORE POSSIBILITIES. */}
      <ServicesSection />

      {/* 04: How It Works — THREE SIMPLE STEPS. (Curved Route & Scooter in Motion) */}
      <HowItWorksSection />

      {/* 05: Product Categories — MADE FOR EVERY BRAND. (3D Product Showcase) */}
      <ProductCategoriesSection />

      {/* 06: Campaign Plans — FLEXIBLE CAMPAIGNS. BIG POSSIBILITIES. */}
      <CampaignPackagesSection />

      {/* 07: 3D Physics — CREATIVE IDEAS. REAL-WORLD IMPACT. */}
      <GravitySection />

      {/* 08: Become a Partner — RIDE WITH ADRYD. */}
      <RiderPartnerSection />

      {/* 09: Final CTA — LET'S GET YOUR BRAND MOVING. */}
      <FinalCtaSection />
    </>
  );
}
