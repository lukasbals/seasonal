import styled from 'styled-components';
import {
  largeBreakpointCss,
  lightGrey,
  longTransitionDuration,
  primaryTransitionEase,
  secondaryTransitionEase,
} from '../../constants/designTokens';

interface StyledHeaderProps {
  expanded?: boolean;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  height: ${({ expanded }) => (expanded ? '100px' : '120px')};

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: height ${secondaryTransitionEase} ${longTransitionDuration};

  ${largeBreakpointCss} {
    height: ${({ expanded }) => (expanded ? '80px' : '100px')};
  }
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
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  ${largeBreakpointCss} {
    &:nth-of-type(1) {
      width: 20%;
    }

    &:nth-of-type(2) {
      text-align: center;
      width: 50%;

      & svg {
        height: 24px;
      }
    }
    &:nth-of-type(3) {
      width: 20%;
    }
  }
`;

interface BurgerContainerProps {
  expanded?: boolean;
}

export const BurgerContainer = styled.div<BurgerContainerProps>`
  margin-top: 12px;
  cursor: pointer;
  width: 48px;
  height: 48px;
  border: ${({ expanded }) =>
    expanded ? `solid 1.5px transparent` : `solid 1.5px ${lightGrey}`};
  border-radius: 100%;
  display: inline-block;
  position: relative;

  transition: border ${primaryTransitionEase} ${longTransitionDuration};

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 20px;
    width: 20px;
  }
`;
