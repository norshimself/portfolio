import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EntryPage from '@/components/EntryPage';
import { getEntry, getPublishedEntries, getVisibleEntries } from '@/lib/content';
import { siteConfig } from '@/data/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPublishedEntries('blog').map(entry => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry('blog', slug);
  if (!entry) return { title: 'Article not found', robots: { index: false, follow: false } };
  const path = '/blog/' + slug;
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: path },
    robots: { index: entry.published, follow: entry.published },
    openGraph: {
      type: 'article',
      title: entry.title,
      description: entry.description,
      url: path,
      siteName: siteConfig.title,
      authors: [siteConfig.name],
      publishedTime: entry.published ? entry.date : undefined,
      images: entry.cover ? [entry.cover] : undefined,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = getEntry('blog', slug);
  if (!entry) notFound();
  const related = getVisibleEntries('blog').filter(item => item.slug !== slug).slice(0, 2);
  return <EntryPage entry={entry} related={related}/>;
}
