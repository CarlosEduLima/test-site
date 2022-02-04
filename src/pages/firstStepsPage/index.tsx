import React from 'react';
import { Header } from '../../UI/components/Header';
import Footer from '../../UI/components/footer';
import { Newsletter } from '../../UI/components/newsletter';
import { AvailableInStores } from '../../UI/components/availableInStores';
import FirstSteps from '../../UI/components/firstSteps';
import {
  Top,
  TextWhite,
  SubTitleWhite,
  TopCenter,
  HeaderContainer,
  NewsletterContainer,
} from './styles';

const FirstStepsPage: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Top>
        <TopCenter>
          <SubTitleWhite>Primeiros Passos</SubTitleWhite>
          <TextWhite>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore.
          </TextWhite>
        </TopCenter>
      </Top>
      <FirstSteps />
      <AvailableInStores />
      <NewsletterContainer>
        <Newsletter />
      </NewsletterContainer>
      <Footer />
    </>
  );
};
export default FirstStepsPage;
