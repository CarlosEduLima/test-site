/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useState } from 'react';
import {
  FAQFull,
  Title,
  Search,
  Input,
  SearchButton,
  SearchContainer,
  Container,
  ButtonBack,
  BoxBack,
  IconBack,
  TitleQuestion,
  UL,
  LI,
  SubTitle,
  ContentTitle,
  ContentQuestions,
  Label,
} from './styles';

import Flag from '../../../assets/flag.svg';
import Wvalues from '../../../assets/wvalues.svg';
import Interrogation from '../../../assets/interrogation.svg';
import SearchBtn from '../../../assets/searchBtn.svg';
import GoBackIcon from '../../../assets/goBack.svg';
import HelpIcon from '../../../assets/help.svg';
import { Button } from '../Button';

const ViewAnswer: React.FC = () => {
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

  const listQuestion = [
    {
      id: 1,
      title: '1. Acesse a aba “Izicoins” no menu inferior;',
    },
    {
      id: 2,
      title: '2. Selecione o pacote desejado;',
    },
    {
      id: 3,
      title: '3. Selecione a forma de pagamento e o parcelamento;',
    },
    {
      id: 4,
      title: '4. Confirme as informações e finalize o pagamento.',
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
    <>
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
      </FAQFull>
      <Container>
        <BoxBack>
          <IconBack src={GoBackIcon} alt="teste" />
          <ButtonBack>Voltar à página inicial de ajuda</ButtonBack>
        </BoxBack>
        <TitleQuestion>Lorem ipsum dolor sit amet</TitleQuestion>
        <SubTitle>Método 1 </SubTitle>
        <ContentTitle>{/* adcionar texto */}</ContentTitle>
        {listQuestion.map((i: any) => {
          return (
            <UL key={i.id}>
              <LI>{i.title}</LI>
            </UL>
          );
        })}
        <SubTitle> Método 2</SubTitle>
        {listQuestion.map((i: any) => {
          return (
            <UL key={i.id}>
              <LI>{i.title}</LI>
            </UL>
          );
        })}
        <ContentTitle>{/* adcionar texto */}</ContentTitle>
        <hr />
        <BoxBack>
          <IconBack src={HelpIcon} alt="help" />
          <ContentQuestions>
            <Label>Este artigo te ajudou?</Label>
            <Button variant={'primary'} widthCircle={''} heightCircle="10px">
              SIM
            </Button>
            <Button variant={'secondary'} widthCircle={''} heightCircle="10px">
              NÃO
            </Button>
          </ContentQuestions>
        </BoxBack>
      </Container>
    </>
  );
};

export default ViewAnswer;
