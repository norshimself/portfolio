import type { Metadata } from 'next';
import ListingPage from '@/components/ListingPage';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Engineering Notes',
  description: 'Writing about backend engineering, API integrations, data systems, and software development by ' + siteConfig.name + '.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    title: 'Engineering Notes — ' + siteConfig.name,
    description: 'Technical writing on systems, data, architecture, and practical engineering.',
    url: '/blog',
  },
};

export default function BlogPage() {
  return <ListingPage kind="blog" />;
}
