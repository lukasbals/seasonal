import styled from 'styled-components';
import { primaryFontFamily, primaryGreen } from '../../constants/designTokens';

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
  }
  &:nth-of-type(3) {
    text-align: right;
  }
`;

export const Heading = styled.h1`
  font-family: ${primaryFontFamily};
  color: ${primaryGreen};
  font-size: 40px;
  line-height: 40px;
`;
