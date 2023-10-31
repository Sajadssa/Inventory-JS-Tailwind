/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    


    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/pexels-photo-1402787.jpeg')",
      }


    },



  },
  plugins: [
    require('@tailwindcss/forms')],
};

