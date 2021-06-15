import React, { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { pageBackground, secondaryFontFamily } from '../constants/designTokens';
import { IntlProvider } from 'react-intl';
import rootMessagesDe from '../rootMessages.de';
import Head from 'next/head';

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

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // kick off the polyfill!
    smoothscroll.polyfill();
  }, []);

  return (
    <IntlProvider messages={rootMessagesDe} locale="de">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </IntlProvider>
  );
};

export default MyApp;
