import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { color, ColorProps, typography, TypographyProps } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

const StyledText = styled.div`
  display: inline;
  font-size: ${themeGet('fontSizes.1')}px;
  color: ${themeGet('colors.text.2')};
  ${color}
  ${typography}
`;

export type Props = ColorProps &
  TypographyProps & {
    children: ReactNode;
  };

const UIText: FC<Props> = ({ children, ...props }: Props) => (
  <StyledText {...props}>{children}</StyledText>
);

export default UIText;
