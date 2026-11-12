import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ADRYD — Your Brand. Your Products. Our Moving Marketplace.',
    short_name: 'ADRYD UPGRADE',
    description: 'Electric Mobility-Powered Mobile Advertising, Product Showcase, Commerce, Pre-Orders and Hyperlocal Delivery Platform.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0C0D12',
    theme_color: '#0C0D12',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
