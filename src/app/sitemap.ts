import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adryd.com';
  const routes = [
    '',
    '/about',
    '/solutions',
    '/solutions/single-rider',
    '/solutions/dual-rider',
    '/solutions/fleet-advertising',
    '/solutions/location-targeting',
    '/adryd-upgrade',
    '/how-it-works',
    '/industries',
    '/technology',
    '/creative-services',
    '/become-a-rider',
    '/book-campaign',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
  ];

  const currentDate = new Date().toISOString();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/solutions') || route === '/book-campaign' ? 0.9 : 0.8,
  }));
}
