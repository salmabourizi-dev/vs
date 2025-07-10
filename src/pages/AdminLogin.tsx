import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(false);
    setErrorMsg('');
    if (!recaptchaToken) {
      setShowToast(true);
      setErrorMsg('Veuillez valider le reCAPTCHA.');
      return;
    }
    if (isAdmin) {
      // Tentative admin
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, recaptchaToken })
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('adminToken', data.token);
        navigate('/admin/dashboard');
        return;
      } else {
        setShowToast(true);
        setErrorMsg('Email ou mot de passe incorrect.');
        return;
      }
    }
    // Tentative client
    const res = await fetch('/api/client-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, recaptchaToken })
    });
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('client_token', data.token);
      navigate('/client/dashboard');
      return;
    } else {
      setShowToast(true);
      setErrorMsg('Email client non reconnu ou compte non validé.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Connexion</h2>
        <input
          className="w-full border rounded p-3 mb-4"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        {isAdmin && (
          <input
            className="w-full border rounded p-3 mb-4"
            type="password"
            placeholder="Mot de passe (admin)"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required={isAdmin}
          />
        )}
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={e => setIsAdmin(e.target.checked)}
            className="mr-2"
          />
          Je suis administrateur
        </label>
        <ReCAPTCHA
          sitekey="6LfZMX4rAAAAAA-YLk6s3wcoi59GDdTrs8kx8Mou"
          onChange={token => setRecaptchaToken(token || '')}
          className="mb-4"
        />
        <button className="w-full bg-blue-600 text-white py-3 rounded font-bold" disabled={!recaptchaToken}>Se connecter</button>
      </form>
      {/* Toast d'erreur */}
      {showToast && (
        <div className="fixed top-8 right-8 bg-red-600 text-white px-6 py-3 rounded shadow-lg z-50 animate-bounce">
          {errorMsg}
        </div>
      )}
    </div>
  );
}