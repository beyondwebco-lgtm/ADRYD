import HeroSection from '@/components/home/HeroSection';
import ConceptSection from '@/components/home/ConceptSection';
import ServicesSection from '@/components/home/ServicesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ProductCategoriesSection from '@/components/home/ProductCategoriesSection';
import CampaignPackagesSection from '@/components/home/CampaignPackagesSection';
import RiderPartnerSection from '@/components/home/RiderPartnerSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <>
      {/* 01: Hero — YOUR BRAND. EVERYWHERE. IN MOTION. (Futuristic Universe Animation, No 3D Scooter) */}
      <HeroSection />

      {/* 02: The Idea — MARKETING THAT MOVES. (Lavender × Electric Blue) */}
      <ConceptSection />

      {/* 03: What ADRYD Does — ONE NETWORK. MANY POSSIBILITIES. (7 Multicolor Cards) */}
      <ServicesSection />

      {/* 04: How It Works — THREE STEPS. REAL-WORLD REACH. (Cyan × Mint × Blue) */}
      <HowItWorksSection />

      {/* 05: Who Can Grow — BUILT FOR EVERY BIG IDEA. (Yellow × Pink × Mint × Lavender) */}
      <ProductCategoriesSection />

      {/* 06: Campaign Plans — START SMALL. THINK BIG. (Violet × Blue) */}
      <CampaignPackagesSection />

      {/* 07: Partner With ADRYD — BE PART OF THE MOVEMENT. (Mint × Turquoise) */}
      <RiderPartnerSection />

      {/* 08: Final CTA — LET'S MAKE YOUR BRAND MOVE. (Magenta × Violet × Electric Blue) */}
      <FinalCtaSection />
    </>
  );
}
