import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '../style-tokens';

type Props = {
  children: ReactNode;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
