import React from 'react';
import { IntlProvider } from 'react-intl';
import { createGlobalStyle } from 'styled-components';
import Button from './components/Button';
import Header from './components/Header';
import MonthSelect from './components/MonthSelect';
import Wrapper from './components/Wrapper';
import { pageBackground } from './constants/designTokens';
import rootMessagesDe from './rootMessages.de';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${pageBackground};
  }
`;

function App(): JSX.Element {
  return (
    <IntlProvider messages={rootMessagesDe} locale="de">
      <GlobalStyle />
      <Wrapper>
        <Header
          heading="seasonal"
          left={<Button label="Learn more" size="small" />}
        />
        <MonthSelect
          onSelect={() => {
            console.log('select');
          }}
        />
      </Wrapper>
    </IntlProvider>
  );
}

export default App;
