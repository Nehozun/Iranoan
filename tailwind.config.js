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
        secondary: '#666666',
        third: '#AD7BC5',
        fourth: '#333333'
      },
      backgroundColor: {
        primary: '#A506B7',
        secondary: '#4F4F4F',
        third: '#AD7BC5',
        fourth: '#F1F1F1'
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
        'banner-second-2xl': '1028px',
      },
      fontSize: {
        60: '60px',
        80: '80px',
        '28px': '28px',
        '23px': '23px',
      },
      borderRadius: {
        table: '40px',
        button: '60px'
      },
      borderColor: {
        primary: '#E1E1E1',
        purple: '#A506B7',
        lm: '#AD7BC5',
        overview: '#e3e3e3',
      },
      maxWidth: {
        200: '200px',
        1200: '1200px',
        1500: '1500px',
        'contact': '720px',
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1920px',
        '5xl': '2160px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
