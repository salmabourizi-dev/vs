import React, { useState } from 'react';

interface QrAppModalProps {
  open: boolean;
  onClose: () => void;
}

const QrAppModal: React.FC<QrAppModalProps> = ({ open, onClose }) => {
  const [phone, setPhone] = useState('');
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full relative flex flex-col items-center">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-black">&times;</button>
        <h2 className="text-3xl font-extrabold text-center mb-2">OBTENEZ L'APPLICATION VALORIS</h2>
        <p className="text-center text-gray-700 mb-4">Scannez le QR code pour télécharger l'application</p>
        <img src="/documents/code qr.jpg" alt="QR code Valoris" className="w-48 h-48 mx-auto mb-4" />
        <p className="text-center text-gray-700 mb-4">ou obtenez un lien de téléchargement par SMS</p>
        <form className="flex gap-2 w-full justify-center">
          <span className="bg-gray-100 px-4 py-2 rounded-l-full border border-gray-300">+212</span>
          <input
            type="tel"
            className="flex-1 px-4 py-2 rounded-r-full border border-gray-300 focus:outline-none"
            placeholder="Numéro de portable"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <button type="button" className="ml-2 bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-xl text-gray-500 cursor-pointer" disabled>
            &rarr;
          </button>
        </form>
      </div>
    </div>
  );
};

export default QrAppModal; 