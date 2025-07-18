import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import FillablePdfForm from './FillablePdfForm';
import { useTranslation } from 'react-i18next';

// Temporary DownloadIcon replacement due to missing @radix-ui/react-icons
const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    stroke="currentColor"
    {...props}
  >
    <path
      d="M10 3v10m0 0l-4-4m4 4l4-4M4 17h12"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const documents = [
  {
    category: "download.categoryPP",
    files: [
      { name: "download.fileConventionIntermediation", file: "/documents/Convention_InterTest.pdf" },
      { name: "download.fileFichePP", file: "/documents/Fiche_questionnaire_PP.pdf" },
      { name: "download.fileConventionOuverture", file: "/documents/Convention_Ouverture_Compte_Titres_Especes.pdf" },
      { name: "download.fileGrilleTarifaire", file: "/documents/Grille_tarifaire.pdf" },
    ],
  },
  {
    category: "download.categoryPM",
    files: [
      { name: "download.fileConventionIntermediation", file: "/documents/Convention_InterTest.pdf" },
      { name: "download.fileFichePM", file: "/documents/Fiche_questionnaire_PM.pdf" },
      { name: "download.fileConventionOuverture", file: "/documents/Convention_Ouverture_Compte_Titres_Especes.pdf" },
      { name: "download.fileGrilleTarifaire", file: "/documents/Grille_tarifaire.pdf" },
      { name: "download.filePouvoirSignaturePM", file: "/documents/Pouvoir_signature_PM.pdf" },
    ],
  },
  {
    category: "download.categoryBEL",
    files: [
      { name: "download.fileConventionBEL", file: "/documents/Convention_BEL.pdf" },
    ],
  },
];

export default function DownloadSection() {
  const [showFillable, setShowFillable] = React.useState(false);
  const { t } = useTranslation();
  return (
    <section className="my-8 bg-white dark:bg-slate-800 rounded shadow">
      <div className="px-6 py-4 border-b flex items-center gap-2 dark:border-gray-700">
        <DownloadIcon className="text-blue-600 dark:text-blue-300" />
        <h2 className="text-lg font-bold text-blue-700 dark:text-blue-200 uppercase">{t('download.title')}</h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {documents.map((cat, idx) => (
          <AccordionItem key={cat.category} value={cat.category}>
            <AccordionTrigger className="font-semibold text-blue-900 dark:text-blue-200 bg-blue-50 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-slate-600 px-4">
              {t(cat.category)}
            </AccordionTrigger>
            <AccordionContent className="bg-blue-50 dark:bg-slate-700 px-4">
              <ul>
                {cat.files.map((doc, i) => (
                  <li key={doc.file} className="py-1 border-b last:border-b-0 dark:border-gray-600 flex items-center gap-2">
                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 dark:text-blue-300 hover:underline flex items-center gap-2"
                    >
                      {i + 1}- {t(doc.name)}
                      <DownloadIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {/* {showFillable && <FillablePdfForm />} */}
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
} 