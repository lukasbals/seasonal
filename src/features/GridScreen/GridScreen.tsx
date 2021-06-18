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
    const [isMobile, setIsMobile] = useState(false);

    const handleSearch = (searchTerm: string) => {
      setSearchValue(searchTerm);
      foodStore.searchFood(searchTerm);
    };

    const handleContributionRequest = () => {
      window.location.href = `mailto:tobiassutterluety@gmail.com?subject=${formatMessage(
        { id: 'gridScreen.contributeFood' }
      )}`;
    };

    useEffect(() => {
      foodStore.fetchFood();
    }, []);

    useEffect(() => {
      if (window.innerWidth < mediumBreakpoint) {
        setIsMobile(true);
      }
    }, []);

    const isSearching = foodStore.searchTerm !== '';

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
              isSearching ? (
                <FormattedMessage
                  id="gridScreen.nothingFoundMessage"
                  values={{ searchValue }}
                />
              ) : (
                <FormattedMessage id="gridScreen.noSeasonalFoods" />
              )
            }
            emptyActionText={
              isSearching
                ? formatMessage({ id: 'gridScreen.resetSearch' })
                : formatMessage({ id: 'gridScreen.contributeFood' })
            }
            onEmptyAction={
              isSearching
                ? () => handleSearch('')
                : () => handleContributionRequest()
            }
            loading={foodStore.fetchingFood}
          />
          <Gap />
          {isMobile && (
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
