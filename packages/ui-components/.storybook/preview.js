import React from 'react';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';

import theme from '../lib/style-tokens/theme';
import GlobalStyles from '../lib/style-tokens/globalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

WebFont.load({
  google: {
    families: ['Source Sans Pro'],
  },
});

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
];
