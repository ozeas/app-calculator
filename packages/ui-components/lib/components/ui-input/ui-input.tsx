import React, { FC, ReactNode } from 'react';

import { InputProps } from './shared-props';
import { StyledLabel, StyledInput } from './styled';

export type UIInputProps = {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
} & InputProps;

const UIInput: FC<UIInputProps> = ({
  id,
  error = false,
  label,
  required = false,
  type = 'text',
  width = '251px',
  ref,
  onChange,
  ...props
}: UIInputProps) => {
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
        data-testid="input"
        {...props}
      />
    </>
  );
};

export default UIInput;
