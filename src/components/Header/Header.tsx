import React from 'react';
import { largeBreakpoint } from '../../constants/designTokens';
import { HeaderSection, StyledHeader, BurgerContainer } from './styled';

export interface HeaderProps {
  heading: string | JSX.Element;
  left?: string | JSX.Element;
  right?: string | JSX.Element;
  expanded?: boolean;
  mobileIcon?: string | JSX.Element;
  onMobileIconClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  heading,
  left = '',
  right = '',
  expanded = false,
  mobileIcon = '',
  onMobileIconClick,
}: HeaderProps) => {
  const mobile = window.innerWidth < largeBreakpoint;

  return (
    <StyledHeader expanded={expanded}>
      <HeaderSection>{!mobile && left}</HeaderSection>
      <HeaderSection>{heading}</HeaderSection>
      <HeaderSection>
        {!mobile ? (
          right
        ) : (
          <BurgerContainer expanded={expanded} onClick={onMobileIconClick}>
            {mobileIcon}
          </BurgerContainer>
        )}
      </HeaderSection>
    </StyledHeader>
  );
};
