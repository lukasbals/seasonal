import React from 'react';
import Close from '../../assets/Close';
import { CloseButton, PageBackground, SideDrawerContainer } from './styled';

export interface SideDrawerProps {
  children: JSX.Element;
  expanded: boolean;
  onChange: (newState: boolean) => void;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({
  children,
  expanded,
  onChange,
}: SideDrawerProps) => {
  return (
    <PageBackground expanded={expanded} onClick={() => onChange(false)}>
      <SideDrawerContainer expanded={expanded}>
        <CloseButton onClick={() => onChange(false)}>
          <Close />
        </CloseButton>
        {children}
      </SideDrawerContainer>
    </PageBackground>
  );
};
