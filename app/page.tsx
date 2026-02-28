import Navbar from '@/components/Navbar';
import LeftSidebar from '@/components/LeftSidebar';
import RightNav from '@/components/RightNav';
import VideoBackground from '@/components/VideoBackground';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import SelectedWorksSection from '@/components/SelectedWorksSection';
import ServicesSection from '@/components/ServicesSection';
import TechStackSection from '@/components/TechStackSection';
import ProcessSection from '@/components/ProcessSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div id="wrapper">
      <VideoBackground />
      <LeftSidebar />
      <Navbar />

      <main className="main-content">
        <HeroSection />
        <ExperienceSection />
        <SelectedWorksSection />
        <ServicesSection />
        <TechStackSection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>

      <RightNav />
    </div>
  );
}
