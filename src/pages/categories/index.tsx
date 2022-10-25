import React from 'react';
import { Header } from '../../UI/components/Header';
import Footer from '../../UI/components/footer';
import { Button } from '../../UI/components/Button';
import { useRouter } from 'next/router';
import {
  Top,
  TextWhite,
  SubTitleWhite,
  TopCenter,
  HeaderContainer,
  BoxButton,
  Carrossel,
} from './styles';
import { CardCategories } from 'src/UI/components/cardCategories';
import { Newsletter } from 'src/UI/components/newsletter';
import { WhoAreWe } from 'src/UI/components/whoAreWe';

const Categories: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Top>
        <TopCenter>
          <SubTitleWhite>{router.query?.categoryName}</SubTitleWhite>
          <TextWhite>{router.query?.description}</TextWhite>
          <BoxButton>
            <Button
              variant={'primary'}
              widthCircle={''}
              heightCircle={''}
              onClick={() => {
                router.push({
                  pathname: '/Home',
                  query: { scroll: true },
                });
              }}>
              Encontre um profissional
            </Button>
          </BoxButton>
        </TopCenter>
      </Top>
      <Carrossel>
        <CardCategories id={router.query?.id} />
      </Carrossel>
      <WhoAreWe title={'Pedidos com notas mais altas'} />
      <Newsletter />
      <Footer />
    </>
  );
};
export default Categories;
