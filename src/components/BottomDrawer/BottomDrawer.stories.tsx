import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BottomDrawer, BottomDrawerProps } from './BottomDrawer';

export default {
  title: 'Layout/BottomDrawer',
  component: BottomDrawer,
} as Meta;

const Template: Story<BottomDrawerProps> = (args) => <BottomDrawer {...args} />;

export const Expanded = Template.bind({});
Expanded.args = {
  children: <div>Expanded</div>,
  expanded: true,
  onChange: (newState: boolean) => {
    console.log('onChange', newState);
  },
};

export const Unexpanded = Template.bind({});
Unexpanded.args = {
  children: <div>Unexpanded</div>,
  expanded: false,
  onChange: (newState: boolean) => {
    console.log('onChange', newState);
  },
};
