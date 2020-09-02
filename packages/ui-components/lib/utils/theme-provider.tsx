import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '../style-tokens';

const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    {console.log(children)}
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
