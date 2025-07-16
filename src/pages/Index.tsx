import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { OrganizationSection } from '@/components/OrganizationSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import DownloadSection from '../components/DownloadSection';
import TimelineSection from '../components/TimelineSection';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SupportChat from "@/components/SupportChat";
import { useTranslation } from 'react-i18next';

const Index = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    const sectionId = localStorage.getItem('scrollToSection');
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      localStorage.removeItem('scrollToSection');
    }
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <OrganizationSection />
      <ServicesSection />
      <TimelineSection />
      <section className="w-full bg-blue-50 py-16 flex items-center justify-center">
        <div className="max-w-5xl w-full px-4">
          <DownloadSection />
        </div>
      </section>
      {/* Section Bourse Directe */}
      <div className="bg-blue-50 rounded-2xl shadow-lg p-8 my-10 flex flex-col items-center text-center mx-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">{t('home.bourseDirecteTitle')}</h2>
        <p className="text-gray-600 mb-6">
          {t('home.bourseDirecteDesc')}
        </p>
        <a
          href="https://www.valorisboursedirect.capitalgestiongroup.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
        >
          {t('home.bourseDirecteBtn')}
        </a>
      </div>
      <ContactSection />
      <Footer />
      <SupportChat />
    </div>
  );
};

export default Index;