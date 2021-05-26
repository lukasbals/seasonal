import styled from 'styled-components';
import { largeBreakpointCss } from '../../constants/designTokens';

interface StyledBadgeContainerProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  rotate?: number;
  position: 'absolute' | 'fixed';
}
export const StyledBadgeContainer = styled.div<StyledBadgeContainerProps>`
  width: 165px;
  height: 165px;
  position: ${({ position }) => position};

  top: ${({ top }) => top}px;
  right: ${({ right }) => right}px;
  bottom: ${({ bottom }) => bottom}px;
  left: ${({ left }) => left}px;

  transform: rotate(${({ rotate }) => rotate}deg);

  ${largeBreakpointCss} {
    width: 105px;
    height: 105px;
  }
`;
