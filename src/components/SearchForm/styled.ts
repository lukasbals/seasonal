import styled from 'styled-components';
import {
  darkBlack,
  darkGrey,
  mediumBorderRadius,
  mediumTransitionDuration,
  primaryShadow,
  primaryTransitionEase,
  secondaryFontFamily,
  white,
} from '../../constants/designTokens';

export const StyledInput = styled.input`
  width: calc(100% - 124px);
  margin: 0;
  padding: 28px 64px 28px 64px;

  font-family: ${secondaryFontFamily};
  font-size: 16px;
  line-height: 16px;
  height: 16px;
  color: ${darkBlack};

  border-radius: ${mediumBorderRadius};
  border: 1.5px solid ${white};
  background: ${white};
  box-shadow: ${primaryShadow};

  transition: border ${primaryTransitionEase} ${mediumTransitionDuration};

  &::placeholder {
    color: ${darkGrey};
    transition: color ${primaryTransitionEase} ${mediumTransitionDuration};
  }

  &:focus {
    border: 1.5px solid ${darkBlack};
    outline: none;

    &::placeholder {
      color: ${darkBlack};
    }
  }
`;

const iconSize = '24px';

export const StyledForm = styled.form`
  position: relative;
  width: 100%;

  & svg:first-of-type {
    position: absolute;
    width: ${iconSize};
    height: ${iconSize};
    left: 24px;
    top: 24px;
  }

  & svg:last-of-type {
    position: absolute;
    width: ${iconSize};
    height: ${iconSize};

    right: 24px;
    top: 24px;

    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: opacity ${primaryTransitionEase} ${mediumTransitionDuration};
  }

  &.clear-icon-visible svg:last-of-type {
    opacity: 1;
    pointer-events: all;
  }
`;
