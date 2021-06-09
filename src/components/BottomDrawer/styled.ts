import styled from 'styled-components';
import {
  bigBorderRadius,
  bigMaxWidth,
  largeBreakpointCss,
  longTransitionDuration,
  secondaryShadow,
  secondaryTransitionEase,
  smallBreakpointCss,
  white,
} from '../../constants/designTokens';

const gapTopExpanded = '96px';
const drawerVisibleUnexpanded = '60px';

const gapTopExpandedMobile = '76px';
const drawerVisibleUnexpandedMobile = '40px';

const drawerPaddingTop = '42px';
const drawerPaddingSide = '40px';

interface ExpandedProp {
  expanded: boolean;
}

export const ButtomDrawerContainer = styled.div<ExpandedProp>`
  position: absolute;

  top: calc(100% - ${drawerVisibleUnexpanded});

  /* Display center */
  left: 50%;
  transform: translate(-50%, 0);

  width: calc(100% - 48px);
  max-width: calc(${bigMaxWidth} + ${drawerPaddingSide} + ${drawerPaddingSide});

  height: calc(100% - ${gapTopExpanded}); /* Fallback */
  height: calc(var(--vh, 1vh) * 100 - ${gapTopExpanded});

  border-top-left-radius: ${bigBorderRadius};
  border-top-right-radius: ${bigBorderRadius};
  box-shadow: ${secondaryShadow};

  background-color: ${white};

  pointer-events: visible;
  cursor: ${({ expanded }) => (expanded ? 'auto' : 'pointer')};

  transition: top ${secondaryTransitionEase} ${longTransitionDuration};

  ${largeBreakpointCss} {
    top: calc(100% - ${drawerVisibleUnexpandedMobile});
    height: caslc(100% - ${gapTopExpandedMobile}); /* Fallback */
    height: calc(var(--vh, 1vh) * 100 - ${gapTopExpandedMobile});
  }

  ${smallBreakpointCss} {
    width: calc(100% - 16px);
  }
`;

export const DrawerContent = styled.div`
  margin: ${drawerPaddingTop} ${drawerPaddingSide} 0 ${drawerPaddingSide};

  height: calc(100% - ${drawerPaddingTop});

  ${smallBreakpointCss} {
    margin: 0;
    height: 100%;
  }
`;
