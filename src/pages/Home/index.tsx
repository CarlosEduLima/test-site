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

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HighProfessionals />
      <Carousel />
      <RegisterButtonSection />
      <HowItWorks />
      <RegisterButtonSection />
      <AvailableInStores />
      <WhatMakesUsDifferent />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
