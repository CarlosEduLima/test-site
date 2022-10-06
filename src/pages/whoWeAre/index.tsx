import React from 'react';
import * as S from './styles';
import Aiziw from '../../UI/components/Aiziw';
import Footer from 'src/UI/components/footer';
import { Header } from '../../UI/components/Header';
import { Newsletter } from '../../UI/components/newsletter';

const WhoWeAre: React.FC = () => {
  return (
    <>
      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>
      <S.Top>
        <S.TopCenter>
          <S.SubTitleWhite>Quem somos</S.SubTitleWhite>
          <S.TextWhite>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </S.TextWhite>
        </S.TopCenter>
      </S.Top>
      <Aiziw />
      <S.NewsletterContainer>
        <Newsletter />
      </S.NewsletterContainer>
      <Footer />
    </>
  );
};

export default WhoWeAre;