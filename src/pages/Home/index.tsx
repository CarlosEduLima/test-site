import React from 'react';
import Card from 'src/UI/components/Card-cadastro';
import { WhatMakesUsDifferent } from '../../UI/components/whatMakesUsDifferent';
import Footer from '../../UI/components/footer';
import { Newsletter } from '../../UI/components/newsletter';
import { AvailableInStores } from '../../UI/components/availableInStores';
import { Carousel } from 'src/UI/components/carousel';

import HowItWorks from '../../UI/components/howItWorks';

const Home: React.FC = () => {
  return (
    <div>
      <Carousel />
      <HowItWorks />
      <AvailableInStores />
      <WhatMakesUsDifferent />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
