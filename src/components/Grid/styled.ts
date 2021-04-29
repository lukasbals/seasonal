import styled from 'styled-components';
import {
  darkBlack,
  largeBreakpointCss,
  mediumBreakpointCss,
  primaryFontFamily,
  xLargeBreakpointCss,
  xxLargeBreakpointCss,
} from '../../constants/designTokens';

export const EmptyContainer = styled.div`
  text-align: center;
  padding-top: 20vh;

  & svg {
    width: 175px;
    height: 175px;
  }

  & button {
    margin-top: 24px;
  }

  ${mediumBreakpointCss} {
    & svg {
      width: 104px;
      height: 104px;
    }

    & button {
      margin-top: 16px;
    }
  }
`;

export const EmptyText = styled.div`
  margin-top: 48px;

  font-family: ${primaryFontFamily};
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;

  text-align: center;
  letter-spacing: -0.02em;

  color: ${darkBlack};

  ${mediumBreakpointCss} {
    margin-top: 24px;
    font-size: 22px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  column-gap: 24px;
  row-gap: 24px;

  ${xxLargeBreakpointCss} {
    grid-template-columns: repeat(5, 1fr);
  }

  ${xLargeBreakpointCss} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${largeBreakpointCss} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mediumBreakpointCss} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
