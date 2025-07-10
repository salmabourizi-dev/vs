import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyCode = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || '');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch('http://localhost:4000/api/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code })
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setTimeout(() => navigate('/complete-profile', { state: { email } }), 1500);
      } else {
        setError(data.error || "Code invalide ou expiré.");
      }
    } catch (err) {
      setError("Erreur de connexion au serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center py-10">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-extrabold text-blue-700 mb-6 text-center">Vérifier votre code</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Adresse email</label>
            <input
              id="email"
              type="email"
              required
              className="w-full border border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent"
              placeholder="exemple@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="code" className="block text-gray-700 font-semibold mb-2">Code reçu par email</label>
            <input
              id="code"
              type="text"
              required
              className="w-full border border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-200 bg-transparent"
              placeholder="Code à 6 chiffres"
              value={code}
              onChange={e => setCode(e.target.value)}
              disabled={loading}
              maxLength={6}
            />
          </div>
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          {success && <div className="text-green-600 text-sm text-center">Code vérifié avec succès !</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-lg shadow-lg transition"
            disabled={loading}
          >
            {loading ? 'Vérification...' : 'Vérifier le code'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyCode; 