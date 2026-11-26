import { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { disclaimerData } from '@/data/legal/disclaimerData';

export const metadata: Metadata = {
  title: 'Disclaimer | ADRYD',
  description:
    'Disclosures regarding business concept demonstrations, absence of guaranteed income or sales returns, illustrative calculator notice, and development features.',
  alternates: {
    canonical: 'https://adryd.com/disclaimer',
  },
};

export default function DisclaimerPage() {
  return <LegalPageLayout policy={disclaimerData} />;
}
