/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';
import { layout } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

import { CommonProps, InputProps } from './shared-props';

type StyleLabelProps = CommonProps;
type StyleInputProps = CommonProps & InputProps;

const setRequiredField = ({ required }: StyleInputProps) =>
  required &&
  css`
    :after {
      content: '*';
      margin-left: 2px;
    }
  `;

const setErrorLabel = ({ error }: StyleLabelProps) =>
  error &&
  css`
    color: ${themeGet('colors.text.4')};
  `;

const setErrorInput = ({ error }: StyleInputProps) =>
  error &&
  css`
    border: 1px solid ${themeGet('colors.text.4')};
    color: ${themeGet('colors.text.4')};
    &:focus {
      border: 1px solid ${themeGet('colors.text.4')};
      outline-color: ${themeGet('colors.text.4')};
    }
  `;

export const StyledLabel = styled.label`
  color: ${themeGet('colors.text.2')};
  display: block;
  font-size: ${themeGet('fontSizes.1')}px;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  margin-bottom: 6px;

  ${setRequiredField}
  ${setErrorLabel}
`;

export const StyledInput = styled.input<StyleInputProps & CommonProps>`
  background: ${themeGet('colors.general.4')};
  border: 1px solid ${themeGet('colors.general.0')};
  box-sizing: border-box;
  border-radius: ${themeGet('radius')};
  color: ${themeGet('colors.text.0')};
  padding: 9px 13px;

  &:focus {
    border: 1px solid ${themeGet('colors.general.5')};
    outline-color: ${themeGet('colors.general.5')};
  }

  ${setErrorInput}
  ${layout}
`;
