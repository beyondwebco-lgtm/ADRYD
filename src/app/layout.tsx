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
  themeColor: '#730018',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://adryd.com'),
  title: {
    default: 'ADRYD | Electric Mobility-Powered Mobile Advertising Platform',
    template: '%s | ADRYD',
  },
  description: 'ADRYD turns electric vehicle movement into a measurable, high-impact mobile advertising channel across Hyderabad. Ride. Promote. Sell. Grow.',
  keywords: [
    'EV advertising Hyderabad',
    'Mobile advertising Hyderabad',
    'Electric scooter advertising',
    'Mobile brand promotion',
    'Location-based advertising Hyderabad',
    'Fleet advertising campaigns',
    'ADRYD mobility tech',
    'OOH advertising Hyderabad',
    'Mobile product showcasing',
    'ADRYD Upgrade'
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
    title: 'ADRYD | Electric Mobility-Powered Mobile Advertising Platform',
    description: 'Connect your brand with citywide EV movement in Hyderabad. Premium mobile brand showcases, location targeting, and verified campaign execution.',
    images: [
      {
        url: '/images/adryd-fleet-hyderabad.jpg',
        width: 1200,
        height: 630,
        alt: 'ADRYD Electric Mobility Fleet in Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADRYD | Electric Mobility-Powered Mobile Advertising Platform',
    description: 'Transform your brand visibility with on-the-go electric scooter advertising and mobile commerce showcases in Hyderabad.',
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
        className="bg-carbon-black text-soft-ivory font-body selection:bg-electric-yellow selection:text-carbon-black min-h-screen flex flex-col antialiased"
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
