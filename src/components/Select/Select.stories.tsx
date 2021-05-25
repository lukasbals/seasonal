import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Select, SelectProps } from './Select';
import styled from 'styled-components';

export default {
  title: 'Component/Select',
  component: Select,
} as Meta;

const SelectContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Template: Story<SelectProps> = (args) => (
  <SelectContainer>
    <Select {...args} />
  </SelectContainer>
);

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
