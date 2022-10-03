import React from 'react';
import {
  Container,
  LeftSide,
  RightSide,
  Title,
  Text,
  StoreButtonsContainer,
  BgDetailsOne,
  BgDetailsThree,
  BgDetailsTwo,
  ButtonContainer,
} from './styles';
import { GooglePlayBadge } from './googlePlayStoreBadge';
import { AppStoreBadge } from './appStoreBadge';
import { CellImages } from './CellImages';
import { Button } from '../Button';

export const AvailableInStores: React.FC = () => {
  return (
    <Container>
      <BgDetailsOne />
      <BgDetailsThree />
      <BgDetailsTwo />
      <LeftSide>
        <CellImages />
      </LeftSide>
      <RightSide>
        <Title>A IziW chegou para mudar.</Title>
        <Text>
          Mude a visualização. Receba ou solicite pedidos e venda produtos, tudo no mesmo
          aplicativo. Rapidez e facilidade na resolução de problemas.
        </Text>
        <StoreButtonsContainer>
          <AppStoreBadge height={52} />
          <GooglePlayBadge height={52} />
        </StoreButtonsContainer>
        <ButtonContainer>
          <Button
            variant={'primary'}
            height="36px"
            widthCircle={''}
            heightCircle={''}
            fontSize="14px">
            Quero me cadastrar
          </Button>
        </ButtonContainer>
      </RightSide>
    </Container>
  );
};
