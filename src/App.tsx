import React from 'react';
import { IntlProvider } from 'react-intl';
import { createGlobalStyle } from 'styled-components';

import { pageBackground, secondaryFontFamily } from './constants/designTokens';
import MainScreen from './features/MainScreen';
import rootMessagesDe from './rootMessages.de';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${secondaryFontFamily}
  }

  body {
    margin: 0;
    background-color: ${pageBackground};
    overflow: hidden;
  }
`;

function App(): JSX.Element {
  return (
    <IntlProvider messages={rootMessagesDe} locale="de">
      <GlobalStyle />
      <MainScreen />
    </IntlProvider>
  );
}

export default App;
