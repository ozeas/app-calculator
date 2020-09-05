import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { UIText, Flex, Box } from '@ac/components';

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
  height: 389px;
  box-sizing: border-box;
`;

export const WrapperForm = styled(Box).attrs({
  pt: '41px',
  pl: '56px'
})`
  width: 377px;
  box-sizing: border-box;
`;

export const WrapperDetail = styled(Box).attrs({
  pt: '83px',
  pl: '35px'
})`
  width: 231px;
  background: ${themeGet('colors.general.7')};
  box-sizing: border-box;
`;

export const TitleDetail = styled(UIText).attrs({
  color: 'text.5',
  fontWeight: 'bold',
  fontSize: 2,
  fontStyle: 'italic'
})`
  text-transform: uppercase;
  margin-bottom: 4px;
`;

export const Separator = styled.div`
  border: 1px solid ${themeGet('colors.text.1')};
  width: 161px;
  opacity: 0.3;
`;

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
