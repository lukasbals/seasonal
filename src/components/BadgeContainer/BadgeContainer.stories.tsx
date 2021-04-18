import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BadgeContainer, BadgeContainerProps } from './BadgeContainer';
import GreenBadge from '../../assets/GreenBadge';
import YellowBadge from '../../assets/YellowBadge';

export default {
  title: 'Component/BadgeContainer',
  component: BadgeContainer,
} as Meta;

const Template: Story<BadgeContainerProps> = (args) => (
  <BadgeContainer {...args} />
);

export const Positioned = Template.bind({});
Positioned.args = {
  badge: <GreenBadge />,
  top: 50,
  left: 150,
};

export const Rotated = Template.bind({});
Rotated.args = {
  badge: <YellowBadge />,
  top: 50,
  right: 10,
  rotate: 13,
};
