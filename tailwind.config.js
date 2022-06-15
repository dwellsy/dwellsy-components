/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#7172e8",
        "purple-dark": "#5654bf",
        "gray-light": "#eaeaea",
      },
    },
  },
  /*
  theme: {
    colors: {
      white: "#ffffff",
      blue: "#1fb6ff",
      purple: "#7172e8",
      "purple-dark": "#5654bf",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      // 'gray-light': '#d3dce6',
      "gray-light": "#eaeaea",
    },
  },
  */
  plugins: [require("tailwindcss-dark-mode")()],
  variants: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd"],
};
