import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import UIInput, { UIInputProps } from './ui-input';

export default {
  title: 'Components/UIInput',
  component: UIInput,
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    name: { control: 'text' },
    required: { control: 'boolean' },
    type: { control: 'text' },
    variation: { control: 'text' },
    error: { control: 'boolean' },
    width: { control: 'text' }
  }
};

const Template: Story<UIInputProps> = (args) => <UIInput {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  label: 'Informe o valor da venda',
  id: 'valor_venda'
};

export const WithRequiredField = Template.bind({});
WithRequiredField.args = {
  label: 'Em quantas parcelas',
  id: 'parcelas',
  required: true
};

export const WithErrorField = Template.bind({});
WithErrorField.args = {
  label: 'Informe o percentual de MDR',
  id: 'percentual_mdr',
  required: true,
  error: true
};

export const WithCustomWidth = Template.bind({});
WithCustomWidth.args = {
  label: 'Informe o percentual de MDR',
  id: 'percentual_mdr',
  required: true,
  width: '200px'
};
