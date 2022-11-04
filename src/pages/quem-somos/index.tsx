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
            A Iziwork veio com o propósito de trazer a facilidade do seu dia a dia, aqui você pode
            de maneira simples dizer qual a sua necessidade e nós indicaremos voce aos melhores
            profissionais. Sem custo nenhum para você.
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
