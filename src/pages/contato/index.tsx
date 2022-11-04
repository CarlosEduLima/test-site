import React from 'react';
import { Header } from '../../UI/components/Header';
import Footer from '../../UI/components/footer';
import * as S from './styles';
import ContactBox from 'src/UI/components/contactBox';

const ContactFaq: React.FC = () => {
  return (
    <>
      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>
      <S.Top>
        <S.TopCenter>
          <S.SubTitleWhite>Contato</S.SubTitleWhite>
          <S.TextWhite>Deixe aqui suas dúvidas, ficaremos felizes em ajudar.</S.TextWhite>
        </S.TopCenter>
      </S.Top>
      <ContactBox />
      <Footer />
    </>
  );
};
export default ContactFaq;
