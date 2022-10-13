/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useEffect, useState } from 'react';
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
  const mockFaqCategories = [
    {
      id: 1,
      name: 'Primeiros passos',
      icon: Flag,
      description: 'Assuntos relacionados a conta',
      questions: [
        {
          id: 3,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
        {
          id: 10,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
        {
          id: 9,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
      ],
    },
    {
      id: 2,
      name: 'Preços e moedas',
      icon: Wvalues,
      description: 'Assuntos relacionados a conta',
      questions: [
        {
          id: 2,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
      ],
    },
    {
      id: 3,
      name: 'Como utilizar',
      icon: Flag,
      description: 'Assuntos relacionados a conta',
      questions: [
        {
          id: 4,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
      ],
    },
    {
      id: 1,
      name: 'Conta',
      icon: Flag,
      description: 'Assuntos relacionados a conta',
      questions: [
        {
          id: 5,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
      ],
    },
    {
      id: 1,
      name: 'Conta',
      icon: Interrogation,
      description: 'Assuntos relacionados a conta',
      questions: [
        {
          id: 6,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
      ],
    },
    {
      id: 1,
      name: 'Conta',
      icon: Flag,
      description: 'Assuntos relacionados a conta',
      questions: [
        {
          id: 7,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
        {
          id: 6,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
        {
          id: 8,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
        {
          id: 9,
          previous_answer: 'preview',
          question: 'Quais são as formas de pagamento que o app aceita?',
        },
      ],
    },
  ];

  const [value, setValue] = useState('');
  const [inCategoria, setInCategoria] = useState(0);

  const fullQuestions = mockFaqCategories.flatMap((item) => item.questions);
  const [filteredQuestions] = useState([]);

  const [data, setData] = useState([]);

  /*const getData = async () => {
    const response = await mockFaqCategories
    setData(response)
  }

  useEffect(() => {
    getData()
  }, [])*/

  const SearchQuestion = (valor = '') => {
    setValue(valor);
    const texto = valor;
    if (texto !== undefined && texto !== '') {
      filteredQuestions.splice(0);
      setInCategoria(-1);
      for (const question of fullQuestions) {
        if (
          question.previous_answer.toLowerCase().includes(texto.toLowerCase()) ||
          question.question.toLowerCase().includes(texto.toLowerCase())
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
        <Title size={25} className="search">
          Como podemos <span>ajudar?</span>
        </Title>
        <Search>
          <Input
            placeholder="Escreva aqui sua dúvida"
            onKeyUp={(e: any) => {
              SearchQuestion(e.target.value);
            }}
          />
          <SearchButton onClick={() => SearchQuestion(value)} src={SearchBtn} alt="Search" />
        </Search>
      </SearchContainer>
      <FAQContainer>
        <Text className="categoria" size={25}>
          Ou escolha uma categoria relacionada à sua dúvida
        </Text>
        <Categorias>
          {data.map((item) => {
            return (
              <Categoria key={item.name} border={item.id === inCategoria ? '#373AAD' : '#FFF'}>
                <PortaIcons>
                  <Icon key={item.name} src={item.icon} alt={item.name} />
                </PortaIcons>
                <CategoriaText size={22}>{item.description}</CategoriaText>
              </Categoria>
            );
          })}
        </Categorias>
      </FAQContainer>
      <CategoryTextContainer>
        <CategoryText size={28}>Outros</CategoryText>
      </CategoryTextContainer>
    </FAQFull>
  );
};

export default FAQ;
