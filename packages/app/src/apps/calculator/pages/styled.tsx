import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Flex } from '@ac/components';

export const Container = styled(Flex).attrs({
  justifyContent: 'center',
  alignItems: 'center'
})`
  background: ${themeGet('colors.general.6')};
  height: 100%;
`;

export const WrapperMain = styled(Flex).attrs({
  justifyContent: 'space-between'
})`
  border: 1px solid ${themeGet('colors.general.2')};
  border-radius: ${themeGet('radius')};
  background: ${themeGet('colors.general.4')};
  width: 608px;
  height: 489px;
  box-sizing: border-box;
`;
