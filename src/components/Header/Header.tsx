import React from 'react';
import Burger from '../../assets/Burger';
import { largeBreakpoint } from '../../constants/designTokens';
import { HeaderSection, StyledHeader, BurgerContainer } from './styled';

export interface HeaderProps {
  heading: string | JSX.Element;
  left?: string | JSX.Element;
  right?: string | JSX.Element;
  expanded?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  heading,
  left = '',
  right = '',
  expanded = false,
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
          <BurgerContainer expanded={expanded}>
            <Burger />
          </BurgerContainer>
        )}
      </HeaderSection>
    </StyledHeader>
  );
};
