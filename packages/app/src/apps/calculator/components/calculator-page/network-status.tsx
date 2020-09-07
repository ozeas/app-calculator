import React, { FC } from 'react';

import Notification from '../../../components/notification/notification';

type Props = {
  isOffline?: boolean;
  isSlow?: boolean;
  hasTimeout?: boolean;
  isError?: boolean;
};

const NetworkStatus: FC<Props> = ({
  isOffline,
  isSlow,
  hasTimeout,
  isError
}: Props) => (
  <>
    {isOffline && <Notification message="Você está offline!" />}
    {isSlow && (
      <Notification
        variation="warning"
        message="Sua conexão parece está lenta, a solicitação pode demorar!"
      />
    )}
    {hasTimeout && (
      <Notification message="A API não conseguiu responder a tempo, tente novamente!" />
    )}
    {isError && (
      <Notification message="Houve um erro na simulação, tente novamente!" />
    )}
  </>
);

export default NetworkStatus;
