import React from 'react';
import { Category, QuestionType } from '../../types/game';
import { QuestionCard } from './QuestionCard';
import { QuestionActions } from './QuestionActions';

interface QuestionDisplayProps {
  category: Category;
  questionType: QuestionType;
  question: string;
  onNextQuestion: () => void;
  onReturnToWheel: () => void;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  category,
  questionType,
  question,
  onNextQuestion,
  onReturnToWheel,
}) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-xl animate-slideIn">
        <QuestionCard
          category={category}
          questionType={questionType}
          question={question}
        />
        <QuestionActions
          category={category}
          onNextQuestion={onNextQuestion}
          onReturnToWheel={onReturnToWheel}
        />
      </div>
    </div>
  );
};