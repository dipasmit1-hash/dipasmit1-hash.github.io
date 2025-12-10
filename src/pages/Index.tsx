import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { SkillsSection } from '@/components/SkillsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dipasmit Ghosh | Branding Leader & Digital Marketing Strategist</title>
        <meta name="description" content="Dipasmit Ghosh is a strategic and creative Digital Marketing Leader with over 7 years of experience in driving brand growth, full-funnel marketing, and performance strategies." />
        <meta name="keywords" content="Dipasmit Ghosh, Digital Marketing, Branding, Marketing Strategist, SEO, SEM, Content Marketing, Kolkata" />
        <link rel="canonical" href="https://dipasmitghosh.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <PortfolioSection />
          <SkillsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
