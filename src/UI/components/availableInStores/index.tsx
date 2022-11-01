import React from 'react';
import * as S from './styles';
import Link from 'next/link';
import { GooglePlayBadge } from './googlePlayStoreBadge';
import { AppStoreBadge } from './appStoreBadge';
import { CellImages } from './CellImages';
import { Button } from '../Button';

export const AvailableInStores: React.FC = () => {
  return (
    <S.Container>
      <S.BgDetailsOne />
      <S.BgDetailsThree />
      <S.BgDetailsTwo />
      <S.LeftSide>
        <CellImages />
      </S.LeftSide>
      <S.RightSide>
        <S.Title>A IziW chegou para mudar.</S.Title>
        <S.Text>
          Mude a visualização. Receba ou solicite pedidos e venda produtos, tudo no mesmo
          aplicativo. Rapidez e facilidade na resolução de problemas.
        </S.Text>
        <S.StoreButtonsContainer>
          <a href="https://www.apple.com/br/app-store/">
            <AppStoreBadge height={68} />
          </a>
          <a href="https://play.google.com/store/apps">
            <GooglePlayBadge height={68} />
          </a>
        </S.StoreButtonsContainer>
        <S.ButtonContainer>
          <Link href="/cadastro">
            <Button
              variant={'primary'}
              height="36px"
              widthCircle={''}
              heightCircle={''}
              fontSize="14px">
              Quero me cadastrar
            </Button>
          </Link>
        </S.ButtonContainer>
      </S.RightSide>
    </S.Container>
  );
};
