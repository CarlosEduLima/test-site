import React from 'react';
import { HeaderContainer, NewsletterContainer } from './styles';
import { Header } from '../../UI/components/Header';
import { AvailableInStores } from '../../UI/components/availableInStores';
import { Newsletter } from '../../UI/components/newsletter';
import BannerProfessionals from 'src/UI/components/bannerProfessionals';
import Sessionprofessional from 'src/UI/components/sessionprofessional';
import Footer from 'src/UI/components/footer';

const VerifiedProfessionals: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <BannerProfessionals />
      <Sessionprofessional />
      <AvailableInStores />
      <NewsletterContainer>
        <Newsletter />
      </NewsletterContainer>
      <Footer />
    </>
  );
};

export default VerifiedProfessionals;
