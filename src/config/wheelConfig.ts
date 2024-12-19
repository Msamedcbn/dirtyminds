import { Category, WheelSegment } from '../types/game';

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const createSegment = (type: 'truth' | 'dare', total: number): WheelSegment => ({
  type,
  probability: 1 / total
});

const createSegments = (truthCount: number, dareCount: number): WheelSegment[] => {
  const total = truthCount + dareCount;
  
  // Tüm segmentleri oluştur
  const segments: WheelSegment[] = [
    ...Array(truthCount).fill(null).map(() => createSegment('truth', total)),
    ...Array(dareCount).fill(null).map(() => createSegment('dare', total))
  ];
  
  // Segmentleri karıştır
  return shuffleArray(segments);
};

export const getWheelSegments = (category: Category): WheelSegment[] => {
  switch (category) {
    case 'normal':
    case 'adult':
      // 8 parçalı çark (4 Doğruluk, 4 Cesaret)
      return createSegments(4, 4);
      
    case 'extreme':
      // 12 parçalı çark (4 Doğruluk, 8 Cesaret) - Karışık sıralı
      return createSegments(4, 8);
  }
};