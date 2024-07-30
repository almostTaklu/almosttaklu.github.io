module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class',
    theme: {
      extend: {
        maxWidth: {
          'screen-xl': '1300px',
        },
        colors: {
          primary: '#CF9421',
          dark: '#232E3F',
          light: '#FDFAF3',
          'light-text': '#DAD5C6',
          'dark-text': '#232E3F',
          'hero-h1': '#C35530',
          'about-light-bg': '#F6F5F2',
          'dark-card': '#33363D',
          'light-card': '#EEECE3',
        },
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          karla: ['Karla', 'sans-serif'],
          lato: ['Lato', 'sans-serif'],
          notoSans: ['Noto Sans', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif'],
          openSans: ['Open Sans', 'sans-serif'],
        },
        fontSize: {
          'xxs': ['0.5rem', { lineHeight: '0.75rem' }], // 8px
          'xxxs': ['0.375rem', { lineHeight: '0.5rem' }], // 6px
          'xxxxs': ['0.25rem', { lineHeight: '0.375rem' }], // 4px
          'tiny': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
          'base': ['1rem', { lineHeight: '1.5rem' }], // 16px
          'lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
          'xl': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
          '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
          '5xl': ['3rem', { lineHeight: '1' }], // 48px
          '6xl': ['3.75rem', { lineHeight: '1' }], // 60px
          '7xl': ['4.5rem', { lineHeight: '1' }], // 72px
          '8xl': ['6rem', { lineHeight: '1' }], // 96px
          '9xl': ['8rem', { lineHeight: '1' }], // 128px
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  