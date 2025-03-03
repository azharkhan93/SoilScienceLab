import theme from "./wwwroot/Theme.js";

export default {
  mode: 'jit',
  content: [
      "./Pages/**/*.razor",
      "./Components/**/*.razor",
      "./Shared/**/*.razor",
      "./wwwroot/**/*.html",
      "./**/*.razor",
      "./**/*.cshtml",
      "./Layout/**/*.razor",
  ],
  theme: {
    extend: {
      colors: theme.colors, 
      fontSize: theme.fontSizes, 
      fontFamily: theme.fontFamily,
      fontWeight: theme.fontWeight,
      lineHeight: theme.lineHeight,
    },
  },
  plugins: [],
};
