import { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { cookieData } from '@/data/legal/cookieData';

export const metadata: Metadata = {
  title: 'Cookie Policy | ADRYD',
  description:
    'Information regarding our use of essential cookies, preferences, and tracking management on the ADRYD platform.',
  alternates: {
    canonical: 'https://adryd.com/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return <LegalPageLayout policy={cookieData} />;
}
