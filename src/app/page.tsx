import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';
import ConceptSection from '@/components/home/ConceptSection';
import ServicesSection from '@/components/home/ServicesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';

// Below-the-fold components are dynamically chunked to minimize initial main-thread JS execution
const ProductCategoriesSection = dynamic(
  () => import('@/components/home/ProductCategoriesSection')
);
const CampaignPackagesSection = dynamic(
  () => import('@/components/home/CampaignPackagesSection')
);
const RiderPartnerSection = dynamic(
  () => import('@/components/home/RiderPartnerSection')
);
const FinalCtaSection = dynamic(
  () => import('@/components/home/FinalCtaSection')
);

export default function HomePage() {
  return (
    <>
      {/* 01: Hero — YOUR BRAND. EVERYWHERE. IN MOTION. */}
      <HeroSection />

      {/* 02: The Idea — MARKETING THAT MOVES. */}
      <ConceptSection />

      {/* 03: What ADRYD Does — ONE NETWORK. MANY POSSIBILITIES. */}
      <ServicesSection />

      {/* 04: How It Works — THREE STEPS. REAL-WORLD REACH. */}
      <HowItWorksSection />

      {/* 05: Who Can Grow — BUILT FOR EVERY BIG IDEA. */}
      <ProductCategoriesSection />

      {/* 06: Campaign Plans — START SMALL. THINK BIG. */}
      <CampaignPackagesSection />

      {/* 07: Partner With ADRYD — BE PART OF THE MOVEMENT. */}
      <RiderPartnerSection />

      {/* 08: Final CTA — LET'S MAKE YOUR BRAND MOVE. */}
      <FinalCtaSection />
    </>
  );
}
