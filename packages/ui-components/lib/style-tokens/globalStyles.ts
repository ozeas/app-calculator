import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${theme.font};
  }
`;

export default GlobalStyle;
