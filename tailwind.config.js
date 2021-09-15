module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: "media",
  theme: {
    extend:{
      colors: {
        system: {
          light: '#f2f2f2'
        },
      }  
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
