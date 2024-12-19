import React, { useEffect } from 'react';
import { drawWheel } from './wheelDrawing';
import { WheelSegment } from '../../types/game';

interface WheelCanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  segments: WheelSegment[];
  rotation: number;
  color: string;
}

export const WheelCanvas: React.FC<WheelCanvasProps> = ({
  canvasRef,
  segments,
  rotation,
  color,
}) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Canvas boyutunu küçült
    canvas.width = 500;
    canvas.height = 500;
    
    drawWheel(canvas, segments, rotation, color);
  }, [canvasRef, segments, rotation, color]);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      className="max-w-[80vw] h-auto"
    />
  );
};