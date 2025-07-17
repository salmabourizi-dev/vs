import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import QrAppModal from '@/components/QrAppModal';
import { useState } from 'react';
import FAQAccordion from '@/components/FAQAccordion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const faqs = [
  {
    question: "Quels sont les horaires d'ouverture de Valoris Securities ?",
    answer: "Nos équipes sont disponibles du lundi au vendredi de 9h à 18h. Un support en ligne est assuré 24h/24, 7j/7 pour les urgences.",
  },
  {
    question: "Comment ouvrir un compte chez Valoris Securities ?",
    answer: "Vous pouvez ouvrir un compte en ligne via notre site web, rubrique 'Ouvrir un compte', ou en prenant rendez-vous avec un conseiller.",
  },
  {
    question: "Quels documents sont nécessaires pour ouvrir un compte ?",
    answer: "Une pièce d'identité, un justificatif de domicile de moins de 3 mois et un RIB sont requis pour l'ouverture d'un compte.",
  },
  {
    question: "Comment accéder à mon espace client ?",
    answer: "Cliquez sur 'Espace Client' en haut à droite du site et connectez-vous avec vos identifiants personnels.",
  },
  {
    question: "Comment contacter le support client ?",
    answer: "Vous pouvez nous contacter par email à contact@valoris-securities.fr, par téléphone au +212 (0) 5 22 99 97 90, ou via la messagerie sécurisée de l’application.",
  },
  {
    question: "Où puis-je trouver la grille tarifaire ?",
    answer: "La grille tarifaire est disponible dans la rubrique 'Documents' de notre site, ou sur simple demande auprès de nos conseillers.",
  },
  {
    question: "Comment signaler une opération suspecte ou une fraude ?",
    answer: "Contactez immédiatement notre service conformité via la messagerie sécurisée ou par téléphone. Nous traiterons votre demande en priorité.",
  },
];

export default function ContactPage() {
  const { t } = useTranslation();
  const [showQrModal, setShowQrModal] = useState(false);
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Header visuel */}
        <section className="relative flex flex-col justify-center items-center min-h-[60vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 mt-16 md:mt-24">{t('Nous sommes là pour vous aider, 24h/7j ')}</h1>
         
          <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8">{t('Que vous souhaitiez consulter notre Centre d aide pour trouver des solutions ou nous contacter directement nous sommes là pour vous même le dimanche')}</p>
        </section>

        {/* Bloc contact direct */}
        <section className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">{t('Nous contacter directement')}</h2>
            <p className="text-gray-600 mb-4">{t('Discutez avec notre équipe d assistance primée dans plus de 100 langues via notre messagerie sécurisée dans l application. Appuyez sur votre profil dans le coin supérieur gauche → Sélectionnez Aide → Choisissez le sujet correspondant et consultez les FAQ → sélectionnez Discuter avec nous si vous avez besoin de plus d aide')}</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <span className="font-medium">contact@valoris-securities.fr</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" />
                <span className="font-medium">+212 (0) 5 22 99 97 90</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="text-blue-600" />
                <span className="font-medium">{t('contactPage.chatSupport')}</span>
              </div>
            </div>
            <Button className="mt-6 w-fit bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg" onClick={() => setShowQrModal(true)}>
              {t('Accéder à la messagerie')}
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <img src="/documents/chatbot.PNG" alt="Contact" className="w-80 h-80 object-cover rounded-2xl shadow-lg" />
          </div>
        </section>

        {/* Bloc FAQ / Réponses rapides */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-2xl md:text-5xl font-extrabold text-slate-800 mb-8 text-center">{t('Des réponses rapides pour vous')}</h1>
          <p className="text-gray-600 mb-4 md:text-2l font-bold ">
            Vous trouverez des réponses détaillées aux questions courantes dans notre Centre d'aide, véritable source de connaissances Valoris Securities.
          </p>
          <FAQAccordion faqs={faqs} t={t} />
        </section>
        <QrAppModal open={showQrModal} onClose={() => setShowQrModal(false)} />
      </div>
      <Footer />
    </>
  );
} 