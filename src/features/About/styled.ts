import styled from 'styled-components';
import { largeBreakpointCss } from '../../constants/designTokens';

export const AboutContainer = styled.div`
  position: relative;

  margin-top: 104px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    margin-top: 32px;
  }
`;

export const RegionSelectContainer = styled.div`
  display: none;

  ${largeBreakpointCss} {
    display: unset;

    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
  }
`;
