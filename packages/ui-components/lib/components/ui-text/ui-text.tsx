import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { color, ColorProps, TypographyProps, typography } from 'styled-system';

type Props = {
  children?: ReactNode;
  [key: string]: ColorProps | TypographyProps | ReactNode;
};

export type UILabelProps = Props;

const StyledText = styled.div<UILabelProps>`
  display: inline;

  ${color}
  ${typography}
`;

const UIText: FC<UILabelProps> = ({
  children,
  fontSize = 1,
  color = 'text.2',
  ...props
}: UILabelProps) => (
  <StyledText fontSize={fontSize} color={color} {...props}>
    {children}
  </StyledText>
);

export default UIText;
