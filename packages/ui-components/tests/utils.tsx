import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../lib/style-tokens/theme';

export const renderWithTheme = (
  component: ReactNode
): Record<string, unknown> =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
