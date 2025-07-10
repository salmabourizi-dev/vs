import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ onLogout }: { onLogout: () => void }) {
  return (
    <aside className="w-20 md:w-64 bg-slate-900 text-white flex flex-col py-8 px-4 shadow-lg min-h-screen">
      <div className="text-2xl font-extrabold mb-10 text-center tracking-tight">V</div>
      <nav className="flex flex-col gap-6">
        <a href="/client/dashboard" className="flex items-center gap-3 py-2 px-3 rounded-lg bg-slate-800 font-semibold hover:bg-blue-700 transition">
          <span className="hidden md:inline">Dashboard</span>
        </a>
        <a href="#souscription" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-slate-800 transition">
          <span className="hidden md:inline">Souscription</span>
        </a>
      </nav>
      <button
        className="mt-auto py-2 px-4 rounded-lg bg-red-600 hover:bg-red-700 transition"
        onClick={onLogout}
      >
        Déconnexion
      </button>
    </aside>
  );
}

function SouscriptionForm({ onSuccess }: { onSuccess: () => void }) {
  const [cin, setCin] = useState("");
  const [quantite, setQuantite] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const res = await fetch("/api/client/souscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("client_token"),
      },
      body: JSON.stringify({ cin, quantite, dateNaissance }),
    });
    setLoading(false);
    if (res.ok) {
      setMessage("Souscription envoyée !");
      onSuccess();
    } else {
      let errMsg = "Erreur lors de la souscription";
      try {
        const err = await res.json();
        errMsg = err.error || errMsg;
      } catch {
        // La réponse n'est pas du JSON, on garde le message par défaut
      }
      setMessage(errMsg);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 max-w-md mx-auto mt-8 flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-2 text-blue-700">Souscription</h2>
      <input
        className="border rounded px-3 py-2"
        value={cin}
        onChange={e => setCin(e.target.value)}
        placeholder="CIN"
        required
      />
      <input
        className="border rounded px-3 py-2"
        type="number"
        min="1"
        value={quantite}
        onChange={e => setQuantite(e.target.value)}
        placeholder="Quantité demandée"
        required
      />
      <input
        className="border rounded px-3 py-2"
        type="date"
        value={dateNaissance}
        onChange={e => setDateNaissance(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Envoi..." : "Souscrire"}
      </button>
      {message && <div className="text-center text-blue-600 mt-2">{message}</div>}
    </form>
  );
}

const badgeColor = (status: string) => {
  if (status === "valide") return "bg-green-100 text-green-700";
  if (status === "refuse") return "bg-red-100 text-red-700";
  return "bg-yellow-100 text-yellow-700";
};

const ClientDashboard: React.FC = () => {
  const [client, setClient] = useState<any>(null);
  const [souscription, setSouscription] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("client_token");
    if (!token) {
      navigate("/client/login");
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("/api/client/me", {
        headers: { Authorization: "Bearer " + token },
      });
      if (res.ok) {
        const data = await res.json();
        setClient(data);
        // Récupérer toutes les souscriptions
        const resSous = await fetch("/api/client/souscription", {
          headers: { Authorization: "Bearer " + token },
        });
        if (resSous.ok) {
          const sous = await resSous.json();
          setSouscription(sous);
        } else {
          setSouscription([]);
        }
      }
      setLoading(false);
    };
    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("client_token");
    navigate("/register");
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-blue-50"><div className="text-blue-700 font-bold text-xl">Chargement...</div></div>;
  }
  if (!client) {
    return <div className="min-h-screen flex items-center justify-center bg-blue-50"><div className="text-red-600 font-bold text-xl">Erreur de chargement du profil.</div></div>;
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar onLogout={handleLogout} />
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Espace Client</h1>
          <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-900">
            {client.prenom?.[0] || "C"}
          </div>
        </div>
        {/* Profil client */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-8 mb-8 max-w-2xl">
          <h2 className="text-xl font-bold mb-4 text-blue-700">Mon profil</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div><span className="font-semibold">Nom :</span> {client.nom}</div>
            <div><span className="font-semibold">Prénom :</span> {client.prenom}</div>
            <div><span className="font-semibold">Email :</span> {client.email}</div>
            <div><span className="font-semibold">Téléphone :</span> {client.telephone}</div>
            <div><span className="font-semibold">Adresse :</span> {client.adresse}</div>
            <div><span className="font-semibold">Ville :</span> {client.ville}</div>
            <div><span className="font-semibold">Pays :</span> {client.pays}</div>
            <div><span className="font-semibold">Catégorie :</span> {client.categorie}</div>
          </div>
        </div>
        {/* Statut du compte */}
        <div className={`inline-block px-4 py-2 rounded-full font-semibold mb-8 ${badgeColor(client.status)}`}>
          Statut du compte : {client.status}
        </div>
        {/* Section souscription */}
        <section id="souscription" className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-blue-700">Souscription</h2>
          {client.status !== "valide" ? (
            <div className="bg-yellow-100 text-yellow-800 rounded p-6 max-w-md mx-auto text-center">
              Votre compte doit être validé par un administrateur pour accéder à la souscription.
            </div>
          ) : (
            <>
              {Array.isArray(souscription) && souscription.length === 0 ? (
                <SouscriptionForm onSuccess={() => window.location.reload()} />
              ) : (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-2 text-blue-700">Mes souscriptions</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-2xl shadow-lg">
                      <thead>
                        <tr className="bg-blue-50">
                          <th className="p-3 text-left">CIN</th>
                          <th className="p-3 text-left">Quantité demandée</th>
                          <th className="p-3 text-left">Date de naissance</th>
                          <th className="p-3 text-left">Statut</th>
                          <th className="p-3 text-left">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {souscription.map((sous: any) => (
                          <tr key={sous.id} className="hover:bg-blue-50 transition">
                            <td className="p-3">{sous.cin}</td>
                            <td className="p-3">{sous.quantite}</td>
                            <td className="p-3">{sous.dateNaissance ? new Date(sous.dateNaissance).toLocaleDateString() : ''}</td>
                            <td className="p-3">
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeColor(sous.status)}`}>{sous.status}</span>
                            </td>
                            <td className="p-3">{sous.createdAt ? new Date(sous.createdAt).toLocaleDateString() : ''}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default ClientDashboard; 