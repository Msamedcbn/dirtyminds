import { WheelSegment } from '../../types/game';

const TRUTH_COLORS = ['#3b82f6', '#2563eb', '#1d4ed8', '#1e40af'];
const DARE_COLORS = ['#f59e0b', '#d97706', '#b45309', '#92400e'];

const getSegmentColor = (segment: WheelSegment, index: number): string => {
  const colorArray = segment.type === 'truth' ? TRUTH_COLORS : DARE_COLORS;
  return colorArray[index % colorArray.length];
};

const drawSegment = (
  ctx: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  radius: number,
  startAngle: number,
  endAngle: number,
  segment: WheelSegment,
  index: number
) => {
  // Dilim çizimi
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.closePath();
  
  // Renkli dilim
  ctx.fillStyle = getSegmentColor(segment, index);
  ctx.fill();
  
  // Parlak efekt
  const gradient = ctx.createRadialGradient(
    centerX, centerY, 0,
    centerX, centerY, radius
  );
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = gradient;
  ctx.fill();
  
  // Yazı
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate((startAngle + endAngle) / 2);
  ctx.textAlign = 'right';
  ctx.fillStyle = 'white';
  ctx.font = 'bold 20px Arial';
  const text = segment.type === 'truth' ? 'DOĞRULUK' : 'CESARET';
  
  // Yazı gölgesi
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  
  ctx.fillText(text, radius - 40, 0);
  
  // Emoji
  ctx.font = '16px Arial';
  ctx.fillText(segment.type === 'truth' ? '🤔' : '😈', radius - 15, 0);
  
  ctx.restore();
};

export const drawWheel = (
  canvas: HTMLCanvasElement,
  segments: WheelSegment[],
  rotation: number,
  color: string
) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY) - 20;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Çark dilimleri
  let startAngle = rotation;
  segments.forEach((segment, index) => {
    const endAngle = startAngle + (2 * Math.PI * segment.probability);
    drawSegment(ctx, centerX, centerY, radius, startAngle, endAngle, segment, index);
    startAngle = endAngle;
  });

  // Orta daire
  const centerRadius = 50;
  
  // Gölge efekti
  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
  ctx.shadowBlur = 15;
  ctx.shadowOffsetY = 5;
  
  // Orta daire arka planı
  ctx.beginPath();
  ctx.arc(centerX, centerY, centerRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
  
  // Orta daire kenarlığı
  ctx.shadowColor = 'transparent';
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#333';
  ctx.stroke();

  // Gösterge
  ctx.beginPath();
  ctx.moveTo(centerX, 10);
  ctx.lineTo(centerX - 15, 40);
  ctx.lineTo(centerX + 15, 40);
  ctx.closePath();
  ctx.fillStyle = '#333';
  ctx.fill();
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  ctx.stroke();
};