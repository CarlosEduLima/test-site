import React from 'react';
import { Container, LeftSide, RightSide, Title, Text, StoreButtonsContainer } from './styles';
import { GooglePlayBadge } from './googlePlayStoreBadge';
import { AppStoreBadge } from './appStoreBadge';

export const AvailableInStores: React.FC = () => {
  return (
    <Container>
      <LeftSide>imagem</LeftSide>
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
      </RightSide>
    </Container>
  );
};
