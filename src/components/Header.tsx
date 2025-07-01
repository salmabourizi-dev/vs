
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/efb990da-4ab0-409d-bce3-27039187678f.png" 
              alt="Valoris Securities" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-slate-800">Valoris Securities</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Présentation
            </button>
            <button 
              onClick={() => scrollToSection('organization')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Organisation
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Nos métiers
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contactez-nous
            </button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              Devenir client
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
              Présentation
            </button>
            <button 
              onClick={() => scrollToSection('organization')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Organisation
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Nos métiers
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Contactez-nous
            </button>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold mt-4"
              onClick={() => scrollToSection('contact')}
            >
              Devenir client
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
