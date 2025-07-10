import React, { useState } from 'react';

const steps = [
  { title: '1. Création du compte' },
  { title: '2. Pièces justificatives' },
  { title: '3. Confirmation' },
];

function generateCaptcha() {
  // Génère un code aléatoire de 5 caractères alphanumériques
  return Math.random().toString(36).substring(2, 7).toUpperCase();
}

export default function OpenAccount() {
  const [activeStep, setActiveStep] = useState(0);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  // Nouveaux états pour le formulaire
  const [form, setForm] = useState({
    civilite: '',
    nom: '',
    prenom: '',
    email: '',
    adresse: '',
    codePostal: '',
    ville: '',
    pays: '',
    telephone: '',
    categorie: '',
    message: ''
  });
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleNext = async () => {
    if (activeStep === 0) {
      if (captchaInput !== captcha) {
        setCaptchaError("Code de sécurité incorrect");
        return;
      }
      setCaptchaError("");
      // Envoi des données au backend
      try {
        const response = await fetch('http://localhost:4000/api/clients', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nom: form.nom,
            prenom: form.prenom,
            email: form.email,
            adresse: form.adresse,
            codePostal: form.codePostal,
            ville: form.ville,
            pays: form.pays,
            telephone: form.telephone,
            categorie: form.categorie,
            message: form.message
          })
        });
        const data = await response.json();
        if (data.success) {
          setSubmitSuccess(true);
          setActiveStep(activeStep + 1);
        } else {
          setSubmitError("Erreur lors de l'enregistrement. Veuillez réessayer.");
        }
      } catch (err) {
        setSubmitError("Erreur de connexion au serveur.");
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full">
        {/* Stepper moderne */}
        <div className="flex items-center mb-8">
          <div className={`flex-1 h-2 ${activeStep >= 0 ? 'bg-blue-600' : 'bg-gray-200'} rounded-full`}></div>
          <div className={`w-10 h-10 flex items-center justify-center ${activeStep === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'} rounded-full font-bold -ml-5 z-10 border-4 border-white`}>1</div>
          <div className={`flex-1 h-2 ${activeStep >= 1 ? 'bg-blue-600' : 'bg-gray-200'} rounded-full`}></div>
          <div className={`w-10 h-10 flex items-center justify-center ${activeStep === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'} rounded-full font-bold -ml-5 z-10 border-4 border-white`}>2</div>
          <div className={`flex-1 h-2 ${activeStep === 2 ? 'bg-blue-600' : 'bg-gray-200'} rounded-full`}></div>
          <div className={`w-10 h-10 flex items-center justify-center ${activeStep === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'} rounded-full font-bold -ml-5 z-10 border-4 border-white`}>3</div>
        </div>
        <h1 className="text-2xl font-extrabold text-blue-700 mb-6 text-center">Créer votre compte en 3 étapes</h1>
        {/* Step Content */}
        {activeStep === 0 && (
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <select className="peer w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 appearance-none bg-transparent" id="civilite" required value={form.civilite} onChange={handleInputChange}>
                  <option value="">Civilité *</option>
                  <option>M.</option>
                  <option>Mme</option>
                </select>
                <label htmlFor="civilite" className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1 pointer-events-none">Civilité *</label>
              </div>
              <div className="relative">
                <input className="peer w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" id="nom" required placeholder=" " value={form.nom} onChange={handleInputChange} />
                <label htmlFor="nom" className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1 pointer-events-none">Nom *</label>
              </div>
              <div className="relative">
                <input className="peer w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" id="prenom" required placeholder=" " value={form.prenom} onChange={handleInputChange} />
                <label htmlFor="prenom" className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1 pointer-events-none">Prénom *</label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <input className="peer w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" id="email" required placeholder=" " value={form.email} onChange={handleInputChange} />
                <label htmlFor="email" className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1 pointer-events-none">Adresse email *</label>
              </div>
              <div className="relative">
                <input className="peer w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" id="adresse" required placeholder=" " value={form.adresse} onChange={handleInputChange} />
                <label htmlFor="adresse" className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1 pointer-events-none">Adresse *</label>
              </div>
              <div className="relative">
                <input className="peer w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" id="codePostal" required placeholder=" " value={form.codePostal} onChange={handleInputChange} />
                <label htmlFor="codePostal" className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1 pointer-events-none">Code postal *</label>
              </div>
              <div className="relative">
                <input className="peer w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" id="ville" required placeholder=" " value={form.ville} onChange={handleInputChange} />
                <label htmlFor="ville" className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1 pointer-events-none">Ville *</label>
              </div>
              <div className="relative">
                <input className="peer w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" id="pays" required placeholder=" " value={form.pays} onChange={handleInputChange} />
                <label htmlFor="pays" className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1 pointer-events-none">Pays *</label>
              </div>
              <div className="relative">
                <input className="peer w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" id="telephone" required placeholder=" " value={form.telephone} onChange={handleInputChange} />
                <label htmlFor="telephone" className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1 pointer-events-none">Téléphone *</label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <select className="peer w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 appearance-none bg-transparent" id="categorie" required value={form.categorie} onChange={handleInputChange}>
                  <option value="">Catégorie *</option>
                  <option>Client</option>
                  <option>Prospect</option>
                </select>
                <label htmlFor="categorie" className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1 pointer-events-none">Catégorie *</label>
              </div>
              <div className="relative">
                <textarea className="peer w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" id="message" required placeholder=" " rows={3} value={form.message} onChange={handleInputChange} />
                <label htmlFor="message" className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1 pointer-events-none">Message *</label>
              </div>
            </div>
            {/* CAPTCHA modernisé */}
            <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
              <label className="block text-sm font-medium mb-1 md:mb-0">Recopiez le code de sécurité <span className="text-red-500">*</span></label>
              <div className="flex items-center gap-2">
                <div className="bg-blue-700 text-white font-mono text-lg px-6 py-2 rounded select-none tracking-widest shadow-inner border border-blue-900">
                  {captcha}
                </div>
                <input
                  className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent"
                  value={captchaInput}
                  onChange={e => setCaptchaInput(e.target.value.toUpperCase())}
                  maxLength={5}
                  placeholder="Code"
                  style={{ width: 100 }}
                />
                <button type="button" className="text-blue-600 underline text-xs" onClick={() => { setCaptcha(generateCaptcha()); setCaptchaInput(""); setCaptchaError(""); }}>Nouveau code</button>
              </div>
              {captchaError && <span className="text-red-500 text-sm ml-2">{captchaError}</span>}
              {submitError && <span className="text-red-500 text-sm ml-2">{submitError}</span>}
            </div>
            <div className="flex justify-end mt-6">
              <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-lg shadow-lg transition" onClick={handleNext}>
                Suivant
              </button>
            </div>
          </form>
        )}
        {activeStep === 1 && (
          <div className="space-y-6">
            <h2 className="font-semibold mb-4">Pièces justificatives à fournir :</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Copie de la pièce d'identité</li>
              <li>Justificatif de domicile</li>
              <li>RIB ou relevé d'identité bancaire</li>
              <li>Autres documents selon votre situation</li>
            </ul>
            <div className="flex justify-between">
              <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded" onClick={() => setActiveStep(0)}>
                Précédent
              </button>
              <button className="bg-blue-700 text-white px-6 py-2 rounded" onClick={() => setActiveStep(2)}>
                Suivant
              </button>
            </div>
          </div>
        )}
        {activeStep === 2 && (
          <div className="space-y-6 text-center">
            <h2 className="font-semibold mb-4 text-green-700">Votre demande a bien été prise en compte !</h2>
            <p className="text-gray-700">Vous recevrez vos identifiants de connexion après vérification de votre dossier.<br/>Merci de votre confiance.</p>
            <div className="flex justify-center">
              <button className="bg-blue-700 text-white px-6 py-2 rounded" onClick={() => setActiveStep(0)}>
                Recommencer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 