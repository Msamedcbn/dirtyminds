import React from 'react';
import { Play } from 'lucide-react';

interface WheelButtonProps {
  onClick: () => void;
  isSpinning: boolean;
  color: string;
}

export const WheelButton: React.FC<WheelButtonProps> = ({ onClick, isSpinning, color }) => {
  return (
    <button
      onClick={onClick}
      disabled={isSpinning}
      className={`
        absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        w-20 h-20 rounded-full
        bg-gradient-to-br from-white to-gray-100
        shadow-lg hover:shadow-xl
        flex items-center justify-center
        transition-all duration-300
        ${isSpinning ? 'scale-95 opacity-75' : 'hover:scale-105'}
        disabled:cursor-not-allowed
        z-10
      `}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Play 
          className={`
            w-8 h-8
            ${isSpinning ? 'animate-spin' : 'animate-pulse'}
            text-gray-800
          `}
        />
        {!isSpinning && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <span className="text-sm font-bold text-gray-800 bg-white px-3 py-1 rounded-full shadow-md">
              ÇEVİR
            </span>
          </div>
        )}
      </div>
    </button>
  );
};