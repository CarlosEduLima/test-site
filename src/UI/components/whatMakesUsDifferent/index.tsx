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
} from './styles';
import askingQuestions from '../../../assets/asking-questions.png';
import startupIdea from '../../../assets/startup-idea.png';
import workRiskFree from '../../../assets/work-risk-free.png';

export const WhatMakesUsDifferent: React.FC = () => {
  return (
    <Container>
      <Title>O que nos torna diferentes?</Title>
      <Divider />
      <ContentLine>
        <SubContentLeft>
          <Image src={askingQuestions} alt="" />
        </SubContentLeft>
        <SubContentRight>
          <SubTitle>É de graça?</SubTitle>
          <Text>
            Para solicitar orçamentos sim! Os profissionais podem desbloquear pedidos adquirindo
            nossas moedas.
          </Text>
        </SubContentRight>
      </ContentLine>

      <ContentLine>
        <SubContentLeft>
          <SubTitle>É seguro?</SubTitle>
          <Text>
            Na IziW prezamos sempre pela segurança de nossos clientes e colaboradores. Sempre
            checamos e verificamos as informações.
          </Text>
        </SubContentLeft>
        <SubContentRight>
          <Image src={startupIdea} alt="" />
        </SubContentRight>
      </ContentLine>

      <ContentLine>
        <SubContentLeft>
          <Image src={workRiskFree} alt="" />
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
