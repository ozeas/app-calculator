import { ReactNode, RefObject } from 'react';
import MaskedInput from 'react-text-mask';

export type CommonProps = {
  error?: boolean;
  required?: boolean;
};

export type InputProps = {
  id?: string;
  name?: string;
  width?: string | number;
  ref?: RefObject<MaskedInput>;
} & CommonProps;
