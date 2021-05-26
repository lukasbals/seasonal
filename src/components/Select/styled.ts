import styled from 'styled-components';
import {
  darkBlack,
  largeBreakpointCss,
  mediumTransitionDuration,
  primaryTransitionEase,
  secondaryFontFamily,
  secondaryShadow,
  white,
} from '../../constants/designTokens';

const mobileSelectorHeight = '70px';

export const Label = styled.label`
  font-family: ${secondaryFontFamily};
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: ${darkBlack};
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;

  ${largeBreakpointCss} {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${mobileSelectorHeight};

    justify-content: center;

    border-top: solid 1px ${darkBlack}1a;
  }
`;

interface DropdownStateProps {
  dropdownOpen: boolean;
}

export const DropdownContainer = styled.div<DropdownStateProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 228px;
  z-index: 2;

  background: ${white};
  box-shadow: ${secondaryShadow};
  border-radius: 24px;

  padding: 16px 24px;

  position: absolute;

  transition: top ${primaryTransitionEase} ${mediumTransitionDuration},
    opacity ${primaryTransitionEase} ${mediumTransitionDuration};

  opacity: ${({ dropdownOpen }) => (dropdownOpen ? '1' : '0')};
  pointer-events: ${({ dropdownOpen }) => (dropdownOpen ? 'visible' : 'none')};
  top: ${({ dropdownOpen }) => (dropdownOpen ? '44px' : '40px')};

  right: 0;

  ${largeBreakpointCss} {
    top: ${({ dropdownOpen }) => (dropdownOpen ? '-24px' : '-20px')};

    left: 24px;

    width: calc(100% - 48px - 48px); /* 100% minus padding and margin */

    transform: translateY(-100%);

    padding: 8px 24px;
  }
`;

export const SelectButton = styled.button<DropdownStateProps>`
  background-color: transparent;
  border: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: ${secondaryFontFamily};
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: ${darkBlack};

  cursor: pointer;

  padding: 14px 0;
  margin-left: 4px;

  & svg {
    width: 20px;
    height: 20px;

    margin-left: 4px;

    transition: transform ${primaryTransitionEase} ${mediumTransitionDuration};

    transform: rotate(${({ dropdownOpen }) => (dropdownOpen ? '180deg' : '0')});
  }
`;

interface DropdownButtonProps {
  active: boolean;
}

export const DropdownButton = styled.button<DropdownButtonProps>`
  background-color: transparent;
  border: hidden;

  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-family: ${secondaryFontFamily};
  font-size: 14px;
  line-height: 17px;
  color: ${darkBlack};

  cursor: pointer;

  padding: 8px 0;

  ${largeBreakpointCss} {
    padding: 16px 0;
  }

  font-weight: ${({ active }) => (active ? '600' : '400')};

  & svg {
    width: 20px;
    height: 20px;
  }
`;
