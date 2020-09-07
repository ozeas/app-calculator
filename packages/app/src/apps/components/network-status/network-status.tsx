import React, { FC } from 'react';

import { WarningNetwork } from './styled';

type Props = {
  message: string;
  variation?: 'error' | 'warning';
};

const NetworkStatus: FC<Props> = ({ message, variation = 'error' }: Props) => (
  <WarningNetwork variation={variation}>{message}</WarningNetwork>
);

export default NetworkStatus;
