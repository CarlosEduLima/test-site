import React from 'react';
import { Header } from '../../UI/components/Header';
import Footer from '../../UI/components/footer';
import { HeaderContainer } from './styles';
import ViewAnswer from 'src/UI/components/viewAnswer';
import { useRouter } from 'next/router';

const Answer: React.FC = () => {
  const router = useRouter();
  const id = router.query?.id as string
  const title = router.query?.title as string
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ViewAnswer questionId={id} questionTitle={title}/>
      <Footer />
    </>
  );
};
export default Answer;
