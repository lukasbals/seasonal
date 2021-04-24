import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Component/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  size: 'large',
  label: 'Button',
  type: 'primary',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  size: 'small',
  label: 'Button',
  type: 'primary',
};

export const Link = Template.bind({});
Link.args = {
  label: 'Button',
  type: 'link',
};
