export type Category = 'normal' | 'adult' | 'extreme';
export type QuestionType = 'truth' | 'dare';

export interface CategoryData {
  truths: string[];
  dares: string[];
  punishments?: string[]; // Cezalar için yeni alan
}

export interface CategoryConfig {
  name: string;
  description: string;
  color: string;
  requiresAdult: boolean;
  hasPunishments?: boolean; // Ceza özelliği için yeni alan
}

export interface WheelSegment {
  type: QuestionType;
  probability: number;
}