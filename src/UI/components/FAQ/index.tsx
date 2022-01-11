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
  SearchContainer,
  Details,
  Summary,
  PortaIcons,
  CategoriaText,
  CategoryTextContainer,
  CategoryText,
} from './styles';

import Flag from '../../../assets/flag.svg';
import Wvalues from '../../../assets/wvalues.svg';
import Interrogation from '../../../assets/interrogation.svg';
import SearchBtn from '../../../assets/searchBtn.svg';

const FAQ: React.FC = () => {
  const categoriaItens = [
    {
      id: 0,
      icon: Flag,
      title: 'Primeiros passos',
      categoryText: 'Primeiros passos para começar sua experiência IziW',
      questions: [
        {
          title: 'Como eu crio meu perfil?',
          response:
            'Para criar seu perfil, entra na aba de Registo ou clique aqui e você poderá criar sua conta aqui',
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
      categoryText: 'Preços e moedas',
      questions: [
        {
          title: 'Como faço para comprar moedas?',
          response: 'Para comprar moedas, vá na aba de moedas para fazer uma compra',
        },
        {
          title: 'Porque preciso comprar moedas para aceitar um pedido?',
          response:
            'Para darmos confiança ao usuario de que você está realmente disposto a fazer o trabalho proposto, por isso é necessario comprar moedas',
        },
      ],
    },
    {
      id: 2,
      icon: Interrogation,
      title: 'Como utilizar',
      categoryText: 'Como utilizar',
      questions: [
        {
          title: 'Como aceitar um pedido',
          response: "No app, vá em 'Orçamentos' e lá aparecerá todos os pedidos abertos",
        },
        {
          title: 'Como abrir um serviço?',
          response:
            "Para abrir um serviço, vá na aba 'Serviços' escolha a categoria e sub-categoria e responda o questionario",
        },
      ],
    },
  ];

  const [value, setValue] = useState('');
  const [inCategoria, setInCategoria] = useState(0);

  const fullQuestions = categoriaItens.flatMap((item) => item.questions);
  const [filteredQuestions] = useState([]);

  const SearchQuestion = (valor = '') => {
    setValue(valor);
    const texto = valor;
    if (texto !== undefined && texto !== '') {
      filteredQuestions.splice(0);
      setInCategoria(-1);
      for (const question of fullQuestions) {
        if (
          question.response.toLowerCase().includes(texto.toLowerCase()) ||
          question.title.toLowerCase().includes(texto.toLowerCase())
        ) {
          filteredQuestions.push(question);
        }
      }
    }
    if (texto.length === 0) {
      setInCategoria(0);
    }
  };

  return (
    <FAQFull>
      <SearchContainer>
        <Title size={25} style={{ margin: '20px 0', color: '#fff' }}>
          Como podemos <span>ajudar?</span>
        </Title>
        <Search>
          <Input
            placeholder="Escreva aqui sua dúvida"
            onKeyUp={(e) => {
              SearchQuestion(e.target.value);
            }}
          />
          <SearchButton onClick={() => SearchQuestion(value)} src={SearchBtn} alt="Search" />
        </Search>
      </SearchContainer>
      {value.length < 1 && (
        <>
          <FAQContainer>
            <Text style={{ marginTop: '40px' }} size={25}>
              Ou escolha uma categoria relacionada à sua dúvida
            </Text>
            <Categorias>
              {categoriaItens.map((item) => {
                return (
                  <Categoria
                    key={item.title}
                    onClick={() => {
                      filteredQuestions.splice(0);
                      setValue('');
                      setInCategoria(item.id);
                    }}
                    border={item.id === inCategoria ? '#373AAD' : '#FFF'}>
                    <PortaIcons>
                      <Icon key={item.title} src={item.icon} alt={item.title} />
                    </PortaIcons>
                    <CategoriaText size={22}>{item.title}</CategoriaText>
                  </Categoria>
                );
              })}
            </Categorias>
          </FAQContainer>
          <CategoryTextContainer>
            {categoriaItens[inCategoria]?.categoryText !== undefined ? (
              <CategoryText size={28}>{categoriaItens[inCategoria]?.categoryText}</CategoryText>
            ) : (
              <CategoryText size={28}>Outros</CategoryText>
            )}
          </CategoryTextContainer>
        </>
      )}
      <FAQContainer>
        {value.length === 0 &&
          categoriaItens[inCategoria]?.questions.map((item) => (
            <Details key={item.title}>
              <Summary>{item.title}</Summary>
              <Text size={16} style={{ marginTop: '20px', lineHeight: '25px', cursor: 'text' }}>
                {item.response}
              </Text>
            </Details>
          ))}
        {value.length > 0 && filteredQuestions.map((item) => (
          <Details key={item.title}>
            <Summary>{item.title}</Summary>
            <Text size={16} style={{ marginTop: '20px', cursor: 'text' }}>
              {item.response}
            </Text>
          </Details>
        ))}
      </FAQContainer>
      
      {filteredQuestions.length < 1 && inCategoria < 0 && (
        <Title size={28} style={{ textAlign: 'center' }}>
          Não existe questões sobre esse assunto
        </Title>
      )}
    </FAQFull>
  );
};

export default FAQ;
