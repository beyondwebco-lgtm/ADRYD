import { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { rewardsData } from '@/data/legal/rewardsData';

export const metadata: Metadata = {
  title: 'Rewards and Career Progression Policy | ADRYD',
  description:
    'Framework outlining ADRYD\'s 10-tier professional rider progression, performance evaluation criteria, recognition perks, and sponsored travel programs.',
  alternates: {
    canonical: 'https://adryd.com/rewards-policy',
  },
};

export default function RewardsPolicyPage() {
  return <LegalPageLayout policy={rewardsData} />;
}
