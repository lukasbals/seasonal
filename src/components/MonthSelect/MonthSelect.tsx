import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import months from '../../constants/months';
import { Month } from '../../models/Month';
import { MonthSelectButton, MonthSelectContainer } from './styled';
export interface MonthSelectProps {
  onSelect: (month: Month) => void;
}

export const MonthSelect: React.FC<MonthSelectProps> = ({
  onSelect,
}: MonthSelectProps) => {
  const { formatMessage } = useIntl();

  const [value, setValue] = useState(new Date().getUTCMonth());

  return (
    <MonthSelectContainer>
      {months.map((month, index) => (
        <MonthSelectButton
          key={month}
          className={index === value ? 'active' : ''}
          onClick={() => {
            onSelect(month);
            setValue(index);
          }}
          aria-label={formatMessage({ id: month })}
        >
          <FormattedMessage id={month} />
        </MonthSelectButton>
      ))}
    </MonthSelectContainer>
  );
};
