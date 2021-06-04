import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { IntlProvider } from 'react-intl';
import { createGlobalStyle } from 'styled-components';
import { pageBackground, secondaryFontFamily } from './constants/designTokens';
import MainScreen from './features/MainScreen';
import rootMessagesDe from './rootMessages.de';

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-overflow-scrolling: touch;
  }

  body {
    font-family: ${secondaryFontFamily};
    text-rendering: geometricPrecision;
    margin: 0;
    background-color: ${pageBackground};
    overflow-x: hidden;
  }

  *:focus {
    outline: none;
  }

  /* Fix IOS input fields */
  input[type=text] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

// kick off the polyfill!
smoothscroll.polyfill();

function App(): JSX.Element {
  return (
    <IntlProvider messages={rootMessagesDe} locale="de">
      <GlobalStyle />
      <MainScreen />
    </IntlProvider>
  );
}

export default App;
