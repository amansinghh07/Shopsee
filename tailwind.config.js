module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Blinker',
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '26px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['30px', '38px'],
      '4xl': ['36px', '44px'],
      '5xl': ['48px', '56px'],
      '6xl': ['64px', '72px'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '5rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
        custom: '#928fe2',
        footer: '#b4aff1',
        fadeCustom: "#b5afed"
        
      },
      backgroundImage: {
        hero: "url('./img/bg_hero.webp')",
      },
    },
  },
  plugins: [],
};