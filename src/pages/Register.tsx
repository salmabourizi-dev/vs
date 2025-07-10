import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('client_token', token);
      navigate('/client/dashboard');
    }
  }, [location, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      setTimeout(() => {
        navigate('/verify-code', { state: { email } });
      }, 1000);
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || 'Erreur lors de l’envoi du code');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md flex flex-col items-center">
        <h2 className="text-2xl font-extrabold text-blue-700 mb-6">Créer un compte</h2>
        <button
          type="button"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 mb-6 shadow transition"
          onClick={() => window.location.href = 'http://localhost:4000/api/auth/google'}
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 29.9 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 19.5-7.6 21-17.5 0-1.4-.1-2.7-.3-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.5 3 24 3c-7.2 0-13.4 3.1-17.7 8.1z"/><path fill="#FBBC05" d="M24 45c5.9 0 10.7-1.9 14.3-5.1l-6.6-5.4C29.9 36 27 37 24 37c-5.9 0-10.7-3.9-12.5-9.3l-7 5.4C7.6 41.9 15.1 45 24 45z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7C34.7 33.1 29.9 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 19.5-7.6 21-17.5 0-1.4-.1-2.7-.3-4z"/></g></svg>
          S’inscrire avec Google
        </button>
        <div className="flex items-center w-full mb-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="mx-4 text-gray-400 font-semibold">ou</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          {success && <div className="text-green-600 text-sm text-center">Code envoyé à votre email !</div>}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold shadow transition mt-2"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Envoi en cours...' : 'Recevoir le code'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register; 