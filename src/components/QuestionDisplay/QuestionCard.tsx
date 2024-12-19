import React from 'react';
import { Category, QuestionType } from '../../types/game';
import { categoryConfigs } from '../../config/categories';
import { Shield, Flame } from 'lucide-react';

interface QuestionCardProps {
  category: Category;
  questionType: QuestionType;
  question: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  category,
  questionType,
  question,
}) => {
  const { color } = categoryConfigs[category];
  const Icon = questionType === 'truth' ? Shield : Flame;

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
      <div className={`h-2 bg-${color}-500`} />
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className={`text-${color}-600 font-semibold uppercase text-sm tracking-wider`}>
            {category}
          </span>
          <Icon className={`w-6 h-6 text-${color}-500`} />
        </div>
        
        <div className={`inline-block px-3 py-1 rounded-full bg-${color}-100 text-${color}-700 text-sm font-medium`}>
          {questionType === 'truth' ? 'DOĞRULUK' : 'CESARET'}
        </div>

        <p className="text-2xl font-medium text-gray-800 mt-4">
          {question}
        </p>
      </div>
    </div>
  );
};