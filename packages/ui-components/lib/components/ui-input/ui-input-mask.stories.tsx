import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import UIInputMask, { UIInputMaskProps } from './ui-input-mask';

export default {
  title: 'Components/UIInputMask',
  component: UIInputMask,
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    name: { control: 'text' },
    required: { control: 'boolean' },
    error: { control: 'boolean' },
    type: { control: 'text' },
    value: { control: 'text' }
  }
};

const TemplateMoney: Story<UIInputMaskProps> = (args) => (
  <UIInputMask {...args} />
);

export const WithMaskMoney = TemplateMoney.bind({});
WithMaskMoney.args = {
  label: 'Informe o valor da venda',
  id: 'valor_venda',
  name: 'valor_venda',
  value: '1000.33',
  type: 'money'
};

export const WithMaskPercent = TemplateMoney.bind({});
WithMaskPercent.args = {
  label: 'Informe percentual de MDR',
  id: 'percentual_mdr',
  name: 'percentual_mdr',
  value: '100',
  type: 'percentage'
};

export const WithMaskNumber = TemplateMoney.bind({});
WithMaskNumber.args = {
  label: 'Em quantas parcelas',
  id: 'parcelas',
  name: 'parcelas',
  value: '100',
  type: 'number'
};

export const WithMaskListDays = TemplateMoney.bind({});
WithMaskListDays.args = {
  label: 'Lista de dias',
  id: 'dias',
  name: 'dias',
  value: ''
};
