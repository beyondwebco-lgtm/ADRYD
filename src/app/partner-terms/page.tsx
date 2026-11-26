import { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { partnerTermsData } from '@/data/legal/partnerTermsData';

export const metadata: Metadata = {
  title: 'Entrepreneur and Brand Partner Terms | ADRYD',
  description:
    'Commercial terms governing brand sponsors, local businesses, direct-to-consumer entrepreneurs, and fleet operators collaborating with ADRYD.',
  alternates: {
    canonical: 'https://adryd.com/partner-terms',
  },
};

export default function PartnerTermsPage() {
  return <LegalPageLayout policy={partnerTermsData} />;
}
