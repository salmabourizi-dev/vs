
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/efb990da-4ab0-409d-bce3-27039187678f.png" 
                alt="Valoris Securities" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">Valoris Securities</span>
            </div>
            <p className="text-gray-400 text-sm">
              Société de Bourse agréée par l'ACPR et contrôlée par l'AMF. 
              Votre partenaire de confiance pour tous vos investissements.
            </p>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Présentation</a></li>
              <li><a href="#organization" className="text-gray-400 hover:text-white transition-colors">Organisation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Nos métiers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">CGU</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Médiateur</a></li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p>📞 +33 1 42 56 78 90</p>
              <p>✉️ contact@valoris-securities.fr</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Valoris Securities. Tous droits réservés.</p>
          <p className="mt-2">
            Société de Bourse agréée par l'ACPR sous le n° 12345 - 
            Contrôlée par l'AMF - Siège social : 25 Avenue des Champs-Élysées, 75008 Paris
          </p>
        </div>
      </div>
    </footer>
  );
};
