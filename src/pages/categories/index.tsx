import React from 'react';
import { Header } from '../../UI/components/Header';
import Footer from '../../UI/components/footer';
import { Button } from '../../UI/components/Button';
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

const Categories: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Top>
        <TopCenter>
          <SubTitleWhite>Design e Tecnologia</SubTitleWhite>
          <TextWhite>
            Logotipos, banners, redes sociais, papelaria, Ux design programação e muito mais.
          </TextWhite>
          <BoxButton>
            <Button variant={'primary'} widthCircle={''} heightCircle={''}>
              Encontre um profissional
            </Button>
          </BoxButton>
        </TopCenter>
      </Top>
      <Carrossel>
        <CardCategories />
      </Carrossel>
      <Newsletter />
      <Footer />
    </>
  );
};
export default Categories;
