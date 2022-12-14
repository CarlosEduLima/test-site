import React from 'react';
import { CardLink, Container } from './styles';
import CardFirstSteps from './cardFirstSteps';
import perfil from '../../../assets/perfil.svg';
import boxW from '../../../assets/boxW.png';
import terms from '../../../assets/terms.png';
import Link from 'next/link';

const FirstSteps: React.FC = () => {
  return (
    <Container>
      <Link href="/cadastro">
        <CardLink>
          <CardFirstSteps src={perfil} alt="perfil" name="Crie seu perfil" />
        </CardLink>
      </Link>
      <Link href="/precos">
        <CardLink>
          <CardFirstSteps src={boxW} alt="circulo" name="Preços e moedas" />
        </CardLink>
      </Link>
      <Link href="/termos-de-uso">
        <CardLink>
          <CardFirstSteps src={terms} alt="Termos de Uso" name="Termos de Uso" />
        </CardLink>
      </Link>
    </Container>
  );
};

export default FirstSteps;
