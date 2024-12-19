import React, { useState } from 'react';
import { Category, QuestionType } from '../types/game';
import { QuestionDisplay } from './QuestionDisplay/QuestionDisplay';
import { Wheel } from './Wheel/Wheel';
import { getWheelSegments } from '../config/wheelConfig';
import { getRandomQuestion } from '../utils/gameUtils';
import { categoryConfigs } from '../config/categories';
import { questions } from '../data/questions';

interface GameScreenProps {
  category: Category;
  onBack: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ category, onBack }) => {
  const [questionType, setQuestionType] = useState<QuestionType | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<string>('');

  const handleSpinEnd = (type: QuestionType) => {
    setQuestionType(type);
    setCurrentQuestion(getRandomQuestion(questions[category], type));
  };

  const handleNextQuestion = () => {
    if (questionType) {
      setCurrentQuestion(getRandomQuestion(questions[category], questionType));
    }
  };

  const handleReturnToWheel = () => {
    setQuestionType(null);
  };

  const { color } = categoryConfigs[category];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <button
        onClick={onBack}
        className={`mb-6 text-${color}-600 hover:text-${color}-700 flex items-center gap-2`}
      >
        ← Kategorilere Dön
      </button>

      {!questionType ? (
        <div className="text-center">
          <h2 className={`text-3xl font-bold mb-12 text-${color}-600`}>
            Çarkı Çevir ve Kaderini Belirle!
          </h2>
          <div className="flex justify-center items-center min-h-[600px]">
            <Wheel
              segments={getWheelSegments(category)}
              onSpinEnd={handleSpinEnd}
              color={color}
            />
          </div>
        </div>
      ) : (
        <QuestionDisplay
          category={category}
          questionType={questionType}
          question={currentQuestion}
          onNextQuestion={handleNextQuestion}
          onReturnToWheel={handleReturnToWheel}
        />
      )}
    </div>
  );
};