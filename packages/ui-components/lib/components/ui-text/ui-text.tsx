import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { color, ColorProps, typography, TypographyProps } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

export type Props = {
  children: ReactNode;
} & ColorProps & TypographyProps;

export type StyledProps = {
  [key: string]: ReactNode;
};

const StyledText = styled.div<StyledProps>`
  display: inline;
  font-size: ${themeGet('fontSizes.1')}px;
  color: ${themeGet('colors.text.2')};
  ${color}
  ${typography}
`;

const UIText: FC<Props> = ({ children, ...props }: Props) => (
  <StyledText {...props}>{children}</StyledText>
);

export default UIText;
