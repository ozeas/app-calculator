import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../lib/style-tokens/theme';
import GlobalStyles from '../lib/style-tokens/globalStyles';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]