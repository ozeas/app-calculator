import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '../style-tokens';

type Props = {
  children?: ReactNode;
};

const Theme = ({ children }: Props): ReactNode => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
