import styled from 'styled-components';
import {
  darkBlack,
  mediumTransitionDuration,
  primaryShadow,
  secondaryFontFamily,
  white,
} from '../../constants/designTokens';

export const StyledInput = styled.input`
  width: calc(100% - 87px);
  margin: 0;
  padding: 20px 20px 20px 64px;

  font-family: ${secondaryFontFamily};
  font-size: 16px;
  line-height: 100%;
  color: ${darkBlack};

  border-radius: 12px;
  border: 1.5px solid ${white};
  background: ${white};
  box-shadow: ${primaryShadow};

  transition: border ease ${mediumTransitionDuration};

  &:focus {
    border: 1.5px solid ${darkBlack};
    outline: none;
  }

  &::placeholder {
    color: ${darkBlack};
  }
`;

const iconSize = '20px';

export const StyledForm = styled.form`
  position: relative;
  width: 400px;

  & svg:first-of-type {
    position: absolute;
    width: ${iconSize};
    height: ${iconSize};
    left: 24px;
    top: 20px;
  }

  & svg:last-of-type {
    position: absolute;
    width: ${iconSize};
    height: ${iconSize};

    right: 24px;
    top: 20px;

    cursor: pointer;
    opacity: 0;
    transition: opacity ease ${mediumTransitionDuration};
  }

  &.clear-icon-visible svg:last-of-type {
    opacity: 1;
  }
`;
