import React from 'react';
import { HeaderContainer, ContainerTermsOfUser } from './styles';
import { Header } from 'src/UI/components/Header';
import { Newsletter } from 'src/UI/components/newsletter';
import Footer from 'src/UI/components/footer';
import TermsOfUse from 'src/UI/components/termsOfUse';

const TermsOfUsePage: React.FC = () => {
  return (
    <>
      <Header />
      <ContainerTermsOfUser>
        <TermsOfUse />
      </ContainerTermsOfUser>
      <Newsletter />
      <Footer />
    </>
  );
};

export default TermsOfUsePage;
