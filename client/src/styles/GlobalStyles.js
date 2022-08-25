import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: #eee;
    color: #404040;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: $blackShade;
  }

  * {
    margin: 0;
    padding: 0;   
  }
`;

export default GlobalStyles;