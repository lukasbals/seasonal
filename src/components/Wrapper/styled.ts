import styled from 'styled-components';
import { bigMaxWidth, largeBreakpointCss } from '../../constants/designTokens';

export const Wrapper = styled.div`
  max-width: ${bigMaxWidth};
  margin: 0 auto;
  overflow: hidden;

  padding: 0 80px 24px 80px;

  position: relative;

  ${largeBreakpointCss} {
    padding: 0 24px 24px 24px;
  }
`;
