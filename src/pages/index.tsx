import React from 'react';
import Home from '../pages/Home';
import FAQ from '../UI/components/FAQ';
import { WhoWeAre } from './whoWeAre';
import Footer from '../UI/components/footer';

const Index: React.FC = () => {
  return (
    <div>
      <Home />
      <WhoWeAre />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
