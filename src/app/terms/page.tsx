import { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { termsData } from '@/data/legal/termsData';

export const metadata: Metadata = {
  title: 'Terms and Conditions | ADRYD',
  description:
    'Core platform rules, eligibility standards, campaign booking parameters, intellectual property rights, and user responsibilities governing the ADRYD network.',
  alternates: {
    canonical: 'https://adryd.com/terms',
  },
};

export default function TermsPage() {
  return <LegalPageLayout policy={termsData} />;
}
