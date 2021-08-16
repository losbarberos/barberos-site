module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bar-red': {
          50: '#ff4f4f',
          100: '#ff3636',
          200: '#ff1c1c',
          300: '#ff0303',
          400: '#e80000',
          500: '#cf0000',
          600: '#b50000',
          700: '#9c0000',
          800: '#820000',
          900: '#690000',
          A100: '#ff6969',
          A200: '#ff8282',
          A400: '#ff9c9c',
          A700: '#4f0000',
        },
        'bar-blue': {
          50: '#4f4fff',
          100: '#3636ff',
          200: '#1c1cff',
          300: '#0303ff',
          400: '#0000e8',
          500: '#0000cf',
          600: '#0000b5',
          700: '#00009c',
          800: '#000082',
          900: '#000069',
          A100: '#6969ff',
          A200: '#8282ff',
          A400: '#9c9cff',
          A700: '#00004f',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
