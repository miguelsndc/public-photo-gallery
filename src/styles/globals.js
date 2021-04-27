import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.secondary};
    transition: all .2s;
  }
`;

export default GlobalStyle;
