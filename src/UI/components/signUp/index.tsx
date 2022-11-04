/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/no-children-prop */
import React from 'react';
import LogoImg from '../../../assets/seta.svg';
import Barra from '../../../assets/icon.png';
import AppStore from '../../../assets/AppStore.png';
import googlePlay from '../../../assets/googlePlay.png';
import { Logo, Box, Container, ContainerText, Text, LogoImgs, ImageBOX, ImageBOXs } from './styles';

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
          <div style={{ height: '15em', justifyContent: 'space-between' }}>
            <div style={{ marginBottom: '1em' }}>
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
          </div>
        </ImageBOX>
      </Box>
    </Container>
  );
}
