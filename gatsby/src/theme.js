import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './global';

const theme = {
  colors: {
    // https://www.canva.com/colors/color-wheel/
    primary:"#00ad43", // Green Pantone
    analagous1: "#009435",
    analagous2: "#2dbd5e",
    grey: "#E8E8E8", 

    text: "#2e353f",
    textLight: "#4f5969",
    heading: "#1a202c",
    accent: "#d1dce5",
    black: "#222222",
    blackTransparent: "#222222cc",
    white: "#ffffff",

    complementary: "#AD006A",
    complementary1: "#0FFF6C",
    complementary2: "#00DB55",
    complementary3: "#AD005C",
    complementary4: "#DB0075",
    tetrad1: "#00AD43",
    tetrad2: "#0013AD",
    tetrad3: "#AD006A",
    tetrad4: "#AD9A00",
  },
  transitionSpeed: 0.2,
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  },
  breakpoints : {
    // in pixels
    mobile: 420,
    tablet: 768,
    desktop: 1280,
  }
};

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        {children}
    </ThemeProvider>
  )
}

export {
  Theme,
  theme as themeData
}
