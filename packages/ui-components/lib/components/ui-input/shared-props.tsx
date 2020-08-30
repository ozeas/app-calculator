import { ChangeEvent } from 'react';

export type CommonProps = {
  error?: boolean;
  required?: boolean;
};

export type InputProps = {
  id?: string;
  name?: string;
  width?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
} & CommonProps;
