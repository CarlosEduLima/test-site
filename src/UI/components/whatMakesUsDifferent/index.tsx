import React from 'react';
import Link from 'next/link';
import {
  Container,
  ContentLine,
  Text,
  Divider,
  SubTitle,
  Title,
  Image,
  SubContentRight,
  SubContentLeft,
  StyledLink,
  ContentLineReverse,
} from './styles';
import questionFree from '../../../assets/questionFree.svg';
import questionSafe from '../../../assets/questionSafe.svg';
import questionStart from '../../../assets/questionStart.svg';

export const WhatMakesUsDifferent: React.FC = () => {
  return (
    <Container>
      <Title>O que nos torna diferentes?</Title>
      <Divider />
      <ContentLine>
        <SubContentLeft>
          <Image src={questionFree} alt="" />
        </SubContentLeft>
        <SubContentRight>
          <SubTitle>É de graça?</SubTitle>
          <Text>
            Para solicitar orçamentos sim! Os profissionais podem desbloquear pedidos adquirindo
            nossas moedas.
          </Text>
        </SubContentRight>
      </ContentLine>

      <ContentLineReverse>
        <SubContentLeft>
          <SubTitle>É seguro?</SubTitle>
          <Text>
            Na IziW prezamos sempre pela segurança de nossos clientes e colaboradores. Sempre
            checamos e verificamos as informações.
          </Text>
        </SubContentLeft>
        <SubContentRight>
          <Image src={questionSafe} alt="" />
        </SubContentRight>
      </ContentLineReverse>

      <ContentLine>
        <SubContentLeft>
          <Image src={questionStart} alt="" />
        </SubContentLeft>
        <SubContentRight>
          <SubTitle>Como faço para ser um profissional IZiW?</SubTitle>
          <Text>
            <Link href="/temp">
              <StyledLink>Clique aqui</StyledLink>
            </Link>{' '}
            e será redirecionado para nosso formulário de inscrição.
          </Text>
        </SubContentRight>
      </ContentLine>
    </Container>
  );
};
