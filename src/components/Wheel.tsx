import React, { useState, useRef, useEffect } from 'react';
import { QuestionType } from '../types/game';

interface WheelProps {
  segments: { type: QuestionType; probability: number }[];
  onSpinEnd: (type: QuestionType) => void;
  color: string;
}

export const Wheel: React.FC<WheelProps> = ({ segments, onSpinEnd, color }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let startAngle = rotation;
    segments.forEach((segment, index) => {
      const sliceAngle = (2 * Math.PI * segment.probability);
      
      // Çark dilimini çiz
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      
      // Renklendirme
      ctx.fillStyle = index % 2 === 0 ? `var(--${color}-500)` : `var(--${color}-600)`;
      ctx.fill();
      
      // Yazı
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = 'white';
      ctx.font = 'bold 16px Arial';
      ctx.fillText(segment.type.toUpperCase(), radius - 20, 0);
      ctx.restore();
      
      startAngle += sliceAngle;
    });

  }, [rotation, segments, color]);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const spinDuration = 3000;
    const spinRotations = 5;
    const finalRotation = rotation + (Math.PI * 2 * spinRotations) + (Math.random() * Math.PI * 2);
    
    const startTime = Date.now();
    
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      
      if (elapsed < spinDuration) {
        const easeOut = 1 - Math.pow(1 - elapsed / spinDuration, 3);
        setRotation(rotation + (finalRotation - rotation) * easeOut);
        requestAnimationFrame(animate);
      } else {
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
    };
    
    requestAnimationFrame(animate);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        className="max-w-full"
      />
      <button
        onClick={spinWheel}
        disabled={isSpinning}
        className={`px-6 py-3 bg-${color}-500 text-white rounded-lg hover:bg-${color}-600 transition disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isSpinning ? 'Çark Dönüyor...' : 'Çarkı Çevir'}
      </button>
    </div>
  );
};