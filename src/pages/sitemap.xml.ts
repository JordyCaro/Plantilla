import type { APIRoute } from 'astro';

const pages: string[] = [
  '/',
  '/contacto'
];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = String(site ?? '');
  const lastmod = new Date().toISOString();

  const urls = pages
    .map((path) => {
      const loc = `${baseUrl.replace(/\/$/, '')}${path}`;
      const priority = path === '/' ? '1.0' : '0.8';
      return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
    })
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
