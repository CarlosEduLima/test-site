import React from 'react';
import {
  FAQFull,
  FAQContainer,
  Title,
  Categorias,
  Categoria,
  Text,
  Icon,
  Search,
  Input,
  SearchButton,
  Details,
  Summary,
} from './styles';

import icone from '../../../assets/icon.png';

const FAQ = () => {

  const categoriaItens = [
    {
      icon: icone,
      title: 'Primeiros passos',
    },
    {
      icon: '${ICON}',
      title: 'Preços e moedas',
    },
    {
      icon: '${ICON}',
      title: 'Como utilizar',
    },
  ];

  return (
    <FAQFull>
      <FAQContainer>
        <Title size={25}>Como podemos <span>ajudar?</span></Title>
        <Search>
          <Input placeholder="Escreva aqui sua dúvida" />
          <SearchButton src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png" alt="Search" />
        </Search>
        <Text style={{ marginTop: '40px'}} size={25}>Ou escolha uma categoria relacionada à sua dúvida</Text>
        <Categorias>
          {categoriaItens.map(item => (
            <Categoria key={item.title}>
              <Icon key={item.title} src='https://imagepng.org/wp-content/uploads/2019/08/google-icon.png' alt={item.title} />
              <Text size={18}>{item.title}</Text>
            </Categoria>
          ))}
        </Categorias>
        <Title size={30}>Primeiros passos para começar sua experiência IziW</Title>
        <Details>
          <Summary>Como eu crio meu perfil?</Summary>
          <Text size={18}>Para criar seu perfil, entra na aba de <span>Registo</span> ou clique aqui e você poderá criar sua conta aqui</Text>
        </Details>
        <Details>
          <Summary>Como eu crio meu perfil?</Summary>
          <Text size={18}>Para criar seu perfil, entra na aba de <span>Registo</span> ou clique aqui e você poderá criar sua conta aqui</Text>
        </Details>
      </FAQContainer>
    </FAQFull>
  );
};

export default FAQ;
