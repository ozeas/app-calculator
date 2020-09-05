import React, { FC, RefObject, ReactNode } from 'react';
import MaskedInput, { MaskedInputProps } from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { InputProps } from './shared-props';
import { StyledInput, StyledLabel } from './styled';

export type UIInputMaskProps = {
  type?: 'money' | 'percentage' | 'number';
  label: string;
  ref?: RefObject<MaskedInput>;
  'data-testid'?: string;
} & InputProps &
  MaskedInputProps;

const maskTypes = {
  money: createNumberMask({
    prefix: 'R$ ',
    allowDecimal: true,
    decimalSymbol: ',',
    thousandsSeparatorSymbol: '.'
  }),
  percentage: createNumberMask({
    prefix: '',
    allowNegative: false,
    suffix: '%',
    allowDecimal: true,
    decimalSymbol: ','
  }),
  number: createNumberMask({
    prefix: '',
    suffix: '',
    allowDecimal: true,
    decimalSymbol: ',',
    thousandsSeparatorSymbol: '.'
  })
};

const UIInputMask: FC<UIInputMaskProps> = ({
  type = 'number',
  error,
  id,
  required,
  ...props
}: UIInputMaskProps) => (
  <MaskedInput
    mask={maskTypes[type]}
    {...props}
    render={(ref, customProps): ReactNode => (
      <>
        <StyledLabel
          error={error}
          htmlFor={id}
          required={required}
          data-testid="label"
        >
          {customProps.label}
        </StyledLabel>
        <StyledInput
          ref={ref}
          error={error}
          id={id}
          {...customProps}
          data-testid="input"
        />
      </>
    )}
  />
);

export default UIInputMask;
