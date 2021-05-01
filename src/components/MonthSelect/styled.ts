import styled from 'styled-components';
import {
  black,
  darkBlack,
  lightGreen,
  mediumBorderRadius,
  mediumBreakpointCss,
  mediumTransitionDuration,
  primaryGreen,
  primaryShadow,
  primaryTransitionEase,
  secondaryFontFamily,
  white,
} from '../../constants/designTokens';

export const MonthSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: row;

  overflow: scroll;

  background-color: ${white};

  box-shadow: ${primaryShadow};
  border-radius: ${mediumBorderRadius};

  padding: 22px 28px 18px 28px;

  ${mediumBreakpointCss} {
    box-shadow: none;
    border-bottom: 1px solid ${darkBlack}1A;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const MonthSelectButton = styled.button`
  cursor: pointer;

  margin: 0 4px;
  padding: 8px;
  border-radius: ${mediumBorderRadius};
  border: hidden 0;
  background-color: transparent;

  font-size: 16px;
  line-height: 100%;
  color: ${black};
  font-family: ${secondaryFontFamily};
  transition: background-color ${primaryTransitionEase}
      ${mediumTransitionDuration},
    color ${primaryTransitionEase} ${mediumTransitionDuration};

  &:hover {
    background-color: ${lightGreen};
  }

  &.active {
    background-color: ${primaryGreen};

    color: ${white};
  }
`;
