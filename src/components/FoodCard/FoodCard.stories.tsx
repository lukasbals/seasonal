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
  asset:
    'https://images.prismic.io/slicemachine-blank/30d6602b-c832-4379-90ef-100d32c5e4c6_selfie.png?auto=compress,format&rect=255,0,1536,1536&w=500&h=500',
  type: 'vegetable',
};

export const WithName = Template.bind({});
WithName.args = {
  asset:
    'https://images.prismic.io/slicemachine-blank/30d6602b-c832-4379-90ef-100d32c5e4c6_selfie.png?auto=compress,format&rect=255,0,1536,1536&w=500&h=500',
  type: 'fruit',
  name: 'Apple',
};
