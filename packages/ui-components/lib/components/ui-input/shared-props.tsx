import { ReactNode } from 'react';

export type CommonProps = {
  error?: boolean;
  required?: boolean;
};

export type InputProps = {
  id?: string;
  name?: string;
  type?: string;
  width?: string | number;
  ref?: ReactNode;
} & CommonProps;
