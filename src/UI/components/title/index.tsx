import React from 'react';
import { Container, TitleText, Divider } from './styles';

export const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Container>
      <TitleText>{title}</TitleText>
      <Divider />
    </Container>
  );
};
