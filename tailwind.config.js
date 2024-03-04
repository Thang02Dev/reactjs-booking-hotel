/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-50px)",
          },
          "70%": {
            opacity: "0.3",
          },
          "80%": {
            opacity: "0.5",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-top": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "70%": {
            opacity: "0.5",
          },
          "80%": {
            opacity: "0.3",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-50px)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.1s ease-out",
        "fade-in-top": "fade-in-top 0.1s ease-out",
      },
    },
  },
  plugins: [],
};
