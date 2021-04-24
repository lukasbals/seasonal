import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Grid from '../../components/Grid';
import MonthSelect from '../../components/MonthSelect';
import SearchForm from '../../components/SearchForm';

export const GridScreen: React.FC = () => {
  const { formatMessage } = useIntl();

  const [searchValue, setSearchValue] = useState('');

  return (
    <>
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
      <Grid
        items={[]}
        emptyText={
          <FormattedMessage
            id="gridScreen.nothingFoundMessage"
            values={{ searchValue }}
          />
        }
        emptyActionText={<FormattedMessage id="gridScreen.resetSearch" />}
        onEmptyAction={() => setSearchValue('')}
      />
    </>
  );
};
