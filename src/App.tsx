import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Button from './components/Button';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import { pageBackground } from './constants/designTokens';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${pageBackground};
  }
`;

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header
          heading="seasonal"
          left={<Button label="Learn more" size="small" />}
        />
      </Wrapper>
    </>
  );
}

export default App;
