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
  white,
} from '../../constants/designTokens';

export const FoodCardContainer = styled.div`
  height: 224px;

  position: relative;
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

  color: ${black};
  &.full {
    color: ${white};
    border: hidden;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.64) 0%,
      rgba(0, 0, 0, 0.32) 32%,
      rgba(0, 0, 0, 0.24) 50%,
      rgba(0, 0, 0, 0.32) 68%,
      rgba(0, 0, 0, 0.64) 100%
    );
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

  letter-spacing: 0.04em;
  text-transform: uppercase;

  font-family: ${secondaryFontFamily};
`;

export const NameText = styled.div`
  font-family: ${primaryFontFamily};

  font-weight: 500;
  font-size: 20px;
  line-height: 100%;

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

export const FullAssetContainer = styled.div`
  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: ${mediumBorderRadius};
  }
`;
