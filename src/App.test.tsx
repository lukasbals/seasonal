import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const setup = () => {
  return render(<App />);
};

describe('The App component', () => {
  test('renders a headline', () => {
    const { getAllByRole } = setup();

    expect(getAllByRole('heading')).toHaveLength(2);
  });
});
