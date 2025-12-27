
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode : "class",
  theme: {
    extend: {
      colors :{
        primary: "#E30B5C",
        secondary:"#800080",
        purple: "#800080",
        starpurple:"#FF00FF",
      },
      container :{
        center : true,
        padding:{
          DEFAULT:"1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}
