import React from 'react';
import { Skull } from 'lucide-react';

interface PunishmentModalProps {
  punishment: string;
  color: string;
  onClose: () => void;
}

export const PunishmentModal: React.FC<PunishmentModalProps> = ({
  punishment,
  color,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-auto p-8 space-y-6 animate-slideIn">
        <div className="text-center space-y-4">
          <Skull className={`w-16 h-16 text-${color}-500 mx-auto`} />
          <h3 className="text-2xl font-bold text-gray-900">Ceza Zamanı!</h3>
          <p className="text-xl text-gray-700">{punishment}</p>
        </div>
        <button
          onClick={onClose}
          className={`w-full py-3 bg-${color}-500 text-white rounded-lg hover:bg-${color}-600 transition`}
        >
          Anladım
        </button>
      </div>
    </div>
  );
};