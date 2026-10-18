import type { Metadata } from 'next';
import ListingPage from '@/components/ListingPage';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Projects & Case Studies',
  description: 'Engineering projects, backend architectures, and technical case studies by ' + siteConfig.name + '.',
  alternates: { canonical: '/projects' },
  openGraph: {
    type: 'website',
    title: 'Projects & Case Studies — ' + siteConfig.name,
    description: 'How I approach engineering problems, technical decisions, and real-world systems.',
    url: '/projects',
  },
};

export default function ProjectsPage() {
  return <ListingPage kind="projects" />;
}
