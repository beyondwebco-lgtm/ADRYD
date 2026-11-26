import { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { safetyData } from '@/data/legal/safetyData';

export const metadata: Metadata = {
  title: 'Safety and Community Guidelines | ADRYD',
  description:
    'Mandatory road safety rules, promotional display engineering specifications, public space etiquette, and accident reporting protocols.',
  alternates: {
    canonical: 'https://adryd.com/safety-guidelines',
  },
};

export default function SafetyGuidelinesPage() {
  return <LegalPageLayout policy={safetyData} />;
}
