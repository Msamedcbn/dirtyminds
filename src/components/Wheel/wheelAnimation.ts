interface SpinAnimation {
  duration: number;
  finalRotation: number;
  startAnimation: (
    startTime: number,
    onProgress: (rotation: number) => void,
    onComplete: (rotation: number) => void
  ) => void;
}

export const calculateSpinAnimation = (
  currentRotation: number,
  duration: number = 3000,
  minSpins: number = 5
): SpinAnimation => {
  const spinRotations = minSpins + Math.random() * 2; // 5-7 tam tur
  const finalRotation = currentRotation + (Math.PI * 2 * spinRotations) + (Math.random() * Math.PI * 2);
  
  const startAnimation = (
    startTime: number,
    onProgress: (rotation: number) => void,
    onComplete: (rotation: number) => void
  ) => {
    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      
      if (elapsed < duration) {
        const easeOut = 1 - Math.pow(1 - elapsed / duration, 3);
        const rotation = currentRotation + (finalRotation - currentRotation) * easeOut;
        onProgress(rotation);
        requestAnimationFrame(animate);
      } else {
        onComplete(finalRotation);
      }
    };
    
    requestAnimationFrame(animate);
  };

  return {
    duration,
    finalRotation,
    startAnimation
  };
};