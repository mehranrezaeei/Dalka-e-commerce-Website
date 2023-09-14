/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "550px",
      },
      keyframes: {
        "side-mover": {
          "0% ,100%": { left: "0%" },
          "50%": { left: "100%" },
        },
      },
      animation: {
        "side-mover": "side-mover 5s ease-in-out infinite",
      },
      colors: {
        Cblue: "#20254b",
        Cgray: "#f4f5fa",
      },
    },
  },
  plugins: [],
};
