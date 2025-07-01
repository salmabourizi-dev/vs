
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { AnimatedLogo } from '@/components/AnimatedLogo';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-white space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Valoris
            <span className="block text-blue-400">Securities</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Société de Bourse
          </p>
          <p className="text-lg text-gray-400 max-w-md">
            Votre partenaire de confiance pour tous vos investissements financiers. 
            Excellence, expertise et innovation au service de votre patrimoine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg"
            >
              Devenir client
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold text-lg"
            >
              En savoir plus
            </Button>
          </div>
        </div>

        {/* Right Content - 3D Logo */}
        <div className="h-96 md:h-[500px] w-full">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <AnimatedLogo />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
