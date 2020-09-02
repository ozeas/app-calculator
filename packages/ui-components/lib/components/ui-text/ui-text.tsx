import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { color, ColorProps, TypographyProps, typography } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

type Props = {
  children: ReactNode;
  [key: string]: ColorProps | TypographyProps | ReactNode;
};

export type UILabelProps = Props;

const StyledText = styled.div<UILabelProps>`
  display: inline;
  font-size: ${themeGet('fontSizes.1')}px;

  ${color}
  ${typography}
`;

const UIText: FC<UILabelProps> = ({ children, ...props }: UILabelProps) => (
  <StyledText {...props}>{children}</StyledText>
);

export default UIText;
