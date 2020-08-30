import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import UIText, { UILabelProps } from './ui-text';

export default {
  title: 'Components/UIText',
  component: UIText,
  argTypes: {
    children: { control: 'text' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' },
    fontStyle: { control: 'text' },
    opacity: { control: 'number' }
  }
};

const Template: Story<UILabelProps> = (args) => <UIText {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Default text' };

export const WithFontSize = Template.bind({});
WithFontSize.args = { children: 'Text with font size', fontSize: '16px' };

export const WithColor = Template.bind({});
WithColor.args = { children: 'Text with font size', color: 'text.3' };
