import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 300;
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
    color: #404040;
  }

  * {
    margin: 0;
    padding: 0;   
  }
`;

export default GlobalStyles;