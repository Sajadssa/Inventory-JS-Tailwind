/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    


    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/pexels-albin-biju-3831422.jpg')",
      }


    },



  },
  plugins: [
    require('@tailwindcss/forms')],
};

