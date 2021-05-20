import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SideDrawer, SideDrawerProps } from './SideDrawer';

export default {
  title: 'Layout/SideDrawer',
  component: SideDrawer,
} as Meta;

const Template: Story<SideDrawerProps> = (args) => <SideDrawer {...args} />;

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
