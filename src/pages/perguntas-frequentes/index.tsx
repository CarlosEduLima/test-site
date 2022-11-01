import React from 'react';
import { Header } from '../../UI/components/Header';
import FAQ from '../../UI/components/FAQ';
import Footer from '../../UI/components/footer';
import { HeaderContainer } from './styles';

const PageFaq: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <FAQ />
      <Footer />
    </>
  );
};
export default PageFaq;
