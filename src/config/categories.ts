import { CategoryConfig } from '../types/game';

export const categoryConfigs: Record<string, CategoryConfig> = {
  normal: {
    name: 'Normal',
    description: 'Safe for all ages',
    color: 'green',
    requiresAdult: false
  },
  adult: {
    name: 'Adult',
    description: '18+ Content',
    color: 'orange',
    requiresAdult: true
  },
  extreme: {
    name: 'Extreme',
    description: '18+ Intense',
    color: 'red',
    requiresAdult: true,
    hasPunishments: true
  }
};