import PortfolioShell from '@/components/PortfolioShell';
import VideoBackground from '@/components/VideoBackground';
import HeroSection from '@/components/HeroSection';
import SelectedWorksSection from '@/components/SelectedWorksSection';
import ExperienceSection from '@/components/ExperienceSection';
import ServicesSection from '@/components/ServicesSection';
import TechStackSection from '@/components/TechStackSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LatestWritingSection from '@/components/LatestWritingSection';
import { getPublishedEntries } from '@/lib/content';
import { formatDate } from '@/lib/content-format';
import type { WorkItem } from '@/types';

export default function Home() {
  // Real published case studies replace the three existing sample cards
  // automatically. Until then, the homepage placeholders stay unchanged.
  const projects: WorkItem[] = getPublishedEntries('projects')
    .filter(entry => entry.featured)
    .slice(0, 3)
    .map(entry => ({
      title: entry.title,
      category: entry.tags[0] || 'Project',
      description: entry.description,
      date: formatDate(entry.date) ?? '',
      role: entry.role,
      image: entry.cover ?? '/assets/images/works/placeholder-01.svg',
      stack: entry.stack,
      href: '/projects/' + entry.slug,
    }));
  return (
    <PortfolioShell>
      <VideoBackground />
      <main id="main-content" tabIndex={-1} className="main-content">
        <HeroSection />
        <SelectedWorksSection featuredProjects={projects} />
        <ExperienceSection />
        <ServicesSection />
        <TechStackSection />
        <EducationSection />
        <LatestWritingSection />
        <ContactSection />
        <Footer />
      </main>
    </PortfolioShell>
  );
}
