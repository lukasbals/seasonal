import styled from 'styled-components';
import {
  bigBorderRadius,
  bigMaxWidth,
  mediumTransitionDuration,
  secondaryShadow,
  white,
} from '../../constants/designTokens';

export const PageBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;

  background-color: transparent;

  overflow: hidden;
`;

const gapTopExpanded = '96px';
const drawerVisibleUnexpanded = '60px';

const drawerPaddingTop = '42px';
const drawerPaddingSide = '40px';

export const ButtomDrawerContainer = styled.div`
  position: absolute;

  top: calc(100% - ${drawerVisibleUnexpanded});

  /* Display center */
  left: 50%;
  transform: translate(-50%, 0);

  width: calc(100% - 48px);
  max-width: calc(${bigMaxWidth} + ${drawerPaddingSide} + ${drawerPaddingSide});

  height: calc(100% - ${gapTopExpanded});

  border-top-left-radius: ${bigBorderRadius};
  border-top-right-radius: ${bigBorderRadius};
  box-shadow: ${secondaryShadow};

  background-color: ${white};

  pointer-events: visible;
  cursor: pointer;

  transition: top ease ${mediumTransitionDuration};

  &.expanded {
    top: ${gapTopExpanded};

    cursor: auto;
  }
`;

export const DrawerContent = styled.div`
  margin: ${drawerPaddingTop} ${drawerPaddingSide} 0 ${drawerPaddingSide};

  height: calc(100% - ${drawerPaddingTop});
`;
