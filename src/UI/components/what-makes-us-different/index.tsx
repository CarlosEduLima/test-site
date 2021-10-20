import React from 'react';
import { Container, ContentLine, Text, Divider, SubContent, SubTitle, Title, ThisImage, SubContentRight, SubContentLeft } from './styles'
import askingQuestions from '../../../assets/asking-questions.png';
import startupIdea from '../../../assets/startup-idea.png';
import workRiskFree from '../../../assets/work-risk-free.png';

export const WhatMakesUsDifferent: React.FC = () => {
  return (
    <Container>
      <Title>
        O que nos torna diferentes?
      </Title>
      <Divider />
      <ContentLine>
        <SubContentLeft>
          <ThisImage src={askingQuestions} />
        </SubContentLeft>
        <SubContentRight>
          <SubTitle>É de graça?</SubTitle>
          <Text>Para solicitar orçamentos sim! Os profissionais podem desbloquear pedidos adquirindo nossas moedas.</Text>
        </SubContentRight>
      </ContentLine>

      <ContentLine>
        <SubContentLeft>
          <SubTitle>É seguro?</SubTitle>
          <Text>Na IziW prezamos sempre pela segurança de nossos clientes e colaboradores. Sempre checamos e verificamos as informações.</Text>
        </SubContentLeft>
        <SubContentRight>
          <ThisImage src={startupIdea} />
        </SubContentRight>
      </ContentLine>

      <ContentLine>
        <SubContentLeft>
          <ThisImage src={workRiskFree} />
        </SubContentLeft>
        <SubContentRight>
          <SubTitle>Como faço para ser um profissional IZiW?</SubTitle>
          <Text>Clique aqui e será redirecionado para nosso formulário de inscrição.</Text>
        </SubContentRight>
      </ContentLine>
    </Container>
)}