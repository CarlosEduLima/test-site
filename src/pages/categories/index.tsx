import React, { useEffect, useState } from 'react';
import { Header } from '../../UI/components/Header';
import { Button } from '../../UI/components/Button';
import { useRouter } from 'next/router';
import { CardCategories } from 'src/UI/components/cardCategories';
import { Newsletter } from 'src/UI/components/newsletter';
import { WhoAreWe } from 'src/UI/components/whoAreWe';
import { ServiceHighlightsShow } from 'src/services/services';
import * as S from './styles';
import Footer from 'src/UI/components/footer';
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
      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>
      <S.Top>
        <S.TopCenter>
          <S.SubTitleWhite>{categoryData?.name}</S.SubTitleWhite>
          <S.TextWhite>{categoryData?.description}</S.TextWhite>
          <S.BoxButton>
            <Button
              variant={'primary'}
              widthCircle={''}
              heightCircle={''}
              onClick={() =>
                router.push({
                  pathname: '/Home',
                  query: { scroll: true },
                })
              }
            >
              Encontre um profissional
            </Button>
          </S.BoxButton>
        </S.TopCenter>
      </S.Top>
      <S.Carrossel>{categoryData?.id && <CardCategories id={categoryData?.id} />}</S.Carrossel>
      <WhoAreWe title={'Pedidos com notas mais altas'} />
      <Newsletter />
      <Footer />
    </>
  );
};
export default Categories;
