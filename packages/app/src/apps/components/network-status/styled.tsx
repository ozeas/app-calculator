import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Flex } from '@ac/components';

export const WarningNetwork = styled(Flex).attrs({
  justifyContent: 'center',
  alignItems: 'center'
})`
  position: fixed;
  height: 50px;
  width: 100%;
  background: ${themeGet('colors.text.4')};
  color: ${themeGet('colors.general.3')};
  top: 0;
`;
