import { fireEvent } from '@testing-library/dom';
import React from 'react';
import MonthSelect from '.';
import { render } from '../../testUtils';
import messagesDe from './messages.de';
import { MonthSelectProps } from './MonthSelect';

const onSelectSpy = jest.fn();

const defaultProps: MonthSelectProps = {
  onSelect: onSelectSpy,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  return render(<MonthSelect {...combinedProps} />);
};

describe('The MonthSelect component', () => {
  afterEach(() => {
    onSelectSpy.mockRestore();
  });

  test('displays all months of the year', () => {
    const { getAllByRole } = setup();

    expect(getAllByRole('button').length).toBe(12);
  });

  test('calls the onSelect event if a month is clicked', () => {
    const { getByText } = setup();

    fireEvent.click(getByText(messagesDe.jan));

    expect(onSelectSpy).toHaveBeenCalledWith('jan');
  });
});
