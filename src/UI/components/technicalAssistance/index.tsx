import React from 'react';
import { Container } from './styles';
import { InputContent } from './input';
import { TitleContact } from './title';
import { ButtonConfirm } from './button';

export const TechnicalAssistance: React.FC = () => {
  return (
    <Container>
      <TitleContact />
      <p>-------------Componente barra de progresso-------------</p>
      <InputContent
        title="Qual o email de contato?"
        placeholderText="email@serviço.com"
        icon="email"
      />
      <InputContent
        title="Qual o telefone de contato?"
        description="Essa informação é só para completar seu cadastro, não forneceremos a ninguém, fique tranquilo!"
        placeholderText="(DDD) 00000-0000"
        icon="phone"
      />
      <ButtonConfirm text="Próximo" marginTop="on" />
    </Container>
  );
};
