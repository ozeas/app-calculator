import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box, UIText } from '@ac/components';

export const WrapperForm = styled(Box).attrs({
  py: '41px',
  pl: '56px'
})`
  width: 377px;
  box-sizing: border-box;
`;

export const Separator = styled.div`
  border: 1px solid ${themeGet('colors.text.1')};
  width: 161px;
  opacity: 0.3;
  margin-bottom: 4px;
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

export const OverflowWrapper = styled(Box).attrs({
  maxHeight: '350px'
})`
  overflow-y: auto;
`;

export const ItemDetail = styled(UIText).attrs({
  fontSize: 2,
  color: 'text.1',
  fontStyle: 'italic'
})``;

export const WrapperItemDetail = styled(Box).attrs({
  mt: '28px'
})``;
