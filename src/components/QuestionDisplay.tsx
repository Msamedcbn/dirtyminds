import React from 'react';
import { Dice6 } from 'lucide-react';
import { QuestionType } from '../types/game';
import { categoryConfigs } from '../config/categories';

interface QuestionDisplayProps {
  category: string;
  questionType: QuestionType;
  question: string;
  onNextQuestion: () => void;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  category,
  questionType,
  question,
  onNextQuestion,
}) => {
  const { color } = categoryConfigs[category];

  return (
    <div className="text-center">
      <h2 className={`text-2xl font-bold mb-4 text-${color}-600`}>
        {questionType.toUpperCase()}
      </h2>
      <div className={`p-6 bg-${color}-100 rounded-lg mb-6`}>
        <p className="text-xl">{question}</p>
      </div>
      <button
        onClick={onNextQuestion}
        className={`flex items-center gap-2 mx-auto px-6 py-3 bg-${color}-500 text-white rounded-lg hover:bg-${color}-600 transition`}
      >
        <Dice6 className="w-5 h-5" />
        Next Question
      </button>
    </div>
  );
};