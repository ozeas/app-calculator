import React, { FC } from 'react';

import { WarningNetwork } from './styled';

type Props = {
  message: string;
};

const NetworkStatus: FC<Props> = ({ message }: Props) => (
  <WarningNetwork>{message}</WarningNetwork>
);

export default NetworkStatus;
