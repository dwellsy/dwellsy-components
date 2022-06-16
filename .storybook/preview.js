// import { themes } from '@storybook/theming/index.js';
// import { useDarkMode } from 'storybook-dark-mode';
// const { themes } = require('@storybook/theming');

export const parameters = {
  darkMode: {
    // dark: { ...themes.dark, appBg: "#999999" },
    // light: { ...themes.normal, appBg: "#e3e3e3" },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
