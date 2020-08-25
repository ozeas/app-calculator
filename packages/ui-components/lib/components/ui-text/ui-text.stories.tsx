import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import UIText, { Props } from './ui-text';

export default {
  title: 'Components/UIText',
  component: UIText,
  argTypes: {
    children: { control: 'text' },
    color: { control: 'color' },
    fontSize: { control: 'text' }
  }
};

const Template: Story<Props> = (args) => <UIText {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Default text' };

export const WithFontSize = Template.bind({});
WithFontSize.args = { children: 'Text with font size', fontSize: '16px' };

export const WithColor = Template.bind({});
WithColor.args = { children: 'Text with font size', color: 'text.3' };
