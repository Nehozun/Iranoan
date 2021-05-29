module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        notoSans: ['Noto Sans JP', 'sans-serif'],
        raleWay: ['Raleway', 'sans-serif'],
      },
      colors: {
        primary: '#A506B7',
        secondary: '#666666'
      },
      backgroundColor: {
        primary: '#A506B7',
        secondary: '#4F4F4F'
      },
      spacing: {
        13: '3.25rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        42: '10.5rem',
        46: '11.5rem',
        'banner-sm': '284px',
        'banner-xl': '531px',
        'banner-2xl': '734px',
        'banner-second-sm': '331px',
        'banner-second-md': '432px',
        'banner-second-lg': '633px',
        'banner-second-xl': '744px',
        'banner-second-2xl': '1028px'
      },
      fontSize: {
        60: '60px',
        80: '80px'
      },
      borderRadius: {
        table: '40px',
        button: '60px'
      },
      borderColor: {
        primary: '#E1E1E1',
        purple: '#A506B7'
      },
      maxWidth: {
        1200: '1200px',
        1500: '1500px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
