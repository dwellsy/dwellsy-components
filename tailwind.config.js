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
        pink: "#e671e8",
        "pink-50": "#f1e7fb",
        "pink-100": "#dbc4f4",
        "pink-200": "#c39cee",
        "pink-300": "#ab71e8",
        "pink-400": "#de4be1",
        "pink-500": "#d426d8",
        "pink-600": "#c322d2",
        "pink-700": "#ae1dcb",
        "pink-800": "#9b1bc4",
        "pink-900": "#7916b7",
        "gray-light": "#eaeaea",
      },
    },
  },
  plugins: [require("tailwindcss-dark-mode")()],
  variants: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd"],
};
