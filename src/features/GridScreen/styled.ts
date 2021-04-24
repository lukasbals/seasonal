import styled from 'styled-components';
import { mediumBreakpointCss } from '../../constants/designTokens';

export const GridScreenContainer = styled.div`
  position: relative;
  height: 100%;
`;

const inputHeight = '75px';

export const GridScreenHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 24px;

  ${mediumBreakpointCss} {
    grid-template-columns: auto;

    & form {
      position: fixed;

      bottom: 24px;
      left: 8px;
      width: calc(100% - 24px);
    }
  }
`;

export const Gap = styled.div`
  width: 100%;
  height: 40px;

  ${mediumBreakpointCss} {
    height: 16px;
  }
`;

export const ScrollContainer = styled.div`
  overflow-y: scroll;
  height: calc(100% - 40px - ${inputHeight});

  ${mediumBreakpointCss} {
    margin: 0 16px;
    height: calc(100% - 16px - ${inputHeight});
  }
`;
