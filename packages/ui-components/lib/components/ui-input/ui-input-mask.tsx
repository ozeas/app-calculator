import React, { FC, ReactNode } from 'react';
import MaskedInput, { MaskedInputProps } from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { CommonProps } from './shared-props';
import { StyledInput, StyledLabel } from './styled';

export type UIInputMaskProps = {
  type: 'money' | 'percentage' | 'number';
} & CommonProps &
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
  type = 'money',
  error,
  id,
  required,
  ...props
}: UIInputMaskProps) => (
  <MaskedInput
    mask={maskTypes[type]}
    {...props}
    render={(ref, customProps) => (
      <>
        <StyledLabel error={error} htmlFor={id} required={required}>
          {customProps.label}
        </StyledLabel>
        <StyledInput ref={ref} error={error} id={id} {...customProps} />
      </>
    )}
  />
);

export default UIInputMask;
