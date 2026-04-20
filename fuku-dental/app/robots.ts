import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/static/media/*.woff2', '/_next/static/media/*.woff'],
    },
    sitemap: 'https://fshika.com/sitemap.xml',
  };
}
