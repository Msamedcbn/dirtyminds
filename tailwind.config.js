/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        slideIn: 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
    },
  },
  safelist: [
    'bg-green-500',
    'bg-green-600',
    'bg-orange-500',
    'bg-orange-600',
    'bg-red-500',
    'bg-red-600',
    'text-green-500',
    'text-green-600',
    'text-orange-500',
    'text-orange-600',
    'text-red-500',
    'text-red-600',
    'bg-green-100',
    'bg-orange-100',
    'bg-red-100',
    'text-green-700',
    'text-orange-700',
    'text-red-700',
  ],
  plugins: [],
};