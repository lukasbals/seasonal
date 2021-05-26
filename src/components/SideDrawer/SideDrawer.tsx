import React from 'react';
import Close from '../../assets/Close';
import Logo from '../../assets/Logo';
import { largeBreakpoint } from '../../constants/designTokens';
import Header from '../Header';
import { CloseButton, PageBackground, SideDrawerContainer } from './styled';

export interface SideDrawerProps {
  children: JSX.Element;
  expanded: boolean;
  onChange: (newState: boolean) => void;
  bottomDrawerExpanded?: boolean;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({
  children,
  expanded,
  onChange,
  bottomDrawerExpanded = false,
}: SideDrawerProps) => {
  return (
    <PageBackground expanded={expanded}>
      <SideDrawerContainer expanded={expanded}>
        {window.innerWidth < largeBreakpoint && (
          <Header
            heading={<Logo />}
            mobileIcon={<Close />}
            onMobileIconClick={() => onChange(false)}
            expanded={bottomDrawerExpanded}
          />
        )}
        <CloseButton onClick={() => onChange(false)}>
          <Close />
        </CloseButton>
        {children}
      </SideDrawerContainer>
    </PageBackground>
  );
};
