import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Select, SelectProps } from './Select';

export default {
  title: 'Component/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {
  id: 'select',
  label: 'Label',
  values: [
    { id: 'austria', name: 'Austria' },
    { id: 'germany', name: 'Germany' },
  ],
  selectedValueId: 'austria',
  onChange: (newState: string) => {
    console.log('onChange', newState);
  },
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  id: 'select',
  values: [
    { id: 'austria', name: 'Austria' },
    { id: 'germany', name: 'Germany' },
  ],
  selectedValueId: 'austria',
  onChange: (newState: string) => {
    console.log('onChange', newState);
  },
};
