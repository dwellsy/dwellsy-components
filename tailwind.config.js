/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gotham", "sans-serif"],
      },
      colors: {
        purple: "#7172e8",
        "purple-dark": "#5654bf",
        "gray-light": "#eaeaea",
      },
    },
  },
  plugins: [require("tailwindcss-dark-mode")()],
  variants: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd"],
};
