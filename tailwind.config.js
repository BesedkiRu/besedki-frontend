module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
  ],
  mode: 'jit',
  purge: [
    './pages/**/*.{vue}',
    './layouts/**/*.{vue}',
    './components/**/*.{vue}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      rubik: 'Rubik, sans-serif',
    },
    container: {
      center: true,
    },
    screens: {
      '2xl': { max: '1600px' },
      xl: { max: '1365px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
      xs: { max: '375px' },
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      gray: {
        DEFAULT: '#747474',
        dark: '#414141',
      },
      blue: {
        link: '#2563EE'
      },
      black: {
        DEFAULT: '#141414',
      },
      background: {
        primary: '#FAFAFA',
      },
      border: {
        gray: '#E4E4E7' ,
      }
    },
    extend: {
      width: {
        fit: 'fit-content',
      },
    },
  },
  plugins: [],
}
