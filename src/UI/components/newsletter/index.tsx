import React from 'react';
import { Container, LeftContent, TextTitle, Text, RightContent, Image, ImageBg } from './styles';
import newsletterImage from '../../../assets/newsletterImage.png';

export const Newsletter: React.FC = () => {
  return (
    <Container>
      <LeftContent>
        <TextTitle>A IziW chegou para mudar.</TextTitle>
        <Text>Quer ganhar dinheiro extra e escolher quando e como trabalhar?</Text>
        <p>*** INSERIR INPUT ***</p>
        <button>Quero fazer parte</button>
      </LeftContent>
      <RightContent>
        <ImageBg />
        <Image src={newsletterImage} alt="newsletterImage" layout="fixed" />
      </RightContent>
    </Container>
  );
};
