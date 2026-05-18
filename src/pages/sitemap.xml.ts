import type { APIRoute } from 'astro';
import { guides, site } from '../data/guides';

export const GET: APIRoute = () => {
  const policyUrls = [
    '/about/',
    '/contact/',
    '/privacy-policy/',
    '/cookie-policy/',
    '/terms-of-use/',
    '/disclaimer/',
    '/editorial-policy/'
  ];

  const urls = [
    { loc: `${site.url}/`, priority: '1.0' },
    ...policyUrls.map((path) => ({ loc: `${site.url}${path}`, priority: '0.5' })),
    ...guides
      .filter((guide) => !guide.noindex)
      .map((guide) => ({
        loc: `${site.url}/${guide.slug}/`,
        priority: guide.priority <= 6 ? '0.9' : '0.7'
      }))
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${site.isoUpdated}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};
