import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import { Grid, GridProps } from './Grid';
import { IntlProvider } from 'react-intl';
import messagesDe from '../FoodCard/messages.de';
import { FoodWithMeta } from '../../models/Food';
import { bigMaxWidth } from '../../constants/designTokens';

export default {
  title: 'Component/Grid',
  component: Grid,
} as Meta;

const itemIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const GridContainer = styled.div`
  max-width: ${bigMaxWidth};
  margin: 0 auto;
`;

const Template: Story<GridProps> = (args) => (
  <IntlProvider locale="de" messages={messagesDe}>
    <GridContainer>
      <Grid {...args} />
    </GridContainer>
  </IntlProvider>
);

export const WithItems = Template.bind({});
WithItems.args = {
  items: itemIds.map(
    (itemId): FoodWithMeta => ({
      name: 'Name',
      type: 'fruit',
      asset:
        'https://images.prismic.io/slicemachine-blank/30d6602b-c832-4379-90ef-100d32c5e4c6_selfie.png?auto=compress,format&rect=255,0,1536,1536&w=500&h=500',
      id: `id-${itemId}`,
      month: 'apr',
    })
  ),
  emptyText: 'Nothing found',
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
  emptyText: 'Nothing found',
};

export const EmptyWithAction = Template.bind({});
EmptyWithAction.args = {
  items: [],
  emptyText: 'Nothing found',
  emptyActionText: 'Reset search',
  onEmptyAction: () => console.log('On empty action clicked'),
};

export const Loading = Template.bind({});
Loading.args = {
  items: [],
  emptyText: 'Nothing found',
  loading: true,
};
