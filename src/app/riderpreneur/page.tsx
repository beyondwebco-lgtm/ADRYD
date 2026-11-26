import { Metadata } from 'next';
import RiderpreneurStickyNav from '@/components/riderpreneur/RiderpreneurStickyNav';
import RiderpreneurHero from '@/components/riderpreneur/RiderpreneurHero';
import PillarsSection from '@/components/riderpreneur/PillarsSection';
import IdentityComparisonSection from '@/components/riderpreneur/IdentityComparisonSection';
import JoinOptionsSection from '@/components/riderpreneur/JoinOptionsSection';
import OpportunityGrid from '@/components/riderpreneur/OpportunityGrid';
import OpportunityNetwork from '@/components/riderpreneur/OpportunityNetwork';
import AffiliateIdSection from '@/components/riderpreneur/AffiliateIdSection';
import CareerLadderSection from '@/components/riderpreneur/CareerLadderSection';
import EarningsCalculatorSection from '@/components/riderpreneur/EarningsCalculatorSection';
import RiderDashboardPreview from '@/components/riderpreneur/RiderDashboardPreview';
import RewardsShowcaseSection from '@/components/riderpreneur/RewardsShowcaseSection';
import SponsoredTravelSection from '@/components/riderpreneur/SponsoredTravelSection';
import SkillsCareerSection from '@/components/riderpreneur/SkillsCareerSection';
import SpecialProgrammesSection from '@/components/riderpreneur/SpecialProgrammesSection';
import EntrepreneurEcosystemSection from '@/components/riderpreneur/EntrepreneurEcosystemSection';
import OnboardingJourneySection from '@/components/riderpreneur/OnboardingJourneySection';

export const metadata: Metadata = {
  title: 'ADRYD Riderpreneur Program | Transforming Riders into Brand Professionals',
  description:
    'Don’t just ride. Rise with ADRYD. Transform from a delivery rider into an independent brand promoter, direct sales partner, and marketing professional with 11 earning opportunities, 10 career levels, and lifetime digital affiliate equity.',
  openGraph: {
    title: 'ADRYD Riderpreneur Program — Don’t Just Ride. Rise.',
    description:
      'Transforming delivery riders into independent brand promoters, sales partners, and marketing professionals in Hyderabad. 11 opportunities, 10 career levels, and 2 ways to join.',
    url: 'https://adryd-v3-preview.pages.dev/riderpreneur',
    siteName: 'ADRYD',
    images: [
      {
        url: '/images/adryd-riderpreneur-kit.jpg',
        width: 1200,
        height: 630,
        alt: 'ADRYD Riderpreneur Program',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RiderpreneurPage() {
  return (
    <div className="relative min-h-screen bg-[#000000] text-slate-100 selection:bg-[#B4F000] selection:text-[#000000]">
      {/* Sticky Sub-Navigation */}
      <RiderpreneurStickyNav />

      {/* Section 01: Hero */}
      <RiderpreneurHero />

      {/* Section 02: What is ADRYD Riderpreneur? (Pillars: EARN, GROW, RISE) */}
      <PillarsSection />

      {/* Section 03: From Delivery Rider to Marketing Professional (Comparison Matrix) */}
      <IdentityComparisonSection />

      {/* Section 04: Two Ways to Join (Own EV vs Rental Fleet) */}
      <JoinOptionsSection />

      {/* Section 05: 11 Opportunities. One Rider. (Interactive Cards & Modal) */}
      <OpportunityGrid />

      {/* Section 06: One Rider ID. Connected Opportunities. (Network Diagram) */}
      <OpportunityNetwork />

      {/* Section 07: Lifetime Digital Affiliate ID */}
      <AffiliateIdSection />

      {/* Section 08: Career Growth Ladder (10 Tiers Starter to Antique) */}
      <CareerLadderSection />

      {/* Section 09: Interactive Earning Calculator */}
      <EarningsCalculatorSection />

      {/* Section 10: Your Professional Dashboard (Interactive Preview) */}
      <RiderDashboardPreview />

      {/* Section 11: Rewards & Recognition */}
      <RewardsShowcaseSection />

      {/* Section 12: Sponsored Travel & Promotional Experiences */}
      <SponsoredTravelSection />

      {/* Section 13: Skills & Future Career Opportunities */}
      <SkillsCareerSection />

      {/* Section 14: Six Special Development Programmes */}
      <SpecialProgrammesSection />

      {/* Section 15: How Entrepreneurs & Brands Benefit */}
      <EntrepreneurEcosystemSection />

      {/* Section 16: How to Start Your ADRYD Journey (9-Step Timeline & Final CTA) */}
      <OnboardingJourneySection />
    </div>
  );
}
