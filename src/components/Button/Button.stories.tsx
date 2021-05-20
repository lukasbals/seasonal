import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';
import Info from '../../assets/Info';
import Burger from '../../assets/Burger';

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

export const PrimaryLargeWithIcon = Template.bind({});
PrimaryLargeWithIcon.args = {
  size: 'large',
  label: 'Button',
  type: 'primary',
  icon: <Burger />,
};

export const PrimarySmallWithIcon = Template.bind({});
PrimarySmallWithIcon.args = {
  size: 'small',
  label: 'Button',
  type: 'primary',
  icon: <Info />,
};
