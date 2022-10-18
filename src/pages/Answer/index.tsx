import React from 'react';
import { Header } from '../../UI/components/Header';
import Footer from '../../UI/components/footer';
import { HeaderContainer } from './styles';
import ViewAnswer from 'src/UI/components/viewAnswer';

const Answer: React.FC = (id: any) => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ViewAnswer id={id} />
      <Footer />
    </>
  );
};
export default Answer;
