import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import newsletterImage from '../../../assets/newsletterImage.png';
import * as S from './styles';
import { Button } from '../Button';

export const Newsletter: React.FC = () => {
  return (
    <S.Container>
      <S.ElementBallFooter />
      <S.ElementRectangleHeader />
      <S.LeftContent>
        <S.TextTitle>A IziW chegou para mudar.</S.TextTitle>
        <S.Text>Quer ganhar dinheiro extra e escolher quando e como trabalhar?</S.Text>
        <S.InteractionContainer>
          <Link href="/RegisterUser">
            <S.ContainerButton>
              <Button
                variant={'secondary'}
                widthCircle={''}
                heightCircle={''}
                height={'37px'}
              >
                Quero me cadastrar
              </Button>
            </S.ContainerButton>
          </Link>
        </S.InteractionContainer>
      </S.LeftContent>
      <S.RightContent>
        <S.ElementBall />
        <S.ContainerImage>
          <Image src={newsletterImage} alt="newsletterImage" />
        </S.ContainerImage>
        <S.ElementMiniBall />
        <S.ElementRectangleRight />
        <S.ElementRectangleCenter />
      </S.RightContent>
    </S.Container>
  );
};
