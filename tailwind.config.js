/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bronze: '#CD7F32',
        silver: '#C0C0C0',
        gold: '#FFD700',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};