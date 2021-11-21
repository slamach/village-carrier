import { createGlobalStyle } from 'styled-components';
import minecraft from 'assets/fonts/minecraft.woff2';

export const theme = {
  colors: {
    mainText: '#3f3f3f',
    menuText: '#fcfcfc',
    menuAddText: '#a0a0a0',
    inputText: '#e0e0e0',
    disabledText: '#9e9e9e',
    error: '#fc5454'
  },
  fonts: {
    defaultSize: '21px',
    smallSize: '17px',
    textShadow: '2px 2px 0px #383838'
  },
  elements: {
    buttonShadow:
      'inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.4), inset -1.5px -3px 0px rgba(0, 0, 0, 0.3)'
  }
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'minecraft';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${minecraft}) format('woff2');
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
    overflow-x: hidden;
  }

  body {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: ${theme.fonts.defaultSize};
    font-family: 'minecraft', Arial;
    text-shadow: ${theme.fonts.textShadow};
    color: ${theme.colors.menuText};
    background-color: #593d29;
    -webkit-font-smoothing: subpixel-antialiased;
    scroll-behavior: smooth;
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
