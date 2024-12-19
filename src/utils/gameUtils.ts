import { CategoryData, QuestionType } from '../types/game';

export const getRandomQuestion = (questions: CategoryData, type: QuestionType): string => {
  const questionList = type === 'truth' ? questions.truths : questions.dares;
  const randomIndex = Math.floor(Math.random() * questionList.length);
  return questionList[randomIndex];
};