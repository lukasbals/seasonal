import React from 'react';
import BadgeContainer from '.';
import { render } from '../../testUtils';
import { BadgeContainerProps } from './BadgeContainer';

const defaultProps: BadgeContainerProps = {
  badge: <div>Badge</div>,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  return render(<BadgeContainer {...combinedProps} />);
};

describe('The BadgeContainer component', () => {
  test('displays the badge element', () => {
    const { getByText } = setup();

    expect(getByText('Badge')).toBeInTheDocument();
  });
});
