import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'montserrat';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
  html {
    box-sizing: border-box;
    font-size: 16px;
    min-width: 320px;
  }
  a { cursor: pointer; text-decoration: none; }
  ul, li { list-style: none; }
  button {
        background: none;
        outline: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
        }
    }

    @font-face {
        font-family: 'montserrat';
        font-display: fallback;
        font-weight: 300;
        font-style: regular;
        src: url('/fonts/Montserrat-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'montserrat';
        font-display: fallback;
        font-weight: 400;
        font-style: medium;
        src: url('/fonts/Montserrat-Medium.ttf') format('truetype');
    }

    @font-face {
        font-family: 'montserrat';
        font-display: fallback;
        font-weight: 500;
        font-style: bold;
        src: url('/fonts/Montserrat-Bold.ttf') format('truetype');
    }
`;
