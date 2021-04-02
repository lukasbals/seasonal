import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Header, HeaderProps } from './Header';
import Button from '../Button';

export default {
  title: 'Example/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const EmptyHeader = Template.bind({});
EmptyHeader.args = {
  heading: 'seasonal',
};

export const HeaderWith1Buttons = Template.bind({});
HeaderWith1Buttons.args = {
  heading: 'seasonal',
  left: <Button label="Button" size="small" />,
};

export const HeaderWith2Buttons = Template.bind({});
HeaderWith2Buttons.args = {
  heading: 'seasonal',
  left: <Button label="Button" size="small" />,
  right: <Button label="Button" size="small" />,
};
