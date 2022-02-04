import React from 'react';
import { Header } from '../../UI/components/Header';
import Footer from '../../UI/components/footer';
import { Newsletter } from '../../UI/components/newsletter';
import { AvailableInStores } from '../../UI/components/availableInStores';
import {
  Top,
  TextWhite,
  SubTitleWhite,
  TopCenter,
  HeaderContainer,
  NewsletterContainer,
} from './styles';

const PagePrices: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Top>
        <TopCenter>
          <SubTitleWhite>Preços e Moedas</SubTitleWhite>
          <TextWhite>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore.
          </TextWhite>
        </TopCenter>
      </Top>
      <AvailableInStores />
      <NewsletterContainer>
        <Newsletter />
      </NewsletterContainer>
      <Footer />
    </>
  );
};
export default PagePrices;
