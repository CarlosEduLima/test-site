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
  CategoriaText,
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
      questions: [
        {
          title: 'Como faço para comprar moedas?',
          response: 'Para comprar moedas, vá na aba de moedas para fazer uma compra',
        },
        {
          title: 'Porque preciso comprar moedas para aceitar um pedido?',
          response:
            'Para darmos confiança ao usuario de que você está realmente disposto a fazer o trabalho proposto',
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
          response:
            "Para abrir um serviço, vá na aba 'SERVIÇOS' escolha a categoria e sub-categoria e responda o questionario",
        },
      ],
    },
  ];

  const [value, setValue] = useState('');
  const [inCategoria, setInCategoria] = useState(0);

  console.log(categoriaItens.flatMap((item) => item.questions));

  const fullQuestions = categoriaItens.flatMap((item) => item.questions);
  const [filteredQuestions] = useState([]);

  const SearchQuestion = (valor = '') => {
    setValue(valor);
    const texto = valor;
    console.log(texto);
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
      if (filteredQuestions.length < 1) {
        console.log(filteredQuestions);
      }
    }
    if (texto.length === 0) {
      setInCategoria(0);
    }
  };

  return (
    <FAQFull>
      <FAQContainer>
        <Title size={25} style={{ margin: '20px 0' }}>
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
                <CategoriaText size={18}>{item.title}</CategoriaText>
              </Categoria>
            );
          })}
        </Categorias>
        {inCategoria === 0 ? (
          <Title size={28} style={{ margin: '20px 0 40px 0' }}>
            Primeiros passos para começar sua experiência IziW
          </Title>
        ) : inCategoria === 1 ? (
          <Title size={28} style={{ margin: '20px 0 40px 0' }}>
            Preços e Moedas
          </Title>
        ) : inCategoria === 2 && (
          <Title size={28} style={{ margin: '20px 0 40px 0' }}>
            Como Utilizar
          </Title>
        )}
        {value.length === 0 &&
          categoriaItens[inCategoria]?.questions.map((item) => (
            <Details key={item.title}>
              <Summary>{item.title}</Summary>
              <Text size={18} style={{ marginTop: '20px', lineHeight: '25px', cursor: 'text' }}>
                {item.response}
              </Text>
            </Details>
          ))}
        {value.length > 0 && filteredQuestions.map((item) => (
            <Details key={item.title}>
              <Summary>{item.title}</Summary>
              <Text size={18} style={{ marginTop: '20px', lineHeight: '25px', cursor: 'text' }}>
                {item.response}
              </Text>
            </Details>
        ))}
      </FAQContainer>
      {filteredQuestions.length < 1 && inCategoria < 0 && (
        <Title size={28} style={{ textAlign: 'center', }}>Não existe questões sobre esse assunto</Title>
      )}
    </FAQFull>
  );
};

export default FAQ;
