import React, { useEffect, useState } from 'react';
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
import { ServiceHighlightsShow } from 'src/services/services';

const Categories: React.FC = () => {
  const router: any = useRouter();
  const [categoryData, setCategoryData]: any = useState();

  useEffect(() => {
    void (async () => {
      if (router.query.id) {
        const data = await ServiceHighlightsShow(router?.query?.id);
        setCategoryData(data);
      }
    })();
  }, [router.query.id]);

  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Top>
        <TopCenter>
          <SubTitleWhite>{categoryData?.name}</SubTitleWhite>
          <TextWhite>{categoryData?.description}</TextWhite>
          <BoxButton>
            <Button variant={'primary'} widthCircle={''} heightCircle={''}>
              Encontre um profissional
            </Button>
          </BoxButton>
        </TopCenter>
      </Top>
      <Carrossel>{categoryData?.id && <CardCategories id={categoryData?.id} />}</Carrossel>
      <WhoAreWe title={'Pedidos com notas mais altas'} />
      <Newsletter />
      <Footer />
    </>
  );
};
export default Categories;
