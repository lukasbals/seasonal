import { fireEvent } from '@testing-library/dom';
import React from 'react';
import SearchForm from '.';
import { render } from '../../testUtils';
import { SearchFormProps } from './SearchForm';

const onChangeSpy = jest.fn();

const defaultProps: SearchFormProps = {
  placeholder: 'Placeholder',
  value: 'value',
  onChange: onChangeSpy,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  return render(<SearchForm {...combinedProps} />);
};

describe('The SearchForm component', () => {
  afterEach(() => {
    onChangeSpy.mockRestore();
  });

  test('displays a placeholder if empty', () => {
    const { getByRole } = setup({ value: '' });

    expect(getByRole('textbox')).toHaveAttribute('placeholder');
    expect(getByRole('textbox').getAttribute('placeholder')).toBe(
      'Placeholder'
    );
  });

  test('triggers no onChange event if the form is submitted', () => {
    const { getByRole } = setup();

    fireEvent.submit(getByRole('textbox'));

    expect(onChangeSpy).toHaveBeenCalledTimes(0);
  });

  test('triggers an onChange event if a letter is typed in the form', () => {
    const { getByRole } = setup();

    fireEvent.input(getByRole('textbox'), { target: { value: 'a' } });

    expect(onChangeSpy).toHaveBeenCalledWith('a');
  });

  test('clears the input if the clear icon is clicked', () => {
    const { getByTestId } = setup();

    fireEvent.click(getByTestId('clear-icon'));

    expect(onChangeSpy).toHaveBeenCalledWith('');
  });
});
