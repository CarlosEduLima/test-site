import React from 'react';
import { Header } from '../../UI/components/Header';
import Footer from '../../UI/components/footer';

import { Top, TextWhite, SubTitleWhite, TopCenter, HeaderContainer } from './styles';
import ContactBox from 'src/UI/components/contactBox';

const ContactFaq: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Top>
        <TopCenter>
          <SubTitleWhite>Contato</SubTitleWhite>
          <TextWhite>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore.
          </TextWhite>
        </TopCenter>
      </Top>
      <ContactBox />
      <Footer />
    </>
  );
};
export default ContactFaq;
