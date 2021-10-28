import React from 'react';
import GlobalStyle from '../utils/globals';
import '../assets/css/index.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
