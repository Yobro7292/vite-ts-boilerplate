/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['outfit'],
    },
    extend: {
      colors: {
        'theme-black': {
          100: '#231F20',
        },
        'theme-orange': {
          100: '#E48F1E',
        },
      },
    },
  },
  plugins: [],
};
