module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f2f2f7",
          200: "#ececec",
          400: "#afafaf",
          500: "#a7a7a7",
          700: "#545454",
          900: "#1e1e1e",
          "900_01": "#231f20",
          "400_75": "#c7c7c775",
        },
        blue_gray: { 100: "#d9d9d9", "100_01": "#d4d3df" },
        pink: { 900: "#73000a" },
        black: { 900: "#000000", "900_05": "#00000005" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        inriaserif: "Inria Serif",
        inriasans: "Inria Sans",
        inter: "Inter",
      },
      boxShadow: { bs: "0px 2.77px  2px 0px #00000005" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
