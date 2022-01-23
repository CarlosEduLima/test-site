import React from 'react';
import Home from '../pages/Home';
import { WhoWeAre } from './whoWeAre';
import Footer from '../UI/components/footer';

const Index: React.FC = () => {
  return (
    <div>
      <Home />
      <WhoWeAre />
      <Footer />
    </div>
  );
};

export default Index;
