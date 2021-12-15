import React from 'react';

import {
  FooterContainer,
  FooterUp,
  FooterDown,
  TextUp,
  TextDown,
  FooterSection,
  FooterList,
} from './styles';

const Footer = () => {
  const categoriasItens = [
    'Assistência Técnica',
    'Auto',
    'Aulas',
    'Consultorias',
    'Design e Tecnologia',
    'Eventos',
    'Moda e Beleza',
    'Reformas',
    'Saúde',
    'Serviços Domésticos',
  ];
  return (
    <FooterContainer>
      <FooterUp>
        <FooterSection>
          <TextUp>Categorias</TextUp>
          <FooterList>
            {categoriasItens.map(item => <TextDown>{item}</TextDown>)}
          </FooterList>
        </FooterSection>
      </FooterUp>
      <FooterDown></FooterDown>
    </FooterContainer>
  )
};

export default Footer;
