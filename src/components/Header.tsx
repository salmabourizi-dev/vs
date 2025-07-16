import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gestion du dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      localStorage.setItem('scrollToSection', sectionId);
      navigate('/');
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  // Sélecteur de langue
  const LangSelector = () => (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => i18n.changeLanguage('fr')}
        className={`px-2 py-1 rounded ${i18n.language === 'fr' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        FR
      </button>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        EN
      </button>
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/efb990da-4ab0-409d-bce3-27039187678f.png" 
              alt="Valoris Securities" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-slate-800 dark:text-white">Valoris Securities</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('navbar.home')}
            </button>
            <button 
              onClick={() => scrollToSection('organization')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('navbar.organization')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('navbar.services')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('navbar.contact')}
            </button>
            <Link to="/notre-equipe" className="px-4 py-2 hover:text-blue-600">{t('navbar.team')}</Link>
            <LangSelector />
            <button onClick={toggleDarkMode} className="text-xl px-2 focus:outline-none" title="Changer de mode">
              <span className="hidden dark:inline">☀️</span>
              <span className="inline dark:hidden">🌙</span>
            </button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
              onClick={() => navigate('/open-account')}
            >
              {t('navbar.openAccount', 'Devenir client')}
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
              onClick={() => window.location.href = 'http://localhost:8081/register'}
            >
              {t('navbar.createAccount', 'Créer Compte')}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              {t('navbar.home')}
            </button>
            <button 
              onClick={() => scrollToSection('organization')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              {t('navbar.organization')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              {t('navbar.services')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              {t('navbar.contact')}
            </button>
            <Link to="/notre-equipe" className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2">
              {t('navbar.team')}
            </Link>
            <LangSelector />
            <button onClick={toggleDarkMode} className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2">
              <span className="hidden dark:inline">☀️</span>
              <span className="inline dark:hidden">🌙</span>
            </button>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold mt-4"
              onClick={() => { setIsMobileMenuOpen(false); navigate('/open-account'); }}
            >
              {t('navbar.openAccount', 'Devenir client')}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
