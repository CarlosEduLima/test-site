import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import newsletterImage from '../../../assets/newsletterImage.png';
import * as S from './styles';
import { Button } from '../Button';

export const Newsletter: React.FC = () => {
  return (
    <S.Container>
      <S.BgDetailTwo />
      <S.BgDetailFour />
      <S.LeftContent>
        <S.TextTitle>A IziW chegou para mudar.</S.TextTitle>
        <S.Text>Quer ganhar dinheiro extra e escolher quando e como trabalhar?</S.Text>
        <S.InteractionContainer>
          <Link href="/Login">
            <Button
              children={'Quero fazer parte'}
              variant={'secondary'}
              widthCircle={''}
              heightCircle={''}
            />
          </Link>
        </S.InteractionContainer>
      </S.LeftContent>
      <S.RightContent>
        <S.ImageBg />
        <Image src={newsletterImage} alt="newsletterImage" layout="fixed" />
        <S.BgDetailOne />
        <S.BgDetailThree />
        <S.BgDetailFive />
      </S.RightContent>
    </S.Container>
  );
};
