
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Shield, Users, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              {t('services.titre')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.texte1')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg text-white hover:scale-105 transition-transform">
              <TrendingUp className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">Gestion de Portefeuille</h3>
              <p className="text-blue-100">
                Conseil et Intermédiation Actions et Obligations,
              </p>
            </div>

            <div className="group p-6 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg text-white hover:scale-105 transition-transform">
              <Shield className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">Conseil Patrimoine</h3>
              <p className="text-slate-100">
                Corporate Broking
              </p>
            </div>

            <div className="group p-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg text-white hover:scale-105 transition-transform">
              <Users className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">Gestion Institutionnelle</h3>
              <p className="text-cyan-100">
                Routage d’Ordres
              </p>
            </div>

            <div className="group p-6 bg-gradient-to-br from-slate-700 to-blue-900 rounded-lg text-white hover:scale-105 transition-transform">
              <Globe className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">Marchés Internationaux</h3>
              <p className="text-slate-100">
                Négociation de tout type de transactions à la bourse de Casablanca
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
              {t('services.produits.titre')}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-slate-700 mb-2">Actions & ETF</h4>
                <p className="text-gray-600 text-sm">{t('services.produits.actions')}</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-slate-700 mb-2">Obligations</h4>
                <p className="text-gray-600 text-sm">{t('services.produits.obligations')}</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-slate-700 mb-2">Assurance Vie</h4>
                <p className="text-gray-600 text-sm">{t('services.produits.assurance')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
         {/* Scroll indicator */}
         <div className="flex justify-center mt-8">
        <div className="hidden md:flex flex-col items-center animate-bounce">
          <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg">
            <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
          <span className="text-cyan-600 mt-2 text-sm font-semibold"></span>
        </div>
        <div className="md:hidden flex flex-col items-center animate-bounce">
          <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg">
            <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>
      </div>
    </section>
  );
};
