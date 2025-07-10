import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Si tu veux des icônes : import { UserIcon, ChartBarIcon, ... } from '@heroicons/react/24/outline';

export default function AdminDashboard() {
    const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [stats, setStats] = useState({ total: 0, last7days: 0 });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
        navigate('/admin/login');
        return;
      }
    fetch('http://localhost:4000/api/admin/clients', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(setClients);

    fetch('http://localhost:4000/api/admin/stats', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(setStats);
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-20 md:w-64 bg-slate-900 text-white flex flex-col py-8 px-4 shadow-lg">
        <div className="text-2xl font-extrabold mb-10 text-center tracking-tight">V</div>
        <nav className="flex flex-col gap-6">
          <a href="/admin/dashboard" className="flex items-center gap-3 py-2 px-3 rounded-lg bg-slate-800 font-semibold hover:bg-blue-700 transition">
            {/* <ChartBarIcon className="w-5 h-5" /> */}
            <span className="hidden md:inline">Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-slate-800 transition">
            {/* <UserIcon className="w-5 h-5" /> */}
            <span className="hidden md:inline">Clients</span>
          </a>
          <a href="#" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-slate-800 transition">
            {/* <ChartBarIcon className="w-5 h-5" /> */}
            <span className="hidden md:inline">Statistiques</span>
          </a>
          <a href="#" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-slate-800 transition">
            {/* <ClockIcon className="w-5 h-5" /> */}
            <span className="hidden md:inline">Historique</span>
          </a>
        </nav>
        <button
          className="mt-auto py-2 px-4 rounded-lg bg-red-600 hover:bg-red-700 transition"
          onClick={() => {
            localStorage.removeItem('adminToken');
            window.location.href = '/admin/login';
          }}
        >
          Déconnexion
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Dashboard Admin</h1>
          <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-900">A</div>
        </div>
        {/* Statistiques */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-8 text-center">
            <div className="text-3xl font-extrabold text-blue-700">{stats.total}</div>
            <div className="text-gray-500">Clients au total</div>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-8 text-center">
            <div className="text-3xl font-extrabold text-blue-700">{stats.last7days}</div>
            <div className="text-gray-500">Nouveaux clients (7j)</div>
          </div>
        </div>
        {/* Liste des clients */}
        <h2 className="text-xl font-bold mb-4 text-slate-800">Liste des clients</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-lg mb-8">
            <thead>
              <tr className="bg-blue-50">
                <th className="p-3 text-left">Nom</th>
                <th className="p-3 text-left">Prénom</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Statut</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client: any) => (
                <tr key={client.id} className="hover:bg-blue-50 transition">
                  <td className="p-3">{client.nom}</td>
                  <td className="p-3">{client.prenom}</td>
                  <td className="p-3">{client.email}</td>
                  <td className="p-3">{new Date(client.createdAt).toLocaleDateString()}</td>
                  <td className="p-3">
                    {client.status === 'en_attente' && (
                      <div className="flex gap-2">
                        <button
                          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                          onClick={async () => {
                            const token = localStorage.getItem('adminToken');
                            await fetch(`http://localhost:4000/api/admin/clients/${client.id}/validate`, {
                              method: 'POST',
                              headers: { Authorization: `Bearer ${token}` }
                            });
                            window.location.reload();
                          }}
                        >Valider</button>
                        <button
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                          onClick={async () => {
                            const token = localStorage.getItem('adminToken');
                            await fetch(`http://localhost:4000/api/admin/clients/${client.id}/reject`, {
                              method: 'POST',
                              headers: { Authorization: `Bearer ${token}` }
                            });
                            window.location.reload();
                          }}
                        >Refuser</button>
                      </div>
                    )}
                    {client.status === 'valide' && <span className="text-green-700 font-semibold">Validé</span>}
                    {client.status === 'refuse' && <span className="text-red-700 font-semibold">Refusé</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}