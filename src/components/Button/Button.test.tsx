import React from 'react';
import Button from '.';
import { render, fireEvent } from '../../testUtils';
import { ButtonProps } from './Button';

const defaultProps: ButtonProps = {
  label: 'Label',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  return render(<Button {...combinedProps} />);
};

describe('The Button component', () => {
  test('displays a button with the given label', () => {
    const { getByRole } = setup();

    expect(getByRole('button')).toHaveTextContent('Label');
  });

  test('calls the onClick action if the button is clicked', () => {
    const onClickSpy = jest.fn();
    const { getByRole } = setup({ onClick: onClickSpy });

    fireEvent.click(getByRole('button'));

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  test('displays an icon if an icon is passed', () => {
    const { getByText } = setup({ icon: <div>icon</div> });

    expect(getByText('icon')).toBeInTheDocument();
  });

  test('displys a primary button if the passed type is primary', () => {
    const { getByTestId } = setup({ type: 'primary' });

    expect(getByTestId('primary-button')).toBeInTheDocument();
  });

  test('displys a link button if the passed type is link', () => {
    const { getByTestId } = setup({ type: 'link' });

    expect(getByTestId('link-button')).toBeInTheDocument();
  });
});
