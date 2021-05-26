import styled from 'styled-components';
import {
  white,
  secondaryShadow,
  secondaryTransitionEase,
  longTransitionDuration,
  black,
  largeBreakpointCss,
} from '../../constants/designTokens';

interface SideDrawerContainerProps {
  expanded: boolean;
}

export const PageBackground = styled.div<SideDrawerContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  background-color: ${({ expanded }) =>
    expanded ? `${black}CC` : 'transparent'};
  pointer-events: none;

  transition: ${secondaryTransitionEase} ${longTransitionDuration}
    background-color;
`;

const drawerWidthDesktop = 576;

export const SideDrawerContainer = styled.div<SideDrawerContainerProps>`
  position: absolute;
  top: 40px;
  left: ${({ expanded }) => (expanded ? 40 : -drawerWidthDesktop - 200)}px;
  bottom: 40px;

  width: ${drawerWidthDesktop}px;

  padding: 56px;

  background-color: ${white};
  box-shadow: ${secondaryShadow};
  border-radius: 24px;

  transition: left ${secondaryTransitionEase} ${longTransitionDuration},
    opacity ${secondaryTransitionEase} ${longTransitionDuration};

  pointer-events: visible;

  ${largeBreakpointCss} {
    top: 0;
    left: 0;
    width: calc(100% - 48px); /* Full width minus padding */
    height: 100%;

    border-radius: 0;
    padding: 0 24px;

    opacity: ${({ expanded }) => (expanded ? 1 : 0)};
    pointer-events: ${({ expanded }) => (expanded ? 'visible' : 'none')};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: ${-40 - 48}px;
  top: 50%;
  transform: translateY(-50%);

  width: 48px;
  height: 48px;

  border: hidden;
  border-radius: 24px;
  background-color: ${white};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  & svg {
    width: 16px;
    height: 16px;
  }

  ${largeBreakpointCss} {
    display: none;
  }
`;
