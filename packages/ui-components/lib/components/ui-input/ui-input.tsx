import React, { FC } from 'react';

import { InputProps } from './shared-props';
import { StyledLabel, StyledInput } from './styled';

export type UIInputProps = {
  label: string;
  value?: string;
  disabled?: boolean;
} & InputProps;

const UIInput: FC<UIInputProps> = ({
  id,
  error = false,
  label,
  required = false,
  width = '251px',
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
        error={error}
        id={id}
        required={required}
        width={width}
        onChange={onChange}
        data-testid="input"
        {...props}
      />
    </>
  );
};

export default UIInput;
