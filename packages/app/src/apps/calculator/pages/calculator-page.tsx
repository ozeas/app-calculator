import React, { useState, FC, MouseEvent, ChangeEvent } from 'react';

import { UIInputMask, UIText, Box } from '@ac/components';

import useOnline from '../../../hooks/use-online';
import useRequest from '../../../hooks/use-request';
import {
  Container,
  WrapperMain,
  WrapperForm,
  WrapperDetail,
  WarningNetwork,
  TitleDetail,
  Separator
} from './styled';

const data = {
  amount: 15000,
  installments: 3,
  mdr: 4,
  days: [30, 60, 90]
};

type AnticipationProps = {
  [key: string]: string | number;
};

const CalculatorPage: FC = () => {
  const [values, setValues] = useState<AnticipationProps>({});
  const { isOffline } = useOnline();
  const { result, isLoading, callRequest } = useRequest(data);

  console.log(`isloading: ${isLoading}`);
  console.log(`result:`, result);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.name, event.target.value);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleRequest = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    callRequest();
  };

  return (
    <Container>
      {isOffline && <WarningNetwork>Você está offline!</WarningNetwork>}
      <WrapperMain>
        <WrapperForm>
          <form>
            <UIText color="text.2" fontSize={3} fontWeight="bold">
              Simule sua Antecipação
            </UIText>
            <Box mt="22px">
              <UIInputMask
                type="money"
                label="Informe o valor da venda"
                id="valor_venda"
                width="251px"
                onChange={handleChange}
                required
              />
            </Box>
            <Box mt="26px">
              <UIInputMask
                label="Em quantas parcelas"
                id="parcelas"
                width="251px"
                required
              />
              <Box>
                <UIText color="text.3" fontSize={0} fontWeight="bold">
                  Máximo de 12 parcelas
                </UIText>
              </Box>
            </Box>
            <Box mt="26px">
              <UIInputMask
                label="Informe o percentual MDR"
                id="mdr"
                width="251px"
                required
              />
            </Box>
            <button onClick={handleRequest}>Enviar</button>
          </form>
        </WrapperForm>
        <WrapperDetail>
          <TitleDetail>você receberá:</TitleDetail>
          <Separator />
          <Box mt="32px">
            <UIText fontSize={2} color="text.1" fontStyle="italic">
              Amanhã: <strong>R$ 0,00</strong>
            </UIText>
          </Box>
          <Box mt="28px">
            <UIText fontSize={2} color="text.1" fontStyle="italic">
              Em 15 dias: <strong>R$ 0,00</strong>
            </UIText>
          </Box>
          <Box mt="28px">
            <UIText fontSize={2} color="text.1" fontStyle="italic">
              Em 30 dias: <strong>R$ 0,00</strong>
            </UIText>
          </Box>
          <Box mt="28px">
            <UIText fontSize={2} color="text.1" fontStyle="italic">
              Em 90 dias: <strong>R$ 0,00</strong>
            </UIText>
          </Box>
        </WrapperDetail>
      </WrapperMain>
    </Container>
  );
};

export default CalculatorPage;
