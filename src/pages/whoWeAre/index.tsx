import React from 'react';
import * as S from './styles';
import Aiziw from '../../UI/components/Aiziw';
import { Header } from '../../UI/components/Header';
import { AvailableInStores } from '../../UI/components/availableInStores';
import { Newsletter } from '../../UI/components/newsletter';
import Footer from 'src/UI/components/footer';

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
      <AvailableInStores />
      <S.NewsletterContainer>
        <Newsletter />
      </S.NewsletterContainer>
      <Footer />
    </>
  );
};

export default WhoWeAre;