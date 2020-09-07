import React, { FC } from 'react';

import { Wrapper } from './styled';

type Props = {
  message: string;
  variation?: 'error' | 'warning';
};

const NetworkStatus: FC<Props> = ({ message, variation = 'error' }: Props) => (
  <Wrapper variation={variation}>{message}</Wrapper>
);

export default NetworkStatus;
