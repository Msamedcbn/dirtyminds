import React from 'react';
import { Category } from '../types/game';
import { CategoryCard } from './CategoryCard';

interface CategorySelectionProps {
  onSelect: (category: Category) => void;
  isAdult: boolean;
}

export const CategorySelection: React.FC<CategorySelectionProps> = ({ onSelect, isAdult }) => {
  const categories: Category[] = ['normal', 'adult', 'extreme'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto p-4">
      {categories.map((category) => (
        <CategoryCard
          key={category}
          category={category}
          isAdult={isAdult}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};