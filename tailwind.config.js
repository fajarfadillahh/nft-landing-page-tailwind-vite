module.exports = {
  content: ["./index.html", "./src/**/*.{scss,vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "767px",
      xl: "1024px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: "#51aae1",
      purple: "#b880db",
      body: "#2b2537",
      white: {
        100: "#f9fafa",
        200: "#c8cdd0",
      },
    },
    fontFamily: {
      body: ["Oxanium", "cursive"],
    },
    fontWeight: {
      reguler: 400,
      semibold: 600,
      bold: 700,
    },
    transitionDuration: {
      400: "400ms",
    },
    extend: {},
  },
  plugins: [],
};
