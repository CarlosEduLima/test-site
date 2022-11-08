import React, { useEffect, useState, useRef } from 'react';
import { Header } from '../../../../UI/components/Header';
import { Button } from '../../../../UI/components/Button';
import { NextRouter, useRouter } from 'next/router';
import { CardCategories } from '../../../../UI/components/cardCategories';
import { Newsletter } from '../../../../UI/components/newsletter';
import { WhoAreWe } from '../../../../UI/components/whoAreWe';
import { ServiceHighlightsShow } from '../../../../services/services';
import * as S from './styles';
import Footer from '../../../../UI/components/footer';
import slugify from 'slugify';

const Categories: React.FC = () => {
  const router: NextRouter = useRouter();
  const [categoryData, setCategoryData]: any = useState();
  const carrousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    void (async () => {
      if (router.query.id) {
        const data: any = await ServiceHighlightsShow(router?.query?.id);
        setCategoryData(data);
        if (slugify(data.name).toLowerCase() !== router.query.slug) {
          carrousel?.current.scrollIntoView({ behavior: 'smooth' });
        }
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
              height={'37px'}
              onClick={() =>
                router.push({
                  pathname: '/',
                  query: { scroll: true },
                })
              }
            >
              Encontre um profissional
            </Button>
          </S.BoxButton>
        </S.TopCenter>
      </S.Top>
      <S.Carrossel ref={carrousel}>{categoryData?.id && <CardCategories id={categoryData?.id} name={router.query.slug} />}</S.Carrossel>
      <WhoAreWe title={'Pedidos com notas mais altas'} />
      <Newsletter />
      <Footer />
    </>
  );
};
export default Categories;
