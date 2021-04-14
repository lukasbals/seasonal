import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { MonthSelectButton, MonthSelectContainer } from './styled';

export interface MonthSelectProps {
  onSelect: (month: string) => void;
}

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

export const MonthSelect: React.FC<MonthSelectProps> = ({
  onSelect,
}: MonthSelectProps) => {
  const [value, setValue] = useState(0);

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
        >
          <FormattedMessage id={month} />
        </MonthSelectButton>
      ))}
    </MonthSelectContainer>
  );
};
