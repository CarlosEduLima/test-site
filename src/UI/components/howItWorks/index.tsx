import React, { useDebugValue, useState } from 'react';

import HowItWorksCard from '../howItWorksCard';

import profileClientIllustration from '../../../assets/profileClientIllustration.svg';
import offerClientIllustration from '../../../assets/offerClientIllustration.svg';
import profileIllustration from '../../../assets/profileIllustration.svg';
import servicesIllustration from '../../../assets/servicesIllustration.svg';
import offerIllustration from '../../../assets/offerIllustration.svg';

import {
  Container,
  ButtonContainer,
  Title,
  TitleSpan,
  UserTypeProfessional,
  UserTypeClient,
  UserTypeContainer,
  DescriptionText,
  UserProfileProfessional,
  UserProfileClient,
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
          Encontrar e contratar profissionais qualificados para os mais variados serviços nunca foi tão fácil, rápido e sem burocracia.
        </DescriptionText>
      </ButtonContainer>

      <UserProfileClient user={user}>
        <HowItWorksCard
          icon={profileClientIllustration}
          description="Crie seu perfil gratuitamente e navegue nas categorias."
        />
        <HowItWorksCard
          icon={servicesIllustration}
          description="Procure os serviços que você deseja e solicite um orçamento."
        />
        <HowItWorksCard
          icon={offerClientIllustration}
          description="Receba propostas e feche negócios com os profissionais mais qualificados."
        />
      </UserProfileClient>
      <UserProfileProfessional user={user}>
        <HowItWorksCard
          icon={profileIllustration}
          description="Crie seu perfil gratuitamente e navegue nas categorias."
        />
        <HowItWorksCard
          icon={servicesIllustration}
          description="Procure os serviços que você deseja realizar e negocie um orçamento."
        />
        <HowItWorksCard
          icon={offerIllustration}
          description="Envie propostas e feche negócios com clientes."
        />
      </UserProfileProfessional>


    </Container>
  );
};

export default HowItWorks;
