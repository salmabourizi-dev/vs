
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const OrganizationSection = () => {
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
      id="organization" 
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 mt-16"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              {t('organization.titre')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('organization.texte1')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                  {t('organization.gouvernance.titre')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('organization.gouvernance.texte')}
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                  {t('organization.regulation.titre')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('organization.regulation.texte')}
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                  {t('organization.equipe.titre')}
                </h3>
                <p className="text-gray-600">
                  {t('organization.equipe.texte')}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
                {t('organization.agrements.titre')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{t('organization.agrements.acpr')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{t('organization.agrements.amf')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{t('organization.agrements.fgdr')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{t('organization.agrements.cncif')}</span>
                </div>
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
