import React from 'react';
import * as S from './styles';
import WhoWeAre from '../../../assets/whoWeAre.svg';
import WhoWeAreTwo from '../../../assets/whoWeAreTwo.svg';
import WhoWeAreThree from '../../../assets/whoWeAreThree.svg';

const Aiziw: React.FC = () => {
  return (
    <S.Container>
      <S.Title>A Iziw</S.Title>
      <S.Divider />
      <S.ContentLine>
        <S.SubContent>
          <S.Image src={WhoWeAre} alt="" />
        </S.SubContent>
        <S.SubContent>
          <S.SubTitle>Quem somos</S.SubTitle>
          <S.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </S.Text>
        </S.SubContent>
      </S.ContentLine>
      <S.ContentLineReverse>
        <S.SubContent>
          <S.SubTitle>Como surgiu</S.SubTitle>
          <S.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </S.Text>
        </S.SubContent>
        <S.SubContent>
          <S.Image src={WhoWeAreTwo} alt="" />
        </S.SubContent>
      </S.ContentLineReverse>
      <S.ContentLine>
        <S.SubContent>
          <S.Image src={WhoWeAreThree} alt="" />
        </S.SubContent>
        <S.SubContent>
          <S.SubTitle>O que fazemos</S.SubTitle>
          <S.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </S.Text>
        </S.SubContent>
      </S.ContentLine>
    </S.Container>
  );
};

export default Aiziw;
