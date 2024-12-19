import React, { useState } from 'react';
import { AgeVerification } from './AgeVerification';
import { CategorySelection } from './CategorySelection';
import { GameScreen } from './GameScreen';
import { Category } from '../types/game';

export const GameContainer: React.FC = () => {
  const [isAdultVerified, setIsAdultVerified] = useState<boolean | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  if (isAdultVerified === null) {
    return <AgeVerification onVerify={setIsAdultVerified} />;
  }

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">Truth or Dare</h1>
          <p className="text-gray-600 text-center mb-12">Choose your category to begin</p>
          <CategorySelection onSelect={setSelectedCategory} isAdult={isAdultVerified} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <GameScreen 
          category={selectedCategory} 
          onBack={() => setSelectedCategory(null)} 
        />
      </div>
    </div>
  );
};