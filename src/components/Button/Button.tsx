import React from 'react';
import { StyledButton } from './styled';

export interface ButtonProps {
  /**
   * How large should the button be?
   */
  size?: 'small' | 'large';
  /**
   * Button contents
   */
  label: string | JSX.Element;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  size = 'large',
  label,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      className={`seasonal-button--${size}`}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};
