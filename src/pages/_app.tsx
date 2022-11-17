import React from 'react';
import GlobalStyle from '../utils/globals';
import '../assets/css/index.css';
import { AppProps } from 'next/app';

import { ToastProvider } from 'src/hooks/toast';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <ToastProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ToastProvider>
    </>
  );
};

export default MyApp;
