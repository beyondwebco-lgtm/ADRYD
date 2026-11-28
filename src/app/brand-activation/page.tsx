import { Metadata } from 'next';
import BrandActivationClient from './BrandActivationClient';

export const metadata: Metadata = {
  title: 'ADRYD Brand Activation & Commerce Network | Fashion, Live Sales & Brand Promotion',
  description:
    'Explore ADRYD proposed brand activation ecosystem, combining electric mobility, human promotion, affiliate sales, mobile LED media, and fashion-tourism collaborations across India.',
  openGraph: {
    title: 'ADRYD Brand Activation & Commerce Network — Don’t Just Advertise. Activate Your Brand.',
    description:
      'A next-generation business growth platform designed to connect mobility, human promotion, direct sales, affiliate marketing and nationwide brand experiences.',
    url: 'https://adryd-v3-preview.pages.dev/brand-activation',
    siteName: 'ADRYD',
    images: [
      {
        url: '/images/brand-activation/promoters-standee-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'ADRYD Brand Activation & Commerce Network',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADRYD Brand Activation & Commerce Network',
    description:
      'Connecting mobility, human promotion, direct sales, affiliate marketing and nationwide brand experiences in India.',
    images: ['/images/brand-activation/promoters-standee-hero.jpg'],
  },
};

export default function BrandActivationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'ADRYD Brand Activation & Commerce Network',
            serviceType: 'Mobile Brand Activation, Experiential Marketing & Direct Commerce',
            provider: {
              '@type': 'Organization',
              name: 'ADRYD',
              url: 'https://adryd-v3-preview.pages.dev',
            },
            areaServed: {
              '@type': 'Country',
              name: 'India',
            },
            description:
              'A next-generation business growth platform designed to connect mobility, human promotion, direct sales, affiliate marketing and nationwide brand experiences.',
          }),
        }}
      />
      <BrandActivationClient />
    </>
  );
}
