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
        // Took our base 'purple' and set it as the primary here to get 100-900 colors
        // https://materialpalettes.com/
        purple: "#7172e8",
        "purple-50": "#ebecfc",
        "purple-100": "#cdcef7",
        "purple-200": "#acaff2",
        "purple-300": "#8a8fed",
        "purple-400": "#7173e8",
        "purple-500": "#5a58e2",
        "purple-600": "#544ed6",
        "purple-700": "#4c43c9",
        "purple-800": "#4438bd",
        "purple-900": "#3a22a6",
        "purple-dark": "#5654bf",
        "gray-light": "#eaeaea",
      },
    },
  },
  plugins: [require("tailwindcss-dark-mode")()],
  variants: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd"],
};
