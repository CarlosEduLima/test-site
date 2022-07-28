import React from 'react';
import {
  Top,
  TextWhite,
  SubTitleWhite,
  TopCenter,
  HeaderContainer,
  NewsletterContainer,
} from './styles';
import Aiziw from '../../UI/components/Aiziw';
import { Header } from '../../UI/components/Header';
import { AvailableInStores } from '../../UI/components/availableInStores';
import { Newsletter } from '../../UI/components/newsletter';

const WhoWeAre: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Top>
        <TopCenter>
          <SubTitleWhite>Quem somos</SubTitleWhite>
          <TextWhite>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore.
          </TextWhite>
        </TopCenter>
      </Top>
      <Aiziw />
      <AvailableInStores />
      <NewsletterContainer>
        <Newsletter />
      </NewsletterContainer>
    </>
  );
};

export default WhoWeAre;