import React, { FC } from 'react';

import useOnline from '../../../hooks/use-online';
// import useRequest from '../../../hooks/use-request';
import NetworkStatus from '../../components/network-status/network-status';
import Form from '../components/calculator-page/form';
import ResultDetails from '../components/calculator-page/result-details';
import { Container, WrapperMain } from './styled';

const CalculatorPage: FC = () => {
  const { isOffline } = useOnline();

  return (
    <Container>
      {isOffline && <NetworkStatus message="Você está offline!" />}
      <WrapperMain>
        <Form />
        <ResultDetails />
      </WrapperMain>
    </Container>
  );
};

export default CalculatorPage;
