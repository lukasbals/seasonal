import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { createGlobalStyle } from 'styled-components';
import Logo from './assets/Logo';
import BottomDrawer from './components/BottomDrawer';
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
  const [expanded, setExpanded] = useState(false);

  return (
    <IntlProvider messages={rootMessagesDe} locale="de">
      <GlobalStyle />
      <Wrapper>
        <Header
          heading={
            <Logo
              onClick={() => {
                if (expanded) {
                  setExpanded(false);
                } else {
                  window.location.reload();
                }
              }}
            />
          }
          left={<Button label="Learn more" size="small" />}
        />
      </Wrapper>
      <BottomDrawer expanded={expanded} onChange={setExpanded}>
        <MonthSelect
          onSelect={(month: string) => {
            console.log('select', month);
          }}
        />
      </BottomDrawer>
    </IntlProvider>
  );
}

export default App;
