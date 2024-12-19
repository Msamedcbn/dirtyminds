import React from 'react';
import { Dice6, RotateCcw } from 'lucide-react';
import { Category } from '../../types/game';
import { categoryConfigs } from '../../config/categories';
import { PunishmentButton } from './PunishmentButton';

interface QuestionActionsProps {
  category: Category;
  onNextQuestion: () => void;
  onReturnToWheel: () => void;
}

export const QuestionActions: React.FC<QuestionActionsProps> = ({
  category,
  onNextQuestion,
  onReturnToWheel,
}) => {
  const { color, hasPunishments } = categoryConfigs[category];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      <button
        onClick={onReturnToWheel}
        className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
      >
        <RotateCcw className="w-5 h-5" />
        Çarka Dön
      </button>
      
      <div className="flex gap-4">
        <button
          onClick={onNextQuestion}
          className={`flex items-center gap-2 px-6 py-3 bg-${color}-500 text-white rounded-lg hover:bg-${color}-600 transition`}
        >
          <Dice6 className="w-5 h-5" />
          Yeni Soru
        </button>

        {hasPunishments && <PunishmentButton category={category} />}
      </div>
    </div>
  );
};