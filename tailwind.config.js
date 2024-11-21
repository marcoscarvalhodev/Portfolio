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
      spacing: {
        'sp-10': '9.6rem',
        'sp-20': '7.2rem',
        'sp-30': '5.6rem',
        'sp-40': '4rem',
        'sp-50': '3.2rem',
        'sp-60': '2.4rem',
        'sp-70': '1.8rem',
      },
      colors: {
        blue_10: '#062949f1',
        yellow_10: '#c59c06da',
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
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
