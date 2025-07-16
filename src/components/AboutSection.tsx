
import { useEffect, useRef, useState } from 'react';

const sliderImages = [
  '/documents/v1.PNG',
  '/documents/v2.PNG',
];

const valeurs = [
  {
    icon: 'E',
    title: 'Excellence',
    desc: "Plus de 20 ans d'expertise au service de nos clients particuliers et institutionnels."
  },
  {
    icon: 'I',
    title: 'Innovation',
    desc: "Des solutions d'investissement innovantes adaptées aux nouveaux enjeux du marché."
  },
  {
    icon: 'C',
    title: 'Confiance',
    desc: "Un accompagnement personnalisé et transparent pour optimiser vos investissements."
  },
];

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [currentVal, setCurrentVal] = useState(0);

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

  // Slider images automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Slider valeurs automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVal((prev) => (prev + 1) % valeurs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-0 bg-white mt-6">
      {/* Slider full width */}
      <div className="w-full relative h-[220px] md:h-[400px] overflow-hidden">
        {sliderImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`slide-${idx}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000
              ${currentImg === idx ? 'opacity-100 scale-105 z-10 animate-slider-in' : 'opacity-0 scale-95 z-0'}
            `}
            style={{transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)'}}
          />
        ))}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {sliderImages.map((_, idx) => (
            <span key={idx} className={`block w-3 h-3 rounded-full transition-all duration-300 ${currentImg === idx ? 'bg-cyan-500 scale-125' : 'bg-white border border-cyan-300'}`}></span>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
      </div>
      {/* Titre et texte d'intro */}
      <div className="container mx-auto px-4 mt-12">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 text-center">Présentation</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-center">
            Valoris Securities est une société de bourse de référence, spécialisée dans l'accompagnement patrimonial et l'investissement financier.
          </p>
          {/* Valeur animée */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl flex justify-center">
              <div className={`transition-all duration-700 animate-fade-in-up`}
                style={{ minHeight: 200 }}>
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-slate-50 shadow-lg flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold shadow-lg">
                    {valeurs[currentVal].icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-3">{valeurs[currentVal].title}</h3>
                  <p className="text-gray-600 text-base">{valeurs[currentVal].desc}</p>
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
      
      <style>{`
        @keyframes slider-in {
          0% { opacity: 0; transform: scale(1.15) translateX(60px); }
          100% { opacity: 1; transform: scale(1.05) translateX(0); }
        }
        .animate-slider-in {
          animation: slider-in 1.1s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
          animation: fade-in-up 0.8s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </section>
  );
};
