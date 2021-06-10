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
   * Icon to show in the button
   */
  icon?: JSX.Element | null;
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
  icon = null,
}: ButtonProps) => {
  return type === 'primary' ? (
    <PrimaryButton
      data-testid="primary-button"
      type="button"
      className={`seasonal-button--${size}`}
      onClick={onClick}
    >
      {icon && icon}
      {label}
    </PrimaryButton>
  ) : (
    <LinkButton data-testid="link-button" type="button" onClick={onClick}>
      {label}
    </LinkButton>
  );
};
