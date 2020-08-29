import React, { FC, ChangeEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import { layout } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

type Props = {
  error?: boolean;
  required?: boolean;
};

type CommonProps = {
  id?: string;
  name?: string;
  type?: string;
  width?: string | number;
} & Props;

export type UIInputProps = {
  defaultValue?: string;
  label: string;
  value?: string;
  onChangeRequest?: (value: string) => void;
} & CommonProps;

type StyleLabelProps = Props;
type StyleInputProps = Props & CommonProps;

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
  `;

const StyledLabel = styled.label`
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
  font-size: ${themeGet('fontSizes.1')}px;
  padding: 9px 13px;

  &:focus {
    border: 1px solid ${themeGet('colors.general.5')};
    outline-color: ${themeGet('colors.general.5')};
  }

  ${setErrorInput}
  ${layout}
`;

const UIInput: FC<UIInputProps> = ({
  id,
  error = false,
  label,
  required = false,
  type = 'text',
  width = '251px',
  defaultValue,
  value: valueProp,
  onChangeRequest,
  ...props
}: UIInputProps) => {
  const [value, setValue] = useState(valueProp);

  const isControlled = value !== undefined;
  const customValue = isControlled ? value : defaultValue;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);

    if (onChangeRequest) {
      onChangeRequest(inputValue);
    }
  };

  return (
    <>
      <StyledLabel
        error={error}
        htmlFor={id}
        required={required}
        data-testid="label"
      >
        {label}
      </StyledLabel>
      <StyledInput
        type={type}
        error={error}
        id={id}
        required={required}
        width={width}
        onChange={handleOnChange}
        data-testid="input"
        value={customValue}
        {...props}
      />
    </>
  );
};

export default UIInput;
