import React, { useEffect, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < largeBreakpoint) {
      setIsMobile(true);
    }
  }, []);

  return (
    <StyledHeader expanded={expanded}>
      <HeaderSection>{!isMobile && left}</HeaderSection>
      <HeaderSection>{heading}</HeaderSection>
      <HeaderSection>
        {!isMobile ? (
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
