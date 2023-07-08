import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
  }
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Dosis', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #root {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
