import React, { FC } from 'react';

import useOnline from '../../../hooks/use-online';
import useRequest from '../../../hooks/use-request';
import NetworkStatus from '../../components/network-status/network-status';
import Form from '../components/calculator-page/form';
import ResultDetails from '../components/calculator-page/result-details';
import { Container, WrapperMain } from './styled';

const CalculatorPage: FC = () => {
  const { isOffline } = useOnline();
  const {
    callRequest,
    result,
    isLoading,
    isSlow,
    hasTimeout,
    isError
  } = useRequest('?delay=3000');

  return (
    <Container>
      {isOffline && <NetworkStatus message="Você está offline!" />}
      {isSlow && (
        <NetworkStatus
          variation="warning"
          message="Sua conexão parece está lenta, a solicitação pode demorar!"
        />
      )}
      {hasTimeout && (
        <NetworkStatus message="A API não conseguiu responder a tempo, tente novamente!" />
      )}
      {isError && (
        <NetworkStatus message="Houve um erro ao solicitar a simulação, tente novamente!" />
      )}

      <WrapperMain>
        <Form onSubmit={callRequest} isLoading={isLoading} />
        <ResultDetails result={result} />
      </WrapperMain>
    </Container>
  );
};

export default CalculatorPage;
