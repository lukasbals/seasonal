import styled from 'styled-components';
import {
  largeBreakpointCss,
  mediumBreakpointCss,
  xLargeBreakpointCss,
  xxLargeBreakpointCss,
} from '../../constants/designTokens';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  column-gap: 24px;
  row-gap: 24px;

  ${xxLargeBreakpointCss} {
    grid-template-columns: auto auto auto auto auto;
  }

  ${xLargeBreakpointCss} {
    grid-template-columns: auto auto auto auto;
  }

  ${largeBreakpointCss} {
    grid-template-columns: auto auto auto;
  }

  ${mediumBreakpointCss} {
    grid-template-columns: auto auto;
  }
`;
