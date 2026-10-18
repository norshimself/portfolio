import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';
import { getPublishedEntries } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: siteConfig.url + '/projects', lastModified: now, changeFrequency: 'monthly', priority: .8 },
    { url: siteConfig.url + '/blog', lastModified: now, changeFrequency: 'monthly', priority: .7 },
  ];

  const entries: MetadataRoute.Sitemap = [...getPublishedEntries('projects'), ...getPublishedEntries('blog')]
    .map(entry => ({
      url: siteConfig.url + '/' + entry.kind + '/' + entry.slug,
      lastModified: entry.date ? new Date(entry.date + 'T00:00:00Z') : now,
      changeFrequency: 'monthly' as const,
      priority: entry.kind === 'projects' ? .7 : .6,
    }));

  return [...fixed, ...entries];
}
