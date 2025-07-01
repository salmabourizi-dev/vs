
import { useEffect, useRef, useState } from 'react';

export const AboutSection = () => {
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
      id="about" 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Présentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Valoris Securities est une société de bourse de référence, 
              spécialisée dans l'accompagnement patrimonial et l'investissement financier.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Plus de 20 ans d'expertise au service de nos clients particuliers et institutionnels.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Des solutions d'investissement innovantes adaptées aux nouveaux enjeux du marché.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Confiance</h3>
              <p className="text-gray-600">
                Un accompagnement personnalisé et transparent pour optimiser vos investissements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
