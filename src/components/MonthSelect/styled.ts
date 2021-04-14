import styled from 'styled-components';
import {
  black,
  mediumBorderRadius,
  mediumTransitionDuration,
  primaryGreen,
  primaryShadow,
  white,
} from '../../constants/designTokens';

export const MonthSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: row;

  overflow: scroll;

  background-color: ${white};

  box-shadow: ${primaryShadow};
  border-radius: ${mediumBorderRadius};

  padding: 22px 28px 18px 28px;
`;

export const MonthSelectButton = styled.button`
  cursor: pointer;

  margin: 0 4px;
  padding: 8px;
  border-radius: ${mediumBorderRadius};
  border: hidden 0;
  background-color: transparent;

  font-size: 16px;
  line-height: 100%;
  color: ${black};
  transition: background-color ease ${mediumTransitionDuration},
    color ease ${mediumTransitionDuration};

  &.active {
    background-color: ${primaryGreen};

    color: ${white};
  }
`;
