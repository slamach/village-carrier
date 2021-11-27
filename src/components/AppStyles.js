import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components/macro';
import minecraft from 'assets/fonts/minecraft.woff2';
import buttonBackground from 'assets/img/bg-button.png';

export const theme = {
  breakpoints: {
    desktop: '1280px'
  },
  colors: {
    mainText: '#3f3f3f',
    menuText: '#fcfcfc',
    menuAddText: '#a0a0a0',
    inputText: '#e0e0e0',
    disabledText: '#9e9e9e',
    error: '#fc5454',
    highlight: '#fcfc00'
  },
  fonts: {
    defaultSize: '21px',
    smallSize: '17px',
    textShadow: '2px 2px 0px #383838'
  },
  elements: {
    containerShadow:
      '4px 0 0 0 #555555, 0 4px 0 0 #555555, 2px 2px 0 0 #555555, -4px 0 0 0 #e8e8e8, 0 -4px 0 0 #e8e8e8, -2px -2px 0 0 #e8e8e8, 0 0 0 2px #b5b4b5, 2px 4px 0 0 #555, 4px 2px 0 0 #555, -2px -4px 0 0 #e8e8e8, -4px -2px 0 0 #e8e8e8, 4px -2px 0 0 #000000, 2px -4px 0 0 #000000, -4px 2px 0 0 #000000, -2px 4px 0 0 #000000, -4px -4px 0 0 #000000, 4px 4px 0 0 #000000, -6px 0 0 0 #000000, -6px -2px 0 0 #000000, 6px 0 0 0 #000000, 6px 2px 0 0 #000000, 0 -6px 0 0 #000000, -2px -6px 0 0 #000000, 0 6px 0 0 #000000, 2px 6px 0 0 #000000',
    containerShadowHover:
      '4px 0 0 0 #555555, 0 4px 0 0 #555555, 2px 2px 0 0 #555555, -4px 0 0 0 #e8e8e8, 0 -4px 0 0 #e8e8e8, -2px -2px 0 0 #e8e8e8, 0 0 0 2px #b5b4b5, 2px 4px 0 0 #555, 4px 2px 0 0 #555, -2px -4px 0 0 #e8e8e8, -4px -2px 0 0 #e8e8e8, 4px -2px 0 0 #ffffff, 2px -4px 0 0 #ffffff, -4px 2px 0 0 #ffffff, -2px 4px 0 0 #ffffff, -4px -4px 0 0 #ffffff, 4px 4px 0 0 #ffffff, -6px 0 0 0 #ffffff, -6px -2px 0 0 #ffffff, 6px 0 0 0 #ffffff, 6px 2px 0 0 #ffffff, 0 -6px 0 0 #ffffff, -2px -6px 0 0 #ffffff, 0 6px 0 0 #ffffff, 2px 6px 0 0 #ffffff'
  }
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'minecraft';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('${minecraft}') format('woff2');
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
  }

  body {
    position: relative;
    min-width: 1280px;
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

export const Button = styled.button`
  display: inline-block;
  padding: 10px 11px 12px;
  font: inherit;
  text-align: center;
  color: ${({ theme }) => theme.colors.menuText};
  text-shadow: ${({ theme }) => theme.fonts.textShadow};
  background-color: #6d6d6d;
  background-image: url('${buttonBackground}');
  border: 3px solid #000000;
  box-shadow: inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.4),
    inset -1.5px -3px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: #ffffff;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.disabledText};
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url('${buttonBackground}');
    box-shadow: none;
    cursor: default;

    &:hover {
      border-color: #000000;
    }
  }
`;

export const VisuallyHidden = styled.p`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0 0 0 0);
`;
