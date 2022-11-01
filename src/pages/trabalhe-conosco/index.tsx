import React from 'react';
import { AvailableInStores } from 'src/UI/components/availableInStores';
import Footer from 'src/UI/components/footer';
import { Header } from 'src/UI/components/Header';
import { Newsletter } from 'src/UI/components/newsletter';
import WeOffer from 'src/UI/components/weOffer';
import { WorkWithUs } from '../../UI/components/workWithUs';
import { HeaderContainer, NewsletterContainer } from './styles';

const PageWorkWithUs: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <WorkWithUs />
      <WeOffer />
      <AvailableInStores />
      <NewsletterContainer>
        <Newsletter />
      </NewsletterContainer>
      <Footer />
    </>
  );
};

export default PageWorkWithUs;
