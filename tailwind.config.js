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
      roboto: 'Roboto, sans-serif',
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
        link: '#2563EE',
      },
      black: {
        DEFAULT: '#141414',
      },
      button: {
        primary: '#2688EB',
        primaryHover: '#2C7CDE',
        primaryActive: '#1E6FDB',
        'secondary-100': 'rgba(0, 0, 0, 0.04)',
        'secondary-200': 'rgba(0, 0, 0, 0.08)',
        'secondary-300': 'rgba(0, 0, 0, 0.12)',
      },
      background: {
        primary: '#FAFAFA',
      },
      border: {
        gray: '#E4E4E7',
      },
    },
    extend: {
      width: {
        fit: 'fit-content',
      },
    },
  },
  plugins: [],
}
