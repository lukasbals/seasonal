import styled from 'styled-components';
import { mediumMaxWidth } from '../../constants/designTokens';

export const MainScreenContainer = styled.div`
  max-width: ${mediumMaxWidth};
  margin: auto;
  margin-top: calc(
    50vh - 264px + 100px
  ); // Half page - half of the content height + header height

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FixedContainer = styled.div`
  position: fixed;
  width: 100%;
`;
