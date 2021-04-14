import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MonthSelect, MonthSelectProps } from './MonthSelect';
import { IntlProvider } from 'react-intl';
import messagesDe from './messages.de';

export default {
  title: 'Example/MonthSelect',
  component: MonthSelect,
} as Meta;

const Template: Story<MonthSelectProps> = (args) => (
  <IntlProvider locale="de" messages={messagesDe}>
    <MonthSelect {...args} />
  </IntlProvider>
);

export const DefaultMonthSelect = Template.bind({});
DefaultMonthSelect.args = {
  onSelect: (month: string) => {
    console.log('Month: ', month);
  },
};
