import React from 'react';
import { Skull } from 'lucide-react';
import { Category } from '../../types/game';
import { categoryConfigs } from '../../config/categories';
import { PunishmentModal } from './PunishmentModal';
import { useRandomPunishment } from '../../hooks/useRandomPunishment';

interface PunishmentButtonProps {
  category: Category;
}

export const PunishmentButton: React.FC<PunishmentButtonProps> = ({ category }) => {
  const { color } = categoryConfigs[category];
  const { currentPunishment, showPunishment, handlePunishmentClick, handleClosePunishment } = useRandomPunishment(category);

  return (
    <>
      <button
        onClick={handlePunishmentClick}
        className={`flex items-center gap-2 px-6 py-3 bg-${color}-500 text-white rounded-lg hover:bg-${color}-600 transition animate-pulse`}
      >
        <Skull className="w-5 h-5" />
        Ceza Çek
      </button>

      {showPunishment && (
        <PunishmentModal
          punishment={currentPunishment}
          color={color}
          onClose={handleClosePunishment}
        />
      )}
    </>
  );
};