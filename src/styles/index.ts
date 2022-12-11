import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "white",
      "base-background": "#D8D8D8",

      "red-100": "#C24444",
      "red-200": "#903232",

      "black-100": "#2B2A2A",
    },

    fontSizes: {
      sm: '1rem',
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },

    media: {
      bp1: "(min-width: 640px)",
      bp2: "(min-width: 768px)",
      bp3: "(min-width: 1024px)",
    },
  },
});
