import React, { useState } from 'react';
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
  PortaIcons,
} from './styles';

import Flag from '../../../assets/flag.svg';
import Wvalues from '../../../assets/wvalues.svg';
import Interrogation from '../../../assets/interrogation.svg';
import SearchBtn from '../../../assets/searchBtn.svg';

const FAQ = () => {

  const categoriaItens = [
    {
      id: 0,
      icon: Flag,
      title: 'Primeiros passos',
      questions: [
        {
          title: 'Como eu crio meu perfil?',
          response: 'Para criar seu perfil, entra na aba de Registo ou clique aqui e você poderá criar sua conta aqui',
        },
        {
          title: 'Preciso baixar o aplicativo?',
          response: 'Sim, a experiencia Iziw fica ainda melhor no nosso aplicativo',
        },
      ],
    },
    {
      id: 1,
      icon: Wvalues,
      title: 'Preços e moedas',
      questions: [
        {
          title: 'Como faço para comprar moedas?',
          response: 'Para comprar moedas, vá na aba de moedas para fazer uma compra',
        },
        {
          title: 'Porque preciso comprar moedas para aceitar um pedido?',
          response: 'Para darmos confiança ao usuario de que você está realmente disposto a fazer o trabalho proposto',
        },
      ],
    },
    {
      id: 2,
      icon: Interrogation,
      title: 'Como utilizar',
      questions: [
        {
          title: 'Como aceitar um pedido',
          response: "No app, vá em 'ORÇAMENTOS' e lá aparecerá todos os pedidos abertos",
        },
        {
          title: 'Como abrir um serviço?',
          response: "Para abrir um serviço, vá na aba 'SERVIÇOS' escolha a categoria e sub-categoria e responda o questionario",
        },
      ],
    },
  ];

  const [value, setValue] = useState('');
  const [inCategoria, setInCategoria] = useState(0);

  const fullQuestions = categoriaItens.flatMap((item) => item.questions);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const SearchQuestion = () => {
    setFilteredQuestions([]);
    setInCategoria(-1);
    if (value !== undefined && value.trim() !== '') { //? VERIFICA SE O 'value' é um valor valido.
      for (const question of fullQuestions) { //? PERCORRE TODAS AS QUESTOES DE 'fullQuestions'.
        if (question.response.includes(value.trim()) || question.title.includes(value.trim())) { //? VERIFICA SE O 'fullQuestion' tem o valor do input.
          setFilteredQuestions([...filteredQuestions, question]);
        }
      }
    }
  };

  return (
    <FAQFull>
      <FAQContainer>
        <Title size={25} style={{ margin: '20px 0' }}>
          Como podemos <span>ajudar?</span>
        </Title>
        <Search>
          <Input placeholder="Escreva aqui sua dúvida" onChange={(e) => {
            setValue(e.target.value);
            SearchQuestion();
          }} />
          <SearchButton
            onClick={SearchQuestion}
            src={SearchBtn}
            alt="Search"
          />
        </Search>
        <Text style={{ marginTop: '40px' }} size={25}>
          Ou escolha uma categoria relacionada à sua dúvida
        </Text>
        <Categorias>
          {categoriaItens.map((item) => {
            return (
              <Categoria
                key={item.title}
                onClick={() => {
                  setValue('');
                  setInCategoria(item.id);
                }}
                border={item.id === inCategoria ? '#373AAD' : '#FFF'}>
                <PortaIcons>
                  <Icon key={item.title} src={item.icon} alt={item.title} />
                </PortaIcons>
                <Text size={18}>{item.title}</Text>
              </Categoria>
            );
          })}
        </Categorias>
        <Title size={28} style={{ margin: '20px 0 40px 0' }}>
          Primeiros passos para começar sua experiência IziW
        </Title>
        {value.length === 0 && categoriaItens[inCategoria]?.questions.map((item) => (
          <Details>
            <Summary>{item.title}</Summary>
            <Text
              size={18}
              style={{ marginTop: '20px', lineHeight: '25px', cursor: 'text' }}>
              {item.response}
            </Text>
          </Details>
        ))}
        {value.length > 0 && filteredQuestions.map((item) => (
          <Details>
            <Summary>{item.title}</Summary>
            <Text
              size={18}
              style={{ marginTop: '20px', lineHeight: '25px', cursor: 'text' }}>
              {item.response}
            </Text>
          </Details>
        ))}
      </FAQContainer>
    </FAQFull>
  );
};

export default FAQ;




          // <Details>
          //   <Summary>Como eu crio meu perfil?</Summary>
          //   <Text
          //     size={18}
          //     style={{ marginTop: '20px', lineHeight: '25px', cursor: 'text' }}>
          //     Para criar seu perfil, entra na aba de Registo ou clique aqui e você poderá criar sua conta aqui
          //   </Text>
          // </Details>
