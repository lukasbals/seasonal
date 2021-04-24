import React from 'react';
import { LinkButton, PrimaryButton } from './styled';

export interface ButtonProps {
  /**
   * How large should the button be?
   */
  size?: 'small' | 'large';
  /**
   * Which type should the button have?
   */
  type?: 'primary' | 'link';
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
  type = 'primary',
  label,
  onClick,
}: ButtonProps) => {
  return type === 'primary' ? (
    <PrimaryButton
      type="button"
      className={`seasonal-button--${size}`}
      onClick={onClick}
    >
      {label}
    </PrimaryButton>
  ) : (
    <LinkButton type="button" onClick={onClick}>
      {label}
    </LinkButton>
  );
};
