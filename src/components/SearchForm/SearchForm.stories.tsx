import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SearchForm, SearchFormProps } from './SearchForm';

export default {
  title: 'Component/Input',
  component: SearchForm,
} as Meta;

const Template: Story<SearchFormProps> = (args) => <SearchForm {...args} />;

export const InputEmpty = Template.bind({});
InputEmpty.args = {
  placeholder: 'Search ...',
  onChange: (value) => {
    console.log('Change: ', value);
  },
  value: '',
};

export const InputWithValue = Template.bind({});
InputWithValue.args = {
  placeholder: 'Search ...',
  onChange: (value) => {
    console.log('Change: ', value);
  },
  value: 'Banana',
};
