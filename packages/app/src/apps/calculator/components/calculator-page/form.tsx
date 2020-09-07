import React, { FC, useState, ChangeEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
  UIText,
  UIInputMask,
  UIInput,
  UIButton,
  Box,
  Flex
} from '@ac/components';

import { WrapperForm } from './styled';
import validate from '../utils/validate';
import parseValuesForm from '../utils/parse-values-form';
import { realToCents } from '../utils/convert-cents';

type Inputs = {
  amount: string;
  installments: string;
  mdr: string;
  days?: string;
};

type Payload = {
  amount?: number;
  installments?: number;
  mdr?: number;
  days?: number[];
};

type FormProps = {
  onSubmit: (payload: Payload) => void;
  isLoading?: boolean;
};

type Errors = {
  amount?: boolean;
  installments?: boolean;
  mdr?: boolean;
};

const Form: FC<FormProps> = ({ onSubmit, isLoading = false }: FormProps) => {
  const [errors, setErrors] = useState<Errors>({});
  const { register, setValue, handleSubmit } = useForm<Inputs>();

  const prepareSubmit = (data): void => {
    const validateForm = validate(data);
    setErrors(validateForm.fields);
    if (validateForm.isValid) {
      const { amount, installments, mdr, days } = parseValuesForm(data);
      const payload = {
        amount: realToCents(Number(amount)),
        installments,
        mdr
      };
      const mappedPayload =
        days && days.length ? { ...payload, days } : payload;

      onSubmit(mappedPayload);
    }
  };

  const handleChanges = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.name, event.target.value);
  };

  useEffect(() => {
    register('amount');
    register('installments');
    register('mdr');
    register('days');
  }, [register]);

  return (
    <WrapperForm>
      <form onSubmit={handleSubmit(prepareSubmit)}>
        <UIText color="text.2" fontSize={3} fontWeight="bold">
          Simule sua Antecipação
        </UIText>
        <Box mt="22px">
          <UIInputMask
            name="amount"
            type="money"
            label="Informe o valor da venda"
            id="valor_venda"
            width="251px"
            onChange={handleChanges}
            error={errors?.amount}
            disabled={isLoading}
            required
          />
        </Box>
        <Box mt="26px">
          <UIInputMask
            label="Em quantas parcelas"
            name="installments"
            id="installments"
            width="251px"
            onChange={handleChanges}
            error={errors?.installments}
            disabled={isLoading}
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
            name="mdr"
            id="mdr"
            width="251px"
            onChange={handleChanges}
            error={errors?.mdr}
            type="percentage"
            disabled={isLoading}
            required
          />
        </Box>
        <Box mt="26px">
          <UIInput
            label="Dias a serem calculados"
            name="days"
            id="days"
            width="251px"
            disabled={isLoading}
            onChange={handleChanges}
          />
          <Box>
            <UIText color="text.3" fontSize={0} fontWeight="bold">
              Informe os dias separados por vírgula, ex: 30,60,90
            </UIText>
          </Box>
        </Box>
        <Flex mt="26px" width="251px" justifyContent="center">
          <UIButton disabled={isLoading}>
            {isLoading ? 'Aguarde...' : 'Simular'}
          </UIButton>
        </Flex>
      </form>
    </WrapperForm>
  );
};

export default Form;
