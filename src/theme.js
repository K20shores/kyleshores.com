import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './global';

const theme = {
  // https://coolors.co/00ad43-cacfd6-2f2504-594e36-29339b
  colors: {
    primary:"#00ad43", // Green Pantone
    analagous1: "#009435",
    analagous2: "#2dbd5e",
    grey1: "#d6d6d6", 
    grey2: "#a7a9ac",
    grey3: "#8c8f91",

    textBlue: "#00b0f0",
    textYellow: "#ffff55",

    text: "#2e353f",
    textLight: "#4f5969",
    heading: "#1a202c",
    accent: "#d1dce5",
    black: "#222222",
    white: "#F2F2F2",

    grey :"#00000099", // Light Slate Gray
    complementary1: "#0FFF6C",
    complementary2: "#00DB55",
    complementary3: "#AD005C",
    complementary4: "#DB0075",
    tetrad1: "#AD006B",
    tetrad2: "#4200AD",
    tetrad3: "#05FF66",
    tetrad4: "#AD4200",
  },
  transitionSpeed: 0.4,
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
