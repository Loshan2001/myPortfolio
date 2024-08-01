/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary : '#FFB400',  //dark yellow
        yellow : 'FFB80D',    //light yellow
        light : '#F1F0F6',
        white : '#FFFFFF',
        gray : '767676',
        dark:'#2B2B2B',
        black : '18191A'
      }
    },
    gridTemplateAreas : {
      'custom-grid' : ' "details hero sidebar" "details p-header sidebar" "details project sidebar"'
    }
  },
  plugins: [
    function({ addUtilities, e, theme }) {
      const areas = theme('gridTemplateAreas', {});
      const utilities = Object.keys(areas).map(key => {
        return {
          [`.${e(`grid-template-areas-${key}`)}`]: {
            'grid-template-areas': areas[key],
          }
        };
      });
      addUtilities(utilities, ['responsive', 'hover']);
    }
  ],
};
