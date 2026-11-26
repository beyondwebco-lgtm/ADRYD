import { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { affiliateData } from '@/data/legal/affiliateData';

export const metadata: Metadata = {
  title: 'Affiliate and Commission Policy | ADRYD',
  description:
    'Rules governing affiliate identifiers, QR attribution mechanics, commission eligibility standards, payout schedules, and prohibited practices.',
  alternates: {
    canonical: 'https://adryd.com/affiliate-policy',
  },
};

export default function AffiliatePolicyPage() {
  return <LegalPageLayout policy={affiliateData} />;
}
