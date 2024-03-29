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
        'secondary-100': '#F5F5F5',
        'secondary-200': '#EBEBEB',
        'secondary-300': '#E0E0E0',
      },
      red: {
        100: '#E64646',
        200: '#D83E3C',
        300: '#C93633',
      },
      background: {
        primary: '#FAFAFA',
        secondary: '#DAE2F4',
        index: '#F0F8FF',
        light: '#F3F2F7',
        suggestionHover: '#EEF6FF'
      },
      border: {
        gray: {
          DEFAULT: '#E4E4E7',
          light: '#E6E6E6',
        },

      },
    },
    extend: {
      width: {
        fit: 'fit-content',
      },
      boxShadow: {
        none: '0 0 #000',
        main: '0px 4px 20px rgba(0, 0, 0, 0.15);',
        mapItem: '0px 10px 20px rgba(0, 0, 0, 0.07)'
      }
    },
  },
  plugins: [],
}
