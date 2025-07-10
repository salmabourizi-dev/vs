import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";

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
    category: "DOSSIER CLIENT PERSONNE PHYSIQUE",
    files: [
      { name: "CONVENTION INTERMEDIATION", file: "/documents/Convention_Intermediation.pdf" },
      { name: "FICHE QUESTIONNAIRE PP", file: "/documents/Fiche_questionnaire_PP.pdf" },
      { name: "CONVENTION OUVERTURE COMPTE TITRES ESPECES", file: "/documents/Convention_Ouverture_Compte_Titres_Especes.pdf" },
      { name: "GRILLE TARIFAIRE", file: "/documents/Grille_tarifaire.pdf" },
    ],
  },
  {
    category: "DOSSIER CLIENT PERSONNE MORALE",
    files: [
      { name: "CONVENTION INTERMEDIATION", file: "/documents/Convention_Intermediation.pdf" },
      { name: "FICHE QUESTIONNAIRE PM", file: "/documents/Fiche_questionnaire_PM.pdf" },
      { name: "CONVENTION OUVERTURE COMPTE TITRES ESPECES", file: "/documents/Convention_Ouverture_Compte_Titres_Especes.pdf" },
      { name: "GRILLE TARIFAIRE", file: "/documents/Grille_tarifaire.pdf" },
      { name: "POUVOIR SIGNATURE PM", file: "/documents/Pouvoir_Signature_PM.pdf" },
    ],
  },
  {
    category: "DOSSIER BOURSE EN LIGNE",
    files: [
      { name: "CONVENTION BOURSE EN LIGNE", file: "/documents/Convention_BEL.pdf" },
    ],
  },
];

export default function DownloadSection() {
  return (
    <section className="my-8 bg-white dark:bg-slate-800 rounded shadow">
      <div className="px-6 py-4 border-b flex items-center gap-2 dark:border-gray-700">
        <DownloadIcon className="text-blue-600 dark:text-blue-300" />
        <h2 className="text-lg font-bold text-blue-700 dark:text-blue-200 uppercase">Espace téléchargement</h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {documents.map((cat, idx) => (
          <AccordionItem key={cat.category} value={cat.category}>
            <AccordionTrigger className="font-semibold text-blue-900 dark:text-blue-200 bg-blue-50 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-slate-600 px-4">
              {cat.category}
            </AccordionTrigger>
            <AccordionContent className="bg-blue-50 dark:bg-slate-700 px-4">
              <ul>
                {cat.files.map((doc, i) => (
                  <li key={doc.file} className="py-1 border-b last:border-b-0 dark:border-gray-600">
                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 dark:text-blue-300 hover:underline flex items-center gap-2"
                    >
                      {i + 1}- {doc.name}
                      <DownloadIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
} 