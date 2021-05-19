import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Grid from '../../components/Grid';
import MonthSelect from '../../components/MonthSelect';
import SearchForm from '../../components/SearchForm';
import { mediumBreakpoint } from '../../constants/designTokens';
import FoodStore from '../../FoodStore';
import { Month } from '../../models/Month';
import {
  Gap,
  GridScreenContainer,
  GridScreenHeader,
  ScrollContainer,
} from './styled';

interface GridScreenProps {
  foodStore: FoodStore;
}

export const GridScreen: React.FC<GridScreenProps> = observer(
  ({ foodStore }: GridScreenProps) => {
    const { formatMessage } = useIntl();

    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (searchTerm: string) => {
      setSearchValue(searchTerm);
      foodStore.searchFood(searchTerm);
    };

    useEffect(() => {
      foodStore.fetchFood();
    }, []);

    return (
      <GridScreenContainer>
        <GridScreenHeader>
          <SearchForm
            placeholder={formatMessage({ id: 'gridScreen.searchPlaceholder' })}
            value={searchValue}
            onChange={handleSearch}
          />
          <MonthSelect
            onSelect={(month: Month) => foodStore.setSelectedMonth(month)}
          />
        </GridScreenHeader>
        <Gap />

        <ScrollContainer>
          <Grid
            items={foodStore.displayedFood}
            emptyText={
              <FormattedMessage
                id="gridScreen.nothingFoundMessage"
                values={{ searchValue }}
              />
            }
            emptyActionText={<FormattedMessage id="gridScreen.resetSearch" />}
            onEmptyAction={() => handleSearch('')}
            loading={foodStore.fetchingFood}
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
  }
);
