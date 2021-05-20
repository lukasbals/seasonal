import styled from 'styled-components';
import {
  darkBlack,
  mediumBreakpointCss,
  primaryGreen,
  secondaryFontFamily,
  white,
} from '../../constants/designTokens';

export const PrimaryButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  border: hidden;
  border-radius: 1000px;
  font-family: ${secondaryFontFamily};
  cursor: pointer;
  letter-spacing: 0.6px;

  &.seasonal-button--large {
    background-color: ${primaryGreen};

    padding: 24px 42px;

    font-weight: bold;
    font-size: 15px;
    line-height: 100%;
    color: ${white};

    box-shadow: 0px 2px 0px #28813f;
  }

  &.seasonal-button--small {
    background-color: transparent;

    padding: 1.5px 4px;

    font-size: 14px;
    line-height: 17px;
    color: ${darkBlack};
  }

  & svg {
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }
`;

export const LinkButton = styled.button`
  background-color: transparent;
  border: hidden;

  padding: 2px 0;

  border-bottom: 1px solid ${darkBlack};

  font-family: ${secondaryFontFamily};
  font-size: 16px;
  line-height: 100%;

  color: ${darkBlack};

  cursor: pointer;

  ${mediumBreakpointCss} {
    font-size: 14px;
    line-height: 150%;
  }
`;
