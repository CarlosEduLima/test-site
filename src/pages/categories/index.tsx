import React from 'react';
import { Header } from '../../UI/components/Header';
import { Button } from '../../UI/components/Button';
import { useRouter } from 'next/router';
import { CardCategories } from 'src/UI/components/cardCategories';
import { Newsletter } from 'src/UI/components/newsletter';
import { WhoAreWe } from 'src/UI/components/whoAreWe';
import Footer from '../../UI/components/footer';
import Link from 'next/link';
import * as S from './styles';

const Categories: React.FC = () => {

  const router = useRouter();

  return (
    <>
      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>
      <S.Top>
        <S.TopCenter>
          <S.SubTitleWhite>{router.query?.categoryName}</S.SubTitleWhite>
          <S.TextWhite>
            {router.query?.description}
          </S.TextWhite>
          <S.BoxButton>
            <Link href="/Login">
              <Button variant={'primary'} widthCircle={''} heightCircle={''}>
                Encontre um profissional
              </Button>
            </Link>
          </S.BoxButton>
        </S.TopCenter>
      </S.Top>
      <S.Carrossel>
        <CardCategories id={router.query?.id} />
      </S.Carrossel>
      <WhoAreWe title={'Pedidos com notas mais altas'} />
      <Newsletter />
      <Footer />
    </>
  );
};
export default Categories;
