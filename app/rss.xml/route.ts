import { getPublishedEntries } from '@/lib/content';
import { siteConfig } from '@/data/site';

export const dynamic = 'force-static';

function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  })[character] ?? character);
}

export function GET(): Response {
  const posts = getPublishedEntries('blog');
  const items = posts.map(post => {
    const url = siteConfig.url + '/blog/' + post.slug;
    return [
      '    <item>',
      '      <title>' + escapeXml(post.title) + '</title>',
      '      <link>' + escapeXml(url) + '</link>',
      '      <guid isPermaLink="true">' + escapeXml(url) + '</guid>',
      '      <description>' + escapeXml(post.description) + '</description>',
      post.date ? '      <pubDate>' + new Date(post.date + 'T00:00:00Z').toUTCString() + '</pubDate>' : '',
      '    </item>',
    ].filter(Boolean).join('\n');
  }).join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    '  <channel>',
    '    <title>' + escapeXml(siteConfig.name + ' — Engineering Notes') + '</title>',
    '    <link>' + escapeXml(siteConfig.url + '/blog') + '</link>',
    '    <description>' + escapeXml('Technical writing about backend engineering, data, and system design.') + '</description>',
    '    <language>en-US</language>',
    '    <lastBuildDate>' + new Date().toUTCString() + '</lastBuildDate>',
    items,
    '  </channel>',
    '</rss>',
  ].join('\n');

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
