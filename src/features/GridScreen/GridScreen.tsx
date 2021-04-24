import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Grid from '../../components/Grid';
import MonthSelect from '../../components/MonthSelect';
import SearchForm from '../../components/SearchForm';
import { mediumBreakpoint } from '../../constants/designTokens';
import Food from '../../models/Food';
import {
  Gap,
  GridScreenContainer,
  GridScreenHeader,
  ScrollContainer,
} from './styled';

const itemIds = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
];

export const GridScreen: React.FC = () => {
  const { formatMessage } = useIntl();

  const [searchValue, setSearchValue] = useState('');

  return (
    <GridScreenContainer>
      <GridScreenHeader>
        <SearchForm
          placeholder={formatMessage({ id: 'gridScreen.searchPlaceholder' })}
          value={searchValue}
          onChange={setSearchValue}
        />
        <MonthSelect
          onSelect={(month: string) => {
            console.log('Select:', month);
          }}
        />
      </GridScreenHeader>
      <Gap />
      <ScrollContainer>
        <Grid
          items={itemIds.map(
            (itemId): Food => ({
              name: `Name ${itemId}`,
              type: 'fruit',
              asset: <div>Hello</div>,
              id: `id-${itemId}`,
            })
          )}
          emptyText={
            <FormattedMessage
              id="gridScreen.nothingFoundMessage"
              values={{ searchValue }}
            />
          }
          emptyActionText={<FormattedMessage id="gridScreen.resetSearch" />}
          onEmptyAction={() => setSearchValue('')}
        />
        <Gap />
        {window.innerWidth < mediumBreakpoint && (
          <>
            <Gap />
            <Gap />
            <Gap />
            <Gap />
            <Gap />
            <Gap />
          </>
        )}
      </ScrollContainer>
    </GridScreenContainer>
  );
};
