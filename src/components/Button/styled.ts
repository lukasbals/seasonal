import styled from 'styled-components';
import {
  primaryGreen,
  secondaryFontFamily,
  secondaryGreen,
  white,
} from '../../constants/designTokens';

export const StyledButton = styled.button`
  border: hidden;
  border-radius: 1000px;
  font-family: ${secondaryFontFamily};
  cursor: pointer;

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
    background-color: ${secondaryGreen};

    padding: 8px 24px;

    font-size: 14px;
    line-height: 17px;
    color: ${primaryGreen};

    border: 1.5px solid ${primaryGreen};
  }
`;
