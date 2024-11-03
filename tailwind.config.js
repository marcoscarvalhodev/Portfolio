/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'title-font-10': '7.2rem',
        'title-font-20': '5.6rem',
        'title-font-30': '3.2rem',
        'title-font-40': '2.4rem',
        'title-font-50': '1.8rem'
         
      },
      maxWidth: {
        "max-container-10": '144rem'
      }
    },
    screens: {
      sm: '320px',
      md: '860px',
      lg: '1280px',
    },
  },
  plugins: [],
};
