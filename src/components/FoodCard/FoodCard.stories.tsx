import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import { FoodCard } from './FoodCard';
import { Food } from '../../models/Food';
import { IntlProvider } from 'react-intl';
import messagesDe from './messages.de';

export default {
  title: 'Component/FoodCard',
  component: FoodCard,
} as Meta;

const CardContainer = styled.div`
  width: 220px;
`;

const Template: Story<Food> = (args) => (
  <IntlProvider locale="de" messages={messagesDe}>
    <CardContainer>
      <FoodCard {...args} />
    </CardContainer>
  </IntlProvider>
);

export const WithoutName = Template.bind({});
WithoutName.args = {
  asset: <div>Image of a vegetable</div>,
  type: 'vegetable',
};

export const WithName = Template.bind({});
WithName.args = {
  asset: <div>Asset</div>,
  type: 'fruit',
  name: 'Apple',
};
