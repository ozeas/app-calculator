import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.font};
  }
`;

export default GlobalStyle;
