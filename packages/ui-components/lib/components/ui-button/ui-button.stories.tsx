import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import UIButton, { UIButtonProps } from './ui-button';

export default {
  title: 'Components/UIButton',
  component: UIButton,
  argTypes: {
    type: { control: 'button' },
    width: { control: 'text' }
  }
};

const Template: Story<UIButtonProps> = (args) => <UIButton {...args} />;
export const BasicUsage = Template.bind({});
BasicUsage.args = {
  children: 'Button'
};
