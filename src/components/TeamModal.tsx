import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface TeamModalProps {
  member: {
    name: string;
    role: string;
    image: string;
    description: string;
  };
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function TeamModal({ member, onClose, onPrev, onNext }: TeamModalProps) {
  if (!member) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white max-w-3xl w-full rounded-lg shadow-lg relative flex flex-row p-6">
        {/* Navigation */}
        <button onClick={onPrev} className="absolute left-4 top-4 text-2xl text-gray-500 hover:text-black">
          <FaChevronLeft />
        </button>
        <button onClick={onNext} className="absolute left-12 top-4 text-2xl text-gray-500 hover:text-black">
          <FaChevronRight />
        </button>
        <button onClick={onClose} className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-black">
          <FaTimes />
        </button>
        {/* Image */}
        <img src={member.image} alt={member.name} className="w-64 h-64 object-cover rounded-lg mx-auto mb-4 md:mb-0" />
        {/* Infos */}
        <div className="flex-1 md:ml-8">
          <div className="text-gray-500 uppercase font-semibold mb-2">{member.role}</div>
          <div className="text-2xl font-bold mb-2">{member.name}</div>
          <div className="text-gray-700 whitespace-pre-line">{member.description}</div>
        </div>
      </div>
    </div>
  );
} 