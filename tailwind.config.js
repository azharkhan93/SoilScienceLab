import theme from "./wwwroot/Theme.js";

export default {
  mode: 'jit',
  content: [
    "./Pages/**/*.razor",
    "./Components/**/*.razor",
    "./Shared/**/*.razor",
    "./Layout/**/*.razor",
    "./Views/**/*.cshtml",
    "./wwwroot/**/*.html",
    "./**/*.razor",
    "./**/*.cshtml",
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
