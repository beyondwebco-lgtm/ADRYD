import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter, Rajdhani } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0C0D12',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://adryd.com'),
  title: {
    default: 'ADRYD Upgrade | Mobile Advertising & Commerce Platform',
    template: '%s | ADRYD Upgrade',
  },
  description:
    'Discover ADRYD Upgrade, an electric mobility-powered platform concept connecting mobile advertising, product showcases, QR commerce, pre-orders and hyperlocal delivery.',
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
    siteName: 'ADRYD Upgrade',
    title: 'ADRYD Upgrade | Mobile Advertising & Commerce Platform',
    description:
      'Connecting brands, products and local audiences through electric mobility-powered promotions, product showcases and commerce experiences across Hyderabad.',
    images: [
      {
        url: '/images/adryd-fleet-hyderabad.jpg',
        width: 1200,
        height: 630,
        alt: 'ADRYD Upgrade Moving Marketplace in Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADRYD Upgrade | Mobile Advertising & Commerce Platform',
    description:
      'Transform brand visibility into product discovery and commerce through electric mobility in Hyderabad.',
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${rajdhani.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#0C0D12] text-[#F2F3F5] font-body selection:bg-[#E7FF39] selection:text-[#0C0D12] min-h-screen flex flex-col antialiased"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
