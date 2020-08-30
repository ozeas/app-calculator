import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { color, ColorProps, typography, TypographyProps } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

type Props = {
  children: ReactNode;
};

export type UILabelProps =
  | {
      [key: string]: ColorProps | TypographyProps;
    }
  | Props;

const StyledText = styled.div<UILabelProps>`
  display: inline;
  font-size: ${themeGet('fontSizes.1')}px;
  color: ${themeGet('colors.text.2')};
  ${color}
  ${typography}
`;

const UIText: FC<UILabelProps> = ({ children, ...props }: UILabelProps) => (
  <StyledText {...props}>{children}</StyledText>
);

export default UIText;
