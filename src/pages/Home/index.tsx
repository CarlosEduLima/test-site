import React from 'react';
import { WhatMakesUsDifferent } from '../../UI/components/whatMakesUsDifferent';
import Footer from '../../UI/components/footer';
import { Newsletter } from '../../UI/components/newsletter';
import { AvailableInStores } from '../../UI/components/availableInStores';

import HowItWorks from '../../UI/components/howItWorks';
import { Header } from '../../UI/components/Header';
import { HeaderContainer } from './styles';
import { HighProfessionals } from '../../UI/components/highProfessionals';
import { Carousel } from 'src/UI/components/carousel';
import RegisterButtonSection from 'src/UI/components/RegisterButtonSession';
import { WhoAreWe } from 'src/UI/components/whoAreWe';

const Home: React.FC = () => {
  return (
    <div>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <HighProfessionals />
      <Carousel />
      <RegisterButtonSection />
      <HowItWorks />
      <WhoAreWe title="O que dizem sobre nós" />
      <RegisterButtonSection />
      <AvailableInStores />
      <WhatMakesUsDifferent />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
