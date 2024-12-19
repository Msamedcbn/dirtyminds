import React from 'react';
import { Shield, Dice6, Flame } from 'lucide-react';
import { Category } from '../types/game';
import { categoryConfigs } from '../config/categories';

interface CategoryCardProps {
  category: Category;
  isAdult: boolean;
  onSelect: (category: Category) => void;
}

const getCategoryIcon = (category: Category) => {
  switch (category) {
    case 'normal':
      return Shield;
    case 'adult':
      return Dice6;
    case 'extreme':
      return Flame;
  }
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, isAdult, onSelect }) => {
  const config = categoryConfigs[category];
  const Icon = getCategoryIcon(category);
  const isDisabled = config.requiresAdult && !isAdult;

  return (
    <button
      onClick={() => onSelect(category)}
      disabled={isDisabled}
      className={`p-6 rounded-lg transition group ${
        isDisabled
          ? 'bg-gray-100 cursor-not-allowed'
          : `bg-${config.color}-100 hover:bg-${config.color}-200`
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <Icon
          className={`w-12 h-12 group-hover:scale-110 transition ${
            isDisabled ? 'text-gray-400' : `text-${config.color}-600`
          }`}
        />
        <div className="text-center">
          <h3 className={`text-xl font-bold text-${config.color}-700`}>
            {config.name}
          </h3>
          <p className={`text-sm text-${config.color}-600`}>
            {config.description}
          </p>
        </div>
      </div>
    </button>
  );
};