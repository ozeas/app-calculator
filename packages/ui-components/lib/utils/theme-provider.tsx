import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '../style-tokens';

type Props = {
  children: ReactNode;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
