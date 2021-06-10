import React from 'react';
import FoodCard from '.';
import { Food } from '../../models/Food';
import { render } from '../../testUtils';
import messagesDe from './messages.de';

const defaultProps: Food = {
  type: 'vegetable',
  asset: 'asset',
  name: 'Name',
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  return render(<FoodCard {...combinedProps} />);
};

describe('The FoodCard component', () => {
  test('displays vegetable if vegetable is the type of the food', () => {
    const { getByText } = setup();

    expect(getByText(messagesDe['foodCard.vegetable'])).toBeInTheDocument();
  });

  test('displays vegetable as default type if no type is given', () => {
    const { getByText } = setup({ type: undefined });

    expect(getByText(messagesDe['foodCard.vegetable'])).toBeInTheDocument();
  });

  test('displays fruit if fruit is the type of the food', () => {
    const { getByText } = setup({ type: 'fruit' });

    expect(getByText(messagesDe['foodCard.fruit'])).toBeInTheDocument();
  });

  test('displays an image with the asset as source', () => {
    const { getByRole } = setup();

    expect(getByRole('img')).toHaveAttribute('src');
    expect(getByRole('img').getAttribute('src')).toBe(defaultProps.asset);
  });

  test('displays an image with the name as the alt attribute', () => {
    const { getByRole } = setup();

    expect(getByRole('img')).toHaveAttribute('alt');
    expect(getByRole('img').getAttribute('alt')).toBe(defaultProps.name);
  });

  test('displays the name', () => {
    const { getByTestId } = setup();

    expect(getByTestId('test-name')).toHaveTextContent(defaultProps.name);
  });

  test('displays no name if no name is given', () => {
    const { getByTestId } = setup({ name: undefined });

    expect(getByTestId('test-name')).toHaveTextContent('');
  });
});
