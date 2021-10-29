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
} from './styles';
import { GooglePlayBadge } from './googlePlayStoreBadge';
import { AppStoreBadge } from './appStoreBadge';
import { CellImages } from './CellImages';

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
        <button>Quero me cadastrar</button>
      </RightSide>
    </Container>
  );
};
