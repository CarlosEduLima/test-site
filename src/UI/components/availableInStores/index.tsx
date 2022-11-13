import React from 'react';
import * as S from './styles';
import Link from 'next/link';
import Image from 'next/image';
import PlayStoreBadge from '../../../assets/PlayStoreBadge.svg';
import AppStoreBadge from '../../../assets/AppStoreBadge.svg';
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
        <S.Title>A Iziwork chegou para mudar.</S.Title>
        <S.Text>
          Receba ou solicite pedidos de orçamentos de serviços,
          tudo no mesmo aplicativo. Rapidez e facilidade na resolução de problemas com os melhores profissionais.
        </S.Text>
        <S.StoreButtonsContainer>
          <a href="https://www.apple.com/br/app-store/" style={{ marginRight: 17 }}>
            <Image src={AppStoreBadge} width={226} height={70} alt="Apple Store" />
          </a>
          <a href="https://play.google.com/store/apps">
            <Image src={PlayStoreBadge} width={226} height={70} alt="Google play store" />
          </a>
        </S.StoreButtonsContainer>
        <S.ButtonContainer>
          <Link href="/cadastro">
            <Button
              variant={'primary'}
              height={'40px'}
              widthCircle={''}
              heightCircle={''}
              fontSize="14px"
            >
              Quero me cadastrar
            </Button>
          </Link>
        </S.ButtonContainer>
      </S.RightSide>
    </S.Container>
  );
};
