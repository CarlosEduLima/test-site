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
} from './styles';
import newsletterImage from '../../../assets/newsletterImage.png';

export const Newsletter: React.FC = () => {
  return (
    <Container>
      <BgDetailOne />
      <BgDetailTwo />
      <BgDetailThree />
      <BgDetailFour />
      <BgDetailFive />
      <LeftContent>
        <TextTitle>A IziW chegou para mudar.</TextTitle>
        <Text>Quer ganhar dinheiro extra e escolher quando e como trabalhar?</Text>
        {/* TODO add input component */}
        <p>*** INSERIR INPUT ***</p>
        {/* TODO add button component */}
        <button>Quero fazer parte</button>
      </LeftContent>
      <RightContent>
        <ImageBg />
        <Image src={newsletterImage} alt="newsletterImage" layout="fixed" />
      </RightContent>
    </Container>
  );
};
