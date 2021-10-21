import GlobalStyle from "./utils/globals";
require('react-web-vector-icons/fonts');

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
