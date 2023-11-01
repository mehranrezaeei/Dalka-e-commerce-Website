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
        "side-left-show": {
          "0% ": { transform: "translateY(100px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "side-mover": "side-mover 5s ease-in-out infinite",
        "side-left-show": "side-left-show  ease-in-out 1",
        "fade-in": "fade-in 1.5s ease-in-out 1",
      },
      colors: {
        Cblue: "#20254b",
        Cgray: "#f4f5fa",
      },
    },
  },
  plugins: [],
};
