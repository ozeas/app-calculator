import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export type UIButtonProps = {
  children: ReactNode;
  [key: string]: string | ReactNode;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const setDisabled = ({ disabled }: UIButtonProps) =>
  disabled &&
  css`
    cursor: not-allowed;
    background: ${themeGet('colors.general.8')};
    color: ${themeGet('colors.text.2')};
    font-weight: normal;
  `;

const StyledButton = styled.button`
  display: inline;
  font-size: ${themeGet('fontSizes.1')}px;
  background: ${themeGet('colors.general.1')};
  border: 1px solid ${themeGet('colors.general.7')};
  color: ${themeGet('colors.text.5')};
  padding: 6px 10px;
  font-weight: bold;

  ${setDisabled}
`;

const UIButton: FC<UIButtonProps> = ({ children, ...props }: UIButtonProps) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default UIButton;
