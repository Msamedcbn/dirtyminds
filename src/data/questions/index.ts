import { normalQuestions } from './normal';
import { adultQuestions } from './adult';
import { extremeQuestions } from './extreme';
import { CategoryData } from '../../types/game';

export const questions: Record<string, CategoryData> = {
  normal: normalQuestions,
  adult: adultQuestions,
  extreme: extremeQuestions
};