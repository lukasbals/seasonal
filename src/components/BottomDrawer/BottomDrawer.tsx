import React from 'react';
import { ButtomDrawerContainer, DrawerContent, PageBackground } from './styled';

export interface BottomDrawerProps {
  children: JSX.Element;
  expanded: boolean;
  onChange: (newState: boolean) => void;
}

export const BottomDrawer: React.FC<BottomDrawerProps> = ({
  children,
  expanded,
  onChange,
}: BottomDrawerProps) => {
  return (
    <PageBackground className={expanded ? 'expanded' : ''}>
      <ButtomDrawerContainer
        className={expanded ? 'expanded' : ''}
        onClick={() => {
          if (!expanded) {
            onChange(true);
          }
        }}
      >
        <DrawerContent>{children}</DrawerContent>
      </ButtomDrawerContainer>
    </PageBackground>
  );
};
