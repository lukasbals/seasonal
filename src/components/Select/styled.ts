import styled from 'styled-components';
import {
  darkBlack,
  mediumTransitionDuration,
  primaryTransitionEase,
  secondaryFontFamily,
  secondaryShadow,
  white,
} from '../../constants/designTokens';

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
`;

interface DropdownStateProps {
  dropdownOpen: boolean;
}

export const DropdownContainer = styled.div<DropdownStateProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 228px;

  background: ${white};
  box-shadow: ${secondaryShadow};
  border-radius: 24px;

  padding: 24px;

  position: absolute;

  transition: top ${primaryTransitionEase} ${mediumTransitionDuration},
    opacity ${primaryTransitionEase} ${mediumTransitionDuration};

  opacity: ${({ dropdownOpen }) => (dropdownOpen ? '1' : '0')};
  pointer-events: ${({ dropdownOpen }) => (dropdownOpen ? 'visible' : 'none')};
  top: ${({ dropdownOpen }) => (dropdownOpen ? '44px' : '40px')};

  left: 0;
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

  margin-top: 16px;
  &:first-of-type {
    margin-top: 0;
  }

  font-weight: ${({ active }) => (active ? '600' : '400')};

  & svg {
    width: 20px;
    height: 20px;
  }
`;
