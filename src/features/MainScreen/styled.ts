import styled from 'styled-components';
import { mediumMaxWidth } from '../../constants/designTokens';

export const MainScreenContainer = styled.div`
  max-width: ${mediumMaxWidth};
  margin: auto;
  margin-top: calc(50vh - 264px);

  display: flex;
  flex-direction: column;
  align-items: center;
`;
