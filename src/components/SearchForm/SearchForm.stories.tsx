import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SearchForm, SearchFormProps } from './SearchForm';

export default {
  title: 'Example/Input',
  component: SearchForm,
} as Meta;

const Template: Story<SearchFormProps> = (args) => <SearchForm {...args} />;

export const InputWithPlaceholder = Template.bind({});
InputWithPlaceholder.args = {
  placeholder: 'Search ...',
  onSubmit: (event) => {
    event.preventDefault();
    console.log('Click');
  },
};
