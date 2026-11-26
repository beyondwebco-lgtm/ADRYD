import { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { riderTermsData } from '@/data/legal/riderTermsData';

export const metadata: Metadata = {
  title: 'Riderpreneur Terms | ADRYD',
  description:
    'Operational terms governing participation in the ADRYD Riderpreneur Program, dual vehicle registration paths, verification, safety, and career progression.',
  alternates: {
    canonical: 'https://adryd.com/rider-terms',
  },
};

export default function RiderTermsPage() {
  return <LegalPageLayout policy={riderTermsData} />;
}
