import React from 'react';
import Link from 'next/link';
import * as S from './styles';
import questionFree from '../../../assets/questionFree.svg';
import questionSafe from '../../../assets/questionSafe.svg';
import questionStart from '../../../assets/questionStart.svg';

export const WhatMakesUsDifferent: React.FC = () => {
  return (
    <S.Container>
      <S.Title>O que nos torna diferentes?</S.Title>
      <S.Divider />
      <S.ContentLine>
        <S.SubContentLeftImage>
          <S.Image src={questionFree} alt="" />
        </S.SubContentLeftImage>
        <S.SubContentRight>
          <S.SubTitle>É de graça!</S.SubTitle>
          <S.Text>
            A solicitação de orçamentos é gratuita
            para o cliente! Os profissionais devem
            adquirir Izicoins para desbloquear pedidos.
          </S.Text>
        </S.SubContentRight>
      </S.ContentLine>

      <S.ContentLineReverse>
        <S.SubContentLeft>
          <S.SubTitle>É seguro!</S.SubTitle>
          <S.Text>
            Prezamos pela segurança de nosso cliente e prestadores.
            Fazemos conferência de documentação dos profissionais e
            dados dos pedidos.
          </S.Text>
        </S.SubContentLeft>
        <S.SubContentRightImage>
          <S.Image src={questionSafe} alt="" />
        </S.SubContentRightImage>
      </S.ContentLineReverse>

      <S.ContentLine>
        <S.SubContentLeftImage>
          <S.Image src={questionStart} alt="" />
        </S.SubContentLeftImage>
        <S.SubContentRight>
          <S.SubTitle>É facil ser um profissional cadastrado!</S.SubTitle>
          <S.Text>
            <Link href="/cadastro">
              <S.StyledLink>Clique aqui</S.StyledLink>
            </Link>
            , baixe o app, preencha seus dados e pronto!
            Logo poderá começar a receber pedidos de orçamento.
          </S.Text>
        </S.SubContentRight>
      </S.ContentLine>
    </S.Container>
  );
};
