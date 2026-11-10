import HeroSection from '@/components/home/HeroSection';
import ConceptSection from '@/components/home/ConceptSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import CityTargetingSection from '@/components/home/CityTargetingSection';
import AdrydUpgradeSection from '@/components/home/AdrydUpgradeSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import TechnologyPreviewSection from '@/components/home/TechnologyPreviewSection';
import RiderPartnerSection from '@/components/home/RiderPartnerSection';
import CreativeServicesSection from '@/components/home/CreativeServicesSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <>
      {/* 01: Full-Viewport Cinematic Hero */}
      <HeroSection />

      {/* 02: The ADRYD Concept (Soft Ivory contrast) */}
      <ConceptSection />

      {/* 03: How ADRYD Works (Timeline) */}
      <HowItWorksSection />

      {/* 04: Advertising Solutions (4 Packages) */}
      <SolutionsSection />

      {/* 05: City Targeting Experience (Interactive Hyderabad Route Simulator) */}
      <CityTargetingSection />

      {/* 06: ADRYD Upgrade (Mobile Commerce & Showcases) */}
      <AdrydUpgradeSection />

      {/* 07: Industries We Serve (8 Segments) */}
      <IndustriesSection />

      {/* 08: Campaign Technology (Console & Roadmap Preview) */}
      <TechnologyPreviewSection />

      {/* 09: Become an EV Partner (Rider Network) */}
      <RiderPartnerSection />

      {/* 10: Creative Services (Studio & Production) */}
      <CreativeServicesSection />

      {/* 11: Final Cinematic CTA */}
      <FinalCtaSection />
    </>
  );
}
