
// import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// export const Footer = () => {
//   return (
//     <footer className="bg-slate-900 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-4 gap-8">
//           {/* Logo et description */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <img 
//                 src="/lovable-uploads/efb990da-4ab0-409d-bce3-27039187678f.png" 
//                 alt="Valoris Securities" 
//                 className="h-8 w-auto"
//               />
//               <span className="text-xl font-bold">Valoris Securities</span>
//             </div>
//             <p className="text-gray-400 text-sm">
//               Société de Bourse agréée par l'ACPR et contrôlée par l'AMF. 
//               Votre partenaire de confiance pour tous vos investissements.
//             </p>
//           </div>

//           {/* Liens utiles */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
//             <ul className="space-y-2 text-sm">
//               <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Présentation</a></li>
//               <li><a href="#organization" className="text-gray-400 hover:text-white transition-colors">Organisation</a></li>
//               <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Nos métiers</a></li>
//               <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
//             </ul>
//           </div>

//           {/* Informations légales */}
//           {/* <div>
//             <h3 className="text-lg font-semibold mb-4">Informations</h3>
//             <ul className="space-y-2 text-sm">
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">CGU</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Médiateur</a></li>
//             </ul>
//           </div> */}
//            {/* Réseaux sociaux */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <Facebook className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <Twitter className="h-6 w-6" />
//               </a>
//               <a href="https://www.linkedin.com/company/valoris-securities-s-a/posts/?feedView=all" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <Linkedin className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <Instagram className="h-6 w-6" />
//               </a>
//             </div>
//             <div className="mt-4 text-sm text-gray-400">
//               <p>📞 +212 (0) 5 22 99 97 90</p>
//               <p>✉️ contact@valoris-securities.fr</p>
//             </div>
//           </div>
//         </div>
// {/* Carte Google Maps */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Notre localisation</h3>
//             <iframe
//               title="Localisation Valoris Securities"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.1422636273193!2d-7.624986184792514!3d33.58867718071781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd70b3a963b1%3A0x862d7ebdbd8c492f!2sAngle%20Route%20d'El%20Jadida%20et%20Rue%20Abou%20Dabi%2C%20Oasis%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1688196043629!5m2!1sfr!2sma"
//               width="100%"
//               height="200"
//               style={{ border: 0 }}
//               allowFullScreen={true}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
         

//         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
//           <p>&copy; 2025 Valoris Securities. Tous droits réservés.</p>
//           <p className="mt-2">
//             Siège Social : VALORIS GROUP
// Angle Route d'El Jadida et Rue Abou Dabi, Oasis, Casablanca, Maroc
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };
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
              <a href="https://www.linkedin.com/company/valoris-securities-s-a/posts/?feedView=all" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p>📞 +212 (0) 5 22 99 97 90</p>
              <p>✉️ contact@valoris-securities.fr</p>
            </div>
          </div>

          {/* Carte Google Maps */}
      <div>
  <h3 className="text-lg font-semibold mb-4">Notre localisation</h3>
  
  {/* Carte intégrée */}
  <iframe
    title="Localisation Valoris Securities"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.048459306199!2d-7.624600684792508!3d33.59075488067407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd71f6e6a973%3A0x662bb33bcf7a0c23!2sH924%2BRGP%20Angle%20Route%20d%27El%20Jadida%20et%2C%20Rue%20Abou%20Dhabi%2C%20Casablanca%2020410!5e0!3m2!1sfr!2sma!4v1688199398427!5m2!1sfr!2sma"
    width="100%"
    height="150"
    style={{ border: 0, borderRadius: '8px' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
  
  {/* Lien cliquable pour ouvrir Google Maps plein écran */}
  <p className="mt-2 text-sm text-blue-400 hover:underline cursor-pointer">
    <a 
      href="https://www.google.com/maps/search/?api=1&query=H924+RGP,+Angle+Route+d%27El+Jadida+et,+Rue+Abou+Dhabi,+Casablanca+20410" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Ouvrir dans Google Maps
    </a>
  </p>
</div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Valoris Securities. Tous droits réservés.</p>
          <p className="mt-2">
            Siège Social : VALORIS GROUP
Angle Route d'El Jadida et Rue Abou Dabi, Oasis, Casablanca, Maroc
          </p>
        </div>
      </div>
    </footer>
  );
};
