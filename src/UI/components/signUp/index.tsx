/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/no-children-prop */
import React from 'react';
import arrowDawnload from '../../../assets/arrowDawnload.png';
import logoIZIW from '../../../assets/logoIZIW.png';
import AppStore from '../../../assets/appStore.png';
import googlePlay from '../../../assets/googlePlay.png';
import * as S from './styles';

export default function App() {
  return (
    <S.Container>
      <S.Box>
        <S.ImageBOX>
          <S.ImageDownload>
            <S.LogoImgs src={arrowDawnload} alt="Search" />
          </S.ImageDownload>
          <S.ImageIZIW>
            <S.LogoImgs src={logoIZIW} alt="Search" />
          </S.ImageIZIW>
          <S.Text>Instale o aplicativo para realizar o seu cadastro</S.Text>
          <S.ContainerText>
            Faça o download do aplicativo, escolha seus pedidos e feche muitos negócios!
          </S.ContainerText>
          <S.ContentBox>
            <div style={{ marginBottom: '1em' }}>
              <a href="https://play.google.com/store/apps" target={'_blank'} rel="noreferrer">
                <S.Logo src={googlePlay} alt="Search" width={'250%'} height={'80%'} />
              </a>
            </div>
            <div>
              <a
                href="https://apps.apple.com/br/app/iziw/id1645767737"
                target={'_blank'}
                rel="noreferrer">
                <S.Logo src={AppStore} alt="Search" width={'250%'} height={'80%'} />
              </a>
            </div>
          </S.ContentBox>
        </S.ImageBOX>
      </S.Box>
    </S.Container>
  );
}
