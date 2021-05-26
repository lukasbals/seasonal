import styled from 'styled-components';
import {
  darkBlack,
  largeBreakpointCss,
  mediumGreen,
  primaryFontFamily,
  primaryGreen,
  secondaryFontFamily,
} from '../../constants/designTokens';

export const Heading1 = styled.h1`
  font-family: ${primaryFontFamily};
  color: ${primaryGreen};
  font-weight: 700;
  font-size: 72px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.02em;
  margin: 0 0 12px 0;

  ${largeBreakpointCss} {
    font-size: 37px;
  }
`;

export const Heading2 = styled.h2`
  font-family: ${primaryFontFamily};
  font-weight: 700;
  font-size: 40px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.02em;

  margin: 0 0 16px 0;

  color: ${darkBlack};

  ${largeBreakpointCss} {
    font-size: 28px;
  }
`;

export const SubHeading = styled.p`
  font-family: ${secondaryFontFamily};
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: ${mediumGreen};
  margin: 0 0 32px 0;

  ${largeBreakpointCss} {
    font-size: 14px;
  }
`;

export const Text = styled.p`
  font-family: ${secondaryFontFamily};
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  text-align: center;

  color: ${mediumGreen};

  ${largeBreakpointCss} {
    font-size: 14px;
  }
`;
