import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --maxWidth-none: "none";
  --maxWidth-xs: 20rem;
  --maxWidth-sm: 24rem;
  --maxWidth-md: 28rem;
  --maxWidth-lg: 32rem;
  --maxWidth-xl: 36rem;
  --maxWidth-2xl: 42rem;
  --maxWidth-3xl: 48rem;
  --maxWidth-4xl: 56rem;
  --maxWidth-full: "100%";
  --maxWidth-wrapper: var(--maxWidth-2xl);
  --spacing-px: "1px";
  --spacing-0: 0;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;
  --spacing-32: 8rem;
  --fontFamily-sans: Montserrat, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --fontFamily-serif: "Merriweather", "Georgia", Cambria, "Times New Roman",
    Times, serif;
  --font-body: var(--fontFamily-sans);
  --font-heading: var(--fontFamily-sans);
  --fontWeight-normal: 400;
  --fontWeight-medium: 500;
  --fontWeight-semibold: 600;
  --fontWeight-bold: 700;
  --fontWeight-extrabold: 800;
  --fontWeight-black: 900;
  --fontSize-root: 16px;
  --lineHeight-none: 1;
  --lineHeight-tight: 1.1;
  --lineHeight-normal: 1.5;
  --lineHeight-relaxed: 1.625;
  /* 1.200 Minor Third Type Scale */
  --fontSize-0: 0.833rem;
  --fontSize-1: 1rem;
  --fontSize-2: 1.2rem;
  --fontSize-3: 1.44rem;
  --fontSize-4: 1.728rem;
  --fontSize-5: 2.074rem;
  --fontSize-6: 2.488rem;
  --fontSize-7: 2.986rem;
  --color-primary: ${(props) => props.theme.colors.primary};
  --color-complementary-1: ${(props) => props.theme.colors.complementary1};
  --color-complementary-2: ${(props) => props.theme.colors.complementary2};
  --color-complementary-3: ${(props) => props.theme.colors.complementary3};
  --color-complementary-4: ${(props) => props.theme.colors.complementary4};
  --color-tetrad-1: ${(props) => props.theme.colors.tetrad1};
  --color-tetrad-2: ${(props) => props.theme.colors.tetrad2};
  --color-tetrad-3: ${(props) => props.theme.colors.tetrad3};
  --color-tetrad-4: ${(props) => props.theme.colors.tetrad4};

  --color-text: ${(props) => props.theme.colors.text};
  --color-text-light: ${(props) => props.theme.colors.textLight};
  --color-heading: ${(props) => props.theme.colors.heading};
  --color-heading-black: ${(props) => props.theme.colors.black};
  --color-black: ${(props) => props.theme.colors.black};
  --color-white: ${(props) => props.theme.colors.white};
  --color-accent: ${(props) => props.theme.colors.accent};
  --color-grey: ${(props) => props.theme.colors.grey};
  --breakpoint-desktop: ${(props) => props.theme.breakpoints.desktop}px;
  --breakpoint-tablet: ${(props) => props.theme.breakpoints.tablet}px;
  --breakpoint-mobile: ${(props) => props.theme.breakpoints.mobile}px;
}

/* HTML elements */

*,
:after,
:before {
  box-sizing: border-box;
}

html {
  line-height: var(--lineHeight-normal);
  font-size: var(--fontSize-root);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  font-size: var(--fontSize-1);
  color: var(--color-text);
  background: var(--color-white);
  margin: 0;
}

footer {
  padding: var(--spacing-6) var(--spacing-0);
}

/* Heading */

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
  margin-top: var(--spacing-12);
  margin-bottom: var(--spacing-6);
  line-height: var(--lineHeight-tight);
  letter-spacing: -0.025em;
}

h2,
h3,
h4,
h5,
h6 {
  font-weight: var(--fontWeight-bold);
  color: var(--color-heading);
}

h1 {
  font-size: var(--fontSize-7);
  color: var(--color-heading-black);
}

h2 {
  font-size: var(--fontSize-5);
}

h3 {
  font-size: var(--fontSize-4);
}

h4 {
  font-size: var(--fontSize-3);
}

h5 {
  font-size: var(--fontSize-2);
}

h6 {
  font-size: var(--fontSize-1);
}

/* Prose */

p {
  line-height: var(--lineHeight-relaxed);
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  margin: var(--spacing-0) var(--spacing-0) var(--spacing-8) var(--spacing-0);
  padding: var(--spacing-0);
}

ul,
ol {
  margin-left: var(--spacing-0);
  margin-right: var(--spacing-0);
  padding: var(--spacing-0);
  margin-bottom: var(--spacing-8);
  list-style-position: outside;
  list-style-image: none;
}

ul li,
ol li {
  padding-left: var(--spacing-0);
  margin-bottom: calc(var(--spacing-8) / 2);
}

li > p {
  margin-bottom: calc(var(--spacing-8) / 2);
}

li *:last-child {
  margin-bottom: var(--spacing-0);
}

li > ul {
  margin-left: var(--spacing-8);
  margin-top: calc(var(--spacing-8) / 2);
}

blockquote {
  color: var(--color-text-light);
  margin-left: calc(-1 * var(--spacing-6));
  margin-right: var(--spacing-8);
  padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-6);
  border-left: var(--spacing-1) solid var(--color-primary);
  font-size: var(--fontSize-2);
  font-style: italic;
  margin-bottom: var(--spacing-8);
}

blockquote > :last-child {
  margin-bottom: var(--spacing-0);
}

blockquote > ul,
blockquote > ol {
  list-style-position: inside;
}

table {
  width: 100%;
  margin-bottom: var(--spacing-8);
  border-collapse: collapse;
  border-spacing: 0.25rem;
}

table thead tr th {
  border-bottom: 1px solid var(--color-accent);
}

/* Link */

a {
  color: var(--color-tetrad-2);
  text-decoration: none;
  transition: ${({ theme }) => theme.transitionSpeed}s ease-in-out;
}

a:hover {
  color: var(--color-complementary-4);
}

`
