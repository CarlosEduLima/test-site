import React from 'react';
import {
  Container,
  LeftContent,
  TextTitle,
  Text,
  RightContent,
  Image,
  ImageBg,
  BgDetailOne,
  BgDetailTwo,
  BgDetailThree,
  BgDetailFour,
  BgDetailFive,
  InteractionContainer,
} from './styles';
import newsletterImage from '../../../assets/newsletterImage.png';

export const Newsletter: React.FC = () => {
  return (
    <Container>
      <BgDetailTwo />
      <BgDetailFour />
      <LeftContent>
        <TextTitle>A IziW chegou para mudar.</TextTitle>
        <Text>Quer ganhar dinheiro extra e escolher quando e como trabalhar?</Text>
        <InteractionContainer>
          {/* TODO add input component */}
          <p>*** INSERIR INPUT ***</p>
          {/* TODO add button component */}
          <button>Quero fazer parte</button>
        </InteractionContainer>
      </LeftContent>
      <RightContent>
        <ImageBg />
        <Image src={newsletterImage} alt="newsletterImage" layout="fixed" />
        <BgDetailOne />
        <BgDetailThree />
        <BgDetailFive />
      </RightContent>
    </Container>
  );
};
