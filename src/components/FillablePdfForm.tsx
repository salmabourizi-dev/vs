import { useRef, useState } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const PDF_URL = '/documents/Convention_Intermediation.pdf';

export default function FillablePdfForm() {
  const [form, setForm] = useState({
    nom: '',
    code: '',
    date: '',
  });
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fillPdf = async () => {
    setLoading(true);
    // 1. Charger le PDF existant
    const existingPdfBytes = await fetch(PDF_URL).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    // 2. Charger une police standard
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    // 3. Ajouter le texte aux positions souhaitées (à ajuster selon le PDF)
    // Ces coordonnées sont à ajuster selon le modèle !
    firstPage.drawText(form.nom, {
      x: 300, y:600, size:14, font, color: rgb(0,0,0)
    });
    firstPage.drawText(form.code, {
      x: 570, y: 555, size: 12, font, color: rgb(0,0,0)
    });
    firstPage.drawText(form.date, {
      x: 120, y: 480, size: 12, font, color: rgb(0,0,0)
    });
    // 4. Générer le PDF modifié
    const pdfBytes = await pdfDoc.save();
    // 5. Télécharger le PDF
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Convention_Intermediation_rempli.pdf';
    link.click();
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-lg mx-auto my-8">
      <h3 className="text-xl font-bold mb-4 text-blue-700">Remplir Convention Intermédiation</h3>
      <div className="space-y-4">
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Nom et prénom"
          name="nom"
          value={form.nom}
          onChange={handleChange}
        />
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Code Client"
          name="code"
          value={form.code}
          onChange={handleChange}
        />
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Fait à Casablanca le"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <button
          className="bg-cyan-600 text-white px-6 py-2 rounded font-semibold hover:bg-cyan-700 transition"
          onClick={fillPdf}
          disabled={loading || !form.nom || !form.code || !form.date}
        >
          {loading ? 'Génération en cours...' : 'Télécharger le PDF rempli'}
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-4">Les champs seront ajoutés en surimpression sur le PDF. Les positions sont à ajuster selon le modèle.</p>
    </div>
  );
} 