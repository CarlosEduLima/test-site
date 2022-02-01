import React from 'react';
import { Container } from './styles';
import CardFirstSteps from './cardFirstSteps';
import perfil from '../../../assets/perfil.svg';
import boxW from '../../../assets/boxW.png';
import terms from '../../../assets/terms.png';

const FirstSteps: React.FC = () => {
  return (
    <Container>
      <CardFirstSteps src={perfil} alt="perfil" name="Crie seu perfil" />
      <CardFirstSteps src={boxW} alt="circulo" name="Preços e moedas" />
      <CardFirstSteps src={terms} alt="Termos de Uso" name="Termos de Uso" />
    </Container>
  );
};

export default FirstSteps;
