import React, { useEffect } from 'react';
import useScrollDirection from '../../hooks/useScrollDirection';
import { ButtomDrawerContainer, DrawerContent } from './styled';

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
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (scrollDirection === 'up') {
      onChange(true);
    } else if (scrollDirection === 'down') {
      onChange(false);
    }
  }, [scrollDirection]);

  useEffect(() => {
    if (expanded) {
      window.scrollTo({ top: window.innerHeight });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [expanded]);

  return (
    <ButtomDrawerContainer
      expanded={expanded}
      onClick={() => {
        if (!expanded) {
          onChange(true);
        }
      }}
    >
      <DrawerContent>{children}</DrawerContent>
    </ButtomDrawerContainer>
  );
};
