import React, { useEffect, useState } from 'react';
import useResizeEventListener from '../../hooks/useResizeEventListener';
import useScrollPosition from '../../hooks/useScrollPosition';
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
  const [transitionInProgress, setTransitionInProgress] = useState(false);

  useResizeEventListener();
  const scrollPosition = useScrollPosition(expanded);

  const setTranisitionInProgressForTime = (time: number) => {
    setTransitionInProgress(true);
    setTimeout(() => {
      setTransitionInProgress(false);
    }, time);
  };

  useEffect(() => {
    if (!transitionInProgress) {
      if (scrollPosition === 'top') {
        onChange(true);
      } else if (scrollPosition === 'bottom') {
        onChange(false);
      }
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (expanded && scrollPosition === 'bottom') {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      setTranisitionInProgressForTime(1000);
    } else if (!expanded && scrollPosition === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTranisitionInProgressForTime(1000);
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
