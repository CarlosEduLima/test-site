import React from 'react';
import { Newsletter } from '../UI/components/newsletter';
import { Carousel } from '../UI/components/carousel';
import { WhatMakesUsDifferent } from '../UI/components/whatMakesUsDifferent';

const Index: React.FC = () => {
  return (
    <div>
      <Newsletter />
      <Carousel />
      <WhatMakesUsDifferent />
    </div>
  );
};

export default Index;
