import React, { useDebugValue, useState } from 'react';

import HowItWorksCard from '../howItWorksCard';

import { Container, ContainerButton, ButtonText } from './style';

import { Button } from '../Button';
import Link from 'next/link';

const RegisterButtonSession: React.FC = () => {
  return (
    <Container>
      <ContainerButton>
        <Link href="/RegisterUser">
          <Button variant={'primary'} height={'40px'} widthCircle={''} heightCircle={''}>
            <ButtonText>Quero me cadastrar</ButtonText>
          </Button>
        </Link>
      </ContainerButton>
    </Container>
  );
};

export default RegisterButtonSession;
