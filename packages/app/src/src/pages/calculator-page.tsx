import React, { FC } from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { UIInputMask, UIText, Flex, Box } from '@ac/components';

const Container = styled(Flex).attrs({
  justifyContent: 'center',
  alignItems: 'center'
})`
  background: ${themeGet('colors.general.6')};
  height: 100%;
`;

const WrapperMain = styled(Flex).attrs({
  justifyContent: 'space-between'
})`
  border: 1px solid ${themeGet('colors.general.2')};
  border-radius: ${themeGet('radius')};
  background: ${themeGet('colors.general.4')};
  width: 608px;
  height: 389px;
  box-sizing: border-box;
`;

const WrapperForm = styled(Box).attrs({
  pt: '41px',
  pl: '56px'
})`
  width: 377px;
  box-sizing: border-box;
`;

const WrapperDetail = styled(Box).attrs({
  pt: '83px',
  pl: '35px'
})`
  width: 231px;
  background: ${themeGet('colors.general.7')};
  box-sizing: border-box;
`;

const TitleDetail = styled(UIText).attrs({
  color: 'text.5',
  fontWeight: 'bold',
  fontSize: 2,
  fontStyle: 'italic'
})`
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const Separator = styled.div`
  border: 1px solid ${themeGet('colors.text.1')};
  width: 161px;
  opacity: 0.3;
`;

const CalculatorPage: FC = () => (
  <Container>
    <WrapperMain>
      <WrapperForm>
        <UIText color="text.2" fontSize={3} fontWeight="bold">
          Simule sua Antecipação
        </UIText>
        <Box mt="22px">
          <UIInputMask
            type="money"
            label="Informe o valor da venda"
            id="valor_venda"
            width="251px"
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

export default CalculatorPage;
