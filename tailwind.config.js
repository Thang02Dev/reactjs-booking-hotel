/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "639px" },

      md: { max: "767px" },

      lg: { max: "1023px" },

      xl: { max: "1279px" },
    },
    fontFamily: {
      sans: ["Ubuntu", "Sans-serif"],
    },
    extend: {
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
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
  plugins: [
    require("tailwindcss-animatecss")({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
      variants: ["responsive"],
    }),
  ],
};
