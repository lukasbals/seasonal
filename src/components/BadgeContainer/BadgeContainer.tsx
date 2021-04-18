import React from 'react';
import { StyledBadgeContainer } from './styled';

export interface BadgeContainerProps {
  badge: JSX.Element;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  rotate?: number;
}

export const BadgeContainer: React.FC<BadgeContainerProps> = ({
  badge,
  top,
  right,
  bottom,
  left,
  rotate,
}: BadgeContainerProps) => {
  return (
    <StyledBadgeContainer
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      rotate={rotate}
    >
      {badge}
    </StyledBadgeContainer>
  );
};
