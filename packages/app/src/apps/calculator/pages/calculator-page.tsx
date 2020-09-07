import React, { FC } from 'react';

import useOnline from '../../../hooks/use-online';
import useRequest from '../../../hooks/use-request';
import NetworkStatus from '../components/calculator-page/network-status';
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
  } = useRequest('?timeout');

  return (
    <Container>
      <NetworkStatus
        isOffline={isOffline}
        isError={isError}
        isSlow={isSlow}
        hasTimeout={hasTimeout}
      />
      <WrapperMain>
        <Form onSubmit={callRequest} isLoading={isLoading} />
        <ResultDetails result={result} />
      </WrapperMain>
    </Container>
  );
};

export default CalculatorPage;
