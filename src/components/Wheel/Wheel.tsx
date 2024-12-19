import React, { useState, useRef } from 'react';
import { WheelCanvas } from './WheelCanvas';
import { WheelButton } from './WheelButton';
import { calculateSpinAnimation } from './wheelAnimation';
import { QuestionType, WheelSegment } from '../../types/game';

interface WheelProps {
  segments: WheelSegment[];
  onSpinEnd: (type: QuestionType) => void;
  color: string;
}

export const Wheel: React.FC<WheelProps> = ({ segments, onSpinEnd, color }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const animation = calculateSpinAnimation(rotation);
    const startTime = performance.now();
    
    animation.startAnimation(
      startTime,
      (currentRotation) => setRotation(currentRotation),
      (finalRotation) => {
        setRotation(finalRotation);
        setIsSpinning(false);
        
        // Kazanan segmenti belirle
        const normalizedRotation = finalRotation % (Math.PI * 2);
        let currentAngle = 0;
        for (const segment of segments) {
          currentAngle += Math.PI * 2 * segment.probability;
          if (normalizedRotation <= currentAngle) {
            onSpinEnd(segment.type);
            break;
          }
        }
      }
    );
  };

  return (
    <div className="relative inline-block">
      <WheelCanvas
        canvasRef={canvasRef}
        segments={segments}
        rotation={rotation}
        color={color}
      />
      <WheelButton
        onClick={spinWheel}
        isSpinning={isSpinning}
        color={color}
      />
    </div>
  );
};