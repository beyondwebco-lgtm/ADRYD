import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import GlobalImmersiveBackground from '@/components/3d/GlobalImmersiveBackground';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://adryd.com'),
  title: {
    default: 'ADRYD | Your Brand. Everywhere It Matters.',
    template: '%s | ADRYD',
  },
  description:
    'ADRYD brings brands and customers together through electric mobility, creative promotions and real-world product experiences.',
  keywords: [
    'Mobile advertising Hyderabad',
    'Electric vehicle advertising',
    'Mobile product showcasing',
    'Mobile commerce platform',
    'Hyperlocal brand promotion',
    'QR-enabled product marketing',
    'Local pre-order campaigns',
    'EV advertising campaigns',
    'Product activation campaigns',
    'Hyperlocal delivery solutions',
    'ADRYD Upgrade',
  ],
  authors: [{ name: 'ADRYD Mobility Technologies' }],
  creator: 'ADRYD',
  publisher: 'ADRYD Mobility Technologies',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://adryd.com',
    siteName: 'ADRYD',
    title: 'ADRYD | Your Brand. Everywhere It Matters.',
    description:
      'ADRYD brings brands and customers together through electric mobility, creative promotions and real-world product experiences.',
    images: [
      {
        url: '/images/adryd-fleet-hyderabad.jpg',
        width: 1200,
        height: 630,
        alt: 'ADRYD Moving Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADRYD | Your Brand. Everywhere It Matters.',
    description:
      'ADRYD brings brands and customers together through electric mobility, creative promotions and real-world product experiences.',
    images: ['/images/adryd-fleet-hyderabad.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#000000] text-white font-body selection:bg-[#B4F000]/30 selection:text-[#B4F000] min-h-screen flex flex-col antialiased relative"
        suppressHydrationWarning
      >
        <GlobalImmersiveBackground />
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
