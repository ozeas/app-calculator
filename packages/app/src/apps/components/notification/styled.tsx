import styled, { css, CSSProp } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Flex } from '@ac/components';

const setVariation = ({ variation }): CSSProp =>
  ({
    error: css`
      background: ${themeGet('colors.text.4')};
      color: ${themeGet('colors.general.3')};
    `,
    warning: css`
      background: ${themeGet('colors.general.9')};
      color: ${themeGet('colors.text.0')};
    `
  }[variation]);

export const Wrapper = styled(Flex).attrs({
  justifyContent: 'center',
  alignItems: 'center'
})`
  position: fixed;
  height: 50px;
  width: 100%;
  top: 0;
  font-weight: 400;

  ${setVariation}
`;
