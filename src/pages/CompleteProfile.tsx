import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CompleteProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [form, setForm] = useState({
    email: location.state?.email || '',
    nom: '',
    prenom: '',
    adresse: '',
    codePostal: '',
    ville: '',
    pays: '',
    telephone: '',
    categorie: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const emailParam = params.get('email');
    if (token) {
      localStorage.setItem('client_token', token);
    }
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    // Toujours inclure l'email dans l'objet envoyé
    const formToSend = { ...form, email: email || form.email };
    try {
      const res = await fetch('http://localhost:4000/api/complete-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formToSend)
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        if (data.token) {
          localStorage.setItem('client_token', data.token);
        }
        setTimeout(() => navigate('/client/dashboard'), 2000);
      } else {
        setError(data.error || "Erreur lors de l'enregistrement.");
      }
    } catch (err) {
      setError("Erreur de connexion au serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center py-10">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl w-full">
        <h1 className="text-2xl font-extrabold text-blue-700 mb-6 text-center">Complétez votre profil</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input id="email" type="email" required className="w-full border border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" value={email || form.email} readOnly />
            </div>
            <div>
              <label htmlFor="nom" className="block text-gray-700 font-semibold mb-2">Nom</label>
              <input id="nom" type="text" required className="w-full border border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" value={form.nom} onChange={handleChange} disabled={loading} />
            </div>
            <div>
              <label htmlFor="prenom" className="block text-gray-700 font-semibold mb-2">Prénom</label>
              <input id="prenom" type="text" required className="w-full border border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" value={form.prenom} onChange={handleChange} disabled={loading} />
            </div>
            <div>
              <label htmlFor="adresse" className="block text-gray-700 font-semibold mb-2">Adresse</label>
              <input id="adresse" type="text" required className="w-full border border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" value={form.adresse} onChange={handleChange} disabled={loading} />
            </div>
            <div>
              <label htmlFor="codePostal" className="block text-gray-700 font-semibold mb-2">Code postal</label>
              <input id="codePostal" type="text" required className="w-full border border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" value={form.codePostal} onChange={handleChange} disabled={loading} />
            </div>
            <div>
              <label htmlFor="ville" className="block text-gray-700 font-semibold mb-2">Ville</label>
              <input id="ville" type="text" required className="w-full border border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" value={form.ville} onChange={handleChange} disabled={loading} />
            </div>
            <div>
              <label htmlFor="pays" className="block text-gray-700 font-semibold mb-2">Pays</label>
              <input id="pays" type="text" required className="w-full border border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" value={form.pays} onChange={handleChange} disabled={loading} />
            </div>
            <div>
              <label htmlFor="telephone" className="block text-gray-700 font-semibold mb-2">Téléphone</label>
              <input id="telephone" type="text" required className="w-full border border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" value={form.telephone} onChange={handleChange} disabled={loading} />
            </div>
            <div>
              <label htmlFor="categorie" className="block text-gray-700 font-semibold mb-2">Catégorie</label>
              <select id="categorie" required className="w-full border border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" value={form.categorie} onChange={handleChange} disabled={loading}>
                <option value="">Sélectionner</option>
                <option value="Particulier">Particulier</option>
                <option value="Professionnel">Professionnel</option>
                <option value="Entreprise">Entreprise</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" rows={3} className="w-full border border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent" value={form.message} onChange={handleChange} disabled={loading} />
          </div>
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          {success && <div className="text-green-600 text-sm text-center">Profil complété avec succès !</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-lg shadow-lg transition"
            disabled={loading}
          >
            {loading ? 'Envoi en cours...' : 'Compléter le profil'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile; 