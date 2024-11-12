/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'f-10': '7.2rem',
        'f-20': '5.6rem',
        'f-25': '4rem',
        'f-30': '3.2rem',
        'f-40': '2.4rem',
        'f-50': '1.8rem',
      },
      colors: {
        blue_10: '#062949f1',
        yellow_10: '#c59c06',
        white_10: '#f2f5f7',
        black_10: '#0a1524',
      },
      maxWidth: {
        'max-container-10': '144rem',
      },
    },
    screens: {
      sm: '320px',
      md: '860px',
      lg: '1280px',
    },
  },
  plugins: [],
};
