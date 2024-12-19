import React, { useState } from 'react';
import { AgeVerification } from './AgeVerification';
import { CategorySelection } from './CategorySelection';
import { Game } from './Game';
import { QuestionDisplay } from './QuestionDisplay';
import { Wheel } from './Wheel/Wheel';
import { getWheelSegments } from '../config/wheelConfig';

function Game({ category, onBack }) {
  const [questionType, setQuestionType] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState('');

  const handleSpinEnd = (type) => {
    setQuestionType(type);
    setCurrentQuestion(getRandomQuestion(questions[category], type));
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
          onNextQuestion={() => setQuestionType(null)}
        />
      )}
    </div>
  );
}