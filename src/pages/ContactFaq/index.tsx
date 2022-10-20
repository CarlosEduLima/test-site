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
      <div style={{ margin: '0 15% auto' }}>
        <ContactBox />
      </div>
      <Footer />
    </>
  );
};
export default ContactFaq;
