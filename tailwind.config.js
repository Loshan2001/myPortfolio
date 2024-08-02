module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class', // Enables dark mode via class
  theme: {
    extend: {
      colors: {
        primary: '#FFB400', // dark yellow
        yellow: '#FFB80D', // light yellow
        light: '#F1F0F6',
        white: '#FFFFFF',
        gray: '#767676',
        dark: '#2B2B2B',
        black: '#18191A',
        secondary : '#e0882f' // yellow for darkmode
      }
    }
  },
  plugins: [],
};
