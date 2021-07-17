module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        start: '#51e2f5',
        gray_blue: '#6288a6'
      },
      keyframes: {
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-200px)',
            animationDelay: 1,
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        'fade-in-left': 'fade-in-left 1s ease-out'
      },
      scale: ['group-hover'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
