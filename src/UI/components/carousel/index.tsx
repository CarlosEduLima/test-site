import React from 'react';
import { Container, Divider, HorizontalScrollArea, ScrollAreaContainer, Title } from './styles'
import { InputCard } from './input-card'

export const Carousel: React.FC = () => {
  return (
    <Container>
      <Title style={{ marginBottom: 12 }}>Categorias em destaque</Title>
      <Divider></Divider>
    <ScrollAreaContainer>
      <HorizontalScrollArea>
          <InputCard title="Auto" backgroundImage="https://source.unsplash.com/random/325x151"/>
      </HorizontalScrollArea>
      </ScrollAreaContainer>
      <button>Quero me cadastrar</button>
    </Container>
  )
}
