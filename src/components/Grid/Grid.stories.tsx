import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import { Grid, GridProps } from './Grid';
import { IntlProvider } from 'react-intl';
import messagesDe from '../FoodCard/messages.de';
import Food from '../../models/Food';
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
    (itemId): Food => ({
      name: 'Name',
      type: 'fruit',
      asset: <div>Hello</div>,
      id: `id-${itemId}`,
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
