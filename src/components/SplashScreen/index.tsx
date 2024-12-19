import React, { useEffect, useState } from 'react';
import { Gamepad2 } from 'lucide-react'; // Changed from GameController to Gamepad2
import './styles.css';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`splash-screen ${!isAnimating ? 'fade-out' : ''}`}>
      <div className="scene">
        <div className="cube">
          <div className="cube__face cube__face--front">
            <div className="logo-content">
              <Gamepad2 className="game-icon" />
              <div className="text-content">
                <span className="developed-by">DEVELOPED BY</span>
                <span className="studio-name">31 GAMES</span>
              </div>
            </div>
          </div>
          <div className="cube__face cube__face--back" />
          <div className="cube__face cube__face--right" />
          <div className="cube__face cube__face--left" />
          <div className="cube__face cube__face--top" />
          <div className="cube__face cube__face--bottom" />
        </div>
      </div>
    </div>
  );
};