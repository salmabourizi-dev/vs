
import { useEffect, useRef, useState } from 'react';

export const OrganizationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
              Organisation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une structure organisée et réglementée pour garantir la sécurité 
              et la performance de vos investissements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                  Gouvernance
                </h3>
                <p className="text-gray-600 mb-4">
                  Notre société est dirigée par une équipe expérimentée de professionnels 
                  de la finance, garantissant une gestion rigoureuse et transparente.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                  Régulation
                </h3>
                <p className="text-gray-600 mb-4">
                  Agréée par l'ACPR et contrôlée par l'AMF, Valoris Securities 
                  respecte les plus hauts standards de la réglementation financière française.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                  Équipe
                </h3>
                <p className="text-gray-600">
                  Notre équipe de 50 collaborateurs experts vous accompagne 
                  dans tous vos projets d'investissement.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
                Nos Agréments
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">ACPR - Autorité de Contrôle Prudentiel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">AMF - Autorité des Marchés Financiers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">FGDR - Fonds de Garantie des Dépôts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">CNCIF - Chambre Nationale des Conseillers</span>
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
