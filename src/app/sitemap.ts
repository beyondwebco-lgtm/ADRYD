import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

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
    '/riderpreneur',
    '/book-campaign',
    '/contact',
    // Legal & Operational Policy Pages
    '/terms',
    '/privacy',
    '/cookie-policy',
    '/refund-policy',
    '/rider-terms',
    '/partner-terms',
    '/affiliate-policy',
    '/rewards-policy',
    '/safety-guidelines',
    '/disclaimer',
    // Legacy canonical aliases
    '/privacy-policy',
    '/terms-and-conditions',
  ];

  const currentDate = new Date().toISOString();

  return routes.map((route) => {
    const isLegal = [
      '/terms',
      '/privacy',
      '/cookie-policy',
      '/refund-policy',
      '/rider-terms',
      '/partner-terms',
      '/affiliate-policy',
      '/rewards-policy',
      '/safety-guidelines',
      '/disclaimer',
      '/privacy-policy',
      '/terms-and-conditions',
    ].includes(route);

    return {
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: route === '' ? 'daily' : isLegal ? 'monthly' : 'weekly',
      priority:
        route === ''
          ? 1.0
          : route.startsWith('/solutions') || route === '/book-campaign' || route === '/riderpreneur'
            ? 0.9
            : isLegal
              ? 0.5
              : 0.8,
    };
  });
}
