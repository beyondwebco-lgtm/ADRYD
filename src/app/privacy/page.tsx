import { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { privacyData } from '@/data/legal/privacyData';

export const metadata: Metadata = {
  title: 'Privacy Policy | ADRYD',
  description:
    'Comprehensive explanation of how ADRYD collects, processes, stores, discloses, and protects personal data in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act).',
  alternates: {
    canonical: 'https://adryd.com/privacy',
  },
};

export default function PrivacyPage() {
  return <LegalPageLayout policy={privacyData} />;
}
