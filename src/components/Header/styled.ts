import styled from 'styled-components';
import { darkBlack, primaryFontFamily } from '../../constants/designTokens';

export const StyledHeader = styled.header`
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderSection = styled.div`
  width: 30%;

  &:nth-of-type(2) {
    text-align: center;

    & svg {
      height: 40px;
      width: auto;
    }
  }
  &:nth-of-type(3) {
    text-align: right;
  }
`;

export const Heading = styled.h1`
  font-family: ${primaryFontFamily};
  color: ${darkBlack};
  font-size: 40px;
  line-height: 40px;
`;
