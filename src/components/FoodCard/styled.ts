import styled from 'styled-components';
import {
  black,
  darkGreen,
  lightGrey,
  mediumBorderRadius,
  orange,
  primaryFontFamily,
  secondaryFontFamily,
  smallBreakpointCss,
} from '../../constants/designTokens';

export const FoodCardContainer = styled.div`
  height: 224px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  border: 1px solid ${lightGrey};
  border-radius: ${mediumBorderRadius};

  ${smallBreakpointCss} {
    height: 156px;
  }
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface DotProps {
  type: 'vegetable' | 'fruit';
}

export const Dot = styled.div<DotProps>`
  width: 5px;
  height: 5px;
  border-radius: 100%;

  background-color: ${({ type }) =>
    type === 'vegetable' ? darkGreen : orange};

  margin-right: 4px;
`;

export const TypeText = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 100%;
  color: ${black};

  letter-spacing: 0.04em;
  text-transform: uppercase;

  font-family: ${secondaryFontFamily};
`;

export const NameText = styled.div`
  font-family: ${primaryFontFamily};

  font-weight: 500;
  font-size: 20px;
  line-height: 100%;

  color: ${black};

  ${smallBreakpointCss} {
    font-size: 16px;
  }
`;

export const AssetContainer = styled.div`
  & img {
    height: 104px;
    width: 104px;
  }

  ${smallBreakpointCss} {
    & img {
      height: 72px;
      width: 72px;
    }
  }
`;
