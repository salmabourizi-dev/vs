import { useNavigate } from "react-router-dom";

interface TeamCardProps {
  member: {
    name: string;
    role: string;
    image: string;
    slug: string;
  };
  onClick?: () => void;
}

export function TeamCard({ member, onClick }: TeamCardProps) {
  return (
    <div
      className="relative group w-full aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <img
        src={member.image}
        alt={member.name}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-white text-sm font-semibold mb-1 uppercase text-center">{member.role}</div>
        <div className="text-white text-lg font-bold mb-2 text-center">{member.name}</div>
      </div>
    </div>
  );
}