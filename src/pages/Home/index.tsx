import React, { useRef, useEffect } from 'react';
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
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const categoriesRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  function handleBackClick() {
    categoriesRef?.current.scrollIntoView({ behavior: 'smooth' });
  }
  useEffect(() => {
    router.query?.scroll && handleBackClick()
  }, [])
  return (
    <>
      <Header handleScroll={handleBackClick} />
      <HighProfessionals handleScroll={handleBackClick}/>
      <Carousel ref={categoriesRef} />
      <RegisterButtonSection />
      <HowItWorks />
      <WhoAreWe title="O que dizem sobre nós" />
      <RegisterButtonSection />
      <AvailableInStores />
      <WhatMakesUsDifferent />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
