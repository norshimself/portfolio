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

export default function Home() {
  return (
    <PortfolioShell>
      <VideoBackground />
      <main id="main-content" className="main-content">
        <HeroSection />
        <SelectedWorksSection />
        <ExperienceSection />
        <ServicesSection />
        <TechStackSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </main>
    </PortfolioShell>
  );
}
