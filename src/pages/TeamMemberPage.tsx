import { useParams, useNavigate } from "react-router-dom";
import { teams } from "../lib/teamData";
import { TeamCard } from "../components/TeamCard";
import { FaPlus, FaTimes } from "react-icons/fa";

export default function TeamMemberPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const allMembers = teams.flatMap(t => t.members);
  const member = allMembers.find(m => m.slug === slug);

  if (!member) return <div className="p-8">Membre introuvable</div>;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Grille des membres à gauche */}
      <div className="w-1/2 p-8 grid grid-cols-2 gap-6 overflow-y-auto max-h-screen">
        {allMembers.map(m => (
          <TeamCard key={m.slug} member={m} />
        ))}
      </div>
      {/* Fiche détaillée à droite */}
      <div className="w-1/2 p-12 flex flex-col items-center bg-white shadow-lg min-h-screen relative">
        {/* Icône de fermeture */}
        <button
          onClick={() => navigate('/notre-equipe')}
          className="absolute top-6 right-6 text-gray-400 hover:text-black text-2xl"
          title="Fermer"
        >
          <FaTimes />
        </button>
        <img src={member.image} alt={member.name} className="w-80 h-80 object-cover rounded-lg mb-6" />
        <div className="text-gray-500 uppercase font-semibold mb-2">{member.role}</div>
        <div className="text-2xl font-bold mb-2">{member.name}</div>
        <div className="text-gray-700 whitespace-pre-line">{member.description}</div>
        <FaPlus size={24} color="#fff" />
      </div>
    </div>
  );
} 