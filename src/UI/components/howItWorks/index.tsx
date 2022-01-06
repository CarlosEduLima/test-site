import React, { useState } from 'react';

import HowItWorksCard from '../howItWorksCard';

import profileIllustration from '../../../assets/profileIllustration.svg';
import servicesIllustration from '../../../assets/servicesIllustration.svg';
import offerIllustration from '../../../assets/offerIllustration.svg';

import {
  Container,
  ButtonContainer,
  CardsContainer,
  Title,
  TitleSpan,
  UserTypeProfessional,
  UserTypeClient,
  UserTypeContainer,
  DescriptionText,
} from './style';

const HowItWorks: React.FC = () => {
  const [user, setUser] = useState('professional');

  const handleClientUser = () => {
    if (user === 'professional') {
      setUser('client');
    }
  };

  const handleProfessionalUser = () => {
    if (user === 'client') {
      setUser('professional');
    }
  };

  return (
    <Container>
      <ButtonContainer>
        <Title>
          Como<TitleSpan> funciona?</TitleSpan>
        </Title>

        <UserTypeContainer>
          <UserTypeClient onClick={handleClientUser} user={user}>
            CLIENTES
          </UserTypeClient>
          <UserTypeProfessional onClick={handleProfessionalUser} user={user}>
            PROFISSIONAIS
          </UserTypeProfessional>
        </UserTypeContainer>

        <DescriptionText>
          Encontrar e contratar profissionais qualificados para os mais variados serviços nunca foi
          tão fácil, rápido e sem burocracia.
        </DescriptionText>
      </ButtonContainer>
      <CardsContainer>
        <HowItWorksCard
          icon={profileIllustration}
          description="Crie seu perfil gratuitamente e navegue nas categorias."
        />
        <HowItWorksCard
          icon={servicesIllustration}
          description="Procure os serviços que você deseja e solicite um orçamento."
        />
        <HowItWorksCard
          icon={offerIllustration}
          description="Receba propostas e feche negócios com os profissionais mais qualificados."
        />
      </CardsContainer>
    </Container>
  );
};

export default HowItWorks;
