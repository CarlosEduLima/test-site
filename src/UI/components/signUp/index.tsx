/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/no-children-prop */
import React from 'react';
import LogoImg from '../../../assets/seta.svg';
import Barra from '../../../assets/barra.svg';
import AppStore from '../../../assets/appStore.png';
import googlePlay from '../../../assets/googlePlay.png';
import {
  Logo,
  Box,
  Container,
  ContainerText,
  Text,
  LogoImgs,
  ImageBOX,
  ImageBOXs,
  ContentBox,
} from './styles';

export default function App() {
  return (
    <Container>
      <Box>
        <ImageBOX>
          <ImageBOXs>
            <LogoImgs src={Barra} alt="Search" />
          </ImageBOXs>
          <Text>Instale o aplicativo para realizar o seu cadastro</Text>
          <ContainerText>
            Faça o download do aplicativo, escolha seus pedidos e feche muitos negócios!
          </ContainerText>
          <ContentBox>
            <div style={{ marginBottom: '2em' }}>
              <a href="https://play.google.com/store/apps" target={'_blank'} rel="noreferrer">
                <Logo src={googlePlay} alt="Search" width={'250%'} height={'80%'} />
              </a>
            </div>
            <div>
              <a
                href="https://apps.apple.com/br/app/iziw/id1645767737"
                target={'_blank'}
                rel="noreferrer">
                <Logo src={AppStore} alt="Search" width={'250%'} height={'80%'} />
              </a>
            </div>
          </ContentBox>
        </ImageBOX>
      </Box>
    </Container>
  );
}
