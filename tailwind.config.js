/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'Sans-serif'],
      },
      keyframes: {
        slideInLeft: {
          '0%': {transform: 'translateX(-100%)', opacity: '0'},
          '100%': {transform: 'translateX(0)', opacity: '1'},
        },
        slideInRight: {
          '0%': {transform: 'translateX(100%)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}, 
        },
        slideInUp: {
          '0%': {transform: 'translateY(100%)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}, 
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out forwards',
        slideInUp: 'slideInUp 1s ease-out forwards',
        slideInLeftDelay300: 'slideInLeft 1s ease-out forwards 0.5s',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.clip-bottom-skew': {
          'clip-path': 'polygon(0 0, 100% 0, 100% 75%, 0% 89%)',
        },
      });
    },
  ],
}
