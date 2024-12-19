import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

interface AgeVerificationProps {
  onVerify: (isAdult: boolean) => void;
}

export const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerify }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-auto p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <AlertTriangle className="w-16 h-16 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Yaş Doğrulaması Gerekli</h2>
          <p className="text-gray-600">
            Bu oyun yetişkin içeriği (18+) barındırmaktadır. Lütfen devam etmek için yaşınızı doğrulayın.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => onVerify(false)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition duration-200"
          >
            <Shield className="w-5 h-5" />
            18 Yaş Altı
          </button>
          <button
            onClick={() => onVerify(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-200"
          >
            <Shield className="w-5 h-5" />
            18 Yaş Üstü
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center">
          Bu doğrulama ile 18 yaşından büyük olduğunuzu onaylıyorsunuz.
        </p>
      </div>
    </div>
  );
};