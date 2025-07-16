import { useState } from "react";
import { teams } from "../lib/teamData";
import { TeamCard } from "./TeamCard";
import { TeamModal } from "./TeamModal";

const CATEGORIES = [
  "Post Marché",
  "Contrôle Interne",
  "Salle de Marché"
];

export default function TeamSection() {
  // Fusionner tous les membres
  const allMembers = teams.flatMap((t) => t.members);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Grouper les membres par catégorie
  const membersByCategory = CATEGORIES.map((cat) => ({
    name: cat,
    members: allMembers.filter((m) => m.categorie === cat)
  }));

  // Pour la navigation modale, garder l'ordre d'affichage
  const displayMembers = membersByCategory.flatMap((g) => g.members);

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <img 
        src="/documents/valoris.PNG" 
        alt="Background Valoris" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none z-0" 
        aria-hidden="true"
      />
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">Nos équipes</h2>
        {membersByCategory.map((group) => (
          <div key={group.name} className="mb-10">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">{group.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {group.members.length === 0 ? (
                <div className="text-gray-400 italic">Aucun membre pour cette équipe.</div>
              ) : (
                group.members.map((member, idx) => (
                  <TeamCard key={member.name} member={member} onClick={() => setSelectedIndex(displayMembers.indexOf(member))} />
                ))
              )}
            </div>
          </div>
        ))}
        {selectedIndex !== null && (
          <TeamModal
            member={displayMembers[selectedIndex]}
            onClose={() => setSelectedIndex(null)}
            onPrev={() => setSelectedIndex((selectedIndex - 1 + displayMembers.length) % displayMembers.length)}
            onNext={() => setSelectedIndex((selectedIndex + 1) % displayMembers.length)}
          />
        )}
      </div>
    </section>
  );
} 