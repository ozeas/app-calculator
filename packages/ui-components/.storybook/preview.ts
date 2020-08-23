import WebFont from 'webfontloader';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import theme from '../lib/style-tokens/theme';

WebFont.load({
  google: {
    families: ['Source Sans Pro', 'sans-serif']
  }
});

addDecorator(withThemesProvider([theme]));
