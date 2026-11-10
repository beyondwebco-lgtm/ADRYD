import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ADRYD — Electric Mobility Advertising',
    short_name: 'ADRYD',
    description: 'Electric mobility-powered mobile advertising and on-the-go brand growth in Hyderabad.',
    start_url: '/',
    display: 'standalone',
    background_color: '#101115',
    theme_color: '#730018',
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
