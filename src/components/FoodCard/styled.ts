import styled from 'styled-components';
import {
  darkGreen,
  lightGrey,
  mediumBorderRadius,
  orange,
  primaryFontFamily,
  secondaryFontFamily,
} from '../../constants/designTokens';

export const FoodCardContainer = styled.div`
  height: 264px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  border: 1px solid ${lightGrey};
  border-radius: ${mediumBorderRadius};
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
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;

  font-family: ${primaryFontFamily};
`;
