import React, { FC } from 'react';

import { UIText, UIInputMask, Box } from '@ac/components';

import { WrapperForm } from './styled';

const Form: FC = () => {
  return (
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
      </form>
    </WrapperForm>
  );
};

export default Form;
