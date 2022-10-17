import React from 'react';
import { Header } from '../../UI/components/Header';
import Footer from '../../UI/components/footer';
import { HeaderContainer } from './styles';
import ViewAnswer from 'src/UI/components/viewAnswer';

const Answer: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ViewAnswer />
      <Footer />
    </>
  );
};
export default Answer;
