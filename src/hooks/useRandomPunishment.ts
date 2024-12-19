import { useState } from 'react';
import { Category } from '../types/game';
import { questions } from '../data/questions';

export const useRandomPunishment = (category: Category) => {
  const [showPunishment, setShowPunishment] = useState(false);
  const [currentPunishment, setCurrentPunishment] = useState('');
  
  const punishments = questions[category].punishments || [];

  const handlePunishmentClick = () => {
    const randomIndex = Math.floor(Math.random() * punishments.length);
    setCurrentPunishment(punishments[randomIndex]);
    setShowPunishment(true);
  };

  const handleClosePunishment = () => {
    setShowPunishment(false);
  };

  return {
    currentPunishment,
    showPunishment,
    handlePunishmentClick,
    handleClosePunishment,
  };
};