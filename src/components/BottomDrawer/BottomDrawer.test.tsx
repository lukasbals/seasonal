import React from 'react';
import BottomDrawer from '.';
import { render, fireEvent } from '../../testUtils';
import { BottomDrawerProps } from './BottomDrawer';

const onChangeSpy = jest.fn();
const scrollToSpy = jest.fn();

const defaultProps: BottomDrawerProps = {
  children: <div>Children</div>,
  expanded: false,
  onChange: onChangeSpy,
};

const setup = (props = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  return render(<BottomDrawer {...combinedProps} />);
};

describe('The BottomDrawer component', () => {
  beforeAll(() => {
    window.scrollTo = scrollToSpy;
  });

  beforeEach(() => {
    Object.defineProperty(window, 'pageYOffset', { value: 0 });
  });

  afterEach(() => {
    scrollToSpy.mockRestore();
    onChangeSpy.mockRestore();
  });

  test('displays the children element in a drawer', () => {
    const { getByText } = setup();

    expect(getByText('Children')).toBeInTheDocument();
  });

  test('expands the drawer if the drawer is clicked', () => {
    Object.defineProperty(window, 'pageYOffset', { value: 0 });
    const { getByText, rerender } = setup();

    fireEvent.click(getByText('Children'));

    expect(onChangeSpy).toHaveBeenCalledWith(true);
    rerender(<BottomDrawer {...defaultProps} expanded={true} />);

    expect(scrollToSpy).toHaveBeenCalledTimes(1);
    expect(scrollToSpy).toHaveBeenCalledWith({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  });

  test('unexpands if the drawer is open and the expanded props is set to false', () => {
    Object.defineProperty(window, 'pageYOffset', {
      value: 100000 /* Max value */,
    });
    const { rerender } = setup({ expanded: true });

    expect(onChangeSpy).toHaveBeenCalledTimes(1);
    expect(onChangeSpy).toHaveBeenCalledWith(true);

    rerender(<BottomDrawer {...defaultProps} expanded={false} />);

    expect(scrollToSpy).toHaveBeenCalledTimes(1);
    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
